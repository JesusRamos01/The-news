import { Injectable } from '@angular/core';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class Uid {
  constructor() { }
  public get():string{
    return v4();
  }
  
}
