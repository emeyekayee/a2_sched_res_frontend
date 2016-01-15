import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {BlocksService} from './blocks.service';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <p>{{blockText()}}</p>
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
  directives: [HeroDetailComponent],
  providers: [HeroService, BlocksService]
})

export class AppComponent implements OnInit {
  public title = 'Tour de Liv';
  public heroes: Hero[];
  public blocks = {};
  public selectedHero: Hero;

  constructor(private _heroService: HeroService,
              private _blocksService: BlocksService) {};

  blockText() {
    // return "This is text";
    time_blocks = this.blocks['ZTimeHeaderDay_-8'];
    return time_blocks ? time_blocks[0].blk.title : "";
  }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  getBlocks() {
    this._blocksService.getBlocks().then(
      // blocks => this.blocks = blocks;
      function (blocks) {
        this.blocks = blocks;
      }.bind(this)
    );
    // console.debug(this.blocks);
  }
  ngOnInit() {
    this.getHeroes();
    this.getBlocks();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
}
