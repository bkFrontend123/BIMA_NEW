import React from 'react'

import { Row, Col } from 'react-bootstrap';

import ProposalFormProgress from '@/component/ProposalFormElements/ProposalFormProgress'

import style from './style.module.css'

export default function ProposalFormIntro(props) {
    const { icon, title, now } = props;

    return (
        <>
            <div className={`py-4 py-md-5 ${style.prpslIntroCol}`}>
                <Row className='g-4 align-items-center'>
                    <Col>
                        <div className={`${style.prpslIntroText}`}>
                            <p>Please click on the  below "Continue" button to fill your form. If you have questions or need detailed guidance, you can click on the "View Guidelines" for step by step procedure or chat with an expert for a personalized assistance.</p>
                        </div>
                    </Col>
                    <Col lg={1} xl={1} className="d-none d-lg-flex"></Col>
                    <Col lg={3} xl={3}>
                        <div className={`${style.prpslIntroPrgrs}`}>
                            <ProposalFormProgress
                                icon="left"
                                title={title}
                                now={now}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
