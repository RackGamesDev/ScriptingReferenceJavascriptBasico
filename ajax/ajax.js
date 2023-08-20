//ajax es una api que comunica navegador y servidor mandando y recibiendo archivos xml y json


//xml http request (xhr)
(() => {//encapsulando esta parte para que no colisione con el resto del codigo
    const xhr = new XMLHttpRequest();//creando un objeto xhr
    const $xhr = document.getElementById("xhr");
    const $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e) => {//esto se usara cuando el xhr cambie (0=unitialized 1=loading 2=loaded 3=interactive 4=complete)
        if(xhr.readyState !== 4) return;//si pones esto, solo ejecutara este codigo cuando el xhr este completado y listo
        if(xhr.status >= 200 && xhr.status < 300){//comprueba que todo haya ido bien, entonces ya se puede ejecutar el codigo cuando este listo
            //console.log(xhr.responseText);//el json/xml como un string
            let json = JSON.parse(xhr.responseText);//parseando el json

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = "nombre= " + el.name + "   ciudad=" + el.address.city;
                $fragment.appendChild($li);
            });
            $xhr.appendChild($fragment);
        } else {
            xhr.innerHTML = "error = " + (xhr.status || "):");
        }
    });
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");//para volcar el contenido de un json/xml de algun servidor se usa el GET y la url del archivo (tambien se puede usar un archvo de aqui como ruta)
    xhr.send();//paso final, una vez recibido el contenido
})();


//fetch
(() => {
    const $fetch = document.getElementById("fetch");
    const $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")//poner la url del json/xml o archivo local
    .then(res => {
        return res.ok ? res.json() : Promise.reject();//convierte la respuesta a objeto json, tambien esta .text() para string y .blob() para imagenes especiales
    })
    .then(son => {//si no hay errores:
        son.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML = "nombre= " + el.name + "   ciudad=" + el.address.city;
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment);
    })
    .catch(err => {//si hay algun error:
        console.log(err);
        $fetch.innerHTML = "error " + err.status;
    })
    .finally(()=>{ });//haya error o no
})();
//fetch con async await
(() => {
    const $fetchAsync = document.getElementById("fetch-async");
    const $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
            let json = await res.json();
            if(!res.ok){//sera true si no hay problemas
                throw {status: res.status, statusText: res.statusText}
            }
            json.forEach((el) =>{
                const $li = document.createElement("li");
                $li.innerHTML = "nombre= " + el.name + "   ciudad=" + el.address.city;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
        }catch (err){
            $fetchAsync.innerHTML = "error " + err.statusText;
            console.log("error " + err);
        }finally{

        }
        
    }
    getData();
})();