var icount = 0;

function fnNumberOfExecution() {
    // debugger
    icount = icount + 1;
    postMessage(icount);  // Post a message back to the HTML page.
    setTimeout("fnNumberOfExecution() ", 500);
}

fnNumberOfExecution();