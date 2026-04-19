import { Component } from '@angular/core';
import { ScrollService } from '../../../core/services/scroll';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  constructor(private scrollService: ScrollService) { }

  goToCTA() {
    this.scrollService.scrollTo('cta');
  }
}
