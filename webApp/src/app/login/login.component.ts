import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {CheckLoginService} from '../check-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private checkLoginService: CheckLoginService
  ) { 
    if (this.checkLoginService.user){
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
  }

}
