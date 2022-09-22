window.onload = init;

function init() {
    // var clearButton = document.getElementById("clear_button");
    // clearButton.onclick = clearStorage;
    var button = document.getElementById("add_button");
    button.onclick = createSticky;
    var stickiesArray = getStickyArray();
    for(var i = 0; i < stickiesArray.lenght; i++) {
        var key = stickiesArray[i];
        var value = localStorage[key];
        addStickyToDOM(value);
    }
}

function getStickyArray() {
    var stickiesArray = localStorage.getItem("stickiesArray");
    if(!stickiesArray) {
        stickiesArray = [];
        localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
    } else {
        stickiesArray = JSON.parse(stickiesArray);
    }
    return stickiesArray;
}


function addStickyToDOM(key, value) {
    var stickies = document.getElementById("stickies");
    var sticky = document.createElement("li");
    sticky.setAttribute("id", key);
    var span = document.createElement("span");
    span.setAttribute("class", "sticky");
    span.innerHTML = value;
    sticky.appendChild(span);
    stickies.appendChild(sticky);
    // sticky.onclick = deleteSticky;
}

function createSticky() {
    var stickiesArray = getStickyArray();
    var currentDate = new Date();
    var key = "sticky_" + currentDate.getTime();
    var value = document.getElementById("note_text").value;
    localStorage.setItem(key, value);
    stickiesArray.push(key);
    localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));

    addStickyToDOM(value);
}

// function clearStorage() {
//     localStorage.clear();
// }

// function deleteSticky(e) {
//     var key = e.target.id;
//     if (e.target.tagName.toLowerCase() == "span") {
//         key = e.target.parentNode.id;
//     }
//     localStorage.removeItem(key);
//     var stickiesAaray = getStickyArray();
//     if(stickiesAaray) {
//         for ( var i = 0; i < stickiesAaray.length; i++) {
//             if (key === stickiesAaray[i]) {
//                 stickiesAaray.splice(i,1);
//             }
//         }
//         localStorage.setItem("stickiesArray", JSON.stringify(stickiesAaray));
//         removeStickyFromDOM(key);
//     }
// }

// function removeStickyFromDOM(key) {
//     var sticky = document.getElementById(key);
//     sticky.parentNode.removeChild(sticky);
// }