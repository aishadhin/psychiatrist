import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/usetoken';
import { useEffect } from 'react';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const [token] = useToken(user || gUser);

    let from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    
    if (loading || gLoading) {
        return <button className="btn relative top-[50%] left-[50%] btn-square loading"></button>
    }


    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    };


    return (
        <div className='flex pt-28 pb-12 justify-center'>
            <div className=" w-96 shadow">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-primary">Login</h2>

                    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>

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
                        <input className='btn btn-primary w-full my-3 max-w-xs text-white' type="submit" value="Login" />


                    </form>

                    <span>Haven't any account? <Link to='/signup' className='text-primary'>Create An Account</Link></span>

                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className='btn btn-primary btn-outline w-full my-3 max-w-xs'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;