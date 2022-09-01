var button = document.getElementById("addButton");

button.onclick = handleButtonClick;


// loadPlaylist();

function handleButtonClick() {

    var songName = document.getElementById("songTextInput").value;
    var input = document.getElementById("songTextInput");

    if (songName == "") {
        alert("You need to enter a song name.");
    } else {
        var li = document.createElement("li");
        var ul = document.getElementById("playlist");
        var rmvBtn = document.createElement("button");

        rmvBtn.innerHTML = "Remove";
        input.value = "";
        li.innerHTML = songName;
        ul.appendChild(li);
        li.appendChild(rmvBtn);
        // save(songName);

        rmvBtn.addEventListener('click', removeIt);
    }
}

function removeIt() {
    this.parentElement.remove();
}







