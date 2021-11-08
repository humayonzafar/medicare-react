import React, {useRef, useEffect} from 'react';
import {
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    PinterestIcon,
    PinterestShareButton,
    EmailIcon,
    EmailShareButton
} from 'react-share';

const url = window.location.href ?? 'https://medicare-react-app.netlify.app/';

const SocialShare = ({setShowSocialMenu}) => {

    let socialIconModalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (socialIconModalRef.current && !socialIconModalRef.current.contains(event.target)) {
            setShowSocialMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div ref={socialIconModalRef} className='social-share-modal'>
            <FacebookShareButton
                url={url}
                quote='Covid Vaccine Certificate'
                className="social_share facebook_share"
            >
                <FacebookIcon size={32} round/>
            </FacebookShareButton>
            <TwitterShareButton
                url={url}
                quote='Covid Vaccine Certificate'
                className="social_share twitter_share"
            >
                <TwitterIcon size={32} round/>
            </TwitterShareButton>
            <WhatsappShareButton
                url={url}
                quote='Covid Vaccine Certificate'
                className="social_share whatsapp_share"
            >
                <WhatsappIcon size={32} round/>
            </WhatsappShareButton>
            <LinkedinShareButton
                url={url}
                quote='Covid Vaccine Certificate'
                className="social_share linkedin_share"
            >
                <LinkedinIcon size={32} round/>
            </LinkedinShareButton>
            <PinterestShareButton
                url={url}
                quote='Covid Vaccine Certificate'
                className="social_share pinterest_share"
            >
                <PinterestIcon size={32} round/>
            </PinterestShareButton>
            <EmailShareButton
                url={url}
                quote='Covid Vaccine Certificate'
                className="social_share pinterest_share"
            >
                <EmailIcon size={32} round/>
            </EmailShareButton>
        </div>
    )
};

export default SocialShare;