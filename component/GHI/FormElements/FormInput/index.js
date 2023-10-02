import React from "react";
import Image from 'next/image'

import { Form, FloatingLabel, OverlayTrigger, Tooltip } from 'react-bootstrap';

import tooltipIcon from '@/public/ghi/icons/tooltipIcon.svg'

import form from '@/assets/css/form.module.css'

export default function FormInput(props) {
    const { title, tooltip, label, type, placeholder, required } = props;
    return (
        <>
            <Form.Group className="floatFormGroup mb-4">
                {title ? (
                    <Form.Label htmlFor="coverDetails" className={`mb-4 ${form.formLabel}`}>
                        <span>{title}</span>
                        {tooltip ? (
                            <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>{tooltip}</Tooltip>}
                            >
                                {({ ref, ...triggerHandler }) => (
                                    <i className='tooltipIcon' {...triggerHandler}>
                                        <Image
                                            ref={ref}
                                            src={tooltipIcon}
                                            width="20"
                                            height="20"
                                            alt="Remark Icon"
                                        />
                                    </i>
                                )}
                            </OverlayTrigger>
                        ):(
                            null
                        )}
                    </Form.Label>
                ):(
                    null
                )}
                <FloatingLabel controlId={label} label={label} >
                    <Form.Control className={`${form.formInput}`} type={type} placeholder={placeholder} required={required === 'true'} />
                </FloatingLabel>
            </Form.Group>
        </>
    )
}
