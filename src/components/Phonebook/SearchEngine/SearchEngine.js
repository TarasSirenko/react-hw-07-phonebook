import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/phonebook/contacts-selector';
import { filterAction } from 'redux/phonebook/contacts-action';
import PropTypes from 'prop-types';
import s from './SearchEngine.module.css';

export default function SearchEngine() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.Lable}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={s.SearchFilter}
        value={filter}
        onChange={e => dispatch(filterAction(e.currentTarget.value))}
      />
    </label>
  );
}

SearchEngine.propTypes = {
  filter: PropTypes.string,
  onInputChange: PropTypes.func,
};
