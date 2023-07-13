import React, { useRef, useEffect, useState  } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

import { Container, Row, Col, Form, Button, ProgressBar, ToastContainer } from 'react-bootstrap';

import HeaderPlain from '../component/HeaderPlain'
import FooterPlain from '../component/FooterPlain'

import ToastCard from '../component/ToastCard'
import PaymentCard from '../component/PolicyElements/PaymentCard'

import form from '@/assets/css/form.module.css'
import progress from '@/assets/css/progress.module.css'

import UploadIcon from '../component/Icons/Upload';
import CheckIcon from '../component/Icons/Check';
import CloseIcon from '../component/Icons/Close';
import SubscribeArrow from '../component/Icons/SubscribeArrow';
import paymentIcon from '../public/payment/bajajFinserv.png';

export default function Payment() {
    const navbarExample2Ref = useRef(null);
    useEffect(() => {
        document.body.classList.add("userFlowBody")
    }, []);

    const [isBusinessDetails, setBusinessDetails] = useState(true);
    const handleBusinessDetailsToggle = () => {
        setBusinessDetails(!isBusinessDetails);
    };

    const router = useRouter();

    const [showToastGSTError, setShowToastGSTError] = useState(false);
    const [selectedGSTFile, setSelectedGSTFile] = useState();
    const [errorGSTMsg, setErrorGSTMsg] = useState(false);

    const handleGSTFileChange = (event) => {
        if(event.target.files.length > 0){
            setSelectedGSTFile(event.target.files[0]);
        }
    };

    const handleGSTClose = () => {
        setSelectedGSTFile(false);
    };

    const [showToastPANError, setShowToastPANError] = useState(false);
    const [selectedPANFile, setSelectedPANFile] = useState();
    const [errorPANMsg, setErrorPANMsg] = useState(false);

    const handlePANFileChange = (event) => {
        if(event.target.files.length > 0){
            setSelectedPANFile(event.target.files[0]);
        }
    };

    const handlePANClose = () => {
        setSelectedPANFile(false);
    };

    const validateSelectedFile = () => {
        const MAX_FILE_SIZE = 2080 // 2MB

        if (!selectedGSTFile) {
            setErrorGSTMsg("Please choose a file for GST number");
            setShowToastGSTError(true)
            return
        }

        if (!selectedPANFile) {
            setErrorPANMsg("Please choose a file for PAN number");
            setShowToastPANError(true)
            return
        }

        const fileSizeGSTKiloBytes = selectedGSTFile.size / 1024

        const fileSizePANKiloBytes = selectedPANFile.size / 1024

        if(fileSizeGSTKiloBytes > MAX_FILE_SIZE){
            setErrorPANMsg('Please ensure your PAN document is in a PDF and is under 2MB');
            setSelectedPANFile(false)
            setShowToastPANError(true)
        return
        }

        if(fileSizePANKiloBytes > MAX_FILE_SIZE){
            setErrorPANMsg('Please ensure your PAN document is in a PDF and is under 2MB');
            setSelectedPANFile(false)
            setShowToastPANError(true)
        return
        }

        setErrorGSTMsg("")
        setErrorPANMsg("")
        router.push('/thank-you');
    };

    return (
        <>
            <HeaderPlain
                talkExpert="true"
            />
            <section className='paymentBlock sectionPadding py-4 py-md-5'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xl={11} xxl={10}>
                            <Row className='g-4 g-xl-5'>
                                <Col lg className='order2'>
                                    <div className={`mb-4 ${progress.pymntPrgrsDiv}`}>
                                        <span>20% Complete</span>
                                        <p>Shield your business with certainty! Complete your profile now to unlock personalized coverage that fits your requirements.</p>
                                    </div>
                                    <div className={`${form.commonForm}`}>
                                        {isBusinessDetails ? (
                                            <div className={`${form.addtnBsnDtlsFormFirst}`}>
                                                <div className={form.frmTtl}>
                                                    <h3>Additional Business Details</h3>
                                                </div>
                                                <Form>
                                                    <Form.Group className="mb-4">
                                                        <Form.Label className={`${form.formLabel}`}>Details of any claims made in the past or any circumstance that you are aware of which may lead to a claim, including the nature of the claim and the amount paid by the insurer</Form.Label>
                                                        <Form.Control className={`${form.formInput}`} type="text" placeholder="" as="textarea" />
                                                    </Form.Group>
                                                    <div className="mb-4">
                                                        <div className={`${form.formCheckLabel}`}>Details of any mergers or acquisitions involving the company</div>
                                                        <Form.Check
                                                            inline
                                                            type="radio"
                                                            id="mergers-1"
                                                            name="mergers"
                                                            label="Yes"
                                                            className={`${form.formCheckRadio}`}
                                                        />
                                                        <Form.Check 
                                                            inline
                                                            type="radio"
                                                            id="mergers-2"
                                                            name="mergers"
                                                            label="No"
                                                            className={`${form.formCheckRadio}`}
                                                        />
                                                    </div>
                                                    <Row className='align-items-center'>
                                                        <Col md="auto">
                                                            <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                                <Button variant="primary" className='btnCommon yellowBtn' type="button" onClick={handleBusinessDetailsToggle}>
                                                                    <span className='me-2'>Continue</span>
                                                                    <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                                </Button>
                                                            </div>
                                                        </Col>
                                                        <Col md>
                                                            <div className={`${form.frmftr} m-0`}>
                                                                <p>Please Continue to complete your payment, fill your Proposal form, upload your documents so the issuing of policy can be initiated</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </div>
                                        ): (
                                            <>
                                            <div className={`${form.addtnBsnDtlsFormSecond}`}>
                                                <div className={form.frmTtl}>
                                                    <h3>General Information</h3>
                                                </div>
                                                <Form>
                                                    <Row>
                                                        <Col md>
                                                            <Form.Group className="mb-4">
                                                                <Form.Control className={`${form.formInput}`} type="text" placeholder="Name of your Company" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md>
                                                            <Form.Group className="mb-4">
                                                                <Form.Control className={`${form.formInput}`} type="text" placeholder="Corporate office Address " />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <div className="mb-4">
                                                        <div className={`${form.formCheckLabel}`}>Listed/Not listed</div>
                                                        <Form.Check
                                                            inline
                                                            type="radio"
                                                            id="listed-1"
                                                            name="listed"
                                                            label="Yes"
                                                            className={`${form.formCheckRadio}`}
                                                        />
                                                        <Form.Check 
                                                            inline
                                                            type="radio"
                                                            id="listed-2"
                                                            name="listed"
                                                            label="No"
                                                            className={`${form.formCheckRadio}`}
                                                        />
                                                    </div>
                                                    <Row>
                                                        <Col md>
                                                            <Form.Group className="mb-4">
                                                                <Form.Control className={`${form.formInput}`} type="text" placeholder="Previous year Revenue" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md>
                                                            <Form.Group className="mb-4">
                                                                <Form.Control className={`${form.formInput}`} type="text" placeholder="Current Year Revenue" />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md>
                                                            <Form.Group className="mb-4">
                                                                <Form.Control className={`${form.formInput}`} type="text" placeholder="Estimated next year Revenue" />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md>
                                                            <Form.Group className="mb-4">
                                                                <Form.Control className={`${form.formInput}`} type="text" placeholder="Details of any subsidiaries or affiliated companies" />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md>
                                                            {!selectedGSTFile ? (
                                                                <>
                                                                    <Form.Group controlId="formGSTFile" className="mb-4">
                                                                        <div className={`${form.formFileGroup}`}>
                                                                            <Form.Control className={`${form.formFileInput}`} type="file" onChange={handleGSTFileChange} accept=".pdf" />
                                                                            <Form.Label htmlFor="formGSTFile">Upload your GST number
                                                                                <UploadIcon width={21} height={20} iconColor="primary" />
                                                                            </Form.Label>
                                                                        </div>
                                                                        <div className={`${form.formFileInfo}`}>
                                                                            <p>Upload your file in a PDF format and under 2MB</p>
                                                                        </div>
                                                                    </Form.Group>
                                                                </>
                                                            ):(
                                                                <>
                                                                    <Form.Group className="mb-4">
                                                                        <div className={`${form.formFileSucess}`}>
                                                                            <Form.Label>Your file is uploaded!
                                                                                <div className='d-flex align-items-center gap-2'>
                                                                                    <span>
                                                                                        <CheckIcon width={22} height={23} iconColor="green" />
                                                                                    </span>
                                                                                    <Link href="" onClick={handleGSTClose}>
                                                                                        <CloseIcon width={22} height={23} iconColor="black" />
                                                                                    </Link>
                                                                                </div>
                                                                            </Form.Label>
                                                                        </div>
                                                                        <div className={`${form.formFileInfo}`}>
                                                                            <p>You have successfully uploaded {selectedGSTFile.name}</p>
                                                                        </div>
                                                                    </Form.Group>
                                                                </>
                                                            )}
                                                            
                                                            <ToastContainer
                                                                className={`position-fixed p-3`}
                                                                position='bottom-start'
                                                                style={{ zIndex: 999 }}
                                                            >
                                                                <ToastCard
                                                                    onClose={() => setShowToastGSTError(false)}
                                                                    show={showToastGSTError}
                                                                    delay={3000}
                                                                    variant="error"
                                                                    message={errorGSTMsg}
                                                                />  
                                                            </ToastContainer>
                                                        </Col>
                                                        <Col md>
                                                            {!selectedPANFile ? (
                                                                <>
                                                                    <Form.Group controlId="formPANFile" className="mb-4">
                                                                        <div className={`${form.formFileGroup}`}>
                                                                            <Form.Control className={`${form.formFileInput}`} type="file" onChange={handlePANFileChange} accept=".pdf" />
                                                                            <Form.Label htmlFor="formPANFile">Upload your PAN number        <UploadIcon width={21} height={20} iconColor="primary" />
                                                                            </Form.Label>
                                                                        </div>
                                                                        <div className={`${form.formFileInfo}`}>
                                                                            <p>Upload your file in a PDF format and under 2MB</p>
                                                                        </div>
                                                                    </Form.Group>
                                                                </>
                                                            ):(
                                                                <>
                                                                    <Form.Group className="mb-4">
                                                                        <div className={`${form.formFileSucess}`}>
                                                                            <Form.Label>Your file is uploaded!
                                                                                <div className='d-flex align-items-center gap-2'>
                                                                                    <span>
                                                                                        <CheckIcon width={22} height={23} iconColor="green" />
                                                                                    </span>
                                                                                    <Link href="" onClick={handlePANClose}>
                                                                                        <CloseIcon width={22} height={23} iconColor="black" />
                                                                                    </Link>
                                                                                </div>
                                                                            </Form.Label>
                                                                        </div>
                                                                        <div className={`${form.formFileInfo}`}>
                                                                            <p>You have successfully uploaded {selectedPANFile.name}</p>
                                                                        </div>
                                                                    </Form.Group>
                                                                </>
                                                            )}
                                                            <ToastContainer
                                                                className={`position-fixed p-3`}
                                                                position='bottom-start'
                                                                style={{ zIndex: 999 }}
                                                            >
                                                                <ToastCard
                                                                    onClose={() => setShowToastPANError(false)}
                                                                    show={showToastPANError}
                                                                    delay={3000}
                                                                    variant="error"
                                                                    message={errorPANMsg}
                                                                />  
                                                            </ToastContainer>
                                                        </Col>
                                                    </Row>
                                                    <Row className='align-items-center'>
                                                        <Col md="auto">
                                                            <div className={`${form.fromButtonDiv} d-sm-flex`}>
                                                                <Button variant="primary" className='btnCommon yellowBtn' type="button" onClick={validateSelectedFile}>
                                                                    <span className='me-2'>Continue</span>
                                                                    <SubscribeArrow iconColor="primary stroke" width="21" height="16" />
                                                                </Button>
                                                            </div>
                                                        </Col>
                                                        <Col md>
                                                            <div class={`${form.frmftr} m-0`}>
                                                                <p>Please Continue to complete your payment, fill your Proposal form, upload your documents so the issuing of policy can be initiated</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </div>
                                            </>
                                        )}
                                    </div>
                                </Col>
                                <Col lg="auto">
                                    <PaymentCard
                                        paymentIcon={paymentIcon}
                                        policyName="Directors & Officers Liability Insurance"
                                        policyCover="1.5 Crore"
                                        policyPremium="35,000"
                                        gst="1,900"
                                        totalPremium="36,900"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FooterPlain />
        </>
    )
}
