import React from 'react';

const Paragraph = ({ children }) => (
    <p>{children ? children : "Hello, World"}</p>
);

export default Paragraph;