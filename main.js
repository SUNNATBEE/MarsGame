// Assalomu aleykum o'yin haqida qisqacha ma'lumot:
// O'yinimizni nomi Sarguzashtlar shahri .
// 1)O'yinchi promtdan ismini kiritadi va javobi alertda chiqadi
// 2)Keyin esa yana promtdan qayerga borishi soraladi va berilgan 3 ta royhatdan bittasi tanlanadi 
// Agar berilgan royhatdan tashqari boshqa nom kiritilsa , yuqoridagi savol yana qaytib kelishi kerak
// 3)Agar 3 ta joydan birini kiritsa promtdan savol berilishi kerak va javobi togri bolsa keyingi etapga otgan bolib yutgan hisoblanadi
// 4)Agar javob notori bo'lsa yana bitta imkinoyat beriladi , va osha savol yana qayatadan chiqishi kerak Nori javoblarni hisoblab ketish kerak va 
// alertda nechta xatolikka yol qoyilganini chiqarsih kerak 




var playerName = prompt("Привет! Как тебя зовут?").trim();
alert("Добро пожаловать в Кодоландию, " + playerName.toUpperCase() + "!");

var wrongAnswers = 0; 

var path = prompt("Куда ты хочешь пойти? (лес/река/город)").toLowerCase();

if(path !== "лес" || "город" || "река"){
    alert("Такого пути не существует. Попробуй еще раз!");
    var path = prompt("Куда ты хочешь пойти? (лес/река/город)").toLowerCase();
}

var finalChallengeCompleted = false; 



if (path === "лес") {
    var answer = prompt("Реши задачу: сколько будет 5 * 3 + 10?");
    if (parseInt(answer) === 25) {
        alert("Правильно! Ты можешь идти дальше.");
        finalChallengeCompleted = true;
    } else {
        wrongAnswers++;
    }

} else if (path === "река") {
    var answer2 = prompt("Реши задачу: сколько будет 5 * 4 - 10?");
    if (parseInt(answer2) === 10) {
        alert("Правильно! Ты можешь идти дальше.");
        finalChallengeCompleted = true;
    } else {
        wrongAnswers++;
    }

} else if (path === "город") {
    var answer3 = prompt("Реши задачу: сколько будет 10 * 5 - 50?");
    if (parseInt(answer3) === 0) {
        alert("Правильно! Ты можешь идти дальше.");
        finalChallengeCompleted = true;
    } else {
        wrongAnswers++;
    }
} else {
    
    wrongAnswers++;
}

if(path == "лес"  && !finalChallengeCompleted){
    wrongAnswers++;
    alert("не правилный ответ");
    var answer2 = prompt("2-попитка Реши задачу: сколько будет 5 * 3 - 10?");
}

if(path == "река"  && !finalChallengeCompleted){
    wrongAnswers++;
    alert("не правилный ответ");
    var answer2 = prompt("2-попитка Реши задачу: сколько будет 5 * 4 - 10?");
}

if(path == "город"  && !finalChallengeCompleted){
    wrongAnswers++;
    alert("не правилный ответ");
    var answer2 = prompt("2-попитка Реши задачу: сколько будет 10 * 5 - 50?");
}

if (finalChallengeCompleted) {
    alert("Поздравляем, " + playerName + "! Ты успешно прошел все испытания Кодоландии!");
} else {
    alert("К сожалению, " + playerName + ", тебе не удалось преодолеть последнее испытание. Ты допустил " + wrongAnswers + " ошибок. Попробуй снова!");
}


