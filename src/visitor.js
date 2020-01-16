var fs = require('fs')
class Visitor{
    constructor(full_name, age, date_of_visit,time_of_visit, comments, assistant){
        this.full_name = full_name;
        this.age = age;
        this.date_of_visit = date_of_visit;
        this.time_of_visit = time_of_visit;
        this.comments = comments;
        this.assistant = assistant;
    }
        
     save() {
        
        try {
            let file_name = this.full_name.replace(" ","_").toLowerCase();
            fs.writeFile(`visitor_${file_name}.json`,JSON.stringify(this,null,4),  function () {
                console.log("File was saved");
            });
            
        } catch (error) {
            console.log(error);
        }
        
        
    }

    load(full_name){
        
        let file_name = full_name.replace(" ", "_").toLowerCase();
            fs.readFile(`visitor_${file_name}.json`, "utf8",(error,info) => {
                if(!error)
                console.log(info);
              });
    }
}
// var senzo = new Visitor("Lebo Mpe",30,"12/10/2020","13:00","He is in","Mesuli");
// // senzo.save();
// senzo.load("Lebo Mpe");
module.exports = Visitor