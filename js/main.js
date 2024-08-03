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