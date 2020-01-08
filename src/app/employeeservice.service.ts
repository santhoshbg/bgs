import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor() { }

  getEmployee() {
      return [
          {"id": 1, "name": "BGS Naik", "age": 30},
          {"id": 3, "name": "Sari", "age": 28},
          {"id": 4, "name": "Sanjana", "age": 7},
          {"id": 5, "name": "Tanisha", "age": 3},
      ];
  }
}
