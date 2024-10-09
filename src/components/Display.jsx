import React, { useState } from 'react'
import Button from './Button'

const Display = () => {

    const [num, setNum] = useState(0)
    return (
        <div className="main">
            <div className="show-num">
            {num}
            </div>
            <div className="btn-container">
                <Button type={"Add"} num={num} setNum={setNum}/>
                <Button type={"Reset"} num={num} setNum={setNum}/>
                <Button type={"Subtract"} num={num} setNum={setNum}/>
            </div>
        </div>
    )
}

export default Display