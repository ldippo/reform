import { BehaviorSubject, Observable } from "rxjs";
import {} from "rxjs/operators";
import * as yup from "yup";

interface ReformInputArgs<T extends {}> {
  initialValues: T;
  validationSchema: yup.ObjectSchema<T>;
  onSubmit(values: T): void;
}

type ReformContextErrors<T extends {}> = {
  [K in keyof T]: undefined | string[];
};

interface ReformContextType<T extends {}> {
  _values$$: BehaviorSubject<T>;
  values$: Observable<T>;
  errors$: Observable<ReformContextErrors<T>>;
}

class ReformContext<T extends {}> {
  _values$$: BehaviorSubject<T>;

  constructor(args: ReformInputArgs<T>) {}
}
