import {useState} from "react";
import {DUMMY_CERTIFICATE_VALUES, VACCINES} from "../constants/constants";

const initialState = {
    name: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    firstDoseDay: '',
    firstDoseMonth: '',
    firstDoseYear: '',
    secondDoseDay: '',
    secondDoseMonth: '',
    secondDoseYear: '',
    vaccine: VACCINES[0].key,  //first vaccine set as default
    docNum: DUMMY_CERTIFICATE_VALUES.DOCUMENT_NUMBER,
    ihi: DUMMY_CERTIFICATE_VALUES.IHI,
};

export const useCertificateForm = (setVaccineDataExists) => {

    const [formData, setFormData] = useState(initialState);

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        localStorage.setItem('vaccineCardData', JSON.stringify(formData));
        setVaccineDataExists(true);
    }

    return {formData, setFormData, onSubmit, onChange};
}