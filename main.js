const app = {
    init: function () {
        console.log('Hello World');
    },
    liOnClick: function () {
        const listItems = document.querySelectorAll('.ul--li');
        const modales = document.querySelectorAll('.container--notepad');
        listItems.forEach(item => {
            item.addEventListener('click', function () {
                const targetId = item.getAttribute('data-target');
                const targetModale = document.getElementById(targetId);
                if (targetModale.style.display === 'block') {
                    targetModale.style.display = 'none';
                } else {

                    modales.forEach(modale => {
                        modale.style.display = 'none';
                    });
                    if (targetModale) {
                        targetModale.style.display = 'block';
                    }
                }
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    app.init();
    app.liOnClick();
});