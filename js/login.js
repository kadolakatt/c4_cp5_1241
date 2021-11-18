var myModal = new bootstrap.Modal(document.getElementById('divModal'));

function validarLogin() {
    var usr = document.getElementById('usuario');
    var pwd = document.getElementById('contrasena');

    if (usr.value == "admin" && pwd.value == "12345") {
        location.href="dashboard.html";
    }else {
       //alert('Nombre de usuario o contraseña incorrecta');
       myModal.show();
    }
}