import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { IAjaxRequest, IAjaxResponse } from './ajax.model';

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
};

export const post = <T, R>({
  url,
  body,
}: IAjaxRequest<T>): Observable<IAjaxResponse<R>> =>
  ajax.post(url, body, headers);
