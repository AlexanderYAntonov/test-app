import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListModule} from '@expero/test-lib';
import {BorderModule} from '@expero/test-lib';
/*!!!Обратите внимание, импортим по названию пакета, а не по пути файла*/

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule,
    BorderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
