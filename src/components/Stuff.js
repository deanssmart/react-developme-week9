import React from 'react';

import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Basket from '../tricksy-components/Basket';
import Clicked from './Clicked';
import ToggleText from './ToggleText';
import Counter from './Counter';

const Stuff = ({ square }) => (
    <>
        <Header>Hello, World</Header>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos.</Paragraph>
        { square ? <Square colour = { "hotpink" }/> : null }
        <People names = { ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] }/>
        <Basket items = {[
                        { name: "Coffee", price: 2.10 },
                        { name: "Bananas", price: 3.50 },
                        { name: "Milk", price: 250.65 },
                        { name: "The Great Milk Shortage by Simon Schama", price: 12.99 }]}/>
        <Clicked />
        <ToggleText initial="Hello" alternate="World"/>   
        <Counter initial= { 50 } max= { 100 }/>                             
    </>
);

Stuff.defaultProps = {
    square: true,
};

export default Stuff;