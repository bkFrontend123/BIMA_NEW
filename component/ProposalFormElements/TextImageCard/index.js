import React from 'react'
import Image from 'next/image'

import style from './style.module.css'

export default function TextImageCard(props) {
    const { customClass, icon, iconPosition, title, subTitle, variant, description, imgPosition, imgSrc, width, height, buttons, children } = props;
    return (
        <>
            <div className={`${style.textImgCol} ${customClass} ${imgPosition == 'right' ? style.textRghtImgCol : ''} ${iconPosition == 'top' ? style.textTopIconCol : ''} ${variant == 'blue' ? style.textImgBlueCol : ''}`}>
                <div className={`${style.textImgInfo}`}>
                    {title ? (
                        <div className={`${style.textImgTtl}`}>
                            <h3 className='font-secondary'>{icon ? <i>{icon}</i> : ''}{title}<span></span>{subTitle}</h3>
                        </div>
                    ) : (
                        null
                    )}
                    {icon ? (
                        <>
                            {iconPosition == 'top' ? (
                                null
                            ):(
                                <hr></hr>
                            )}
                        </>
                    ):(
                        null
                    )}
                    <div className={`${style.textImgDes}`}>
                        {Array.isArray(description) ? (
                            <div>
                                {description.map((paragraph, index) => (
                                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                ))}
                            </div>
                        ) : (
                            <p dangerouslySetInnerHTML={{ __html: description }} />
                        )}
                    </div>
                    {buttons == 'true' ? (
                        <div className={`${style.textImgBtns}`}>
                            {children}
                        </div>
                    ):(
                        null
                    )}
                </div>
                {imgSrc ? (
                    <div className={`${style.textImgMedia} ${imgPosition == 'right' ? '' : 'mt-xl-5 mt-4'}`}>
                        <Image src={imgSrc} width={width} height={height} alt={`${title} Image`} />
                    </div>
                ):(
                    null
                )}
            </div>
        </>
    )
}
