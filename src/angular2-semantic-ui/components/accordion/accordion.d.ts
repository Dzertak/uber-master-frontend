import { AfterContentInit, QueryList } from '@angular/core';
import { AccordionPanelComponent } from './accordion_panel';
export declare class AccordionComponent implements AfterContentInit {
    accordions: QueryList<AccordionPanelComponent>;
    option: any;
    _accordions: Array<AccordionPanelComponent>;
    constructor();
    getCls(): any;
    setAccordion(accordion: AccordionPanelComponent): void;
    ngAfterContentInit(): void;
}
