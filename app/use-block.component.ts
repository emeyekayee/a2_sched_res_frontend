import {Component} from 'angular2/core';
import {TimeVsPix} from './time-vs-pix';
import {ResourceTimeBlock, GeoHash}  from './resource-time-block';

@Component({
  selector: 'use-block',
  // Invoke as: 
  //   <use-block [block]="time_block" [time_pix]="time_pix" />
  template: `
    <div class="{{ block.blk.css_classes }}blockdiv"
         [ngStyle]="styleGeoHash(block.blk)">
      <div class="text_locator">
        <a href="">{{block.blk.title}}</a>
      </div>
    </div>
    `, // <a ATTRIBUTE> WAS: ng-bind-html-unsafe="block.label"
  styleUrls: ['app/scheduled-resource.css'],
  inputs: ['block', 'time_pix']
})

export class UseBlockComponent {
  public block: ResourceTimeBlock;
  public time_pix: TimeVsPix;  // Access to time vs pixel calculations
  private _geo_hash: GeoHash;  // Cache result of time_pix.styleGeoHash()

  // Does this override the auto-generated constructor ?
  // constructor(public block: ResourceTimeBlock,
  //             public time_pix: TimeVsPix) {
  //   this.block = block;
  //   this.time_pix = time_pix;
  //   var foo = 'bar';
  // }

  styleGeoHash() { 
    if (!this._geo_hash) {
      this._geo_hash = this.time_pix.styleGeoHash(this.block.blk);
    }
    return this._geo_hash;
  }
}
