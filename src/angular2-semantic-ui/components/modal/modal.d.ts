import { ControlValueAccessor } from '@angular/forms';
export declare class ModalComponent implements ControlValueAccessor {
    options: any;
    _showModal: boolean;
    element: any;
    id: string;
    _onChange: (_: any) => void;
    _onTouched: () => void;
    constructor();
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    ngAfterViewInit(): void;
    clickContent(event: any): void;
    closeModal(): void;
}
