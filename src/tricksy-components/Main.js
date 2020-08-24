import React from 'react';
import Paragraph from './Paragraph';
import Items from './Items';
import Pagination from './Pagination';

const Main = () => (
    <main className="col-md-8">
        <Paragraph style = "lead"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Items />
        <Pagination />
    </main>

);

export default Main;