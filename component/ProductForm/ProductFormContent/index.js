import React from 'react'
import Image from 'next/image'

import style from './style.module.css'
import list from '@/assets/css/list.module.css'

export default function ProductFormContent(props) {
    const {icon, icon_alt, title, description, listText1, listText2, listText3, customClass } = props;
    return (
        <>
            <div className={`${style.prdctFrmCntntCol} ${customClass}`}>
                <div className={`${style.prdctFrmCntntHdr}`}>
                    <i>
                        <Image
                            src={icon}
                            alt={icon_alt}
                            width={80}
                            height={80}
                        />
                    </i>
                    <h2>{title}</h2>
                </div>
                <p>{description}</p>
                <div className={`${list.list}`}>
                    <ul>
                        <li className='d-inline-flex'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                            </svg>
                            <span>{listText1}</span>
                        </li>
                        <li className='d-inline-flex'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                            </svg>
                            <span>{listText2}</span>
                        </li>
                        <li className='d-inline-flex'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5ZM17.7604 9.53309C18.0799 9.21357 18.0799 8.69552 17.7604 8.376C17.4408 8.05648 16.9228 8.05648 16.6033 8.376L10.0909 14.8884L7.39672 12.1942C7.0772 11.8747 6.55916 11.8747 6.23964 12.1942C5.92012 12.5137 5.92012 13.0317 6.23964 13.3513L9.51237 16.624C9.83189 16.9435 10.3499 16.9435 10.6695 16.624L17.7604 9.53309Z" fill="#00916E" />
                            </svg>
                            <span>{listText3}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <style jsx scope>
                {`
                    
               `}
            </style>
        </>
    )
}
