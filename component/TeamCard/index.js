import React from 'react'
import Image from 'next/image'

export default function TeamCard(props) {

    const {img, name, position} = props;
    
    return (
        <>
            <div className='teamCard px-md-1'>
                <Image
                    // loader={myLoader}
                    src={img}
                    alt="CEO | Bimakavach"
                    width={335}
                    height={336}
                />
                <h3 className='title-24 mt-3 mb-0 font-weight-600 text-primary'>{name}</h3>
                <h4 className='title-18 font-weight-500 text-black'>{position}</h4>
            </div>

            <style jsx scope>
                {`
                        
                    .teamCard{
                        margin-bottom: 0;   
                    }

                    @media only screen and (max-width: 575px) {
                        .teamCard{
                            margin-bottom: 0;  
                            text-align: center; 
                        }
    
                        .title-24{
                            font-size: 18px;
                            line-height: 27px;
                        }
                        .title-18{
                            font-size: 16px;
                            line-height: 22px;
                        }
                    }
                `}
            </style>
           
        </>
    )
}
