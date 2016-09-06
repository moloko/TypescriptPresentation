let todoItem = [123, "Pick up dry cleaning", false];
let [id, title, completed] = todoItem;


function countdown({ 
    initial, 
    final: final = 0, 
    interval: interval = 1, 
    initial: current 
}) {
    
    while (current > final) {
        console.log(current);
        current -= interval;
    }

}