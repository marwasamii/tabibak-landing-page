import { Component } from '@angular/core';
import { ScrollService } from '../../../core/services/scroll';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  constructor(private scrollService: ScrollService) { }

  goToCTA() {
    this.scrollService.scrollTo('cta');
  }
}
