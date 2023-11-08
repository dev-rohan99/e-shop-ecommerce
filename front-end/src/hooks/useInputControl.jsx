import { useState } from "react";


const useInputControl = (initialState) => {

    const [input, setInput] = useState(initialState);

    const handleInputChange = (event) => {
        setInput((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value
        }));
    }

    return { input, setInput, handleInputChange };
}

export default useInputControl;
