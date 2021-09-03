import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from "../../../services/app.service";
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user ={
    "mail": "testdeveloper@barracks.gg",
    "password": "testdeveloper"
  }

  constructor(
    private router: Router,
    public tokenService: TokenService,
    public appService: AppService
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.appService.getInfo(this.user).subscribe(result => {
      let tokenValue = result[Object.keys(result)[0]];
      this.tokenService.setToken(tokenValue);
      this.router.navigate(['/account/home']);

    }, error => {
      console.log(error)
      alert('Error: ' + error.status)
    })
  }

}
