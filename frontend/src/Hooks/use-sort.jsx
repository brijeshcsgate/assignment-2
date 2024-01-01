import { useState } from 'react';

function useSort(props) {
  const { config, data, sortingIcons } = props;
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  //Sorting icons function
  const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
      return sortingIcons.unsorted;
    } else if (sortOrder === null) {
      return sortingIcons.unsorted;
    } else if (sortOrder === 'asc') {
      return sortingIcons.ascending;
    } else if (sortOrder === 'desc') {
      return sortingIcons.descending;
    }
  };

  // Click on header to sort as asc or desc or null by label
  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }
    if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    } else {
      setSortOrder('asc');
      setSortBy(label);
    }
  };

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop
  // Find the correct sortValue function and use it for sorting

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      let reverseOrder = sortOrder === 'asc' ? 1 : -1;
      if (typeof valueA === 'number') {
        return (valueA - valueB) * reverseOrder;
      } else if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      }
      return null;
    });
  }

  return {
    sortOrder: sortOrder,
    sortBy: sortBy,
    getIcons: getIcons,
    handleClick: handleClick,
    sortedData: sortedData,
    config: config,
  };
}

export default useSort;
