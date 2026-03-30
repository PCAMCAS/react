export interface Student {
  readonly id: string;
  nombre: string;
  email: string;
  activo: boolean;
  curso: number;
}

export interface DataTableColumn<T> {
  key: keyof T;
  header: string;
  editable?: boolean;
}

export type EditableRow<T extends { id: string }> = Partial<T> & {
  id: T['id'];
};