import { ContactCard } from "components/ContactCard/ContactCard";
import { ContactCardItem } from "./ContactList.styled";
import { useSelector } from "react-redux";


export const ContactList = () => { 
    const contacts = useSelector(state => state.contacts)||[];
    const filter = useSelector(state => state.filter.filter)||'';
    
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