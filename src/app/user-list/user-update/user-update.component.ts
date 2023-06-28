import { Component,Input,OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit{

  @Input()
  public user:User=<User>{};

  constructor(private route: ActivatedRoute ,private userService: UserService){}

  ngOnInit(): void {
    this.updateUser();
  }

  

  updateUser():void{
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getOneUsers(id).subscribe({
      next: user=>{this.user=user},
      error: err=> console.log('erreur user detail')
    });
    console.log(id);
  }
  updatUser():void{
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    this.userService.putUsers(id,this.user).subscribe({
      next: user=>{this.user=user},
      error: err=> console.log('erreur user update')
    });
  }
}
