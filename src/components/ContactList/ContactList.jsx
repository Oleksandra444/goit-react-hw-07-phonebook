import { ContactCard } from "components/ContactCard/ContactCard";
import { ContactCardItem } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { selectContacts } from 'redux/selectors';
import { selectFilter } from 'redux/selectors';


export const ContactList = () => { 
    const contacts = useSelector(selectContacts)||[];
    const filter = useSelector(selectFilter)||'';
    
    const visibleContacts = () => {
        return contacts.filter(({ name }) =>
      name
        .split(' ')
        .join('')
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase())
    );
  };
      
    return (
        <>
            <ul>
                {visibleContacts().map(({ name, number, id }) =>
                    <ContactCardItem key={id}><ContactCard name={name} number={number} id={id} />
                    </ContactCardItem>)}
            </ul>
    
    
        </>
    )
}