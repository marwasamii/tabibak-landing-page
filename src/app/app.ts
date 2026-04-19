import { Component, signal } from '@angular/core';
import { Navbar } from './features/components/navbar/navbar';
import { Hero } from './features/components/hero/hero';
import { Problem } from './features/components/problem/problem';
import { Features } from './features/components/features/features';
import { Cta } from './features/components/cta/cta';
import { Footer } from './features/components/footer/footer';
import { HowItWorks } from './features/components/how-it-works/how-it-works';

@Component({
  selector: 'app-root',
  imports: [Navbar,Hero,Problem,Features,Cta,Footer,HowItWorks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tabibak-landing');
}
