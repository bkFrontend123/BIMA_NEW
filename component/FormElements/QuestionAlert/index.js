import React from "react";

import UnlockIcon from '@/component/Icons/Unlock'
import LockIcon from '@/component/Icons/Lock'

import style from './style.module.css'

export default function QuestionAlert(props) {
    const { value, text } = props;
    return (
        <>
            <div className={`${style.qustnAlrt} ${value === 'success' ? style.qustnAlrtSuccess : null} ${value === 'error' ? style.qustnAlrtError : null}`}>
                <span>
                    {value === 'success' ? (
                        <>
                           <UnlockIcon /> Great!
                        </> 
                    ) : (
                        null
                    )}
                    {value === 'error' ? (
                        <>
                            <LockIcon /> Oops!
                        </>
                    ) : (
                        null
                    )}
                </span>
                <p>{text}</p>
            </div>
        </>
    )
}
