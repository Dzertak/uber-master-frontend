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
var forms_1 = require("@angular/forms");
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.disabled = false;
        this.placeHolder = '';
        this.multiple = false;
        this.change = new core_1.EventEmitter();
        this.menuPanelState = 'inactive';
        this._active = false;
        this._onChange = function (_) { };
        this._onTouched = function () { };
        this.id = "lsu_dropdown_" + Math.random();
    }
    DropdownComponent_1 = DropdownComponent;
    Object.defineProperty(DropdownComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (v) {
            this._active = !!v;
            if (this._active) {
                this.menuPanelState = 'active';
            }
            else {
                this.menuPanelState = 'inactive';
            }
        },
        enumerable: true,
        configurable: true
    });
    DropdownComponent.prototype.writeValue = function (value) {
        this.selectedItem = value;
        this.change.emit(value);
        this._onChange(value);
    };
    DropdownComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    DropdownComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    DropdownComponent.prototype.ngOnInit = function () {
        if (!this.multiple)
            return;
        this.selectedItem = this.selectedItem || [];
        for (var i = 0; i < this.selectedItem.length; i++) {
            var initItem = this.selectedItem[i];
            for (var j = 0; j < this.data.length; j++) {
                var candidateItem = this.data[j];
                if (JSON.stringify(initItem) === JSON.stringify(candidateItem)) {
                    this.selectedItem[i] = this.data[j];
                    break;
                }
            }
        }
    };
    DropdownComponent.prototype.onDocumentClick = function (event) {
        var id = event.target.id;
        if (this.active && id !== this.id) {
            this.active = false;
        }
    };
    DropdownComponent.prototype.toggleSelectPanel = function (event) {
        this.active = !this.active;
        if (event) {
            event.target.id = this.id;
        }
    };
    DropdownComponent.prototype.isSelected = function (item) {
        if (!this.selectedItem) {
            return false;
        }
        if (this.multiple) {
            var index = this.selectedItem.indexOf(item);
            return index !== -1;
        }
        else {
            return this.selectedItem === item;
        }
    };
    DropdownComponent.prototype.itemClick = function (item, event) {
        var value;
        if (this.multiple) {
            value = this.selectedItem || [];
            value.push(item);
            if (value.length === this.data.length) {
                this.toggleSelectPanel();
            }
        }
        else {
            value = item;
            this.toggleSelectPanel();
        }
        this.writeValue(value);
        event.stopPropagation();
    };
    DropdownComponent.prototype.removeItem = function (item, event) {
        var value = this.selectedItem;
        var index = value.indexOf(item);
        if (index !== -1) {
            value.splice(index, 1);
        }
        this.writeValue(value);
        event.stopPropagation();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DropdownComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "textField", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DropdownComponent.prototype, "placeHolder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "multiple", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DropdownComponent.prototype, "change", void 0);
    DropdownComponent = DropdownComponent_1 = __decorate([
        core_1.Component({
            selector: 'lsu-dropdown',
            styles: [".active,.visible{ display:block !important; }"],
            host: {
                '(document:click)': 'onDocumentClick($event)'
            },
            template: "\n      <div class=\"ui fluid selection dropdown\" [attr.id]=\"id\"\n           [ngClass]=\"{'active':active,'visible':active,'multiple':multiple,'disabled':disabled}\"\n           (click)=\"toggleSelectPanel($event)\">\n          <i class=\"dropdown icon\"></i>\n          <div class=\"default text\" *ngIf=\"!selectedItem || selectedItem.length == 0\">\n              {{ placeHolder }}\n          </div>\n          <div class=\"text\" *ngIf=\"selectedItem && !multiple\">\n              {{ selectedItem[textField] || selectedItem }}\n          </div>\n          <div *ngIf=\"selectedItem && multiple\">\n              <a class=\"ui label transition visible\" style=\"display: inline-block !important;\" *ngFor=\"let item of selectedItem\">\n                  {{ item[textField] || item }}\n                  <i class=\"delete icon\" (click)=\"removeItem(item, $event)\"></i>\n              </a>\n          </div>\n          <div class=\"menu visible\" #menuPanel [@menuPanelState]=\"menuPanelState\"\n               (@menuPanelState.start)=\"menuPanel.style.overflowY = 'hidden'\"\n               (@menuPanelState.done)=\"menuPanel.style.overflowY = 'auto'\">\n              <div class=\"item\" [class.active]=\"isSelected(item)\" [class.filtered]=\"isSelected(item) && multiple\" (click)=\"itemClick(item, $event)\" *ngFor=\"let item of data\">\n                  {{ item[textField] || item }}\n              </div>\n          </div>\n      </div>\n  ",
            animations: [
                animations_1.trigger('menuPanelState', [
                    animations_1.state('inactive', animations_1.style({
                        height: 0,
                        opacity: 0
                    })),
                    animations_1.state('active', animations_1.style({
                        height: '*',
                        opacity: 1
                    })),
                    animations_1.transition('inactive <=> active', animations_1.animate('200ms ease'))
                ])
            ],
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return DropdownComponent_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownComponent);
    return DropdownComponent;
    var DropdownComponent_1;
}());
exports.DropdownComponent = DropdownComponent;
