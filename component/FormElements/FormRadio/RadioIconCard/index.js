import React from "react";
import Image from 'next/image'

import { Form } from 'react-bootstrap';

import radioCheckIcon from '@/public/ghi/icons/radioCheckIcon.svg'

import radioStyle from '@/assets/css/radioCheckbox.module.css'

export default function RadioIconCard(props) {
    const { customClass, activeClass, icon, name, label, id, value, checked, onChange, required, children } = props;
    return (
        <>
            <div className={`${radioStyle.radioIconCol} ${icon ? null : radioStyle.radioNoIconCol} ${customClass} ${activeClass}`}>
                <span>
                    <Image src={radioCheckIcon} width={16} height={11} alt="Check Icon" />
                </span>
                {children}
                <Form.Check
                    type="radio"
                    id={name + id}
                    name={name}
                    label={label}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    required={required === 'true'}
                    className={`${radioStyle.radioIconCheckox}`}
                />
                {icon ? (
                    <i>
                        <Image src={icon} width={48} height={48} alt={label} />
                    </i>
                ) : (
                    null
                )}
                
            </div>
        </>
    )
}
