import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isNoteButton: Observable<boolean>;
  constructor(private loginServis: LoginService) {}

  ngOnInit(): void {
    this.isNoteButton = this.loginServis.getIsLogIn()
  }

  logOut() {
    this.loginServis.signOut();
  }
}
