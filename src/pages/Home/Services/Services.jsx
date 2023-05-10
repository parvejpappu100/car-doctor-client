import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {

    const [services , setServices] = useState([]);

    useEffect( () => {
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])

    return (
        <div className='lg:container mx-auto my-16'>
            <div className='text-center'>
                <h5 className=' text-orange-600 text-xl font-medium'>Services</h5>
                <h3 className='text-4xl font-bold'>Our Service Area</h3>
                <p className='my-3'>the majority have suffered alteration in some form, by injected humour, or randomize <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServicesCard
                    key={service._id}
                    service = {service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;