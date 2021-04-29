import React from 'react';
import { connect } from 'react-redux';
import contactOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import './ContactList.scss';

const ContactList = ({ contacts, deleteContact }) => (
  <div className="contact">
    <ul className="contact__list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="contact__item">
          {name}&nbsp;{number}
          <button
            type="button"
            className="contact__btn"
            onClick={() => deleteContact(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
