import { useState } from "react";


export const useCount = (initial = 0, max, min) =>{

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

        setCount(1)

    }

    let inicial = count;
    return {inicial, count, decrement, increment, reset}

}