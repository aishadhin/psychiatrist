import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import appointment from '../../assets/appointment_banner.jpg'

const AppHero = ({ date, setDate }) => {

    return (
        <div className='bg-white pt-[120px] pb-[65px]'>
            <div class="lg:w-[68%] w-[88%] mx-auto">
                <div class="flex justify-center flex-col lg:flex-row-reverse">
                    <img src={appointment} class="lg:w-1/2" alt='' />
                    <div className='lg:w-1/2'>
                        <DayPicker
                            className='flex justify-center lg:justify-start'
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppHero;