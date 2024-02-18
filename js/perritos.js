const geleria = document.querySelector(".cajaGaleria");

async function ObtenerPerritos() {
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



window.addEventListener("scroll", () =>{
    const  {clientHeight, scrollHeight, scrollTop} = document.documentElement
    scrollTop + clientHeight > scrollHeight - 5 && ObtenerPerritos()
})
ObtenerPerritos()