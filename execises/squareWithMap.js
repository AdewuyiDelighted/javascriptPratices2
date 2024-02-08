
function findSquare(numbers){
    let squareOfNumber = numbers.map((element)=>
        element * element
    )
    return squareOfNumber
}
module.exports = {findSquare}
