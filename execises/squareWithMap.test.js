const{findSquare}=require('../execises/squareWithMap')
test('test that function return the square of element',()=>{
    let score = [2,4,6,8,10]
    let expected = findSquare(score)
    expect(expected).toEqual([4,16,36,64,100])
})