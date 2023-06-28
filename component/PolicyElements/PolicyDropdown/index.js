import React, { useEffect, useState } from 'react'

import style from './style.module.css'

import DropMenuShadowIcon from '../../Icons/DropMenuShadow'

const Icon = () => {
    return (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.232 14C9.46225 15.3333 7.53775 15.3333 6.76795 14L2.87083 7.25C2.10103 5.91667 3.06328 4.25 4.60289 4.25L12.3971 4.25C13.9367 4.25 14.899 5.91667 14.1292 7.25L10.232 14Z" fill="#0E2B72"/>
      </svg>
    );
};

const PolicyDropdown = ({ customClass, label, icon, placeHolder, options }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    useEffect(() => {
        const handler = () => setShowMenu(false);

        window.addEventListener("click", handler);
        return () => {
            window.addEventListener("click", handler);
        };
    });
    const handleInputCick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    }
    const getDisplay = () => {
      if (selectedValue) {
        return selectedValue.label;
      }
      return placeHolder;
    };

    const onItemClick = (option) => {
      setSelectedValue(option);
    }

    const isSelected = (option) => {
      if (!selectedValue) {
        return false;
      }
      return selectedValue.value === option.value;
    }
  
    return (
      <div className={`${style.dropdownContainer} ${customClass}`}>
        <label>{label}</label>
        <div onClick={handleInputCick} className={`${style.dropdownInput}`}>
          <div className='d-flex align-items-center'>
            <i>
              {icon}
            </i>
            <div className={`${style.dropdownSelectedValue}`}>{getDisplay()}</div>
          </div>
          <div className={`${style.dropdownTool} ${showMenu ? style.active : null}`}>
            <Icon />
          </div>
        </div>
        {showMenu && (
          <div className={`${style.dropdownMenu}`}>
            <i>
              <DropMenuShadowIcon/>
            </i>
            {options.map((option) => (
                <div
                  onClick={() => onItemClick(option)}
                  key={option.value}
                  className={`${style.dropdownItem} ${isSelected(option) && style.selected}`}
                >
                    {option.label}
                </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default PolicyDropdown;
