importScripts('counter.js');
var objWorker;
function startWorker() {
    if (typeof (Worker) !== "undefined") {
        if (typeof (objWorker) === "undefined") {
            objWorker = new Worker("scripts/counter.js");
            objWorker.onmessage = function (event) {
                document.getElementById("result").innerHTML = event.data;// get data from Web Worker
            };
            objWorker.onerror = function (event) {  // onerror event listener 
                alert(Object.keys(event));               // event.message give the error message.
            };
        }
    }
    else {
        alert("No Web Worker support by browser..");
    }
    return false;
}
function stopWorker() {
    if (typeof (objWorker) !== "undefined") {
        objWorker.terminate();
        objWorker = undefined;
    }
    return false;
}