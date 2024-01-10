this.onmessage = function(){
    let result;

    if (Math.random() > 0.5) {
        result = "red";
    } else {
        result = "yellow";
    }

    this.postMessage(result);
}
