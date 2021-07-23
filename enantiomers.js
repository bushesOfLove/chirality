document.addEventListener('DOMContentLoaded', () => {

    const left = document.querySelector('#left');
    const right = document.querySelector('#right');

    document.querySelector('button').onclick = () => {
        if (left.style.display === "none") {
            left.style.display = "block";
            right.style.display = "none";
        } else {
            left.style.display = "none";
            right.style.display = "block";
        }
    }

});