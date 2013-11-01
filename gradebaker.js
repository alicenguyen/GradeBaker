var syllabusModule = (function () {
    /* private properties */
    var defaultItem = [['assignments','25'], ['quizzes', '25'], ['midterms', '25'], ['final', '25']];
    var category = {};

    function _init () {
        for (i in defaultItem) { 
            var name = defaultItem[i][0];
            var value = defaultItem[i][1];
            category[name] = { 
                weight : value,
    tag : (function(){_createTag(name, value)})
            }
            _addInputField(name, value);
        }
    }

    function _createTag (name, weight) {
        return '<tr class="category_input" name='+name+'><td><input type="text" name="label" value='+name+'></td><td><input type="text" name="weight" value='+ weight +' onchange="syllabusModule.setWeight(this.name,this.value)"></td></tr>';
    }

    function _addInputField (name, weight) {
        var tableNode = document.getElementById("input_table");
        var inputTR = _createTag(name, weight);
        tableNode.innerHTML += inputTR;
        console.log('_addInputField: ' +  name + ', ' + weight); 
    }

    /* public properties */
    return {
        init : (function () {
            _init();
        })(),

             addCategory : function (name) {   // values is [name, weight]
                 category[name] = { weight : 0 };
                 this.printAll();
             },

             size : function () {
                 return set.length;
             },

             setWeight : function (name, newValue) {
                 console.log("testing setWeight: " + name + ', ' + newValue);
                 category[name].weight = newValue;
                 console.log("post setWeight: category[" +name + "] weight=" + category[name].weight );
             },

             setName : function (oldName, newName) {
                 if (category.hasOwnProperty(oldName)) {
                     category[newName] = category[oldName];
                     delete category[oldName];
                     return true;
                 }
                 return false;
             },

             hasCategory : function (name) {
                 return category.hasOwnProperty(name);
             },

             /* debugging functions */
             printAll : function () {
                 var i = 0;
                 for ( k in category) {
                     console.log("("+ i++ +"): " + k + ", " + category[k].weight);

                 }
             }
    };

})();

console.log(syllabusModule.hasCategory("assignments"));
//var tr =  '<tr class="category_input"><td><input type="text" name="name"></td><td><input type="text" name="weight"></td></tr>';
/* Event funtions */
function addCategoryField() {
    var tr =  '<tr class="category_input" name><td><input type="text" name="label" value onchange="categoryOnChange(this)"></td></tr>';
    var tableNode = document.getElementById("input_table");
    tableNode.innerHTML += tr;
    console.log(tableNode.innerHTML);
}

function hasWeightField(trNode) {

}
function addWeightField(trNode) {
    var tr_weight = '<td><input type="text" name="weight" value="0"></td>';
    trNode.innerHTML += tr_weight;
    _print(trNode.innerHTML); // DEBUG
}

/* insert category into syllabusModule and create input field for weight after the user enters in a category*/
function categoryOnChange (e) {
    var newName = e.value;
    var trNode = e.parentNode.parentNode;
    var labelNode = e;
    /* empty str input */
    if (isEmpty(newName))
        return;

    labelNode.setAttribute("value", newName);

    /* create brand new category & create weight field */
    if (!syllabusModule.hasCategory(newName) && trNode.childNodes.length < 2) {
        syllabusModule.addCategory(newName);
        addWeightField(trNode);
        _print(labelNode.innerHTML); // DEBUG
    }
    /* update existing category name only */
    else { 
        syllabusModule.setName(e.name, newName); 

    }
    trNode.setAttribute("name",newName);
    syllabusModule.printAll();
}

function isEmpty(k) {
    return (k.length == 0);
}

function _print(x) {
    console.log("_print(): " + x + ': ' + x);
}
/*
   Array.prototype.slice.call(document.getElementsByName(name)[0].attributes).forEach(function(item) {
   console.log("attrs:  " + item.name + ': '+ item.value);
   });*/
