/* default categories */
var assignments = new Category('assignments');
var quizzes = new Category('quizzes');
var midterms = new Category('midterms');
var final = new Category('final');
var defaultCats = new Array(assignments, quizzes, midterms, final);
defaultCats.addCategories();

/* add categories to input table */
var data = [
    { value}
]
// Get the context of the canvas element we want to select
var ctx = document.getElementById("char");.getContext("2d");
var gbChart = new Chart(ctx).PolarArea(data);

function createData (catList) {
    var data = new Array();
    for (i in catList) 
        push.(catList[i].
}
Array.prototype.addCategories = function () {
    for (i in this) 
        this.addField(this[i]);
}

function addField (category) {
    var inputTable = document.getElementById("input_table");
    inputTable.innerHTML += category.inputTag;
}


/*function CategoryTable (catList) {
    this.catList = catList;
    this.addFields = function (this.catList) {
        for ( i in catList) 
            this.addField(catList[i]);
    };

    this.addField = function (category) {
        var inputTable = document.getElementById("input_table");
        inputTable.innerHTML += category.inputTag;
    }


}*/

function Category (name, weight)  {
    this.name = 'unnamed_category';
    this.weight = '0';
    this.inputTag =  
        '<tr class="category_input"><td><p>' + this.name + '</p></td><td><input type="text" name="weight" value="0"></td></tr>';

    this.setName = function (newName) { this.name = newName; };
    this.getName = function () { this.name; };
    this.setWeight = function (newWeight) { this.weight = newWeight; };
    this.getWeight = function () { this.weight; };
}

function addPercents() {
    var sum = 0;
    var percents = document.getElementsByName("percent");
    for (var i=0; i<percents.length; i++) {
        var per = percents.item(i).value;
        per = parseInt(per);
        sum += per;
    }
    console.log(": " + sum);    // TODO - CONSOLE OUTPUT
}

function getCategories() {
    var cat = document.getElementById("category").value;
    console.log("result: " + cat);
}

function printInputs() {
   var formElement = document.getElementById("form1");
    var inputList = formElement.getElementsByTagName("input");
    var inputs = [];
    for (var i=0; i < inputList.length; i++) {
        console.log(":" + inputList[i].value); // TODO - CONOSLE OUTPUT
    }
}

  


