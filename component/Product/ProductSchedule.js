import React, { useState } from 'react'
import WhatsApp from '../Icons/WhatsApp'

import CalendyModal from '../Modal/CalendyModal'

import productStyle from '@/assets/css/product.module.css'

export default function ProductSchedule() {
    const [showCalendy, setShowCalendy] = useState(false);
    const handleCloseCalendy = () => setShowCalendy(false);
    const handleShowCalendy = () => setShowCalendy(true);
    return (
        <>
            <div className='text-center'>
                <div className="d-flex justify-content-center flex-column flex-sm-row" >
                    <a className={`btnCommon btnBorder border-primary border2 text-primary me-lg-4 text-decoration-none ${productStyle.btnCommon}`} onClick={handleShowCalendy}>
                        <img src='/icons/calender.svg' width="22px" />
                        <span className='ms-2'>Schedule a call</span>
                    </a>
                    <a target="_blank" href="https://wa.me/9876543210" className={`btnCommon yellowBtn text-primary text-decoration-none mt-4 mt-sm-0 ${productStyle.btnCommon} ${productStyle.yellowBtn}`}>
                        <WhatsApp iconColor="primary" height="23" width="23" />
                        <span className='ms-2'>WhatsApp us</span>
                    </a>
                </div>
                <p className={`title-15 mt-4 mb-0 text-blueGray font-weight-500 ${productStyle.productStartupBottomDecrip}`}>Say hello to a spam-free zone! We respect your privacy and <span className='d-sm-inline d-none'><br></br></span> won't bombard you with unwanted calls.</p>
            </div>
            <CalendyModal
                show={showCalendy}
                handleClose={handleCloseCalendy}
            />
            <style jsx scope>
                {`
                    
               `}
            </style>
        </>
    )
}
