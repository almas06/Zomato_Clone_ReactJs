import React from 'react'
import './services.css';

const servicesList = [
    {
        id:1,
        title:"Order Food Online",
        image:"https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*",
    },
    {
        id:2,
        title:"Go out for a meal",
        image:"https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*",
    },
    {
        id:3,
        title:"Zomato Pro",
        image:"https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*",
    },
    {
        id:3,
        title:"Nightlife & Clubs",
        image:"https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*",
    }
];

const Services = () => {
    return (
        
       <div className="services">
            <div className="services-wrapper">
            {servicesList.map((service)=>{
                return(
                    <div className="service-card">
                        <img src={service.image}/>
                        <h3>{service.title}</h3>
                    </div>
                )
            })}
        </div>
       </div>
        
    )
}

export default Services
