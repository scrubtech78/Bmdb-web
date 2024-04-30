import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/model/actor';
import { actorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {
  title: string= "ActorCreateComponent";
  actor: Actor = new Actor();
  message?: string = undefined;

  constructor(private actorSvc: actorService,
    private router: Router) { }
  

 
  ngOnInit(): void {
  }
  save(): void{
    //check for existance before save?
    console.log("save actor:", this.actor);
    this.actorSvc.createActor(this.actor).subscribe({
     next: (resp) =>{
      this.actor= resp;
      this.router.navigateByUrl("/actor/list");
     },
     error:(err)=>{
      console.log("Error creating actor:", err);
      this.message = "Error creating Actor"
     },
     complete:() =>{}
       
     
    });


}
}
