import {useState, useEffect} from "react";
import {DUMMY_CERTIFICATE_VALUES, VACCINES} from "../constants/constants";

const initialState = {
    name: '',
    dob: '',
    validFrom: '',
    dobYear: '',
    firstDose: '',
    secondDose: '',
    vaccine: '',
    docNum: DUMMY_CERTIFICATE_VALUES.DOCUMENT_NUMBER,
    ihi: DUMMY_CERTIFICATE_VALUES.IHI,
};

export const useCertificateDataHook = () => {

    const [certificateData, setCertificateData] = useState(initialState);
    const [timer, setTimer] = useState(null);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    useEffect(() => {
        const vaccineCardData = localStorage.getItem('vaccineCardData') ? JSON.parse(localStorage.getItem('vaccineCardData')) : null;
        if (vaccineCardData) {
            const vaccineApplied = VACCINES.find(vaccine => vaccine.key === vaccineCardData.vaccine);
            setCertificateData({
                ...certificateData,
                name: vaccineCardData.name.toUpperCase(),
                dob: `${vaccineCardData.dobDay} ${monthNames[vaccineCardData.dobMonth-1]} ${vaccineCardData.dobYear}`,
                firstDose: `${vaccineCardData.firstDoseDay} ${monthNames[vaccineCardData.firstDoseMonth-1]} ${vaccineCardData.firstDoseYear}`,
                secondDose: `${vaccineCardData.secondDoseDay} ${monthNames[vaccineCardData.secondDoseMonth-1]} ${vaccineCardData.secondDoseYear}`,
                vaccine: vaccineApplied ? vaccineApplied.text : '',
                docNum: vaccineCardData.docNum === '' ? DUMMY_CERTIFICATE_VALUES.DOCUMENT_NUMBER : vaccineCardData.docNum,
                ihi: vaccineCardData.ihi === '' ? DUMMY_CERTIFICATE_VALUES.IHI : vaccineCardData.ihi,
            });
            startTime();
        }
    }, []);


    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        };  // add zero in front of numbers < 10
        return i;
    }

    const dd = new Date();

    function startTime() {
        const today = new Date(); // Create date object to power live clock
        let h = today.getHours();    // Hours
        let m = today.getMinutes();  // Minutes
        let s = today.getSeconds();  // Seconds
        let d = today.getDate();     // Day
        // let n = today.getMonth();    // Month
        let y = today.getFullYear(); // Year
        m = checkTime(m); // Add zero in front of digits under ten, like it should be on a clock
        s = checkTime(s);
        // Show live clock on screen
        setTimer(d + " " + monthNames[dd.getMonth()] + " " + y + " " + h + ":" + m + ":" + s);
        setTimeout(startTime, 1000); // Refresh clock once per second
    }


    return {certificateData, timer};
}