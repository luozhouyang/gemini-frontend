export class Blog {
  private id: number;
  private title: string;
  private date: string;
  private link: string;

  constructor(id: number, title: string, date: string, link: string) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.link = link;
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDate(): string {
    return this.date;
  }

  public getLink(): string {
    return this.link;
  }

  public toString(): string {
    return '[id: ' + this.id + ',title: ' + this.title
      + ', data: ' + this.date + ', link: ' + this.link + ']';
  }
}
