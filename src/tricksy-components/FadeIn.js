import React from 'react';
import '../App.css';

const FadeIn = ({ children, time }) => (
    <div style={{
        animationName: 'fade-in',
        animationDuration: time,
    }}>
    { children }
    </div>
);

export default FadeIn;