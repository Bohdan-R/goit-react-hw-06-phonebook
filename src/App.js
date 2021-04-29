import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactOperations from './redux/contacts/contacts-operations';
import contactsSelectors from './redux/contacts/contacts-selectors';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Spinner from './components/Spinner';

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }
  render() {
    return (
      <>
        <div className="section">
          <h1>Phonebook</h1>
          <ContactForm />

          <p>Contacts</p>

          <Filter />

          <ContactList />

          {this.props.isLoadingContacts && <Spinner />}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactOperations.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
