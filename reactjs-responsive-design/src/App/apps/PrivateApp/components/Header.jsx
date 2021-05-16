import React from "react";
import styled from "styled-components";
import Logo from "App/components/Logo";
import Dropdown, { DropdownItem } from "ui/components/Dropdown";
import Link from "ui/components/Link";
import NavBar from "ui/components/NavBar";
import UserLogo from "./UserLogo";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const UserMenuToggle = styled(UserLogo)`
    margin-top: -8px;
`;

const Header = ({ userName }) => {
    return (
        <Container>
            <Logo />
            <NavBar>
                <NavBar.Item>
                    <Link exact to="/">Dashboard</Link>
                </NavBar.Item>
                <NavBar.Item>
                    <Link to="/sprints">Sprints</Link>
                </NavBar.Item>
                <NavBar.Item>
                    <Link to="/workplace">Workplace</Link>
                </NavBar.Item>
            </NavBar>
            <Dropdown
                toggle={<UserMenuToggle userName={userName} />}
                direction="right"
            >
                <DropdownItem>
                    <Link to="/profile">Profile</Link>
                </DropdownItem>
                <DropdownItem>
                    <Link to="/logout">Log Out</Link>
                </DropdownItem>
            </Dropdown>
        </Container>
    );
};

export default Header;
