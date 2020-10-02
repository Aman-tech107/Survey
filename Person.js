class Person {
    constructor(){
        this.name = null;
        this.email = null;
        this.answers = null;
    }

    getPersonInfo(){
        var PersonInfoRef = database.ref("Person");
        PersonInfoRef.on("value", (data) => {
            Persons = data.val();
        })
    }

    update(){
        var Person = "Person/person"+PersonCount;
        database.ref(Person).set({
            name: this.name,
            email: this.email
        })
    }

    updateSurvey(){
        var Person = "Person/person"+PersonCount;
        database.ref(Person).update({
            Yes_No: answers
        })
    }

    getCount(){
        var CountRef = database.ref("Count");
        CountRef.on("value", (data) => {
            PersonCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            Count: count
        })
    }
}