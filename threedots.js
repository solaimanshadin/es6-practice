//Spread Operator  (Aretake venge sob value guluke baire niye asha)
const developers = ['shadin', "mazlan"];
const designers = ['Mamun', 'Zahid'];
//problem
const teamBuild = [
    [developers],
    [designers]
];

//Solve by spread operator
const team = [...developers, ...designers];
console.log(teamBuild, team);

//Another problem

const numbers = [1, 5, 2, 3];
console.log(Math.max(numbers));

// Solve by spread operator
console.log(Math.max(...numbers));