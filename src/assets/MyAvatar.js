import React from 'react';
import avatar from './img.png'
const MyAvatar = (props) => {
    return (
        //<img src='./poolguy.png' alt="Aqua" style={props.style} />
        <img className="myAvatar" src={avatar} width={30} height={30}  />
    );
};

export default MyAvatar;