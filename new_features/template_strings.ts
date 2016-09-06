var container = document.getElementById('container');

let mytodo = {
    id: 123,
    name: 'Pick up drycleaning',
    completed: true
}

container.innerHTML = `
<div todo='${mytodo.id}' class="list-group-item}">
    <i class="${ mytodo.completed ? "" : "hidden" } text-success glyphicon glyphicon-ok"></i>
    <span class="name">${mytodo.name}</span>
</div>
`