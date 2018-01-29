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
var DimmerComponent = (function () {
    function DimmerComponent() {
    }
    Object.defineProperty(DimmerComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (val) {
            this._active = val;
            this.toggleDimmer();
        },
        enumerable: true,
        configurable: true
    });
    DimmerComponent.prototype.ngAfterViewInit = function () {
        if (!this.parentEle) {
            this.parentEle = this.dimmerDiv.nativeElement.parentElement.parentElement;
        }
        this.toggleDimmer();
    };
    DimmerComponent.prototype.toggleDimmer = function () {
        if (!this.parentEle)
            return;
        if (this.active) {
            this.parentEle.classList.add("dimmable");
            this.parentEle.classList.add("dimmed");
        }
        else {
            this.parentEle.classList.remove("dimmable");
            this.parentEle.classList.remove("dimmed");
        }
    };
    __decorate([
        core_1.ViewChild("dimmerDiv"),
        __metadata("design:type", core_1.ElementRef)
    ], DimmerComponent.prototype, "dimmerDiv", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DimmerComponent.prototype, "active", null);
    DimmerComponent = __decorate([
        core_1.Component({
            selector: 'lsu-dimmer',
            template: "\n    <div #dimmerDiv class=\"ui dimmer\" [ngClass]=\"{'active': active}\">\n      <div class=\"content\">\n        <div class=\"center\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], DimmerComponent);
    return DimmerComponent;
}());
exports.DimmerComponent = DimmerComponent;
