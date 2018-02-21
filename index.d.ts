interface IChangeSummary {
    /* TODO Figure out a more
     * typesafe way of dealing 
     * with values, target, and
     * proxy. */
    currentPath: string;
    newValue: any;
    previousValue: any;
    property: string;
    type: string;
}

type TChangeSummaryList = IChangeSummary[];
type TChangeCallback = (changes: TChangeSummaryList) => void;
type TChangeObserver<T> = T;

interface IObservableSlim {
    create<Type extends {} = {}>(target: any, domEnable: boolean, handler: TChangeCallback): TChangeObserver<Type>;
    observe<Type extends {} = {}>(proxy: TChangeObserver<Type>, handler: TChangeCallback): void;
    pause<Type extends {} = {}>(proxy: TChangeObserver<Type>): void;
    resume<Type extends {} = {}>(proxy: TChangeObserver<Type>): void;
    remove<Type extends {} = {}>(proxy: TChangeObserver<Type>): void;
}

export declare const ObservableSlim: IObservableSlim;