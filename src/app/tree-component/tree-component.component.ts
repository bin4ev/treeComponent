import { Component, EventEmitter, ViewContainerRef, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-tree-component',
  template: `<div #viewContainerRef></div>`,
  styleUrls: ['./tree-component.component.css']
})
export class TreeComponentComponent {
  @ViewChild('viewContainerRef', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef

  @Input() data: any = []

  @Output() sendElementText = new EventEmitter()

  item!: any

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.createComponent(this.data, this.viewContainerRef)
  }

  createComponent(children: any, ref: ViewContainerRef) {
    for (let el of children) {
      let parentMargin = ref.element.nativeElement.style.marginLeft.substring(0, 2)
      this.item = ref.createComponent(ItemComponent)
      this.renderer.setStyle(this.item.location.nativeElement.firstElementChild, 'marginLeft', Number(parentMargin) + 10 + 'px')
      this.item.instance.data = el
      this.item.instance.isCLicked.subscribe((d: any) => { //func
        if (d.data.name) { 
          if(d.show){
            let nativEl = d.viewContainerRef.element.nativeElement
            while(nativEl.nextSibling) {
              nativEl.nextSibling.remove()
            }
            return
          }
          this.createComponent(el.children, d.viewContainerRef)
        } else {
          this.sendElementText.emit(d.data)
        }
      })
    }
  }
}


























/* 

import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.css']
})
export class TreeComponentComponent {
  @Input() data: any = []

  @Output() sendElementText = new EventEmitter()
  
  constructor(private renderer: Renderer2) { }

  onClick(e: any, obj: any) {
    if (e.target !== e.currentTarget) {
      this.sendElementText.emit(e.target.textContent)
      return
    }

    if (e.target.firstElementChild) {
      this.deleteChildren(e.target)
      this.sendElementText.emit(e.target.textContent)
      return
    }

    this.sendElementText.emit(e.target.textContent)
    this.getChildren(e.target, obj)
  }

  getChildren(target: any, obj: any) {
    for (let el of obj.children) {
      let div = this.renderer.createElement('div')
      div.style.marginLeft = 10 + 'px'
      div.textContent = el
      if (el.name) {
        div.textContent = el.name
        div.addEventListener('click', (e: any) => this.onClick(e, el))
      }
      this.renderer.appendChild(target, div)
    }
  }

  deleteChildren(target: any) {
    while (target.firstElementChild) {
      target.removeChild(target.firstElementChild)
    }
  }

} */

