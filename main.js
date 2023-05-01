let p1sum = 0;
let p2sum = 100;

// snake 22/3, 47/28, 65/45, 84/70, 99/18
// ladder 2/33, 29/48, 55/94, 73/97, 88/95

//audio function

function audio() {
    document.getElementById("audio").play();
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

    document.getElementById("1").innerHTML = 1;
    document.getElementById("2").innerHTML = 2;
    document.getElementById("3").innerHTML = 3 + '<i>22 Snake</i>';
    document.getElementById("4").innerHTML = 4;
    document.getElementById("5").innerHTML = 5;
    document.getElementById("6").innerHTML = 6;
    document.getElementById("7").innerHTML = 7;
    document.getElementById("8").innerHTML = 8;
    document.getElementById("9").innerHTML = 9;
    document.getElementById("10").innerHTML = 10;

    document.getElementById("11").innerHTML = 11;
    document.getElementById("12").innerHTML = 12;
    document.getElementById("13").innerHTML = 13;
    document.getElementById("14").innerHTML = 14;
    document.getElementById("15").innerHTML = 15;
    document.getElementById("16").innerHTML = 16;
    document.getElementById("17").innerHTML = 17;
    document.getElementById("18").innerHTML = 18;
    document.getElementById("19").innerHTML = 19;
    document.getElementById("20").innerHTML = 20;

    document.getElementById("21").innerHTML = 21;
    document.getElementById("22").innerHTML = 22;
    document.getElementById("23").innerHTML = 23;
    document.getElementById("24").innerHTML = 24;
    document.getElementById("25").innerHTML = 25;
    document.getElementById("26").innerHTML = 26;
    document.getElementById("27").innerHTML = 27;
    document.getElementById("28").innerHTML = 28;
    document.getElementById("29").innerHTML = 29;
    document.getElementById("30").innerHTML = 30;

    document.getElementById("31").innerHTML = 31;
    document.getElementById("32").innerHTML = 32;
    document.getElementById("33").innerHTML = 33;
    document.getElementById("34").innerHTML = 34;
    document.getElementById("35").innerHTML = 35;
    document.getElementById("36").innerHTML = 36;
    document.getElementById("37").innerHTML = 37;
    document.getElementById("38").innerHTML = 38;
    document.getElementById("39").innerHTML = 39;
    document.getElementById("40").innerHTML = 40;

    document.getElementById("41").innerHTML = 41;
    document.getElementById("42").innerHTML = 42;
    document.getElementById("43").innerHTML = 43;
    document.getElementById("44").innerHTML = 44;
    document.getElementById("45").innerHTML = 45;
    document.getElementById("46").innerHTML = 46;
    document.getElementById("47").innerHTML = 47;
    document.getElementById("48").innerHTML = 48;
    document.getElementById("49").innerHTML = 49;
    document.getElementById("50").innerHTML = 50;

    document.getElementById("51").innerHTML = 51;
    document.getElementById("52").innerHTML = 52;
    document.getElementById("53").innerHTML = 53;
    document.getElementById("54").innerHTML = 54;
    document.getElementById("55").innerHTML = 55;
    document.getElementById("56").innerHTML = 56;
    document.getElementById("57").innerHTML = 57;
    document.getElementById("58").innerHTML = 58;
    document.getElementById("59").innerHTML = 59;
    document.getElementById("60").innerHTML = 60;

    document.getElementById("61").innerHTML = 61;
    document.getElementById("62").innerHTML = 62;
    document.getElementById("63").innerHTML = 63;
    document.getElementById("64").innerHTML = 64;
    document.getElementById("65").innerHTML = 65;
    document.getElementById("66").innerHTML = 66;
    document.getElementById("67").innerHTML = 67;
    document.getElementById("68").innerHTML = 68;
    document.getElementById("69").innerHTML = 69;
    document.getElementById("70").innerHTML = 70;

    document.getElementById("71").innerHTML = 71;
    document.getElementById("72").innerHTML = 72;
    document.getElementById("73").innerHTML = 73;
    document.getElementById("74").innerHTML = 74;
    document.getElementById("75").innerHTML = 75;
    document.getElementById("76").innerHTML = 76;
    document.getElementById("77").innerHTML = 77;
    document.getElementById("78").innerHTML = 78;
    document.getElementById("79").innerHTML = 79;
    document.getElementById("80").innerHTML = 80;

    document.getElementById("81").innerHTML = 81;
    document.getElementById("82").innerHTML = 82;
    document.getElementById("83").innerHTML = 83;
    document.getElementById("84").innerHTML = 84;
    document.getElementById("85").innerHTML = 85;
    document.getElementById("86").innerHTML = 86;
    document.getElementById("87").innerHTML = 87;
    document.getElementById("88").innerHTML = 88;
    document.getElementById("89").innerHTML = 89;
    document.getElementById("90").innerHTML = 90;

    document.getElementById("91").innerHTML = 91;
    document.getElementById("92").innerHTML = 92;
    document.getElementById("93").innerHTML = 93;
    document.getElementById("94").innerHTML = 94;
    document.getElementById("95").innerHTML = 95;
    document.getElementById("96").innerHTML = 96;
    document.getElementById("97").innerHTML = 97;
    document.getElementById("98").innerHTML = 98;
    document.getElementById("99").innerHTML = 99;
    document.getElementById("100").innerHTML = 100;

    //snake

    if (p1sum == 22) {
        p1sum = 3
    } else if (p1sum == 47) {
        p1sum = 28
    } else if (p1sum == 65) {
        p1sum = 45
    } else if (p1sum == 84) {
        p1sum = 70
    } else if (p1sum == 99) {
        p1sum = 18
    }

    //ladder

    if (p1sum == 2) {
        p1sum = 33
    } else if (p1sum == 29) {
        p1sum = 48
    } else if (p1sum == 55) {
        p1sum = 94
    } else if (p1sum == 73) {
        p1sum = 97
    } else if (p1sum == 88) {
        p1sum = 95
    }

    if (p1sum > 100) {
        p1sum = p1sum - number;
    }

    if (p1sum == 100) {
        alert("Player Grey Won");
    }

    document.getElementById(`${p1sum}`).innerHTML =
        '<i class="bi bi-circle-fill p1"></i>';

    document.querySelector(".button-1").disabled = true;
    document.querySelector(".button-2").disabled = false;
}

// dice 2 function

function dice2() {
    let Dice2 = "";

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

    document.getElementById("101").innerHTML = 1;
    document.getElementById("102").innerHTML = 2;
    document.getElementById("103").innerHTML = 3 + '<i>22 Snake</i>';
    document.getElementById("104").innerHTML = 4;
    document.getElementById("105").innerHTML = 5;
    document.getElementById("106").innerHTML = 6;
    document.getElementById("107").innerHTML = 7;
    document.getElementById("108").innerHTML = 8;
    document.getElementById("109").innerHTML = 9;
    document.getElementById("110").innerHTML = 10;

    document.getElementById("111").innerHTML = 11;
    document.getElementById("112").innerHTML = 12;
    document.getElementById("113").innerHTML = 13;
    document.getElementById("114").innerHTML = 14;
    document.getElementById("115").innerHTML = 15;
    document.getElementById("116").innerHTML = 16;
    document.getElementById("117").innerHTML = 17;
    document.getElementById("118").innerHTML = 18;
    document.getElementById("119").innerHTML = 19;
    document.getElementById("120").innerHTML = 20;

    document.getElementById("121").innerHTML = 21;
    document.getElementById("122").innerHTML = 22;
    document.getElementById("123").innerHTML = 23;
    document.getElementById("124").innerHTML = 24;
    document.getElementById("125").innerHTML = 25;
    document.getElementById("126").innerHTML = 26;
    document.getElementById("127").innerHTML = 27;
    document.getElementById("128").innerHTML = 28;
    document.getElementById("129").innerHTML = 29;
    document.getElementById("130").innerHTML = 30;

    document.getElementById("131").innerHTML = 31;
    document.getElementById("132").innerHTML = 32;
    document.getElementById("133").innerHTML = 33;
    document.getElementById("134").innerHTML = 34;
    document.getElementById("135").innerHTML = 35;
    document.getElementById("136").innerHTML = 36;
    document.getElementById("137").innerHTML = 37;
    document.getElementById("138").innerHTML = 38;
    document.getElementById("139").innerHTML = 39;
    document.getElementById("140").innerHTML = 40;

    document.getElementById("141").innerHTML = 41;
    document.getElementById("142").innerHTML = 42;
    document.getElementById("143").innerHTML = 43;
    document.getElementById("144").innerHTML = 44;
    document.getElementById("145").innerHTML = 45;
    document.getElementById("146").innerHTML = 46;
    document.getElementById("147").innerHTML = 47;
    document.getElementById("148").innerHTML = 48;
    document.getElementById("149").innerHTML = 49;
    document.getElementById("150").innerHTML = 50;

    document.getElementById("151").innerHTML = 51;
    document.getElementById("152").innerHTML = 52;
    document.getElementById("153").innerHTML = 53;
    document.getElementById("154").innerHTML = 54;
    document.getElementById("155").innerHTML = 55;
    document.getElementById("156").innerHTML = 56;
    document.getElementById("157").innerHTML = 57;
    document.getElementById("158").innerHTML = 58;
    document.getElementById("159").innerHTML = 59;
    document.getElementById("160").innerHTML = 60;

    document.getElementById("161").innerHTML = 61;
    document.getElementById("162").innerHTML = 62;
    document.getElementById("163").innerHTML = 63;
    document.getElementById("164").innerHTML = 64;
    document.getElementById("165").innerHTML = 65;
    document.getElementById("166").innerHTML = 66;
    document.getElementById("167").innerHTML = 67;
    document.getElementById("168").innerHTML = 68;
    document.getElementById("169").innerHTML = 69;
    document.getElementById("170").innerHTML = 70;

    document.getElementById("171").innerHTML = 71;
    document.getElementById("172").innerHTML = 72;
    document.getElementById("173").innerHTML = 73;
    document.getElementById("174").innerHTML = 74;
    document.getElementById("175").innerHTML = 75;
    document.getElementById("176").innerHTML = 76;
    document.getElementById("177").innerHTML = 77;
    document.getElementById("178").innerHTML = 78;
    document.getElementById("179").innerHTML = 79;
    document.getElementById("180").innerHTML = 80;

    document.getElementById("181").innerHTML = 81;
    document.getElementById("182").innerHTML = 82;
    document.getElementById("183").innerHTML = 83;
    document.getElementById("184").innerHTML = 84;
    document.getElementById("185").innerHTML = 85;
    document.getElementById("186").innerHTML = 86;
    document.getElementById("187").innerHTML = 87;
    document.getElementById("188").innerHTML = 88;
    document.getElementById("189").innerHTML = 89;
    document.getElementById("190").innerHTML = 90;

    document.getElementById("191").innerHTML = 91;
    document.getElementById("192").innerHTML = 92;
    document.getElementById("193").innerHTML = 93;
    document.getElementById("194").innerHTML = 94;
    document.getElementById("195").innerHTML = 95;
    document.getElementById("196").innerHTML = 96;
    document.getElementById("197").innerHTML = 97;
    document.getElementById("198").innerHTML = 98;
    document.getElementById("199").innerHTML = 99;
    document.getElementById("200").innerHTML = 100;

    //snake

    if (p2sum == 122) {
        p2sum = 103
    } else if (p2sum == 147) {
        p2sum = 128
    } else if (p2sum == 165) {
        p2sum = 145
    } else if (p2sum == 184) {
        p2sum = 170
    } else if (p2sum == 199) {
        p2sum = 118
    }

    //ladder

    if (p2sum == 102) {
        p2sum = 133
    } else if (p2sum == 129) {
        p2sum = 148
    } else if (p2sum == 155) {
        p2sum = 194
    } else if (p2sum == 173) {
        p2sum = 197
    } else if (p2sum == 188) {
        p2sum = 195
    }

    if (p2sum > 200) {
        p2sum = p2sum - number;
    }

    if (p2sum == 200) {
        alert("Player Black Won");
    }

    document.getElementById(`${p2sum}`).innerHTML =
        '<i class="bi bi-circle-fill p2"></i>';

    document.querySelector(".button-1").disabled = false;
    document.querySelector(".button-2").disabled = true;
}