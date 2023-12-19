import React, { useState } from 'react'

import style from './style.module.css'

export default function ProposalQuestionCard(props) {
    const { title, type, placeholder, value: propValue, children } = props;

    const [value, setValue] = useState(propValue || '');

    const handleValueChange = (event) => {
        setValue(event.target.value);
    };

    const placeholderLength = placeholder ? placeholder.length : 0;

    const inputStyle = {
        width: `${placeholderLength * 9}px`, // Use placeholderLength
    };
    
    return (
        <>
            <div className={`${style.prpslTblFrmCol}`}>
                {title ? (
                    <div className={`${style.prpslTblFrmHdr}`}>
                        <h6>{title}</h6>
                        <div className={`${style.prpslTblFrmHdrInput}`}>
                            <input className={`${style.formHdrInput}`} type={type} placeholder={placeholder} onChange={handleValueChange} defaultValue={value} style={inputStyle} />
                        </div>
                    </div>
                ) : (
                    null
                )}
                <div className={`${style.prpslTblFrmBody} ${!title ? style.noBorder : '' }`}>
                    {children}
                </div>
            </div>
        </>
    )
}
