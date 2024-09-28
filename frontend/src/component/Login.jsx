import React from 'react'
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <Link to="/ " className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_close".close())}
                            >✕</Link>
                      
                        <h3 className="font-bold text-lg">LogIn</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input placeholder='  Enter your email' type='email' className='w-80 px-30 border rounded-md outline-none' 
                                {...register("email", { required: true })}
                            />
                            <br/>
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input placeholder='  Enter your password'  
                            type='password' 
                            className='w-80 px-30 border rounded-md outline-none'
                            {...register("password", { required: true })}
                            
                             />
                             <br/>
                             {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex mt-5 ml-7'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200  ml-7'>
                                LogIn
                            </button>
                            <p className='ml-20'>
                                Not registered? 
                                <Link to="/signup" className='underline text-blue-500 cursor-pointer'>
                                 SignUp
                                </Link>
                            </p>
                        </div>
                        </form>
                    </div>
                </dialog>

            </div>
        </>
    );
};

export default Login
