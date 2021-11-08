import React, {useEffect} from 'react';
import tick from '../assets/images/tick.gif'
import Header from "./Header";
import {useCertificateData} from "../hooks/useCertificateData";
import AddToHomeScreen from "@ideasio/add-to-homescreen-react/build/AddToHomeScreen";
import Icon from '../assets/images/icon.jpg';

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
})

const Certificate = () => {
    const {certificateData, timer} = useCertificateData();

    const handleInstallClick = (e) => {
        // Hide the app provided install promotion
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
        });
    };

    return (
        <div>
            <Header/>,
            <div className="main">
                <div className="box">
                    <div className="tophalf">
                        <img src={tick} className="tick" alt='tick'/>
                        <div className="cov-dig">
                            <div className="cov-dig-large">COVID-19</div>
                            <div className="cov-dig-small">digital certificate</div>
                        </div>
                    </div>
                    <div className="bottomhalf">
                        <div className="bottom-field">
                            <div className="descriptor">NAME</div>
                            <div className="info" id="text-name">{certificateData.name}</div>
                        </div>
                        <div className="bottom-field">
                            <div className="descriptor">DATE OF BIRTH</div>
                            <div className="info" id="text-dateofbirth">{certificateData.dob}</div>
                        </div>
                        <div className="bottom-field validfrom">
                            <div className="descriptor">VALID FROM</div>
                            <div className="info" id="text-validfrom">{certificateData.secondDose}</div>
                        </div>

                        <div className="clock" id="txt">{timer}</div>
                    </div>
                </div>
                <div className="savebutton show-cursor" onClick={handleInstallClick}>
                    Save offline
                </div>
                <AddToHomeScreen
                    appId='Add-to-Homescreen React Basic Integration Example'
                    src={Icon}
                    mustShowCustomPrompt={true}
                />
                <b className="req-text">This individual has received all required COVID-19 vaccinations.</b>
                <div className="bottom-details">
                    <div className="bottom-descriptor">DOCUMENT NUMBER</div>
                    <div className="bottom-value" id="text-docnumber">{certificateData.docNum}</div>
                </div>
                <div className="bottom-details">
                    <div className="bottom-descriptor">INDIVIDUAL HEALTHCARE IDENTIFIER (IHI)</div>
                    <div className="bottom-value" id="text-ihi">{certificateData.ihi}</div>
                </div>
                <div className="bottom-details">
                    <div className="bottom-descriptor">VACCINATIONS</div>
                    <div className="bottom-value"
                         id="text-dose1">{certificateData.vaccine} - {certificateData.firstDose}</div>
                    <div className="bottom-value"
                         id="text-dose2">{certificateData.vaccine} - {certificateData.secondDose}</div>
                </div>
                <div className="bottom-details">
                    <div className="bottom-descriptor">LAST UPDATED</div>
                    <div className="bottom-value" id="text-updated">{certificateData.secondDose}</div>
                </div>
                <div className="bottom-details">
                    <div className="bottom-descriptor">DISCLAIMER</div>
                    <div className="bottom-value">
                        This certificate shows your COVID-19 immunisation details as reported to the Australian
                        Immunisation
                        Register by your vaccination provider.
                        It is available because you have received all required COVID-19 vaccinations approved for
                        use in
                        Australia. The valid from date reflects the date from
                        which you received all required COVID-19 vaccinations.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificate;