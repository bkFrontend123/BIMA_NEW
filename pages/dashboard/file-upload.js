import React, { useState } from 'react'

import ButtonItem from '@/component/BIDashboard/DashboardElements/ButtonItem';
import FileUploadCard from '@/component/BIDashboard/DashboardElements/FileUploadElements/FileUploadCard';

import UploadIcon from "@/component/BIDashboard/Icons/IconUpload";

import buttonStyle from '@/component/BIDashboard/DashboardElements/ButtonItem/style.module.css';

export default function fileUpload() {

  return (
    <>
      <FileUploadCard
        title="Upload your File"
        description="Please select weather you want to upload annually, bi-annually, or monthly. Then, select the option from the drop down."
      >
        <div className='fileUpldBtns'>
            <ButtonItem
              title="File Tab 1"
              type="button"
              iconPosition="right"
              customClass={`ms-0 me-0 ${buttonStyle.btnDark} ${buttonStyle.btnDashCard}`}
            />
            <ButtonItem
              title="File Tab 2"
              type="button"
              iconPosition="right"
              customClass={`ms-2 me-0 ${buttonStyle.btnDark} ${buttonStyle.btnDashCard}`}
            />
            <ButtonItem
              title="File Tab 3"
              type="button"
              iconPosition="right"
              customClass={`ms-2 me-0 ${buttonStyle.btnDark} ${buttonStyle.btnDashCard}`}
            />
        </div>
        <div className='fileUpldCol mt-4'>
            <p>Click to upload xls</p>
            <p><span>choose xls, xlsx, csv, xlsm, xlsb</span></p>
            <ButtonItem
                title="Upload"
                type="button"
                iconPosition="right"
                customClass={`m-0 mt-2 ${buttonStyle.btnBlue} ${buttonStyle.btnDashCard} ${buttonStyle.smallWidth}`}
                >
                <UploadIcon />
            </ButtonItem>
        </div>
      </FileUploadCard>
      <FileUploadCard
          title="File Uploaded!"
          description="You have successfully uploaded your declaration!"
          fileName="BK_Template(1).xls"
          uploadTime="20 August 2023; 10:21 PM"
          status="sucess"
      >
      </FileUploadCard>
      <FileUploadCard
          title="File Not Supported"
          description="Your file was not uploaded because it is not in a proper format. Please ensure you upload the file in xls, xlsx, csv, xlsm, or xlsb."
          fileName="BK_Template(1).mp4"
          status="error"
        >
        <ButtonItem
          title="Try Uploading Again"
          type="button"
          iconPosition="right"
          customClass={`m-0 mt-2 ${buttonStyle.btnBlue} ${buttonStyle.btnDashCard}`}
          >
          <UploadIcon />
        </ButtonItem>
      </FileUploadCard>
    </>
  )
}
