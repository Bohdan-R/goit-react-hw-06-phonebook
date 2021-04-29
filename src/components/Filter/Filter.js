import React from 'react';
import { connect } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <div className="find-form">
    <label className="find-form__label">
      Find contact by name
      <input
        className="find-form__input"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsAction.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
