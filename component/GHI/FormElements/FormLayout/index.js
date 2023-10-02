import React from 'react'

import { Row, Col, Form, ProgressBar } from 'react-bootstrap';

import ProductFormFooter from '@/component/GHI/ProductContent/ProductFormFooter'

import form from '@/assets/css/form.module.css'
import progress from '@/assets/css/progress.module.css'

export default function FormLayout(props) {
    const { title, progressValue, children } = props;

    return (
        <>
            <div className={`employeeBenefitForm ${form.commonForm} ${form.employeeBenefitForm}`}>
                <div className={`${form.entrDtlsForm}`}>
                    <div className={`${form.frmBack}`}>
                        <Row className='align-items-center gap-4 gap-lg-2'>
                            <Col>
                                <span className={`${form.frmBackText}`}>Enter your details</span>
                            </Col>
                            <Col md="auto">
                                <div className={`${progress.progressDiv} ${progress.smallProgress} ${progress.noLabel} ${progress.warning} ${progress.newProgress}`}>
                                    <ProgressBar now={progressValue} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={`${form.frmTtl}`}>
                        <h3>{title}</h3>
                    </div>
                    <Form>
                        {children}
                    </Form>
                </div>
                <ProductFormFooter />
            </div>
        </>
    )
}
