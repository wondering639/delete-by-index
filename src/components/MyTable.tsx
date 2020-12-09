import { FC, useState } from 'react';

interface Row {
  id: number;
  content: string;
}

interface Props {
  initialRows: Row[];
}

export const MyTable: FC<Props> = function ({ initialRows }) {
  const [rows, setRows] = useState(initialRows);

  return (
    <table>
      <tbody>
        {rows.map((row, index) => (
          <tr key={`id${row.id}`}>
            <td>{row.content}</td>
            <td>
              <button
                type="button"
                onClick={() => {
                  const newRows = [...rows];
                  newRows.splice(index, 1);
                  setRows(newRows);
                }}
              >
                remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
