import {Component, OnInit}   from 'angular2/core';
import {Hero}                from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService}         from './hero.service';
import {BlocksService}       from './blocks.service';
import {TimeVsPix}           from './time-vs-pix';
import {UseBlockComponent}   from './use-block.component';

// Interface for a_time_block
interface ResourceTimeBlock {
  rsrc: any,
  blk: any
}

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
  styleUrls:['app/heroes.css'],
  directives: [HeroDetailComponent, UseBlockComponent],
  providers: [HeroService, BlocksService]
})

export class AppComponent implements OnInit {
  public title = 'Tour de Liv';
  public heroes: Hero[];
  public selectedHero: Hero;
  public blocks = {};
  public a_time_block: ResourceTimeBlock = null;
  public time_pix     = null;

  constructor(private _heroService: HeroService,
              private _blocksService: BlocksService) {};

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getATimeBlockTitle() {
    return this.a_time_block.blk.title
  }

  getBlocks() {
    this._blocksService.getBlocks().then(
      // blocks => this.blocks = blocks;
      function (blocks) {
        this.blocks = blocks;

        if (this.blocks.meta) {
          // Mock the processing of response blocks.
          // Start by constructing a TimeVsPix instance.
          this.time_pix     = (new TimeVsPix());
          this.time_pix.merge_metadata(this.blocks);
          this.a_time_block = this.getTimeBlock();
          // new UseBlockComponent(this.a_time_block, this.time_pix);
        }
      }.bind(this)
    );
    // console.debug(this.blocks);
  }

  getTimeBlock() {
    var time_blocks: ResourceTimeBlock[] = this.blocks['ZTimeHeaderDay_-8'];
    if (time_blocks) { return time_blocks[0] }
    return null;
  }

  ngOnInit() {
    this.getHeroes();
    this.getBlocks();
  }

  onSelect(hero: Hero) { this.selectedHero = hero }
}
