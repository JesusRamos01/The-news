import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/shared/services/countries/countries'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/services/user/user';
import { Country } from 'src/app/interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  countries: any[] = []; 
  public name!: FormControl;
  public lastName!: FormControl;
  public email!: FormControl;
  public password!: FormControl;
  public confirmPassword!: FormControl;
  public country!: FormControl;

  public registerForm!: FormGroup;

  constructor(private countriesService: Countries, private readonly userService: User, private router: Router) {
    this.initForm();
    
   
  }

  ngOnInit() {
    this.loadCountries();
  }

  
  public doRegister() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.userService.register(this.registerForm.value);
      this.registerForm.reset();
    } else {
      console.log('Formulario inválido');
      this.registerForm.markAllAsTouched(); 
    }
  }

  private initForm() {
    this.name = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.confirmPassword = new FormControl('', Validators.required);
    this.country= new FormControl<Country | null>(null, Validators.required);

    this.registerForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      country: this.country,
    });
  }

  loadCountries() {
    this.countriesService.getCountries().subscribe({
      next: (countries) => {
        this.countries = countries; 
      },
      error: (err) => {
        console.error('Error al cargar los países:', err);
      },
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
  

}
