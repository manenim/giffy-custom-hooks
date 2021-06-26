import React from 'react'
import useGif from '../useGif'

const Random2 = () => {

    const { gif, fetchGif } = useGif()

    const handleClick = () => {
        fetchGif()
    }

    return (
        <div className =  'container'>
        <h1>random Gif</h1>

        <img width = "500" src = {gif} alt ="random gif"/>
        <button onClick = {handleClick}>click for new gif</button>
    </div>
    )
}

export default Random2
