import { Fragment } from 'react';

// function Echo({children}) {    /// can be used instead of Fragment
//     return children;
// }

function Table({ data, config, keyFn }) {
  // const handleClickId = (value) => {
  //   setModalId(value);
  // };
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((row) => {
    const renderedCells = config.map((column) => {
      return (
        <td
          // onClick={() => handleClickId(index)}
          key={column.label}
          className="p-3"
        >
          {column.render(row)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(row)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="w-full table-auto border-spacing-2 border-2 border-solid border-inherit">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
