const{afternoonTiming}=require('../execises/afternoonClasses')

test('test that funtion find afternoon classes for jake',()=>{
    let classTimings = ["9.00AM","11:00AM","1:00PM","3:00PM","5:00PM"]
    let expected = afternoonTiming(classTimings)
    expect(expected).toEqual( ["1:00PM","3:00PM","5:00PM"])
})
