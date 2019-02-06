import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidebarMinimizer]'
})
export class SidebarMinimizeDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('sidebar-minimized');
  }

}
