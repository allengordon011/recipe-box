import React from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';
import RaisedButton from 'material-ui/RaisedButton';

function Splash() {
    return (
            <div className="splash-container">
                <section className="main">
                    <header>
                        <h1 className="title">Recipe Box</h1>
                        <h3 className="subtitle">Mix it, match it, enjoy!</h3>
                    </header>
                    <RaisedButton className="enter" label="ENTER" containerElement={<Link to="/main" />} />
                </section>
                <Description />
            </div>
    )
}

export default Splash;
