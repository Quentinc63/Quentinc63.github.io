const app = {
    init: function () {
        console.log('Hello World');
    },
    liOnClick: function () {
        console.log('li clicked');
    }
};

document.addEventListener('DOMContentLoaded', app.init);