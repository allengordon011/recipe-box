import React from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';
import RaisedButton from 'material-ui/RaisedButton';

function Splash() {
    return (
            <div className="splash-container">
                <header>
                    <h1 className="title">Recipe Box</h1>
                    <h3 className="subtitle">Let's mix it up!</h3>
                </header>
                <RaisedButton className="enter" label="ENTER" labelStyle={{ fontSize: '18px', lineHeight: '40px' }} containerElement={<Link to="/main" />} />
                <Description />
            </div>
    )
}

export default Splash;
