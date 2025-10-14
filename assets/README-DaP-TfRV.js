import{_ as m,d as b,c as l,a as t,w as a,v as s,b as h,f as u,e as v,r as _,o as c}from"./sites-CFYcBLxc.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const g=`<template>
  <view>
    <t-overlay
      :visible="visible"
      :duration="500"
      @click="handleOverlayClick"
    />

    <t-button
      block
      size="large"
      theme="primary"
      variant="outline"
      @click="handleClick"
    >
      基础用法
    </t-button>
  </view>
</template>

<script>
import tOverlay from 'tdesign-uniapp/overlay/overlay';
import tButton from 'tdesign-uniapp/button/button';
export default {
  components: {
    tOverlay,
    tButton,
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {},
  methods: {
    handleClick() {
      this.visible = true;
    },
    handleOverlayClick() {
      this.visible = !this.visible;
    },
  },
};
<\/script>
<style>
/* @import './index.css'; */
</style>
`,y=b({data(){return{DemoexamplebaseCode:g}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:d,tdDocTabs:o,tdDocPhone:n}=this.$refs,r="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/overlay/overlay";d&&(d.docInfo={title:"Overlay 遮罩层",desc:"通过遮罩层，可以强调部分内容"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:i})=>this.tab=i),n&&(n.qrcodeUrl=r),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),k={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},x={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"overlay"},D=["tab"],q={name:"DEMO"},E={style:{background:"#ecf2fe",display:"flex","align-items":"center","line-height":"20px",padding:"14px 24px","border-radius":"3px",color:"#555a65"}},N={fill:"none",viewBox:"0 0 16 16",width:"16px",height:"16px",style:{"margin-right":"5px"}},S=t("path",{fill:"#0052d9",d:"M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z",fillOpacity:"0.9"},null,-1),C=[S],w=h(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-overlay&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/overlay/overlay&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/nS8fQimZ7cSG" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="基础使用">基础使用 <a class="header-anchor" href="#基础使用"></a></h3>`,7),O={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},A=["code"],B={slot:"action"},$={ref:"tdDocPhone"},z=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/overlay/overlay",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),M=[z],V=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"overlay"},null,-1),P={name:"API"},j=h('<h3 id="overlay-props">Overlay Props <a class="header-anchor" href="#overlay-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>background-color</td><td>String</td><td>-</td><td>遮罩层的背景色</td><td>N</td></tr><tr><td>duration</td><td>Number</td><td>300</td><td>背景色过渡时间，单位毫秒</td><td>N</td></tr><tr><td>prevent-scroll-through</td><td>Boolean</td><td>true</td><td>防止滚动穿透，即不允许点击和滚动</td><td>N</td></tr><tr><td>using-custom-navbar</td><td>Boolean</td><td>false</td><td>是否使用了自定义导航栏</td><td>N</td></tr><tr><td>visible</td><td>Boolean</td><td>false</td><td>是否展示</td><td>N</td></tr><tr><td>z-index</td><td>Number</td><td>11000</td><td>遮罩层级</td><td>N</td></tr></tbody></table><h3 id="overlay-events">Overlay Events <a class="header-anchor" href="#overlay-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>click</td><td><code>({ visible: boolean })</code></td><td>点击遮罩时触发</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-overlay-bg-color</td><td>@mask-active</td><td>-</td></tr><tr><td>--td-overlay-transition-duration</td><td>300ms</td><td>-</td></tr></tbody></table>',7),R=[j],I={name:"DESIGN"},T=t("td-doc-empty",null,null,-1),H=[T],G=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416658051"})],-1),U=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function J(e,d,o,n,r,i){const p=_("Stackblitz");return c(),l("td-doc-content",k,[t("td-doc-header",x,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,D),a(t("div",null,[t("div",q,[t("div",E,[(c(),l("svg",N,C)),u(" 该组件于 0.10.0 版本上线，请留意版本。 ")]),w,t("div",O,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",B,[v(p,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,A)])]),t("td-doc-phone",$,M,512),V],512),[[s,e.tab==="demo"]]),a(t("div",P,R,512),[[s,e.tab==="api"]]),a(t("div",I,H,512),[[s,e.tab==="design"]]),G,U],512)}const F=m(y,[["render",J]]);export{F as default};
