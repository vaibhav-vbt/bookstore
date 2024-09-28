import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div className='flex h-screen items-center justify-center  '>
        <div className=" w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">

              <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_close".close())}
              >✕</Link>
            
            <h3 className="font-bold text-lg">SignUp</h3>
            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input placeholder='  Enter your fullname' type='text'
                className='w-80 px-30 border rounded-md outline-none'
                {...register("name", { required: true })}
              />

              <br />
              {errors.name && <span className='text-sm text-red-500'>This field is required</span>}


            </div>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input placeholder='  Enter your email'
                {...register("email", { required: true })}
                type='email' className='w-80 px-30 border rounded-md outline-none' />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input placeholder='  Enter your password'
                {...register("password", { required: true })}
                type='text' className='w-80 px-30 border rounded-md outline-none' />
              <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

            </div>
            <div className='flex mt-5 ml-7'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200  ml-7'>
                SignUp
              </button>
              <p className='ml-20 text-xl'>
                Have account?
                <button to="/" className='underline text-blue-500 cursor-pointer'
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >

                  Login
                </button>
                <Login />
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
