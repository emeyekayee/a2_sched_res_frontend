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
    var ResponseDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ResponseDataService = (function () {
                function ResponseDataService() {
                }
                ResponseDataService.prototype.getResponseData = function () {
                    // 'Borrowed' from ~/an2/app/mock-blocks.ts
                    var jsString = '{"ZTimeHeaderDay_-8":[{"rsrc":{"tag":"ZTimeHeaderDay_-8","title":"-8","label":"Day"},"blk":{"starttime":1452758400,"endtime":1452844800,"title":"Thu, Jan 14","css_classes":"ZTimeHeaderDayRow "}}],"ZTimeHeaderDay_-5":[{"rsrc":{"tag":"ZTimeHeaderDay_-5","title":"-5","label":"Day"},"blk":{"starttime":1452747600,"endtime":1452834000,"title":"Thu, Jan 14","css_classes":"ZTimeHeaderDayRow "}},{"rsrc":{"tag":"ZTimeHeaderDay_-5","title":"-5","label":"Day"},"blk":{"starttime":1452834000,"endtime":1452920400,"title":"Fri, Jan 15","css_classes":"ZTimeHeaderDayRow "}}],"ZTimeHeaderHour_-8":[{"rsrc":{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},"blk":{"starttime":1452824100,"endtime":1452825000,"title":"6:15","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},"blk":{"starttime":1452825000,"endtime":1452825900,"title":"6:30","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},"blk":{"starttime":1452825900,"endtime":1452826800,"title":"6:45","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},"blk":{"starttime":1452826800,"endtime":1452827700,"title":"7:00","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},"blk":{"starttime":1452827700,"endtime":1452828600,"title":"7:15","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},"blk":{"starttime":1452828600,"endtime":1452829500,"title":"7:30","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},"blk":{"starttime":1452829500,"endtime":1452830400,"title":"7:45","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},"blk":{"starttime":1452830400,"endtime":1452831300,"title":"8:00","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},"blk":{"starttime":1452831300,"endtime":1452832200,"title":"8:15","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},"blk":{"starttime":1452832200,"endtime":1452833100,"title":"8:30","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},"blk":{"starttime":1452833100,"endtime":1452834000,"title":"8:45","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},"blk":{"starttime":1452834000,"endtime":1452834900,"title":"9:00","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},"blk":{"starttime":1452834900,"endtime":1452835800,"title":"9:15","css_classes":"ZTimeHeaderHourRow niteTimeblock "}}],"ZTimeHeaderHour_-5":[{"rsrc":{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"},"blk":{"starttime":1452824100,"endtime":1452825000,"title":"9:15","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"},"blk":{"starttime":1452825000,"endtime":1452825900,"title":"9:30","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"},"blk":{"starttime":1452825900,"endtime":1452826800,"title":"9:45","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"},"blk":{"starttime":1452826800,"endtime":1452827700,"title":"10:00","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"},"blk":{"starttime":1452827700,"endtime":1452828600,"title":"10:15","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"},"blk":{"starttime":1452828600,"endtime":1452829500,"title":"10:30","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"},"blk":{"starttime":1452829500,"endtime":1452830400,"title":"10:45","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"},"blk":{"starttime":1452830400,"endtime":1452831300,"title":"11:00","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"},"blk":{"starttime":1452831300,"endtime":1452832200,"title":"11:15","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"},"blk":{"starttime":1452832200,"endtime":1452833100,"title":"11:30","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"},"blk":{"starttime":1452833100,"endtime":1452834000,"title":"11:45","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"},"blk":{"starttime":1452834000,"endtime":1452834900,"title":"12:00","css_classes":"ZTimeHeaderHourRow niteTimeblock "}},{"rsrc":{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"},"blk":{"starttime":1452834900,"endtime":1452835800,"title":"12:15","css_classes":"ZTimeHeaderHourRow niteTimeblock "}}],"meta":{"rsrcs":[{"tag":"ZTimeHeaderDay_-8","title":"-8","label":"Day"},{"tag":"ZTimeHeaderHour_-8","title":"-8","label":"Hour"},{"tag":"ZTimeHeaderDay_-5","title":"-5","label":"Day"},{"tag":"ZTimeHeaderHour_-5","title":"-5","label":"Hour"}],"min_time":1452219759,"max_time":1453429359,"t1":1452824100,"t2":1452834900,"inc":null}}';
                    var BLOCKS = JSON.parse(jsString); // : Blocks
                    return Promise.resolve(BLOCKS);
                };
                ResponseDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ResponseDataService);
                return ResponseDataService;
            })();
            exports_1("ResponseDataService", ResponseDataService);
        }
    }
});
//# sourceMappingURL=response-data.service.js.map