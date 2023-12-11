import { useDispatch, useSelector } from "react-redux";
import { ContactFilterWrapper, ContactFilterButton, ContactFilterInput } from "./ContactFilter.styled";
import { changeFilter, resetFilter } from "redux/filterSlice";

export const ContactFilter = () => {
const dispatch = useDispatch();
const value = useSelector(state => state.filter.filter);
  
  const onChange = e => {
    const filter = e.currentTarget.value;
    dispatch(changeFilter(filter));
  };

  const onReset = e => {
    dispatch(resetFilter())
  };



  return (
    <ContactFilterWrapper>
      <ContactFilterInput
        type="text"
        
        value={value}
        onChange={onChange}
        placeholder="SEARCH"
      />
      
      <ContactFilterButton type = "button" onClick={onReset}>Reset search</ContactFilterButton>
    </ContactFilterWrapper>
  );
};
