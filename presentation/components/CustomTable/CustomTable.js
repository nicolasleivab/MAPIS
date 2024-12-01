// CustomTable.jsx

import React, { useState } from 'react';
import * as styles from './CustomTable.module.css';

export default function CustomTable({ columns, data }) {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedRows(data.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (event, rowIndex) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, rowIndex]);
    } else {
      setSelectedRows(selectedRows.filter((index) => index !== rowIndex));
    }
  };

  const isRowSelected = (rowIndex) => selectedRows.includes(rowIndex);

  const areAllRowsSelected =
    selectedRows.length === data.length && data.length > 0;
  const isIndeterminate =
    selectedRows.length > 0 && selectedRows.length < data.length;

  return (
    <table className={styles.CustomTable}>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              aria-label="Select all rows"
              checked={areAllRowsSelected}
              ref={(input) => {
                if (input) input.indeterminate = isIndeterminate;
              }}
              onChange={handleSelectAll}
            />
          </th>
          {columns.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={isRowSelected(rowIndex) ? styles.selectedRow : ''}
          >
            <td>
              <input
                type="checkbox"
                aria-label={`Select row ${rowIndex}`}
                checked={isRowSelected(rowIndex)}
                onChange={(event) => handleRowSelect(event, rowIndex)}
              />
            </td>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
