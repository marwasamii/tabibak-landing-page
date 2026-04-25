import { Component } from '@angular/core';
import { ScrollService } from '../../../core/services/scroll';
import { TranslateModule } from '@ngx-translate/core';
import { MyTranslate } from '../../../core/services/my-translate';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
 
  constructor(private scrollService: ScrollService,private myTranslate: MyTranslate) {}

  goToCTA() {
    this.scrollService.scrollTo('cta');
  }
  // هنا بنخلي المتغير يروح يسأل الـ Service عن اللغة الحالية
  get currentLang(): string {
    return this.myTranslate.getCurrentLang(); 
    // ملاحظة: لو مكنتيش ضفتي getCurrentLang في السيرفيس، تقدري تستخدمي:
    // return this.translateService.currentLang;
  }


  // لو عايزة تزودي فنكشن تغير اللغة من الناف بار بالمرة
  changeLanguage(lang: string) {
    this.myTranslate.changeLang(lang);
  }
}
