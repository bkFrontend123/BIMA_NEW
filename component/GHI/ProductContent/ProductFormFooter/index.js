import React from 'react'
import Link from 'next/link'

import form from '@/assets/css/form.module.css'
import style from './style.module.css'

export default function ProductFormFooter(props) {
    return (
        <>
            <div className={`${form.frmftr}`}>
                <p>By continuing to the next step, you agree to our <Link href='/privacy-policy'>Privacy Policy</Link> and <Link href='/terms-and-conditions'>Terms of Use</Link> , and also provide us a formal mandate to represent you to the insurer and communicate to you the grant of a cover</p>
            </div>
        </>
    )
}
