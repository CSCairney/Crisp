import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import "./styles.scss";
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_uthzxrb', 'template_htbyf9b', form.current, 'G5YPNDGLjnSrVJIU2')
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            toast.error("Email failed to send!");
          }
        );
    }
    toast.success("Email sent!");
  };

  return (
    <form className='contact-form' ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='username' />
      <input type="email" name="user_email" placeholder='email' />
      <textarea name="message" placeholder='feedback' />
      <input type="submit" value="Submit" className='contact-form__submit box-shadow' data-testid="submit-button" />
    </form>
  );
};

export default ContactForm;
