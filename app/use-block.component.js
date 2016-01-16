System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UseBlockComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UseBlockComponent = (function () {
                function UseBlockComponent() {
                }
                // Does this override the auto-generated constructor ?
                // constructor(public block: ResourceTimeBlock,
                //             public time_pix: TimeVsPix) {
                //   this.block = block;
                //   this.time_pix = time_pix;
                //   var foo = 'bar';
                // }
                UseBlockComponent.prototype.styleGeoHash = function () {
                    if (!this._geo_hash) {
                        this._geo_hash = this.time_pix.styleGeoHash(this.block.blk);
                    }
                    return this._geo_hash;
                };
                UseBlockComponent = __decorate([
                    core_1.Component({
                        selector: 'use-block',
                        template: "\n    <div class=\"{{ block.blk.css_classes }} blockdiv\"\n         [ngStyle]=\"styleGeoHash(block.blk)\">\n      <div class=\"text_locator\">\n        <a href=\"\">{{block.blk.title}}</a>\n      </div>\n    </div>\n    ",
                        inputs: ['block', 'time_pix']
                    }), 
                    __metadata('design:paramtypes', [])
                ], UseBlockComponent);
                return UseBlockComponent;
            })();
            exports_1("UseBlockComponent", UseBlockComponent);
        }
    }
});
//# sourceMappingURL=use-block.component.js.map