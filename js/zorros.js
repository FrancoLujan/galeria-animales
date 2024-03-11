const geleria = document.querySelector(".cajaGaleria");
export async function ObtenerZorros() {
  try {
    
    for(let i = 0; i < 6; i++){
        let promesa = await fetch("https://randomfox.ca/floof/");

        let zorro = await (promesa.json());
        setInterval(()=>{}, 400)
        geleria.innerHTML += `<img class="perro" src="${zorro.image}" >`

    }
  } catch (error) {
    alert(error);
  }
}

