import React from "react";

import CheckIcon from '@/component/Icons/Check'
import CloseIcon from '@/component/Icons/Close'
import LockIcon from '@/component/Icons/Lock'

import style from './style.module.css'

export default function ProposalUploadAlert(props) {
    const { value, text } = props;
    return (
        <>
            <div className={`${style.prpslUpldAlrtDiv}`}>
              <div className={`${style.prpslUpldAlrt} ${value === 'success' ? style.prpslUpldAlrtSuccess : null} ${value === 'error' ? style.prpslUpldAlrtError : null}`}>
                  <p>Signature {value === 'success' ? ( 'Approved' ) : ( value === 'error' && ( 'Invalid' ) )} {value === 'success' ? <CheckIcon /> : ( value === 'error' && ( <CloseIcon /> ) )}</p>
              </div>
            </div>
        </>
    )
}
