import React from 'react';

const Paragraph = ({ message }) => (
    <p>{message ? message : "Hello, World"}</p>
);

export default Paragraph;