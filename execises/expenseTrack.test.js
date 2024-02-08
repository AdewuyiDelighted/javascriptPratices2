const{calculateExpense}=require('../execises/expenseTrack')
test('test that function can calculate the total expense of david',()=>{
    let objExpense = {"Groceries":150,"dining out":100,"transportation":50,"Entertainment":80}
    let expected = calculateExpense(objExpense)
    expect(expected).toBe(380)
})