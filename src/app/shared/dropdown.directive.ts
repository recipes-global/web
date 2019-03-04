import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
    exportAs: 'appDropdown'
})
export class DropdownDirective {
    isOpened = false;

    @HostListener('click') toggleOpen() {
        this.isOpened = !this.isOpened;
    }
}