import React from 'react';
import './App.css';
import CertificateForm from "./components/CertificateForm";
import Certificate from './components/Certificate'
import {useCertificateFormHook} from "./hooks/certificateFormHook";

function App() {
    const {isVaccineCardDataSet} = useCertificateFormHook();
    return (isVaccineCardDataSet ? <Certificate/> : <CertificateForm/>);
}

export default App;
