import { useEffect, useState } from "react";
import { REGEX } from "../constants/regex";

export const useInput = (property) => {
    const [ value, setValue ] = useState('');
    const [ message, setMessage ] = useState(null);

    const onChangeHandler = (e) => {
        setValue(() =>  e.target.value);
    }

    useEffect(() => {
        if(!value) {
            setMessage(null);
            return;
        }

        const regex = REGEX[property];
        if (regex.regexr.test(value)) {
            setMessage({
                type: 'SUCCESS',
                text: `사용가능한 ${regex.name} 입니다.`
            });
        } else {
            setMessage({
                type: 'ERROR',
                text: regex.text
            });
        }

       
    }, [value]);

    return {value, setValue, message, setMessage, onChangeHandler};
}