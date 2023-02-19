/* **********     Curso JavaScript: 106. AJAX: Objeto XMLHttpRequest   ********** */
(() => {
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    // console.log(xhr);
    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log("éxito");
      //console.log(xhr.responseText);
      //$xhr.innerHTML=xhr.responseText;
      let json = JSON.parse(xhr.responseText);
      // console.log(json);
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} <br> ${el.email} <br> ${el.phone}`;
        $fragment.appendChild($li);
      });
      $xhr.appendChild($fragment);
    } else {
      // console.log("error");
      let message = xhr.statusText || "Ocurrio un error al traer los datos";
      $xhr.innerHTML = `Error: ${xhr.status}: ${message}`;
      //console.log("Este Mensaje cargara de cualquier forma");
    }
  });
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  //consumo de json local (datos)
  //xhr.open("GET", "assets/users.json");
  xhr.send();
})();
/* **********     Curso JavaScript: 107. AJAX: API Fetch      ********** */
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();
  //console.log($fetch);
  fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res) => {
    //   console.log(res);
    //   return res.ok ? res.json() : Promise.reject(res);
    // })
    //simplificacion de codigo (abajo then)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      //console.log(json);
      // $fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}<br>${el.email}<br>${el.address.city}<br>${el.company.catchPhrase}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error: ${err.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Esto se ejecutara independientemente de la promesa FETCH");
    });
})();
/* **********     Curso JavaScript: 108. AJAX: API Fetch + Async-Await -  ********** */
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();
  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();
      //console.log(res, json);
      if (!res.ok) {
        throw { status: res.status, statustext: res.statusText };
      }
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} <br> ${el.email} <br> ${el.website} <br> ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (error) {
      // console.log(error, "estoy en el catch");
      let message = error.message || "Ocurrio un error";
      $fetchAsync.innerHTML = `Error  ${error.status}: ${message}`;
    } finally {
      //console.log("esto se ejecutara independientemente del try catch");
    }
  }
  getData();
})();
/* **********     Curso JavaScript: 109. AJAX: Librería Axios - *********/
(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res);
      let json = res.data;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} <br> ${el.email} <br> ${el.website} <br> ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axios.innerHTML = `Error  ${err.response.status}: ${message}`;
    })
    .finally(() => {
      //console.log("esto se ejecutara independientemente del resultado AXIOS");
    });
})();
/* **********     Curso JavaScript: 110. AJAX: Librería Axios + Async-Await ********** */
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} <br> ${el.email} <br> ${el.website} <br> ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
      // console.log(res, json);
    } catch (err) {
      //console.log(err.response);
      let message = err.response.statusText || "Ocurrio un error";
      $axiosAsync.innerHTML = `Error  ${err.response.status}: ${message}`;
    } finally {
      console.log(
        "esto se ejecutara independientemente del resultado AXIOS-ASYNC"
      );
    }
  }
  getData();
})();
