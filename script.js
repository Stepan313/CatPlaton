function gamecopm1() {
		   var answer=parseInt(Math.random() * 100);
           var i=1;
           var iC=10
    while (i<=iC) {
        var userAnswer=prompt("Компутер загадал число от 0 до 100, у тебя 10 попыток чтобы отгадать. Если сдаешься,то нажми x. Сейчас попытка №" + i);
        i++
        if (userAnswer=="x") {
            break;
        }
        userAnswer=parseInt(userAnswer);

        if (userAnswer>answer) {
            alert("Перебор");
        } else if (userAnswer<answer) {
            alert("Недобор");
        } else if (userAnswer==answer) {
            alert("Бинго");
            break;
        } else {
            alert("Число вводи ээ");
        }
        if (i>iC) {alert("Попытки кончились. Гейм Овер. Правильный ответ был:" + answer);}
    }
}

function gamecopm2(){
    var answer=parseInt(Math.random() * 100);
    var playerNum=1;
    while(true){
        var userAnswer=parseInt(prompt("Ходит игрок " + playerNum + ". Введите число от 0 до 100. Если сдаешься, то  нажми x"));
        if (userAnswer=="x") {
            break;
    }
    if (playerNum==1) {
            playerNum=2;
        } else {
            playerNum=1;
        }

    if (userAnswer>answer) {alert("Перебор");
}   else if (userAnswer<answer) {alert("Недобор");}
    else if (userAnswer==answer) {alert("Бинго! Победил игрок " + playerNum);
    break;
}   else {alert("Число вводи ээ");}
}
}

function zagadki(){
    var b=0;
        var a=prompt("Что произойдёт если ты сядешь не на свой автобус и уедешь не в свою сторону");
        if (a=="ничего") {b = b + 1; alert("ты грустненький")}
            else {alert("ты не грустненький")}
        var a=prompt("Продолжи числовой ряд: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ....")
        if (a=="144") {b = b + 1; alert("Умеешь считать")}
            else {alert("учи матчасть!")}
        var a=prompt("Кто ты?")
        if (a=="не знаю") {b = b + 1; alert("Не знаю")}
            else {alert("Совсем зазнался")}
        var a=prompt("Что самое трудное?")
        if (a=="познать самого себя") {b = b + 1; alert("да")}
            else {alert("ну такое")}
        var a=prompt("Чем жизнь отличается от смерти?")
        if (a=="ничем") {b = b + 1; alert("☯")}
            else {alert("ну ты совсем")}
                alert("ты отгадал "+ b +" из 5 загадок ㋛")

}