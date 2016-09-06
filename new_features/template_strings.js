var container = document.getElementById('container');
var mytodo = {
    id: 123,
    name: 'Pick up drycleaning',
    completed: true
};
container.innerHTML = "\n<div todo='" + mytodo.id + "' class=\"list-group-item}\">\n    <i class=\"" + (mytodo.completed ? "" : "hidden") + " text-success glyphicon glyphicon-ok\"></i>\n    <span class=\"name\">" + mytodo.name + "</span>\n</div>\n";
