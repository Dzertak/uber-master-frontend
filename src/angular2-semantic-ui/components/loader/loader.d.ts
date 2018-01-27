import { ElementRef } from '@angular/core';
export declare class LoaderComponent {
    loaderDiv: ElementRef;
    _active: boolean;
    active: boolean;
    loaderText: string;
    loaderSize: string;
    parentEle: any;
    constructor();
    ngAfterViewInit(): void;
    toggleLoader(): void;
}
