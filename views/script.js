let x = 0;

document.getElementById(`${x}`).style.display = "flex";

document.getElementById("next").addEventListener("click", function() {
    if (x < 5) {
        x++;
        document.getElementById(`${x - 1}`).style.display = "none";
        document.getElementById(`${x}`).style.display = "flex";
    }
});

document.getElementById("previous").addEventListener("click", function() {
    if (x > 0) {
        x--;
        document.getElementById(`${x + 1}`).style.display = "none";
        document.getElementById(`${x}`).style.display = "flex";
    }
});

document.getElementById("body").addEventListener("keydown", (event) => {
    if (event.isComposing || event.keyCode === 39) {
        if (x < 5) {
            x++;
            document.getElementById(`${x - 1}`).style.display = "none";
            document.getElementById(`${x}`).style.display = "flex";
        }
    }
    else if (event.isComposing || event.keyCode === 68) {
        if (x < 5) {
            x++;
            document.getElementById(`${x - 1}`).style.display = "none";
            document.getElementById(`${x}`).style.display = "flex";
        }
    }
    else if (event.isComposing || event.keyCode === 65) {
        if (x > 0) {
            x--;
            document.getElementById(`${x + 1}`).style.display = "none";
            document.getElementById(`${x}`).style.display = "flex";
        }
    }
    else if (event.isComposing || event.keyCode === 37) {
        if (x > 0) {
            x--;
            document.getElementById(`${x + 1}`).style.display = "none";
            document.getElementById(`${x}`).style.display = "flex";
        }
    }
});