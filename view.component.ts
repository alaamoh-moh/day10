import { Component , inject } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  user :User |undefined;
  userserve = inject(UserserviceService )
  route: any;
  constructor() {
    const userid = Number(this.route.snapshot.params['id']);
    this.user = this.userserve.getuserbyid(userid);
  }


}
