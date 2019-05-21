import { NgModule } from '@angular/core';

import { AuthService } from './providers/auth.service';
import { ProfileService } from './providers/profile.service';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


@NgModule ({
    providers: [
      ProfileService,
      AuthService,
      RouterModule,
      AuthGuard,
    ]
})

export class CoreModule {}
