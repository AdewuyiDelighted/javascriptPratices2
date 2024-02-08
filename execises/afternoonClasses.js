function afternoonTiming(classTiming){
    let afternoonn = classTiming.filter((time)=>
        time.substr(time.length-2,time.length) === "PM"
        
    )
     return afternoonn
}
module.exports = {afternoonTiming}

let classTimings = ["9.00AM","11:00AM","1:00PM","3:00PM","5:00PM"]
console.log(afternoonTiming(classTimings))
