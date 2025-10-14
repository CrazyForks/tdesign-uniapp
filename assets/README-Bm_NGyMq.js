import{_ as h,d as u,c as b,a as t,w as a,v as i,b as l,e as r,f as m,r as f,o as g}from"./sites-_W3AzEs2.js";import{P as y}from"./prism-bash-zcnM7wlG.js";const k=`<template>
  <view>
    <t-sticky :offset-top="navbarHeight">
      <t-button
        size="large"
        theme="primary"
        t-class="external-class"
      >
        基础吸顶
      </t-button>
    </t-sticky>
  </view>
</template>

<script>
import tSticky from 'tdesign-uniapp/sticky/sticky';
import tButton from 'tdesign-uniapp/button/button';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tSticky,
    tButton,
  },
  props: {
    navbarHeight: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <t-sticky :offset-top="40 + navbarHeight">
      <t-button
        size="large"
        theme="danger"
        t-class="external-class"
      >
        吸顶距离
      </t-button>
    </t-sticky>
  </view>
</template>

<script>
import tSticky from 'tdesign-uniapp/sticky/sticky';
import tButton from 'tdesign-uniapp/button/button';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tSticky,
    tButton,
  },
  props: {
    navbarHeight: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,v=`<template>
  <view class="wrapper">
    <t-sticky
      :container="container"
      :offset-top="navbarHeight"
    >
      <t-button
        size="large"
        t-class="external-class green-button"
        hover-class="hover-class "
      >
        指定容器
      </t-button>
    </t-sticky>
  </view>
</template>

<script>
import tSticky from 'tdesign-uniapp/sticky/sticky';
import tButton from 'tdesign-uniapp/button/button';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tSticky,
    tButton,
  },
  props: {
    navbarHeight: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      container: null,
    };
  },
  mounted() {
    // 处理小程序 ready 生命周期
    this.$nextTick(() => this.ready());
  },
  created() {},
  methods: {
    ready() {
      this.container = () => uni.createSelectorQuery().in(this)
        .select('.wrapper');
    },
  },
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,D=u({data(){return{DemoexamplebaseCode:k,DemoexampleoffsetCode:_,DemoexamplecontainerCode:v}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:o,tdDocTabs:n,tdDocPhone:s}=this.$refs,c="https://novlan1.github.io/tdesign-uniapp#/pages-more/sticky/sticky";o&&(o.docInfo={title:"Sticky 吸顶",desc:"用于常驻页面顶部的信息、操作展示。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:p})=>this.tab=p),s&&(s.qrcodeUrl=c),y.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),x={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},E={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"sticky"},w=["tab"],S={name:"DEMO"},N=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-sticky&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/sticky/sticky&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p>将内容包裹在 <code>Sticky</code> 组件内</p><img src="https://tdesign.gtimg.com/miniprogram/readme/sticky.gif" width="375px" height="50%"><p><a href="https://developers.weixin.qq.com/s/mJ7HTiml7NSM" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="基础吸顶">基础吸顶 <a class="header-anchor" href="#基础吸顶"></a></h3>`,9),q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},A=["code"],C={slot:"action"},M=t("h3",{id:"吸顶距离"},[m("吸顶距离 "),t("a",{class:"header-anchor",href:"#吸顶距离"})],-1),R={class:"tdesign-demo-wrapper tdesign-demo-item-- README-offset tdesign-demo-item-- README"},B=["code"],$={slot:"action"},H=t("h3",{id:"指定容器"},[m("指定容器 "),t("a",{class:"header-anchor",href:"#指定容器"})],-1),T={class:"tdesign-demo-wrapper tdesign-demo-item-- README-container tdesign-demo-item-- README"},z=["code"],I={slot:"action"},P={ref:"tdDocPhone"},j=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp#/pages-more/sticky/sticky",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),V=[j],F=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"sticky"},null,-1),O={name:"API"},J=l('<h3 id="sticky-props">Sticky Props <a class="header-anchor" href="#sticky-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>container</td><td>Function</td><td>-</td><td>函数返回容器对应的 NodesRef 节点，将对应节点指定为组件的外部容器，滚动时组件会始终保持在容器范围内，当组件即将超出容器底部时，会返回原位置</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>false</td><td>是否禁用组件</td><td>N</td></tr><tr><td>offset-top</td><td>String / Number</td><td>0</td><td>吸顶时与顶部的距离，单位<code>px</code></td><td>N</td></tr><tr><td>z-index</td><td>Number</td><td>99</td><td>吸顶时的 z-index</td><td>N</td></tr></tbody></table><h3 id="sticky-events">Sticky Events <a class="header-anchor" href="#sticky-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>scroll</td><td><code>(detail: { scrollTop: number, isFixed: boolean })</code></td><td>滚动时触发，scrollTop: 距离顶部位置，isFixed: 是否吸顶。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td></tr></tbody></table><h3 id="sticky-external-classes">Sticky External Classes <a class="header-anchor" href="#sticky-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr></tbody></table>',6),U=[J],G={name:"DESIGN"},Q=t("td-doc-empty",null,null,-1),K=[Q],L=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416085563"})],-1),W=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function X(e,o,n,s,c,p){const d=f("Stackblitz");return g(),b("td-doc-content",x,[t("td-doc-header",E,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,w),a(t("div",null,[t("div",S,[N,t("div",q,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",C,[r(d,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,A)]),M,t("div",R,[t("td-doc-demo",{code:e.DemoexampleoffsetCode,language:"markup","show-code":"",mode:"open","demo-name":"offset","component-name":" README"},[t("div",$,[r(d,{"demo-name":"offset","component-name":" README",code:e.DemoexampleoffsetCode},null,8,["code"])])],8,B)]),H,t("div",T,[t("td-doc-demo",{code:e.DemoexamplecontainerCode,language:"markup","show-code":"",mode:"open","demo-name":"container","component-name":" README"},[t("div",I,[r(d,{"demo-name":"container","component-name":" README",code:e.DemoexamplecontainerCode},null,8,["code"])])],8,z)])]),t("td-doc-phone",P,V,512),F],512),[[i,e.tab==="demo"]]),a(t("div",O,U,512),[[i,e.tab==="api"]]),a(t("div",G,K,512),[[i,e.tab==="design"]]),L,W],512)}const tt=h(D,[["render",X]]);export{tt as default};
