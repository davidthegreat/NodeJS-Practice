var Bucky = {
	favFood: "bacon"
};

var Person = Bucky;
Person.favFood ="salad";
console.log(Bucky.favFood)

console.log(19 == '19');//True Compare values
console.log(19 === '19');//False Compaere values and types