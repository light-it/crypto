import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../shared/login-model';
import { AuthService } from '../../core/providers/auth.service';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public login: FormGroup;
  public hide = true;
  public serverError: string;
  private componentActive = true;
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

  public onSubmit(form: FormGroup): void {
    if (form.valid) {
      const data: ILogin = form.value;
      this.authService.signIn(data)
        .pipe(
          takeWhile(() => this.componentActive)
        )
        .subscribe((res: boolean) => {
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

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
