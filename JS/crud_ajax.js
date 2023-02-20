const d = document,
  $table = d.querySelector(".crud-table"),
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment(),
  ajax = (options) => {
    let { url, method, success, error, data } = options;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        let json = JSON.parse(xhr.responseText);
        success(json);
      } else {
        let message = xhr.statusText || "Ocurrio un error";
        error(`Error ${xhr.status} ${message}`);
      }
    });
    xhr.open(method || "GET", url);
    xhr.setRequestHeader("content-type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
  };
const getAllSaint = () => {
  ajax({
    url: "http://localhost:5555/santos",
    success: (res) => {
      console.log(res);

      res.forEach((el) => {
        $template.querySelector(".name").textContent = el.nombre;
        $template.querySelector(".constellation").textContent = el.constelacion;
        $template.querySelector(".edit").dataset.id = el.id;
        $template.querySelector(".edit").dataset.name = el.nombre;
        $template.querySelector(".edit").dataset.constelacion = el.constelacion;
        $template.querySelector(".delete").dataset.id = el.id;
        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });
      $table.querySelector("tbody").appendChild($fragment);
    },
    error: (err) => {
      console.error(err);
      $table.insertAdjacentHTML("afterend", `<p><b>${err}<b></p>`);
    },
  });
};
d.addEventListener("DOMContentLoaded", getAllSaint());
d.addEventListener("submit", (e) => {
  if (e.target === $form) {
    e.preventDefault();

    if (!e.target.id.value) {
      //Create - POST
      console.log(e.target);
      ajax({
        url: "http://localhost:5555/santos",
        method: "POST",
        success: (res) => location.reload(),
        error: (err) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        },
      });
    } else {
      //Update - PUT
      ajax({
        url: `http://localhost:5555/santos/${e.target.id.value}`,
        method: "PUT",
        success: (res) => location.reload(),
        error: (err) =>
          $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          nombre: e.target.nombre.value,
          constelacion: e.target.constelacion.value,
        },
      });
    }
  }
});
d.addEventListener("click", (e) => {
  if (e.target.matches(".edit")) {
    console.log(e.target.dataset);
    //console.log("presionaste el boton editar");
    $title.textContent = "Editar Santo";
    $form.nombre.value = e.target.dataset.name;
    $form.constelacion.value = e.target.dataset.constellation;
    $form.id.value = e.target.dataset.id;
  }
  if (e.target.matches(".delete")) {
    //console.log("presionaste el boton de borrar");
    let isDelete = confirm(
      `¿Estás seguro de eliminar el id ${e.target.dataset.id}`
    );
    if (isDelete) {
      ajax({
        //Delete- delete
        url: `http://localhost:5555/santos/${e.target.dataset.id}`,
        method: "DELETE",
        success: (res) => location.reload(),
        error: (err) => alert(err),
      });
    }
  }
});
