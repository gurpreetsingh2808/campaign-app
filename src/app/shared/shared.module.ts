import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { CountPipe } from "./pipes/count.pipe";
import { NavbarComponent } from './components/navbar/navbar.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { ChipComponent } from './components/chip/chip.component';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NavbarComponent,
    BottomNavComponent,
    ChipComponent,
    PostComponent,
    CountPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    BottomNavComponent,
    ChipComponent,
    PostComponent,
    CountPipe,
    FontAwesomeModule,
    HttpClientModule
  ],
})
export class SharedModule {

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
