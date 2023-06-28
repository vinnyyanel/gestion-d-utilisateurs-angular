import { Component ,OnInit,Input} from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  @Input()
  public users: User[]=[];
  public errMsg: string='';
  constructor(private route: Router ,private userService:UserService){}

  
  
  ngOnInit(): void {
    this.loadUsersList();
  }

  loadUsersList():void{
    
    this.userService.getUsers().subscribe({
      next: user=>{this.users=user;
      },
      error: err=>console.log(this.errMsg=err)
    });
  }
}
