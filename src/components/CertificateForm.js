import React from 'react';
import {VACCINES} from '../constants/constants';
import {useCertificateFormHook} from "../hooks/certificateFormHook";

const CertificateForm = () => {
    const {formData, onSubmit, onChange} = useCertificateFormHook();
    const {
        name,
        dobDay,
        dobMonth,
        dobYear,
        firstDoseDay,
        firstDoseMonth,
        firstDoseYear,
        secondDoseDay,
        secondDoseMonth,
        secondDoseYear,
        vaccine,
        docNum,
        ihi
    } = formData;

    return (
        <div className='main'>
            <div id='myModal' className='modal'>
                <div className='modal-content'>
                    <h2 className='m-top-0'>Welcome to the Medicare vaccine pass generator</h2>
                    <p>Please input the data needed to make the pass here.</p>
                    <form onSubmit={e => onSubmit(e)}>
                        <p>
                            <b>First & Last Name</b><br/>
                            <input id='generate-name' value={name} name='name' type='text' onChange={e => onChange(e)}/>
                        </p>
                        <p>
                            <b>Date of Birth</b><br/>
                            <input type='text' className='date-field' id='generate-dob-dd' value={dobDay} name='dobDay'
                                   size='4' placeholder='Day' onChange={e => onChange(e)}/>
                            <input type='text' size='10' className='date-field' id='generate-dob-mm' value={dobMonth}
                                   name='dobMonth' placeholder='Month # (1-12)' onChange={e => onChange(e)}/>
                            <input type='text' size='4' className='date-field' id='generate-dob-yy' value={dobYear}
                                   name='dobYear' placeholder='Year' onChange={e => onChange(e)}/>
                        </p>
                        <p>
                            <b>Date of dose 1</b><br/>
                            <input type='text' size='4' className='date-field' id='generate-dd1-dd' value={firstDoseDay}
                                   name='firstDoseDay' placeholder='Day' onChange={e => onChange(e)}/>
                            <input type='text' size='10' className='date-field' id='generate-dd1-mm'
                                   value={firstDoseMonth} name='firstDoseMonth' placeholder='Month # (1-12)'
                                   onChange={e => onChange(e)}/>
                            <input type='text' size='4' className='date-field' id='generate-dd1-yy'
                                   value={firstDoseYear} name='firstDoseYear' placeholder='Year'
                                   onChange={e => onChange(e)}/>
                        </p>
                        <p>
                            <b>Date of dose 2</b><br/>
                            <input type='text' size='4' className='date-field' id='generate-dd2-dd'
                                   value={secondDoseDay} name='secondDoseDay' placeholder='Day'
                                   onChange={e => onChange(e)}/>
                            <input type='text' size='10' className='date-field' id='generate-dd2-mm'
                                   value={secondDoseMonth} name='secondDoseMonth' placeholder='Month # (1-12)'
                                   onChange={e => onChange(e)}/>
                            <input type='text' size='4' className='date-field' id='generate-dd2-yy'
                                   value={secondDoseYear} name='secondDoseYear' placeholder='Year'
                                   onChange={e => onChange(e)}/>
                        </p>
                        <p>
                            <b>Vaccine</b><br/>
                            <select id='generate-vax' name='vaccine' value={vaccine} onChange={e => onChange(e)}>
                                {VACCINES.map((vaccine, key) =>
                                    <option key={key} value={vaccine.key}>
                                        {vaccine.value}
                                    </option>
                                )}
                            </select></p>
                        <p>
                            <b>Document Number</b><br/>this one is random or you can do your own<br/>
                            <input type='text' id='generate-docnum' name='docNum' value={docNum}
                                   onChange={e => onChange(e)}/>
                        </p>
                        <p>
                            <b>IHI</b><br/>this one is random or you can do your own<br/>
                            <input type='text' id='generate-ihi' name='ihi' value={ihi} onChange={e => onChange(e)}/>
                        </p>
                        <p>
                            <button id='generate-button' type='submit'>Generate</button>
                        </p>
                    </form>
                    <h2>Read me before you press generate</h2>
                    <ul>
                        <li>Make sure your dose dates add up. Remember, 12 weeks between AZ and 5 (give or take 1)
                            between
                            Pfizer. <i>(No Australian data on Moderna interval yet but some
                                sources from overseas are saying 28 days)</i></li>
                        <li>If you want to reset the data and go again, you have to clear your cookies for this
                            site. I will
                            make a more convenient way of doing this
                            once I've got the high priority stuff out of the way.
                        </li>
                        <li>The info you put in to your phone should just stay there. But get in the habit of double
                            checking it before you need to use it just in case.
                        </li>
                        <li><b>In regards to the IHI number:</b> you can access it via your mygov. By default it
                            just puts a
                            random one in there but I suggest putting your actual
                            in there just in case
                        </li>
                    </ul>
                    <h2>Make it look like an app on your phone</h2>
                    <p><b>iPhone:</b> Open in Safari, press share button in middle center of screen, scroll to 'Add
                        to Home
                        Screen'</p>
                    <p><b>Android:</b> Open in Chrome, press three dots in top right, press 'Add to Home Screen'</p>
                </div>
            </div>
        </div>
    )
}

export default CertificateForm;