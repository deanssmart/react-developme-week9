import React from 'react';

let numbers = ["1", "2", "3", "4"];

const Numbers = () => (
    <ul className="pagination mt-4">
        { numbers.map((number, index) => (
            <li key={ index } className="page-item">
                <a className="page-link" href={ `/page/${number}` }>
                { number }
                </a>
            </li>
        ))}
    </ul>
);

export default Numbers;