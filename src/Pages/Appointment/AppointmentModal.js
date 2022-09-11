import React from 'react';
import { format } from 'date-fns';

const AppointmentModal = ({setTreatment, treatment, date}) => {


    const handleSubmit = e =>{
        e.preventDefault();
        const time = e.target.time.value;
        const slot = e.target.slot.value;
        const name = e.target.name.value;
        const data = {time , slot, name}
        console.log(data)
        setTreatment(null)
    }


    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for {treatment?.name}</h3>
                    <form onSubmit={handleSubmit}>
                        <input name='time' type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full my-2 max-w-xs" />
                        <select name='slot' className="select select-bordered w-full my-2 max-w-xs">
                            {
                                treatment?.slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Your Name" name='name' className="input input-bordered w-full max-w-xs my-2 " />
                        <input type="email" placeholder="Your Email" name='email' className="input input-bordered w-full max-w-xs my-2 " />
                        <input type="text" placeholder="Your Phone Number" name='phone' className="input input-bordered w-full max-w-xs my-2 " />
                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs my-2 " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;