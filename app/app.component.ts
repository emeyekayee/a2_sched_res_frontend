import {Component, OnInit}      from 'angular2/core';

import {Hero}                   from './hero';
import {HeroDetailComponent}    from './hero-detail.component';
import {HeroService}            from './hero.service';

import {ResponseDataService}    from './response-data.service';
import {ResourceSpec, ResponseData}
                                from './resource-time-block';
import {TimeVsPix}              from './time-vs-pix';
import {TimespansDataComponent} from './timespans-data.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <span *ngIf="resource_specs.length">
      <timespans-data [resource_specs]="resource_specs"
                      [timespans_hash]="timespans_hash"
                      [time_pix]="time_pix"></timespans-data>
    </span>

    <p><br/></p>
    <p><br/></p>
    <p><br/></p>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="#hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
   `,
  // styles:[heroesCss],
  styleUrls: ['app/heroes.css'],
  directives: [HeroDetailComponent, TimespansDataComponent],
  providers: [HeroService, ResponseDataService]
})

export class AppComponent implements OnInit {
  public title = 'Tour de Liv';
  public heroes: Hero[];
  public selectedHero: Hero;

  public response_data: ResponseData;
  public resource_specs: ResourceSpec[] = []
  public timespans_hash: ResponseData;          // === this.response_data
  public time_pix     = null;

  constructor(private _heroService: HeroService,
              private _responseDataService: ResponseDataService) {};

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getResponseData() {
    this._responseDataService.getResponseData().then(
      // response_data => this.response_data = response_data;
      function (response_data) {
        this.response_data = response_data;

        if (this.response_data.meta) {
          // Mock the processing of response data.
          // Start by constructing a TimeVsPix instance.
          this.time_pix = new TimeVsPix().merge_metadata(this.response_data);

          // TODO: merge_metadata should include this; Get it from time_pix.
          this.resource_specs = this.response_data.meta.rsrcs;
          this.timespans_hash = this.response_data;
        }
      }.bind(this)
    );
  }

  ngOnInit() {
    this.getHeroes();
    this.getResponseData();
  }

  onSelect(hero: Hero) { this.selectedHero = hero }
}
