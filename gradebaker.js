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
        return '<tr class="category_input"><td><p>' + name + '</p></td><td><input type="text" name='+name+' value='+ weight +' onchange="syllabusModule.setWeight(this.name,this.value)"></td></tr>';
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

             /* debugging functions */
             printAll : function () {
                var i = 0;
                for ( k in category) {
                    console.log("("+ i++ +"): " + k + ", " + category[k].weight);

                }
             }
    };

}());
//var tr =  '<tr class="category_input"><td><input type="text" name="name"></td><td><input type="text" name="weight"></td></tr>';
/* Event funtions */
function addCategoryField() {
    var tr =  '<tr class="category_input"><td><input type="text" onchange="categoryOnChange(this)"></td></tr>'
    var tableNode = document.getElementById("input_table");
    tableNode.innerHTML += tr;
}

function addWeightField(cursor) {
    var trW = '<td><input type="text" name="weight"></td>';
    cursor.innterHTML += trW;
}
/* insert category into syllabusModule and create input field for weight after the user enters in a category*/
function categoryOnChange (node) {
    // update the name attribute in <tr> tag
    node.name = node.value;
    console.log("node update: " + node.name);
    syllabusModule.addCategory(node.name);
}

