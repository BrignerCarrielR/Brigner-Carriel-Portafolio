document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.container > div');

    function activateLink() {
        let index = sections.length;

        while (--index && window.scrollY + 200 < sections[index].offsetTop) { }

        sidebarLinks.forEach((link) => link.classList.remove('activate'));
        sidebarLinks[index].classList.add('activate');
    }

    activateLink();
    window.addEventListener('scroll', activateLink);
});

// Inicializar los popovers
document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});


function EnviarCorreo() {
    let nombres = document.getElementById('nombres').value
    let correo = document.getElementById('correo').value
    let mensaje = document.getElementById('mensaje').value
    console.log(nombres, correo, mensaje)

    // Envía el correo utilizando EmailJS
    const serviceID = 'service_atvwoci';
    const templateID = 'template_gxjy74d';
    const userID = 'MSBVq_POAKjwB1Ucr';
    // Define los datos del correo
    const dataCorreo = {
        nombres: nombres, // Utiliza el nombre del cliente
        mensaje: mensaje,
        correo: correo, // Utiliza el correo del cliente
    };

    // Envía el correo utilizando EmailJS
    emailjs.send(serviceID, templateID, dataCorreo, userID)
        .then(function (response) {
            console.log('Correo enviado con éxito:', response);
        })
        .catch(function (error) {
            console.error('Error al enviar el correo:', error);
        });
}

