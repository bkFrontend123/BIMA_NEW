import React from 'react'

import style from './style.module.css'

export default function ProposalTableFormRow(props) {
    const { title, subtitle, children } = props;

    return (
        <>
            <div className={`${style.tblFrmRow}`}>
                {title || subtitle ? (
                    <>
                        <div className={style.tblFrmTtlDiv}>
                            {title ? (
                                <div className={`${style.tblFrmTtl}`}>
                                    <h4>{title}</h4>
                                </div>
                            ) : (
                                null
                            )}
                            {subtitle ? (
                                <div className={`${style.tblFrmSubttl}`}>
                                    <h5>{subtitle}</h5>
                                </div>
                            ) : (
                                null
                            )}
                        </div>
                    </>
                ) : (
                    null
                )}
                <div className={`${style.tblFrmBlock}`}>
                    {children}
                </div>
            </div>
        </>
    )
}
