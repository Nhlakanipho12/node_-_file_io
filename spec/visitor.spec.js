const Visitor = require('../src/visitor.js');
var fs = require('fs');
var obj;

let objVisitor = {
    full_name: "Senzo Mokoena",
    age: 30,
    date_of_visit: "12/10/2020",
    time_of_visit: "13:00",
    comments: "He is in",
    assistant: "Mesuli"
}
const visitor = new Visitor(
    objVisitor.full_name,
    objVisitor.age,objVisitor.date_of_visit,objVisitor.time_of_visit,objVisitor.comments,objVisitor.assistant
    );
    let file_name = visitor.full_name.replace(" ", "_").toLowerCase();
    

describe('save() function ', function (){
    
    it('must be a function', function () {
            expect(visitor.save).toBeTruthy();
        });
    });
       

describe('save() function', function (){
    var content = fs.readFileSync(`visitor_${file_name}.json`,"utf8");
   
    obj = JSON.parse(content);
    it('should save all the constructor values in a .json file', function () {
        expect(objVisitor.full_name).toBe(obj.full_name);
        expect(objVisitor.age).toBe(obj.age);
        expect(objVisitor.date_of_visit).toBe(obj.date_of_visit);
        expect(objVisitor.time_of_visit).toBe(obj.time_of_visit);
        expect(objVisitor.comments).toBe(obj.comments);
        expect(objVisitor.assistant).toBe(obj.assistant);
    });

});


describe('save() function ', function (){
    it('must be a function', function () {
            expect(visitor.load).toBeDefined();
        });
    });

describe('load() function', function(){
    var content = fs.readFileSync(`visitor_${file_name}.json`,"utf8");
    var obj = JSON.parse(content);
    it('should load .json file',function () {
        expect(objVisitor).toEqual(obj);
    });
    console.log(obj);

});

