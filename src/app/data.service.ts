import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Array<Object> = [
    {firstName: "Jhon ", lastName: "Wick", id: "2018001"},
    {firstName: "Nichola", lastName: "Sparta", id: "2018002"},
    {firstName: "David", lastName: "Guetta", id: "2018003"},
    {firstName: "Shawn ", lastName: "Michaels", id: "2018004"},
    {firstName: "Jhon ", lastName: "Cena", id: "2018005"},
    {firstName: "Urkun ", lastName: "Tanik", id: "2018006"},
  ]

  constructor() { }
}
