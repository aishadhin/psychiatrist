import React from 'react';

const DateCard = ({ service, setTreatment }) => {

    return (
        <div className='mx-4'>
            <div class="shadow p-5 text-center">
                <div class="">
                    <h2 class="text-center mt-4 mb-3 font-bold text-xl">{service?.name}</h2>
                    <p>
                        {
                            service?.slots.length
                                ? <span>{service?.slots[0]}</span>
                                : <span className='text-red-400'>No slots available</span>
                        }
                    </p>
                    <p>{service?.slots.length} {service?.slots.length > 1 ? "spaces" : "space"} available</p>
                    <p className='text-primary py-2'>Consultation
                        Fee: ${service?.price}</p>
                    <div class="card-actions mt-4 justify-center">
                        <label onClick={() => setTreatment(service)} htmlFor="my-modal-6" disabled={service?.slots.length === 0} class="btn capitalize bg-primary text-white border-none text-[16px]">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DateCard;