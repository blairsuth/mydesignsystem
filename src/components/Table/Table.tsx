import React from 'react';
import style from './table.module.css';

interface TableProps {
  /**
   * Table Headers
   */
  headers?: React.ReactNode[];
  /**
   * Content of table rows and cells
   */
  content?: React.ReactNode[][];
}

const Table: React.FC<TableProps> = ({ headers, content }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        {headers?.map((header, index) => (
          <th className={style.th} key={`header-${index}`}>
            {header}
          </th>
        ))}
      </thead>
      <tbody>
        {content?.map((row, rowIndex) => (
          <tr className={style.tr} key={`row-${rowIndex}`}>
            {row.map((cell, cellIndex) => (
              <td className={style.td} key={`cell-${rowIndex}-${cellIndex}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
