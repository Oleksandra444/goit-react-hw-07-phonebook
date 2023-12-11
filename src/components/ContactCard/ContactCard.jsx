import { FcPhoneAndroid } from 'react-icons/fc';
import { ContactCardWrappper, ContactCardValue, ContactCardDelButton,ContactValuedWrappper } from './ContactCard.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactCard = ({ name, number, id}) => {
    const dispatch = useDispatch();
    
    
    const onDelete = () => {
        dispatch(deleteContact(id));
    };
    
      
    return (
    <>
        <ContactCardWrappper>
            <ContactValuedWrappper>
            <FcPhoneAndroid/>
                <ContactCardValue>{name} : {number}</ContactCardValue>
                </ContactValuedWrappper>
            <ContactCardDelButton onClick={onDelete}>Delete</ContactCardDelButton>
        </ContactCardWrappper>
        
    </>)
}