// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BaseRoutingModule } from '../base/base-routing.module';

//Grid components
import { GridAvatarComponent } from './avatar/avatar.component';
import { StarComponent } from './star-rating/star.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
  ],
  declarations: []
})

export class GridModule { }
