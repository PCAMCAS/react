import { differenceInDays } from 'date-fns';

export function calcularDiferenciaEnDias(
  fechaInicio: Date,
  fechaFin: Date
): number {
  return differenceInDays(fechaFin, fechaInicio);
}