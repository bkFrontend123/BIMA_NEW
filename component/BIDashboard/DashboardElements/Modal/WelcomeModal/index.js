import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import { Modal, Row, Col } from "react-bootstrap";

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import WelcomeCard from '@/component/BIDashboard/DashboardElements/WelcomeCard';

import ArrowPrimaryIcon from '@/component/BIDashboard/Icons/IconArrowPrimary';

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';
import commonModal from '@/assets/css/commonModal.module.css'

export default function WelcomeModal(props) {

    const welcomeData = ([
        {
            id: "1",
            icon: "/welcomeIcons/quotesWelcomeIcon.svg",
            title: "Quotes",
            count: "02",
            subtitle: "Pending Quotes",
            link: "/dashboard/your-quotes"
        },
        {
            id: "2",
            icon: "/welcomeIcons/policyWelcomeIcon.svg",
            title: "Open Policies",
            count: "00",
            subtitle: "Open Policies",
            link: "/dashboard/your-policies"
        },
        {
            id: "3",
            icon: "/welcomeIcons/pFormWelcomeIcon.svg",
            title: "Open Proposal Form",
            count: "02",
            subtitle: "Open Proposal Forms",
            link: "/dashboard/your-policies"
        },
    ])
  
    const [showWelcome, setShowWelcome] = useState(false);
  
    useEffect(() => {
        const hasDisplayedModal = localStorage.getItem('hasDisplayedModal');
        if (!hasDisplayedModal || hasDisplayedModal === 'false') {
          setShowWelcome(true);
          localStorage.setItem('hasDisplayedModal', 'true');
        }
    }, []);

    const handleClose = () => {
        setShowWelcome(false);
    };

    const router = useRouter();
    const goToNextPage = () => {
        setShowWelcome(false);
        router.push('/dashboard/your-quotes');
    };

    const pageRouting = (link) =>{
        router.push(link);
    }

    return (
        <>
            <Modal show={showWelcome} size="xl" onHide={handleClose} centered backdrop="static" keyboard={false} className={commonModal.commonMdlOuter}>
                <Modal.Body className={commonModal.commonMdlBody}>
                    <div className={`mb-4 mb-xl-5 pb-xl-1 pb-xxl-2 ${commonModal.welcomeHdr}`}>
                        <Row className="g-3 g-xl-4 g-xxl-5 justify-content-between">
                            <Col lg={7} xl={6}>
                                <div className={commonModal.welcomeMdlTtl}>
                                    <h3>Namaste, Shruti</h3>
                                    <p>All your policies and quotes in once place. Overview reports of your current status</p>
                                </div>
                            </Col>
                            <Col lg="auto">
                                <ButtonItem
                                    title="Explore more"
                                    type="button"
                                    iconPosition="right"
                                    customClass={`m-0 px-2 ${buttonStyle.btnDark} ${buttonStyle.btnBig} ${buttonStyle.minWidth4}`}
                                    onClick={goToNextPage}
                                >
                                    <ArrowPrimaryIcon />
                                </ButtonItem>
                            </Col>
                        </Row>
                    </div>
                    <div className={commonModal.welcomeBody}>
                        <Row className="g-3 g-xl-4 g-xxl-5">
                            {welcomeData.map((item) =>
                                <Col lg key={item.id}>
                                    <WelcomeCard
                                        icon={item.icon}
                                        title={item.title}
                                        count={item.count}
                                        subtitle={item.subtitle}
                                        onClick={()=> pageRouting(item.link)}
                                    />
                                </Col>
                            )}
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
