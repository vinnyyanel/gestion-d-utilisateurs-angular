import { Component , Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit{

  @Input()
    public user: User=<User>{};

    @Input()
    public msg: string='erreur';
    
    constructor(private route:ActivatedRoute, private userService: UserService){}

    ngOnInit(): void {
      
      this.createUser();
      
    }

    createUser(): void{
      this.userService.postUsers(this.user).subscribe(
    
      )
    }

    public trPost:boolean=false;
    truePost():void{
      this.trPost= !this.trPost;
    }

}
