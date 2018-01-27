import { ElementRef } from '@angular/core';
export declare class DimmerComponent {
    dimmerDiv: ElementRef;
    parentEle: any;
    _active: boolean;
    active: boolean;
    constructor();
    ngAfterViewInit(): void;
    toggleDimmer(): void;
}
