import React from 'react';
import relationship from '../../../assets/relationship.png'
import mentalhealth from '../../../assets/mentalhealth.png'
import feelings from '../../../assets/feelings.png'
import conflicting from '../../../assets/conflicting.png'

const Offers = () => {
    return (
        <div className='bg-white py-[65px]'>
            <div className='container mx-auto'>
                <div className='text-center lg:w-1/2 mx-auto'>
                    <h2>What we can offer</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ratione est sapiente porro accusamus aut eius, accusantium dicta non officia?</p>
                </div>
                <div className='py-12 flex gap-6'>
                    <div class="card shadow">
                        <figure class="px-10 pt-10">
                            <img src={relationship} alt="Shoes" class="rounded-xl w-16" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow">
                        <figure class="px-10 pt-10">
                            <img src={relationship} alt="Shoes" class="rounded-xl w-16" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow">
                        <figure class="px-10 pt-10">
                            <img src={relationship} alt="Shoes" class="rounded-xl w-16" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow">
                        <figure class="px-10 pt-10">
                            <img src={relationship} alt="Shoes" class="rounded-xl w-16" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;