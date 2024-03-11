const geleria = document.querySelector(".cajaGaleria");

export async function ObtenerPerritos() {
  try {
    let promesa = await fetch("https://dog.ceo/api/breeds/image/random/10");

    let perrito = await promesa.json();
    perrito.message.forEach((perritos) => {
      geleria.innerHTML += `<img class="perro" src="${perritos}" >`;
    });
  } catch (error) {
    alert(error);
  }
}



