var human = {
    name : 'Adam',
    age : 25,
    sex : 'male',
    height : 176,
    weight : 80
};

function Worker(name) {
    this.name = name;
    this.job = 'factory';
    this.salary = 1500;
    this.work = function( a, b ){
        res = a + b;
        return res;
    };
}

function Student(name) {
    this.name = name;
    this.studyPlace = 'univercity';
    this.stipend = 100;
    this.watchTVSoap = function (soap) {

        alert("I'm watching now"+ " " + soap );
    };
}

Student.prototype = human;

Worker.prototype = human;

var peterStudent = new Student('Peter');
peterStudent.studyPlace = 'Kyiv univercity';
// peterStudent.watchTVSoap('Breaking bad');

var billStudent = new Student('Bill');
billStudent.age = 20;
billStudent.studyPlace = 'Lviv univercity';

var johnWorker = new Worker('John');
johnWorker.age = 35;
johnWorker.job = 'office';


var badWorker = new Worker('Ivan');
badWorker.vodka = 100;
badWorker.salary = 500;
badWorker.drinkVodka = function () {
    this.vodka --;
};
badWorker.drinkVodka();
