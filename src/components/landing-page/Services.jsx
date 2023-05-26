import { faArrowRightArrowLeft, faPaperPlane, faPercent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export const Services = ({children}) => {

    console.log(children)

  return (



      <>
       { children.map((service, index)=>


        <div key={index} className="div-service-container-flexcol">

            {service.icon}

            <h3 className="services-h3">
                {service.title}
            </h3>

            <p className="services-p">
                {service.text}
            </p>

        </div>

)}

</>

  )
}
