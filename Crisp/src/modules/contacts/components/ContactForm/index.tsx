import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import "./styles.scss";
import { toast } from 'sonner';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    console.table(form);
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
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Submit" className='contact-form__submit' />
    </form>
  );
};

export default ContactForm;
