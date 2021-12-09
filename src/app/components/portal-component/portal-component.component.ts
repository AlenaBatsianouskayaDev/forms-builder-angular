import {
  AfterViewInit,
  OnInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef,
} from '@angular/core';
import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { CdkDragDrop, moveItemInArray, copyArrayItem, transferArrayItem} from '@angular/cdk/drag-drop';

import { Observable, Subject } from 'rxjs';
import { AuthService } from './../../services/auth.service'

@Component({
  selector: 'app-portal-component',
  templateUrl: './portal-component.component.html',
  styleUrls: ['./portal-component.component.scss'],
  
})

export class PortalComponentComponent implements AfterViewInit, OnInit {

  id: string;
  constructor (private authService: AuthService, ) { }
 
  ngOnInit() {
    
  }
  
  ngAfterViewInit() {

  }
  
  todo = ['input', 'textarea', 'button', 'checkbox', 'select'];
  done = [];

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.previousContainer !== event.container && event.previousContainer.id === 'cdk-drop-list-0') {
      event.previousContainer.data.splice(event.currentIndex, 1);
    }
      else copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
    )
    this.id = this.authService.generateId();
  } 
}

