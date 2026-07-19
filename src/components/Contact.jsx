import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        setStatus('Sending...');

        emailjs.sendForm(
            'serviceApex',
            'ApexResponse',
            form.current,
            'p2bI0gKA8KUE5USRL'
        )
            .then(
                () => {
                    setStatus('Thank you! Your message has been sent. We’ll reply soon.');
                    form.current.reset();
                },
                (error) => {
                    setStatus('Sorry, there was a problem sending your message. Please try again.');
                }
            );
    }


    return (
        <div>
            <h1>Contact Apex Surfaces</h1>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                <strong>Call or text:</strong> (334-430-5347)
            </div>
            <form ref={form} onSubmit={sendEmail} style={{ maxWidth: 400, margin: '0 auto' }}>
                <input name="user_name" placeholder="Your name" required style={{ width: "100%", margin: "8px 0", padding: "8px" }} />
                <input name="user_email" type="email" placeholder="Your email" required style={{ width: "100%", margin: "8px 0", padding: "8px" }} />
                <textarea name="message" placeholder="Your message" required style={{ width: "100%", margin: "8px 0", padding: "8px", minHeight: "80px" }} />
                <button type="submit" style={{ padding: "10px 20px" }}>Send</button>
            </form>
            <p>{status}</p>
        </div>
    );
}



export default Contact;