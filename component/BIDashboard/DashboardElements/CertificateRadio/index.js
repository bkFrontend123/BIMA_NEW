import React from "react";

import { Form } from 'react-bootstrap';

import style from './style.module.css'

export default function CertificateRadio(props) {
    const { customClass, name, label, id, value, checked, onChange } = props;
    return (
        <>
            <div className={`${style.crtfctRadioCol} ${customClass}`}>
                <Form.Check
                    type="radio"
                    id={name + '-' + id}
                    name={name}
                    label={label}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    className={`${style.crtfctRadio}`}
                />
            </div>
        </>
    )
}
