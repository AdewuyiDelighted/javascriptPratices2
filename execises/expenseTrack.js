function calculateExpense(objExpense){
    let totalExp = 0
    for(let key in objExpense){
        totalExp += objExpense[key]
    }
    return totalExp
}
module.exports = {calculateExpense}
let objExpense = {"Groceries":150,"dining out":100,"transportation":50,"Entertainment":80}
console.log(calculateExpense(objExpense))