import React from 'react';

const DateCard = ({ service , setTreatment }) => {

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{service?.name}</h2>
                    <p>
                        {
                            service?.slots.length
                                ? <span>{service?.slots[0]}</span>
                                : <span className='text-red-400'>No slots available</span>
                        }
                    </p>
                    <p>{service?.slots.length} {service?.slots.length > 1 ? "spaces" : "space"} available</p>
                    <p>fee: ${service?.price}</p>
                    <div class="card-actions justify-end">
                        <label onClick={() => setTreatment(service)} htmlFor="my-modal-6" disabled={service?.slots.length === 0} class="btn btn-primary">Book Appointment</label>
                    </div>
                    
                        
                    
                </div>
            </div>
        </div >
    );
};

export default DateCard;