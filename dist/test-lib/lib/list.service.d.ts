import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ListService {
    timer: any;
    private list$;
    list: Observable<string>;
    constructor();
    nextItem(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ListService>;
}
