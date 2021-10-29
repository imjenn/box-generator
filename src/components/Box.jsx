import React, { useState } from 'react';
import styles from './Box.module.css';

const Box = (props) => {
    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [blocks, setBlocks] = useState([]);

    console.log(color)
    console.log(typeof(height))

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasBeenSubmitted( true );
        setBlocks(blocks => [...blocks, {color:color, width:width, height:height}])
        e.target.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Color: </label>
                <input type="text" placeholder="Give me a color!" onChange={ (e) => setColor(e.target.value )}/>
                <label>Height: </label>
                <input type="number" onChange={ (e) => setHeight( parseInt(e.target.value) )} />
                <label>Width: </label>
                <input type="number" onChange={ (e) => setWidth( parseInt(e.target.value) )} />
                <input className={styles.submit} type="submit" />
            </form>
            <hr/>
            <div className={styles.blocks}>
            {
                hasBeenSubmitted ?
                blocks.map( o => <div style={{ backgroundColor: o.color, height: o.height, width: o.width }}></div>) :
                <h3>Enter a valid color.</h3>
            }
            </div>
        </>
    );
};

export default Box;