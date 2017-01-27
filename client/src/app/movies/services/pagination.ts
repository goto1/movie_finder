export class Pagination {
  constructor(
    public page: number, 
    public pageCount: number ) { }

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

  public getCurrentPage(): number {
    return this.page;
  }

  public setCurrentPage(page: number): void {
    this.page = page;
  }

  public setPageCount(pageCount: number): void {
    this.pageCount = pageCount;
  }
}