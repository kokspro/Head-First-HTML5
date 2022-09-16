window.onload = function() {
    let worker = new Worker("worker.js");

    worker.postMessage("ping");

    worker.onmessage = function (event) {
        let message = "Worker says " + event.data;
        document.getElementById("output").innerHTML = message;
    }
}


