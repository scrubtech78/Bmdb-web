export class Movie {
     title: string;
     id: number;
     year: number;
     rating: string;
     director: string;

     constructor(id: number = 0,title: string="",year: number = 99, rating: string= "",director: string=""){
        this.title = title;
        this.id = id;
        this.year = year;
        this.rating = rating;
        this.director = director;
     }
    
}