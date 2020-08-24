import React from 'react';

let items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const Items = () => (
    <ul className="list-group">
        { items.map((item, index) => (
            <li key={ index } className="list-group-item">
                { item }
            </li>
        ))}
    </ul>
);

export default Items;