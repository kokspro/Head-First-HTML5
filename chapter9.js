localStorage.setItem("sticky_0", "Pick up dry cleaning!");
localStorage.setItem("sticky_1", "Cancel cable tv, who needs it now?");

// var sticky = localStorage.getItem("sticky_0");
// alert(sticky);

// localStorage.setItem("numitems", 1);
// var numItems = parseInt(localStorage.getItem("numitems"));
// numItems += 1;
// localStorage.setItem("numitems", numItems);

// localStorage.setItem("price", 9.99);
// var price = parseFloat(localStorage.getItem("price"));
// alert(price);

// localStorage["sticky_0"] = "Testing this out";
// var sticky = localStorage["sticky_0"];
// alert(localStorage["sticky_0"]);
// alert(sticky);

// function shellGame() {
//     localStorage.setItem("shell1", "pea");
//     localStorage.setItem("shell2", "empty");
//     localStorage.setItem("shell3", "empty");
//     localStorage["shell1"] = "empty";
//     localStorage["shell2"] = "pea";
//     localStorage["shell3"] = "empty";
//     var value = localStorage.getItem("shell2");
//     localStorage.setItem("shell1", value);
//     value = localStorage.getItem("shell3");
//     localStorage["shell2"] = value;
//     var key = "shell2";
//     localStorage[key] = "pea";
//     key = "shell1";
//     localStorage[key] = "empty";
//     key = "shell3";
//     localStorage[key] = "empty";

//     for (let i = 1; i < localStorage.length; i++) {
//         var key = localStorage.key(i);
//         var value = localStorage.getItem(key);
//         alert(key + ": " + value);
//     }
// }

// shellGame();

window.onload = init;

function init() {
    let button = document.getElementById("add_button");
    button.onclick = createSticky;

    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key.substring(0, 6) == "sticky") {
            var value = localStorage.getItem(key);
            addStickyToDOM(value);
        }
    }
}

function createSticky() {
    var value = document.getElementById("note_text").value;
    var key = "sticky_" + localStorage.length;
    localStorage.setItem(key, value);

    addStickyToDOM(value);
}

function addStickyToDOM() {
    var stickies = document.getElementById("stickies");
    var sticky = document.createElement("li");
    var span = document.createElement("span");
    span.setAttribute("class", "sticky");
    span.innerHTML = value;
    sticky.appendChild(span);
    stickies.appendChild(sticky);
}