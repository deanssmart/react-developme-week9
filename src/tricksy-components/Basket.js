import React from 'react';

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
                <tr>
                    <td>{ item.name }</td>
                    <td>{ item.price }</td>
                </tr>                      
            ))}
        </tbody>  
    </table>
);

export default Basket;

