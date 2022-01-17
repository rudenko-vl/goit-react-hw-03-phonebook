import PropTypes from "prop-types";
import { Label } from "./Filter.styled";
import { Input } from "../ContactForm/ContactForm.styled";
const Filter = ({ onChangeFilter, filter }) => {
  return (
    <Label htmlFor="">
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={onChangeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
