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
var animations_1 = require("@angular/animations");
var AccordionPanelComponent = (function () {
    function AccordionPanelComponent() {
        this.title = "";
        this._active = false;
        this.panelState = 'inactive';
    }
    Object.defineProperty(AccordionPanelComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (v) {
            this._active = !!v;
            if (this._active) {
                this.panelState = 'active';
            }
            else {
                this.panelState = 'inactive';
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionPanelComponent.prototype.onChange = function (parent) {
        this.parent = parent;
    };
    AccordionPanelComponent.prototype.setAccordion = function () {
        this.parent.setAccordion(this);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AccordionPanelComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AccordionPanelComponent.prototype, "active", null);
    AccordionPanelComponent = __decorate([
        core_1.Component({
            selector: 'lsu-accordionPanel',
            template: "\n    <div class=\"title\" [ngClass]=\"{'active': active}\" (click)=\"setAccordion()\">\n      <i class=\"dropdown icon\"></i>\n      {{ title }}\n    </div>\n    <div class=\"content active\" [@accordionPanelState]=\"panelState\">\n      <ng-content></ng-content>\n    </div>\n  ",
            animations: [
                animations_1.trigger('accordionPanelState', [
                    animations_1.state('inactive', animations_1.style({
                        padding: '0 1em',
                        overflow: 'hidden',
                        height: 0
                    })),
                    animations_1.state('active', animations_1.style({
                        padding: '.5em 1em 1.5em',
                        overflow: 'initial',
                        height: '*'
                    })),
                    animations_1.transition('inactive => active', animations_1.animate('150ms ease-in')),
                    animations_1.transition('active => inactive', animations_1.animate('150ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AccordionPanelComponent);
    return AccordionPanelComponent;
}());
exports.AccordionPanelComponent = AccordionPanelComponent;
