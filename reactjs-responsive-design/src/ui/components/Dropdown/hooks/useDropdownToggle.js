import { useState } from "react";
import useBodyEventListener from "ui/hooks/useBodyEventListener";

const useDropdownToggle = () => {
    const [toggle, setToggle] = useState(false);

    useBodyEventListener('click', () => {
        if (toggle) {
            setToggle(false);
        }
    }, [toggle, setToggle]);

    useBodyEventListener('contextmenu', () => {
        if (toggle) {
            setToggle(false);
        }
    }, [toggle, setToggle]);

    return [toggle, setToggle];
};

export default useDropdownToggle;
