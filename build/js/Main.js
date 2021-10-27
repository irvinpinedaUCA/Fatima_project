
let computerList = [];
let form = document.getElementById('formProduct')

if(!(localStorage.getItem('item'))){
    localStorage.setItem('item',JSON.stringify(computerList));
}
let dataStorageInfoParsed = JSON.parse(localStorage.getItem('item'));

function showInfo(datos){
    //var items = localStorage.getItem('item');
    //var datos = JSON.parse(items);

    let mostrar = document.querySelector(".show")
    mostrar.innerHTML = "";
    let show = datos.map((item) => {
    mostrar.innerHTML += 
        `
        <div class="sm:block w-full md:flex justify-center items-center mb-4 border-b-2 border-black pb-1">
        <div class=""><img class="w-full inline-block" src ="${item.imagen}"></div>
        <div class="w-full">
        <p class="mb-2 ">-Marca: ${item.marca}</p>
        <p class="mb-2">-Modelo: ${item.modelo}</p>
        <p class="mb-2">-Color: ${item.color}</p>
        <p class="mb-2">-Precio: ${item.precio}</p>
        <p class="mb-2">-Memoria Ram:${item.ram}</p>
        <p class="mb-2">-Almacenamiento: ${item.almacenamiento}</p>
        <p class="mb-2">-Procesador: ${item.tipoProcesador} ${item.procesador}</p>
        </div>
        </div>
        `
    });
}

form.addEventListener('submit', (e) => {
    let formData = new FormData(form);
    let computer = new Computer;
    e.preventDefault();
    computer.computer(formData.get('marca'),formData.get('modelo'),formData.get('color')
    ,formData.get('procesador'),formData.get('cpuType'),formData.get('ram'),formData.get('almacenamiento')
    ,formData.get('url'),formData.get('precio'));
    
    computerList = JSON.parse(localStorage.getItem('item'));
    computerList.unshift(computer);
    localStorage.setItem('item',JSON.stringify(computerList));
    showInfo(computerList);
})
showInfo(dataStorageInfoParsed);
console.log(computerList)

    










