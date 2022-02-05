import { Component, ViewChild, EventEmitter, ViewContainerRef, Input, OnInit, Output } from '@angular/core';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @ViewChild('viewContainerRef', { read: ViewContainerRef })

  viewContainerRef!: ViewContainerRef

  @Output() isCLicked = new EventEmitter()

  @Input() show = true
  @Input() data!: any

  icon = this.show ? faAngleDown : faAngleRight

  onClick(e: any) {
    this.show = !this.show
    this.icon = this.show ? faAngleDown : faAngleRight
    let { data, viewContainerRef,show } = this //check

    this.isCLicked.emit({ e, data, viewContainerRef, show })
  }

}
