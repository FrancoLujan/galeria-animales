const geleria = document.querySelector(".cajaGaleria");

async function ObtenerGatito() {
    const url = `https://api.thecatapi.com/v1/images/search?limit=20`;
    const api_key = "DEMO_API_KEY"


  try {
    let promesa = await  fetch(url,{headers: {
        'x-api-key': api_key
      }})

    let gatitos =  await (promesa.json())
    console.log(gatitos)
    gatitos.forEach(cat => {
        geleria.innerHTML += `<img class="perro" src="${cat.url}" >`
        
    });

    
  } catch (error) {
    alert(error);
  }
}



window.addEventListener("scroll", () =>{
    const  {clientHeight, scrollHeight, scrollTop} = document.documentElement
    scrollTop + clientHeight > scrollHeight - 5 && ObtenerGatito()
})
ObtenerGatito()