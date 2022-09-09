import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppHero = () => {

    const [date, setDate] = useState(new Date())


    return (
        <div className='bg-white pt-[120px] pb-[65px]'>
            <div class="container mx-auto">
                <div class="hero-content justify-between flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" class="rounded-lg shadow" alt='' />
                    <div className=''>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        <p>You picked {format(date, 'PP')}.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppHero;