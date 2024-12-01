import React, { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';

export default function CustomTable({ columns, data }) {
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>
            <Checkbox
              aria-label="Select all rows"
              checked={selectedRows.length === data.length && data.length > 0}
              indeterminate={
                selectedRows.length > 0 && selectedRows.length < data.length
              }
              onChange={(event) =>
                setSelectedRows(
                  event.currentTarget.checked
                    ? data.map((_, index) => index)
                    : []
                )
              }
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
            style={{
              backgroundColor: selectedRows.includes(rowIndex)
                ? 'var(--mantine-color-blue-light)'
                : undefined,
            }}
          >
            <td>
              <Checkbox
                aria-label={`Select row ${rowIndex}`}
                checked={selectedRows.includes(rowIndex)}
                onChange={(event) =>
                  setSelectedRows(
                    event.currentTarget.checked
                      ? [...selectedRows, rowIndex]
                      : selectedRows.filter((index) => index !== rowIndex)
                  )
                }
              />
            </td>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
