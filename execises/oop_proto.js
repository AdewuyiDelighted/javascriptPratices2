let bus = {
    tire : 4,
}

let car = {
    wheel : 5,
}

// _proto_ is can be  use to make an exising object an attribute
let truck = {
    sit : 7,
    _proto_:bus,
    _proto_:car,
    gear : 8
}

console.log(bus)
console.log(truck)


// manupulation of object

const animal ={
    color : "unknown",
    sound : function(){
        console.log("Make noise")

    }
}


let dog = Object.create(animal)
// dog.color = "yellow";
// dog.sound = function(){
//     return "barking"
// }


console.log(dog)
