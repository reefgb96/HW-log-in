"use strict";

class Showcase {
  title;
  imgUrl;
  id;
  constructor(title, imgUrl, id) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.id = id;
  }
}

class DeliveryInfo {
  text;
  icon;
  constructor(text, icon) {
    this.text = text;
    this.icon = icon;
  }
}

class ShopCategories {
  type;
  btn1;
  btn2;
  btn3;
  constructor(type, btn1, btn2, btn3) {
    this.type = type;
    this.btn1 = btn1;
    this.btn2 = btn2;
    this.btn3 = btn3;
  }
}

class Brands {
  title;
  imgUrl;
  constructor(title, imgUrl) {
    this.title = title;
    this.imgUrl = imgUrl;
  }
}

class Shop {
  title;
  id;
  wide;
  constructor(title, id, wide) {
    this.title = title;
    this.id = id;
    this.wide = wide;
  }
}

class Desc {
  title;
  text;
  constructor(title, text) {
    this.title = title;
    this.text = text;
  }
}

class Subscribe {
  title;
  privacyPolicyText;
  trustPilotText;
  imgUrl;
  constructor(title, privacyPolicyText, trustPilotText, imgUrl) {
    this.title = title;
    this.privacyPolicyText = privacyPolicyText;
    this.trustPilotText = trustPilotText;
    this.imgUrl = imgUrl;
  }
}
