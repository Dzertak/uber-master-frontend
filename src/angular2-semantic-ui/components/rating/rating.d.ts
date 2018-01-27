import { ControlValueAccessor } from '@angular/forms';
export declare class RatingComponent implements ControlValueAccessor {
    maxRating: number;
    protected _maxRating: number;
    rating: number;
    type: string;
    size: string;
    ratings: Array<number>;
    _onChange: (_: any) => void;
    _onTouched: () => void;
    constructor();
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    ngOnInit(): void;
    getRatings(size: number): Array<number>;
    setRating(item: number): void;
}
