import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/usetoken';

const Signup = () => {


    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user || gUser)


    const navigate = useNavigate()

    if (loading || gLoading || updating) {
        return <div className='grid place-items-center p-[200px]'>
            <button className="btn btn-square bg-primary border-none loading"></button>
        </div>
    }

    if (token) {
        navigate('/appointment')
    }

    let signInError;
    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    const googleSubmit = () => {
        signInWithGoogle();
        navigate('/appointment')
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data?.email, data?.password);
        await updateProfile({ displayName: data.name });
        console.log(data)

    };


    return (
        <div className='flex pt-28 pb-12 justify-center'>
            <div className=" w-96 shadow">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-primary">Signup</h2>

                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                    pattern: {
                                        value: /^[A-Za-z]+$/,
                                        message: 'Please Enter Your Name'
                                    }

                                })}
                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>

                        </div>


                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>

                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please provide a valid email address'
                                    }

                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>

                        </div>


                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>

                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password",
                                    {
                                        required: {
                                            value: true,
                                            message: 'password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password should be minimum 6 character or long'
                                        }
                                    }
                                )}
                            />

                            <label className="label">
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>

                        </div>
                        {signInError}
                        <input className='btn btn-primary w-full text-white my-3 max-w-xs' type="submit" value="Signup" />


                    </form>

                    <span>Already have an account? <Link to='/login' className='text-primary'>Please Login</Link></span>

                    <div className="divider">OR</div>

                    <button onClick={() => googleSubmit()} className='btn btn-primary btn-outline w-full my-3 max-w-xs'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;