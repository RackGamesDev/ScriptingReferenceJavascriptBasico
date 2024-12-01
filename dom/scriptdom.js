//Todo esto se ejecuta luego de que el html importe el script, por lo que si otro script cambia mas cosas despues este no se enterara
//Todo lo relacionado al html esta en window.document


//Document
console.log(document.head);//head de html como string
console.log(document.body);//body de html como string
console.log(document.documentElement);//Mucha informacion sobre este elemento
console.log(document.doctype);//doctype de html como string
console.log(document.title);//El titulo de la pagina como string
console.log(document.links);//Todos los links en la pagina
console.log(document.images);//Referencias a todas las imagenes en la pagina
console.log(document.forms);//Referencias a todos los formularios en la pagina
console.log(document.styleSheets);//Referencias a todos los css en la pagina
console.log(document.scripts);//Referencias a todos los scripts en la pagina incluyendo este

//Conseguir elementos o poner nuevos
console.log(document.getSelection().toString());//Lo que tengas seleccionado
document.write("<h2>nuevo</h2>");//Escribir al final del body (no recomendable)
console.log(document.getElementsByTagName("p"));//Devuelve todos los bloques que sean esa etiqueta
console.log(document.getElementsByClassName("cards"));//Devuelve todos los bloques que sean de esa clase
console.log(document.getElementsByTagName("nombre"));//Devuelve todos los bloques que sean de ese nombre
console.log(document.getElementById("menu"));//Devuelve el elemento de ese id
console.log(document.querySelector("#nombre"));//Devuelve el primer elemento que cumpla esa propiedad, la misma notacion que en css (etiqueta .clase etc)
console.log(document.querySelectorAll(".clase")[2]);//Igual pero devuelve todos, no es un array pero si comparte muchas propiedades, para poner varias condiciones se separan con espacios
const $elEnlace = document.querySelector(".link-dom");//Puede ser conveniente guardar en variables los elementos del html, el $ es solo para diferenciarlas del resto de variables
if($elEnlace.matches(".link-dom")){//Devuelve true si tiene esa clase (.) o ese id (#). para atributos personalizados es con "[nombre-atributo]"

}

//Atributos de elementos
console.log($elEnlace.getAttribute("href"));//Se puede conseguir el valor de sus propiedades, obviamente solo se usara el primero que encuentre
console.log($elEnlace.getAttribute("data-personalizado"));//Tambien va con atributos personalizados, ya que funcionan como atributos normales
$elEnlace.dataset.personalizado = "ho";//En caso de que se usen los atributos personalizados tambien se pueden acceder asi
console.log($elEnlace.href);//Otra manera para hacer lo de arriba, con el href cambia un poco
$elEnlace.setAttribute("href", "about:blank");//Para cambiar el valor de una propiedad
$elEnlace.setAttribute("target", "_blank");//Si la propiedad no la tiene, la agnadira
console.log($elEnlace.hasAttribute("href"));//Devuelve true si tiene ese atributo escrito
$elEnlace.removeAttribute("target");//Elimina ese atributo dejando su valor como el por defecto
console.log(document.documentElement.lang);//Devuelve una propiedad unica del html, lang solo aparece una vez por ejemplo
document.documentElement.lang = "en";//Tambien se puede establecer, aqui tambien funciona el .setAtribute()

//css
const $html = document.documentElement, $body = document.body;//Se suelen guardar los cuerpos principales en variables
console.log($elEnlace.style);//Todas las propiedades css de ese elemento
console.log(window.getComputedStyle($elEnlace));//Igual que antes pero el mapeado es distinto usando indices
console.log(window.getComputedStyle($elEnlace).getPropertyValue("background-color"));//Otra manera de conseguir la propiedad de css, usando el - (similar a lo de abajo)
console.log($elEnlace.style.backgroundColor);//Acceder a una propiedad css de un elemento concreto, en lugar de usar el - para los cambios de palabra se usa la letra mayuscula
$elEnlace.style.setProperty("text-decoration", "none");//Cambiar la propiedad en concreto de un elemento usando el - (no recomendado si se usan archivos .css)
$elEnlace.style.width = "50%";//Igual que antes pero con el .
console.log(getComputedStyle($html).getPropertyValue("--color-principal"));//Devuelve una variable custom de css creada en :root{}, se suele guardar en un let
$html.style.setProperty("--color-principal", "rgb(222,54,76)");//Cambiar una variable custom de css creada en :root{}
const datoss = $elEnlace.getBoundingClientRect();//Relacionado con la variable css transform, devuelve un objeto con varios datos sobre su posicion, util para hacer colisiones

console.log($elEnlace.className);//Que tipo de etiqueta es
console.log($elEnlace.classList);//Las clases que tiene ese elemento
console.log($elEnlace.classList.contains("link-dom"));//Devuelve true si tiene esa clase
$elEnlace.classList.add("elemento-secundario");//Agnadir una clase a un elemento, se pueden poner varias en una linea separando por ,
$elEnlace.classList.remove("elemento-secundario");//Quitar una clase si la tenia, se pueden quitar varias en una linea separando por ,
$elEnlace.classList.toggle("elemento-secundario");//Si la tiene la quita, si no la pone
$elEnlace.classList.replace("elemento-secundario", "elemento-alterno");//Quita la primera clase para poner la segunda

//Modificar html
const $cont = document.getElementById("menu");
$cont.textContent = 'el nuevo texto y eso';//Cambiar el contenido de una etiqueta, solo su texto
$cont.innerHTML = '<p>parr1</p> <p>parr2</p>';//Igual pero si reconoce las etiquetas
console.log($cont.innerHTML);//Ambas tambien se pueden recibir
$cont.outerHTML = '<p>parr1</p> <p>parr2</p>';//Elimina esa etiqueta para poner las que hayan aqui dentro
console.log($cont.children);//Devuelve todas las etiquetas que tenga dentro como array, tambien tiene firstChild y lastChild
console.log($cont.lastElementChild);//Similar pero cuenta tambien los espacios y saltos de linea, tambien esta el lastElementChild
console.log($cont.parentElement);//Devuelve el elemento en el que esta
console.log($cont.previousSibling);//El elemento justo antes, tambien esta nextSibling (y previousElementSibling/nextElementSibling)
console.log($cont.closest("body"));//Busca hacia arriba el elemento mas cercano de esa etiqueta

const $elContenedor = document.getElementById("el-contenedor");
const $nuevo = document.createElement("h1");//Crea un elemento de x etiqueta al final, luego habria que ponerle sus atributos y eso. tambien se podria hacer a mano con el .innerHTML
const $nuevoTexto = document.createTextNode("hola esto es un nuevo texto");//Se crea un nodo de texto para la etiqueta
$elContenedor.appendChild($nuevo);//Agregar el elemento a otro elemento padre
$nuevo.appendChild($nuevoTexto);//Agregar el texto al elemento
$fragmento = document.createDocumentFragment();//Crea un html virtual para luego agnadirlo de golpe al document de verdad
for (let i=0;i<10;i++){
    $fragmento.appendChild($nuevo);//Si se van a crear muchos elementos se agnaden primero al fragment para no saturar el document
}
$elContenedor.appendChild($fragmento);//Una vez procesado se modifica el document de verdad
$plantilla = document.getElementById("plantilla").content;//Guardar una plantilla en una variable, la etiqueta es de tipo template
let $clonDePlantilla = document.importNode($plantilla, true);//Despues de modificar la variable plantilla como haga falta se puede importar a una variable. true para copiar toda la estructura interna
$elContenedor.appendChild($clonDePlantilla);//El clon funciona como un objeto normal y puede ser renderizado

//$elContenedor.replaceChild($clonDePlantilla, $nuevo);//Quita el segundo y pone el primero (no recomendable) (old)
$elContenedor.insertBefore($clonDePlantilla, $nuevo);//Pone el primero antes que donde esta el segundo (old)
$elContenedor.removeChild($elContenedor.lastChild);//Elimina un elemento, util con lastChild y firstChild (old)
const $elContenedorDos = $elContenedor.cloneNode(true);//Guarda una copia del nodo en una variable, true para copiar tambien su contenido (old)
$elContenedor.insertAdjacentElement("afterbegin", $nuevo);//Agnadiria clondeplantilla referente a elContenedor, la posicion se define por: "afterbegin", "beforebegin", "afterend", "beforeend" refiriendose a la etiqueta
$elContenedor.append($nuevo);//Lo pone despues de la etiqueta, esta y las 3 siguientes son alternativas a la linea de arriba
$elContenedor.prepend($nuevo);//Lo pone al principio de la etiqueta
$elContenedor.before($nuevo);//Lo pone antes de la etiqueta pero fuera
$elContenedor.after($nuevo);//Lo pone despues de la etiqueta pero fuera

//Eventos
function FuncionBoton(e){//Cuando una funcion se llama desde html se convierte en un manejador de eventos (no puede recibir parametros, solo la e de events)
    console.log("click");
    console.log(e);//Objeto con informacion sobre el evento (obsoleto)
    event.stopPropagation();//(obsoleto) hace que si esta dentro de otros botones, solo se ejecute este
    event.preventDefault();//Bloquea las acciones pordefecto de el elemento (ej: un enlace abre una pestagna)
}
const $botonEvento = document.getElementById("evento");
$botonEvento.onclick = FuncionBoton;//La forma correcta de hacerlo es asi (solo una funcion por evento)
$botonEvento.onclick = function (e) {console.log(e);}//Tambien se puede con arrow functions

const $botonMultiEvento = document.getElementById("multievento");
$botonMultiEvento.addEventListener("click", FuncionBoton);//Para poner varias funciones a un solo evento se hace poniendo esto por cada funcion
$botonMultiEvento.addEventListener("click", (e) => {console.log("hola" + e.type);});//Combinable tambien con arrow functions
function Decir(que = "nada"){
    console.log("aa "+que);
}
$botonMultiEvento.addEventListener("click", () => {Decir("hola");});//para pasar parametros haria falta esto
$botonMultiEvento.removeEventListener("click", Decir);//Elimina una funcion (declarada) de un evento
$botonMultiEvento.disabled = true;//Si esta disabled no manejara ningun evento ni nada
$botonMultiEvento.addEventListener("click", FuncionBoton, true);//Si hay elementos con evento dentro de otros, se ejecutara de dentro hacia fuera, si pones true sera de fuera hacia dentro (el originador del evento siempre sera el mismo)
$botonMultiEvento.addEventListener("click", FuncionBoton, {capture: true, once: true});//Asi tambien se podria especificar once, que hace que solo se pueda llamar al evento una vez
document.addEventListener("click", (e) => {console.log("click a", e.target);
    if (e.target.matches("#multievento")){//Para optimizar mas se puede hacer un if por cada elemento usando clases y ids
        console.log("es multievento");
    }
    console.log(e.target);//Se puede acceder como objeto al elemento que provoco el evento
});//Agnadiendo un evento al document (a todo)

window.addEventListener("scroll", (e) => {console.log("scroleaste");});//El evento de cuando scrolleas, debe estar en window
console.log(window.pageYOffset, window.pageXOffset);//devuelve el offset en pixeles del scroll (obsoleto)
window.scrollTo({//Transporta el scroll a una posicion usando un objeto
    behavior: "smooth",//Para hacer que sea suave
    top: 0,//A que posicion en pixeles
    left: 0//Lo mismo pero en x
});

const $form = document.getElementById("formulario");
document.addEventListener("submit", (e) =>{//Agregando el evento para los botones submit
    if (e.target === $form){//Si el submit viene de x formulario
        e.preventDefault();
        console.log($form.input1.value);//Al ser un formulario se puede acceder a sus controles mas facilmente
    }
});


//teclado:
document.addEventListener("keydown", (e) => {//Este es para cuando se presione una tecla (tambien esta keyup cuando se suelte y keypress mientras este pulsada)
    console.log(e.code);//e.code es que tecla se pulso, cada una tiene un nombre
    if (e.ctrlKey || e.altKey || e.shiftKey){//Para comprobar si se presiono junto a ctrl/alt/shift

    }
});


//BOM:
window.addEventListener("resize", (e) => {//Evento al redimensionar la ventana
    console.log(window.innerHeight, innerWidth);//Tamagno de la ventana (la parte que se puede ver la pagina)
    console.log(window.outerHeight, outerWidth);//Tamagno de la ventana del navegador
});
window.addEventListener("scroll", (e) => {//Cuando haces scroll a un elemento en x o y
    console.log(window.scrollX, window.scrollY);//La cantidad de pixeles desplazados por el scroll
});

window.addEventListener("load", (e) => {//Cuando carga la ventana (similar a ponerlo talcual en el script)
    console.log(window.screenX, window.screenY);//En que pixel de la pantalla se empieza a renderizar la ventana
});
document.addEventListener("DOMContentLoaded", (e) => {});//Esto carga cuando el html se puede ver, que es despues del load
window.addEventListener("hashchange", (e) => {});//Cuando el # de la url cambie, tambien hay otro para los ? de la url

//window.open("about:blank");//Abre una pagina en una nueva ventana (o pestagna si el navegador lo tiene asi)
//window.close();//Cierra esta ventana
let vent = window.open("about:blank", "vent", "innerWidth=300, innerHeigth=300");//se puede almacenar la ventana en una variable, tambien se pueden pasar otros parametros extra para configuracion
vent.close();//Y cerrarla o acceder a sus metodos (el navegador podria bloquear esto)
//window.print();//Pedira imprimir lo que haya entre los parentesis, que podria ser un pdf

console.log(location);//Tiene cosas sobre la localizacion del servidor
console.log(location.origin);//url inicial
console.log(location.protocol);//El protocolo con el cual se envio (http)
console.log(location.host);//El host que usa
console.log(location.hostname);//Similar a host
console.log(location.port);//El puerto de internet por el cual se envia
console.log(location.href);//La url entera
//location.href = "about:blank";//Para redirigir en la pagina
console.log(location.hash);//En la url, lo que haya tras el #
console.log(location.search);//En la url, lo que haya tras el ?
console.log(location.pathname);//Despues del dominio, todo lo que lleve la url
//location.reload();//Recarga la pagina

console.log(history);//El historial de esa pestagna
console.log(history.length);//Cuantas paginas han habido en esa pestagna
//history.back(1);//Ir hacia atras en la pestagna (como ctrl z)
//history.forward(1);//Ir hacia adelante en la pestagna
//history.go(-1);//Igual que antes, positivo es hacia delante y negativo hacia atras. 0 es recargar

console.log(navigator);//Se refiere al navegador como programa
console.log(navigator.language);//El idioma del navegador
console.log(navigator.platform);//El sistema operativo (obsoleto)
console.log(navigator.connection);//Calidad de conexion a internet
console.log(navigator.geolocation);//Donde estas
console.log(navigator.mediaDevices);//Dispositivos conectados que este usando el navegador
console.log(navigator.serviceWorker);//Api para convertir paginas en aplicaciones
console.log(navigator.storage);//Cosas almacenadas de la pagina (ej:cookies)
console.log(navigator.onLine);//Si el cliente tiene conexion (true/false)
window.addEventListener("online", (e) => {});//Evento cuando empiece a estar online
window.addEventListener("offline", (e) => {});//Evento cuando empiece a estar offline (ej: pierde la conexion)

console.log(navigator.userAgent);//Datos del cliente (bastantes cosas)
const isMobile = {//Objeto con las validaciones para si estas en movil, en caso de que lo estes
    android: () => navigator.userAgent.match(/android/i),
    ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
    windows: () => navigator.userAgent.match(/windows phone/i),
    any: function() {
        return this.android() || this.ios() || this.windows();
    }
}
console.log(isMobile.android());//Devolvera null si no esta en android o directamente no esta en movil, lo mismo con ios y windowsphone
console.log(isMobile.any());//Devolvera null si no estas en cualquier tipo de telefono
const isDesktop = {//Objeto con las validaciones para saber en que sistema operativo estas
    linux: () => navigator.userAgent.match(/linux/i),
    mac: () => navigator.userAgent.match(/mac os/i),
    windows: () => navigator.userAgent.match(/windows nt/i),
    any: function(){
        return this.linux() || this.mac() || this.windows();
    }
}
console.log(isDesktop.linux());//Devolvera null si el navegador no se esta usando en cualquier version/distribucion de linux, lo mismo con el resto
const isBrowser = {//Objetos con las validaciones para saber que navegador estas usando, se podrian agnadir algunos mas
    chrome: () => navigator.userAgent.match(/chrome/i),
    safari: () => navigator.userAgent.match(/safari/i),
    firefox: () => navigator.userAgent.match(/firefox/i),
    opera: () => navigator.userAgent.match(/opera|opera mini| OPR/i),
    ie: () => navigator.userAgent.match(/msie|iemobile/i),
    edge: () => navigator.userAgent.match(/edge/i),
    any: function(){
        return (this.ie() || this.edge() || this.chrome() || this.safari() || this.firefox() || this.opera());
    }
}
console.log(isBrowser.firefox());//Devolvera null si no estas en firefox
console.log(isBrowser.any());//Devolvera null si no estas en ninguno de los navegadores mencionados


//scrollspy
const cb = (entries) => {//Funcion para el observer, se ejecuta cuando se hace el observer
    console.log(entries);//Entries hace referencia a todos los elementos especificasdos con el observer(lo devuelve como objeto con informacion varia)
    entries.forEach(entry => {
        if (entry.isIntersecting){
            console.log(entry);//Hace referencia solo a los elementos del observer que se estan viendo
        }
    })
}
const observer = new IntersectionObserver(cb, {});//Crear un observer, tambien hay un objeto con la configuracion (mirar en la documentacion)
$elContenedor.forEach(el => observer.observe(el));//Asignar el observer a un array de contenedores
