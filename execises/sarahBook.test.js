const{giveBook}=require('../execises/sarahBook')

test('test that function can distribute books to friends',()=>{
    let obj = {Emily:"",Jack:"",Sophia:"",Daniel:""}
    let expected = giveBook(obj)
    expect(expected).toEqual({Emily:"Book1",Jack:"Book2",Sohia:"Book3",Daniel:"Book4"})
})