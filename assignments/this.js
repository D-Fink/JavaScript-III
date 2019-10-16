/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global: calue of the console/window object.
* 2. Implicit: If the object is to the left of the "dot"
* 3. New Binding: creates a new object and called with the 'new' keyword
* 4. Explicit binding: whenever a method like .call or .apply are used
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this)
// Principle 2

// code example for Implicit Binding
const party = {
    member1: "Zidane",
    member2: "Dagger",
    member3: "Vivi",
    member4: "Quina",
    tellParty: function(){
        console.log(`Party: \n ${this.member1} \n ${this.member2} \n ${this.member3} \n ${this.member4}`);
    }
}
party.tellParty();
// Principle 3

// code example for New Binding
function cast(castMember, name){
    this.castMember = castMember,
    this.name = name,
    this.tellCast = function(){
        console.log(this.castMember + ' as ' + this.name);
    }
}

const jerry = new cast('Jerry Seinfeld','Himself');
const elaine = new cast('Julia Louis-Dreyfus', 'Elaine Benes');
const george = new cast('Jason Alexander', 'George Costanza');
const kramer = new cast('Michael Richards', 'Cosmo Kramer');

jerry.tellCast();
elaine.tellCast();
george.tellCast();
kramer.tellCast();
// Principle 4

// code example for Explicit Binding
jerry.tellCast.call(jerry);elaine.tellCast(elaine);george.tellCast(george);kramer.tellCast(kramer);