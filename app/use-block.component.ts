import {Component} from 'angular2/core';

@Component({
  selector: 'use-block',
  template: `
    <div class="{{ block.css_classes }} blockdiv"
         [ngStyle]="styleGeo()">
      <div class="text_locator">
        <a href="">{{block.label}}</a>
      </div>
    </div>
    `,
  // <a ATTRIBUTE> WAS: ng-bind-html-unsafe="block.label"

  inputs: ['block']
})

export class UseBlockComponent {
  public block = {} ; // SHOULD type this as 'Block'.

  // public time_pix = TimePix; // Access to time vs pixel calculations

  styleGeoHash() { return this.time_pix.style_geo_hash(this.block) }

}
