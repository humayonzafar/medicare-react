import React, {useState} from 'react';
import './App.css';
import CertificateForm from "./components/CertificateForm";
import Certificate from './components/Certificate'

function App() {
    const [vaccineDataExists, setVaccineDataExists] = useState(!!localStorage.getItem('vaccineCardData'));
    return (vaccineDataExists ? <Certificate/> : <CertificateForm setVaccineDataExists={setVaccineDataExists}/>);
}

export default App;
