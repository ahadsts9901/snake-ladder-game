let p1sum = 0;
let p2sum = 100;

//audio function

function diceAudio() {
    document.getElementById("dice-audio").play();
}

function successAudio() {
    document.getElementById("success-audio").play();
}

function dangerAudio() {
    document.getElementById("danger-audio").play();
}

function finishAudio() {
    document.getElementById("finish-audio").play();
}

//dice 1 function and player 1 function

function dice1() {
    //dice

    let Dice1 = "";

    let number = Math.random(Dice1) * 6;
    number = Number.parseInt(number);
    number = number + 1;

    //player piece
    p1sum = p1sum + number;
    if (number === 1) {
        document.querySelector("#dice-1").innerHTML =
            '<i class="bi bi-dice-1 icon"></i>';
    } else if (number === 2) {
        document.querySelector("#dice-1").innerHTML =
            '<i class="bi bi-dice-2 icon"></i>';
    } else if (number === 3) {
        document.querySelector("#dice-1").innerHTML =
            '<i class="bi bi-dice-3 icon"></i>';
    } else if (number === 4) {
        document.querySelector("#dice-1").innerHTML =
            '<i class="bi bi-dice-4 icon"></i>';
    } else if (number === 5) {
        document.querySelector("#dice-1").innerHTML =
            '<i class="bi bi-dice-5 icon"></i>';
    } else {
        document.querySelector("#dice-1").innerHTML =
            '<i class="bi bi-dice-6 icon"></i>';
    }

    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";
    document.getElementById("9").innerHTML = "";
    document.getElementById("10").innerHTML = "";

    document.getElementById("11").innerHTML = "";
    document.getElementById("12").innerHTML = "";
    document.getElementById("13").innerHTML = "";
    document.getElementById("14").innerHTML = "";
    document.getElementById("15").innerHTML = "";
    document.getElementById("16").innerHTML = "";
    document.getElementById("17").innerHTML = "";
    document.getElementById("18").innerHTML = "";
    document.getElementById("19").innerHTML = "";
    document.getElementById("20").innerHTML = "";

    document.getElementById("21").innerHTML = "";
    document.getElementById("22").innerHTML = "";
    document.getElementById("23").innerHTML = "";
    document.getElementById("24").innerHTML = "";
    document.getElementById("25").innerHTML = "";
    document.getElementById("26").innerHTML = "";
    document.getElementById("27").innerHTML = "";
    document.getElementById("28").innerHTML = "";
    document.getElementById("29").innerHTML = "";
    document.getElementById("30").innerHTML = "";

    document.getElementById("31").innerHTML = "";
    document.getElementById("32").innerHTML = "";
    document.getElementById("33").innerHTML = "";
    document.getElementById("34").innerHTML = "";
    document.getElementById("35").innerHTML = "";
    document.getElementById("36").innerHTML = "";
    document.getElementById("37").innerHTML = "";
    document.getElementById("38").innerHTML = "";
    document.getElementById("39").innerHTML = "";
    document.getElementById("40").innerHTML = "";

    document.getElementById("41").innerHTML = "";
    document.getElementById("42").innerHTML = "";
    document.getElementById("43").innerHTML = "";
    document.getElementById("44").innerHTML = "";
    document.getElementById("45").innerHTML = "";
    document.getElementById("46").innerHTML = "";
    document.getElementById("47").innerHTML = "";
    document.getElementById("48").innerHTML = "";
    document.getElementById("49").innerHTML = "";
    document.getElementById("50").innerHTML = "";

    document.getElementById("51").innerHTML = "";
    document.getElementById("52").innerHTML = "";
    document.getElementById("53").innerHTML = "";
    document.getElementById("54").innerHTML = "";
    document.getElementById("55").innerHTML = "";
    document.getElementById("56").innerHTML = "";
    document.getElementById("57").innerHTML = "";
    document.getElementById("58").innerHTML = "";
    document.getElementById("59").innerHTML = "";
    document.getElementById("60").innerHTML = "";

    document.getElementById("61").innerHTML = "";
    document.getElementById("62").innerHTML = "";
    document.getElementById("63").innerHTML = "";
    document.getElementById("64").innerHTML = "";
    document.getElementById("65").innerHTML = "";
    document.getElementById("66").innerHTML = "";
    document.getElementById("67").innerHTML = "";
    document.getElementById("68").innerHTML = "";
    document.getElementById("69").innerHTML = "";
    document.getElementById("70").innerHTML = "";

    document.getElementById("71").innerHTML = "";
    document.getElementById("72").innerHTML = "";
    document.getElementById("73").innerHTML = "";
    document.getElementById("74").innerHTML = "";
    document.getElementById("75").innerHTML = "";
    document.getElementById("76").innerHTML = "";
    document.getElementById("77").innerHTML = "";
    document.getElementById("78").innerHTML = "";
    document.getElementById("79").innerHTML = "";
    document.getElementById("80").innerHTML = "";

    document.getElementById("81").innerHTML = "";
    document.getElementById("82").innerHTML = "";
    document.getElementById("83").innerHTML = "";
    document.getElementById("84").innerHTML = "";
    document.getElementById("85").innerHTML = "";
    document.getElementById("86").innerHTML = "";
    document.getElementById("87").innerHTML = "";
    document.getElementById("88").innerHTML = "";
    document.getElementById("89").innerHTML = "";
    document.getElementById("90").innerHTML = "";

    document.getElementById("91").innerHTML = "";
    document.getElementById("92").innerHTML = "";
    document.getElementById("93").innerHTML = "";
    document.getElementById("94").innerHTML = "";
    document.getElementById("95").innerHTML = "";
    document.getElementById("96").innerHTML = "";
    document.getElementById("97").innerHTML = "";
    document.getElementById("98").innerHTML = "";
    document.getElementById("99").innerHTML = "";
    document.getElementById("100").innerHTML = "";

    //snake

    if (p1sum == 32) {
        p1sum = 10;
        dangerAudio();
    } else if (p1sum == 36) {
        p1sum = 6;
        dangerAudio();
    } else if (p1sum == 48) {
        p1sum = 26;
        dangerAudio();
    } else if (p1sum == 62) {
        p1sum = 18;
        dangerAudio();
    } else if (p1sum == 88) {
        p1sum = 24;
        dangerAudio();
    } else if (p1sum == 95) {
        p1sum = 56;
        dangerAudio();
    } else if (p1sum == 97) {
        p1sum = 78;
        dangerAudio();
    }

    //ladder

    if (p1sum == 1) {
        p1sum = 38;
        successAudio();
    } else if (p1sum == 4) {
        p1sum = 14;
        successAudio();
    } else if (p1sum == 8) {
        p1sum = 10;
        successAudio();
    } else if (p1sum == 28) {
        p1sum = 76;
        successAudio();
    } else if (p1sum == 21) {
        p1sum = 42;
        successAudio();
    } else if (p1sum == 50) {
        p1sum = 67;
        successAudio();
    } else if (p1sum == 71) {
        p1sum = 92;
        successAudio();
    } else if (p1sum == 80) {
        p1sum = 99;
        successAudio();
    }

    if (p1sum > 100) {
        p1sum = p1sum - number;
    }

    if (p1sum == 100) {
        finishAudio();
        alert("Player White Won");
        document.querySelector(".button-1").disabled = true;
        document.querySelector(".button-2").disabled = true;
    }

    document.getElementById(`${p1sum}`).innerHTML =
        '<i class="bi bi-circle-fill p1"></i>';

    document.querySelector(".button-1").disabled = true;
    document.querySelector(".button-2").disabled = false;
}

// dice 2 function

function dice2() {
    let Dice2 = '<i class="bi bi-circle-fill p2"></i>';

    let number = Math.random(Dice2) * 6;
    number = Number.parseInt(number);
    number = number + 1;

    //player piece
    p2sum = p2sum + number;

    if (number === 1) {
        document.querySelector("#dice-2").innerHTML =
            '<i class="bi bi-dice-1-fill icon"></i>';
    } else if (number === 2) {
        document.querySelector("#dice-2").innerHTML =
            '<i class="bi bi-dice-2-fill icon"></i>';
    } else if (number === 3) {
        document.querySelector("#dice-2").innerHTML =
            '<i class="bi bi-dice-3-fill icon"></i>';
    } else if (number === 4) {
        document.querySelector("#dice-2").innerHTML =
            '<i class="bi bi-dice-4-fill icon"></i>';
    } else if (number === 5) {
        document.querySelector("#dice-2").innerHTML =
            '<i class="bi bi-dice-5-fill icon"></i>';
    } else {
        document.querySelector("#dice-2").innerHTML =
            '<i class="bi bi-dice-6-fill icon"></i>';
    }

    document.getElementById("101").innerHTML = "";
    document.getElementById("102").innerHTML = "";
    document.getElementById("103").innerHTML = "";
    document.getElementById("104").innerHTML = "";
    document.getElementById("105").innerHTML = "";
    document.getElementById("106").innerHTML = "";
    document.getElementById("107").innerHTML = "";
    document.getElementById("108").innerHTML = "";
    document.getElementById("109").innerHTML = "";
    document.getElementById("110").innerHTML = "";

    document.getElementById("111").innerHTML = "";
    document.getElementById("112").innerHTML = "";
    document.getElementById("113").innerHTML = "";
    document.getElementById("114").innerHTML = "";
    document.getElementById("115").innerHTML = "";
    document.getElementById("116").innerHTML = "";
    document.getElementById("117").innerHTML = "";
    document.getElementById("118").innerHTML = "";
    document.getElementById("119").innerHTML = "";
    document.getElementById("120").innerHTML = "";

    document.getElementById("121").innerHTML = "";
    document.getElementById("122").innerHTML = "";
    document.getElementById("123").innerHTML = "";
    document.getElementById("124").innerHTML = "";
    document.getElementById("125").innerHTML = "";
    document.getElementById("126").innerHTML = "";
    document.getElementById("127").innerHTML = "";
    document.getElementById("128").innerHTML = "";
    document.getElementById("129").innerHTML = "";
    document.getElementById("130").innerHTML = "";

    document.getElementById("131").innerHTML = "";
    document.getElementById("132").innerHTML = "";
    document.getElementById("133").innerHTML = "";
    document.getElementById("134").innerHTML = "";
    document.getElementById("135").innerHTML = "";
    document.getElementById("136").innerHTML = "";
    document.getElementById("137").innerHTML = "";
    document.getElementById("138").innerHTML = "";
    document.getElementById("139").innerHTML = "";
    document.getElementById("140").innerHTML = "";

    document.getElementById("141").innerHTML = "";
    document.getElementById("142").innerHTML = "";
    document.getElementById("143").innerHTML = "";
    document.getElementById("144").innerHTML = "";
    document.getElementById("145").innerHTML = "";
    document.getElementById("146").innerHTML = "";
    document.getElementById("147").innerHTML = "";
    document.getElementById("148").innerHTML = "";
    document.getElementById("149").innerHTML = "";
    document.getElementById("150").innerHTML = "";

    document.getElementById("151").innerHTML = "";
    document.getElementById("152").innerHTML = "";
    document.getElementById("153").innerHTML = "";
    document.getElementById("154").innerHTML = "";
    document.getElementById("155").innerHTML = "";
    document.getElementById("156").innerHTML = "";
    document.getElementById("157").innerHTML = "";
    document.getElementById("158").innerHTML = "";
    document.getElementById("159").innerHTML = "";
    document.getElementById("160").innerHTML = "";

    document.getElementById("161").innerHTML = "";
    document.getElementById("162").innerHTML = "";
    document.getElementById("163").innerHTML = "";
    document.getElementById("164").innerHTML = "";
    document.getElementById("165").innerHTML = "";
    document.getElementById("166").innerHTML = "";
    document.getElementById("167").innerHTML = "";
    document.getElementById("168").innerHTML = "";
    document.getElementById("169").innerHTML = "";
    document.getElementById("170").innerHTML = "";

    document.getElementById("171").innerHTML = "";
    document.getElementById("172").innerHTML = "";
    document.getElementById("173").innerHTML = "";
    document.getElementById("174").innerHTML = "";
    document.getElementById("175").innerHTML = "";
    document.getElementById("176").innerHTML = "";
    document.getElementById("177").innerHTML = "";
    document.getElementById("178").innerHTML = "";
    document.getElementById("179").innerHTML = "";
    document.getElementById("180").innerHTML = "";

    document.getElementById("181").innerHTML = "";
    document.getElementById("182").innerHTML = "";
    document.getElementById("183").innerHTML = "";
    document.getElementById("184").innerHTML = "";
    document.getElementById("185").innerHTML = "";
    document.getElementById("186").innerHTML = "";
    document.getElementById("187").innerHTML = "";
    document.getElementById("188").innerHTML = "";
    document.getElementById("189").innerHTML = "";
    document.getElementById("190").innerHTML = "";

    document.getElementById("191").innerHTML = "";
    document.getElementById("192").innerHTML = "";
    document.getElementById("193").innerHTML = "";
    document.getElementById("194").innerHTML = "";
    document.getElementById("195").innerHTML = "";
    document.getElementById("196").innerHTML = "";
    document.getElementById("197").innerHTML = "";
    document.getElementById("198").innerHTML = "";
    document.getElementById("199").innerHTML = "";
    document.getElementById("200").innerHTML = "";

    //snake

    if (p2sum == 132) {
        p2sum = 110;
        dangerAudio();
    } else if (p2sum == 136) {
        p2sum = 106;
        dangerAudio();
    } else if (p2sum == 148) {
        p2sum = 126;
        dangerAudio();
    } else if (p2sum == 162) {
        p2sum = 118;
        dangerAudio();
    } else if (p2sum == 188) {
        p2sum = 124;
        dangerAudio();
    } else if (p2sum == 195) {
        p2sum = 156;
        dangerAudio();
    } else if (p2sum == 197) {
        p2sum = 178;
        dangerAudio();
    }

    //ladder

    if (p2sum == 101) {
        p2sum = 138;
        successAudio();
    } else if (p2sum == 104) {
        p2sum = 114;
        successAudio();
    } else if (p2sum == 108) {
        p2sum = 110;
        successAudio();
    } else if (p2sum == 128) {
        p2sum = 176;
        successAudio();
    } else if (p2sum == 121) {
        p2sum = 142;
        successAudio();
    } else if (p2sum == 150) {
        p2sum = 167;
        successAudio();
    } else if (p2sum == 171) {
        p2sum = 192;
        successAudio();
    } else if (p2sum == 180) {
        p2sum = 199;
        successAudio();
    }

    if (p2sum > 200) {
        p2sum = p2sum - number;
    }

    if (p2sum == 200) {
        finishAudio();
        alert("Player Black Won");
        document.querySelector(".button-1").disabled = true;
        document.querySelector(".button-2").disabled = true;
    }

    document.getElementById(`${p2sum}`).innerHTML =
        '<i class="bi bi-circle-fill p2"></i>';

    document.querySelector(".button-1").disabled = false;
    document.querySelector(".button-2").disabled = true;
}