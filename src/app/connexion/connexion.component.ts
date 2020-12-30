import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  @ViewChild('loginForm') myForm: NgForm;
  constructor() { }
  proposerEmail(): any{
    // Mettre des valeurs par defaut
    const myEmail = 'ningaly@gmail.com';
    this.myForm.setValue({
      username: myEmail,
      password: ''
    });
    this.myForm.form.patchValue({
      username: 'azerty'
    });
  }
  ngOnInit(): void {
  }
  // onSubmit(form: HTMLFontElement) {
  //   console.dir(form);
  //
  // }
  // onSubmit(form: NgForm) {
  //   console.log(form.value.username);
  //
  // }
  onSubmit(loginForm: NgForm): any {
    alert('email: ' + this.myForm.value.username);
    this.myForm.reset();
    // console.log(this.myForm.value);
  }
}
