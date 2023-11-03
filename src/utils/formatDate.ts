import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default (date: string) =>
  format(new Date(date), "dd MMM yyyy", { locale: ptBR });
