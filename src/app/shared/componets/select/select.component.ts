import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/interfaces';
import { Countries } from 'src/app/shared/services/countries/countries';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  standalone: false,
})
export class SelectComponent  implements OnInit {
  @Input() placeholder: string = '';
  @Input() selectedCountry: string | null = null;
  @Input() disabled: boolean = false;

  @Output() countryChange: EventEmitter<Country> = new EventEmitter<Country>();

  constructor(private countriesService: Countries) { }

  loading: boolean = false;
  @Input() countries: Country[] = []; 
  

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.loading = true;
    this.countriesService.getCountries().subscribe({
      next: (countries) => {
        this.countries = countries;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading countries', err);
        this.loading = false;
      }
    })
  
    
  }

  onCountrySelected(event: any) {
    const countryCode = event.detail.value;
    this.countryChange.emit(countryCode);
  }
}

