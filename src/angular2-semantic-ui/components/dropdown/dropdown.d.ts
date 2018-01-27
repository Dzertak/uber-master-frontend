import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class DropdownComponent implements ControlValueAccessor {
    data: Array<any>;
    textField: string;
    disabled: boolean;
    placeHolder: string;
    multiple: boolean;
    change: EventEmitter<any>;
    active: boolean;
    selectedItem: any;
    menuPanelState: string;
    id: string;
    _active: boolean;
    _onChange: (_: any) => void;
    _onTouched: () => void;
    constructor();
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    ngOnInit(): void;
    onDocumentClick(event: any): void;
    toggleSelectPanel(event?: any): void;
    isSelected(item: any): boolean;
    itemClick(item: any, event: any): void;
    removeItem(item: any, event: any): void;
}
