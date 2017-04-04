import React from 'react';

let image = 'https://placebear.com/1000/200';

function Header() {
    return (
        <div>
            <img src={image} alt="Bear" />
        </div>
        )
}

export default Header;
