import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos, markAllCompleted } from '../Redux/action';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <select value={currentFilter} onChange={(e) => handleFilter(e.target.value)}>
        <option value="ALL">Default</option>
        <option value="COMPLETED">Incomplet</option>
        <option value="INCOMPLETE">completed</option>
      </select>

      <button onClick={() => dispatch(markAllCompleted())}>Mark All Completed</button>
    </div>
  );
};

export default FilterButtons;
