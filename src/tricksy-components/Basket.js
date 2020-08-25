import React from 'react';
import BasketItem from './BasketItem';

const Basket = ({ items }) => (
    <table className="table table-striped">
        <thead className="thead-dark">
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            { items.map((item, index) => (   
                <BasketItem name={ item.name } price={ item.price } key={ index }/>                 
            ))}
        </tbody>  
    </table>
);

export default Basket;

