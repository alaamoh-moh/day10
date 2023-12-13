import { Component , inject } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
users : User[]=[];
userservice: UserserviceService = inject(UserserviceService);
constructor() {
   
  this.users  = this.userservice.getallusers();
  
    }
    deleteruser(id:number){
      this.userservice.deleteuser(id);
      
        }
}
