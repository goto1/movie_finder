export class Pagination {
  currentPage: number;
  pageCount: number;

  nextPage(): void {
    this.currentPage++;
  }

  prevPage(): void {
    this.currentPage--;
  }

  hasNext(): boolean {
    return this.currentPage < this.pageCount;
  }

  hasPrev(): boolean {
    return this.currentPage > 1;
  }
}