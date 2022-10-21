import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  name = '김영은';
  patientCode = '960912-1';

  constructor() { }
}
