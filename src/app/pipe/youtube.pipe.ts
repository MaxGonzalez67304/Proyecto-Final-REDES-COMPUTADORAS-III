import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtubePipe'
})
export class YoutubePipe implements PipeTransform {

  constructor(private dom: DomSanitizer) {

  }

  transform(value: string): any {
    let url = "https://www.youtube.com/embed/";
    return this.dom.bypassSecurityTrustResourceUrl(url + value);
  }

}
