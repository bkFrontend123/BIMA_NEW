import React, {useState} from "react";
import Image from 'next/image'

import { Form, Row, Col } from 'react-bootstrap';

import RadioIconCard from '@/component/FormElements/FormRadio/RadioIconCard'

import form from '@/assets/css/form.module.css'
import radioStyle from '@/assets/css/radioCheckbox.module.css'

export default function FormRadio(props) {
    const { label, customClass } = props;

    const [radioValue, setRadioValue] = useState();
    const handleChangeRadio = event => {
        setRadioValue(event.target.value);
    };

    return (
        <>
            <Form.Group className="mb-4">
                <Form.Label htmlFor="coverDetails" className={`${form.formLabel}`}>
                    <span>{label}</span>
                </Form.Label>
                <div className={`${radioStyle.radioIconRow} ${customClass}`}>
                    <Row className="g-3">
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
                                        activeClass={radioValue === data.id ? radioStyle.active : radioStyle.active}
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
