import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CAMPAIGN_ROUTES } from './campaign.route';
import { SharedModule } from 'src/app/shared/shared.module';
import { CampaignDetailsComponent } from './components/campaign-details/campaign-details.component';

@NgModule({
  declarations: [CampaignDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(CAMPAIGN_ROUTES)
  ]
})
export class CampaignModule { }
