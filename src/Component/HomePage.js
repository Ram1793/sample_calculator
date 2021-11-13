import React from 'react'
import { useState } from 'react'
import "./HomePage.css"

function HomePage() {

    const [number, setNumber] = useState("")
    const [number1, setNumber1] = useState("")

    // const [ans, setans] = useState("")
    const screen = (cal) => { setNumber(number + cal) }

    const enter = (e) => {
        e.preventDefault();
        let X = number.toString();
        let Y = eval(X).toString();
        setNumber(Y); 
        setNumber1(X); 
        // setans(Y)
    }

    const clr = () => {
        setNumber("")
    }
    const ram = (e) => {
        setNumber(e.target.value)
    }
console.log("chalo", number)
    return (
        <div>
            <div className="Calculator">
                <h1>Calculator</h1>
                <form>
                <h2>{number1}</h2>
                <input type="text" id="Demo" value={number} onChange={ram} />
                    <table>
                       <tbody>
                       <tr>
                            <td> <button type="button" onClick={() => screen('(')}>(</button> </td>
                            <td> <button type="button" onClick={() => screen(')')}>)</button> </td>
                            <td> <button type="button" onClick={() => clr()}>C</button> </td>
                            <td> <button type="button" onClick={() => screen('*')}>*</button> </td>
                        </tr>
                        <tr>
                            <td> <button type="button" onClick={() => screen('7')}>7</button> </td>
                            <td> <button type="button" onClick={() => screen('8')}>8</button> </td>
                            <td> <button type="button" onClick={() => screen('9')}>9</button> </td>
                            <td> <button type="button" onClick={() => screen('/')}>/</button> </td>
                        </tr>
                        <tr>
                            <td> <button type="button" onClick={() => screen('4')}>4</button> </td>
                            <td> <button type="button" onClick={() => screen('5')}>5</button> </td>
                            <td> <button type="button" onClick={() => screen('6')}>6</button> </td>
                            <td> <button type="button" onClick={() => screen('+')}>+</button> </td>
                        </tr>
                        <tr>
                            <td> <button type="button" onClick={() => screen('1')}>1</button> </td>
                            <td> <button type="button" onClick={() => screen('2')}>2</button> </td>
                            <td> <button type="button" onClick={() => screen('3')}>3</button> </td>
                            <td> <button type="button" onClick={() => screen('-')}>-</button> </td>
                        </tr>
                        <tr>
                            <td> <button type="button" onClick={() => screen('0')} id="zero">0</button> </td>
                            <td> <button type="button" onClick={() => screen('.')} id="dot">.</button> </td>
                            <td colSpan="2"> <button type="submit" onClick={enter} id="equals">=</button> </td>
                        </tr>
                       </tbody>
                    </table>
                </form>
            </div>
        </div>
    )
}

export default HomePage
