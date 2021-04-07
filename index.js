// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const driversArrayObject = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function findMatching(arr, value) {
    return arr.filter(x => x.toUpperCase() == value.toUpperCase());
}
// let result = findMatching(drivers, "bobby");
// console.log(result);
function fuzzyMatch(arr, letters) {
    // return arr.filter(x => x[0].toUpperCase() === char.toUpperCase());
    return (arr.filter(x => x.substring(0, letters.length).toUpperCase() === letters.toUpperCase()));
}
// fuzzyMatch(drivers, "s");

// function matchName(arr, value) {
//     for (const key in arr) {
//         if (typeof key === "object") {
//             return arr.filter(element => element.toUpperCase() == value.toUpperCase());
//         } else {
//             return arr.filter(element => element.toUpperCase() == value.toUpperCase());
//         }
//     }
// }
console.log(matchName(driversArrayObject, "Sa"));
// matchName(drivers, "Sa");

function matchName(arr, value) {
    let tmpNames = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "object") {
                let tmp = arr[i]["name"].substring(0, value.length).toUpperCase();
                if (tmp === value.toUpperCase()) {
                    // console.log(arr[i]["name"]);
                    tmpNames.push(arr[i]);
                }
        } else {
            if (arr[i].substring(0, value.length).toUpperCase() === value.toUpperCase()) {
                tmpNames.push(arr[i]);
            }
        }
    } 
    // return tmpNames.forEach(x => returnFrom);
    // function returnFrom(x) {
    //     console.log(x);
    //     return x;
    // }
    return tmpNames

}
