import{_ as h,d as g,c as u,a as t,w as a,v as r,b as l,e as d,f as p,r as f,o as k}from"./sites-BNdcO7Ez.js";import{P as b}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view class="link-example">
    <t-link
      size="small"
      theme="primary"
      content="跳转链接"
      hover
    />
    <t-link
      size="small"
      content="跳转链接"
      hover
    />
  </view>
</template>

<script>
import tLink from 'tdesign-uniapp/link/link';
export default {
  components: {
    tLink,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view class="link-example">
    <t-link
      size="small"
      theme="primary"
      content="跳转链接"
      underline
      hover
    />
    <t-link
      size="small"
      content="跳转链接"
      underline
      hover
    />
  </view>
</template>

<script>
import tLink from 'tdesign-uniapp/link/link';
export default {
  components: {
    tLink,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,x=`<template>
  <view class="link-example">
    <t-link
      size="small"
      theme="primary"
      content="跳转链接"
      prefix-icon="link"
      hover
    />
    <t-link
      size="small"
      content="跳转链接"
      prefix-icon="link"
      hover
    />
  </view>
</template>

<script>
import tLink from 'tdesign-uniapp/link/link';
export default {
  components: {
    tLink,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,E=`<template>
  <view class="link-example">
    <t-link
      size="small"
      theme="primary"
      content="跳转链接"
      suffix-icon="jump"
      hover
    />
    <t-link
      size="small"
      content="跳转链接"
      suffix-icon="jump"
      hover
    />
  </view>
</template>

<script>
import tLink from 'tdesign-uniapp/link/link';
export default {
  components: {
    tLink,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,D=`<template>
  <view>
    <view class="link-example">
      <t-link
        size="small"
        theme="primary"
        content="跳转链接"
        suffix-icon="jump"
        hover
      />
      <t-link
        size="small"
        content="跳转链接"
        suffix-icon="jump"
        hover
      />
      <t-link
        size="small"
        theme="danger"
        content="跳转链接"
        suffix-icon="jump"
        hover
      />
    </view>
    <view class="link-example">
      <t-link
        size="small"
        theme="warning"
        content="跳转链接"
        suffix-icon="jump"
        hover
      />
      <t-link
        size="small"
        theme="success"
        content="跳转链接"
        suffix-icon="jump"
        hover
      />
    </view>
  </view>
</template>

<script>
import tLink from 'tdesign-uniapp/link/link';
export default {
  components: {
    tLink,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,w=`<template>
  <view>
    <view class="link-example">
      <t-link
        :navigator-props="navigatorProps"
        size="small"
        theme="primary"
        content="跳转链接"
        suffix-icon="jump"
        disabled
        hover
      />
      <t-link
        size="small"
        content="跳转链接"
        suffix-icon="jump"
        disabled
      />
      <t-link
        size="small"
        theme="danger"
        content="跳转链接"
        suffix-icon="jump"
        disabled
      />
    </view>
    <view class="link-example">
      <t-link
        size="small"
        theme="warning"
        content="跳转链接"
        suffix-icon="jump"
        disabled
      />
      <t-link
        size="small"
        theme="success"
        content="跳转链接"
        suffix-icon="jump"
        disabled
      />
    </view>
  </view>
</template>

<script>
import tLink from 'tdesign-uniapp/link/link';
export default {
  components: {
    tLink,
  },
  data() {
    return {
      navigatorProps: {
        url: '/pages/home/home',
      },
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view class="link-example">
    <t-link
      size="small"
      theme="primary"
      content="S号链接"
      suffix-icon="jump"
      hover
    />
    <t-link
      theme="primary"
      content="M号链接"
      suffix-icon="jump"
      hover
    />
    <t-link
      size="large"
      theme="primary"
      content="L号链接"
      suffix-icon="jump"
      hover
    />
  </view>
</template>

<script>
import tLink from 'tdesign-uniapp/link/link';
export default {
  components: {
    tLink,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,A=g({data(){return{DemoexamplecontentCode:v,DemoexampleunderlineCode:_,DemoexampleprefixCode:x,DemoexamplesuffixCode:E,DemoexamplethemeCode:D,DemoexampledisabledCode:w,DemoexamplesizeCode:y}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:i,tdDocTabs:o,tdDocPhone:s}=this.$refs,c="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/link/link";i&&(i.docInfo={title:"Link 链接",desc:"文字超链接用于跳转一个新页面，如当前项目跳转，友情链接等。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:m})=>this.tab=m),s&&(s.qrcodeUrl=c),b.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),M={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},z={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"navigation","component-name":"link"},R=["tab"],C={name:"DEMO"},j=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TLink <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/link/link.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>基础文字链接</p>`,5),S={class:"tdesign-demo-wrapper tdesign-demo-item-- README-content tdesign-demo-item-- README"},L=["code"],N={slot:"action"},T=t("p",null,"下划线文字链接",-1),P={class:"tdesign-demo-wrapper tdesign-demo-item-- README-underline tdesign-demo-item-- README"},$=["code"],q={slot:"action"},B=t("p",null,"前置图标文字链接",-1),O={class:"tdesign-demo-wrapper tdesign-demo-item-- README-prefix tdesign-demo-item-- README"},V=["code"],I={slot:"action"},H=t("p",null,"后置图标文字链接",-1),U={class:"tdesign-demo-wrapper tdesign-demo-item-- README-suffix tdesign-demo-item-- README"},G=["code"],F={slot:"action"},J=t("h3",{id:"组件状态"},[p("组件状态 "),t("a",{class:"header-anchor",href:"#组件状态"})],-1),K=t("p",null,"不同主题",-1),Q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},W=["code"],X={slot:"action"},Y=t("p",null,"禁用状态",-1),Z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-disabled tdesign-demo-item-- README"},tt=["code"],et={slot:"action"},nt=t("h3",{id:"组件样式"},[p("组件样式 "),t("a",{class:"header-anchor",href:"#组件样式"})],-1),dt=t("p",null,"链接尺寸",-1),ot={class:"tdesign-demo-wrapper tdesign-demo-item-- README-size tdesign-demo-item-- README"},it=["code"],st={slot:"action"},at={ref:"tdDocPhone"},rt=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/link/link",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),lt=[rt],ct=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"link"},null,-1),mt={name:"API"},pt=l('<h3 id="link-props">Link Props <a class="header-anchor" href="#link-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>content</td><td>String / Slot</td><td>-</td><td>链接内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>false</td><td>是否为禁用态</td><td>N</td></tr><tr><td>hover</td><td>Boolean</td><td>-</td><td>是否开启点击反馈</td><td>N</td></tr><tr><td>navigator-props</td><td>Object</td><td>-</td><td>与 navigator 原生组件属性保持一致，具体使用参考：<a href="https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html" target="_blank" rel="noopener noreferrer">微信开放文档</a>。使用时请将形如 <code>open-type</code> 风格的属性名改为 <code>openType</code> 风格</td><td>N</td></tr><tr><td>prefix-icon</td><td>String / Object / Slot</td><td>-</td><td>前置图标。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>size</td><td>String</td><td>medium</td><td>尺寸。可选项：small/medium/large。TS 类型：<code>SizeEnum</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>status</td><td>String</td><td>normal</td><td>已废弃。组件状态。可选项：normal/active/disabled</td><td>N</td></tr><tr><td>suffix-icon</td><td>String / Object / Slot</td><td>-</td><td>后置图标。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>theme</td><td>String</td><td>default</td><td>组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success</td><td>N</td></tr><tr><td>underline</td><td>Boolean</td><td>-</td><td>是否显示链接下划线</td><td>N</td></tr></tbody></table><h3 id="link-events">Link Events <a class="header-anchor" href="#link-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>complete</td><td>-</td><td>页面链接执行完成后触发（失败或成功均会触发）</td></tr><tr><td>fail</td><td>-</td><td>页面链接跳转失败后触发</td></tr><tr><td>success</td><td>-</td><td>页面链接跳转成功后触发</td></tr></tbody></table><h3 id="link-external-classes">Link External Classes <a class="header-anchor" href="#link-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-hover</td><td>悬停样式类</td></tr><tr><td>t-class-prefix-icon</td><td>前置图标样式类</td></tr><tr><td>t-class-suffix-icon</td><td>后置图标样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-link-danger-active-color</td><td>@error-color-active</td><td>-</td></tr><tr><td>--td-link-danger-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-link-danger-disabled-color</td><td>@error-color-disabled</td><td>-</td></tr><tr><td>--td-link-default-active-color</td><td>@brand-color-active</td><td>-</td></tr><tr><td>--td-link-default-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-link-default-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-link-primary-active-color</td><td>@brand-color-active</td><td>-</td></tr><tr><td>--td-link-primary-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-link-primary-disabled-color</td><td>@brand-color-disabled</td><td>-</td></tr><tr><td>--td-link-success-active-color</td><td>@success-color-active</td><td>-</td></tr><tr><td>--td-link-success-color</td><td>@success-color</td><td>-</td></tr><tr><td>--td-link-success-disabled-color</td><td>@success-color-disabled</td><td>-</td></tr><tr><td>--td-link-warning-active-color</td><td>@warning-color-active</td><td>-</td></tr><tr><td>--td-link-warning-color</td><td>@warning-color</td><td>-</td></tr><tr><td>--td-link-warning-disabled-color</td><td>@warning-color-disabled</td><td>-</td></tr></tbody></table>',9),ht=[pt],gt={name:"DESIGN"},ut=l('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要跳转至外链时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="链接与消息通知、公告栏组合使用，在进行消息通知与提示的同时，提供解决方案或详情的跳转入口。">链接与<a href="./message">消息通知</a>、<a href="./notice-bar">公告栏</a>组合使用，在进行消息通知与提示的同时，提供解决方案或详情的跳转入口。 <a class="header-anchor" href="#链接与消息通知、公告栏组合使用，在进行消息通知与提示的同时，提供解决方案或详情的跳转入口。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/link/link-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/link/link-2.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="在同一段文本中如使用多个链接，需要利用纯文本字符等将其区隔开。">在同一段文本中如使用多个链接，需要利用纯文本字符等将其区隔开。 <a class="header-anchor" href="#在同一段文本中如使用多个链接，需要利用纯文本字符等将其区隔开。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/link/link-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/link/link-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./button">按钮</a></td><td style="text-align:left;">当前流程的结束或新流程的开启需要用户点击触发时使用。</td></tr></tbody></table>',10),ft=[ut],kt=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760432202945"})],-1),bt=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function vt(e,i,o,s,c,m){const n=f("Stackblitz");return k(),u("td-doc-content",M,[t("td-doc-header",z,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,R),a(t("div",null,[t("div",C,[j,t("div",S,[t("td-doc-demo",{code:e.DemoexamplecontentCode,language:"markup","show-code":"",mode:"open","demo-name":"content","component-name":" README"},[t("div",N,[d(n,{"demo-name":"content","component-name":" README",code:e.DemoexamplecontentCode},null,8,["code"])])],8,L)]),T,t("div",P,[t("td-doc-demo",{code:e.DemoexampleunderlineCode,language:"markup","show-code":"",mode:"open","demo-name":"underline","component-name":" README"},[t("div",q,[d(n,{"demo-name":"underline","component-name":" README",code:e.DemoexampleunderlineCode},null,8,["code"])])],8,$)]),B,t("div",O,[t("td-doc-demo",{code:e.DemoexampleprefixCode,language:"markup","show-code":"",mode:"open","demo-name":"prefix","component-name":" README"},[t("div",I,[d(n,{"demo-name":"prefix","component-name":" README",code:e.DemoexampleprefixCode},null,8,["code"])])],8,V)]),H,t("div",U,[t("td-doc-demo",{code:e.DemoexamplesuffixCode,language:"markup","show-code":"",mode:"open","demo-name":"suffix","component-name":" README"},[t("div",F,[d(n,{"demo-name":"suffix","component-name":" README",code:e.DemoexamplesuffixCode},null,8,["code"])])],8,G)]),J,K,t("div",Q,[t("td-doc-demo",{code:e.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",X,[d(n,{"demo-name":"theme","component-name":" README",code:e.DemoexamplethemeCode},null,8,["code"])])],8,W)]),Y,t("div",Z,[t("td-doc-demo",{code:e.DemoexampledisabledCode,language:"markup","show-code":"",mode:"open","demo-name":"disabled","component-name":" README"},[t("div",et,[d(n,{"demo-name":"disabled","component-name":" README",code:e.DemoexampledisabledCode},null,8,["code"])])],8,tt)]),nt,dt,t("div",ot,[t("td-doc-demo",{code:e.DemoexamplesizeCode,language:"markup","show-code":"",mode:"open","demo-name":"size","component-name":" README"},[t("div",st,[d(n,{"demo-name":"size","component-name":" README",code:e.DemoexamplesizeCode},null,8,["code"])])],8,it)])]),t("td-doc-phone",at,lt,512),ct],512),[[r,e.tab==="demo"]]),a(t("div",mt,ht,512),[[r,e.tab==="api"]]),a(t("div",gt,ft,512),[[r,e.tab==="design"]]),kt,bt],512)}const Et=h(A,[["render",vt]]);export{Et as default};
