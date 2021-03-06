Component({
  properties: {
    // bofangjilu | huatifuhao | shuju | biaoqian | biaoqian-copy-copy2 | biaoqian-copy | biaoqian-copy-copy | dayu | san | dizhi | lishi | dianzan | help | task-filling | map-filling | rili | sousuo | taolunqu | tishi | daibanshixiang | gongpai | jixiaopinggu | network | dingwei | moreandroid | anquan | bulletin | arrow-up-filling | arrow-down-filling | shibai | ceshi | tanhao | file-text | paihangbang | shezhi | swap | caidan | mingxinghuodong | wenjuan | aixin | aixin-filled | eye | info-circle-fill | plus | eye-close | search | arrow-right | arrow-lift | arrow-down | personal | calendar | gift
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * qq.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    svgSize: 18 / 750 * qq.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
});
