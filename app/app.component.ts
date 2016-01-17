import {Component, OnInit}   from 'angular2/core';
import {Hero}                from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService}         from './hero.service';
import {TimeVsPix}           from './time-vs-pix';
import {UseBlockComponent}   from './use-block.component';
import {ResponseDataService} from './response-data.service';
import {ResourceTimeBlock, ResponseData}  from './resource-time-block';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <p *ngIf="a_time_block">
      Got a time block !
      {{ getATimeBlockTitle() }}
      <use-block [block]="a_time_block"
                 [time_pix]="time_pix">
      </use-block>
    </p>
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
  styleUrls:['app/heroes.css', 'app/scheduled-resource.css'],
  directives: [HeroDetailComponent, UseBlockComponent],
  providers: [HeroService, ResponseDataService]
})

export class AppComponent implements OnInit {
  public title = 'Tour de Liv';
  public heroes: Hero[];
  public selectedHero: Hero;
  public response_data: ResponseData;
  public a_time_block: ResourceTimeBlock = null;
  public time_pix     = null;

  constructor(private _heroService: HeroService,
              private _responseDataService: ResponseDataService) {};

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getATimeBlockTitle() {
    return this.a_time_block.blk.title
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
          this.a_time_block = this.getTimeBlock();
        }
      }.bind(this)
    );
  }

  getTimeBlock() {
    var key = 'ZTimeHeaderDay_-8';
    var time_blocks: ResourceTimeBlock[] = this.response_data[key];
    if (time_blocks) { return time_blocks[0] }
    return null;
  }

  ngOnInit() {
    this.getHeroes();
    this.getResponseData();
  }

  onSelect(hero: Hero) { this.selectedHero = hero }
}
