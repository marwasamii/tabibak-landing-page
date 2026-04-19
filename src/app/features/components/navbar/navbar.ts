import { Component } from '@angular/core';
import { ScrollService } from '../../../core/services/scroll';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
 
  constructor(private scrollService: ScrollService) {}

  goToCTA() {
    this.scrollService.scrollTo('cta');
  }
}
