"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RatingComponent = (function () {
    function RatingComponent() {
        this._maxRating = 1;
        this.rating = 0;
        this.type = "star";
        this.size = "";
        this._onChange = function (_) { };
        this._onTouched = function () { };
    }
    RatingComponent_1 = RatingComponent;
    Object.defineProperty(RatingComponent.prototype, "maxRating", {
        get: function () {
            return this._maxRating;
        },
        set: function (val) {
            this._maxRating = val;
            if (this.rating > val) {
                this.setRating(val);
            }
            this.ratings = this.getRatings(val);
        },
        enumerable: true,
        configurable: true
    });
    RatingComponent.prototype.writeValue = function (value) {
        this.rating = value;
        this._onChange(value);
    };
    RatingComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    RatingComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    RatingComponent.prototype.ngOnInit = function () {
        this.type = this.type.toLowerCase();
        this.size = this.size.toLowerCase();
        this.ratings = this.getRatings(this.maxRating);
    };
    RatingComponent.prototype.getRatings = function (size) {
        var ratings = [];
        for (var i = 0; i < size; i++) {
            ratings.push(i + 1);
        }
        return ratings;
    };
    RatingComponent.prototype.setRating = function (item) {
        this.writeValue(item);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], RatingComponent.prototype, "maxRating", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rating", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "size", void 0);
    RatingComponent = RatingComponent_1 = __decorate([
        core_1.Component({
            selector: 'lsu-rating',
            template: "\n    <div class=\"ui {{ type }} {{ size }} rating\">\n      <i class=\"icon\" *ngFor=\"let item of ratings\" [ngClass]=\"{'active': item <= rating }\" (click)=\"setRating(item)\"></i>\n    </div>\n  ",
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return RatingComponent_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
    var RatingComponent_1;
}());
exports.RatingComponent = RatingComponent;
