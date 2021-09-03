/* ---------- Generals ---------- */
import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

/* ---------- Services ---------- */
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tokenService.logOut();
    this.router.navigate(['/account/login']);    
  }

}
