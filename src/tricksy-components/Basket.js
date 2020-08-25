import React from 'react';

const Basket = ({ items }) => (
    <table className="table">
        <thead className="thead-dark">
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        { items.map((item, index) => (
            <tbody>
                <tr>
                    <td>{ item.name }</td>
                    <td>{ item.price }</td>
                </tr> 
            </tbody>           
        ))}
    </table>
);

export default Basket;

