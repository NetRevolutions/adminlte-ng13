import { Component, OnDestroy, OnInit } from '@angular/core';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnDestroy, OnInit
{
  availableLangs: AvailableLangs;
  activeLanguage: string;
  flagCodes: any;
  flagLabels: any;

  constructor(
    private _translocoService: TranslocoService
  ){
    this.availableLangs = this._translocoService.getAvailableLangs();
    // console.log('availableLangs', this.availableLangs);
  }

  ngOnInit(): void {
    this._translocoService.langChanges$.subscribe((activelang) => {
      this.activeLanguage = activelang;

    });

    this.flagCodes = {
      'en': 'us',
      'es': 'es'
    };

    this.flagLabels = {
      'en': 'English',
      'es': 'Español'
    };
  }

  ngOnDestroy(): void {

  }

  setActiveLanguage(lang: string): void {
    this._translocoService.setActiveLang(lang);
  }

  trackByFn(index: number, item: any): void {
    return item.id || index;
  }
}
