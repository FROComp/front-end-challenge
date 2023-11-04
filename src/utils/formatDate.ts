import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (date: string) =>
  format(parseISO(date), "dd/MM/yyyy", { locale: ptBR });

export const formatDateYear = (date: string) =>
  format(new Date(date), "yyyy", { locale: ptBR });

export const formatDateToText = (date: string) =>
  format(new Date(date), "dd MMM yyyy", { locale: ptBR });
