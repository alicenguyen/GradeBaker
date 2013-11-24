function Category( name, weight ) {
    this.name = name,
    this.weight = weight,
    this.items = [],

    this.addItem = function ( name, mp, ep) { 
        var item = new Item (name, mp, ep);
        this.items.push(item);
    },

    this.toString = function () {
        var str = this.name + ': ';
        for  (i in this.items)
            str += this.items[i].toString();
        return str;
    },

    this.calculateGrade = function (){
        var scored = 0;
        var total = 0;
        for (i in this.items) {
            var item = this.items[i]
                if (item.isEntered()) {
                    scored += item.getScore();
                    total += item.maxPoints;
                }
        }
        return (scored / total) * 100;
    },

    /* getters & setters */
    this.getName = function () {
        return this.name;
    },

    this.getSize = function () {
        return this.items.length;
    },

    this.getWeight = function () {
        return this.weight;
    }
}

/*****************************************************************************/
function Item ( name, maxPoints, earnedPoints) {
    this.name = name || 'name',
    this.maxPoints = maxPoints || 'nil',
    this.earnedPoints = earnedPoints || 'nil',

    this.toString = function () {
        return '[' + this.name + ', ' + this.maxPoints + ', ' +
        this.earnedPoints + ', ' + this.isEntered()  + '] ';
    },

    this.isEntered = function () {
        return this.earnedPoints !== 'nil';
    },

    this.getScore = function () {
        return this.earnedPoints;
    }
}
/*****************************************************************************/
exports.Item = function (name, maxPoints, earnedPoints) {
    return new Item(name, maxPoints, earnedPoints);
};

exports.Category = function (name, weight) {
    return new Category(name, weight);
};

