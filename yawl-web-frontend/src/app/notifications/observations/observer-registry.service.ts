import { Injectable } from '@angular/core';

import { Observer } from './observer';

import { Observable } from 'rxjs';



@Injectable()
export class ObserverRegistry {

	observerMap = new Object();
  private observers: Observer[] | undefined;

  public setObservers(observers: Observer[]) {
    this.observers = observers;
    for(let observer of observers) {
      // @ts-ignore
      this.observerMap[observer.symbolicName] = observer;
    }
  }


	getObserver(symbolicName : string) : Observer {
    // @ts-ignore
    return this.observerMap[symbolicName];
	}


	getAllObservers() : Observable<Observer[]> {
		return Observable.create((observer: { next: (arg0: Observer[]) => void; complete: () => void; }) => {
			observer.next(this.observers!);
			observer.complete();
		});
	}


}
