import React, {useState} from 'react';
import saveIcon from "../assets/images/share.png";
import SocialShare from "./SocialShare";

const Header = () => {

    const [showSocialMenu, toggleShowSocialMenu] = useState(false);

    const closeTab = (e) => {
        window.close();
    }

    return (
        <div>
            <div className="headbar" id="header">
                <button className='close-button show-cursor' onClick={closeTab}>Close</button>
                <img className="headbar_img show-cursor" src={saveIcon}
                     onClick={() => toggleShowSocialMenu(!showSocialMenu)} alt='share'/>
            </div>
            <div>
                {showSocialMenu && <SocialShare setShowSocialMenu={toggleShowSocialMenu}/>}
            </div>
        </div>
    )
};

export default Header;