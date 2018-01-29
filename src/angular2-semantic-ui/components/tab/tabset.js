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
var tab_1 = require("./tab");
var TabSetComponent = (function () {
    function TabSetComponent() {
        this._tabs = [];
        this._type = 'tabular';
    }
    Object.defineProperty(TabSetComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            if (this._type !== val) {
                this.generateClass(val);
            }
            this._type = val;
        },
        enumerable: true,
        configurable: true
    });
    ;
    TabSetComponent.prototype.setTab = function (tab) {
        this.tabs.forEach(function (t) { return t.active = false; });
        tab.active = true;
    };
    TabSetComponent.prototype.ngAfterContentInit = function () {
        this._tabs = this.tabs.toArray();
        if (this._tabs.length == 0) {
            throw new Error("Cannot no tab in tabset.");
        }
        this.generateClass(this.type);
        var hasActivedTab = false;
        for (var i = 0; i < this._tabs.length; i++) {
            var tab = this._tabs[i];
            tab.type = this.type;
            if (tab.active && !hasActivedTab) {
                this.setTab(tab);
                hasActivedTab = true;
            }
        }
        if (!hasActivedTab) {
            this.setTab(this._tabs[0]);
        }
    };
    TabSetComponent.prototype.generateClass = function (type) {
        if (type === "secondary") {
            this.tabSetCls = "ui secondary menu";
        }
        else if (type === "pointing") {
            this.tabSetCls = "ui pointing secondary menu";
        }
        else {
            this.tabSetCls = "ui top attached tabular menu";
        }
        this._tabs.forEach(function (t) { return t.type = type; });
    };
    __decorate([
        core_1.ContentChildren(tab_1.TabComponent),
        __metadata("design:type", core_1.QueryList)
    ], TabSetComponent.prototype, "tabs", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TabSetComponent.prototype, "type", null);
    TabSetComponent = __decorate([
        core_1.Component({
            selector: "lsu-tabset",
            template: "\n    <div class=\"{{tabSetCls}}\">\n      <a class=\"item\" *ngFor=\"let tab of _tabs\" [ngClass]=\"{'active': tab.active}\" (click)=\"setTab(tab)\">\n        {{ tab.headerText }}\n      </a>            \n    </div>\n    <ng-content select=\"lsu-tab\"></ng-content>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], TabSetComponent);
    return TabSetComponent;
}());
exports.TabSetComponent = TabSetComponent;
