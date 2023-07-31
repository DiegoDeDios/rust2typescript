
import init, {addition, substraction, factorial} from "calc-lib";
import { useEffect, useState } from "react";

interface CalculationProps {
    x:number,
    y:number
}

export default function Calculation({x, y}: CalculationProps){

    const [addRes, setAddRes] = useState<number>(0);
    const [subRes, setSubRes] = useState<number>(0);
    const [factRes, setFactRes] = useState<number>(0);

    useEffect(()=>{
        init().then(()=>{
            const add = addition(x,y)
            const res = substraction(x,y)
            const fact = factorial(x);
            setAddRes(add);
            setSubRes(res);
            setFactRes(fact);
        })
    }, [])

    return (
        <>
        <p>Numbers: x:{x},y:{y}</p>
        <p>Sum called from Rust: {addRes}</p>
        <p>Substraction called from Rust: {subRes}</p>
        <p>Factorial called from Rust: {factRes}</p>
        </>
    )
}