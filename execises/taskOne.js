
function findScoreGreaterThan70(array){
    let scoreGreaterThan70 = array.filter((element)=> element >= 70
    )
return scoreGreaterThan70
}

newArray = [45,78,74,42,87,90,45,24,99,100]
console.log(findScoreGreaterThan70(newArray))

module.exports = {findScoreGreaterThan70}