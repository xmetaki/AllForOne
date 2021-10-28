import { Injectable, ReflectiveInjector } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class Body {

}

@Injectable({
  providedIn: 'root'
})
export class Chasis {

}

@Injectable({
  providedIn: 'root'
})
export class Engine {
  start() {
    console.log('wengwengweng')
  }
}

@Injectable()
export default class Car {
  constructor(
    private engine: Engine,
    private chasis: Chasis,
    private body: Body
  ) {

  }

  run() {
    this.engine.start()
  }
}




