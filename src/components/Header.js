import React, {useState} from 'react';
import saveIcon from "../assets/images/share.png";
import SocialShare from "./SocialShare";

const Header = () => {

    const [showSocialMenu, setShowSocialMenu] = useState(false);

    function closeTab() {
        window.close();
    }

    return (
        <div>
            <div className="headbar" id="header">
                <span className='show-cursor' onClick={closeTab}>Close</span>
                <img className="headbar_img" src={saveIcon}
                     onClick={() => setShowSocialMenu(!showSocialMenu)}
                />
            </div>
            <div>
                {showSocialMenu && <SocialShare setShowSocialMenu={setShowSocialMenu}/>}
            </div>
        </div>
    )
};

export default Header;