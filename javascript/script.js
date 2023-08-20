//archivo linkeado al html
//los comentarios se ponenen asi
/*
comentario de varias lineas*/
//el codigo se ejecuta de arriba a abajo desde que se ejecuta la pagina, en javascript todo son objetos dentro de otros
//hay mucha documentacion sobre todo en mdn mozilla
console.log("hola mundo");

//IMPORTACIONES
import { constanteExportada, constanteExportada2 as exp2, SumaExterna} from "./paquete.js";//para importar cosas de otros scripts se hace al principio y se pone el nombre del script declarado como modulo en el html. la ruta se pone desde arriba del todo con ./
console.log(constanteExportada, exp2);//ya se puede usar como si nada, la otra variable tiene el alias de exp2
SumaExterna(1,4);//funcion importada
//SaludarDefault();//usando la funcion exportada por defecto

//FUNCIONAMIENTO JAVASCRIPT:


//VARIABLES:
var letras = "aaaa";//declarar variable, su tipo se establece al crearla, con var se declara globalmente en todo el documento
var numero = 1233;
var decimal = 13.4;
var decimal = "ho";
var siono = true;
let numeroo = 14;//con let se declara solo en ese scope y no mas arriba de la jerarquia, esta es mejor
console.log(letras);//imprimir en la consola del navegador, se ejecutaria en este caso al cargar la pagina
console.log(window);//window contiene todos los datos ejecutandose sobre esa pagina excepto las variables let
console.log(window.numero);//se pueden sacar datos de window
{//esto es un scope
    var numero = 3;//dentro de un bloque se pueden redeclarar variables var
    numeroo = 4;//los let no se pueden volver a declarar dentro de ese scope o inferior
}
const variablepi = 3.1416;//variables constantes no modificables, no pueden estar vacias. si es una variable compuesta como objetos o arrays si se les podrian cambiar los valores aun siendo const
console.log(typeof numero);//devuelve de que tipo es una variable, ya que el tipo es dinamico
let fechaa = new Date(1934,12,19);
console.log(fechaa instanceof Date);//para ver si una variable de tipo objeto es de x clase se mira asi

//STRINGS:
let stringg = "palabricas";
numero = stringg.length;//devuelve el numero de caracteres
stringg = numero.toString(2);//devuelve el numero en string. el numero opcional es la base del numero (ej: 8 octal, 10 decimal, etc)
stringg.toUpperCase();//a mayusculas
stringg.toLowerCase();//a minusculas
siono = stringg.includes("la");//devuelve true si encuentra eso
stringg.trim();//quita los espacios al final y al principio
let chararray = stringg.split("a");//devuelve un array de strings, separando el texto original por ese caracter
stringg = stringg.slice(2,5);//usa solo desde el caracter x al y
stringg = stringg.split("").reverse().join("");//pone el string al reves
stringg = letras + "aaa";//concatenacion
stringg = `hola ${stringg} aa
aasdf`;//otra manera de concatenar

//SYMBOl:
const sy1 = Symbol("sy");//es un tipo de variable al que se le puede meter tanto string como number, son privadas y se suelen usar como identificadores
const sy2 = Symbol("sy");
console.log(sy1 === sy2);//aunque tengan la misma cadena no seran iguales porque eso es solo para diferenciarlos
const ID = Symbol();
const cosa = {[ID]: 123, propiedad:12};//se suele usar como ids en los objetos
cosa.ID = 3;//el id de la declaracion del objeto es interno y si se hace esto se creara una propiedad nueva llamada id
console.log(cosa[ID]);//para acceder al symbol se hace asi
const HACER = Symbol("dhago");//aunque se use como funcion conviene ponerle un identificador
cosa[HACER] = function () {console.log("hago");};//como aqui todo son objetos, los symbol tambien se pueden usar como funciones
cosa[HACER]();
console.log(Object.getOwnPropertySymbols(cosa));//devuelve las variables symbol

//NUMBERS:
let num = 3.4333;
num = num.toFixed(2);//redondear un numero
stringg = parseInt(num);//devuelve como string el numero entero
stringg = parseFloat(num);//devuelve como string el numero incluyendo decimales
num = parseInt(stringg);//en este caso pasa de int a string, si fuese posible
num = Number.parseInt(stringg);//todas estas funciones vienen de Number y no de window
console.log(parseInt(123,8));//el segundo numero es la base del numero (ej: 8 octal, 10 decimal, etc)

//BOOLEANS:
console.log(Boolean(0));//todos los numeros que no sean 0 cuentan como true
console.log(Boolean(1));//true
console.log(Boolean(""));//las cadenas vacias cuentan como false
console.log(Boolean("aa"));//true

//NODATA
let indefinida;//las variables sin datos son undefinied
let nula = null;//cuenta como que no tiene dato, pero se cuenta como null. se usa para hacer intencionalmente que no tenga nada
let notanumber = "hola";//es NaN porque no se puede calcular
siono = isNaN(notanumber);//devuelve true si es nan

//OBJECTS:
let objeto = {nombre:"nom", tamagno:12 };//declarar un objeto/grupo de variables, normalmente se declaran como const en lugar de let
console.log(objeto.nombre);//acceder a las propiedades del objeto para editarlas o leerlas
let objeto2 = {nombre:"nom", tamagno:12 };
objeto2 = objeto;//si tienen las mismas propiedades se pueden igualar
let objeto3 = {nombre:"nom2", decirHola:function (){console.log("ola" + this.nombre);}}//incluso pueden tener funciones porque estas tambien son objetos, this.x saca una propiedad de su objeto, si pones this fuera de eso sera igual que window
objeto3.decirHola();
let objeto4 = {dato:{n1:1,n2:2}, arr:[1,2,3]};//pueden tener tambien otros objetos o arrays, en general cualquier cosa
console.log(Object.keys(objeto));//lista como arrays los nombres de sus propiedades, no su contenido
console.log(Object.values(objeto));//igual que keys pero lista solo sus valores
console.log(objeto.hasOwnProperty("tamagno"));//devuelve true si tiene una propiedad cuya variable se llame igual
//ver tambien mas abajo como hacerlos con prototipos y la diferencia con las clases

const objetoPoco = {nombre: "nom", [`id_ + ${numero}`]: 34};//los nombres de las propiedades se pueden definir dinamicamente
objetoPoco.longitud = 12;//se pueden agregar nuevas propiedades a un objeto normal ya hecho, esto se suele hacer con bucles mejor
console.log(objetoPoco['id_' + numero]);//hay que saber ya que nombre se le dio a la propiedad
console.log(objetoPoco.longitud);

const mapa = new Map();//la variable mapa es similar a un objeto pero las propiedades se identifican por strings
const mapa2 = new Map([["nombre", "nom"],["edad", -1]]);//se pueden poner los valores iniciales, separados por distintos arrays
mapa.set("nombre", "yo");//agregar propiedades
mapa.set("edad", 999);//se puede con varios tipos de datos
mapa.set(12, "doce");//se pueden identificar por algo que no sea un string pero no es del todo recomendable
console.log(mapa.size);//cantidad de propiedades
console.log(mapa.has("nombre"));//devuelve true si tiene esa propiedad
console.log(mapa.get("nombre"));//devuelve el valor de la propiedad si la tiene
mapa.set("nombre", "ya no");//cambia el valor de una propiedad
mapa.delete("edad");//elimina una propiedad y su valor
for (let [key, value] of mapa){//es iterable con el for
    console.log(key + ":" + value);
}
const mapakeys = [...mapa.keys()];//devuelve los identificadores como array
const mapavalues = [...mapa.values()];//devuelve los valores como array
mapa.clear();//borra todo
const wmap = new WeakMap();//como un map pero sin size ni clear, es mas ligero. el resto es todo igual
let valorwmap1 = {};
wmap.set(valorwmap1, "aa");//se tienen que agregar asi los elementos, con objetos ya creados. si el objeto llegara a ser null la propiedad se limpiaria automaticamente



//ARRAYS:
let nombres = ["nom1", "nom2", "nom3"];//array, variable que almacena datos en distintas posiciones, normalmente se declaran como const en lugar de let
console.log(nombres[2]);//acceder a una posicion concreta del array para leerla o modificarla
nombres.push("nom4");//agnadir una nueva posicion al array
nombres.pop();//quita el ultimo elemento
num = nombres.length;//devuelve el numero de elementos similar a string
let arrray = [1, true, "hola", 4.3, ["a", "b", "c"], {a:"a", i:"1"}];//como los tipos son dinamicos se puede hacer esto
console.log(arrray);
let plano = [["0a", "0b"], ["1a", "1b"], ["2a", "2b"]]//array de varias dimensiones, en este caso hay 2
console.log(plano[2][1]);//acceder a una posicion de un array multidimensional
let arrayy = Array(15).fill("at");//un array de 15 posiciones, todas tienen "at"
nombres.forEach(function(el, index){console.log(index + " es " + el);});//ejecuta esa funcion auxiliar por cada elemento del array, similar a un bucle. se podrian poner mas lineas en esa funcion. el=valor del elemento y index=numero de elemento
arrray.sort();//ordena los numeros por tamagno y los strings por orden alfabetico
arrray = arrray.map(el => el++);//cambiar el valor de cada elemento en una sola linea
arrray = arrray.reverse();//todos sus elementos pero al reves
console.log(arrray.indexOf(2));//busca el dato en el array y devuelve la posicion donde la encontro
arrray = arrray.filter((value, index, self) => value > 2);//devuelve el como array todos los elementos que cumplan esa condicion. self = array en si, index = posicion, value = dato de la posicion
let arry = ["uno", "dos", "tres"];
console.log(arry.join(" y "));//devuelve como string todos los elementos del array concatenados metiendo un separador
arrray = new Set(arrray);//devuelve ese array pero sin elementos repetidos

const arrset = new Set([1,1,2,2,3,"a"]);//se puede hacer una variable de set que funciona como un array pero sus elementos son equivocos
console.log(arrset.size);//tamagno del set
arrset.add(4);//agrega un elemento solo si no esta repetido
let arrdeset = Array.from(arrset);//pasa el set a una variable
console.log(Array.from(arrset)[2]);//para sacar un dato concreto de un set
arrset.delete("a");//elimina la posicion que tenga ese dato
console.log(arrset.has(3));//devuelve true si tiene ese dato
arrset.forEach(function(el, index){console.log(index + ":" + el);});//es iterable con el foreach
arrset.clear();//elimina todas las posiciones
const wset = new WeakSet();//es como un set pero solo se puede modificar con el add y el delete, no tiene ni size ni clear pero ocupa menos memoria, el resto es igual
let valorwset1 = {"nombre": "nom"};
wset.add(valorwset1);//solo se pueden agnadir si son objetos ya hechos, si ese objeto termina siendo null automaticamente el weakset limpiara sus propiedades


//FUNCIONES BASICAS:
Saludar();//se pueden llamar antes de ser declaradas
function Saludar(){//declarar la funcion, incluso se pueden usar como objetos. son importantes para comunicar con html
    console.log("Hola");
}
Saludar();
function Devolver(){
    return "pong";//funcion que devuelve un dato, lo de despues del return no se ejecuta
}
stringg = Devolver();//string pasaria a tener "pong" porque la funcion valdria lo que devuelve
function Decir(elQue, elQue2){//funcion que pide valores
    console.log(elQue);//se esta tratando como string, hay que tener cuidado con los tipos usando typeof
    console.log(elQue2);
}
Decir("holass", "adioss");//insertandole el valor
function Sumar(num1 = 0, num2 = 0){//estas igualaciones son por si al llamarla no se pone nada, en lugar de ser undefinied seria ese valor por defecto
    return num1 + num2;//hay que tener cuidado con los typeof, aunque aqui no se usen
}
num = Sumar(2,4);
function FuncionPeligrosa(num){
    if (num < 0){
        return console.error("nao nao");//se puede retornar una linea de codigo, en caso de que pase eso la funcion parara y se ejecutara la linea
    }
}
//FuncionExpresada(); no va
const FuncionExpresada = function() {//esta funcion no se puede ejecutar antes de ser declarada, el resto funciona como si nada. se suele usar const pero let tambien valdria
    console.log("hol a");
}
FuncionExpresada();//si va

//ARROW FUNCTIONS:
const DecirAlgoo = (que, que2) => console.log("algo" + que + " " + que2);//si una funcion solo usa una linea se puede hacer asi
DecirAlgoo("quee", "soo");
const DevolverAlgoo = (n1, n2) => n1 + n2;//esto valdria como un return, pero no se escribe return
num = DevolverAlgoo(3,5);
arrray.forEach((el, index) => console.log(index + " es " + el));//ejemplo usando esto en el foreach
const ArrowFun = (param) => {//si se hace asi, las arrow functions tambien pueden tener varias lineas
    console.log(param);
    console.log("segunda linea");
}
ArrowFun("aa");

(function (d, w, c) {//es una funcion anonima/privada que se ejecutara cuando el flujo del script llegue aqui, sirve para protejer codigo de otros scripts
    c.log("contenido de funcion anonima iife");//c es console, se paso como parametro
})(document, window, console);//para meter parametros hacia esta funcion se ponen aqui


//OPERADORES BASICOS:
let num1 = 1;
let num2 = 3.4;
num1 = num2 + 1;
num1 = num2 - 1;
num1 = num2 * 1;
num1 = num2 / 1;//puede no devolver numeros enteros
num1 = (num2) + 1;
num1 = num2 % 2;//resto de division
num1 += 2;//operar por si mismo, se pueden usar los otros operadores
num1++;//incrementar 1, tambien esta -- para decrementar 1
console.log(++num1);//x++ incrementa sin tener encuenta donde esta, ++x devuelve x sumandole 1 sin modificar la variable
siono = (num1 > num2);//devuelve true o false segun sea cierto, usado sobretodo en if
siono = (num1 < num2);
siono = (num1 >= num2);
siono = (num1 <= num2);
siono = (num1 != num2);
siono = (num1 == num2);//comparar si son iguales
siono = (5 == "5");//solo se compara el dato, no el tipo de dato
siono = (6 === 6);//devuelve true si ambos datos son iguales y del mismo tipo
siono = (7 === "7");//seria false
siono = !(5 === 5);//invierte toda la condicion (tambien visto como Not)
siono = (num1 > num2) && (num1 === 3);//hace que se cumplen ambas condiciones para devolver true (tambien visto como And)
siono = (num1 > num2) || (num1 === 4);//con que se cumpla una de las 2 basta para que devuelva true (tambien visto como Or)


//CONDICIONALES:
if (siono){//estructura basica if, el unico obligatorio es el de arriba
    console.log("cumple");
} else if (num1 > 2){//si no se cumple la anterior comprobar esta
    console.log("no cumple pero");
}else {//si no se cumple ninguna de las anteriores
    console.log("no cumple");
}
if (siono) console.log("si");//para un if de una linea 
let pero = (num2 > 1)?"si es":"no es";//variable que cambia dependiendo de una condicion, en este caso es string
pero = (num2 > 1)?"si es":"no es";//esto se puede hacer en cualquier lado
switch (num1){//dependiendo del valor de una variable, ejecuta una cosa u otra
    case 0:
        console.log("es cero");
    break
    case 1:
        console.log("es uno");
    break; 
    case 2:
        console.log("es dos");
    break;
    case "x"://al ser de tipos dinamicos se puede hacer esto
        console.log("no se sabe");
    break;
    default://si no se cumple ninguna pasa esto (obligatorio)
        console.log("no es");
    break;
}

siono ? console.log("si es") : console.log("no es");//similar a un if, pero solo si ambas partes tienen una sola linea de codigo

let undeff;
undeff = undeff || "no se";//si el valor tiende a false (ej: undefinied) se le aplica el otro valor


//BUCLES:
let wi = 0;
while (wi < 4){//bucle que se ejecuta siempre que eso sea true
    console.log("vuelta " + wi);
    wi++;
}
wi=0;
do{//igual que un while, pero ejecuta siempre su contenido almenos una vez y luego evalua si repetir o no
    console.log("vuelta de do");
    wi++;
} while (wi < 4);
for (let i = 0; i < 10; i++){//declarar variable ; condicion para repetirlo ; que pasa al terminar la vuelta (incremento/decremento).    muy usado con arrays aunque ya este el x.foreach(funcion(y))
    console.log("vuelta de for " + i);
}
const objetofor = {nombre:"nomm", tamagno:23};
for (const key in objetofor){//bucle que se ejecuta por cada propiedad de un objeto
    console.log("key es " + key);//nombre de la propiedad
    console.log("dato es " + objetofor[key]);//dato en la propiedad
}
for (const iterator of arrray){//lo ejecuta por cada posicion de cualquier elemento iterable, incluyendo strings(usa char), arrays y objetos
    console.log(iterator);//el tipo de la const iterator puede cambiar por cada vuelta
}

for (let i = 0; i < 10; i++){
    if (i === 3){
        break;//provoca que salga de un bucle
    }
}
for (let i = 0; i < 10; i++){
    if (i === 3){
        continue;//provoca que la siguiente vuelta del bucle, sin ejecutar lo de mas abajo
    }
}

//ITERABLES:
const iterable = ["a", "b", "c"];
const iterador = iterable[Symbol.iterator]();//se puede crear una variable iteradora para cualquier variable iterable (string, array, object, etc)
//console.log(iterador.next());//devuelve el valor actual y si seria el ultimo de ese objeto iterable, ademas ese numero se suma 1
//console.log(iterador.next());//vuelve a sumarse 1, si es mayor al numero de elementos del iterable pondra valor undefinied y done=true
let next = iterador.next();
while (!next.done){//una forma de recorrer un objeto iterable
    console.log(next.value);
    next = iterador.next();
}
//GENERADORES:
function* FuncionIterable(){//hace que la funcion sea iterable, es ligeramente similar a los async
    console.log("producire el 1");
    yield "producto1";//es como un return, cada vez que llamas a la funcion te devuelve una cosa distinta
    console.log("producire el 2");
    yield "producto2";//devolveria esto a la segunda vez que la llames
    console.log("producire el 3");
    yield "producto3";//se esta escribiendo el yield varias veces, pero se podria hacer con un for porque no dara otra vuelta hasta que se vuelva a llamar a la funcion
}
let iteradorfun = FuncionIterable();//hay que guardarla en una variable
console.log(iteradorfun.next());//se llama asi, devolvera "producto1" pero como objeto symbol.iterator devolviendo el valor y si es la ultima vez. obviamente tambien ejecutara todo el codigo entre el ultimo yield hecho y el yield que viene
console.log(iteradorfun.next().value);//ahora la segunda vez devolvera "producto2", poniendolo asi devuelve solo el valor
for (let y of iteradorfun){//como la funcion es iterable se puede usar el for of
    console.log(y);
}
const arrdefuncion = [...FuncionIterable()];//almacena todos los valores devueltos por el yield en el array


//ERRORES:
try{//dentro de try intentara ejecutar un codigo
    console.log("codigo peligroso");
    asfasdfsaf;//esto daria error y lo de despues no se ejecuta
    console.log("no");
} catch (error) {//si da error ejecutara esto
    console.log("dio error");
    console.log(error);//usando error como variable para mostrarlo en la consola
} finally {//(opcional) antes de abortar se ejecutara lo de finnaly, haya error o no
    console.log("nos vamos");
}
console.log("afsfsadf");//el codigo sigue como si nada
try {
    throw new Error("dio error tontaco");//tirar un error aposta, hay varios tipos de errores
} catch(error){
    console.log("el error fue " + error);
}


//FUNCIONAMIENTOS VARIOS:
const nums = [1, 2, 3];
let [uno, dos, tres] = nums;//cada variable tomara el valor de cada posicion del array dependiendo de su orden
let cubo = {tamagno:2, nombre:"nommm"};
let {tamagno, nombre} = cubo;//lo mismo con los objetos, las variables se tienen que llamar igual que las propiedades ya que aqui no importa el orden

let ojbeto = {num1, num2};//si se ponen variables ya hechas y no se ponen los nombres de las propiedades, estas adoptaran el nombre de esas variables. lo mismo con las funciones

function SumarVarios(a, b, ...c){//si la funcion recibe mas parametros se pone asi
    let result = a + b;
    c.forEach(function (n) {result += n});//la ultima variable sera tratada como un array
}
num1 = SumarVarios(1,4,6,3,4);//llamandola con tantos valores como haga falta
arrayy = [...arrray, ...arrayy];//se usa tambien para concatenar arrays

//THIS:
console.log(this);//en el scope principal this es igual a window (solo en navegadores)
const objscope = {stringg:"nommm",
decir: function() {
    console.log(this.stringg);//se refiere a la de su scope directamente, en este caso la variable del objeto. las arrow functions no generan scopes, usan el que este dentro
}};

let lugar = "global";
function Dondee(como){console.log(this.lugar + como);}
const objt = {lugar: "objeto"}
Dondee.call(objt, "hola");//llama a la funcion pero usando el this del objeto (null/this = global) y no el de window, luego se ponen los parametros. similar es: funcion.bind(obj de contexto)
//Dondee.aply(objt, ["hola"]);//igual pero los parametros de la funcion van en un array


//OBJETOS DESDE PROTOTIPOS:
function CObjeto(nombre, tamagno){//creando un prototipo para crear objetos con las mismas propiedades, sin usar clases. esto tambien se llamaria funcion constructora
    this.nombre = nombre;
    this.tamagno = tamagno;
}
CObjeto.prototype.Decirr = function(){//las funciones son asi por separado
    console.log("desde la funcion " + this.nombre);
}
const tobj = new CObjeto("nom", 3);//crear un objeto a partir de un prototipo, de esta manera el prototipo de tobj en lugar de ser Object sera CObjeto
tobj.Decirr();//el resto de cosas funcionan igual que un objeto normal

let fechaaa = new Date(1934,12,19);
console.log(fechaaa instanceof Date);//para ver si una variable de tipo objeto es de x clase se mira asi

function CSubObjeto(cantidad){//este prototipo hereda de otro
    this.super = CObjeto;//se pone de que hereda
    this.super(nombre, tamagno);//se ponen los datos
    this.cantidad = cantidad;
}
CSubObjeto.prototype = new CObjeto();//se pone de que hereda
CSubObjeto.prototype.constructor = CSubObjeto;//se pone de que hereda
CSubObjeto.prototype.Decirr = function (){//en caso de que el prototipo heredado deba tener cambios en una funcion superior, se sobreescribe asi. es necesario hacer esto para que los objetos hijo tambien tengan esa funcion
    console.log("desde la funcion heredada " + this.nombre);
}
CSubObjeto.prototype.FunExclusivaSubobjeto = function(){//para crear las funciones a un objeto que derive de otro
    console.log("exclusiva de subobjeto" + this.cantidad);
}
const tsobj = new CSubObjeto(20, "snom", 4);//al crear un objeto heredado se ponen primero los parametros del objeto y luego los del objeto padre
tsobj.FunExclusivaSubobjeto();//puede usar las cosas suyas y las del objeto padre


//OBJETOS DESDE CLASES:
class CLObjeto {//una mejor forma es con clases
    constructor (altura, nombre){//clase constructora con todas las variables, posiblemente se necesite llamar a sus funciones desde el constructor, se hace con this.lafuncion(x);
        this.altura = altura;
        this.nombre = nombre;
    }
    reportar(){//las funciones se ponene asi
        console.log("clobjeto con " + this.altura + " y " + this.nombre);
    }
}
const objdeclase = new CLObjeto(12,"nnom");//instanciando objeto a partir de clase
objdeclase.reportar();//el resto va todo igual

class CLSubObjeto extends CLObjeto{//para hacer que un objeto herede de una clase
    constructor(altura, nombre, cantidad){//en el constructor se ponen primero las propiedades de la clase padre y luego las nuevas
        super(altura, nombre);
        this.cantidad = cantidad;
    }
    decir(){
        console.log("exclusivo de clsubobjeto");
    }
    reportar(){//esta clase ya esta en el objeto padre, poniendola otra vez se sobreescribe
        console.log("sub de clobjeto con " + this.altura + " y " + this.nombre + " y " + this.cantidad);
    }
}
const subobjdeclase = new CLSubObjeto(12, "scnom", 333);
subobjdeclase.reportar();

class EjemploClase{
    constructor(nombre){
        this.nombre = nombre;
        this.lugar = null;//esta variable no se pide como parametro, sera una variable privada
    }
    static Hablar(){//las funciones static se pueden llamar sin instanciar una variable de ese objeto
        console.log("hablooooo");
    }
    get GetLugar(){//para variables privadas se usa un get para recibirla
        return this.lugar;
    }
    set SetLugar(que){//para cambiar variables privadas se usa un set
        this.lugar = que;
    }
}
EjemploClase.Hablar();//hablar es static, no hace falta hacer una variable
const ejcls = new EjemploClase("hola");
ejcls.SetLugar = "aqui";//cambiar variable privada
stringg = ejcls.GetLugar;//devolver variable privada

//PROXIES
//ver proxies porque aqui no van https://www.youtube.com/watch?v=7njrLMJgDtQ&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=56
//son como crear instancias de un objeto base pero protegiendo entre medias mediante un manejador


//SINCRONIAS/THREADS/CALLBACKS/TIMERS:
//TIMERS:
let temp1 = setTimeout(() => {
    console.log("pasaron 5 segundos");
}, 5000);//ejecuta este codigo tras x milisegundos, la cuenta empieza tras llamar a esto, el tiempo se pausa tambien con los mensajes emergentes de window
//tambien puede servir como funcion asincrona poniendo tiempo 0, de esta manera el codigo se ejecutara pero sin bloquear el flujo del script, pasando su codigo a la pila de tareas haciendo que se ejecute luego
clearTimeout(temp1);//para el temporizador, para pararlo se necesita que este en una variable, lo cual de normal es opcional

let temporizadori = 0;
let temp2 = setInterval(() => {
    console.log("tick" + temporizadori);
    temporizadori++;
    return;
}, 5000);//ejecuta este codigo tras x milisegundos periodicamente, la cuenta empieza tras llamar a esto, el tiempo se pausa tambien con los mensajes emergentes de window
clearInterval(temp2);//para el temporizador, para pararlo se necesita que este en una variable, lo cual de normal es opcional

//CALLBACKS:
function SumarNumeroCallback(numero, callback){//esta funcion se va a llamar a si misma, esto se llama callback y esta relacionado con el sincronimso (callback)
    setTimeout(() => {
        callback(numero, ++numero);//la funcion llamandose a si misma
    }, 0 | Math.random() * 100);//se hace que vuelva a empezar tras x segundos
}
SumarNumeroCallback(2, (numero, result) => {//llama a la funcion de antes, ya se ejecutara, de mientras el programa sigue su curso
    console.log("inicia callback");
    console.log("callback: " + numero + " +1 es " + result);
});

//PROMISES:
function SumarNumeroPromise(numero){//una alternativa a los callback es esto (promise)
    if (typeof numero !== Number){
        return Promise.reject("uy, error");//si algo va mal, se devuelve esto y se entraria al catch de mas abajo
    }
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({numero: numero, resultado: ++numero});//cuando se envie este callback, si todo ha ido bien la funcion devolvera este objeto
        }, 0 | Math.random() * 100);
    }) 
}
SumarNumeroPromise(0).then(obj=>{
    console.log("resultado="+obj);//codigo si todo va bien
    return SumarNumeroPromise(1);//se puede volver a llamar a la funcion, luego habria que hacer otro .then()
    }).catch(err =>{
    console.log(err);//imprimiendo el error de mas arriba porque se uso .reject
});

//ASYNCS/AWAITS:
async function FuncionAsincronaDeclarada(){//esta funcion llamara al timeout fuera del flujo de ejecucion principal, pudiendo ejecutar otras cosas de mientras, similar a lo de antes pero sin acumular los .then
    try{//normalmente se usan trycatchs para los posibles errores
        console.log("iniciar async");
        let obj = await SumarNumeroPromise(0);//llamando al timeout, para asignar el valor de necesita el await, que bloquea el flujo del async hasta que termine de calcular
        console.log("resultado = " + obj);
        obj = await SumarNumeroPromise(1);//se puede hacer varias veces
        console.log("resultado = " + obj);
        obj = await SumarNumeroPromise(2);
        console.log("resultado = " + obj);
        console.log("fin");
    }catch(err){//si algo da error
        console.log(err);
    }
}
FuncionAsincronaDeclarada();

const FuncionAsincronaExpresada = async () => {//mismo ejemplo pero con una funcion expresada
    try{
        console.log("iniciar async 2");
        let obj = await SumarNumeroPromise(3);
        console.log("resultadoe = " + obj);
        obj = await SumarNumeroPromise(4);
        console.log("resultadoe = " + obj);
        obj = await SumarNumeroPromise(5);
        console.log("resultadoe = " + obj);
        console.log("fin2");
    }catch(err){
        console.log(err);
    }
}
FuncionAsincronaExpresada();


//OBJETOS Y OTRAS FUNCIONES:


//JSON
//los archivos en json son igual que declarar un objeto pero todas las propiedades estan entre ""
let desdeParse = JSON.parse("[1,2,3]");//parse convierte a variable un array o un objeto escrito como si fuese un texto, util para abrir archivos .json
desdeParse = JSON.parse('{"nombre": "nom", "num": 3}');//para usar nombres de variables (ej: objetos), hace falta la '' y ponerle "" a los nombres de variable
const objetoGuardar = {num: 1, nom: "aa"};
console.log(JSON.stringify(objetoGuardar));//convierte a string una variable igual como el formato anterior (los nombres de las variables los pone entre ""), util para guardar archivos .json




//CONSOLE
console.log("log de consola");
console.log(num1, num2);//separados por espacios
console.error("un error");
console.warn("un aviso");
console.info("como log pero mas crudo");
//console.clear();
console.log(window);//pondria el objeto talcual
console.dir(window);//ordenado como si fuese una carpeta
console.log("letra %s letra2 %s numero %d", "aa", stringg, num);//wildcards para mostrar datos en consola
console.group("nombre de grupo");//abre un grupo en la consola, tambien se puede usar .groupCollapsed()
console.log("item1");
console.log("item2");
console.groupEnd();//cierra el grupo de antes
console.table(Object.entries(objeto2).sort());//tabla de propiedades de un objeto, se esta imprimiendo como tabla todas las entradas de objeto2 representadas como array y ordenado, funciona con arrays o objetos
console.time("cronometro1");//inicia temporizador
//orden costosa
console.timeEnd("cronometro1");//finaliza temporizador y imprime estadisticas
console.assert(num1 > num2, [num1, num2, "no debio pasar eso"]);//si la condicion no se cumple da ese error


//DATE
console.log(Date());//la fecha completa del navegador del usuario
let fecha = new Date();
console.log(fecha.getDate());//dia del mes
console.log(fecha.getDay());//dia de la semana del 0 al 6
console.log(fecha.getMonth());//numero del mes del 0 al 11
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
stringg = fecha.toString();//igual que fecha pero manipulable como string
stringg = fecha.toDateString();//fecha americana string mas basica
stringg = fecha.toLocaleString();//hora string mas basica
stringg = fecha.toLocaleDateString();//fecha string mas basica
stringg = fecha.toLocaleTimeString();//otra hora string
console.log(fecha.getTimezoneOffset());//zona horaria, si a lo anterior le pones UTC sale la del meridiano greenwitch
console.log(Date.now());//variable de tiempo
let unaFecha = new Date(1945, 12, 4);//guardar fechas, se puede hacer de muchas formas
console.log(unaFecha - new Date());//se pueden usar como numeros, esto devolvera otro date


//MATH
console.log(Math.PI);//tambien hay mas constantes
console.log(Math.abs(-2));//el positivo de x
console.log(Math.ceil(4.8));//redondea hacia arriba
console.log(Math.floor(4.2));//redondea hacia abajo
console.log(Math.round(5.6));//redondea hacia el mas proximo (>5)
console.log(Math.sqrt(25));//raiz cuadrada
console.log(Math.pow(2,8));//elevar x a y
console.log(Math.sign(-2));//si es positivo da 1 y si no da -1. 0 da 0
console.log(Math.random());//aleatorio entre 0 y 1
console.log(Math.random() * 100);//aleatorio entre 0 y 100 (sigue no siendo entero, habria que redondearlo)
console.log(Math.max(...arrray));//tener el numero mayor del array
console.log(Math.min(...arrray));//tener el numero menor del array


//STORAGE (guardar datos en el navegador)
localStorage.setItem("variable", 23);//establece en el localstorage del navegador un dato en esa variable, puede ser cualquier tipo de variable
console.log(localStorage.getItem("variable"));//devuelve el valor de esa variable si se habia guardado antes


//WINDOW BASICO:
window.alert("alerta del navegador");//los de window son exclusivos de navegador. el flujo del script parara al encontrarse con esto
siono = window.confirm("si o no");//el usuario puede mandar true o false a la pagina
stringg = window.prompt("escribe algo:");//el usuario puede mandar string a la pagina, si no pones nada es <empty string> y si das cancelar es null


//REGULAR EXPRESSIONS:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions para ver flags, wildcards, etc
let textoNormal = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
let regex = /ipsum/;//se pone el texto a buscar y la bandera
console.log(regex.test(textoNormal));//usa la regex en esa cadena y devuelve true si lo encuentra
console.log(regex.exec(textoNormal));//devuelve como un array explicando la coincidencia, si no hubiese seria null
let regex2 = /ipsum/ig;//i quita el casesensitive, g busca mas de una coincidencia (hay muchas mas flags)
let regex3 = /\d/;//representa cualquier numero
let regex4 = /[a-d]/;//representa un rango de un caracter ascii a otro
let regex5 = /ipsum{1,3}/;//significa que lo tiene que encontrar entre 1 y 3 veces, si no pones segundo numero cuenta como infinito



console.log("--------------------------");

