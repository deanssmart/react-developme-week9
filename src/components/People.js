import React from 'react';

const People = ({ names }) => (
    <ul>
        { names ? names.map((name, index) => (
            <li key={ index }>
                { name }
            </li>
        )) : "Nothing to see here"}
    </ul>
);

export default People;