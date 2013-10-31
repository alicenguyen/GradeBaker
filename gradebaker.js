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

             addCategory : function (values) {   // values is [name, weight]
                 this.category[values[0]] = { 
                     weight : values[1],
                     tag : (function() {_createTag(values[0], values[1]); })
                 }
             },

             size : function () {
                 return set.length;
             },

             setWeight : function (name, newValue) {
                console.log("testing setWeight: " + name + ', ' + newValue);
                category[name].weight = newValue;
                console.log("new value: " + category[name].weight);
             }
    };

}());
/* Event funtions */
function addInputFieldEvent() {
    var tr =  '<tr class="category_input"><td><input type="text" name="name"></td><td><input type="text" name="weight"></td></tr>';
    var tableNode = document.getElementById("input_table");
    tableNode.innerHTML += tr;
}

/* Debugging functions */
function printStats (set) {
    for (i in set) 
        console.log("printStats: " + i.toString());
}
