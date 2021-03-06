import React from 'react';
import PropTypes from 'prop-types';
import { partial } from '../../lib/utils';

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id)

  return (
    <li>
      <input type="checkbox"
             onChange={handleToggle}
             checked={props.isComplete} /> {props.name} {props.isComplete}
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  handleToggle: PropTypes.func.isRequired
}