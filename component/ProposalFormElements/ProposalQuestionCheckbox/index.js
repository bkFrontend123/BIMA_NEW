import React from 'react'

import CheckFillIcon from '@/component/Icons/CheckFill';
import CloseFillIcon from '@/component/Icons/CloseFill';

import style from './style.module.css'

export default function ProposalQuestionCheckbox(props) {
    const { customClass, name, id, label, value, checked, onChange, required } = props;
    return (
        <>
            <div className={`${style.qstnRdoCol} ${customClass}`}>
                <div className={`${style.formRadio} ${style.formYesRadio}`}>
                    <input
                        type="checkbox"
                        id={name + '-' + id}
                        name={name}
                        value={value}
                        checked={checked}
                        onChange={onChange}
                        required={required === 'true'}
                        className={`${style.formRadioInput}`}
                    />
                    <label className={`${style.formRadioLabel}`} htmlFor={name + '-' + id}>
                        <span>
                            <CheckFillIcon />
                        </span>
                        {label}
                    </label>
                </div>
            </div>
        </>
    )
}
