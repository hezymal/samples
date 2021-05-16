import React, { Component, createRef } from "react";
import styled from "styled-components";
import { grey4, purple1 } from "ui/styles/colors";
import { paddingSize } from "ui/styles/sizes";

const Block = styled.div`
    display: grid;
    grid-template-rows: auto;
    height: 100%;
`;

const LeftContent = styled.div`
    grid-column: 1;
    grid-row: 1;
    padding: ${paddingSize}px;
    overflow: auto;
`;

const LeftDivider = styled.div`
    position: absolute;
    top: 0;
    left: -3px;
    width: 6px;
    height: 100%;
    cursor: col-resize;
    background-color: ${purple1};
    opacity: 0;
    transition: 0.5s opacity;
    user-select: none;

    &:hover {
        opacity: 1;
    }
`;

const MiddleContent = styled.div`
    position: relative;
    grid-row: 1;
    padding: ${paddingSize}px;
    border-left: 1px solid ${grey4};
    border-right: 1px solid ${grey4};
`;

const RightContent = styled.div`
    grid-column: 3;
    grid-row: 1;
    padding: ${paddingSize}px;
    overflow: auto;
`;

const RightDivider = styled.div`
    position: absolute;
    top: 0;
    right: -3px;
    width: 6px;
    height: 100%;
    cursor: col-resize;
    background-color: ${purple1};
    opacity: 0;
    transition: 0.5s opacity;
    user-select: none;

    &:hover {
        opacity: 1;
    }
`;

const DIVIDER_MIN_WIDTH = 20;
const DEFAULT_DIVIDER_WIDTH = 200;

class FlexibleLayout extends Component {
    constructor(props) {
        super(props);

        this.blockRef = createRef();
        this.middleContentRef = createRef();

        this.leftDividerX = null;
        this.leftDividerWidth = props.leftDividerWidth ?? DEFAULT_DIVIDER_WIDTH;
        this.actualLeftDividerWidth = this.leftDividerWidth;
        this.handleLeftDividerMouseDown =
            this.handleLeftDividerMouseDown.bind(this);

        this.rightDividerX = null;
        this.rightDividerWidth =
            props.rightDividerWidth ?? DEFAULT_DIVIDER_WIDTH;
        this.actualRightDividerWidth = this.rightDividerWidth;
        this.handleRightDividerMouseDown =
            this.handleRightDividerMouseDown.bind(this);

        this.refreshBlockWidth = this.setContentsSizes.bind(this);
        this.calculateDividerWidth = this.calculateDividerWidth.bind(this);
        this.handleDocumentMouseMove = this.handleDocumentMouseMove.bind(this);
        this.handleDocumentMouseUp = this.handleDocumentMouseUp.bind(this);
    }

    setContentsSizes(leftDividerWidth, rightDividerWidth) {
        if (!this.blockRef.current || !this.middleContentRef.current) {
            return;
        }

        let blockColumns = "auto";
        let middleContentColumn = "1 / 3";

        if (this.props.left) {
            blockColumns = `${leftDividerWidth}px ${blockColumns}`;
            middleContentColumn = "2 / 3";
        }

        if (this.props.right) {
            blockColumns = `${blockColumns} ${rightDividerWidth}px`;
            middleContentColumn = "1 / 2";
        }

        if (this.props.left && this.props.right) {
            middleContentColumn = "2";
        }

        this.blockRef.current.style.gridTemplateColumns = blockColumns;
        this.middleContentRef.current.style.gridColumn = middleContentColumn;
    }

    calculateDividerWidth(mouseX, dividerX, dividerWidth, direction = -1) {
        const result = dividerWidth + (mouseX - dividerX) * direction;
        return result < DIVIDER_MIN_WIDTH ? DIVIDER_MIN_WIDTH : result;
    }

    handleLeftDividerMouseDown(event) {
        this.leftDividerWidth = this.actualLeftDividerWidth;
        this.leftDividerX = event.pageX;
    }

    handleRightDividerMouseDown(event) {
        this.rightDividerWidth = this.actualRightDividerWidth;
        this.rightDividerX = event.pageX;
    }

    handleDocumentMouseMove(event) {
        let wasChanged = false;

        if (this.rightDividerX !== null) {
            this.actualRightDividerWidth = this.calculateDividerWidth(
                event.pageX,
                this.rightDividerX,
                this.rightDividerWidth
            );
            wasChanged = true;
        }

        if (this.leftDividerX !== null) {
            this.actualLeftDividerWidth = this.calculateDividerWidth(
                event.pageX,
                this.leftDividerX,
                this.leftDividerWidth,
                +1
            );
            wasChanged = true;
        }

        if (wasChanged) {
            this.setContentsSizes(
                this.actualLeftDividerWidth,
                this.actualRightDividerWidth
            );
        }
    }

    handleDocumentMouseUp(event) {
        let wasChanged = false;

        if (this.rightDividerX !== null) {
            this.actualRightDividerWidth = this.calculateDividerWidth(
                event.pageX,
                this.rightDividerX,
                this.rightDividerWidth
            );
            this.rightDividerWidth = this.actualRightDividerWidth;
            this.rightDividerX = null;

            wasChanged = true;
        }

        if (this.leftDividerX !== null) {
            this.actualLeftDividerWidth = this.calculateDividerWidth(
                event.pageX,
                this.leftDividerX,
                this.leftDividerWidth,
                +1
            );
            this.leftDividerWidth = this.actualLeftDividerWidth;
            this.leftDividerX = null;

            wasChanged = true;
        }

        if (wasChanged) {
            this.setContentsSizes(
                this.actualLeftDividerWidth,
                this.actualRightDividerWidth
            );
        }
    }

    render() {
        const { left, children, right } = this.props;

        return (
            <Block ref={this.blockRef}>
                {left && <LeftContent>{left}</LeftContent>}
                <MiddleContent ref={this.middleContentRef}>
                    {left && (
                        <LeftDivider
                            onMouseDown={this.handleLeftDividerMouseDown}
                        />
                    )}
                    {children}
                    {right && (
                        <RightDivider
                            onMouseDown={this.handleRightDividerMouseDown}
                        />
                    )}
                </MiddleContent>
                {right && <RightContent>{right}</RightContent>}
            </Block>
        );
    }

    componentDidMount() {
        document.addEventListener("mousemove", this.handleDocumentMouseMove);
        document.addEventListener("mouseup", this.handleDocumentMouseUp);
        this.setContentsSizes(
            this.actualLeftDividerWidth,
            this.actualRightDividerWidth
        );
    }

    componentWillUnmount() {
        document.removeEventListener("mousemove", this.handleDocumentMouseMove);
        document.removeEventListener("mouseup", this.handleDocumentMouseUp);
    }
}

export default FlexibleLayout;
