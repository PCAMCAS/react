import { DataTable } from './components/DataTable';
import { students } from './data/students';
import { calcularDiferenciaEnDias } from './utils/date';
import type { DataTableColumn, Student } from './types/table';
import './App.css';

const studentColumns: DataTableColumn<Student>[] = [
  { key: 'nombre', header: 'Nombre', editable: true },
  { key: 'email', header: 'Email', editable: true },
  { key: 'activo', header: 'Activo', editable: true },
  { key: 'curso', header: 'Curso', editable: true }
];

const fechaInicioCurso = new Date('2026-02-01');
const fechaRevision = new Date('2026-03-15');
const diferenciaEnDias = calcularDiferenciaEnDias(
  fechaInicioCurso,
  fechaRevision
);

function App() {
  return (
    <main className="app">
      <section className="app__hero">
        <p className="app__eyebrow">Práctica 4 · Módulo 3</p>
        <h1 className="app__title">DataTable genérica con TypeScript</h1>
        <p className="app__description">
          Componente genérico con edición tipada de filas, usando <strong>Partial&lt;T&gt;</strong>{' '}
          para gestionar el estado temporal sin perder seguridad de tipos.
        </p>
      </section>

      <section className="app__card">
        <h2 className="app__section-title">Utilidad de fechas tipada</h2>
        <p className="app__description">
          Diferencia entre <strong>01/02/2026</strong> y <strong>15/03/2026</strong>:{' '}
          <strong>{diferenciaEnDias} días</strong>
        </p>
      </section>

      <section className="app__card">
        <h2 className="app__section-title">Listado de estudiantes</h2>
        <DataTable<Student> data={students} columns={studentColumns} />
      </section>
    </main>
  );
}

export default App;