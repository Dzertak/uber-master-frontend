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
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.disabled = false;
        this.options = {};
        this._inited = false;
        this.pages = [];
        this.showPrevMoreBtn = false;
        this.showNextMoreBtn = false;
        this.onSelectPage = new core_1.EventEmitter();
    }
    Object.defineProperty(PaginationComponent.prototype, "maxSize", {
        get: function () {
            return this._maxSize;
        },
        set: function (value) {
            this._maxSize = value || 10;
            this.updateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (value) {
            this._pageSize = value || 10;
            this.updateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalCount", {
        get: function () {
            return this._totalCount;
        },
        set: function (value) {
            this._totalCount = value || 0;
            this.updateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "currentPage", {
        get: function () {
            return this._currentPage;
        },
        set: function (value) {
            value = value || 1;
            var _temp = this._currentPage;
            this._currentPage = value < 1 ? 1 : value > this.totalPages ? this.totalPages : value;
            if (_temp === this._currentPage) {
                return; //avoid dead circulation
            }
            if (this._inited) {
                this.onSelectPage.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.ngOnInit = function () {
        this._inited = true;
        this.options.directionLinks = this.options.directionLinks || true;
        this.options.boundaryLinks = this.options.boundaryLinks !== undefined ? this.options.boundaryLinks : false;
        this.updateTotalPages();
    };
    PaginationComponent.prototype.updateTotalPages = function () {
        if (!this._inited)
            return;
        var pageCount;
        if (this.totalCount !== undefined) {
            var pageSize = this.pageSize < 1 ? 1 : this.pageSize;
            pageCount = Math.ceil(this.totalCount / this.pageSize);
            pageCount = pageCount > 1 ? pageCount : 1;
        }
        if (this.totalPages < 1) {
            pageCount = 1;
        }
        this.totalPages = pageCount;
        this.setPage(this.currentPage);
    };
    PaginationComponent.prototype.getPages = function (currentPage, totalPage) {
        var pages = [];
        var maxSize = this.maxSize;
        if (currentPage > totalPage) {
            currentPage = totalPage;
        }
        if (maxSize > totalPage) {
            maxSize = totalPage;
        }
        var beginPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
        var endPage = beginPage + maxSize - 1;
        if (endPage > totalPage) {
            endPage = totalPage;
            beginPage = endPage - maxSize + 1;
        }
        for (var i = beginPage; i <= endPage; i++) {
            pages.push(i);
        }
        this.showPrevMoreBtn = beginPage > 1;
        this.showNextMoreBtn = endPage < totalPage;
        return pages;
    };
    PaginationComponent.prototype.setPage = function (pageIndex, updateCurrentPage) {
        if (updateCurrentPage === void 0) { updateCurrentPage = true; }
        if (pageIndex < 1) {
            pageIndex = 1;
        }
        if (pageIndex > this.totalPages) {
            pageIndex = this.totalCount;
        }
        if (updateCurrentPage) {
            this.currentPage = pageIndex;
        }
        this.pages = this.getPages(pageIndex, this.totalPages);
    };
    PaginationComponent.prototype.pageUp = function () {
        var pageIndex = this.currentPage - 1;
        this.setPage(pageIndex);
    };
    PaginationComponent.prototype.pageDown = function () {
        var pageIndex = this.currentPage + 1;
        this.setPage(pageIndex);
    };
    PaginationComponent.prototype.prevMore = function () {
        var pageIndex = this.pages[0] - 1;
        this.setPage(pageIndex, false);
    };
    PaginationComponent.prototype.nextMore = function () {
        var pageIndex = this.pages[this.pages.length - 1] + 1;
        this.setPage(pageIndex, false);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PaginationComponent.prototype, "maxSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PaginationComponent.prototype, "pageSize", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PaginationComponent.prototype, "totalCount", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PaginationComponent.prototype, "currentPage", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], PaginationComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "options", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], PaginationComponent.prototype, "onSelectPage", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'lsu-pagination',
            styles: [
                " .disable_pagination {\n        pointer-events: none;\n        opacity: 0.6;\n      }\n    "
            ],
            template: "\n    <div style=\"display: inline-block\" [class.disable_pagination]=\"disabled\">\n      <p style=\"margin-bottom: 5px; text-align: center;\" *ngIf=\"!options.hidenLabel\">{{ currentPage }} of {{ totalPages }}</p>\n      <div class=\"ui {{options.color || ''}} buttons\">\n        <a class=\"ui button\" *ngIf=\"options.boundaryLinks\" (click)=\"setPage(1)\" [class.disabled]=\"currentPage == 1\">\n          {{ options.firstText || \"<<\" }}\n        </a>\n        <a class=\"ui button\" *ngIf=\"options.directionLinks\" (click)=\"pageUp()\" [class.disabled]=\"currentPage == 1\">\n          {{ options.prevText || \"Prev\" }}\n        </a>\n        <a class=\"ui icon button\" *ngIf=\"showPrevMoreBtn\" (click)=\"prevMore()\">\n          <i class=\"ellipsis horizontal icon\"></i>\n        </a>\n        <button class=\"ui icon button\" [class.active]=\"pageIndex == currentPage\" *ngFor=\"let pageIndex of pages\" (click)=\"setPage(pageIndex)\">\n          {{ pageIndex }}\n        </button>\n        <a class=\"ui icon button\" *ngIf=\"showNextMoreBtn\" (click)=\"nextMore()\">\n          <i class=\"ellipsis horizontal icon\"></i>\n        </a>\n        <a class=\"ui button\" *ngIf=\"options.directionLinks\" (click)=\"pageDown()\" [class.disabled]=\"currentPage == totalPages\">\n          {{ options.nextText || \"Next\" }}\n        </a>\n        <a class=\"ui button\" *ngIf=\"options.boundaryLinks\" (click)=\"setPage(totalPages)\" [class.disabled]=\"currentPage == totalPages\">\n          {{ options.lastText || \">>\" }} \n        </a>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
