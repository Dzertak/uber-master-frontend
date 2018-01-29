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
var TabComponent = (function () {
    function TabComponent() {
        this.headerText = "";
        this.active = false;
        this.useSegment = false;
    }
    TabComponent.prototype.ngAfterContentInit = function () {
        if (!this.headerText) {
            throw new Error("Please provider header text");
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "headerText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TabComponent.prototype, "active", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TabComponent.prototype, "useSegment", void 0);
    TabComponent = __decorate([
        core_1.Component({
            selector: "lsu-tab",
            styles: [
                ".ui.bottom.attached.tab.segment.active {\n      border-top: none;\n    }"
            ],
            template: "\n    <div class=\"ui tab\" [ngClass]=\"{'active': active, 'segment':useSegment, 'bottom':type == 'tabular', 'attached':type == 'tabular' }\" style=\"margin: 0; width: 100%;\">\n      <ng-content></ng-content>      \n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], TabComponent);
    return TabComponent;
}());
exports.TabComponent = TabComponent;
