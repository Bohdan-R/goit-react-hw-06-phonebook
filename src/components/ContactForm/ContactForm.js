import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import './ContactForm.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const contactName = [];
    this.props.contacts.map(contact =>
      contactName.push(contact.name.toLowerCase()),
    );

    if (contactName.includes(name.toLowerCase())) {
      return alert(`${name} is alredy in contacts`);
    } else {
      this.props.onSubmit(name, number);
    }

    this.resetInput();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  resetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <label className="add-form__label">
          Name
          <input
            className="add-form__input"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
          <label className="add-form__label">
            Number
            <input
              className="add-form__input"
              type="tel"
              name="number"
              value={number}
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
            />
          </label>
          <button className="add-form__btn" type="submit">
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
