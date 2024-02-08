const{increaseScoreByFive}=require('../execises/increaseScroreWithMap')

test('test that score are can be increase bt five',()=>{
    let score = [85,92,78,88,95,]
    let expected = increaseScoreByFive(score)
    expect(expected).toEqual([90,97,83,93,100])

})
