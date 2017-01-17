import { Pipe, PipeTransform }            from '@angular/core';
import { DomSanitizer, SafeResourceUrl }  from '@angular/platform-browser';

@Pipe({ name: 'safeTrailerUrl' })
export class SafeTrailerUrlPipe implements PipeTransform {
  private safeTrailerUrl: SafeResourceUrl;
  
  constructor(private sanitizer: DomSanitizer) { }

  transform(url: string): SafeResourceUrl {
    this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustUrl(url);
    return this.safeTrailerUrl;
  }
}