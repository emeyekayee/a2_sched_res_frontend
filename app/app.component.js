System.register(['angular2/core', './hero-detail.component', './hero.service', './time-vs-pix', './use-block.component', './response-data.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_detail_component_1, hero_service_1, time_vs_pix_1, use_block_component_1, response_data_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (time_vs_pix_1_1) {
                time_vs_pix_1 = time_vs_pix_1_1;
            },
            function (use_block_component_1_1) {
                use_block_component_1 = use_block_component_1_1;
            },
            function (response_data_service_1_1) {
                response_data_service_1 = response_data_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_heroService, _blocksService) {
                    this._heroService = _heroService;
                    this._blocksService = _blocksService;
                    this.title = 'Tour de Liv';
                    this.a_time_block = null;
                    this.time_pix = null;
                }
                ;
                AppComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                AppComponent.prototype.getATimeBlockTitle = function () {
                    return this.a_time_block.blk.title;
                };
                AppComponent.prototype.getBlocks = function () {
                    this._blocksService.getBlocks().then(
                    // blocks => this.blocks = blocks;
                    function (blocks) {
                        this.blocks = blocks;
                        if (this.blocks.meta) {
                            // Mock the processing of response blocks.
                            // Start by constructing a TimeVsPix instance.
                            this.time_pix = (new time_vs_pix_1.TimeVsPix());
                            this.time_pix.merge_metadata(this.blocks);
                            this.a_time_block = this.getTimeBlock();
                        }
                    }.bind(this));
                };
                AppComponent.prototype.getTimeBlock = function () {
                    var time_blocks = this.blocks['ZTimeHeaderDay_-8'];
                    if (time_blocks) {
                        return time_blocks[0];
                    }
                    return null;
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                    this.getBlocks();
                };
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>{{title}}</h1>\n    <p *ngIf=\"a_time_block\">\n      Got a time block !\n      {{ getATimeBlockTitle() }}\n      <use-block [block]=\"a_time_block\"\n                 [time_pix]=\"time_pix\">\n      </use-block>\n    </p>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"#hero of heroes\" \n          [class.selected]=\"hero === selectedHero\"\n          (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n   ",
                        // styles:[heroesCss],
                        styleUrls: ['app/heroes.css'],
                        directives: [hero_detail_component_1.HeroDetailComponent, use_block_component_1.UseBlockComponent],
                        providers: [hero_service_1.HeroService, response_data_service_1.ResponseDataService]
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, response_data_service_1.ResponseDataService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map