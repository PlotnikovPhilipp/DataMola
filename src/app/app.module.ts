import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { ControlHeaderComponent } from './control-header/control-header.component';
import { WindowComponent } from './window/window.component';
import { WindowItemComponent } from './window-item/window-item.component';
import { ControlFooterComponent } from './control-footer/control-footer.component';
import { WindowHeaderComponent } from './window-header/window-header.component';
import { ColorGenreItemsDirective } from './color-genre-items.directive';
import { mainReducer } from '../reducer';
import { MovieEffects } from '../storeEffects';

@NgModule({
  declarations: [
    AppComponent,
    ControlHeaderComponent,
    WindowComponent,
    WindowItemComponent,
    ControlFooterComponent,
    WindowHeaderComponent,
    ColorGenreItemsDirective
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({state: mainReducer}),
    EffectsModule.forRoot([MovieEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
