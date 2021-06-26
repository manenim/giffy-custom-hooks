import React, { useEffect, useState } from 'react'
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {

    const [gif, setGif ] = useState('');

    const fetchGif = async () => {
        // const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
         // const {data} = await res.json()
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url)
        console.log(data)
        const imageSrc  = data.data.images.downsized_large.url
        setGif(imageSrc)
    }
    useEffect(() => {
        fetchGif()
    }, [])

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

export default Random
