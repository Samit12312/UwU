function Targil() {
    let num1 = 10;
    let num2 = 15;
    let html = `<h1 class=sum>${num1} + ${num2} = ${num1 + num2}</h1>`;
    document.getElementById("container").innerHTML = html;
}
function Targil2() {
    const d = new Date();
    const hour = d.getHours();
    let massage = "Good Morning";
    if (hour >= 12 && hour < 18) {
        massage = "Good Afternoon";
    }
    else if (hour >= 18 && hour < 24) {
        massage = "Good evening";
    }
    else if (hour >= 0 && hour < 4) {
        massage = "Good Night";
    }
    let html = `<h1 class=hello>${massage}</h1>`;
    document.getElementById("container").innerHTML = html;

}
let html = "<div class=matrix>";
for (i = 1; i <= 10; i++) {
    html += "<div class=matrixRow>";
    for (j = 1; j <= 10; j++) {
        html += `<div class=matrixCell>${i * j}</div>`;
    }
    html += "</div>";
}
html += "</div>";
document.getElementById("container").innerHTML = html;