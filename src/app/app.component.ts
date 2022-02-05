import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elementText!: string
  items = [
    {
      name: 'Fruit',
      children: ['Sweet', 'Bitter']
    }, {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: ['Broccoli', 'Brussels sprouts'],
        }, {
          name: 'green2',
          children: [{
            name: 'leaves',
            children: ['letuce', 'letuce2 '],
          }, {
            name: 'leaves2',
            children: [{
              name: 'leaves3',
              children: [{
                name: 'leaves4',
                children: [{
                  name: 'leaves5',
                  children: ['fininish']
                }]
              }]
            }
          ],
          }
          ]
        }
      ]
    }
  ]

  logText (text:string) {
    this.elementText = text
    console.log(this.elementText);
    
  }
}
