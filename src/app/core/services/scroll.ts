import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollTo(elementId: string) {
    const el = document.getElementById(elementId);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

}