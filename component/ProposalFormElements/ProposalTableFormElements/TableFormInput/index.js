import React, { useState } from 'react'

import style from './style.module.css'

export default function TableFormInput(props) {
    const { isTotal, label, isPercentage, valueOfPercentage, name, type, placeholder, value: propValue, multiline, inputTitle } = props;

    const [value, setValue] = useState(propValue || '');

    const handleValueChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <div className={`mb-2 ${style.prpslTblFrmInputDiv} ${isTotal == 'true' ? style.activePrpslTblFrmInputDiv : ''}`}>
                <label className={`${isPercentage == 'true' ? style.prcntLbl : ''}`}>{label} {isPercentage == 'true' ? ( <span>{valueOfPercentage}%</span> ) : ( null)}</label>
                <div className={`${style.prpslTblFrmInput} ${inputTitle ? style.prpslTblFrmGrpInput : ''}`}>
                    {multiline == 'true' ? (
                        <textarea name={name} placeholder={placeholder} onChange={handleValueChange}>{value}</textarea>
                    ) : (
                        <input name={name} type={type} placeholder={placeholder} onChange={handleValueChange} defaultValue={value} />
                    )}
                    <span>{inputTitle}</span>
                </div>
            </div>
        </>
    )
}
