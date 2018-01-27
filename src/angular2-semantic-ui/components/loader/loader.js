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
var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    Object.defineProperty(LoaderComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (val) {
            this._active = val;
            this.toggleLoader();
        },
        enumerable: true,
        configurable: true
    });
    LoaderComponent.prototype.ngAfterViewInit = function () {
        if (!this.parentEle) {
            this.parentEle = this.loaderDiv.nativeElement.parentElement.parentElement;
        }
    };
    LoaderComponent.prototype.toggleLoader = function () {
        if (!this.parentEle)
            return;
        if (this.active) {
            this.parentEle.classList.add("ui");
            this.parentEle.classList.add("segment");
        }
        else {
            this.parentEle.classList.remove("ui");
            this.parentEle.classList.remove("segment");
        }
    };
    __decorate([
        core_1.ViewChild("loaderDiv"),
        __metadata("design:type", core_1.ElementRef)
    ], LoaderComponent.prototype, "loaderDiv", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], LoaderComponent.prototype, "active", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "loaderText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "loaderSize", void 0);
    LoaderComponent = __decorate([
        core_1.Component({
            selector: "lsu-loader",
            template: "\n    <div #loaderDiv class=\"ui dimmer\" [ngClass]=\"{'active': active}\">\n      <div class=\"ui {{loaderSize}} text loader\">{{ loaderText }}</div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;
