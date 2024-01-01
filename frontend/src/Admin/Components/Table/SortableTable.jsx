import Table from './Table';
import useSort from '../../../Hooks/use-sort';

function SortableTable(props) {
  const { sortOrder, sortBy, getIcons, handleClick, sortedData, config } =
    useSort(props);

  // const { config, data, sortingIcons } = props;
  // const [sortOrder, setSortOrder] = useState(null);
  // const [sortBy, setSortBy] = useState(null);

  // //Sorting icons function
  // const getIcons = (label, sortBy, sortOrder) => {
  //   if (label !== sortBy) {
  //     return sortingIcons.unsorted;
  //   } else if (sortOrder === null) {
  //     return sortingIcons.unsorted;
  //   } else if (sortOrder === 'asc') {
  //     return sortingIcons.ascending;
  //   } else if (sortOrder === 'desc') {
  //     return sortingIcons.descending;
  //   }
  // };

  // // Click on header to sort as asc or desc or null by label
  // const handleClick = (label) => {
  //   if (sortBy && label !== sortBy) {
  //     setSortOrder('asc');
  //     setSortBy(label);
  //     return;
  //   }
  //   if (sortOrder === 'asc') {
  //     setSortOrder('desc');
  //     setSortBy(label);
  //   } else if (sortOrder === 'desc') {
  //     setSortOrder(null);
  //     setSortBy(null);
  //   } else {
  //     setSortOrder('asc');
  //     setSortBy(label);
  //   }
  // };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    // This will override the header is sortValue is present in config
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // // Only sort data if sortOrder && sortBy are not null
  // // Make a copy of the 'data' prop
  // // Find the correct sortValue function and use it for sorting

  // let sortedData = data;

  // if (sortOrder && sortBy) {
  //   const { sortValue } = config.find((column) => column.label === sortBy);
  //   sortedData = [...data].sort((a, b) => {
  //     const valueA = sortValue(a);
  //     const valueB = sortValue(b);

  //     let reverseOrder = sortOrder === 'asc' ? 1 : -1;
  //     if (typeof valueA === 'number') {
  //       return (valueA - valueB) * reverseOrder;
  //     } else if (typeof valueA === 'string') {
  //       return valueA.localeCompare(valueB) * reverseOrder;
  //     }
  //     return null;
  //   });
  // }

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

export default SortableTable;
