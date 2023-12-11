
import { GlobalStyle } from "./GlobalStyle";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { ContactFilter } from "./ContactFilter/ContactFilter";
import { SectionTitle, Layout } from "./App.styled";


export const App = () => { 

  

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
