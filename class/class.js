let data = "hello from balaji";

class User{

    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(data);
    }
}

class Admin extends User{
    
    editData(){
        data = "new data";
    }
}

let student = new User("Yuva","hello@gmail.com");

let Teacher = new Admin("balaji","admin@clg.com");
