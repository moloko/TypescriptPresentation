var todoItem = [123, "Pick up dry cleaning", false];
var id = todoItem[0], title = todoItem[1], completed = todoItem[2];
function countdown(_a) {
    var initial = _a.initial, _b = _a.final, final = _b === void 0 ? 0 : _b, _c = _a.interval, interval = _c === void 0 ? 1 : _c, current = _a.initial;
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}
