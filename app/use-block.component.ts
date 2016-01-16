import {Component} from 'angular2/core';
import {TimeVsPix} from './time-vs-pix';

@Component({
  selector: 'use-block',
  template: `
    <div class="{{ block.blk.css_classes }} blockdiv"
         [ngStyle]="styleGeoHash(block.blk)">
      <div class="text_locator">
        <a href="">{{block.blk.title}}</a>
      </div>
    </div>
    `, // <a ATTRIBUTE> WAS: ng-bind-html-unsafe="block.label"
  inputs: ['block', 'time_pix']
})

export class UseBlockComponent {
  public block = {};          // SHOULD type this as 'Block'.
  public time_pix: TimeVsPix; // Access to time vs pixel calculations

  // Does this override the auto-generated constructor ?
  // constructor(public block: Object, public time_pix: TimeVsPix) {
  //   this.block = block;
  //   this.time_pix = time_pix;
  //   var foo = 'bar';
  // }

  styleGeoHash() { 
    var hash = this.time_pix.styleGeoHash(this.block.blk);
    return hash;
  }
}
