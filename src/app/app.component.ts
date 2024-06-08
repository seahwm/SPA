import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers:string[];
  title:string|null;

  constructor(
    protected sanitizer:DomSanitizer
  ){
    var a="    '); and i=i+1 <alert>'asd'</alert>";
    this.title=a;
    this.title=sanitizer.sanitize(SecurityContext.HTML,a)
    this.servers=['S1','S2','D1'];
  }

  sanitize(e:KeyboardEvent){
    this.title=this.sanitizer.sanitize(SecurityContext.HTML,this.title);
  }

}
