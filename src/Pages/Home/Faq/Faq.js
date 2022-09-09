import React from 'react';

const Faq = () => {
    return (
        <div className='bg-white py-[65px]'>
            <div class="container mx-auto flex gap-5 justify-between">
                <div>
                    <div class="collapse">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            Click me to show/hide content
                        </div>
                        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </div>
    );
};

export default Faq;