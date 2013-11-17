gradebaker = (function () {

function Category( name, weight ) {
    this.name = name,
    this.weight = weight,
    this.items = [],
    
    this.addItem = function ( name, mp, ep) { 
        var item = new Item (name, mp, ep);
        this.items.push(item);
    },

    this.getCount = function () {
        return items.length;
    },
    
    this.toString = function () {
        var str = this.name + ': ';
        for  (i in this.items)
            str += this.items[i].toString();
        return str;
    }
}

function Item ( name, maxPoints, earnedPoints) {
    this.name = name || 'name',
    this.maxPoints = maxPoints || '100',
    this.earnedPoints = earnedPoints || '100',

    this.toString = function () {
        return this.name + ', ' + this.maxPoints + ', ' + this.earnedPoints;
    }
}
});



