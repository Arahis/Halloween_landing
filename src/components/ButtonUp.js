import React from 'react';

const ButtonUp = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <button className="btn-up" onClick={scrollToTop}>
            <i className="material-icons">arrow_upward</i>
        </button>
    );
}

export default ButtonUp;

