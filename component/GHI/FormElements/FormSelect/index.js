import React, { useState } from 'react'

import { Form } from 'react-bootstrap';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import form from '@/assets/css/form.module.css'

export default function FormRadio(props) {
    const { title, tooltip, label, name, search, options, onChange, value, required } = props;

    return (
        <>
            {title ? (
                <Form.Group className="mb-4">
                    <Form.Label htmlFor="coverDetails" className={`${form.formLabel}`}>
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
                </Form.Group>
            ):(
                null
            )}
            <Form.Group className={`selectDropDiv mb-4 ${search === 'true' ? 'searchDropDiv' : null} ${!value == '' ? 'selectedDropDiv' : null}`}>
                <SelectSearch
                    options={options}
                    name={name}
                    placeholder={search === 'true' ? 'Search by keyword' : null}
                    onChange={onChange}
                    search={search === 'true'}
                    value={value}
                    required={required === 'true'}
                />
                <label>{label}</label>
            </Form.Group>
        </>
    )
}
