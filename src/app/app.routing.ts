import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './utils/notfound';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component : PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: false });
