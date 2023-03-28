import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user-service/user.service";
@Component({
  selector: 'll-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  particlesOptions = {
    particles: {
      color: {
        value: ['#ffffff', '#ffffff']
      },
      size: {
        value: 1
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 1.5
      }
    }
  };
  constructor(private userService: UserService) { }

  ngOnInit(): void {

    //this.userService.getUser();

  }
}
