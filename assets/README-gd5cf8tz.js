import{_ as h,d as l,c as b,a as t,w as n,v as r,b as s,e as m,r as u,o as g}from"./sites-_W3AzEs2.js";import{P as k}from"./prism-bash-zcnM7wlG.js";const f=`<template>
  <view>
    <t-back-top
      :theme="backTopTheme"
      :text="backTopText"
      :scroll-top="scrollTop"
      @to-top="onToTop"
    />
  </view>
</template>

<script>
import tBackTop from 'tdesign-uniapp/back-top/back-top.vue';
export default {
  components: {
    tBackTop,
  },
  props: {
    scrollTop: {
      type: Number,
      default: 0,
    },
  },
  emits: [
    'to-top',
  ],
  data() {
    return {
      backTopTheme: 'round',
      backTopText: '顶部',
    };
  },
  created() {},
  methods: {
    onToTop(e) {
      this.$emit('to-top', {
        detail: e,
      });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=l({data(){return{DemoexamplebaseCode:f}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:d,tdDocTabs:o,tdDocPhone:a}=this.$refs,c="https://novlan1.github.io/tdesign-uniapp#/pages-more/back-top/back-top";d&&(d.docInfo={title:"BackTop 返回顶部",desc:"用于当页面过长往下滑动时，帮助用户快速回到页面顶部。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:i})=>this.tab=i),a&&(a.qrcodeUrl=c),k.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),v={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},y={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"navigation","component-name":"back-top"},x=["tab"],T={name:"DEMO"},D=s(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token property">&quot;t-back-top&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/back-top/back-top&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/2aR1demj7aS2" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><img src="https://tdesign.gtimg.com/miniprogram/readme/backtop-1.png" width="375px" height="50%"><h3 id="基础返回顶部">基础返回顶部 <a class="header-anchor" href="#基础返回顶部"></a></h3>`,8),S={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},q=["code"],E={slot:"action"},N={ref:"tdDocPhone"},w=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp#/pages-more/back-top/back-top",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),B=[w],C=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"back-top"},null,-1),$={name:"API"},j=s('<h3 id="backtop-props">BackTop Props <a class="header-anchor" href="#backtop-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>fixed</td><td>Boolean</td><td>true</td><td>是否绝对定位固定到屏幕右下方</td><td>N</td></tr><tr><td>icon</td><td>String / Boolean / Object / Slot</td><td>true</td><td>图标。值为 <code>false</code> 表示不显示图标。不传表示使用默认图标 <code>&#39;backtop&#39;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>scroll-top</td><td>Number</td><td>0</td><td>页面滚动距离</td><td>N</td></tr><tr><td>text</td><td>String</td><td>&#39;&#39;</td><td>文案</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>round</td><td>预设的样式类型。可选项：round/half-round/round-dark/half-round-dark</td><td>N</td></tr><tr><td>visibility-height</td><td>Number</td><td>200</td><td>滚动高度达到此参数值才出现</td><td>N</td></tr></tbody></table><h3 id="backtop-events">BackTop Events <a class="header-anchor" href="#backtop-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>to-top</td><td>-</td><td>点击触发</td></tr></tbody></table><h3 id="backtop-external-classes">BackTop External Classes <a class="header-anchor" href="#backtop-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-icon</td><td>图标样式类</td></tr><tr><td>t-class-text</td><td>文本样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-back-top-half-round-border-radius</td><td>@radius-round</td><td>-</td></tr><tr><td>--td-back-top-round-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-back-top-round-border-color</td><td>@component-border</td><td>-</td></tr><tr><td>--td-back-top-round-border-radius</td><td>@radius-circle</td><td>-</td></tr><tr><td>--td-back-top-round-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-back-top-round-dark-bg-color</td><td>@gray-color-13</td><td>-</td></tr><tr><td>--td-back-top-round-dark-color</td><td>@text-color-anti</td><td>-</td></tr></tbody></table>',9),A=[j],P={name:"DESIGN"},M=s('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当页面内容过长，用户有快速返回到页面顶部的诉求时使用</p><h3 id="页面布局相关">页面布局相关 <a class="header-anchor" href="#页面布局相关"></a></h3><h5 id="常驻于页面的右下角，方便用户随时点击返回">常驻于页面的右下角，方便用户随时点击返回 <a class="header-anchor" href="#常驻于页面的右下角，方便用户随时点击返回"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/back-top/back-top-1.png"></div></div><hr><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="当用户滚动页面时，为了不影响到用户对内容的浏览体验，建议可将返回顶部按钮最小化或像右侧收起，当用户停止滚动时，再完全显示按钮">当用户滚动页面时，为了不影响到用户对内容的浏览体验，建议可将返回顶部按钮最小化或像右侧收起，当用户停止滚动时，再完全显示按钮 <a class="header-anchor" href="#当用户滚动页面时，为了不影响到用户对内容的浏览体验，建议可将返回顶部按钮最小化或像右侧收起，当用户停止滚动时，再完全显示按钮"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/back-top/back-top-2.gif"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./fab">悬浮按钮</a></td><td style="text-align:left;">当某个操作为全局操作，且为用户高频/业务强推的操作时可使用。</td></tr></tbody></table>',11),R=[M],I=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416085513"})],-1),O=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function V(e,d,o,a,c,i){const p=u("Stackblitz");return g(),b("td-doc-content",v,[t("td-doc-header",y,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,x),n(t("div",null,[t("div",T,[D,t("div",S,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",E,[m(p,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,q)])]),t("td-doc-phone",N,B,512),C],512),[[r,e.tab==="demo"]]),n(t("div",$,A,512),[[r,e.tab==="api"]]),n(t("div",P,R,512),[[r,e.tab==="design"]]),I,O],512)}const U=h(_,[["render",V]]);export{U as default};
