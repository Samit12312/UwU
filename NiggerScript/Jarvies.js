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
function LohachKefel() {
    let html = "<div class=matrix>";
    for (i = 1; i <= 10; i++) {
        html += "<div class=matrixRow>";
        for (j = 1; j <= 10; j++) {
            if ((j + i) % 2 != 0) {
                html += `<div class='matrixCell zogi'>${i * j}</div>`;
            }
            else {
                html += `<div class='matrixCell ezogi'>${i * j}</div>`;
            }
        }
        html += "</div>";
    }
    html += "</div>";
    document.getElementById("container").innerHTML = html;
}
function Targil1() {
    let num = 10;
    let html = "<div class=triangle>";
    for (i = 1; i <= num; i++) { // rows
        if (i % 2 == 0) {
            html += "<div class=traingleRowzogi>";
        }
        else
            html += "<div class=traingleRowezogi>";

        for (j = 1; j <= i; j++) { // cell
            html += "*";
        }
        html += "</div>";
    }

    html += "</div>";
    document.getElementById("container").innerHTML = html;
}
function Targil2() {
    let num = 10;
    let num1 = num;
    let html = "<div class=triangle>";
    for (i = 1; i <= num; i++) { // rows
        if (i % 2 == 0) {
            html += "<div class=traingleRowzogi1>";
        }
        else
            html += "<div class=traingleRowezogi1>";

        for (j = 1; j <= num1; j++) { // cell
            html += "*";
        }
        num1--;
        html += "</div>";
    }

    html += "</div>";
    document.getElementById("container").innerHTML = html;
}
function Targil3() {
let html = "<div class=matrix>";
for (i = 1; i <= 10; i++) {
    html += "<div class=matrixRow>";
    for (j = 1; j <= 10; j++) {
        if (j == 1) {
            html += `<div class='matrixCell kkk'>${i * j}</div>`;
        }
        else {
            if (i == 1)
                html += `<div class='matrixCell kkk'>${i * j}</div>`;
            else
            html += `<div class='matrixCell ezogi'>${i * j}</div>`;
        }
    }
    html += "</div>";
}
html += "</div>";
document.getElementById("container").innerHTML = html;
}
let num = 10;
let num1 = num;
let html = "<div class=triangle>";
for (i = 1; i <= num; i++) { // rows
    if (i % 2 == 0) {
        html += "<div class=traingleRowzogi1>";
    }
    else
        html += "<div class=traingleRowezogi1>";

    for (j = 1; j <= num1; j++) { // cell
        html += "*";
    }
    num1--;
    html += "</div>";
}

html += "</div>";
document.getElementById("container").innerHTML = html;