var idCounter = 1;
var items = [];

function add() {
    
    var list = document.getElementById("list");
    var input = document.getElementById("input");

    list.innerHTML = ""
    items.push(idCounter + " " + input.value);
    idCounter ++;
    input.value = "";
    
    for (var i = 0; i < items.length; i++) {
        let item = items[i];
        list.innerHTML += "<li>" + item + ' <button id="' + i + '" onclick="eliminate(' + i + ');">Borrar</button></li>';
    }
}

function eliminate(item) {
   items.splice(item, 1)
   list.innerHTML = ""
   for (var i = 0; i < items.length; i++) {
    let item = items[i];
    list.innerHTML += "<li>" + item + ' <button id="' + i + '" onclick="eliminate(' + i + ');">Borrar</button></li>';
}
}