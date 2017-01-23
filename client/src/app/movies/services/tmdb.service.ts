import { Response }   from '@angular/http';
import { Observable } from 'rxjs/Observable';

export abstract class TMDBService {
  protected page: number;
  protected pageCount: number;

  public nextPage(): void {
    this.page++;
  }

  public previousPage(): void {
    this.page--;
  }

  public hasNext(): boolean {
    return this.page < this.pageCount;
  }

  public hasPrevious(): boolean {
    return this.page > 1;
  }

  protected handleError(error: Response | any) {
    let errorMessage: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMessage = error.message ? error.message : error.toString();
    }
    console.error(errorMessage);

    return Observable.throw(errorMessage);
  }

}