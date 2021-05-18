const ContactForm=()=>{
    return(

        <form>
            <label>
                Имя:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Отправить" />
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