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
var accordion_panel_1 = require("./accordion_panel");
var AccordionComponent = (function () {
    function AccordionComponent() {
        this.option = {};
        this._accordions = [];
    }
    AccordionComponent.prototype.getCls = function () {
        var cls = {
            "styled": this.option.styled == undefined ? true : this.option.styled,
            "fluid": this.option.fluid == undefined ? true : this.option.fluid,
            "inverted": this.option.inverted == undefined ? false : this.option.inverted
        };
        return cls;
    };
    AccordionComponent.prototype.setAccordion = function (accordion) {
        var isActive = accordion.active;
        if (!this.option.allowMultiple) {
            this._accordions.forEach(function (a) { return a.active = false; });
        }
        accordion.active = !isActive;
    };
    AccordionComponent.prototype.ngAfterContentInit = function () {
        this._accordions = this.accordions.toArray();
        var self = this;
        this._accordions.forEach(function (a) {
            a.onChange(self);
        });
        if (!this.option.allowMultiple) {
            var finded = {};
            for (var i = 0; i < this._accordions.length; i++) {
                var item = this._accordions[i];
                if (item.active) {
                    item.active = false;
                    finded = item;
                }
            }
            if (finded.active !== undefined) {
                finded.active = true;
            }
        }
    };
    __decorate([
        core_1.ContentChildren(accordion_panel_1.AccordionPanelComponent),
        __metadata("design:type", core_1.QueryList)
    ], AccordionComponent.prototype, "accordions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "option", void 0);
    AccordionComponent = __decorate([
        core_1.Component({
            selector: 'lsu-accordion',
            template: "\n    <div class=\"ui styled accordion\" [ngClass]=\"getCls()\">      \n      <ng-content select=\"lsu-accordionPanel\"></ng-content>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AccordionComponent);
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;
