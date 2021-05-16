import { useState } from "react";

const useContextMenu = () => {
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const onShow = (event) => {
        event.preventDefault();
        setShow(true);
        setPosition({ x: event.pageX, y: event.pageY });
    };

    const onHide = () => {
        setShow(false);
    };

    return {
        show,
        position,
        onShow,
        onHide,
    };
};

export default useContextMenu;
