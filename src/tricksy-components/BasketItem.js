import React from 'react';
import Basket from './Basket';

const BasketItem = ({ price, name }) => (
    <tr>
        <td>{ name }</td>
        <td>{ price }</td>
    </tr>       
);

export default BasketItem;