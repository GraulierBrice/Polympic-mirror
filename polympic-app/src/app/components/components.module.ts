
import { HeaderComponent } from './../header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        FontAwesomeModule
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent]
})
export class ComponentsModule {}
