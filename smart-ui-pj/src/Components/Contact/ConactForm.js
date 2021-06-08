import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import axios from 'axios';
import {formData} from "./ContactFormData";
import {ButtonSend} from '../ButtonElement';
import {
    ContactFormContent,
    ContactFormData,
    ContactFormDataInput,
    ContactFormMessage,
    ContactFormLabel,
    ContactFormError,
} from "./ContactElements";


const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = data => {
        const url='https://reqres.in/api/users';

        axios.post(url, data)
            .then(response => {
                console.log("Status: ", response.status);
                console.log("Data: ", response.data);
            }).catch(error => {
            console.error('Something went wrong!', error);
        });
    };


    return (
        <ContactFormContent
            // action="/action_page.php"
            onSubmit={handleSubmit(onSubmit)}
        >
            <ContactFormData>
                <ContactFormLabel>
                    {formData.name}
                    <ContactFormDataInput type="text"
                                          placeholder={formData.name}
                                          name="name"
                                          {...register('name', {required: true,})}
                    />
                    {errors.name && <ContactFormError>{formData.errorName}</ContactFormError>}
                </ContactFormLabel>
                <ContactFormLabel>
                    {formData.email}
                    <ContactFormDataInput type="text"
                                          placeholder={formData.email}
                                          name="email"
                                          {...register('email', {required: true, pattern: /@/})}
                    />
                    {errors.email && <ContactFormError>{formData.errorEmail}</ContactFormError>}
                </ContactFormLabel>
            </ContactFormData>
            <ContactFormLabel>{formData.textarea}
                <ContactFormMessage name="message"
                                    placeholder={formData.phTextarea}
                                    {...register('message', {required: true,})}
                >
                </ContactFormMessage>
                {errors.message && <ContactFormError>{formData.errorMessage}</ContactFormError>}
            </ContactFormLabel>
            <ButtonSend
                type="submit"
                primarybg='true'
                padding="1rem"
                primarycolor='false'
            >{formData.btn}</ButtonSend>
        </ContactFormContent>
    );
};

export default ContactForm;
