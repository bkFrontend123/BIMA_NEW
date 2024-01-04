import React from "react";
import { Button } from "react-bootstrap";
import style from './style.module.css'

export default function CalendyModal(props) {
    const { show, handleClose, calendyLink } = props;
    return (
        <>
            <div className={`${style.caldendyPopOuter} ${show ? style.active : null}`}>
                <div className={`${style.caldendyPopInner}`}>
                    <div className={`${style.caldendyPopContent}`}>
                        <div className={`${style.caldendyPopHdr}`}>
                            <h4>Free Consultation</h4>
                            <Button type="button" variant="" className="btn-close" onClick={handleClose}></Button>
                        </div>
                        <div className={`${style.caldendyPopBody}`}>
                            {calendyLink == 'tejas' ? (
                                <iframe width="100%" height="600" frameborder="0" title="Calendly Scheduling Page" src="https://calendly.com/tejasjain?hide_gdpr_banner=1&amp;embed_type=Inline&amp;embed_domain=1"></iframe>
                            ) : (
                                null
                            )}
                            {calendyLink == 'himani' ? (
                                <iframe width="100%" height="600" frameborder="0" title="Calendly Scheduling Page" src="https://calendly.com/himanidoshi-bk?hide_gdpr_banner=1&embed_type=Inline&embed_domain=1"></iframe>
                            ) : (
                                null
                            )}
                            {calendyLink == 'ravi' ? (
                                <iframe width="100%" height="600" frameborder="0" title="Calendly Scheduling Page" src="https://calendly.com/ravikant-bk?hide_gdpr_banner=1&embed_type=Inline&embed_domain=1"></iframe>
                            ) : (
                                null
                            )}
                            {calendyLink == 'shruti' ? (
                                <iframe width="100%" height="600" frameborder="0" title="Calendly Scheduling Page" src="https://calendly.com/shruti-vishnoi?embed_type=Inline&embed_domain=1"></iframe>
                            ) : (
                                null
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {show ? (
                <div className={`${style.caldendyPopOverlay}`}></div>
            ):(
                null
            )}
        </>
    )
}