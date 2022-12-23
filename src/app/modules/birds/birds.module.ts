import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdsRoutingModule } from './birds-routing.module';
import { BirdCardComponent } from './components/bird-card/bird-card.component';
import { IndexComponent } from './pages/index/index.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [BirdCardComponent, IndexComponent, DetailComponent],
  imports: [CommonModule, BirdsRoutingModule],
})
export class BirdsModule {}
