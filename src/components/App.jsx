
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { SectionTitle, Layout } from "./App.styled";
import { fetchContacts } from 'redux/api';



export const App = () => { 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  

  return (
      <div>
        <Layout>
        <SectionTitle>Phonebook</SectionTitle>
        <ContactForm />
        <SectionTitle>Contacts</SectionTitle>
        <ContactFilter />
        <ContactList /> 
          <GlobalStyle />
          </Layout>
      </div>
    );


}
