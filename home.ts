import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'index.html'
})
export class HomePage {
url: any;
    constructor(private sanitize: DomSanitizer){
    this.url = sanitize.bypassSecurityTrustResourceUrl("https://pokeryaar-app-betaslot.azurewebsites.net/applogin/");
    }
  
}
