import{_ as h,d as p,c as m,a as t,w as n,v as s,b as l,e as b,r as u,o as v}from"./sites-DDA63Ty2.js";import{P as y}from"./prism-bash-zcnM7wlG.js";const _=`<template>
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
import tOverlay from 'tdesign-uniapp/overlay/overlay.vue';
import tButton from 'tdesign-uniapp/button/button.vue';
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
`,f=p({data(){return{DemoexamplebaseCode:_}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:o,tdDocTabs:d,tdDocPhone:a}=this.$refs,r="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/overlay/overlay";o&&(o.docInfo={title:"Overlay 遮罩层",desc:"通过遮罩层，可以强调部分内容"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:i})=>this.tab=i),a&&(a.qrcodeUrl=r),y.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),g={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},k={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"overlay"},D=["tab"],E={name:"DEMO"},N=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TOverlay <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/overlay/overlay.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="基础使用">基础使用 <a class="header-anchor" href="#基础使用"></a></h3>`,4),C={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},w=["code"],O={slot:"action"},S={ref:"tdDocPhone"},$=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/overlay/overlay",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),A=[$],B={name:"API"},P=l('<h3 id="overlay-props">Overlay Props <a class="header-anchor" href="#overlay-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>background-color</td><td>String</td><td>-</td><td>遮罩层的背景色</td><td>N</td></tr><tr><td>duration</td><td>Number</td><td>300</td><td>背景色过渡时间，单位毫秒</td><td>N</td></tr><tr><td>prevent-scroll-through</td><td>Boolean</td><td>true</td><td>防止滚动穿透，即不允许点击和滚动</td><td>N</td></tr><tr><td>using-custom-navbar</td><td>Boolean</td><td>false</td><td>是否使用了自定义导航栏</td><td>N</td></tr><tr><td>visible</td><td>Boolean</td><td>false</td><td>是否展示</td><td>N</td></tr><tr><td>z-index</td><td>Number</td><td>11000</td><td>遮罩层级</td><td>N</td></tr></tbody></table><h3 id="overlay-events">Overlay Events <a class="header-anchor" href="#overlay-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>click</td><td><code>({ visible: boolean })</code></td><td>点击遮罩时触发</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-overlay-bg-color</td><td>@mask-active</td><td>-</td></tr><tr><td>--td-overlay-transition-duration</td><td>300ms</td><td>-</td></tr></tbody></table>',7),x=[P],M={name:"DESIGN"},R=t("td-doc-empty",null,null,-1),j=[R],q=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760547040757"})],-1),z=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function I(e,o,d,a,r,i){const c=u("Stackblitz");return v(),m("td-doc-content",g,[t("td-doc-header",k,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,D),n(t("div",null,[t("div",E,[N,t("div",C,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",O,[b(c,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,w)])]),t("td-doc-phone",S,A,512)],512),[[s,e.tab==="demo"]]),n(t("div",B,x,512),[[s,e.tab==="api"]]),n(t("div",M,j,512),[[s,e.tab==="design"]]),q,z],512)}const H=h(f,[["render",I]]);export{H as default};
