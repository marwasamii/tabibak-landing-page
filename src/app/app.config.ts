// import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
// import { routes } from './app.routes';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// import {provideHttpClient} from "@angular/common/http";
// import {provideTranslateService, provideTranslateLoader} from "@ngx-translate/core";
// import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes), provideClientHydration(withEventReplay()),
//     importProvidersFrom([CookieService]),
//     provideHttpClient(),
//     provideTranslateService({
//       defaultLanguage: 'ar',
//       loader: provideTranslateHttpLoader({
//         prefix: '/i18n/',
//         suffix: '.json'
//       }),
//       fallbackLang: 'ar',
      
//     })
//   ]
// };


import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from "@angular/common/http";
import { provideTranslateService } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader"; // تأكدي إن دي موجودة
import { HttpClient } from "@angular/common/http";
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    importProvidersFrom(CookieService),
    
    // الطريقة دي بتحل مشكلة الـ Injection Token أوتوماتيكياً
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './i18n/',
        suffix: '.json'
      }),
      fallbackLang: 'en',
      defaultLanguage: 'ar' // تم استخدامها هنا بدلاً من lang للنسخ الحديثة
    })
  ]
};