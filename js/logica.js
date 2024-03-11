import { ObtenerGatito } from "./gatitos.js";
import { ObtenerPerritos } from "./perritos.js";
import { ObtenerZorros } from "./zorros.js";
const titulo = window.document.title;
let hacer = null;

let hacer2 = () => {
  switch (titulo) {
    case "Gatos":
      ObtenerGatito();
      break;
    case "Perros":
      ObtenerPerritos();
      break;
    case "Zorros":
      ObtenerZorros();
      break;
    default:
  }
};


window.addEventListener("scroll", () => {
  const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
  scrollTop + clientHeight > scrollHeight - 5 && hacer2();
});
hacer2()