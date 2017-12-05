import {Contact} from './contact';

export class MockContact {
  public static getMockContact(): Contact {
    const MOCK_CONTACT: Contact = new Contact();
    MOCK_CONTACT.setEmail('stupidme.me.lzy@gmail.com')
      .setEmailDescribe('This email is used for communicate with you! Welcome contact me!')
      .setWechat('luozhouyang0528')
      .setWechatDescribe('This is my personal wechat ID.')
      .setWechatQRCodeLink('')
      .setQQ('562117676')
      .setQQDescribe('This is my personal QQ ID.');
    return MOCK_CONTACT;
  }
}
