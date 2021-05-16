import { useEffect } from "react";
import { getBodyElement } from "ui/utils/browser";

const useBodyEventListener = (eventName, callback, deps) => {
    useEffect(() => {
        const handleEvent = (event) => callback(event);
        const bodyElement = getBodyElement();

        bodyElement.addEventListener(eventName, handleEvent);
        return () => {
            bodyElement.removeEventListener(eventName, handleEvent);
        };
    }, [callback, eventName, deps]);
};

export default useBodyEventListener;
