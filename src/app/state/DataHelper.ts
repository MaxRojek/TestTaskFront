export interface DataHelperObject<T> {
  data: null | T;
  loading: boolean;
  error: boolean;
  success: boolean;
}

export class DataHelper<T> {
  data: null | T;
  loading: boolean;
  error: boolean;
  success: boolean;

  constructor(data = null, loading: boolean = false, error: boolean = false, success: boolean = false
  ) {
    this.data = data;
    this.loading = loading;
    this.error = error;
    this.success = success;
  }

  init() {
    return { data: null, loading: this.loading, error: this.error, success: this.success };
  }

  loadSuccess(data: T) {
    return { data: data, loading: false, error: false, success: true };
  }

  loadingData() {
    return { data: null, loading: true, error: false, success: false };
  }

  fail() {
    return { data: null, loading: false, error: true, success: false };
  }

}