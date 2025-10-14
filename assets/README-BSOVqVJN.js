import{_ as g,d as h,c as p,a as t,w as a,v as d,b as r,e as m,f as b,r as u,o as f}from"./sites-Bu3uYr-A.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const k=`<template>
  <view>
    <t-message
      id="t-message"
      ref="t-message"
    />

    <t-message
      :visible="visible"
      :offset="[90, 32]"
      content="这是一条通过组件调用的消息通知"
      @duration-end="() => visible = false"
    />

    <view class="message-example--base">
      <t-button
        t-class="external-class"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showTextMessage"
      >
        纯文字的通知
      </t-button>

      <t-button
        t-class="external-class"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showIconMessage"
      >
        带图标的通知
      </t-button>

      <t-button
        t-class="external-class"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showCloseMessage"
      >
        带关闭的通知
      </t-button>

      <t-button
        t-class="external-class"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showScrollMessage"
      >
        可滚动的通知
      </t-button>

      <t-button
        t-class="external-class"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showBtnMessage"
      >
        带按钮的通知
      </t-button>

      <t-button
        t-class="external-class"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showComponent"
      >
        组件调用
      </t-button>
    </view>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tMessage from 'tdesign-uniapp/message/message';
import Message from 'tdesign-uniapp/message/index';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tButton,
    tMessage,
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {},
  methods: {
    showTextMessage() {
      Message.info({
        context: this,
        offset: [90, 32],
        duration: 5000,
        icon: false,
        // single: false, // 打开注释体验多个消息叠加效果
        content: '这是一条纯文字的消息通知 5s消失',
      });
    },
    showIconMessage() {
      Message.info({
        context: this,
        offset: ['180rpx', '32rpx'],
        duration: 5000,
        content: '这是一条带图标的消息通知 5s消失',
      });
    },
    showCloseMessage() {
      Message.info({
        context: this,
        offset: ['180rpx', 32],
        content: '这是一条带关闭的消息通知',
        duration: -1,
        link: {
          content: '按钮',
          navigatorProps: {
            url: '/page/xxx/xxx',
          },
        },
        closeBtn: true,
      });
    },
    showScrollMessage() {
      Message.info({
        context: this,
        offset: [90, 32],
        marquee: {
          speed: 50,
          loop: -1,
          delay: 5000,
        },
        icon: false,
        content: '这是一条滚动的通知信息',
        duration: -1,
      });
    },
    showBtnMessage() {
      Message.info({
        context: this,
        offset: [90, 32],
        icon: 'notification-filled',
        content: '这是一条带操作的消息通知',
        duration: -1,
        link: {
          content: '链接',
          navigatorProps: {
            url: '/pages/home/home',
          },
        },
      });
    },
    showSingleMessage() {
      Message.info({
        context: this,
        offset: [90, 32],
        duration: 5000,
        icon: false,
        content: '这是一条纯文字的消息通知且仅显示一条',
        single: true,
      });
    },
    showComponent() {
      this.visible = true;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,x=`<template>
  <view>
    <t-message
      id="t-message"
      ref="t-message"
    />

    <view class="message-example--theme">
      <t-button
        t-class="external-class"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showInfoMessage"
      >
        普通通知
      </t-button>

      <t-button
        t-class="external-class"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showSuccessMessage"
      >
        成功通知
      </t-button>

      <t-button
        t-class="external-class"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showWarnMessage"
      >
        警示通知
      </t-button>

      <t-button
        t-class="external-class"
        theme="primary"
        variant="outline"
        size="large"
        block
        @click="showErrorMessage"
      >
        错误通知
      </t-button>
    </view>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tMessage from 'tdesign-uniapp/message/message';
import Message from 'tdesign-uniapp/message/index';
export default {
  components: {
    tButton,
    tMessage,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    showInfoMessage() {
      Message.info({
        context: this,
        offset: [90, 32],
        duration: 5000,
        content: '这是一条普通通知信息',
      });
    },
    showWarnMessage() {
      Message.warning({
        context: this,
        offset: [90, 32],
        duration: 5000,
        content: '这是一条需要用户关注到的警示通知',
      });
    },
    showSuccessMessage() {
      Message.success({
        context: this,
        offset: [90, 32],
        duration: 5000,
        content: '这是一条成功的提示消息',
      });
    },
    showErrorMessage() {
      Message.error({
        context: this,
        offset: [90, 32],
        duration: 5000,
        content: '这是一条错误提示通知',
      });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=h({data(){return{DemoexamplebaseCode:k,DemoexamplethemeCode:x}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:s,tdDocTabs:n,tdDocPhone:o}=this.$refs,i="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/message/message";s&&(s.docInfo={title:"Message 消息通知",desc:"用于轻量级反馈或提示，不会打断用户操作。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:c})=>this.tab=c),o&&(o.qrcodeUrl=i),v.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),M={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},y={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"message"},w=["tab"],S={name:"DEMO"},D=r(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/message/message&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="引入-api">引入 API <a class="header-anchor" href="#引入-api"></a></h3><p>若以 API 形式调用 Message，则需在页面 <code>page.js</code> 中引入组件 API：</p><div class="language-js"><pre><code><span class="token keyword">import</span> Message <span class="token keyword">from</span> <span class="token string">&#39;tdesign-miniprogram/message/index&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/Sr8qhimx7bSW" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>弹窗内容为纯文本、标题和副标题、带输入框，用 API <code>Message.info</code> 方法调用反馈类对话框。</p>`,11),E={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},N=["code"],T={slot:"action"},q=t("h3",{id:"组件状态"},[b("组件状态 "),t("a",{class:"header-anchor",href:"#组件状态"})],-1),A=t("p",null,"消息通知类型为普通（info）、警示（warning）、成功（success）、错误（error）",-1),C={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},B=["code"],j={slot:"action"},z={ref:"tdDocPhone"},I=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/message/message",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),P=[I],R=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"message"},null,-1),$={name:"API"},O=r('<h3 id="message-props">Message Props <a class="header-anchor" href="#message-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>action</td><td>String / Slot</td><td>-</td><td>已废弃。操作。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>align</td><td>String</td><td>left</td><td>文本对齐方式。可选项：left/center。TS 类型：<code>MessageAlignType</code> <code>type MessageAlignType = &#39;left&#39; \\| &#39;center&#39;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/message/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>close-btn</td><td>String / Boolean / Object / Slot</td><td>false</td><td>关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string ，如：&#39;user&#39;，则显示组件内置图标。值类型为 object ，则会透传至 icon 组件。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>content</td><td>String / Slot</td><td>-</td><td>用于自定义消息弹出内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>duration</td><td>Number</td><td>3000</td><td>消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器</td><td>N</td></tr><tr><td>gap</td><td>String / Number / Boolean</td><td>12</td><td>两条 <code>message</code> 之间的间距</td><td>N</td></tr><tr><td>icon</td><td>String / Boolean / Object / Slot</td><td>true</td><td>消息提醒前面的图标，可以自定义。值为 true 则根据 theme 显示对应的图标，值为 false 则不显示图标。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string ，如：&#39;info&#39;，则显示组件内置图标。值类型为 object ，则会透传至 icon 组件。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>link</td><td>String / Object / Slot</td><td>-</td><td>链接名称。值为字符串表示链接名称，值为 <code>Object</code> 类型，表示透传至 <code>Link</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>marquee</td><td>Boolean / Object</td><td>false</td><td>跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放。TS 类型：<code>boolean \\| MessageMarquee</code> <code>interface MessageMarquee { speed?: number; loop?: number; delay?: number }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/message/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>offset</td><td>Array</td><td>-</td><td>相对于 placement 的偏移量，默认单位 rpx。示例：[-10, 20] 或 [&#39;10rpx&#39;, &#39;8rpx&#39;]。TS 类型：<code>Array&lt;string \\| number&gt;</code></td><td>N</td></tr><tr><td>single</td><td>Boolean</td><td>true</td><td>是否保持仅显示一条信息</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>info</td><td>消息组件风格。可选项：info/success/warning/error。TS 类型：<code>MessageThemeList</code> <code>type MessageThemeList = &#39;info&#39; \\| &#39;success&#39; \\| &#39;warning&#39; \\| &#39;error&#39;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/message/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>visible</td><td>Boolean</td><td>false</td><td>是否显示，隐藏时默认销毁组件</td><td>N</td></tr><tr><td>default-visible</td><td>Boolean</td><td>undefined</td><td>是否显示，隐藏时默认销毁组件。非受控属性</td><td>N</td></tr><tr><td>z-index</td><td>Number</td><td>15000</td><td>元素层级，样式默认为 15000</td><td>N</td></tr></tbody></table><h3 id="message-events">Message Events <a class="header-anchor" href="#message-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>action-btn-click</td><td>-</td><td>已废弃。当操作按钮存在时，用户点击操作按钮时触发</td></tr><tr><td>close-btn-click</td><td>-</td><td>当关闭按钮存在时，用户点击关闭按钮触发</td></tr><tr><td>duration-end</td><td>-</td><td>计时结束后触发</td></tr><tr><td>link-click</td><td>-</td><td>当<code>link</code>链接存在时，点击链接文本时触发</td></tr></tbody></table><h3 id="message-external-classes">Message External Classes <a class="header-anchor" href="#message-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-close-btn</td><td>关闭按钮样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-icon</td><td>图标样式类</td></tr><tr><td>t-class-link</td><td>链接样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-message-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-message-border-radius</td><td>@radius-default</td><td>-</td></tr><tr><td>--td-message-box-shadow</td><td>@shadow-4</td><td>-</td></tr><tr><td>--td-message-close-icon-color</td><td>@font-gray-3</td><td>-</td></tr><tr><td>--td-message-content-font-color</td><td>@font-gray-1</td><td>-</td></tr><tr><td>--td-message-error-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-message-info-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-message-success-color</td><td>@success-color</td><td>-</td></tr><tr><td>--td-message-warning-color</td><td>@warning-color</td><td>-</td></tr></tbody></table>',9),V=[O],L={name:"DESIGN"},W=r('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要对用户进行较轻量的反馈或提示，可以自动消失或通过点击关闭，通常由用户触发。</p><h3 id="与页面布局相关">与页面布局相关 <a class="header-anchor" href="#与页面布局相关"></a></h3><h5 id="通知通常出现在页面顶部，叠加在页面的上层，可在一段时间后自动消失、或用户点击关闭。">通知通常出现在页面顶部，叠加在页面的上层，可在一段时间后自动消失、或用户点击关闭。 <a class="header-anchor" href="#通知通常出现在页面顶部，叠加在页面的上层，可在一段时间后自动消失、或用户点击关闭。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/message/message-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/message/message-2.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="当需要在通知栏中展示按钮时，不建议超过1个。若需要使用更多按钮，建议使用其它交互方式。">当需要在通知栏中展示按钮时，不建议超过1个。若需要使用更多按钮，建议使用其它交互方式。 <a class="header-anchor" href="#当需要在通知栏中展示按钮时，不建议超过1个。若需要使用更多按钮，建议使用其它交互方式。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/message/message-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="消息通知是一种相对轻量、短时的反馈方式，尽量避免在页面中同时堆叠多个消息通知，用户可能会来不及关注它们。">消息通知是一种相对轻量、短时的反馈方式，尽量避免在页面中同时堆叠多个消息通知，用户可能会来不及关注它们。 <a class="header-anchor" href="#消息通知是一种相对轻量、短时的反馈方式，尽量避免在页面中同时堆叠多个消息通知，用户可能会来不及关注它们。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/message/message-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./toast">轻提示</a></td><td style="text-align:left;">当需要对用户进行轻量反馈或提示，且不需要用户进行操作时使用，轻提示会在一段时间后自动消失。</td></tr><tr><td style="text-align:left;"><a href="./notice-bar">公告栏</a></td><td style="text-align:left;">当需要对用户进行较明显的反馈或提示，需要用户关注时使用，一段时间后不会自动消失，通常是自动触发。</td></tr></tbody></table>',13),H=[W],U=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416906885"})],-1),G=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function J(e,s,n,o,i,c){const l=u("Stackblitz");return f(),p("td-doc-content",M,[t("td-doc-header",y,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,w),a(t("div",null,[t("div",S,[D,t("div",E,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",T,[m(l,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,N)]),q,A,t("div",C,[t("td-doc-demo",{code:e.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",j,[m(l,{"demo-name":"theme","component-name":" README",code:e.DemoexamplethemeCode},null,8,["code"])])],8,B)])]),t("td-doc-phone",z,P,512),R],512),[[d,e.tab==="demo"]]),a(t("div",$,V,512),[[d,e.tab==="api"]]),a(t("div",L,H,512),[[d,e.tab==="design"]]),U,G],512)}const Q=g(_,[["render",J]]);export{Q as default};
