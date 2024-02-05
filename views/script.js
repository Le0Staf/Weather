let x = 0;

document.getElementById(`${x}`).style.marginLeft = "auto";
document.getElementById(`${x}`).style.marginRight = "auto";
console.log("amongus")

document.getElementById("next").addEventListener("click", function() {
    if (x < 39) {
        x++;
        document.getElementById(`${x - 1}`).style.marginLeft = "100%";
        document.getElementById(`${x}`).style.marginLeft = "auto";
        document.getElementById(`${x}`).style.marginRight = "auto";
    }
});

document.getElementById("previous").addEventListener("click", function() {
    if (x > 0) {
        x--;
        document.getElementById(`${x + 1}`).style.marginLeft = "100%";
        document.getElementById(`${x}`).style.marginLeft = "auto";
        document.getElementById(`${x}`).style.marginRight = "auto";
    }
});