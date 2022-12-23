import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { LoadingComponent } from './components/loading/loading.component';
// import { CustomClickDirective } from './directives/custom-click.directive';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    // LoadingComponent,

    // CustomClickDirective
  ],
  declarations: [
    // LoadingComponent, CustomClickDirective
  ],
})
export class SharedModule {}
