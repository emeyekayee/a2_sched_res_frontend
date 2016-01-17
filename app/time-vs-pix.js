System.register([], function(exports_1) {
    var TimeVsPix;
    return {
        setters:[],
        execute: function() {
            // NO  @scroll_container:  ()    -> $('#scrolling-container')
            // NO  @set_display_parms: ()    => // Browser, etc:  @pixWindow
            // NO  @scroll_to_ux_time: (uxt) ->
            // NO  @scroll_to_thi:     ()    ->
            // NO  @ux_time_of_pix:    (x)   ->
            // NO  @scroll_to_tlo:     ()    => # bound
            // NO  @set_time_cursor:   ()    => # bound
            // NO  @scroll_monitor:    ()    => 
            TimeVsPix = (function () {
                function TimeVsPix() {
                    this.base_time = 0; // aka @baseTime
                    this.window_width_secs = 3 * 3600; // aka @timeWindow
                    this.window_width_pix = 750; // aka @pixWindow
                    // DOM has data for time range [dom_time_lo..dom_time_hi] (at least)
                    this.dom_time_lo = null; // aka @tlo
                    this.dom_time_hi = null; // aka @thi
                    // Returned from most recent data request (superfluous)
                    this.meta = {}; // aka @meta
                }
                ;
                TimeVsPix.prototype.merge_metadata = function (response_data) {
                    var meta = response_data.meta;
                    this.meta = meta;
                    if (!this.base_time) {
                        this.base_time = meta['min_time'];
                    }
                    var tlo = this.dom_time_lo;
                    this.dom_time_lo = tlo ? Math.min(tlo, meta.t1) : meta.t1;
                    var thi = this.dom_time_hi;
                    this.dom_time_hi = thi ? Math.max(thi, meta.t2) : meta.t2;
                    if (meta.visible_time) {
                        this.window_width_secs = meta.visible_time;
                    }
                    return this; // Chainable
                };
                TimeVsPix.prototype.nextHi = function () { return this.dom_time_hi + this.window_width_secs; };
                TimeVsPix.prototype.nextLo = function () { return this.dom_time_lo - this.window_width_secs; };
                // Ignoring base_time offset
                TimeVsPix.prototype.secsToPixScale = function (seconds) { return seconds * this.pixPerSec(); };
                TimeVsPix.prototype.pixPerSec = function () { return this.window_width_pix / this.window_width_secs; };
                TimeVsPix.prototype.pixToSecs = function (pix) { return this.base_time + Math.round(pix / this.pixPerSec()); };
                TimeVsPix.prototype.styleGeoHash = function (block) {
                    var s, e;
                    _a = [block.starttime, block.endtime], s = _a[0], e = _a[1]; // per margins V
                    return {
                        left: this.secsToPixScale(s - this.base_time) + "px",
                        width: (this.secsToPixScale(e - s) - 4) + "px"
                    };
                    var _a;
                };
                TimeVsPix.prototype.uxTimeNow = function () { return new Date().valueOf() / 1000; };
                TimeVsPix.prototype.uxTimeOffset = function (ux_time) { return ux_time - this.base_time; };
                TimeVsPix.prototype.uxTimeOffsetPix = function (ux_time) {
                    return this.secsToPixScale(this.uxTimeOffset(ux_time));
                };
                return TimeVsPix;
            })();
            exports_1("TimeVsPix", TimeVsPix);
        }
    }
});
//# sourceMappingURL=time-vs-pix.js.map