import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Data } from '../../Data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  show: boolean = true;
  datas: Data[] = [];
  data!: Data;

  constructor(private apiService: ApiService) {
    // this.apiService.getData().subscribe((datas) => 
    // {this.datas = datas});
  }

  ngOnInit(): void {
    this.apiService.getData().subscribe((datas) => (this.datas = datas));
    console.log(this.datas);
  }
}
