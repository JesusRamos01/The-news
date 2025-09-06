import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/services/user/user'; 
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false, 
})
export class LoginPage implements OnInit {
  public email!: FormControl;
  public password!: FormControl;

  public loginForm!: FormGroup;
  constructor(private readonly UserService: User,   private router: Router,  private toastController: ToastController) { 
    this.initForm();
  }

  ngOnInit() {
  }

  public doLogin(){
    try {
      const user = this.UserService.login(this.loginForm.value);

      this.showToast(`Welcome ${user.name} ${user.lastName}`, 'success');
      this.router.navigate(['/home']);

    } catch (error: any) {
      if (error.message === 'User not found') {
        this.showToast('User does not exist ', 'danger');
      } else if (error.message === 'Invalid credentials') {
        this.showToast('Incorrect password ', 'danger');
      } else {
        this.showToast('Unexpected error ', 'warning');
      }
    }
  }

  private initForm(){
    this.email = new FormControl('',[Validators.required, Validators.email]);
    this.password = new FormControl('',[Validators.required, Validators.minLength(8)]);
  

  this.loginForm = new FormGroup({
    email: this.email,
    password: this.password
  })
}

private async showToast(message: string, color: string) {
  const toast = await this.toastController.create({
    message,
    duration: 2000,
    color,
  });
  await toast.present();
}

goToRegister() {
  this.router.navigate(['/register']);
}

}
