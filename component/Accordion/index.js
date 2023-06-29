import React, { Children, useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [accordionActive, setAccordionActive] = useState("");

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
        <div className={`accordion ProdFAQ-accordionBox ${isOpen ? "accordionActive" : "" }`}>
        <div className="accordion-header title-24 text-primary font-weight-600 transition-all d-flex gap-1 justify-content-between" onClick={toggleAccordion}>
            <span> {title} </span>
            <img className='plusCross' src='/icons/plus.svg' />
        </div>
        {isOpen && (
            <div className="accordion-content title-18 text-black">
            <span> {content}</span>
            </div>
        )}
        </div>

        <style jsx scope>
            {`
                 img.plusCross{
                    transition: 0.5s;
                    width: 24px;
                 }
                .accordionActive img.plusCross{
                    transform: rotate(45deg);
                }
                .accordion-header{
                    cursor: pointer;
                    text-align: left;
                    gap: 2rem !important;
                }
                .accordion-content{
                    transition: 0.5s;
                    height: 0;
                    margin-top: 12px;
                    text-align: left;
                }
                .accordionActive .accordion-content{
                    height: auto;
                    transition: 0.5s;
                }
                 @media only screen and (max-width: 991px) {
                    .title-36{
                        font-size: 21px;
                        line-height: 25px;
                    }
                    .title-36 span{
                        margin-right: 40px;
                    }
                    .title-24 {
                        font-size: 18px;
                        line-height: 26px;
                    }
                    img.plusCross{
                        width: 16px;
                     }
                }
            `}
        </style>
    </>
  );
};

export default Accordion;