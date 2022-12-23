import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirdsModule } from './modules/birds/birds.module';

const routes: Routes = [{ path: 'birds', loadChildren: () => BirdsModule }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
