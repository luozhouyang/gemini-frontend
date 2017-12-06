export class Contact {
  private email: string;
  private emailDescribe: string;
  private wechat: string;
  private wechatQRCodeLink: string;
  private wechatDescribe: string;
  private qq: string;
  private qqDescribe: string;


  constructor() {

  }

  public setEmail(email: string): Contact {
    this.email = email;
    return this;
  }

  public setEmailDescribe(describe: string): Contact {
    this.emailDescribe = describe;
    return this;
  }

  public setWechat(wechat: string): Contact {
    this.wechat = wechat;
    return this;
  }

  public setWechatDescribe(describe: string): Contact {
    this.wechatDescribe = describe;
    return this;
  }

  public setWechatQRCodeLink(link: string): Contact {
    this.wechatQRCodeLink = link;
    return this;
  }

  public setQQ(qq: string): Contact {
    this.qq = qq;
    return this;
  }

  public setQQDescribe(describe: string): Contact {
    this.qqDescribe = describe;
    return this;
  }

  public getEmail(): string {
    return this.email;
  }

  public getEmailDescribe(): string {
    return this.emailDescribe;
  }

  public getWechat(): string {
    return this.wechat;
  }

  public getWechatDescribe(): string {
    return this.wechatDescribe;
  }

  public getWechatQRCodeLink(): string {
    return this.wechatQRCodeLink;
  }

  public getQQ(): string {
    return this.qq;
  }

  public getQQDescribe(): string {
    return this.qqDescribe;
  }
}
