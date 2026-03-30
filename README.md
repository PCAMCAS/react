# DataTable genérica con React + TypeScript

Proyecto de práctica enfocado en el uso de TypeScript en frontend moderno con React, aplicando tipado estricto, genéricos y buenas prácticas de arquitectura.

---

## 🚀 Tecnologías

- React
- TypeScript (strict mode)
- Vite
- date-fns

---

## 🎯 Objetivo

Construir un componente reutilizable y tipado (`DataTable<T>`) capaz de renderizar diferentes tipos de datos sin perder seguridad de tipos.

Además, aplicar conceptos avanzados de TypeScript en un entorno real de frontend.

---

## 🧠 Conceptos aplicados

- Genéricos (`<T>`)
- `keyof` para tipado dinámico de columnas
- `Partial<T>` para edición de estado
- Separación de responsabilidades
- Integración de librerías externas con tipado (`date-fns`)
- Type checking sin emisión (`tsc --noEmit`)

---

## 📦 Estructura del proyecto
src/
components/ → componentes reutilizables
types/ → tipos y contratos
data/ → datos de ejemplo
utils/ → utilidades (fechas)
docs/ → documentación técnica


---

## ▶️ Scripts

```bash
npm run dev        # entorno de desarrollo
npm run build      # build de producción
npm run preview    # preview del build
npm run typecheck  # verificación de tipos

## 📊 Estado
✔ Tipado estricto habilitado
✔ Sin errores de TypeScript
✔ Componente genérico funcional
✔ Edición de filas con Partial<T>
✔ Utilidad de fechas tipada

## 📌 Notas

Este proyecto forma parte de una práctica orientada a entender cómo TypeScript mejora la calidad del código en aplicaciones reales, reduciendo errores en runtime y aumentando la mantenibilidad.
