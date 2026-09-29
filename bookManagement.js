class book{
    constructor(name, year,price){
        this.name=name;
        this.year=year;
        this.price=price;
    }
    displayBook(){
        console.log("Book Name", this.name);
        console.log("Book Year", this.year);
        console.log("Book Price", this.price);

    }
}

let book1 = new book("Html",2001,1000)
let book2 = new book("Css",2002,2500)
let book3 = new book("js",2004,350)
let book4 = new book("java",2005,1250)

book1.displayBook()
book2.displayBook()
book3.displayBook()
book4.displayBook()