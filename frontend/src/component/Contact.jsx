import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
function Contact() {

  return (
    <>
      <div className='flex h-screen items-center justify-center  '>
        <div className=" w-[600px]">
          <div className="modal-box">
            <form  method="dialog">

              <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                
              >✕</Link>
            </form>
            <h3 className="font-bold text-4xl">Contact us</h3>
            <div className='mt-4 space-y-2'>
              <span>Name</span>
              <br />
              <input placeholder='  Enter your fullname' type='text'
                className='w-80 px-30 border rounded-md outline-none'
                />



              <br />
            </div>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input placeholder='  Enter your email'
                type='email' className='w-80 px-30 border rounded-md outline-none' />

            </div>
            <div className='mt-4 space-y-2'>
              <span>Message</span>
              <br />
              <textarea rows="5" cols="50" id="TITLE" placeholder=' Enter your Message'></textarea>

            </div>
            <div className='flex mt-5 ml-7'>
              <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>
                Submit
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
