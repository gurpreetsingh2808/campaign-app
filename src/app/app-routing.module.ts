import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CAMPAIGN_ROUTES } from './modules/campaign/campaign.route';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/campaign/details',
    pathMatch: 'full'
  },
  {
    path: 'campaign',
    children: [...CAMPAIGN_ROUTES],
  } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
