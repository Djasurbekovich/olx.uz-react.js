import React from 'react';

const Button = ({type, text}) => {
    return (
        <button className={type == 'light' ? 'btn--light' : 'btn--dark'}>
            {text}
        </button>
    );
}

export {Button};