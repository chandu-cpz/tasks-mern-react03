import React, { useState } from 'react'

function ColorPicker({ colors }) {
    const [clicked, setClicked] = useState(false)
    const changeColor = (e) => {
        console.log(e.target.style.backgroundColor)
        document.body.style.backgroundColor = e.target.style.backgroundColor;
        setClicked(!clicked);
    }

    return (
        <div style={{ height: "100vh", weight: "100vh" }} className='d-flex justify-content-center align-items-center flex-column'>
            <div>
                {clicked &&
                    colors.map(color => (
                        <button
                            key={color}
                            style={{ backgroundColor: color }}
                            className='btn mx-1'
                            onClick={changeColor}
                        >
                            {color}
                        </button>
                    ))
                }
            </div>
            <button onClick={() => setClicked(!clicked)} className='btn my-5 btn-outline-dark'>Change colors</button>
        </div>
    )
}

export default ColorPicker
