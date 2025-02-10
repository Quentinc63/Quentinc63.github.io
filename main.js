const app = {
    init: function () {
        console.log('Hello World');
    },
    liOnClick: function () {
        const listItems = document.querySelectorAll('.ul--li');
        listItems.forEach((item) => {
            item.onclick = () => {
                console.log(`Vous avez cliqué sur : ${item.querySelector('p').textContent}`);
            };
        });
    }
};
document.addEventListener('DOMContentLoaded', app.liOnClick);
document.addEventListener('DOMContentLoaded', app.init);