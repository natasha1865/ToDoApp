class Pet {
    constructor(item) {
        this._item = item;
    }
}

function clicked() {
    let x = document.getElementById("myIn").value;
    const myObj = new Pet(x);

    document.getElementById("myout").innerHTML = myObj._item
}
