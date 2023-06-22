import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private dropdownMenu!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.dropdownMenu) {
      this.renderer.addClass(this.dropdownMenu, 'show');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.dropdownMenu) {
      this.renderer.removeClass(this.dropdownMenu, 'show');
    }
  }

  ngOnInit() {
    // Get the dropdown menu element
    this.dropdownMenu = this.el.nativeElement.querySelector('.dropdown-menu');
    if (this.dropdownMenu) {
      // Hide the dropdown menu by default
      this.renderer.removeClass(this.dropdownMenu, 'show');
    }
  }
}