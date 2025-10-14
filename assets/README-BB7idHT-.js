import{_ as u,d as f,c as h,a as t,w as a,v as r,b as l,f as c,e as o,r as k,o as g}from"./sites-vH1cnupm.js";import{P as b}from"./prism-bash-zcnM7wlG.js";const v=`<template>
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
`,y=`<template>
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
`,w=`<template>
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
`,z=f({data(){return{DemoexamplecontentCode:v,DemoexampleunderlineCode:_,DemoexampleprefixCode:x,DemoexamplesuffixCode:E,DemoexamplethemeCode:D,DemoexampledisabledCode:y,DemoexamplesizeCode:w}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:i,tdDocTabs:d,tdDocPhone:s}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/link/link";i&&(i.docInfo={title:"Link 链接",desc:"文字超链接用于跳转一个新页面，如当前项目跳转，友情链接等。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:p})=>this.tab=p),s&&(s.qrcodeUrl=m),b.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),A={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},M={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"navigation","component-name":"link"},C=["tab"],R={name:"DEMO"},S={style:{background:"#ecf2fe",display:"flex","align-items":"center","line-height":"20px",padding:"14px 24px","border-radius":"3px",color:"#555a65"}},j={fill:"none",viewBox:"0 0 16 16",width:"16px",height:"16px",style:{"margin-right":"5px"}},L=t("path",{fill:"#0052d9",d:"M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z",fillOpacity:"0.9"},null,-1),q=[L],N=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-link&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/link/link&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/AtJrPbmK7mSK" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>基础文字链接</p>`,8),P={class:"tdesign-demo-wrapper tdesign-demo-item-- README-content tdesign-demo-item-- README"},T=["code"],$={slot:"action"},V=t("p",null,"下划线文字链接",-1),B={class:"tdesign-demo-wrapper tdesign-demo-item-- README-underline tdesign-demo-item-- README"},O=["code"],I={slot:"action"},H=t("p",null,"前置图标文字链接",-1),J={class:"tdesign-demo-wrapper tdesign-demo-item-- README-prefix tdesign-demo-item-- README"},K=["code"],U={slot:"action"},G=t("p",null,"后置图标文字链接",-1),F={class:"tdesign-demo-wrapper tdesign-demo-item-- README-suffix tdesign-demo-item-- README"},Q=["code"],W={slot:"action"},X=t("h3",{id:"组件状态"},[c("组件状态 "),t("a",{class:"header-anchor",href:"#组件状态"})],-1),Y=t("p",null,"不同主题",-1),Z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},tt=["code"],et={slot:"action"},nt=t("p",null,"禁用状态",-1),ot={class:"tdesign-demo-wrapper tdesign-demo-item-- README-disabled tdesign-demo-item-- README"},dt=["code"],it={slot:"action"},st=t("h3",{id:"组件样式"},[c("组件样式 "),t("a",{class:"header-anchor",href:"#组件样式"})],-1),at=t("p",null,"链接尺寸",-1),rt={class:"tdesign-demo-wrapper tdesign-demo-item-- README-size tdesign-demo-item-- README"},lt=["code"],ct={slot:"action"},mt={ref:"tdDocPhone"},pt=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/link/link",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),ht=[pt],gt=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"link"},null,-1),ut={name:"API"},ft=l('<h3 id="link-props">Link Props <a class="header-anchor" href="#link-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>content</td><td>String / Slot</td><td>-</td><td>链接内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>false</td><td>是否为禁用态</td><td>N</td></tr><tr><td>hover</td><td>Boolean</td><td>-</td><td>是否开启点击反馈</td><td>N</td></tr><tr><td>navigator-props</td><td>Object</td><td>-</td><td>与 navigator 原生组件属性保持一致，具体使用参考：<a href="https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html" target="_blank" rel="noopener noreferrer">微信开放文档</a>。使用时请将形如 <code>open-type</code> 风格的属性名改为 <code>openType</code> 风格</td><td>N</td></tr><tr><td>prefix-icon</td><td>String / Object / Slot</td><td>-</td><td>前置图标。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>size</td><td>String</td><td>medium</td><td>尺寸。可选项：small/medium/large。TS 类型：<code>SizeEnum</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>status</td><td>String</td><td>normal</td><td>已废弃。组件状态。可选项：normal/active/disabled</td><td>N</td></tr><tr><td>suffix-icon</td><td>String / Object / Slot</td><td>-</td><td>后置图标。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>theme</td><td>String</td><td>default</td><td>组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success</td><td>N</td></tr><tr><td>underline</td><td>Boolean</td><td>-</td><td>是否显示链接下划线</td><td>N</td></tr></tbody></table><h3 id="link-events">Link Events <a class="header-anchor" href="#link-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>complete</td><td>-</td><td>页面链接执行完成后触发（失败或成功均会触发）</td></tr><tr><td>fail</td><td>-</td><td>页面链接跳转失败后触发</td></tr><tr><td>success</td><td>-</td><td>页面链接跳转成功后触发</td></tr></tbody></table><h3 id="link-external-classes">Link External Classes <a class="header-anchor" href="#link-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-hover</td><td>悬停样式类</td></tr><tr><td>t-class-prefix-icon</td><td>前置图标样式类</td></tr><tr><td>t-class-suffix-icon</td><td>后置图标样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-link-danger-active-color</td><td>@error-color-active</td><td>-</td></tr><tr><td>--td-link-danger-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-link-danger-disabled-color</td><td>@error-color-disabled</td><td>-</td></tr><tr><td>--td-link-default-active-color</td><td>@brand-color-active</td><td>-</td></tr><tr><td>--td-link-default-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-link-default-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-link-primary-active-color</td><td>@brand-color-active</td><td>-</td></tr><tr><td>--td-link-primary-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-link-primary-disabled-color</td><td>@brand-color-disabled</td><td>-</td></tr><tr><td>--td-link-success-active-color</td><td>@success-color-active</td><td>-</td></tr><tr><td>--td-link-success-color</td><td>@success-color</td><td>-</td></tr><tr><td>--td-link-success-disabled-color</td><td>@success-color-disabled</td><td>-</td></tr><tr><td>--td-link-warning-active-color</td><td>@warning-color-active</td><td>-</td></tr><tr><td>--td-link-warning-color</td><td>@warning-color</td><td>-</td></tr><tr><td>--td-link-warning-disabled-color</td><td>@warning-color-disabled</td><td>-</td></tr></tbody></table>',9),kt=[ft],bt={name:"DESIGN"},vt=l('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要跳转至外链时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="链接与消息通知、公告栏组合使用，在进行消息通知与提示的同时，提供解决方案或详情的跳转入口。">链接与<a href="./message">消息通知</a>、<a href="./notice-bar">公告栏</a>组合使用，在进行消息通知与提示的同时，提供解决方案或详情的跳转入口。 <a class="header-anchor" href="#链接与消息通知、公告栏组合使用，在进行消息通知与提示的同时，提供解决方案或详情的跳转入口。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/link/link-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/link/link-2.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="在同一段文本中如使用多个链接，需要利用纯文本字符等将其区隔开。">在同一段文本中如使用多个链接，需要利用纯文本字符等将其区隔开。 <a class="header-anchor" href="#在同一段文本中如使用多个链接，需要利用纯文本字符等将其区隔开。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/link/link-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/link/link-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./button">按钮</a></td><td style="text-align:left;">当前流程的结束或新流程的开启需要用户点击触发时使用。</td></tr></tbody></table>',10),_t=[vt],xt=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416475799"})],-1),Et=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function Dt(e,i,d,s,m,p){const n=k("Stackblitz");return g(),h("td-doc-content",A,[t("td-doc-header",M,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,C),a(t("div",null,[t("div",R,[t("div",S,[(g(),h("svg",j,q)),c(" 该组件于 0.32.0 版本上线，请留意版本。 ")]),N,t("div",P,[t("td-doc-demo",{code:e.DemoexamplecontentCode,language:"markup","show-code":"",mode:"open","demo-name":"content","component-name":" README"},[t("div",$,[o(n,{"demo-name":"content","component-name":" README",code:e.DemoexamplecontentCode},null,8,["code"])])],8,T)]),V,t("div",B,[t("td-doc-demo",{code:e.DemoexampleunderlineCode,language:"markup","show-code":"",mode:"open","demo-name":"underline","component-name":" README"},[t("div",I,[o(n,{"demo-name":"underline","component-name":" README",code:e.DemoexampleunderlineCode},null,8,["code"])])],8,O)]),H,t("div",J,[t("td-doc-demo",{code:e.DemoexampleprefixCode,language:"markup","show-code":"",mode:"open","demo-name":"prefix","component-name":" README"},[t("div",U,[o(n,{"demo-name":"prefix","component-name":" README",code:e.DemoexampleprefixCode},null,8,["code"])])],8,K)]),G,t("div",F,[t("td-doc-demo",{code:e.DemoexamplesuffixCode,language:"markup","show-code":"",mode:"open","demo-name":"suffix","component-name":" README"},[t("div",W,[o(n,{"demo-name":"suffix","component-name":" README",code:e.DemoexamplesuffixCode},null,8,["code"])])],8,Q)]),X,Y,t("div",Z,[t("td-doc-demo",{code:e.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",et,[o(n,{"demo-name":"theme","component-name":" README",code:e.DemoexamplethemeCode},null,8,["code"])])],8,tt)]),nt,t("div",ot,[t("td-doc-demo",{code:e.DemoexampledisabledCode,language:"markup","show-code":"",mode:"open","demo-name":"disabled","component-name":" README"},[t("div",it,[o(n,{"demo-name":"disabled","component-name":" README",code:e.DemoexampledisabledCode},null,8,["code"])])],8,dt)]),st,at,t("div",rt,[t("td-doc-demo",{code:e.DemoexamplesizeCode,language:"markup","show-code":"",mode:"open","demo-name":"size","component-name":" README"},[t("div",ct,[o(n,{"demo-name":"size","component-name":" README",code:e.DemoexamplesizeCode},null,8,["code"])])],8,lt)])]),t("td-doc-phone",mt,ht,512),gt],512),[[r,e.tab==="demo"]]),a(t("div",ut,kt,512),[[r,e.tab==="api"]]),a(t("div",bt,_t,512),[[r,e.tab==="design"]]),xt,Et],512)}const zt=u(z,[["render",Dt]]);export{zt as default};
