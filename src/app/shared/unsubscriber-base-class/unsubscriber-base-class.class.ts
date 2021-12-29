import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class UnsubscriberBaseClass { 

  protected destroy$: Subject<void> = new Subject();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}













































































