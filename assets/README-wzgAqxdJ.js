import{_ as l,d as p,c as b,a as t,w as r,v as n,b as s,e as m,r as u,o as g}from"./sites-CV9d1pkc.js";import{P as k}from"./prism-bash-zcnM7wlG.js";const f=`<template>
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
`,_=p({data(){return{DemoexamplebaseCode:f}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:o,tdDocTabs:d,tdDocPhone:a}=this.$refs,c="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/back-top/back-top";o&&(o.docInfo={title:"BackTop 返回顶部",desc:"用于当页面过长往下滑动时，帮助用户快速回到页面顶部。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:i})=>this.tab=i),a&&(a.qrcodeUrl=c),k.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),v={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},y={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"navigation","component-name":"back-top"},T=["tab"],x={name:"DEMO"},D=s(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TBackTop <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/back-top/back-top.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="基础返回顶部">基础返回顶部 <a class="header-anchor" href="#基础返回顶部"></a></h3>`,4),E={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},N=["code"],S={slot:"action"},w={ref:"tdDocPhone"},B=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/back-top/back-top",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),C=[B],$=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"back-top"},null,-1),A={name:"API"},P=s('<h3 id="backtop-props">BackTop Props <a class="header-anchor" href="#backtop-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>fixed</td><td>Boolean</td><td>true</td><td>是否绝对定位固定到屏幕右下方</td><td>N</td></tr><tr><td>icon</td><td>String / Boolean / Object / Slot</td><td>true</td><td>图标。值为 <code>false</code> 表示不显示图标。不传表示使用默认图标 <code>&#39;backtop&#39;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>scroll-top</td><td>Number</td><td>0</td><td>页面滚动距离</td><td>N</td></tr><tr><td>text</td><td>String</td><td>&#39;&#39;</td><td>文案</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>round</td><td>预设的样式类型。可选项：round/half-round/round-dark/half-round-dark</td><td>N</td></tr><tr><td>visibility-height</td><td>Number</td><td>200</td><td>滚动高度达到此参数值才出现</td><td>N</td></tr></tbody></table><h3 id="backtop-events">BackTop Events <a class="header-anchor" href="#backtop-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>to-top</td><td>-</td><td>点击触发</td></tr></tbody></table><h3 id="backtop-external-classes">BackTop External Classes <a class="header-anchor" href="#backtop-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-icon</td><td>图标样式类</td></tr><tr><td>t-class-text</td><td>文本样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-back-top-half-round-border-radius</td><td>@radius-round</td><td>-</td></tr><tr><td>--td-back-top-round-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-back-top-round-border-color</td><td>@component-border</td><td>-</td></tr><tr><td>--td-back-top-round-border-radius</td><td>@radius-circle</td><td>-</td></tr><tr><td>--td-back-top-round-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-back-top-round-dark-bg-color</td><td>@gray-color-13</td><td>-</td></tr><tr><td>--td-back-top-round-dark-color</td><td>@text-color-anti</td><td>-</td></tr></tbody></table>',9),M=[P],j={name:"DESIGN"},R=s('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当页面内容过长，用户有快速返回到页面顶部的诉求时使用</p><h3 id="页面布局相关">页面布局相关 <a class="header-anchor" href="#页面布局相关"></a></h3><h5 id="常驻于页面的右下角，方便用户随时点击返回">常驻于页面的右下角，方便用户随时点击返回 <a class="header-anchor" href="#常驻于页面的右下角，方便用户随时点击返回"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/back-top/back-top-1.png"></div></div><hr><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="当用户滚动页面时，为了不影响到用户对内容的浏览体验，建议可将返回顶部按钮最小化或像右侧收起，当用户停止滚动时，再完全显示按钮">当用户滚动页面时，为了不影响到用户对内容的浏览体验，建议可将返回顶部按钮最小化或像右侧收起，当用户停止滚动时，再完全显示按钮 <a class="header-anchor" href="#当用户滚动页面时，为了不影响到用户对内容的浏览体验，建议可将返回顶部按钮最小化或像右侧收起，当用户停止滚动时，再完全显示按钮"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/back-top/back-top-2.gif"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./fab">悬浮按钮</a></td><td style="text-align:left;">当某个操作为全局操作，且为用户高频/业务强推的操作时可使用。</td></tr></tbody></table>',11),q=[R],I=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760435391708"})],-1),O=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function V(e,o,d,a,c,i){const h=u("Stackblitz");return g(),b("td-doc-content",v,[t("td-doc-header",y,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,T),r(t("div",null,[t("div",x,[D,t("div",E,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",S,[m(h,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,N)])]),t("td-doc-phone",w,C,512),$],512),[[n,e.tab==="demo"]]),r(t("div",A,M,512),[[n,e.tab==="api"]]),r(t("div",j,q,512),[[n,e.tab==="design"]]),I,O],512)}const U=l(_,[["render",V]]);export{U as default};
