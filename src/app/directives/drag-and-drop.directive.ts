import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDragAndDrop]'
})
export class DragAndDropDirective {
  @Output() fileDropped = new EventEmitter<any>();

  @HostListener('drop', ['$event']) public onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    let files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.fileDropped.emit(files[0]);
    }
  }
}

