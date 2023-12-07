
function changeDice() {
    let num1 = Math.ceil(Math.random() * 6);
    // document.write(num1);
    let ans1 = "./images/dice" + num1 + ".png";
    document.getElementsByClassName("img1")[0].setAttribute("src", ans1);//`./images/dice{num1}.png`

    let num2 = Math.ceil(Math.random() * 6);
    let ans2 = "./images/dice" + num2 + ".png";
    // document.write(num2);
    document.getElementsByClassName("img2")[0].setAttribute("src", ans2);//`./images/dice{num2}.png`
    let q = document.querySelector(".container h1")
    if (num1 > num2) {
        q.innerHTML = "Player 1 Wins";
    }
    else if (num2 > num1) {
        q.innerHTML = "Player 2 Wins";

    }
    else {
        q.innerHTML = "TIE";

    }
}