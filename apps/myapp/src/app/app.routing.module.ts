import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('../../../../libs/auth/src/index').then(m => m.AuthModule)
  },
  {
    path: 'items',
    loadChildren: () =>
      import('../../../../libs/items/src/index').then(m => m.ItemsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
