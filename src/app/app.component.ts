import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site-fabiola';

  isMenuHidden = false

  changeMenuHiddenStatus(){
    this.isMenuHidden = !this.isMenuHidden
  }

}
