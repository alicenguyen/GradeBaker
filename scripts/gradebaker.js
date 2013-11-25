var midterm = new Category('midterm', 30);
var calc = new GradeCalc();
midterm.addItem('mid1', 20, 10);
midterm.addItem('mid2', 25, 20);
console.log(midterm.toString());

var score = midterm.sumScore();
var max = midterm.sumMaxPoints();
console.log('grade value: ' + calc.value(score, max) + ' ' + calc.letter(score, max));


/*****************************************************************************/
/*****************************************************************************/

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

    
        this.sumScore = function () {
            var scored = 0;
            for ( i in this.items) {
                var item = this.items[i];
                if(item.isEntered()) 
                    scored += item.getScore();
            }
            return scored;
        }, 
        this.sumMaxPoints = function () {
            var maxpoints = 0;
            for ( i in this.items) {
                var item = this.items[i];
                if(item.isEntered()) 
                    maxpoints += item.getMaxPoints();
            }
            return maxpoints
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
    },

    this.getMaxPoints = function () {
        return this.maxPoints;
    }
}
/*****************************************************************************/
function GradeCalc () {
    this.value = function (score, max) {
         return (score / max * 100).toFixed(2);
    },

    this.letter = function (score, max) {
        var value = this.value(score, max);
        if ( value <= 100 && value >= 96.66 )
            return 'A+';
        if ( value <= 96.65 && value >= 93.33 )
            return 'A';
        if ( value <= 93.32 && value >= 90.00 )
            return 'A-';
        if ( value <= 89.99 && value >= 86.66 )
            return 'B+';
        if ( value <= 86.65 && value >= 86.33 )
            return 'B';
        if ( value <= 83.32 && value >= 80.00 )
            return 'B-';
        if ( value <= 79.99 && value >= 76.66 )
            return 'C+';
        if ( value <= 76.65 && value >= 73.33 )
            return 'C';
        if ( value <= 73.32 && value >= 70.00 )
            return 'C-';
        if ( value <= 69.99 && value >= 60.00 )
            return 'D';
        if ( value <= 59.99)
            return 'F';
    }
}

/*****************************************************************************/
exports.Item = function (name, maxPoints, earnedPoints) {
    return new Item(name, maxPoints, earnedPoints);
};

exports.Category = function (name, weight) {
    return new Category(name, weight);
};



