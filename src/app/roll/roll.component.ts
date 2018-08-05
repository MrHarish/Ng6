import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-roll',
  templateUrl: './roll.component.html',
  styleUrls: ['./roll.component.css'],
  providers:[DataService]

})
export class RollComponent implements OnInit {

  employee = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.employee = this.dataService.data;
    console.log(this.employee)
  }

  

}
