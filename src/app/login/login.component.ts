import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: string;
  senha!: string;

  constructor(private _loginservice:LoginService, private _router: Router){}

  ngOnInit(): void {
    
  }

  fazerLogin() {
    this._loginservice.login(this.usuario,this.senha);
    this._router.navigate(['/restrito/lista']);
    this._loginservice.setMostraMenu(false);
  }
}
