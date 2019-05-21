import { NgModule } from '@angular/core';

import { AuthService } from './providers/auth.service';
import { ProfileService } from './providers/profile.service';

@NgModule ({
    providers: [
      // ProfileService,
      AuthService,
    ]
})

export class CoreModule {}
