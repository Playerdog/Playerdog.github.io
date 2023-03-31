import { Component, Input } from '@angular/core';
import { Data } from 'src/app/Data';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent {

  @Input() data!: Data;
  
}
