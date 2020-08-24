import React from 'react';

const Square = ({ colour }) => (
    <div style={{ height: 200, width: 200, backgroundColor: colour }}></div>
);

Square.defaultProps = {
    colour: "red",
};

export default Square;