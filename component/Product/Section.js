import React from "react";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <style jsx scope> 
        {`
        
      
          
          .nav {
            background-color: var(--off-white);
            position: sticky;
            top: 0px;
            width: 100%;
            height: 80px;
            z-index: 1000;
            box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
          }
          
          .nav-logo {
            height: 60px;
            width: 60px;
          }
          
          .nav-logo:hover {
            cursor: pointer;
          }
          
          .nav .nav-content {
            max-width: 900px;
            padding: 0rem 3rem;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
          }
          
          .nav-item {
            display: inline;
            margin-left: 2rem;
            color: #333;
          }
          
          .nav-item:hover {
            color: black;
            cursor: pointer;
          }
          
          .section {}
          
          .section-dark {
            background: #333;
            color: white;
          }
          
          .section-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
          }
          
         
        `}
      </style>

      
    </div>
  );
}