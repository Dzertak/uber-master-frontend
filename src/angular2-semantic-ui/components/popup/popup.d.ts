import { ElementRef } from '@angular/core';
export declare class PopupDirective {
    content: string;
    trigger: string;
    element: any;
    popupEle: any;
    timeout: any;
    constructor(el: ElementRef);
    ngOnInit(): void;
    setPosition(): void;
    show(): void;
    hidden(): void;
    isActived(): boolean;
    onClick(): void;
    onFocus(): void;
    onFocusOut(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onResize(): void;
}
