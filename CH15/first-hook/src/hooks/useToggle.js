import { useState } from "react";

function useToggle(initalValue = false){
    const [value, setValue] = useState([]);

    function toggle(){
        setValue((prev) => !prev)
    }

    return [value, toggle];

}

export default useToggle;