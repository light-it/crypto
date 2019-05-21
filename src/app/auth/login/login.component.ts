import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../shared/login-model';
import { AuthService } from '../../core/providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: FormGroup;
  public hide = true;
  public serverError: string;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.login = this.fb.group({
      email: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]]
    });
  }

  public onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
      const data: ILogin = form.value;
      this.authService.signIn(data)
        .subscribe((res: boolean) => {
          console.log(res);
          if (res) {
            this.router.navigate(['home']);
            this.serverError = '';
            return;
          }
          this.serverError = 'Incorrect login or password';
      });
    }
  }

  public get email() {
    return this.login.get('email');
  }

  public get password() {
    return this.login.get('password');
  }
}
