var container = document.getElementById('container');

function Counter(el) {

    this.count = 0;

    el.innerHTML = this.count;

    el.addEventListener('click', 
        (event) => {
            this.count += 1;
            el.innerHTML = this.count;
        });
}

new Counter(container);