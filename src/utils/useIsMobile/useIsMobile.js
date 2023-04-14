import {useEffect, useState} from "react";
import debounce from "../debounce/debounce";


const useIsMobile = () => {
    const getIsMobile = () => window.innerWidth < 562;
    const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {
        const processChange = debounce(() =>  setIsMobile(getIsMobile()), 100);

        window.addEventListener('resize', processChange);
        processChange();
        return () => window.removeEventListener('resize', processChange);
    }, []);

    return isMobile;
};
export default useIsMobile;