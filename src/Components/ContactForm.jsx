import { Formik, Form, Field } from "formik"
import * as Yup from 'yup';
import { ErrorMessage } from "formik"


const INNITIAL_VALUES = {
    Name: "",
    Number: "",
}

const addrequired = Yup.object({
    Name: Yup.string().min(3, "Name must be at least 3 characters")
        .max(50, "Name must be no more than 50 characters").required("name is required"),
    Number: Yup.string().required("number is required").matches(/^\d{3}-\d{2}-\d{2}$/, "invelid phone nember xxx-xx-xx")
})

const ContactForm = ({onAddContacts}) => {
    
    const handleSubmit = (values, actions) => {
        onAddContacts(values)
        actions.resetForm()
}
    return (
        <Formik initialValues={INNITIAL_VALUES} onSubmit={handleSubmit} validationSchema={addrequired}>
            <Form className="form">
                <div className="wrap">
                    <label>Name</label>
                    <Field type="text" name="Name" className="input" /> 
                    <ErrorMessage name="Name" component="span" className="message" />
                </div>
                <div className="wrap">
                    <label >Phone</label>
                    <Field type="text" name="Number" className="input" /> 
                    <ErrorMessage name="Number" component="span" className="message" />
                 </div>
                <button type="submit" className="buttSubmit">Add Contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm