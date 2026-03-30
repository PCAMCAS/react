import { useState } from 'react';
import type { DataTableColumn, EditableRow } from '../types/table';
import './DataTable.css';

interface DataTableProps<T extends { id: string }> {
  data: T[];
  columns: DataTableColumn<T>[];
}

export function DataTable<T extends { id: string }>({
  data,
  columns
}: DataTableProps<T>) {
  const [rows, setRows] = useState<T[]>(data);
  const [editingRow, setEditingRow] = useState<EditableRow<T> | null>(null);

  const startEditing = (row: T): void => {
    setEditingRow({ ...row });
  };

  const cancelEditing = (): void => {
    setEditingRow(null);
  };

  const handleFieldChange = <K extends keyof T>(key: K, value: T[K]): void => {
    setEditingRow((current) => {
      if (current === null) {
        return null;
      }

      return {
        ...current,
        [key]: value
      };
    });
  };

  const saveEditing = (): void => {
    if (editingRow === null) {
      return;
    }

    const updatedRows = rows.map((row) =>
      row.id === editingRow.id ? { ...row, ...editingRow } : row
    );

    setRows(updatedRows);
    setEditingRow(null);
  };

  const isEditingRow = (rowId: string): boolean => {
    return editingRow?.id === rowId;
  };

  const getDisplayValue = (row: T, key: keyof T): string => {
    const value = row[key];
    return String(value);
  };

  const renderEditableCell = (row: T, column: DataTableColumn<T>) => {
    const key = column.key;
    const currentValue = editingRow?.[key] ?? row[key];

    if (typeof row[key] === 'boolean') {
      return (
        <select
          className="data-table__input"
          value={String(currentValue)}
          onChange={(event) =>
            handleFieldChange(key, (event.target.value === 'true') as T[typeof key])
          }
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      );
    }

    if (typeof row[key] === 'number') {
      return (
        <input
          className="data-table__input"
          type="number"
          value={String(currentValue)}
          onChange={(event) =>
            handleFieldChange(key, Number(event.target.value) as T[typeof key])
          }
        />
      );
    }

    return (
      <input
        className="data-table__input"
        type="text"
        value={String(currentValue)}
        onChange={(event) =>
          handleFieldChange(key, event.target.value as T[typeof key])
        }
      />
    );
  };

  if (rows.length === 0) {
    return (
      <div className="data-table__empty" role="status">
        No hay datos disponibles.
      </div>
    );
  }

  return (
    <div className="data-table__wrapper">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)}>{column.header}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => {
            const editing = isEditingRow(row.id);

            return (
              <tr key={row.id}>
                {columns.map((column) => (
                  <td key={`${row.id}-${String(column.key)}`}>
                    {editing && column.editable
                      ? renderEditableCell(row, column)
                      : getDisplayValue(row, column.key)}
                  </td>
                ))}

                <td className="data-table__actions">
                  {editing ? (
                    <>
                      <button
                        type="button"
                        className="data-table__button data-table__button--save"
                        onClick={saveEditing}
                      >
                        Guardar
                      </button>
                      <button
                        type="button"
                        className="data-table__button data-table__button--cancel"
                        onClick={cancelEditing}
                      >
                        Cancelar
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      className="data-table__button data-table__button--edit"
                      onClick={() => startEditing(row)}
                    >
                      Editar
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}