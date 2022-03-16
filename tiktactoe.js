let sign = "O"
let counter = 0

function boxclicked(number) {
    let td = document.getElementById("td" + number)

    if (td.innerText == "") {
        if (sign == "O") {
            // let td = document.getElementById("td" + number)
            td.innerText = "X"
            checkwinner("X", document.getElementById("player").innerText)
            if (document.getElementById("player").innerText = "player 1") {
                document.getElementById("player").innerText = "player 2"
            }
            // else{
            //     document.getElementById("player").innerText = "player 1"
            // }

            sign = "X"
        } else {
            // let td = document.getElementById("td" + number)
            td.innerText = "O"
            checkwinner("O", document.getElementById("player").innerText)
            if (document.getElementById("player").innerText = "player 2") {
                document.getElementById("player").innerText = "player 1"
            }
            // else{
            //     document.getElementById("player").innerText = "player 2"
            // }

            sign = "O"
        }
    }

    console.log(`${number} box is clicked`);
}

function checkwinner(sign, player) {
    counter++
    if (
        document.getElementById("td1").innerText == sign && document.getElementById("td2").innerText == sign && document.getElementById("td3").innerText == sign ||
        document.getElementById("td4").innerText == sign && document.getElementById("td5").innerText == sign && document.getElementById("td6").innerText == sign ||
        document.getElementById("td7").innerText == sign && document.getElementById("td8").innerText == sign && document.getElementById("td9").innerText == sign ||
        document.getElementById("td1").innerText == sign && document.getElementById("td4").innerText == sign && document.getElementById("td7").innerText == sign ||
        document.getElementById("td2").innerText == sign && document.getElementById("td5").innerText == sign && document.getElementById("td8").innerText == sign ||
        document.getElementById("td3").innerText == sign && document.getElementById("td6").innerText == sign && document.getElementById("td9").innerText == sign ||
        document.getElementById("td1").innerText == sign && document.getElementById("td5").innerText == sign && document.getElementById("td9").innerText == sign ||
        document.getElementById("td3").innerText == sign && document.getElementById("td5").innerText == sign && document.getElementById("td7").innerText == sign) {
        alert(`${player} has won !! Game Over`)
        for (let i = 1; i <= 9; i++) {
            document.getElementById("td" + i).innerText = " "
        }
        sign = "O"
            counter = 0
    }

    if (counter == 9) {
        alert("game is tied")
        for (let i = 1; i <= 9; i++) {
            document.getElementById("td" + i).innerText = " "
        }
        sign = "O"
            counter = 0
    }

} 