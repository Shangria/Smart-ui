import React from "react";
import {useForm} from "react-hook-form";
import {formData} from "./ContactFormData";
import {ButtonSend} from '../ButtonElement';
import {
    ContactFormContent,
    ContactFormData,
    ContactFormDataInput,
    ContactFormMessage,
    ContactFormLabel,
} from "./ContactElements";


const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
    } = useForm();

    const onSubmit = data => {
        console.log("Send", data);
    }

    const name = watch('name');
    const email = watch('email');
    const message = watch('message');

    return (
        <ContactFormContent onSubmit={handleSubmit(onSubmit)}>
            <ContactFormData>
                <ContactFormLabel>
                    {formData.name}
                    <ContactFormDataInput type="text"
                                          placeholder={formData.name}
                                          name="name"
                                          {...register('name', {required: true,})}
                    />
                    {errors.name && <p>enter the name</p>}
                </ContactFormLabel>
                <ContactFormLabel>
                    {formData.email}
                    <ContactFormDataInput type="text"
                                          placeholder={formData.email}
                                          name="email"
                                          {...register('email', {required: true, pattern: /@/})}
                    />
                    {errors.email && <p>enter the email</p>}
                </ContactFormLabel>
            </ContactFormData>
            <ContactFormLabel>{formData.textarea}
                <ContactFormMessage name="message"
                                    placeholder={formData.phTextarea}
                                    {...register('message', {required: true,})}
                >
                </ContactFormMessage>
                {errors.message && <p>enter the message</p>}
            </ContactFormLabel>
            <ButtonSend
                type="submit"
                primarybg='true'
                padding="28px 30px"
                primarycolor='false'
            >{formData.btn}</ButtonSend>
        </ContactFormContent>
    );
};

export default ContactForm;
