import React, { useState } from 'react'
import useGif from '../useGif';


const Tag2 = () => {
    const [ tag, setTag ]  = useState('');
    const { gif, fetchGif } = useGif(tag)

    const handleClick = () => {
        fetchGif(tag)
    }
    return (
        <div className =  'container'>
            <h1>random {tag} Gif</h1>
            <input type = 'text' value = {tag} onChange = {(e) => setTag(e.target.value)}/>
 
            <img width = "500" src = {gif} alt ="random gif"/>
            <button onClick = {handleClick}>click for new gif</button>
        </div>
    )
}

export default Tag2
