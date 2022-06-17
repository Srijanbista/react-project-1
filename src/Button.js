import React from 'react';

const Button = ( {name, link})=>{
//    console.log(name, link)
    return <a href={link} target="__blank"><button className="button">{name}</button></a>
}
export default Button;