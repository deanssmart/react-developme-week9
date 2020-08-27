import React from 'react';

import { Route } from 'react-router-dom';

import Header from './Header';
import Paragraph from './Paragraph';
import Square from './Square';
import People from './People';
import Basket from '../tricksy-components/Basket';
import Clicked from './Clicked';
import ToggleText from './ToggleText';
import Counter from './Counter';
import StepCounter from './StepCounter';
import CatchMeIfYouCan from './CatchMeIfYouCan';
import RollCall from './RollCall';
import Colours from '../tricksy-components/Colours';
import Die from '../tricksy-components/Die';
import LameGame from '../tricksy-components/LameGame';
import GodCounter from './GodCounter';
import TwoCounters from './TwoCounters';
import LightBox from '../tricksy-components/LightBox';
import Length from './Length';
import PasswordStrength from './PasswordStrength';
import TempConverter from './TempConverter';
import List from './List';
import Adder from './Adder';
import Transform from './Transform';


const Stuff = ({ square }) => (
    <>
        <Route exact path="/">
            <CatchMeIfYouCan jump={ 100 } /> 
            <Header>Hello, World</Header>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos.</Paragraph>

            <Basket items={ [
                        { name: "Coffee", price: 2.10 },
                        { name: "Bananas", price: 3.50 },
                        { name: "Milk", price: 250.65 },
                        { name: "The Great Milk Shortage by Simon Schama", price: 12.99 }
                        ] }/>
            <LameGame aim={ 5 } />

        </Route>
        <Route path='/number-stuff'>
            <Adder />
            <Transform transform={ x => x + 1 }/>
            <Transform transform={ x => x * x }/>
            <Transform transform={ (x => (x * x) / (7.8 + x / 2) + 1 * 3.6 / (x + 1) * x) }/>
            <Counter initial={ 50 } max={ 100 }/>        
            <StepCounter initial={ 50 } max={ 100 } step={ 5 }/>
            <TempConverter labelF={ "Fahrenheit"} nameF={ "fahrenheit" } labelC={ "Celsius"} nameC={ "celsius" } /> 
            <GodCounter />
            <TwoCounters />
            <Die sides={ 6 } /> 
        </Route>
        <Route path='/wordy-stuff'>
            <Clicked />
            <ToggleText initial={ "Hello" } alternate={ "World" } />
            <List />
            <PasswordStrength label={ "Password Challenge"} name={ "password" } /> 
            <Length label={ "Length Challenge"} name={ "length" } /> 
            <People names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] }/>
            <RollCall names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] }/> 
        </Route>  
        <Route path = '/image-stuff'>
            <Colours colours={ ["#C14412", "#EBB31A", "#8F5318", "#009EAD", "#395967"] }/>  
            <LightBox src={ "https://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg" } />
            <Square colour={ "hotpink" } />
        </Route>
        <Route path='/squares/:colour' render={ ({ match }) => (
            square ? <Square colour={ match.params.colour }/> : null
        )} />      
        <Route path='/steps/:max/:step' render={ ({ match }) => (
            <StepCounter initial={ 50 } max={ match.params.max } step={ match.params.step }/>               
        )} />      
    </>
);

Stuff.defaultProps = {
    square: true,
};

export default Stuff;