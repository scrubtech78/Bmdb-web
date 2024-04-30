import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    title: string = "Movie-List";
  
    movies?: Movie[] = undefined;
    welcomeMessage?: string = undefined;

  constructor(private movieSvc: MovieService, private systemSvc: SystemService) { }

  ngOnInit(): void {if(this.systemSvc.loggedInUser !=undefined){
    this.welcomeMessage="Welcome,"+this.systemSvc.loggedInUser.lastName
  }



      this.movieSvc.getAllMovies().subscribe({
      next: (resp) => {
        this.movies = resp;
      }, 
      error: (err) => {
        console.log(err);
      },
      complete: ()=>{}
    

     } );
   
  }

}
