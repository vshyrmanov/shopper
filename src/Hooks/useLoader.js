import React, {useEffect, useState} from "react";


export const useLoader = () => {
    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise((r) => setTimeout(r, 500));
            setIsLoader(!isLoader);
        };

        loadData();
    }, [])

    return { isLoader }
}