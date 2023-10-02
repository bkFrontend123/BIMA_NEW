import React, {useState} from "react";
import Image from 'next/image'

import { Form, OverlayTrigger, Tooltip, Row, Col } from 'react-bootstrap';

import tooltipIcon from '@/public/ghi/icons/tooltipIcon.svg'
import RadioIconCard from '@/component/GHI/FormElements/FormRadio/RadioIconCard'

import form from '@/assets/css/form.module.css'
import radioIconStyle from '@/assets/css/radioIconCheckbox.module.css'

export default function FormRadio(props) {
    const { label, tooltip, customClass, children } = props;

    const [radioValue, setRadioValue] = useState();
    const handleChangeRadio = event => {
        setRadioValue(event.target.value);
    };

    return (
        <>
            <Form.Group className="mb-4">
                <Form.Label htmlFor="coverDetails" className={`${form.formLabel}`}>
                    <span>{label}</span>
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
                <div className={`${radioIconStyle.radioIconRow} ${customClass}`}>
                    <Row className="g-4">
                            {props.option.map(data=>
                                <Col xs={data.icon ? 12 : 6}>
                                    <RadioIconCard
                                        icon={data.icon}
                                        label={data.label}
                                        name={data.name}
                                        id={data.id}
                                        value={data.id}
                                        checked={radioValue === data.id}
                                        onChange={handleChangeRadio}
                                        required="true"
                                        activeClass={radioValue === data.id ? radioIconStyle.active : null}
                                        key={data.id}
                                    />
                                </Col>
                            )}
                    </Row>
                </div>
            </Form.Group>
        </>
    )
}
