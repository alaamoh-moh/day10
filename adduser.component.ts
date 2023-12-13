import { Component , inject } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  users! : User;

  userservce :UserserviceService = inject(UserserviceService);
  formBuilder!: FormBuilder;

  applyForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    add: new FormControl(''),
    password: new FormControl('')
    
  });

  save(){
    this.userservce.createuser(this.users);

    alert("data saves");
    
 }
 
}
