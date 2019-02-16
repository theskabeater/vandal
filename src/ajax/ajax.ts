import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { IAjaxRequest, IAjaxResponse } from '.';

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
};

export const post = <T, R>({
  url,
  body,
}: IAjaxRequest<T>): Observable<IAjaxResponse<R>> =>
  ajax.post(url, body, headers);
