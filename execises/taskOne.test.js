const{findScoreGreaterThan70}=require('../execises/taskOne')

test("find score larger than 70",()=> {
    let score = [90,34,45,86,15,100,70,12,76,45] 
    let expected = findScoreGreaterThan70(score)
    expect(expected).toEqual([90,86,100,70,76])
});

