import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

 @Input()
  public user:User = <User>{};
  
  constructor( private route:ActivatedRoute, private userService: UserService){}
  ngOnInit(): void {
    this.loadOneUser();
  }

    
    loadOneUser():void{
      const id: number = +this.route.snapshot.paramMap.get('id')!;
      this.userService.getOneUsers(id).subscribe({
        next: user=>{this.user=user},
         error: err=> console.log('erreur user update')
    });
    console.log(id);
      
    }

}
