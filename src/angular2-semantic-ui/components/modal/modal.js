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
var ModalComponent = (function () {
    function ModalComponent() {
        this.options = {};
        this._onChange = function (_) { };
        this._onTouched = function () { };
        this.id = "lsu_modal_" + Math.random();
    }
    ModalComponent_1 = ModalComponent;
    ModalComponent.prototype.writeValue = function (value) {
        this._showModal = value;
        this._onChange(value);
        if (value) {
            document.body.classList.add("dimmed");
            var self = this;
            setTimeout(function () {
                var windowHeight = document.body.offsetHeight;
                var eleHeight = self.element.offsetHeight;
                var top = (windowHeight - eleHeight) / 2;
                self.element.style.top = top + 'px';
            });
        }
        else {
            document.body.classList.remove("dimmed");
        }
    };
    ModalComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    ModalComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    ModalComponent.prototype.ngAfterViewInit = function () {
        document.body.classList.add("dimmable");
        this.element = document.getElementById(this.id);
    };
    ModalComponent.prototype.clickContent = function (event) {
        event.stopPropagation();
    };
    ModalComponent.prototype.closeModal = function () {
        if (!this.options.closeable) {
            return;
        }
        var val = false;
        this.writeValue(val);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "options", void 0);
    ModalComponent = ModalComponent_1 = __decorate([
        core_1.Component({
            selector: 'lsu-modal',
            styles: [
                " .trans-fadeout{\n        -webkit-transition:all 0.3s linear;\n        -moz-transition:all 0.3s linear;\n        -ms-transition:all 0.3s linear;\n        -o-transition:all 0.3s linear;\n        transition:all 0.3s linear;\n      }\n    "
            ],
            template: "\n    <div class=\"ui dimmer modals page trans-fadeout\" style=\"display: block !important\" \n      [style.visibility] = \"_showModal ? 'visible' : 'hidden'\"\n      [style.opacity] = \"_showModal ? '1' : '0'\"  \n      (click)=\"closeModal()\">\n      <div id=\"{{id}}\" class=\"ui {{options.size || ''}} {{options.type || ''}} modal active visibility\" (click)=\"clickContent($event)\">\n        <ng-content></ng-content>    \n      </div>\n    </div>\n  ",
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return ModalComponent_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
    var ModalComponent_1;
}());
exports.ModalComponent = ModalComponent;
