import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { MembersGrid } from './components/members-grid/members-grid.component';
import { Invitation } from './components/Invitation/invitation.component';
import { ConvertToCaps } from './components/shared/convertToCaps.pipe';

// Shared componenets
import { StarComponent } from './components/shared/star-rating/star.component';
import { ProgressComponent } from './components/shared/progress/progress.component';
import { LabelComponent } from './components/shared/Label/label.component';
import { BadgeComponent } from './components/shared/badge/badge.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        MembersGrid,
        Invitation,
        HomeComponent,
        ConvertToCaps,
        StarComponent,
        ProgressComponent,
        LabelComponent,
        BadgeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'members-grid', component: MembersGrid },
            { path: 'invitation', component: Invitation },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
