import{_ as h,d as p,c as b,a as t,w as s,v as r,b as c,e as a,f as e,r as u,o as f}from"./sites-BvyEwcEd.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const y=`<template>
  <view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showTextAndTitle"
      block
      @click="showDialog($event, { key: 'showTextAndTitle' })"
    >
      反馈类-带标题
    </t-button>
    <t-dialog
      :visible="showTextAndTitle"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="confirmBtn"
      @confirm="closeDialog"
    />

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showContentOnly"
      block
      @click="showDialog($event, { key: 'showContentOnly' })"
    >
      反馈类-无标题
    </t-button>
    <t-dialog
      :visible="showContentOnly"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="confirmBtn"
      @confirm="closeDialog"
    />

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showTitleOnly"
      block
      @click="showDialog($event, { key: 'showTitleOnly' })"
    >
      反馈类-纯标题
    </t-button>
    <t-dialog
      :visible="showTitleOnly"
      title="对话框标题"
      :confirm-btn="confirmBtn"
      @confirm="closeDialog"
    />

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showMultiTextAndTitle"
      block
      @click="showDialog($event, { key: 'showMultiTextAndTitle' })"
    >
      反馈类-内容超长
    </t-button>
    <t-dialog
      :visible="showMultiTextAndTitle"
      title="对话框标题"
      :confirm-btn="confirmBtn"
      @confirm="closeDialog"
    >
      <template
        #content
      >
        <!-- 适配skyline，增加type="list" -->
        <scroll-view
          type="list"
          scroll-y
          class="long-content"
        >
          <view class="content-container">
            这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案 这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
            这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案 这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
            这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案 这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
            这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案 这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
            这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案 这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案，这里是辅助内容文案
          </view>
        </scroll-view>
      </template>
    </t-dialog>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tDialog from 'tdesign-uniapp/dialog/dialog';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tButton,
    tDialog,
  },
  data() {
    return {
      confirmBtn: {
        content: '知道了',
        variant: 'base',
      },

      dialogKey: '',
      showText: false,
      showMultiText: false,
      showTextAndTitle: false,
      showTitleOnly: false,
      showMultiTextAndTitle: false,
      showContentOnly: false,
    };
  },
  created() {},
  methods: {
    showDialog(e, { key }) {
      this[key] = true;
      this.dialogKey = key;
    },
    closeDialog() {
      const { dialogKey } = this;
      this[dialogKey] = false;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,w=`<template>
  <view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showConfirm"
      block
      @click="showDialog($event, { key: 'showConfirm' })"
    >
      确认类-带标题
    </t-button>
    <t-dialog
      :visible="showConfirm"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="confirmBtn"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showWarnConfirm"
      block
      @click="showDialog($event, { key: 'showWarnConfirm' })"
    >
      确认类-无标题
    </t-button>
    <t-dialog
      :visible="showWarnConfirm"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="{ content: '警示操作', variant: 'base', theme: 'danger' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showLightConfirm"
      block
      @click="showDialog($event, { key: 'showLightConfirm' })"
    >
      确认类-纯标题
    </t-button>
    <t-dialog
      :visible="showLightConfirm"
      title="对话框标题"
      :confirm-btn="{ content: '确定', variant: 'base', theme: 'light' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tDialog from 'tdesign-uniapp/dialog/dialog';
export default {
  components: {
    tButton,
    tDialog,
  },
  data() {
    return {
      confirmBtn: {
        content: '确定',
        variant: 'base',
      },
      dialogKey: '',
      showConfirm: false,
      showWarnConfirm: false,
      showLightConfirm: false,
    };
  },
  created() {},
  methods: {
    showDialog(e, { key }) {
      this[key] = true;
      this.dialogKey = key;
    },
    closeDialog() {
      const { dialogKey } = this;
      this[dialogKey] = false;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,D=`<template>
  <view>
    <t-button
      t-class="wrapper"
      size="large"
      theme="primary"
      variant="outline"
      data-key="showWithInput"
      block
      @click="showDialog($event, { key: 'showWithInput' })"
    >
      输入类-无描述
    </t-button>
    <t-dialog
      :visible="showWithInput"
      title="带输入框对话框"
      confirm-btn="确定"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #content
      >
        <t-input
          borderless
          class="dialog-input"
          clearable
          placeholder="输入12文案"
          placeholder-class="placeholder"
        />
      </template>
    </t-dialog>

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showTextAndTitleWithInput"
      block
      @click="showDialog($event, { key: 'showTextAndTitleWithInput' })"
    >
      输入类-带描述
    </t-button>
    <t-dialog
      :visible="showTextAndTitleWithInput"
      title="带输入框对话框"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      confirm-btn="确定"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #content
      >
        <t-input
          borderless
          class="dialog-input"
          clearable
          placeholder="输入12文案"
          placeholder-class="placeholder"
        />
      </template>
    </t-dialog>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tInput from 'tdesign-uniapp/input/input';
import tDialog from 'tdesign-uniapp/dialog/dialog';
export default {
  components: {
    tButton,
    tInput,
    tDialog,
  },
  data() {
    return {
      dialogKey: '',
      showWithInput: false,
      showTextAndTitleWithInput: false,
    };
  },
  created() {},
  methods: {
    showDialog(e, { key }) {
      this[key] = true;
      this.dialogKey = key;
    },
    closeDialog() {
      const { dialogKey } = this;
      this[dialogKey] = false;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,k=`<template>
  <view>
    <t-button
      t-class="wrapper"
      size="large"
      theme="primary"
      variant="outline"
      data-key="imageOnTop"
      block
      @click="showDialog($event, { key: 'imageOnTop' })"
    >
      图片置顶-带标题描述
    </t-button>
    <t-dialog
      :visible="imageOnTop"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #top
      >
        <t-image
          t-class="dialog-image"
          src="https://tdesign.gtimg.com/mobile/demos/dialog1.png"
        />
      </template>
    </t-dialog>

    <t-button
      t-class="wrapper"
      size="large"
      theme="primary"
      variant="outline"
      data-key="imageOnTopWithContent"
      block
      @click="showDialog($event, { key: 'imageOnTopWithContent' })"
    >
      图片置顶-无标题
    </t-button>
    <t-dialog
      :visible="imageOnTopWithContent"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #top
      >
        <t-image
          t-class="dialog-image"
          src="https://tdesign.gtimg.com/mobile/demos/dialog1.png"
        />
      </template>
    </t-dialog>

    <t-button
      t-class="wrapper"
      size="large"
      theme="primary"
      variant="outline"
      data-key="imageOnTopWithTitle"
      block
      @click="showDialog($event, { key: 'imageOnTopWithTitle' })"
    >
      图片置顶-纯标题
    </t-button>
    <t-dialog
      :visible="imageOnTopWithTitle"
      title="对话框标题"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #top
      >
        <t-image
          t-class="dialog-image"
          src="https://tdesign.gtimg.com/mobile/demos/dialog1.png"
        />
      </template>
    </t-dialog>

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="imageOnMiddleWithImage"
      block
      @click="showDialog($event, { key: 'imageOnMiddleWithImage' })"
    >
      图片置顶-纯图片
    </t-button>
    <t-dialog
      :visible="imageOnMiddleWithImage"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #top
      >
        <t-image
          t-class="dialog-image"
          src="https://tdesign.gtimg.com/mobile/demos/dialog1.png"
        />
      </template>
    </t-dialog>

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="imageOnMiddle"
      block
      @click="showDialog($event, { key: 'imageOnMiddle' })"
    >
      图片居中-带标题描述
    </t-button>
    <t-dialog
      :visible="imageOnMiddle"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #middle
      >
        <t-image
          t-class="image-host dialog-image"
          src="https://tdesign.gtimg.com/mobile/demos/dialog1.png"
        />
      </template>
    </t-dialog>

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="imageOnMiddleWithTitle"
      block
      @click="showDialog($event, { key: 'imageOnMiddleWithTitle' })"
    >
      图片居中-纯标题
    </t-button>
    <t-dialog
      :visible="imageOnMiddleWithTitle"
      title="对话框标题"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #middle
      >
        <t-image
          t-class="image-host dialog-image"
          src="https://tdesign.gtimg.com/mobile/demos/dialog1.png"
        />
      </template>
    </t-dialog>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tImage from 'tdesign-uniapp/image/image';
import tDialog from 'tdesign-uniapp/dialog/dialog';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tButton,
    tImage,
    tDialog,
  },
  data() {
    return {
      dialogKey: '',
      imageOnTop: false,
      imageOnTopWithContent: false,
      imageOnTopWithTitle: false,
      imageOnMiddle: false,
      imageOnMiddleWithTitle: false,
      imageOnMiddleWithImage: false,
    };
  },
  created() {},
  methods: {
    showDialog(e, { key }) {
      this[key] = true;
      this.dialogKey = key;
    },
    closeDialog() {
      const { dialogKey } = this;
      this[dialogKey] = false;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <view class="demo-desc">
      文字按钮
    </view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showConfirm"
      block
      @click="showDialog($event, { key: 'showConfirm' })"
    >
      文字按钮
    </t-button>
    <t-dialog
      :visible="showConfirm"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      confirm-btn="确定"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />

    <view class="demo-desc">
      水平基础按钮
    </view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showWarnConfirm"
      block
      @click="showDialog($event, { key: 'showWarnConfirm' })"
    >
      水平基础按钮
    </t-button>
    <t-dialog
      :visible="showWarnConfirm"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />

    <view class="demo-desc">
      垂直基础按钮
    </view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showTooLongBtnContent"
      block
      @click="showDialog($event, { key: 'showTooLongBtnContent' })"
    >
      垂直基础按钮
    </t-button>
    <t-dialog
      :visible="showTooLongBtnContent"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="confirmBtn"
      cancel-btn="取消"
      button-layout="vertical"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />

    <view class="demo-desc">
      多按钮
    </view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showMultiBtn"
      block
      @click="showDialog($event, { key: 'showMultiBtn' })"
    >
      多按钮
    </t-button>
    <t-dialog
      :visible="showMultiBtn"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      button-layout="vertical"
      :actions="multiBtnList"
      @action="closeDialog"
    />

    <view class="demo-desc">
      带关闭按钮的对话框
    </view>
    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="showCloseBtn"
      block
      @click="showDialog($event, { key: 'showCloseBtn' })"
    >
      带关闭按钮的对话框
    </t-button>
    <t-dialog
      :visible="showCloseBtn"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      close-btn
      :confirm-btn="{ content: '警示操作', variant: 'base', theme: 'danger' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    />
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tDialog from 'tdesign-uniapp/dialog/dialog';
export default {
  components: {
    tButton,
    tDialog,
  },
  data() {
    return {
      confirmBtn: {
        content: '确定',
        variant: 'base',
      },

      dialogKey: '',
      showConfirm: false,
      showWarnConfirm: false,
      showTooLongBtnContent: false,
      showMultiBtn: false,
      showCloseBtn: false,

      multiBtnList: [
        {
          content: '次要按钮',
          theme: 'light',
        },
        {
          content: '次要按钮',
          theme: 'light',
        },
        {
          content: '主要按钮',
          theme: 'primary',
        },
      ],

    };
  },
  created() {},
  methods: {
    showDialog(e, { key }) {
      this[key] = true;
      this.dialogKey = key;
    },
    closeDialog(e) {
      console.log('close: ', e);
      const { dialogKey } = this;
      this[dialogKey] = false;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,T=`<template>
  <view>
    <t-button
      size="large"
      variant="outline"
      theme="primary"
      block
      @click="showDialog"
    >
      命令行操作
    </t-button>
    <t-dialog
      id="t-dialog"
      ref="t-dialog"
    />
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tDialog from 'tdesign-uniapp/dialog/dialog';
import Dialog from 'tdesign-uniapp/dialog/index';
export default {
  components: {
    tButton,
    tDialog,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    showDialog() {
      const dialogConfig = {
        context: this,
        title: '弹窗标题',
        closeOnOverlayClick: true,
        content: '告知当前状态、信息和解决方法等内容。',
        confirmBtn: '确定',
        cancelBtn: '取消',
      };
      Dialog.confirm(dialogConfig)
        .then(data => console.log('点击了确定', data))
        .catch(data => console.log('点击了取消', data));
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,C=`<template>
  <view>
    <t-button
      size="large"
      theme="primary"
      variant="outline"
      data-type="hasCancelBtn"
      block
      @click="showDialog($event, { type: 'hasCancelBtn' })"
    >
      开放能力按钮
    </t-button>
    <t-dialog
      id="t-dialog"
      ref="t-dialog"
    />
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tDialog from 'tdesign-uniapp/dialog/dialog';
import Dialog from 'tdesign-uniapp/dialog/index';
export default {
  components: {
    tButton,
    tDialog,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    showDialog() {
      const dialogConfig = {
        context: this,
        title: '弹窗标题',
        content: '告知当前状态、信息和解决方法等内容。',
        cancelBtn: '取消',
        confirmBtn: {
          openType: 'share',
          content: '分享给朋友',
          bindgetphonenumber({ detail }) {
            console.log(detail);
            if (detail.errMsg.includes('fail')) {
              console.log('获取失败');
              return false; // 不关闭弹窗
            }
            return true; // 关闭弹窗
          },
        },
      };
      Dialog.confirm(dialogConfig)
        .then(() => {
          console.log('点击确定');
        })
        .catch(() => {
          console.log('点击取消');
        });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,E=p({data(){return{DemoexamplebaseCode:y,DemoexampleconfirmCode:w,DemoexamplewithinputCode:D,DemoexamplewithimageCode:k,DemoexamplestatusCode:_,DemoexamplecommandCode:T,DemoexamplebuttonCode:C}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(n){this.$route.query.tab!==n&&this.$router.push({query:{tab:n}})}}},mounted(){const{tdDocContent:n,tdDocHeader:d,tdDocTabs:i,tdDocPhone:l}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/dialog/dialog";d&&(d.docInfo={title:"Dialog 对话框",desc:"用于显示重要提示或请求用户进行重要操作，一种打断当前操作的模态视图。"}),i&&(i.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],i.onchange=({detail:g})=>this.tab=g),l&&(l.qrcodeUrl=m),v.highlightAll(),this.$emit("loaded",()=>{n.pageStatus="show"})}}),x={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},B={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"dialog"},M=["tab"],A={name:"DEMO"},O=c(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TDialog <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/dialog/dialog.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>按钮的样式，默认使用 <code>variant = text</code>，如果任意按钮改变了 <code>variant</code>，那么全部按钮都改变成这个。</p><h4 id="反馈类对话框">反馈类对话框 <a class="header-anchor" href="#反馈类对话框"></a></h4>`,6),W={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},$=["code"],z={slot:"action"},R=t("blockquote",null,[t("p",null,[e("使用这种方式，对话框的 "),t("code",null,"visible"),e(" 是受控的，需要手动设置额 "),t("code",null,"visible"),e(" 为 "),t("code",null,"false"),e(" 才会关闭对话框。")])],-1),S=t("h4",{id:"确认类对话框"},[e("确认类对话框 "),t("a",{class:"header-anchor",href:"#确认类对话框"})],-1),I={class:"tdesign-demo-wrapper tdesign-demo-item-- README-confirm tdesign-demo-item-- README"},N=["code"],K={slot:"action"},P=t("h4",{id:"输入类对话框"},[e("输入类对话框 "),t("a",{class:"header-anchor",href:"#输入类对话框"})],-1),j={class:"tdesign-demo-wrapper tdesign-demo-item-- README-with-input tdesign-demo-item-- README"},L=["code"],q={slot:"action"},V=t("h4",{id:"带图片对话框"},[e("带图片对话框 "),t("a",{class:"header-anchor",href:"#带图片对话框"})],-1),H={class:"tdesign-demo-wrapper tdesign-demo-item-- README-with-image tdesign-demo-item-- README"},U=["code"],G={slot:"action"},F=t("h3",{id:"组件状态"},[e("组件状态 "),t("a",{class:"header-anchor",href:"#组件状态"})],-1),J={class:"tdesign-demo-wrapper tdesign-demo-item-- README-status tdesign-demo-item-- README"},Q=["code"],X={slot:"action"},Y=t("h3",{id:"组件用法"},[e("组件用法 "),t("a",{class:"header-anchor",href:"#组件用法"})],-1),Z=t("h4",{id:"命令调用"},[e("命令调用 "),t("a",{class:"header-anchor",href:"#命令调用"})],-1),tt={class:"tdesign-demo-wrapper tdesign-demo-item-- README-command tdesign-demo-item-- README"},nt=["code"],et={slot:"action"},ot=t("h4",{id:"开放能力按钮"},[e("开放能力按钮 "),t("a",{class:"header-anchor",href:"#开放能力按钮"})],-1),at=t("p",null,[e("当传入的按钮类型为对象时，整个对象都将透传至 "),t("code",null,"t-button"),e("，因此按钮可以直接使用开放能力")],-1),it={class:"tdesign-demo-wrapper tdesign-demo-item-- README-button tdesign-demo-item-- README"},dt=["code"],lt={slot:"action"},st={ref:"tdDocPhone"},rt=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/dialog/dialog",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),ct=[rt],mt=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"dialog"},null,-1),gt={name:"API"},ht=c('<h3 id="dialog-props">Dialog Props <a class="header-anchor" href="#dialog-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>actions</td><td>Array / Slot</td><td>-</td><td>操作栏。TS 类型：<code>Array&lt;ButtonProps&gt;</code>，<a href="./button?tab=api">Button API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/dialog/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>button-layout</td><td>String</td><td>horizontal</td><td>多按钮排列方式。可选项：horizontal/vertical</td><td>N</td></tr><tr><td>cancel-btn</td><td>String / Object / Slot</td><td>-</td><td>取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 Slot 自定义按钮时，需自行控制取消事件。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/dialog/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>close-btn</td><td>Boolean / Object</td><td>false</td><td><code>0.31.0</code>。是否展示关闭按钮，值为 <code>true</code> 显示默认关闭按钮；值为 <code>false</code> 则不显示关闭按钮；使用 Object 时透传至图标组件。TS 类型：<code>boolean \\| ButtonProps \\| null</code>，<a href="./button?tab=api">Button API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/dialog/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>close-on-overlay-click</td><td>Boolean</td><td>false</td><td>点击蒙层时是否触发关闭事件</td><td>N</td></tr><tr><td>confirm-btn</td><td>String / Object / Slot</td><td>-</td><td>确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 Slot 自定义按钮时，需自行控制确认事件。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>content</td><td>String / Slot</td><td>-</td><td>内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>middle</td><td>Slot</td><td>-</td><td>中间自定义内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>overlay-props</td><td>Object</td><td>{}</td><td>透传至 Overlay 组件。TS 类型：<code>OverlayProps</code>，<a href="./overlay?tab=api">Overlay API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/dialog/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>prevent-scroll-through</td><td>Boolean</td><td>true</td><td>防止滚动穿透</td><td>N</td></tr><tr><td>show-overlay</td><td>Boolean</td><td>true</td><td>是否显示遮罩层</td><td>N</td></tr><tr><td>title</td><td>String / Slot</td><td>-</td><td>标题。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>top</td><td>Slot</td><td>-</td><td>顶部自定义内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>using-custom-navbar</td><td>Boolean</td><td>false</td><td>是否使用了自定义导航栏</td><td>N</td></tr><tr><td>visible</td><td>Boolean</td><td>-</td><td>控制对话框是否显示</td><td>N</td></tr><tr><td>z-index</td><td>Number</td><td>11500</td><td>对话框层级，Web 侧样式默认为 2500，移动端样式默认 2500，小程序样式默认为 11500</td><td>N</td></tr></tbody></table><h3 id="dialog-events">Dialog Events <a class="header-anchor" href="#dialog-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>cancel</td><td>-</td><td>如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件</td></tr><tr><td>close</td><td><code>(trigger: DialogEventSource)</code></td><td>关闭事件，点击 取消按钮 或 点击蒙层 时触发。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/dialog/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type DialogEventSource = &#39;cancel&#39; \\| &#39;overlay&#39; \\| &#39;close-btn&#39;</code><br></td></tr><tr><td>confirm</td><td>-</td><td>如果“确认”按钮存在，则点击“确认”按钮时触发</td></tr><tr><td>overlay-click</td><td>-</td><td>如果蒙层存在，点击蒙层时触发</td></tr></tbody></table><h3 id="dialog-external-classes">Dialog External Classes <a class="header-anchor" href="#dialog-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-action</td><td>操作样式类</td></tr><tr><td>t-class-cancel</td><td>取消样式类</td></tr><tr><td>t-class-confirm</td><td>确认样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-dialog-body-max-height</td><td>912rpx</td><td>-</td></tr><tr><td>--td-dialog-border-radius</td><td>@radius-extraLarge</td><td>-</td></tr><tr><td>--td-dialog-close-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-dialog-content-color</td><td>@text-color-secondary</td><td>-</td></tr><tr><td>--td-dialog-content-font-size</td><td>32rpx</td><td>-</td></tr><tr><td>--td-dialog-content-line-height</td><td>48rpx</td><td>-</td></tr><tr><td>--td-dialog-title-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-dialog-title-font-size</td><td>36rpx</td><td>-</td></tr><tr><td>--td-dialog-title-line-height</td><td>52rpx</td><td>-</td></tr><tr><td>--td-dialog-width</td><td>622rpx</td><td>-</td></tr></tbody></table>',9),pt=[ht],bt={name:"DESIGN"},ut=c('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>需要用户做一些决定，或提供完成某个任务需要的一些额外信息时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="与输入类组合使用，用于帮助用户完成一些快捷的输入或选择；但不建议一个对话框内有多种不同的输入类组件。">与输入类组合使用，用于帮助用户完成一些快捷的输入或选择；但不建议一个对话框内有多种不同的输入类组件。 <a class="header-anchor" href="#与输入类组合使用，用于帮助用户完成一些快捷的输入或选择；但不建议一个对话框内有多种不同的输入类组件。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/dialog/dialog-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/dialog/dialog-2.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="用于较为重要的信息提示。">用于较为重要的信息提示。 <a class="header-anchor" href="#用于较为重要的信息提示。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/dialog/dialog-3.png"></div></div><hr><h5 id="用于较为重要的信息提示，且需要用户决定。">用于较为重要的信息提示，且需要用户决定。 <a class="header-anchor" href="#用于较为重要的信息提示，且需要用户决定。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/dialog/dialog-4.png"><em></em></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/dialog/dialog-5.png"><em></em></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="确认类对话框通常用于较危险操作的二次确认，建议对话框按钮文本的涉及需要清楚地表明操作后果，加强感知避免误操作。">确认类对话框通常用于较危险操作的二次确认，建议对话框按钮文本的涉及需要清楚地表明操作后果，加强感知避免误操作。 <a class="header-anchor" href="#确认类对话框通常用于较危险操作的二次确认，建议对话框按钮文本的涉及需要清楚地表明操作后果，加强感知避免误操作。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/dialog/dialog-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/dialog/dialog-7.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./toast">轻提示</a></td><td style="text-align:left;">当需要对用户进行轻量反馈或提示，且不需要用户进行操作时使用，轻提示会在一段时间后自动消失。</td></tr><tr><td style="text-align:left;"><a href="./message">消息通知</a></td><td style="text-align:left;">当需要对用户进行较轻量的反馈或提示，可以自动消失或通过点击关闭，通常由用户触发。</td></tr></tbody></table>',16),ft=[ut],vt=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760436141086"})],-1),yt=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function wt(n,d,i,l,m,g){const o=u("Stackblitz");return f(),b("td-doc-content",x,[t("td-doc-header",B,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:n.tab},null,8,M),s(t("div",null,[t("div",A,[O,t("div",W,[t("td-doc-demo",{code:n.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",z,[a(o,{"demo-name":"base","component-name":" README",code:n.DemoexamplebaseCode},null,8,["code"])])],8,$)]),R,S,t("div",I,[t("td-doc-demo",{code:n.DemoexampleconfirmCode,language:"markup","show-code":"",mode:"open","demo-name":"confirm","component-name":" README"},[t("div",K,[a(o,{"demo-name":"confirm","component-name":" README",code:n.DemoexampleconfirmCode},null,8,["code"])])],8,N)]),P,t("div",j,[t("td-doc-demo",{code:n.DemoexamplewithinputCode,language:"markup","show-code":"",mode:"open","demo-name":"with-input","component-name":" README"},[t("div",q,[a(o,{"demo-name":"with-input","component-name":" README",code:n.DemoexamplewithinputCode},null,8,["code"])])],8,L)]),V,t("div",H,[t("td-doc-demo",{code:n.DemoexamplewithimageCode,language:"markup","show-code":"",mode:"open","demo-name":"with-image","component-name":" README"},[t("div",G,[a(o,{"demo-name":"with-image","component-name":" README",code:n.DemoexamplewithimageCode},null,8,["code"])])],8,U)]),F,t("div",J,[t("td-doc-demo",{code:n.DemoexamplestatusCode,language:"markup","show-code":"",mode:"open","demo-name":"status","component-name":" README"},[t("div",X,[a(o,{"demo-name":"status","component-name":" README",code:n.DemoexamplestatusCode},null,8,["code"])])],8,Q)]),Y,Z,t("div",tt,[t("td-doc-demo",{code:n.DemoexamplecommandCode,language:"markup","show-code":"",mode:"open","demo-name":"command","component-name":" README"},[t("div",et,[a(o,{"demo-name":"command","component-name":" README",code:n.DemoexamplecommandCode},null,8,["code"])])],8,nt)]),ot,at,t("div",it,[t("td-doc-demo",{code:n.DemoexamplebuttonCode,language:"markup","show-code":"",mode:"open","demo-name":"button","component-name":" README"},[t("div",lt,[a(o,{"demo-name":"button","component-name":" README",code:n.DemoexamplebuttonCode},null,8,["code"])])],8,dt)])]),t("td-doc-phone",st,ct,512),mt],512),[[r,n.tab==="demo"]]),s(t("div",gt,pt,512),[[r,n.tab==="api"]]),s(t("div",bt,ft,512),[[r,n.tab==="design"]]),vt,yt],512)}const _t=h(E,[["render",wt]]);export{_t as default};
