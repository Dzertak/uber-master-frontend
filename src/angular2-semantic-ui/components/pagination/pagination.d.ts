import { EventEmitter } from '@angular/core';
export declare class PaginationComponent {
    maxSize: number;
    pageSize: number;
    totalCount: number;
    currentPage: number;
    disabled: boolean;
    options: any;
    onSelectPage: EventEmitter<any>;
    protected _maxSize: number;
    protected _pageSize: number;
    protected _totalCount: number;
    protected _currentPage: number;
    protected _inited: boolean;
    totalPages: number;
    pages: Array<number>;
    showPrevMoreBtn: boolean;
    showNextMoreBtn: boolean;
    constructor();
    ngOnInit(): void;
    updateTotalPages(): void;
    getPages(currentPage: number, totalPage: number): Array<number>;
    setPage(pageIndex: number, updateCurrentPage?: boolean): void;
    pageUp(): void;
    pageDown(): void;
    prevMore(): void;
    nextMore(): void;
}
