function giveBook(objs){
    let books = ["Book1","Book2","Book3","Book4"]
    let count = 0
    for (const key in objs) {
        objs[key] = books[count]
        count +=1
    }
    return objs
}
module.exports(giveBook)



// let obj = {Emily:"",Jack:"",Sophia:"",Daniel:""}
// console.log(giveBook(obj))