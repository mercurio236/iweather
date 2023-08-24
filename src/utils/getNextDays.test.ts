import { getNextDays } from "./getNextDays";

test("should be return the next five days", () => {
  //aqui onde vai ser executado o texto
  const days = getNextDays();
  
  //faz uma verificação se está funcionando
  expect(days.length).toBe(5) // aqui tem que retornar os proximos 5 dias
});
