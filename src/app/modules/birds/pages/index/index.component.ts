import { Component, OnInit } from '@angular/core';
import { EBirdService } from '../../../../core/services/e-bird.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  constructor(private ebirdService: EBirdService) {}

  ngOnInit() {
    console.log('test');
    this.ebirdService.nearBirds('US-IL').subscribe((data) => console.log(data));
  }
}
