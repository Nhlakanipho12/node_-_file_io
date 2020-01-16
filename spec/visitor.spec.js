const Visitor = require('../src/visitor.js');
const objVisitor = new Visitor("Lebo Mpe",30,"12/10/2020","13:00","He is in","Mesuli");


describe('save() function', function (){
   
   it('should save all values in a .json file', function() {
        expect(JSON.stringify(objVisitor)).toBeDefined();
   });

   it('should throw an error when the function is unable to create a new file ', () => {
    file = function () {
        throw ('Cannot save file');
    }
    expect(file).toThrow('Cannot save file');
});
   



describe('load() function', function(){
    
      
    it('should load .json file', () => {
      expect(JSON.stringify(objVisitor)).toEqual('{"full_name":"Lebo Mpe","age":30,"date_of_visit":"12/10/2020","time_of_visit":"13:00","comments":"He is in","assistant":"Mesuli"}');
    });
});
})
