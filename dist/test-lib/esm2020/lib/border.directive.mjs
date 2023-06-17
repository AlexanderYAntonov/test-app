import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class BorderDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9yZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3Rlc3QtbGliL3NyYy9saWIvYm9yZGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFLNUQsTUFBTSxPQUFPLGVBQWU7SUFHMUIsWUFBWSxXQUF1QjtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO0lBQy9DLENBQUM7OzRHQVRVLGVBQWU7Z0dBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUgzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbdGxCb3JkZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBCb3JkZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGVsZW1lbnQkOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmJDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxlbWVudCQgPSBlbGVtZW50UmVmJC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lbGVtZW50JC5zdHlsZS5ib3JkZXIgPSAnc29saWQgMXB4IHJlZCc7XG4gIH1cbn1cbiJdfQ==