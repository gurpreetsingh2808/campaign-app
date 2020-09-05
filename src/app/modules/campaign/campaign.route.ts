import { Routes } from '@angular/router';
import { CampaignDetailsComponent } from './components/campaign-details/campaign-details.component';

export const CAMPAIGN_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full'
    },
    {
        path: 'details',
        component: CampaignDetailsComponent
    }
];
