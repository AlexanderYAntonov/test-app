import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ListComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90ZXN0LWxpYi9zcmMvbGliL2xpc3QvbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQVdsRixNQUFNLE9BQU8sYUFBYTtJQUl4QjtJQUNBLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7MEdBUlUsYUFBYTs4RkFBYixhQUFhLHlFQVBkOzs7VUFHRjsyRkFJRyxhQUFhO2tCQVR6QixTQUFTOytCQUNFLFNBQVMsWUFDVDs7O1VBR0YsbUJBRVMsdUJBQXVCLENBQUMsTUFBTTswRUFJL0MsSUFBSTtzQkFESCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0bC1saXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dWw+XG4gICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGlzdFwiPnt7aXRlbX19PC9saT5cbiAgICA8L3VsPmAsXG4gIHN0eWxlVXJsczogWycuL2xpc3QuY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgbGlzdCE6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbn1cbiJdfQ==