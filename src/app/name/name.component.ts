import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  providers: [DataService]
})
export class NameComponent implements OnInit {

  employeeName;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.employeeName = this.dataService.data;
  }

}
