import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, FormGroup, ErrorMessage, ContactAddButton } from "./ContactForm.styled"
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const contactScheme = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Please enter the name'),
  number: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{2}$/, 'Invalid format, requared XXX-XXX-XX')
    .required('Please enter the number, format XXX-XXX-XX'),
});

export const ContactForm = () => { 
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const initialValues = {
    name: '',
    number: '',
  };

 
  const handleSubmit = values => {
    
    const duplicate = contacts.some(
      ({ name }) => name.toLowerCase() === values.name.toLowerCase()
    );
    if (duplicate) {
      return alert(`${values.name} is already in contacts`);
    }
    dispatch(addContact(values));
   
  };
  
   
  
  
  return (
    <div>
    
      <Formik
        
      initialValues={initialValues}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
         
     validationSchema={contactScheme}
 
      
    >
      <Form>
       <FormGroup htmlFor="name">
         Name
       <Field id="name" name="name" placeholder="Jane" />
       <ErrorMessage name="name" component="div"/>
        </FormGroup>

        <FormGroup htmlFor="number">Number
         <Field id="number" name="number" placeholder="XXX-XXX-XX" />
         <ErrorMessage name="number" component="div"/>
</FormGroup>
        <ContactAddButton type="submit">Add Contact</ContactAddButton>
      </Form>
    </Formik>
    </div>
  )


}