import React from 'react';
import { Link } from 'react-router-dom';
import Description from './Description';

function Splash() {
    return (
        <div>
            <div className="splash-container">
                    <section className="main">
                        <header>
                            <h1 className="title">Recipe Blender</h1>
                            <h2 className="subtitle">Mix it, match it, enjoy!</h2>
                        </header>

                        <button className="enter"><Link to="/main">ENTER</Link></button>
                        <hr />
                    </section>
                </div>
                    <Description />
        </div>
    )
}

export default Splash;
