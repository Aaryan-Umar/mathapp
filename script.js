let differentoptions = ["1 Digit Answer", "1 Digit + 1 Digit"]
let answer;
let times = 0;
let questionsCount = 0;
let wrong_questions = 0;
let questionsRight = 0;
function spawnCards(){

    for (let i = 0; i < differentoptions.length; i++) {
        let cardEl = document.createElement("div");
        cardEl.classList.add("optioncard");
        let titleEl = document.createElement("div");
        titleEl.classList.add("optionsTitle");
        titleEl.innerHTML = differentoptions[i]
        cardEl.appendChild(titleEl)
        cardEl.id = titleEl.innerHTML
        titleEl.id = cardEl.id
        document.getElementsByClassName("optionsCont")[0].appendChild(cardEl)
        cardEl.addEventListener("click", processClick);

    }

}

function init(){
    spawnCards()

}

function processClick(card) {

    switch (card.target.id){
    case "1 Digit + 1 Digit":
        startPlaying1DigitDigit()
        break;
    case "1 Digit Answer":
        startPlaying1ans();
        makeQuestion1ans()
        break;
    
    default:
        console.log(card.target.id)
    }
}

init()

function startPlaying1DigitDigit() {
    document.getElementsByClassName("optionsCont")[0].style.display = "none"
    document.getElementsByClassName("digitdigitCont")[0].style.display="flex"
        document.getElementsByClassName("digitansCont")[0].style.display =
          "none";

}

function startPlaying1ans() {
        document.getElementsByClassName("optionsCont")[0].style.display =
          "none";
    document.getElementsByClassName("digitdigitCont")[0].style.display =
      "none";

        document.getElementsByClassName("digitansCont")[0].style.display = "flex";

        makeChoices1Ans()

}

function makeChoices1Ans() {
    for (let i = 1; i < 10; i++) {
        let numberEl = document.createElement("div")
        numberEl.classList.add("keypad")
        numberEl.textContent = i
        document.getElementsByClassName("keypadCont")[0].appendChild(numberEl)
        numberEl.addEventListener("click", checkAnswer)        
    }

}

function makeQuestion1ans() {
    if(questionsCount % 4 == 0 && questionsCount != 0) gameDone();
    times++;
    let addend1 = Math.round(Math.random() * 5);
    let addend2 = Math.round(Math.random() * 5);
    if(addend1 == 0) addend1+=3;
    if(addend2 == 0) addend2 = Math.round(Math.random() * 4);
    if(addend1 == 5 && addend2 == 5) addend2 = 1;
    if(times % 4 == 0) addend2 = 1; addend1 + 2
    answer = addend1 + addend2;
    document.getElementsByClassName("digitquestion")[0].textContent = addend1 + " + " + addend2
 for (let i = 0; i < document.getElementsByClassName("keypad").length; i++) {
   const element = document.getElementsByClassName("keypad")[i];
   element.classList.remove("invalid");
 }
    questionsCount++;


}

function checkAnswer(target) {
            for (
              let i = 0;
              i < document.getElementsByClassName("keypad").length;
              i++
            ) {
              const element = document.getElementsByClassName("keypad")[i];
              element.classList.remove("invalid");
            }

    console.log(target.target.innerHTML)
    if(Number(target.target.innerHTML) == answer){
        answer=0
        questionsRight = questionsRight + 1;
        document.getElementsByClassName("digitquestion")[0].style.setProperty('--animate-duration', '0.7s');

        document.getElementsByClassName("digitquestion")[0].style.display="flex"
        document.getElementsByClassName("digitquestion")[0].classList.add("animate__animated")
        document.getElementsByClassName("digitquestion")[0].classList.add("animate__fadeOutUp") 
        setTimeout(() => {
            document.getElementsByClassName("digitquestion")[0].classList.remove("animate__animated")
            document.getElementsByClassName("digitquestion")[0].classList.remove("animate__fadeOutUp") 
        }, 300);
        makeQuestion1ans()
    } else {
        wrong_questions = wrong_questions + 1

        for (let i = 0; i < document.getElementsByClassName("keypad").length; i++) {
            document.getElementsByClassName("keypad")[i].classList.add("invalid");            
        }
                new Audio("error-4-199275.mp3").play();

        setTimeout(() => {
                        for (
                          let i = 0;
                          i < document.getElementsByClassName("keypad").length;
                          i++
                        ) {
                          const element =
                            document.getElementsByClassName("keypad")[i];
                          element.classList.remove("invalid");
                        }
        }, 630);

    }
    
}
function removeKeypad() {
    console.log(document.getElementsByClassName("keypad"))
        for (let i = 0; i < 11; i++) {
            console.log(document.getElementsByClassName("keypad").length)
            if(document.getElementsByClassName("keypad")[i]) document.getElementsByClassName("keypad")[i].remove();
            
        
    }
}


function gameDone() {
    document.getElementsByClassName("digitansCont")[0].style.display = "none";
    document.getElementsByClassName("gameDoneScreen")[0].style.display = "flex";
    document.getElementsByClassName("questionsWrong")[0].textContent = "Wrong Questions: " + wrong_questions.toString();
    document.getElementsByClassName("questionsRight")[0].textContent = "Right Questions: " + questionsRight.toString();
    console.log(questionsRight);
    console.log(wrong_questions);
    document.getElementsByClassName("optionsCont")[0].style.display = "flex";

}
