document.addEventListener("DOMContentLoaded", () => {

  const formulario = document.getElementById("form-contacto");
 
  formulario.addEventListener("submit", function (event) {

    const nombre = document.getElementById("nombre").value.trim();

    const correo = document.getElementById("correo").value.trim();

    const comentarios = document.getElementById("comentarios").value.trim();
 
    let errores = [];
 
    if (nombre === "") {

      errores.push("El nombre es obligatorio.");

    }
 
    if (correo === "") {

      errores.push("El correo electrónico es obligatorio.");

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {

      errores.push("El correo electrónico no es válido.");

    }
 
    if (comentarios.length > 0 && comentarios.length < 10) {

      errores.push("El comentario debe tener al menos 10 caracteres si se escribe.");

    }
 
    if (errores.length > 0) {

      event.preventDefault();

      alert("Errores en el formulario:\n\n" + errores.join("\n"));

    }

  });

});

 