import React from 'react';
import { setFilter } from '../actions';
import { connect } from 'react-redux';

const MenuItem = ({ filter, children, setFilter }) => {
  return (
    <a href='#'
      onClick={e => {
        e.preventDefault();
        setFilter(filter);
      }}
    >{children}</a>
  )
}

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch( setFilter(filter) )
});

export default connect(null, mapDispatchToProps)(MenuItem);
