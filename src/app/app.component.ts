import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SnackbarService } from './services/snackbar.service';

import defaultLanguage from '../assets/i18n/en.json';
@Component({
  selector: 'eros-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private translateService: TranslateService,
              private snackBar: SnackbarService) { }

    ngOnInit() {
    this.detectBrowser();
    this.translateService.setTranslation('en', defaultLanguage);
    this.translateService.setDefaultLang('en');
    }

    ngOnDestroy() {
    }

    private detectBrowser(): void {
    // Edge, IE, Opera and Firefox on iOS may have 'Chrome' or 'Safari' in their user agent string
    const userAgentString: string = navigator.userAgent.toLowerCase();
    const isSafariOrChrome = (/chrome/.test(userAgentString) || /safari/.test(userAgentString)) &&
                      !/edge/.test(userAgentString) &&
                      !/edg/.test(userAgentString) &&
                      !/trident/.test(userAgentString) &&
                      !/opr/.test(userAgentString) &&
                      !/fxios/.test(userAgentString);

    if (!isSafariOrChrome) {
    this.snackBar.success('For optimised performance, please access through Chrome or Safari.');
    }
    }
}
