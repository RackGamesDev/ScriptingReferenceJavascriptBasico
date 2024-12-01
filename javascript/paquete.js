console.log("contenido del paquete. puede ser hecho propio o descargado de por ahi");//En caso de que se importe algo del paquete desde otro script, se ejecutara su codigo
export const constanteExportada = 123;//Variable constante del paquete que podran tener otros scripts
export const constanteExportada2 = 456;
let usuario = "quien seas";//Todo lo que no tenga export sera exclusivo de este script
export function SumaExterna(a, b){//Se puede exportar cualquier cosa, incluso funciones
    console.log(usuario + "quiere sumar:");//Usando variable interna en el paquete
    console.log(a + b);
}
//export default function SaludarDefault(){//Solo puede haber una funcion/variable exportada por default, esto funciona bastante raro, al immportarla se ponndria antes de los {}
//    console.log("holaaa");
//}
