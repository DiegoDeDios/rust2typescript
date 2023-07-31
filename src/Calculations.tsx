
import init, {addition} from "calc-lib";
import { useEffect, useState } from "react";

interface CalculationProps {
    x:number,
    y:number
}

export default function Calculation({x, y}: CalculationProps){

    const [addRes, setAddRes] = useState<number>(0);

    useEffect(()=>{
        init().then(()=>{
            const add = addition(x,y)
            setAddRes(add);
        })
    }, [])

    return (
        <>
        <p>Numbers: x:{x},y:{y}</p>
        <p>Sum called from Rust: {addRes}</p>
        </>
    )
}