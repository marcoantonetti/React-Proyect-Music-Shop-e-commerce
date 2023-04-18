import { useState } from "react";


export const useCount = (initial = 0, max, min) =>{

    if(initial < min || initial > max) initial = min;
    if(max > 20) max = 20

    const [count, setCount] = useState(initial);


    const decrement = () => {

        if (count > min) {

            setCount(prev => prev -1)
            
        }
        
    }

    const increment = () => {

        if(count < max) {

            setCount(prev => prev + 1)
        }

    }

    const reset = () => {

        setCount(initial)

    }

    return {count, decrement, increment, reset}

}