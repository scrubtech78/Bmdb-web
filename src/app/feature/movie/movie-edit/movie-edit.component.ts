import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  title: string= "Movie-Edit";
  movie: Movie = new Movie();
  movieId: number = 0;
  message?: string = undefined;


  constructor(private movieSvc: MovieService, private router: Router,
   private route: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.route.params.subscribe({
      next: parms =>{
        this.movieId = parms["id"];
        this.movieSvc.getMovieById(this.movieId).subscribe({
          next: (parms) =>{
          this.movie = parms;
          }
        })
      }
     
    })
  }
    save(): void{
      //check for existance before save?
      console.log("save movie:", this.movie);
      this.movieSvc.updateMovie(this.movie).subscribe({
       next: (resp) =>{
        this.movie = resp;
        this.router.navigateByUrl("/movie/list");
       },
       error:(err)=>{
        console.log("Error creating movie:", err);
        this.message = "Error creating Movie"
       },
       complete:() =>{}
         
       
      });
  
  }

}
