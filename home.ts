import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'index.html'
})
export class HomePage {

  my_url: any;
  constructor(private sanitize: DomSanitizer) {}
  urlpaste(){
    this.url = "https://pokeryaar-app-betaslot.azurewebsites.net/applogin/";
    return this.sanitize.bypassSecurityTrustResourceUrl(this.my_url);
  }
}
