import React from 'react';
import ReactLoading from 'react-loading';

const Preloader = ({ type, color }) => {
    return (
        <div>
            <ReactLoading type={type} color={color} height={667} width={375} />
        </div>
    );
};

export default Preloader;