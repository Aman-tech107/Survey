class Form {
    constructor(){
        
        this.name = createInput().attribute("placeholder", "Your Name");
        this.email = createInput().attribute("placeholder", "Email");
        this.password = createInput().attribute("placehloder", "Create Password");
        this.logButton = createButton("Log In");
        this.Logtitle = createElement('h1');

        this.welcomeForm = createElement('h2');
        this.QuestionFirst = createElement('h3');
        this.Opt_Que_First = createRadio("Option");
        this.Opt_Que_First.option("Yes");
        this.Opt_Que_First.option("No");
        this.answer = createElement('label', 1);
        this.QuestionSecond = createElement('h3');
        this.Opt_Que_Second = createRadio();
        this.Opt_Que_Second.option("Yes");
        this.Opt_Que_Second.option("No");
        this.answerSecond = createElement('label');
        this.QuestionThird = createElement('h3');
        this.Opt_Que_Third = createRadio();
        this.Opt_Que_Third.option("100");
        this.Opt_Que_Third.option("500");
        this.Opt_Que_Third.option("1000");
        this.Opt_Que_Third.option("More");
        this.answerThird = createElement('label');
        this.optional = createElement('h4');
        this.optionalInput = createElement('textarea');
        this.optionalInput.style("width: 50%; height: 35%;")
        this.submit = createButton("Submit");
    }

    hide(){
        this.name.hide();
        this.email.hide();
        this.password.hide();
        this.logButton.hide();
        this.Logtitle.hide();
    }

    display(){
        image(backgroundImage, 0, 0, displayWidth - 20, displayHeight - 20);
        this.Logtitle.html("Log In To Survey Form");
        this.Logtitle.style = "background-color:blue";
        this.Logtitle.position(displayWidth / 2 - 170, 0);
        this.name.position(displayWidth / 2 - 50, displayHeight / 2 - 150);
        this.email.position(displayWidth / 2 - 50, displayHeight / 2 - 120);
        this.password.position(displayWidth / 2 -50, displayHeight / 2 - 90);
        this.logButton.position(displayWidth / 2 -50, displayHeight / 2 - 50);
        person.getCount();
        this.logButton.mousePressed(() => {
            this.hide();
            person.name = this.name.value();
            person.email = this.email.value();
            person.password = this.password.value();
            
            
            console.log(PersonCount);
            PersonCount++;
            console.log(PersonCount);
            person.updateCount(PersonCount);
            //this.getPersonDisplay();
            //this.updatePersonDisplay(1);
            PersonDisplay = 1;
            person.getPersonInfo();
            person.update();
        })
        console.log(displayWidth);
        /*!(this.logButton.mousePressed(() => {
        this.welcomeForm.hide();
        this.QuestionFirst.hide();
        this.Opt_Que_First.hide();
        this.answer.hide();
        this.QuestionSecond.hide();
        this.Opt_Que_Second.hide();
        this.answerSecond.hide();
        this.QuestionThird.hide();
        this.Opt_Que_Second.hide();
        this.answerSecond.hide();
        this.optional.hide();
        this.optionalInput.hide();
        })
        )*/

        if(PersonDisplay === 1){
            image(secondImage, 0, 0, displayWidth, displayHeight);
            this.welcomeForm.html("Select options accroding to your answer.");
            this.QuestionFirst.html('Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?');
            //this.Opt_Que_First.html('Yes/No');
            this.answer.html('Answer');
            this.QuestionSecond.html("Q2. Would you be willing to contribute a small amount every month for such a program?");
            this.answerSecond.html('Answer');
            this.QuestionThird.html("Q3. How much per month would you willing to pay?");
            this.answerThird.html('Answer');
            this.optional.html("Write other questions on which you want to take survey. Also your feedback about this survey.");
            //this.Opt_Que_First.value("Yes");
            
            this.welcomeForm.position(displayWidth / 2 - 230, 0);
            this.QuestionFirst.position(displayWidth / 2 - 500, 80);
            this.answer.position(displayWidth / 8, 150);
            this.Opt_Que_First.position(displayWidth / 2 - 500, 150);
            this.QuestionSecond.position(displayWidth / 2 - 500, 230);
            this.answerSecond.position(displayWidth / 8, 300);
            this.Opt_Que_Second.position(displayWidth / 2 - 500, 300);
            this.QuestionThird.position(displayWidth / 2 - 500, 380);
            this.answerThird.position(displayWidth / 8, 450);
            this.Opt_Que_Third.position(displayWidth / 2 - 500, 450);
            this.optional.position(displayWidth / 2 - 500, 520);
            this.optionalInput.position(displayWidth / 2 - 500, 580);
            this.submit.position(displayWidth / 2, 650);
            this.submit.mousePressed(()=> {
                console.log(this.Opt_Que_First.value());
                answers.push(this.Opt_Que_First.value(), this.Opt_Que_Second.value(), this.Opt_Que_Third.value(), this.optionalInput.value());
                //answers.push(this.Opt_Que_First.value());
                person.updateSurvey();
                this.welcomeForm.hide();
        this.QuestionFirst.hide();
        this.Opt_Que_First.hide();
        this.answer.hide();
        this.QuestionSecond.hide();
        this.Opt_Que_Second.hide();
        this.answerSecond.hide();
        this.QuestionThird.hide();
        this.Opt_Que_Third.hide();
        this.answerThird.hide();
        this.optional.hide();
        this.optionalInput.hide();
        this.submit.hide();
        PersonDisplay = 2;
        
            })
            
            }
            if(PersonDisplay === 2){
                image(thumb, displayWidth / 2 - 200, displayHeight / 2 - 200, displayWidth / 5, displayHeight / 5);
        }
    }

    getPersonDisplay(){
        var PersonDisplayRef = database.ref("PersonDisplay");
        PersonDisplayRef.on("value", (data) => {
            PersonDisplay = data.val();
        })
    }

    updatePersonDisplay(personDisplay){
        database.ref("/").update({
            PersonDisplay: personDisplay
        })
    }
}