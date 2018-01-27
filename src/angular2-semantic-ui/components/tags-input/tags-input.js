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
var TagsInputComponent = (function () {
    function TagsInputComponent() {
        this.placeholder = 'Add Tag';
        this.invalidMsg = 'Value is invalid';
        this.tags = [];
        this.isBackspaceDown = false;
        this.submitted = false;
        this._onChange = function (_) { };
        this._onTouched = function () { };
    }
    TagsInputComponent_1 = TagsInputComponent;
    TagsInputComponent.prototype.ngOnInit = function () {
        this.tagInputCtrl = new forms_1.FormControl('', forms_1.Validators.compose(this.validators));
    };
    TagsInputComponent.prototype.ngAfterViewInit = function () {
        if (!this.rootEle) {
            this.rootEle = this.rootEleRef.nativeElement;
        }
    };
    TagsInputComponent.prototype.writeValue = function (value) {
        this.tags = value || [];
        this._onChange(this.tags);
    };
    TagsInputComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    TagsInputComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    TagsInputComponent.prototype.topKeyup = function (event) {
        if (event.keyCode === 8 && this.delTarget) {
            var index = this.tags.indexOf(this.delTarget);
            if (index !== -1) {
                this.tags.splice(index, 1);
            }
            this.delTarget = '';
        }
    };
    TagsInputComponent.prototype.setDeltarget = function (tag, evnet) {
        this.delTarget = tag;
        event.stopPropagation();
    };
    TagsInputComponent.prototype.remove = function (index, evnet) {
        this.tags.splice(index, 1);
        event.stopPropagation();
    };
    TagsInputComponent.prototype.tagInputOnFocus = function (event) {
        this.submitted = !!event.srcElement.value;
        this.delTarget = '';
    };
    TagsInputComponent.prototype.tagInputKeyPress = function (event) {
        var value = event.srcElement.value;
        if (event.keyCode === 13 && value) {
            this.submitted = true;
            if (this.tagInputCtrl.valid) {
                this.tags.push(value);
                event.srcElement.value = '';
                this.submitted = false;
            }
            event.preventDefault();
        }
    };
    TagsInputComponent.prototype.tagInputKeyDown = function (event) {
        var value = event.srcElement.value;
        if (event.keyCode === 8 && !value) {
            this.isBackspaceDown = true;
        }
        else {
            this.isBackspaceDown = false;
        }
    };
    TagsInputComponent.prototype.tagInputKeyUp = function (event) {
        var value = event.srcElement.value;
        if (event.keyCode === 8 && !value && this.tags.length > 0 && this.isBackspaceDown) {
            this.delTarget = this.tags[this.tags.length - 1];
            event.stopPropagation();
            this.rootEle.focus();
        }
    };
    __decorate([
        core_1.ViewChild('rootEleRef'),
        __metadata("design:type", core_1.ElementRef)
    ], TagsInputComponent.prototype, "rootEleRef", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TagsInputComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TagsInputComponent.prototype, "invalidMsg", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TagsInputComponent.prototype, "validators", void 0);
    TagsInputComponent = TagsInputComponent_1 = __decorate([
        core_1.Component({
            selector: 'lsu-tagsInput',
            styles: [
                "\n      .tags-input.invalid {\n        border-top: 2px solid #DB2828 !important;\n      }\n\n      .tags-input .ui.label.transition.visible {\n          height: 25px;\n          display: inline-block !important;\n      }\n\n      .tags-input .ui.input {\n          display: inline-block;\n          width: auto;\n      }\n\n      .tags-input .ui.input input {\n          height: 30px;\n          padding: 0 5px;\n          border: none;\n      }\n\n      .tags-input .ui.input input:focus {\n          border-radius: inherit;\n      }\n\n      .deleteTarget:hover,\n      .deleteTarget {\n          border: 0 solid tomato;\n          background-color: tomato !important;\n          color: white !important;\n      }\n    "
            ],
            template: "\n    <div #rootEleRef class=\"ui fluid dropdown selection multiple tags-input\" [class.invalid]=\"tagInputCtrl.invalid && submitted\" tabindex=\"-1\" (click)=\"tagsInput.focus()\" (keyup)=\"topKeyup($event)\">\n      <a class=\"ui label transition visible\" [class.deleteTarget]=\"delTarget == tag\" *ngFor=\"let tag of tags; let i = index; let last = last;\"\n        (click)=\"setDeltarget(tag, $event)\">\n        {{ tag }}\n        <i class=\"delete icon\" (click)=\"remove(i, $event)\"></i>\n      </a>\n      <div class=\"ui input\">\n        <input type=\"text\" autocomplete=\"off\" [formControl]=\"tagInputCtrl\" [attr.placeholder]=\"placeholder\" #tagsInput (focus)=\"tagInputOnFocus($event)\" (keyup)=\"tagInputKeyUp($event)\"\n          (keydown)=\"tagInputKeyDown($event)\" (keypress)=\"tagInputKeyPress($event)\">\n      </div>\n    </div>\n    <p style=\"color: #DB2828\" *ngIf=\"tagInputCtrl.invalid && submitted\"> {{ invalidMsg }}</p>\n  ",
            providers: [{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return TagsInputComponent_1; }),
                    multi: true
                }]
        }),
        __metadata("design:paramtypes", [])
    ], TagsInputComponent);
    return TagsInputComponent;
    var TagsInputComponent_1;
}());
exports.TagsInputComponent = TagsInputComponent;
