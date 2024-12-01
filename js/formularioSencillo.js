// Entrar al formulario
const formulario = document.getElementById("formulario");

// Acceso a todos los inputs
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");

// Acceso a la comprobación de la validación del formulario
let valida = {
    nombre: false,
    apellido: false,
    telefono: false,
    email: false,
}

// Envío del formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // Verifica si el checkbox de privacidad está marcado
    const privacidad = document.getElementById("privacidad");
    if (!privacidad.checked) {
        // Si no está marcado, muestra un mensaje de error y no envía el formulario
        alert("Debes aceptar la política de privacidad para enviar el formulario.");
        return; // Sale de la función sin enviar el formulario
    }

    // Si el checkbox de privacidad está marcado y todos los campos están validados, envía el formulario
    let errorV = false;
    for (const property in valida) {
        if(valida[property] == false){
            errorV = true;
        }
    }
    if(!errorV){
        formulario.submit();
    }
})

// Validación del nombre
nombre.addEventListener("blur", () => {
    let name_re = /^[a-zA-Z ]{2,30}$/;

    if (nombre.value == "" || nombre.value == null) {
        setErrorFor(nombre, "No puede dejar el nombre en blanco");
        valida.nombre = false;
    } else {
        if(!name_re.exec(nombre.value)){
            setErrorFor(nombre, "El nombre sólo puede estar formado por letras y contener entre 2 y 30 caracteres");
            valida.nombre = false;
        }else{
            setSuccessFor(nombre);
            valida.nombre = true
        }
    }
})

// Validación de los apellidos
apellidos.addEventListener("blur", () => {
    let apellidos_re = /^[a-zA-Z ]{2,30}$/;

    if (apellidos.value == "" || apellidos.value == null) {
        setErrorFor(apellidos, "No puede dejar los apellidos en blanco");
        valida.apellido = false;
    } else {
        if(!apellidos_re.exec(apellidos.value)){
            setErrorFor(apellidos, "Los apellidos sólo puede estar formado por letras y contener entre 2 y 30 caracteres");
            valida.apellido = false;
        }else{
            setSuccessFor(apellidos);
            valida.apellido = true;
        }
    }
})

// Validación del teléfono
telefono.addEventListener("blur", () => {
    let tel_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/

    if (telefono.value == "" || telefono.value == null) {
        setErrorFor(telefono, "No puede dejar los apellidos en blanco");
        valida.telefono = false;
    } else {
        if(!tel_re.exec(telefono.value)){
            setErrorFor(telefono, "El teléfono sólo puede estar formado por 9 números");
            valida.telefono = false;
        }else{
            setSuccessFor(telefono);
            valida.telefono = true;
        }
    }
})

// Validacion del email
email.addEventListener("blur", () =>{
    let email_re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if(email.value == "" || email.value == null){
        setErrorFor(email, "No puede dejar el email en blanco");
        valida.email = false;
    } else{
        if(!email_re.exec(email.value)){
            setErrorFor(email, "No ingreso un email valido");
            valida.email = false;
        }
        setSuccessFor(email);
        valida.email = true;
    }
})

// Mensaje de error
function setErrorFor(input, message) {
    // Recibe como parámetro input y mensaje
    const formControl = input.parentElement;
    const small = formControl.querySelector("small"); // Selecciona donde está escrito el mensaje
    formControl.className = "form-control error"; // Selecciona la clase de CSS
    small.innerText = message;
}

// Si todo está correcto
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
