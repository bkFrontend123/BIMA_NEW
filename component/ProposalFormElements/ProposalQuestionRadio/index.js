import React from 'react'

import CheckFillIcon from '@/component/Icons/CheckFill';
import CloseFillIcon from '@/component/Icons/CloseFill';

import style from './style.module.css'

export default function ProposalQuestionRadio(props) {
    const { customClass, name, id, label, value, checked, onChange, required } = props;
    return (
        <>
            <div className={`${style.qstnRdoCol} ${customClass}`}>
                <div className={`${style.formRadio} ${label == 'Yes' ? style.formYesRadio : ''} ${label == 'No' ? style.formNoRadio : ''}`}>
                    <input
                        type="radio"
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
                            {label === 'Yes' ? (
                                <CheckFillIcon />
                            ) :(
                                label === 'No' && (
                                    <CloseFillIcon />
                                )
                            )}
                        </span>
                        {label}
                    </label>
                </div>
            </div>
        </>
    )
}
