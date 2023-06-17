import * as i0 from '@angular/core';
import { Injectable, Directive, NgModule, Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class ListService {
    constructor() {
        this.list$ = new Subject();
        this.list = this.list$.asObservable();
        this.timer = setInterval(this.nextItem.bind(this), 1000);
    }
    nextItem() {
        const now = new Date();
        const currentTime = now.getTime().toString();
        this.list$.next(currentTime);
    }
}
ListService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ListService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ListService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ListService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ListService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class BorderDirective {
    constructor(elementRef$) {
        this.element$ = elementRef$.nativeElement;
    }
    ngOnInit() {
        this.element$.style.border = 'solid 1px red';
    }
}
BorderDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BorderDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
BorderDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.3.0", type: BorderDirective, selector: "[tlBorder]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BorderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[tlBorder]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });

class BorderModule {
}
BorderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BorderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BorderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: BorderModule, declarations: [BorderDirective], imports: [CommonModule], exports: [BorderDirective] });
BorderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BorderModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BorderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BorderDirective
                    ],
                    exports: [
                        BorderDirective
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

class ListComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ListComponent, selector: "tl-list", inputs: { list: "list" }, ngImport: i0, template: `
    <ul>
      <li *ngFor="let item of list">{{item}}</li>
    </ul>`, isInline: true, styles: [""], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'tl-list', template: `
    <ul>
      <li *ngFor="let item of list">{{item}}</li>
    </ul>`, changeDetection: ChangeDetectionStrategy.OnPush }]
        }], ctorParameters: function () { return []; }, propDecorators: { list: [{
                type: Input
            }] } });

class ListModule {
}
ListModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: ListModule, declarations: [ListComponent], imports: [CommonModule], exports: [ListComponent] });
ListModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ListModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ListComponent
                    ],
                    exports: [
                        ListComponent
                    ],
                    imports: [
                        CommonModule
                    ]
                }]
        }] });

/*
 * Public API Surface of test-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BorderDirective, BorderModule, ListComponent, ListModule, ListService };
//# sourceMappingURL=expero-test-lib.mjs.map
