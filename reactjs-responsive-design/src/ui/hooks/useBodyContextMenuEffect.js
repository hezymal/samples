import { useEffect } from "react";
import { getBodyElement } from "ui/utils/browser";

const useBodyClickEffect = (callback, deps) => {
    useEffect(() => {
        const handleBodyContextMenu = (event) => callback(event);
        const bodyElement = getBodyElement();
        
        bodyElement.addEventListener("contextmenu", handleBodyContextMenu);
        return () => {
            bodyElement.removeEventListener("contextmenu", handleBodyContextMenu);
        };
    }, [callback, deps]);
};

export default useBodyClickEffect;
