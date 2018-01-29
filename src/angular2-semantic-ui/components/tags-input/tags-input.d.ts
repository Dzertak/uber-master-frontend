import { ElementRef } from '@angular/core';
import { ControlValueAccessor, ValidatorFn, FormControl } from '@angular/forms';
export declare class TagsInputComponent implements ControlValueAccessor {
    rootEleRef: ElementRef;
    placeholder: string;
    invalidMsg: string;
    validators: Array<ValidatorFn>;
    tags: Array<string>;
    delTarget: string;
    rootEle: HTMLDivElement;
    isBackspaceDown: boolean;
    tagInputCtrl: FormControl;
    submitted: boolean;
    _onChange: (_: any) => void;
    _onTouched: () => void;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    topKeyup(event: any): void;
    setDeltarget(tag: string, evnet: any): void;
    remove(index: number, evnet: any): void;
    tagInputOnFocus(event: any): void;
    tagInputKeyPress(event: any): void;
    tagInputKeyDown(event: any): void;
    tagInputKeyUp(event: any): void;
}
