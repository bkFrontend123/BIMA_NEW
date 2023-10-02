import React from "react";

import { Row, Col, Button } from 'react-bootstrap';

import LeftIcon from '@/component/GHI/Icons/IconLeft';
import RightIcon from '@/component/GHI/Icons/IconRight';

import form from '@/assets/css/form.module.css'

export default function FormButton(props) {
    const { onClickBack, onClickNext } = props;
    return (
        <>
            <div className={`${form.fromButtonDiv}`}>
                <Row className="g-4">
                    <Col md={6}>
                        <Button variant="" className={`w-100 btnCommon btnBack justify-content-center ${form.formBtn}`} type="button" onClick={onClickBack}>
                            <LeftIcon />
                            <span className='ms-2'>Go Back</span>
                        </Button>
                    </Col>
                    <Col md={6}>
                        <Button variant="primary" className={`w-100 btnCommon yellowBtn justify-content-center ${form.formBtn}`} type="button" onClick={onClickNext}>
                            <span className='me-2'>Continue</span>
                            <RightIcon />
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}
