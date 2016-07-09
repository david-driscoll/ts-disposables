/**
 *
 */
import {CompositeDisposable} from './CompositeDisposable';
export abstract class DisposableBase {
    protected _disposable: CompositeDisposable;
    constructor() {
        this._disposable = new CompositeDisposable();
    }
}
