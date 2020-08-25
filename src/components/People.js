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

// more semantically correct example

// const People = ({ names }) => (
//     names ? (
//         <ul className="list-group">
//             { names.map((name, i) => (
//                 <li className="list-group-item" key={ i }>{ name }</li>
//             )) }
//         </ul>
//     ) : <p>Nothing to see here</p>
// );

