import { AfterContentInit, QueryList } from '@angular/core';
import { TabComponent } from './tab';
export declare class TabSetComponent implements AfterContentInit {
    tabs: QueryList<TabComponent>;
    type: string;
    _tabs: Array<TabComponent>;
    _type: string;
    tabSetCls: string;
    constructor();
    setTab(tab: TabComponent): void;
    ngAfterContentInit(): void;
    generateClass(type: string): void;
}
