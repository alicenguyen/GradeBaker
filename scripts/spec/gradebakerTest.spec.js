var gb = require('../gradebaker');
var cat = gb.Category('midterm', 30);
cat.addItem('mid', 30, 10);

testCategoryProperties('midterm', 30, 1);

/* helper functions */
function testCategoryProperties(name, weight, size) {
    describe("Initializing", function() {

        it('name should be ' + name, function () {
            expect(cat.getName()).toBe(name);
        });

        it('weight should be ' + weight, function() {
            expect(cat.getWeight()).toBe(weight);
        });
      
        it('size should be ' + size, function() {
            expect(cat.getSize()).toBe(size);
        });
        console.log(cat.toString());
    });
}

