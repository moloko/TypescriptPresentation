var container = document.getElementById('container');

function Counter(el) {

    this.count = 0;

    el.innerHTML = this.count;

    el.addEventListener('click', function(event) {
        this.count += 1; // NaN - WTF??
        el.innerHTML = this.count;
    });
}

new Counter(container);