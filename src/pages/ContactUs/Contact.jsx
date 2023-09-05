/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tuyyd18', 'template_by0106q', form.current, 'pRvKGjQL9e8ysYewT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
        <h2 className='text-5xl text-center font-bold text-green-600 bg-black mb-4 p-4 mt-20'>Contact With Us</h2>
        <form ref={form} onSubmit={sendEmail}>
            <div className="form-control w-full max-w-xs mx-auto mb-8">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Type Your Name" name='from_name' className="input input-bordered w-full max-w-xs" />
                <label className="label mt-4">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name='from_email' placeholder="Type Your Email" className="input input-bordered w-full max-w-xs" />
                <label className="label mt-4">
                    <span className="label-text">Text</span>
                </label>
                <textarea className="textarea textarea-bordered" name='message' placeholder="write your text here"></textarea>
                <input className="btn btn-primary w-1/2 mt-4" type='submit' value='submit'/>
            </div>
        </form>

    </div>
    );
};

export default Contact;