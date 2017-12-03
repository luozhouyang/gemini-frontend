export class BlogInfo {
  private title: string;
  private date: Date;
  private link: string;

  constructor(title: string, date: Date, link: string) {
    this.title = title;
    this.date = date;
    this.link = link;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDate(): Date {
    return this.date;
  }

  public getLink(): string {
    return this.link;
  }
}
