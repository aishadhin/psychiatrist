import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { toast } from 'react-toastify';

const AppointmentModal = ({refetch, setTreatment, treatment, date, }) => {
    const { _id, name, slots, price } = treatment;

    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');


    const handleSubmit = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }
                else{
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                setTreatment(null);
            });
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
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" value={user?.displayName} disabled name='name' className="input input-bordered w-full max-w-xs my-2 " />
                        <input type="email" value={user?.email} disabled name='email' className="input input-bordered w-full max-w-xs my-2 " />
                        <input type="text" placeholder="Your Phone Number" name='phone' className="input input-bordered w-full max-w-xs my-2 " />
                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs my-2 " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;