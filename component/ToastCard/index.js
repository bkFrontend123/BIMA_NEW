import React from "react";
import {ToastContainer, Toast, Button} from 'react-bootstrap';
import Image from 'next/image'

import style from './style.module.css'

import UndoIcon from '../Icons/Undo'

import successIcon from '../../public/icons/successIcon.svg'
import warningIcon from '../../public/icons/warningIcon.svg'
import errorIcon from '../../public/icons/errorIcon.svg'

export default function ToastCard(props) {
    const { onClose, show, delay, undo, variant, message } = props;
    return (
        <>
            <Toast onClose={onClose} show={show} delay={delay} autohide={true} className={`${style.toastCol} ${variant === 'success' ? style.toastSuccess : null} ${variant === 'warning' ? style.toastWarning : null} ${variant === 'error' ? style.toastDanger : null}`}>
                <Toast.Header className={`justify-content-end ${style.toastHdr}`}></Toast.Header>
                <Toast.Body className={style.toastBody}>
                    <div className={style.toastInfo}>
                        {variant === 'success' ? (
                            <Image src={successIcon} width={24} height={24} alt="Success Icon" />
                        ) : (
                            null
                        )}

                        {variant === 'warning' ? (
                            <Image src={warningIcon} width={24} height={24} alt="Warning Icon" />
                        ) : (
                            null
                        )}

                        {variant === 'error' ? (
                            <Image src={errorIcon} width={24} height={24} alt="Error Icon" />
                        ) : (
                            null
                        )}
                        
                        <p>{message}</p>
                    </div>
                    {undo ? (
                    <div className='text-end mt-3'>
                        <Button className={style.toastUndoBtn} onClick={onClose} type="button">
                            <UndoIcon
                                width={15}
                                height={12}
                            />
                            Undo
                        </Button>
                    </div>
                    ) : (
                        null
                    )}
                </Toast.Body>
            </Toast>
        </>
    )
}
