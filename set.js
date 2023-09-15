function rans() {
    let rens = Math.random() * 10
    localStorage.setItem(rens, "clicked")
}
document.getElementById("submit").onclick = function () {
    rans()
    localStorage.getItem(rens)
}