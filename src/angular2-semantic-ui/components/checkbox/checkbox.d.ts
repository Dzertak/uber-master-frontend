import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class CheckBoxComponent implements ControlValueAccessor {
    disabled: boolean;
    type: string;
    label: string;
    onChange: EventEmitter<boolean>;
    checked: boolean;
    _onChange: (_: any) => void;
    _onTouched: () => void;
    _id: string;
    constructor();
    ngOnInit(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    valueChanged(value: boolean): void;
}
