var categories = (function () {
    /* private properties */
    var defaultItems = [['assignments','25'], ['quizzes', '25'], ['midterms', '25'], ['final', '25']];
    var set = defaultItems;
    function _createTag (item) {
        console.log("_createTag: " + item[0] + ', ' + item[0]);
        return '<tr class="category_input"><td><p>' + item[0] + '</p></td><td><input type="text" name="weight" value='+ item[1] +'></td></tr>';
    }
    function _addInputField (item) {
        var tableNode = document.getElementById("input_table");
        var inputTR = _createTag(item);
        tableNode.innerHTML += inputTR;
        console.log('_addInputField: ' + item[0] + ', ' + item[1]); 
    }

    /* public properties */
    return {
        init: (function (){
                  console.log('init for ');
                  for (i in defaultItems) { 
                      _addInputField(defaultItems[i]);  
                      console.log('init for ' + defaultItems[i]);
                  }
              })(),

            add : function (values) {   // values is [name, weight]
                      set.push(values);
                  },
            size : function () {
                       return set.length;
                   },
    };

}());

function addCategoryEvent() {
    var tr =  '<tr class="category_input"><td><input type="text" name="name"></td><td><input type="text" name="weight"></td></tr>';
    var tableNode = document.getElementById("input_table");
    tableNode.innerHTML += tr;
}
