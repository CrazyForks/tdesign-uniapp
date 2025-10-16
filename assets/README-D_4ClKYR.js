import{_ as u,d as h,c as g,a as t,w as s,v as i,b as l,e as d,f as m,r as b,o as f}from"./sites-Co6lQ2MM.js";import{P as x}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view>
    <t-input
      label="标签文字"
      placeholder="请输入文字"
    />

    <t-input placeholder="请输入文字">
      <template
        #label
      >
        <view
          class="custom-label"
        >
          标签文字
        </view>
      </template>
    </t-input>

    <t-input placeholder="请输入文字" />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.custom-label {
    display: inline-flex;
}

.custom-label::after {
    content: '*';
    color: red;
    font-size: 32rpx;
    margin-left: 4rpx;
}
</style>
`,_=`<template>
  <view>
    <t-input
      class="custom-class"
      label="标签文字"
      placeholder="请输入文字"
      tips="最大输入10个字符"
      :maxlength="10"
    />
    <t-input
      class="custom-class"
      label="标签文字"
      placeholder="请输入文字"
      tips="最大输入10个字符，汉字算两个"
      :maxcharacter="10"
    />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.custom-class {
    --td-input-align-items: start;
}
</style>
`,E=`<template>
  <view>
    <t-input
      label="标签文字"
      placeholder="请输入文字"
      :suffix-icon="{ name: 'info-circle-filled', ariaLabel: '提示' }"
      @click="click"
    />

    <t-input
      class="extra"
      label="标签文字"
      placeholder="请输入文字"
      tips="最多十个字"
    >
      <template #extra>
        <t-button

          theme="primary"
          :maxcharacter="10"
          size="extra-small"
        >
          操作按钮
        </t-button>
      </template>
    </t-input>

    <t-input
      label="标签文字"
      placeholder="请输入文字"
      :suffix-icon="{ name: 'user-avatar', ariaLabel: '通讯录' }"
    />
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tButton,
    tInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    click(e) {
      const { trigger } = e;
      console.log('click: ', trigger);
    },
  },
};
<\/script>
<style>
.extra {
    --td-input-align-items: start;
}
</style>
`,y=`<template>
  <view>
    <t-input
      prefix-icon="app"
      label="标签文字"
      placeholder="请输入文字"
    />

    <t-input
      prefix-icon="app"
      placeholder="请输入文字"
    />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
</style>
`,w=`<template>
  <view>
    <t-input
      label="输入密码"
      type="password"
      :value="textPassword"
      :suffix-icon="{ name: 'browse-off', ariaLabel: '密码' }"
    />

    <t-input
      placeholder="输入验证码"
      label="验证码"
    >
      <template
        #suffix
      >
        <view
          class="suffix"
        >
          <view class="suffix--line" />
          <image
            class="image"
            src="https://wwcdn.weixin.qq.com/node/wework/images/202010241547.ac6876be9c.png"
            mode="heightFix"
            aria-role="img"
            aria-label="验证码"
          />
        </view>
      </template>
    </t-input>

    <t-input
      label="手机号"
      placeholder="输入手机号码"
      :value="phoneNumber"
      type="number"
      :tips="phoneError ? '手机号输入不正确' : ''"
      @change="onPhoneInput"
    >
      <template
        #suffix
      >
        <view
          style="display: flex; align-items: center"
        >
          <view class="suffix--line" />
          <view
            class="verify"
            aria-role="button"
          >
            发送验证码
          </view>
        </view>
      </template>
    </t-input>

    <t-input
      label="价格"
      placeholder="0.00"
      suffix="元"
      align="right"
      type="number"
      :format="priceFormat"
      :tips="priceError ? '请输入正确的价格' : ''"
      t-class-tips="tips"
      @change="onPriceInput"
    />

    <t-input
      label="数量"
      placeholder="填写个数"
      suffix="个"
      align="right"
      type="number"
    />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {
      textPassword: '123456',
      phoneError: false,
      phoneNumber: '17600600600',
      priceError: false,
      priceFormat: (v) => {
        const isNumber = /^\\d+(\\.\\d+)?$/.test(v);
        if (isNumber) {
          return parseFloat(v).toFixed(2);
        }
        return v;
      },
    };
  },
  created() {},
  methods: {
    onPhoneInput(e) {
      const { phoneError } = this;
      const isPhoneNumber = /^[1][3,4,5,7,8,9][0-9]{9}$/.test(e.value);
      if (phoneError === isPhoneNumber) {
        this.phoneError = !isPhoneNumber;
      }
    },
    onPriceInput(e) {
      const { priceError } = this;
      const isNumber = /^\\d+(\\.\\d+)?$/.test(e.value);
      if (priceError === isNumber) {
        this.priceError = !isNumber;
      }
    },
  },
};
<\/script>
<style>
.suffix {
    display: flex;
    align-items: center;
}

.suffix--line {
    width: 1px;
    height: 24px;
    background-color: var(--td-component-stroke, #f3f3f3);
    margin-right: 16px;
}

.image {
    width: 72px;
    height: 36px;
    display: block;
    margin-top: -6px;
    margin-bottom: -6px;
}

.tips {
    text-align: right !important;
}

.verify {
    color: var(--td-brand-color, #0052d9);
    font-size: 32rpx;
}
</style>
`,D=`<template>
  <view>
    <t-input
      class="custom-class"
      label="标签文字"
      placeholder="请输入文字"
      value="已输入内容"
      status="error"
      tips="错误提示"
      :clearable="{ name: 'close', color: '#D54941', ariaLabel: '通讯录' }"
    />

    <t-input
      label="标签文字"
      value="不可编辑文字"
      disabled
    />

    <t-input
      label="标签文字"
      value="只读模式"
      readonly
    />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.custom-class {
    --td-input-align-items: start;
}
</style>
`,N=`<template>
  <view>
    <t-input
      label="标签超长时最多十个字"
      placeholder="请输入文字"
    />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
</style>
`,k=`<template>
  <view>
    <t-input
      label="左对齐"
      placeholder="请输入文字"
    />
    <t-input
      label="居中"
      placeholder="请输入文字"
      align="center"
    />
    <t-input
      label="右对齐"
      placeholder="请输入文字"
      align="right"
    />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
</style>
`,A=`<template>
  <view>
    <t-input
      label="标签文字"
      layout="vertical"
      placeholder="请输入文字"
      :suffix-icon="{ name: 'info-circle-filled', ariaLabel: '提示' }"
    />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
</style>
`,I=`<template>
  <view class="input-example--banner">
    <t-input
      :custom-style="style"
      label="标签文字"
      placeholder="请输入文字"
      borderless
    />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {
      style: 'border-radius: 18rpx;',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.input-example--banner {
    margin: 0 32rpx;
}
</style>
`,M=`<template>
  <view class="input-example--bordered">
    <view class="input-example__label">
      标签文字
    </view>

    <t-input
      placeholder="请输入文字"
      :borderless="true"
      :custom-style="style"
      :suffix-icon="{ name: 'info-circle-filled', ariaLabel: '提示' }"
    />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {
      style: 'border: 2rpx solid var(--td-component-border);border-radius: 12rpx;',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.input-example--bordered {
    --td-input-vertical-padding: 24rpx;
    background-color: var(--bg-color-demo);
    padding: 32rpx 32rpx 16rpx;
}

.input-example__label {
    color: var(--td-text-color-primary);
    font-size: 24rpx;
    line-height: 40rpx;
    margin: 0 8rpx 16rpx;
}
</style>
`,R=`<template>
  <view class="input-example--custom custom-theme">
    <t-input
      label="标签文字"
      placeholder="请输入文字"
    />
  </view>
</template>

<script>
import tInput from 'tdesign-uniapp/input/input.vue';
export default {
  components: {
    tInput,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.input-example--custom {
    padding-bottom: 48rpx;
}

.custom-theme {
    --td-input-bg-color: rgba(44, 44, 44, 1);
    --td-input-border-color: rgba(75, 75, 75, 1);
    --td-input-default-text-color: rgba(255, 255, 255, 1);
    --td-input-placeholder-text-color: rgba(255, 255, 255, 0.35);
    --td-input-label-text-color: rgba(255, 255, 255, 1);
}
</style>
`,S=h({data(){return{DemoexamplebaseCode:v,DemoexamplemaxlengthCode:_,DemoexamplesuffixCode:E,DemoexampleprefixCode:y,DemoexamplespecialCode:w,DemoexamplestatusCode:D,DemoexamplelabelCode:N,DemoexamplealignCode:k,DemoexamplelayoutCode:A,DemoexamplebannerCode:I,DemoexampleborderedCode:M,DemoexamplecustomCode:R}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:r,tdDocTabs:o,tdDocPhone:a}=this.$refs,c="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/input/input";r&&(r.docInfo={title:"Input 输入框",desc:"用于单行文本信息输入。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:p})=>this.tab=p),a&&(a.qrcodeUrl=c),x.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),C={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},T={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"input"},B=["tab"],P={name:"DEMO"},V=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TInput <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/input/input.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_01-组件类型">01 组件类型 <a class="header-anchor" href="#_01-组件类型"></a></h3><p>基础输入框</p>`,5),$={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},j=["code"],z={slot:"action"},O=t("p",null,"带字数限制输入框",-1),q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-maxlength tdesign-demo-item-- README"},F=["code"],L={slot:"action"},H=t("p",null,"带操作输入框",-1),U={class:"tdesign-demo-wrapper tdesign-demo-item-- README-suffix tdesign-demo-item-- README"},Y=["code"],G={slot:"action"},J=t("p",null,"带图标输入框",-1),K={class:"tdesign-demo-wrapper tdesign-demo-item-- README-prefix tdesign-demo-item-- README"},Q=["code"],W={slot:"action"},X=t("p",null,"特定类型输入框",-1),Z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-special tdesign-demo-item-- README"},tt=["code"],et={slot:"action"},nt=t("h3",{id:"_02-组件状态"},[m("02 组件状态 "),t("a",{class:"header-anchor",href:"#_02-组件状态"})],-1),dt=t("p",null,"输入框状态",-1),ot={class:"tdesign-demo-wrapper tdesign-demo-item-- README-status tdesign-demo-item-- README"},rt=["code"],at={slot:"action"},st=t("p",null,"信息超长状态",-1),it={class:"tdesign-demo-wrapper tdesign-demo-item-- README-label tdesign-demo-item-- README"},lt=["code"],ct={slot:"action"},pt=t("h3",{id:"_03-组件样式"},[m("03 组件样式 "),t("a",{class:"header-anchor",href:"#_03-组件样式"})],-1),mt=t("p",null,"内容位置",-1),ut={class:"tdesign-demo-wrapper tdesign-demo-item-- README-align tdesign-demo-item-- README"},ht=["code"],gt={slot:"action"},bt=t("p",null,"竖排样式",-1),ft={class:"tdesign-demo-wrapper tdesign-demo-item-- README-layout tdesign-demo-item-- README"},xt=["code"],vt={slot:"action"},_t=t("p",null,"非通栏样式",-1),Et={class:"tdesign-demo-wrapper tdesign-demo-item-- README-banner tdesign-demo-item-- README"},yt=["code"],wt={slot:"action"},Dt=t("p",null,"标签外置样式",-1),Nt={class:"tdesign-demo-wrapper tdesign-demo-item-- README-bordered tdesign-demo-item-- README"},kt=["code"],At={slot:"action"},It=t("p",null,"自定义样式文本框",-1),Mt={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom tdesign-demo-item-- README"},Rt=["code"],St={slot:"action"},Ct={ref:"tdDocPhone"},Tt=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/input/input",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),Bt=[Tt],Pt={name:"API"},Vt=l('<h3 id="input-props">Input Props <a class="header-anchor" href="#input-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>adjust-position</td><td>Boolean</td><td>true</td><td>键盘弹起时，是否自动上推页面</td><td>N</td></tr><tr><td>align</td><td>String</td><td>left</td><td>文本内容位置，居左/居中/居右。可选项：left/center/right</td><td>N</td></tr><tr><td>allow-input-over-max</td><td>Boolean</td><td>false</td><td><code>1.8.6</code>。超出 <code>maxlength</code> 或 <code>maxcharacter</code> 之后是否允许继续输入</td><td>N</td></tr><tr><td>always-embed</td><td>Boolean</td><td>false</td><td>强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)</td><td>N</td></tr><tr><td>auto-focus</td><td>Boolean</td><td>false</td><td>(即将废弃，请直接使用 focus )自动聚焦，拉起键盘</td><td>N</td></tr><tr><td>borderless</td><td>Boolean</td><td>false</td><td>是否开启无边框模式</td><td>N</td></tr><tr><td>clear-trigger</td><td>String</td><td>always</td><td>清空图标触发方式，仅在输入框有值时有效。可选项：always / focus</td><td>N</td></tr><tr><td>clearable</td><td>Boolean / Object</td><td>false</td><td>是否可清空，默认不启动。值为 <code>true</code> 表示使用默认清空按钮，值为 <code>Object</code> 表示透传至 <code>icon</code></td><td>N</td></tr><tr><td>confirm-hold</td><td>Boolean</td><td>false</td><td>点击键盘右下角按钮时是否保持键盘不收起</td><td>N</td></tr><tr><td>confirm-type</td><td>String</td><td>done</td><td>设置键盘右下角按钮的文字，仅在type=&#39;text&#39;时生效。<br>具体释义：<br><code>send</code> 右下角按钮为“发送”；<br><code>search</code> 右下角按钮为“搜索”；<br><code>next</code> 右下角按钮为“下一个”；<br><code>go</code> 右下角按钮为“前往”；<br><code>done</code> 右下角按钮为“完成”。<br><a href="https://developers.weixin.qq.com/miniprogram/dev/component/input.html" target="_blank" rel="noopener noreferrer">小程序官方文档</a>。可选项：send/search/next/go/done</td><td>N</td></tr><tr><td>cursor</td><td>Number</td><td>-1</td><td>必需。指定 focus 时的光标位置</td><td>Y</td></tr><tr><td>cursor-color</td><td>String</td><td>#0052d9</td><td>光标颜色。iOS 下的格式为十六进制颜色值 #000000，安卓下的只支持 default 和 green，Skyline 下无限制</td><td>N</td></tr><tr><td>cursor-spacing</td><td>Number</td><td>0</td><td>指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>undefined</td><td>是否禁用输入框</td><td>N</td></tr><tr><td>error-message</td><td>String</td><td>-</td><td>已废弃。错误提示文本，值为空不显示（废弃属性，如果需要，请更为使用 status 和 tips）</td><td>N</td></tr><tr><td>extra</td><td>Slot</td><td>-</td><td><code>1.9.1</code>。右侧额外内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>focus</td><td>Boolean</td><td>false</td><td>获取焦点</td><td>N</td></tr><tr><td>format</td><td>Function</td><td>-</td><td>指定输入框展示值的格式。TS 类型：<code>InputFormatType</code> <code>type InputFormatType = (value: InputValue) =&gt; string</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/input/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>hold-keyboard</td><td>Boolean</td><td>false</td><td>focus时，点击页面的时候不收起键盘</td><td>N</td></tr><tr><td>label</td><td>String / Slot</td><td>-</td><td>左侧文本。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>layout</td><td>String</td><td>horizontal</td><td>标题输入框布局方式。可选项：vertical/horizontal</td><td>N</td></tr><tr><td>maxcharacter</td><td>Number</td><td>-</td><td>用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。<code>maxcharacter</code> 和 <code>maxlength</code> 二选一使用</td><td>N</td></tr><tr><td>maxlength</td><td>Number</td><td>-1</td><td>用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。<code>maxcharacter</code> 和 <code>maxlength</code> 二选一使用</td><td>N</td></tr><tr><td>password</td><td>Boolean</td><td>false</td><td>已废弃。是否是密码类型（已废弃，请更为使用 type 指定输入框类型）</td><td>N</td></tr><tr><td>placeholder</td><td>String</td><td>undefined</td><td>占位符</td><td>N</td></tr><tr><td>placeholder-class</td><td>String</td><td>input-placeholder</td><td>指定 placeholder 的样式类</td><td>N</td></tr><tr><td>placeholder-style</td><td>String</td><td>-</td><td>必需。指定 placeholder 的样式</td><td>Y</td></tr><tr><td>prefix-icon</td><td>String / Object / Slot</td><td>-</td><td>组件前置图标。值为字符串表示图标名称，值为 <code>Object</code> 类型，表示透传至 <code>icon</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>readonly</td><td>Boolean</td><td>undefined</td><td><code>1.7.1</code>。只读状态</td><td>N</td></tr><tr><td>safe-password-cert-path</td><td>String</td><td>-</td><td>安全键盘加密公钥的路径，只支持包内路径</td><td>N</td></tr><tr><td>safe-password-custom-hash</td><td>String</td><td>-</td><td>安全键盘计算 hash 的算法表达式，如 <code>md5(sha1(&#39;foo&#39; + sha256(sm3(password + &#39;bar&#39;))))</code></td><td>N</td></tr><tr><td>safe-password-length</td><td>Number</td><td>-</td><td>安全键盘输入密码长度</td><td>N</td></tr><tr><td>safe-password-nonce</td><td>String</td><td>-</td><td>安全键盘加密盐值</td><td>N</td></tr><tr><td>safe-password-salt</td><td>String</td><td>-</td><td>安全键盘计算 hash 盐值，若指定custom-hash 则无效</td><td>N</td></tr><tr><td>safe-password-time-stamp</td><td>Number</td><td>-</td><td>安全键盘加密时间戳</td><td>N</td></tr><tr><td>selection-end</td><td>Number</td><td>-1</td><td>光标结束位置，自动聚集时有效，需与 selection-start 搭配使用</td><td>N</td></tr><tr><td>selection-start</td><td>Number</td><td>-1</td><td>光标起始位置，自动聚集时有效，需与 selection-end 搭配使用</td><td>N</td></tr><tr><td>size</td><td>String</td><td>medium</td><td>已废弃。输入框尺寸。可选项：small/medium。TS 类型：<code>&#39;medium&#39; \\| &#39;small&#39;</code></td><td>N</td></tr><tr><td>status</td><td>String</td><td>default</td><td>输入框状态。可选项：default/success/warning/error</td><td>N</td></tr><tr><td>suffix</td><td>String / Slot</td><td>-</td><td>后置图标前的后置内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>suffix-icon</td><td>String / Object / Slot</td><td>-</td><td>后置文本内容。值为字符串则表示图标名称，值为 <code>Object</code> 类型，表示透传至 <code>icon</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>tips</td><td>String / Slot</td><td>-</td><td>输入框下方提示文本，会根据不同的 <code>status</code> 呈现不同的样式。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>type</td><td>String</td><td>text</td><td>输入框类型。可选项：text/number/idcard/digit/safe-password/password/nickname</td><td>N</td></tr><tr><td>value</td><td>String / Number</td><td>-</td><td>输入框的值。TS 类型：<code>InputValue</code> <code>type InputValue = string \\| number</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/input/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-value</td><td>String / Number</td><td>undefined</td><td>输入框的值。非受控属性。TS 类型：<code>InputValue</code> <code>type InputValue = string \\| number</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/input/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="input-events">Input Events <a class="header-anchor" href="#input-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>blur</td><td><code>(value: InputValue)</code></td><td>失去焦点时触发</td></tr><tr><td>change</td><td><code>(value: InputValue, cursor: number, keyCode: number)</code></td><td>输入框值发生变化时触发；cursor 为光标位置；</td></tr><tr><td>clear</td><td>-</td><td>清空按钮点击时触发</td></tr><tr><td>click</td><td><code>(trigger: InputTrigger)</code></td><td><code>0.32.0</code>。点击事件。<a href="https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/input/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type InputTrigger = &#39;suffix&#39; \\| &#39;suffix-icon&#39;;</code><br></td></tr><tr><td>enter</td><td><code>(value: InputValue)</code></td><td>回车键按下时触发</td></tr><tr><td>focus</td><td><code>(value: InputValue)</code></td><td>获得焦点时触发</td></tr><tr><td>keyboardheightchange</td><td><code>(height: number, duration: number)</code></td><td>键盘高度发生变化的时候触发此事件</td></tr><tr><td>nicknamereview</td><td><code>(pass: boolean, timeout: boolean)</code></td><td>用户昵称审核完毕后触发，仅在 type 为 &quot;nickname&quot; 时有效</td></tr><tr><td>validate</td><td><code>(detail: { error?: &#39;exceed-maximum&#39; \\| &#39;below-minimum&#39; })</code></td><td>字数超出限制时触发</td></tr></tbody></table><h3 id="input-external-classes">Input External Classes <a class="header-anchor" href="#input-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-clearable</td><td>清空按钮样式类</td></tr><tr><td>t-class-input</td><td>输入框样式类</td></tr><tr><td>t-class-label</td><td>标签样式类</td></tr><tr><td>t-class-prefix-icon</td><td>前置图标样式类</td></tr><tr><td>t-class-suffix</td><td>后置样式类</td></tr><tr><td>t-class-suffix-icon</td><td>后置图标样式类</td></tr><tr><td>t-class-tips</td><td>提示样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-input-align-items</td><td>center</td><td>-</td></tr><tr><td>--td-input-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-input-border-color</td><td>@component-stroke</td><td>-</td></tr><tr><td>--td-input-border-left-space</td><td>32rpx</td><td>-</td></tr><tr><td>--td-input-border-right-space</td><td>0</td><td>-</td></tr><tr><td>--td-input-default-text-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-input-default-tips-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-input-disabled-text-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-input-error-text-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-input-error-tips-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-input-label-max-width</td><td>5em</td><td>-</td></tr><tr><td>--td-input-label-min-width</td><td>2em</td><td>-</td></tr><tr><td>--td-input-label-text-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-input-placeholder-text-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-input-placeholder-text-font-size</td><td>@font-size-m</td><td>-</td></tr><tr><td>--td-input-prefix-icon-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-input-success-text-color</td><td>@success-color</td><td>-</td></tr><tr><td>--td-input-success-tips-color</td><td>@success-color</td><td>-</td></tr><tr><td>--td-input-suffix-icon-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-input-suffix-text-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-input-vertical-padding</td><td>32rpx</td><td>-</td></tr><tr><td>--td-input-warning-text-color</td><td>@warning-color</td><td>-</td></tr><tr><td>--td-input-warning-tips-color</td><td>@warning-color</td><td>-</td></tr></tbody></table>',9),$t=[Vt],jt={name:"DESIGN"},zt=l('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>需要进行文字输入，且需填写的字数较少时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="呈现在单元格中，可与按钮组件相结合，点击按钮触发相关功能。">呈现在单元格中，可与按钮组件相结合，点击按钮触发相关功能。 <a class="header-anchor" href="#呈现在单元格中，可与按钮组件相结合，点击按钮触发相关功能。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/input/input-1.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="通常使用在表单中进行文字填写，填写状态下可在右侧显示清空输入的按钮，供用户快速清空已输入的内容。">通常使用在表单中进行文字填写，填写状态下可在右侧显示清空输入的按钮，供用户快速清空已输入的内容。 <a class="header-anchor" href="#通常使用在表单中进行文字填写，填写状态下可在右侧显示清空输入的按钮，供用户快速清空已输入的内容。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/input/input-2.png"></div><hr><h5 id="当需要进行较复杂的内容填写，如验证码等，可使用特定类型输入框，结合按钮、图形等辅助元素帮助用户完成流程。">当需要进行较复杂的内容填写，如验证码等，可使用特定类型输入框，结合按钮、图形等辅助元素帮助用户完成流程。 <a class="header-anchor" href="#当需要进行较复杂的内容填写，如验证码等，可使用特定类型输入框，结合按钮、图形等辅助元素帮助用户完成流程。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/input/input-3.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/input/input-4.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="标签、占位符文本简明扼要地描述用户需要输入的内容，标签超过10个字时请考虑使用其它展示方式。">标签、占位符文本简明扼要地描述用户需要输入的内容，标签超过10个字时请考虑使用其它展示方式。 <a class="header-anchor" href="#标签、占位符文本简明扼要地描述用户需要输入的内容，标签超过10个字时请考虑使用其它展示方式。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/input/input-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/input/input-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="当需要输入较长的复杂内容时，建议使用多行文本框输入。">当需要输入较长的复杂内容时，建议使用多行文本框输入。 <a class="header-anchor" href="#当需要输入较长的复杂内容时，建议使用多行文本框输入。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/input/input-7.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./textarea">多行文本框</a></td><td style="text-align:left;">需要进行文字输入，且需填写的字数较多时使用。</td></tr><tr><td style="text-align:left;"><a href="./search">搜索框</a></td><td style="text-align:left;">当需要从海量信息中准确提取准确的内容时使用。</td></tr></tbody></table>',19),Ot=[zt],qt=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760587843653"})],-1),Ft=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function Lt(e,r,o,a,c,p){const n=b("Stackblitz");return f(),g("td-doc-content",C,[t("td-doc-header",T,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,B),s(t("div",null,[t("div",P,[V,t("div",$,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",z,[d(n,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,j)]),O,t("div",q,[t("td-doc-demo",{code:e.DemoexamplemaxlengthCode,language:"markup","show-code":"",mode:"open","demo-name":"maxlength","component-name":" README"},[t("div",L,[d(n,{"demo-name":"maxlength","component-name":" README",code:e.DemoexamplemaxlengthCode},null,8,["code"])])],8,F)]),H,t("div",U,[t("td-doc-demo",{code:e.DemoexamplesuffixCode,language:"markup","show-code":"",mode:"open","demo-name":"suffix","component-name":" README"},[t("div",G,[d(n,{"demo-name":"suffix","component-name":" README",code:e.DemoexamplesuffixCode},null,8,["code"])])],8,Y)]),J,t("div",K,[t("td-doc-demo",{code:e.DemoexampleprefixCode,language:"markup","show-code":"",mode:"open","demo-name":"prefix","component-name":" README"},[t("div",W,[d(n,{"demo-name":"prefix","component-name":" README",code:e.DemoexampleprefixCode},null,8,["code"])])],8,Q)]),X,t("div",Z,[t("td-doc-demo",{code:e.DemoexamplespecialCode,language:"markup","show-code":"",mode:"open","demo-name":"special","component-name":" README"},[t("div",et,[d(n,{"demo-name":"special","component-name":" README",code:e.DemoexamplespecialCode},null,8,["code"])])],8,tt)]),nt,dt,t("div",ot,[t("td-doc-demo",{code:e.DemoexamplestatusCode,language:"markup","show-code":"",mode:"open","demo-name":"status","component-name":" README"},[t("div",at,[d(n,{"demo-name":"status","component-name":" README",code:e.DemoexamplestatusCode},null,8,["code"])])],8,rt)]),st,t("div",it,[t("td-doc-demo",{code:e.DemoexamplelabelCode,language:"markup","show-code":"",mode:"open","demo-name":"label","component-name":" README"},[t("div",ct,[d(n,{"demo-name":"label","component-name":" README",code:e.DemoexamplelabelCode},null,8,["code"])])],8,lt)]),pt,mt,t("div",ut,[t("td-doc-demo",{code:e.DemoexamplealignCode,language:"markup","show-code":"",mode:"open","demo-name":"align","component-name":" README"},[t("div",gt,[d(n,{"demo-name":"align","component-name":" README",code:e.DemoexamplealignCode},null,8,["code"])])],8,ht)]),bt,t("div",ft,[t("td-doc-demo",{code:e.DemoexamplelayoutCode,language:"markup","show-code":"",mode:"open","demo-name":"layout","component-name":" README"},[t("div",vt,[d(n,{"demo-name":"layout","component-name":" README",code:e.DemoexamplelayoutCode},null,8,["code"])])],8,xt)]),_t,t("div",Et,[t("td-doc-demo",{code:e.DemoexamplebannerCode,language:"markup","show-code":"",mode:"open","demo-name":"banner","component-name":" README"},[t("div",wt,[d(n,{"demo-name":"banner","component-name":" README",code:e.DemoexamplebannerCode},null,8,["code"])])],8,yt)]),Dt,t("div",Nt,[t("td-doc-demo",{code:e.DemoexampleborderedCode,language:"markup","show-code":"",mode:"open","demo-name":"bordered","component-name":" README"},[t("div",At,[d(n,{"demo-name":"bordered","component-name":" README",code:e.DemoexampleborderedCode},null,8,["code"])])],8,kt)]),It,t("div",Mt,[t("td-doc-demo",{code:e.DemoexamplecustomCode,language:"markup","show-code":"",mode:"open","demo-name":"custom","component-name":" README"},[t("div",St,[d(n,{"demo-name":"custom","component-name":" README",code:e.DemoexamplecustomCode},null,8,["code"])])],8,Rt)])]),t("td-doc-phone",Ct,Bt,512)],512),[[i,e.tab==="demo"]]),s(t("div",Pt,$t,512),[[i,e.tab==="api"]]),s(t("div",jt,Ot,512),[[i,e.tab==="design"]]),qt,Ft],512)}const Yt=u(S,[["render",Lt]]);export{Yt as default};
