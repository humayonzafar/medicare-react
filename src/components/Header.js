import React from 'react';

const Header = () => {

    const close = () =>{
       window.close();
    }

    return (
        <div className="headbar show-cursor" id="header" onClick={close}>
            Close
        </div>
    )
};

export default Header;