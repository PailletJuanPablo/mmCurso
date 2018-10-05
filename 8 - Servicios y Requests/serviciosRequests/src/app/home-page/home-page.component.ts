import { Component, OnInit } from '@angular/core';
import { UsersService } from '../servicios/users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public users: Object;
  // Lo inyectamos en las dependencias
  constructor(public usersSv: UsersService) { }

  ngOnInit() {
    this.usersSv.obtenerUsuarios().then((users) => {
      console.log(users);
      this.users = users;
    });
  }

}
