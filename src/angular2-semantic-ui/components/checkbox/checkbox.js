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
var CheckBoxComponent = (function () {
    function CheckBoxComponent() {
        this.disabled = false;
        this.onChange = new core_1.EventEmitter();
        this.checked = false;
        this._onChange = function (_) { };
        this._onTouched = function () { };
    }
    CheckBoxComponent_1 = CheckBoxComponent;
    CheckBoxComponent.prototype.ngOnInit = function () {
        this._id = "lsu_checkbox_" + new Date().valueOf() + "_" + Math.random() * 10000;
    };
    CheckBoxComponent.prototype.writeValue = function (value) {
        this.checked = value;
    };
    CheckBoxComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    CheckBoxComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    CheckBoxComponent.prototype.valueChanged = function (value) {
        this._onChange(value);
        this.onChange.emit(value);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CheckBoxComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CheckBoxComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CheckBoxComponent.prototype, "label", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CheckBoxComponent.prototype, "onChange", void 0);
    CheckBoxComponent = CheckBoxComponent_1 = __decorate([
        core_1.Component({
            selector: 'lsu-checkbox',
            template: "\n    <div class=\"ui {{type}} checkbox\" [ngClass]=\"{'checked': checked}\">\n      <input type=\"checkbox\" id=\"{{_id}}\" [ngModel]=\"checked\" (ngModelChange)=\"valueChanged($event)\" [disabled]=\"disabled\">\n      <label for=\"{{_id}}\" style=\"cursor: pointer\">{{ label }}</label>\n    </div>\n  ",
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return CheckBoxComponent_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], CheckBoxComponent);
    return CheckBoxComponent;
    var CheckBoxComponent_1;
}());
exports.CheckBoxComponent = CheckBoxComponent;
