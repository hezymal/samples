import { useEffect } from "react";
import { getBodyElement } from "ui/utils/browser";

const useBodyMouseUp = (callback, deps) => {
    useEffect(() => {
        const handleBodyMouseUp = (event) => callback(event);
        const bodyElement = getBodyElement();
        
        bodyElement.addEventListener("mouseup", handleBodyMouseUp);
        return () => {
            bodyElement.removeEventListener("mouseup", handleBodyMouseUp);
        };
    }, [callback, deps]);
};

export default useBodyMouseUp;
