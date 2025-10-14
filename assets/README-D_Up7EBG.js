import{P as p}from"./prism-bash-zcnM7wlG.js";import{_ as g,d as u,c as b,a as t,w as i,v as r,b as c,e as s,f as l,r as f,o as v}from"./sites-QsDL4Fx-.js";const _=`<template>
  <view>
    <t-toast
      id="t-toast"
      ref="t-toast"
    />
    <view class="box">
      <t-button
        size="large"
        variant="outline"
        theme="primary"
        block
        @click="showText"
      >
        纯文本
      </t-button>
      <t-button
        size="large"
        variant="outline"
        theme="primary"
        block
        @click="showMultiText"
      >
        多行文字
      </t-button>
      <t-button
        size="large"
        variant="outline"
        theme="primary"
        block
        @click="showHorizontalText"
      >
        带横向图标
      </t-button>
      <t-button
        size="large"
        variant="outline"
        theme="primary"
        block
        @click="showVerticalText"
      >
        带竖向图标
      </t-button>
      <t-button
        v-if="!skylineRender"
        size="large"
        variant="outline"
        theme="primary"
        block
        @click="showLoading"
      >
        加载状态
      </t-button>
    </view>
  </view>
</template>

<script>
import tToast from 'tdesign-uniapp/toast/toast';
import tButton from 'tdesign-uniapp/button/button';
// import SkylineBehavior from 'tdesign-site/src/mixins/skyline.js'
import { default as Toast } from 'tdesign-uniapp/toast/index';
export default {
  components: {
    tToast,
    tButton,
  },
  //   mixins: [SkylineBehavior],
  data() {
    return {
      skylineRender: '',
    };
  },
  created() {},
  methods: {
    showText() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '轻提示文字内容',
      });
    },
    showMultiText() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '最多一行展示十个汉字宽度限制最多不超过三行文字',
      });
    },
    showHorizontalText() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '带横向图标',
        icon: 'check-circle',
      });
    },
    showVerticalText() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '带竖向图标',
        icon: 'check-circle',
        direction: 'column',
      });
    },
    showLoading() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '加载中...',
        theme: 'loading',
        direction: 'column',
      });
    },
  },
};
<\/script>
<style>
/* @import './index.css'; */
</style>
`,x=`<template>
  <view>
    <t-toast
      id="t-toast"
      ref="t-toast"
    />

    <view class="box">
      <t-button
        theme="primary"
        size="large"
        variant="outline"
        block
        @click="showSuccessToast"
      >
        成功提示
      </t-button>
      <t-button
        theme="primary"
        size="large"
        variant="outline"
        block
        @click="showWarningToast"
      >
        警告提示
      </t-button>
      <t-button
        theme="primary"
        size="large"
        variant="outline"
        block
        @click="showErrorToast"
      >
        错误提示
      </t-button>
    </view>
  </view>
</template>

<script>
import tToast from 'tdesign-uniapp/toast/toast';
import tButton from 'tdesign-uniapp/button/button';
import Toast from 'tdesign-uniapp/toast/index';
export default {
  components: {
    tToast,
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    showSuccessToast() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '成功文案',
        theme: 'success',
        direction: 'column',
      });
    },
    showWarningToast() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '警告文案',
        theme: 'warning',
        direction: 'column',
      });
    },
    showErrorToast() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '错误文案',
        theme: 'error',
        direction: 'column',
      });
    },
  },
};
<\/script>
<style>
</style>
`,w=`<template>
  <view>
    <t-toast
      id="t-toast"
      ref="t-toast"
    />

    <view class="box">
      <t-button
        theme="primary"
        size="large"
        variant="outline"
        block
        @click="handleToast"
      >
        禁止滑动和点击
      </t-button>
    </view>
  </view>
</template>

<script>
import tToast from 'tdesign-uniapp/toast/toast';
import Toast from 'tdesign-uniapp/toast/index';
import tButton from 'tdesign-uniapp/button/button';


export default {
  components: {
    tToast,
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleToast() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '禁止滑动和点击',
        direction: 'column',
        duration: 3000,
        preventScrollThrough: true,
        icon: 'poweroff',
      });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <t-toast
      id="t-toast"
      ref="t-toast"
    />

    <view class="box">
      <view class="toast-example">
        <t-button
          theme="primary"
          size="large"
          variant="outline"
          @click="handleShow"
        >
          显示提示
        </t-button>
        <t-button
          theme="primary"
          size="large"
          variant="outline"
          @click="handleHide"
        >
          关闭提示
        </t-button>
      </view>
    </view>
  </view>
</template>

<script>
import tToast from 'tdesign-uniapp/toast/toast';
import Toast, { hideToast } from 'tdesign-uniapp/toast/index';
import tButton from 'tdesign-uniapp/button/button';


export default {
  components: {
    tToast,
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleShow() {
      Toast({
        context: this,
        selector: '#t-toast',
        duration: -1,
        message: '轻提示文字内容',
      });
    },
    handleHide() {
      hideToast({
        context: this,
        selector: '#t-toast',
      });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,k=u({data(){return{DemoexamplebaseCode:_,DemoexamplethemeCode:x,DemoexamplecoverCode:w,DemoexamplecloseCode:y}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:a,tdDocTabs:n,tdDocPhone:d}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/toast/toast";a&&(a.docInfo={title:"Toast 轻提示",desc:"用于轻量级反馈或提示，不会打断用户操作。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:h})=>this.tab=h),d&&(d.qrcodeUrl=m),p.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),T={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},E={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"toast"},D=["tab"],S={name:"DEMO"},A=c(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-toast&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/toast/toast&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/l0azMimf7CSu" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="基础提示">基础提示 <a class="header-anchor" href="#基础提示"></a></h3>`,7),C={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},M=["code"],z={slot:"action"},R=t("h3",{id:"组件状态"},[l("组件状态 "),t("a",{class:"header-anchor",href:"#组件状态"})],-1),N={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},q=["code"],B={slot:"action"},j=t("h3",{id:"显示遮罩"},[l("显示遮罩 "),t("a",{class:"header-anchor",href:"#显示遮罩"})],-1),P={class:"tdesign-demo-wrapper tdesign-demo-item-- README-cover tdesign-demo-item-- README"},$=["code"],O={slot:"action"},V=t("h3",{id:"手动关闭"},[l("手动关闭 "),t("a",{class:"header-anchor",href:"#手动关闭"})],-1),H={class:"tdesign-demo-wrapper tdesign-demo-item-- README-close tdesign-demo-item-- README"},I=["code"],L={slot:"action"},U={ref:"tdDocPhone"},W=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/toast/toast",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),G=[W],J=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"toast"},null,-1),F={name:"API"},K=c('<h3 id="toast-props">Toast Props <a class="header-anchor" href="#toast-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>direction</td><td>String</td><td>row</td><td>图标排列方式。可选项：row/column</td><td>N</td></tr><tr><td>duration</td><td>Number</td><td>2000</td><td>弹窗显示毫秒数</td><td>N</td></tr><tr><td>icon</td><td>String / Object / Slot</td><td>-</td><td>自定义图标。传入对象则透传至 Icon 组件。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>message</td><td>String / Slot</td><td>-</td><td>弹窗显示文字。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>overlay-props</td><td>Object</td><td>-</td><td>遮罩层属性，透传至 Overlay。TS 类型：<code>OverlayProps </code>，<a href="./overlay?tab=api">Overlay API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/toast/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>placement</td><td>String</td><td>middle</td><td>弹窗展示位置。可选项： top/middle/bottom</td><td>N</td></tr><tr><td>prevent-scroll-through</td><td>Boolean</td><td>false</td><td>防止滚动穿透，即不允许点击和滚动</td><td>N</td></tr><tr><td>show-overlay</td><td>Boolean</td><td>false</td><td>是否显示遮罩层</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>-</td><td>提示类型。可选项：loading/success/warning/error</td><td>N</td></tr><tr><td>using-custom-navbar</td><td>Boolean</td><td>false</td><td>是否使用了自定义导航栏</td><td>N</td></tr></tbody></table><h3 id="toast-events">Toast Events <a class="header-anchor" href="#toast-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>close</td><td>-</td><td>轻提示隐藏的时候触发</td></tr><tr><td>destroy</td><td>-</td><td>轻提示销毁的时候触发</td></tr></tbody></table><h3 id="toast-external-classes">Toast External Classes <a class="header-anchor" href="#toast-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-toast-bg-color</td><td>@mask-active</td><td>-</td></tr><tr><td>--td-toast-color</td><td>@text-color-anti</td><td>-</td></tr><tr><td>--td-toast-column-icon-size</td><td>64rpx</td><td>-</td></tr><tr><td>--td-toast-max-width</td><td>374rpx</td><td>-</td></tr><tr><td>--td-toast-radius</td><td>8rpx</td><td>-</td></tr><tr><td>--td-toast-row-icon-size</td><td>48rpx</td><td>-</td></tr></tbody></table>',9),Q=[K],X={name:"DESIGN"},Y=c('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要对用户进行轻量反馈或提示，且不需要用户进行操作时使用，轻提示会在一段时间后自动消失。</p><h3 id="与页面布局相关">与页面布局相关 <a class="header-anchor" href="#与页面布局相关"></a></h3><h5 id="轻提示通常放置在页面正中间，一段时间后自动消失。">轻提示通常放置在页面正中间，一段时间后自动消失。 <a class="header-anchor" href="#轻提示通常放置在页面正中间，一段时间后自动消失。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/toast/toast-1.png"></div></div><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="轻提示经常和加载搭配使用，在页面内进行某项操作后，用作加载反馈。">轻提示经常和加载搭配使用，在页面内进行某项操作后，用作加载反馈。 <a class="header-anchor" href="#轻提示经常和加载搭配使用，在页面内进行某项操作后，用作加载反馈。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/toast/toast-2.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="轻提示的文案内容通常不超过30个字，确保用户有充足的时间进行阅读，若需要提示较长的文本内容，建议使用其它交互方式。">轻提示的文案内容通常不超过30个字，确保用户有充足的时间进行阅读，若需要提示较长的文本内容，建议使用其它交互方式。 <a class="header-anchor" href="#轻提示的文案内容通常不超过30个字，确保用户有充足的时间进行阅读，若需要提示较长的文本内容，建议使用其它交互方式。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/toast/toast-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/toast/toast-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./message">消息通知</a></td><td style="text-align:left;">当需要对用户进行较轻量的反馈或提示，且不需要、或只需要少量用户交互时使用，可以自动消失或通过点击关闭。</td></tr><tr><td style="text-align:left;"><a href="./notice-bar">公告栏</a></td><td style="text-align:left;">当需要对用户进行较明显的反馈或提示，需要用户关注时使用，一段时间后不会自动消失。</td></tr></tbody></table>',13),Z=[Y],tt=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416343532"})],-1),et=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function nt(e,a,n,d,m,h){const o=f("Stackblitz");return v(),b("td-doc-content",T,[t("td-doc-header",E,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,D),i(t("div",null,[t("div",S,[A,t("div",C,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",z,[s(o,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,M)]),R,t("div",N,[t("td-doc-demo",{code:e.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",B,[s(o,{"demo-name":"theme","component-name":" README",code:e.DemoexamplethemeCode},null,8,["code"])])],8,q)]),j,t("div",P,[t("td-doc-demo",{code:e.DemoexamplecoverCode,language:"markup","show-code":"",mode:"open","demo-name":"cover","component-name":" README"},[t("div",O,[s(o,{"demo-name":"cover","component-name":" README",code:e.DemoexamplecoverCode},null,8,["code"])])],8,$)]),V,t("div",H,[t("td-doc-demo",{code:e.DemoexamplecloseCode,language:"markup","show-code":"",mode:"open","demo-name":"close","component-name":" README"},[t("div",L,[s(o,{"demo-name":"close","component-name":" README",code:e.DemoexamplecloseCode},null,8,["code"])])],8,I)])]),t("td-doc-phone",U,G,512),J],512),[[r,e.tab==="demo"]]),i(t("div",F,Q,512),[[r,e.tab==="api"]]),i(t("div",X,Z,512),[[r,e.tab==="design"]]),tt,et],512)}const at=g(k,[["render",nt]]);export{at as default};
