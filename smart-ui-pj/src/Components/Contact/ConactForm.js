import React from "react";
import {useForm} from "react-hook-form";
import {formData} from "./ContactFormData";
import {ButtonSend} from '../ButtonElement';


const ContactForm = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log("Send", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                {formData.name}
                <input type="text"
                       placeholder={formData.name}
                       name="name"
                       {...register('name')}
                />
            </label>
            <label>
                {formData.email}
                <input type="text"
                       placeholder={formData.email}
                       name="email"
                       {...register}
                />
            </label>
            <label>{formData.textarea}
                <textarea name="message"
                          placeholder={formData.phTextarea}
                          {...register}
                >
                </textarea>
            </label>
            <ButtonSend
                type="submit"
                value={formData.btn}
                primarybg='true'
                padding="28px 30px"
                primarycolor='false'
            >{formData.btn}</ButtonSend>
        </form>
        // <ContactFormContent>
        //     <ContactFormData>
        //
        //     </ContactFormData>
        //     <ContactFormMessage>
        //
        //     </ContactFormMessage>
        // </ContactFormContent>
    );
};

export default ContactForm;
