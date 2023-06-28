import React from 'react'
import WhatsApp from '../Icons/WhatsApp'

export default function ScheduleWhatsapp() {
    return (
        <>
            <div className={`scheduleWhatsapp`}>
                <div className="scheduleWhatsapp-brns d-flex justify-content-start flex-column flex-sm-row" >
                    <a className="btnCommon btnBorder border-primary border2 text-primary me-lg-5 text-decoration-none" type="submit"> <img className='me-2' src='/icons/calender.svg' width="22px" /> <span> Schedule a call </span> </a>
                    {/* <a className="btnCommon yellowBtn text-primary text-decoration-none mt-4 mt-sm-0" type="submit"> <img className='me-1' src='/icons/whatsapp.svg' width="22px"/><span> WhatsApp us</span></a> */}
                    <a className="btnCommon yellowBtn text-primary text-decoration-none mt-4 mt-sm-0" type="submit">
                        <WhatsApp iconColor="primary" height="23" width="23" />
                        <span className='ms-2'> WhatsApp us</span>
                    </a>
                </div>
                <p className='scheduleWhatsapp-descrip title-15 mb-0 text-blueGray font-weight-500 mt-4'> Say hello to a spam-free zone! We respect your privacy and  won't <span className='d-xl-inline d-none'> <br></br></span> bombard you with unwanted calls. </p>
            </div>
            <style jsx scope>
                {`
                  
                     .scheduleWhatsapp .scheduleWhatsapp-descrip{
                         margin-top: 24px;
                        }
                        .scheduleWhatsapp .btnCommon{
                            padding: 16.5px 40px;
                        }
                    .title-15 {
                        font-size: 15px;
                        line-height: 22.5px;
                    }
                    @media only screen and (max-width: 575px) {
                        .scheduleWhatsapp .scheduleWhatsapp-descrip{
                            margin-top: 48px !important;
                        }
                         .btnCommon{
                            font-size: 18px;
                            line-height: 27px;
                            justify-content: center;
                        }
                        .title-15 {
                            font-size: 12px;
                            line-height: 18px;
                        }
                    }
                `}
            </style>
        </>
    )
}
