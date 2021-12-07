import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef,
} from '@angular/core';

import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { CdkDragDrop, moveItemInArray, copyArrayItem, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-portal-component',
  templateUrl: './portal-component.component.html',
  styleUrls: ['./portal-component.component.scss']
})

export class PortalComponentComponent implements AfterViewInit {
  // @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent: ElementRef<HTMLElement>;

  selectedPortal: Portal<any>;
  // componentPortal: ComponentPortal<ComponentPortalExample>;
  // templatePortal: TemplatePortal<any>;
  domPortal: DomPortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    // this.componentPortal = new ComponentPortal(ComponentPortalExample);
    // this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
    this.domPortal = new DomPortal(this.domPortalContent);
  }
  
  todo = ['input', 'texarea', 'button', 'checkbox', 'select'];

  done = [];

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

// @Component({
//   selector: 'component-portal-example',
//   template: 'Hello, this is a component portal',
// })
// export class ComponentPortalExample {

//  }
