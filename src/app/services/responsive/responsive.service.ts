import {HostListener, Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private renderer: Renderer2;
  resizeObservable$ = new BehaviorSubject<number>(0)
  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.resizeObservable$?.next(window.outerWidth)
    this.resize();
  }
  resize() {
    this.renderer.listen("window", "resize", (e) => {
      this.resizeObservable$?.next(e.target.outerWidth)
    });
  }
}
