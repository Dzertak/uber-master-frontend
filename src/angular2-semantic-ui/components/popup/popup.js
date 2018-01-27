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
var PopupDirective = (function () {
    function PopupDirective(el) {
        this.content = "";
        this.trigger = "hover";
        this.element = el.nativeElement;
    }
    PopupDirective.prototype.ngOnInit = function () {
        var id = "lsu_popup_" + Math.random();
        var div = document.createElement('div');
        div.id = id;
        div.className = "ui custom popup top left transition hidden";
        div.style = "word-wrap: break-word; bottom: auto; right: auto;";
        div.innerHTML = this.content;
        this.element.parentElement.appendChild(div);
        this.popupEle = document.getElementById(id);
        this.setPosition();
    };
    PopupDirective.prototype.setPosition = function () {
        var top = this.element.offsetTop;
        var left = this.element.offsetLeft;
        var height = this.popupEle.offsetHeight;
        this.popupEle.style.top = top - height - 10 + 'px';
        this.popupEle.style.left = left + 'px';
    };
    PopupDirective.prototype.show = function () {
        this.popupEle.classList.remove('hidden');
        this.popupEle.classList.add('visible');
        this.setPosition();
    };
    PopupDirective.prototype.hidden = function () {
        this.popupEle.classList.remove('visible');
        this.popupEle.classList.add('hidden');
    };
    PopupDirective.prototype.isActived = function () {
        return this.popupEle.classList.contains('visible');
    };
    PopupDirective.prototype.onClick = function () {
        if (this.trigger === 'click') {
            if (this.isActived()) {
                this.hidden();
            }
            else {
                this.show();
            }
        }
    };
    PopupDirective.prototype.onFocus = function () {
        if (this.trigger === 'focus') {
            this.show();
        }
    };
    PopupDirective.prototype.onFocusOut = function () {
        if (this.trigger === 'focus') {
            this.hidden();
        }
    };
    PopupDirective.prototype.onMouseEnter = function () {
        if (this.trigger === 'hover') {
            this.show();
        }
    };
    PopupDirective.prototype.onMouseLeave = function () {
        if (this.trigger === 'hover') {
            this.hidden();
        }
    };
    PopupDirective.prototype.onResize = function () {
        this.setPosition();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PopupDirective.prototype, "content", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], PopupDirective.prototype, "trigger", void 0);
    PopupDirective = __decorate([
        core_1.Directive({
            selector: '[lsu-popup]',
            host: {
                '(click)': 'onClick()',
                '(focus)': 'onFocus()',
                '(focusout)': 'onFocusOut()',
                '(mouseenter)': 'onMouseEnter()',
                '(mouseleave)': 'onMouseLeave()',
                '(window:resize)': 'onResize()'
            }
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], PopupDirective);
    return PopupDirective;
}());
exports.PopupDirective = PopupDirective;
