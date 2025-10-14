import{_ as m,d as g,c as h,a as e,w as a,v as i,b as c,e as n,f as u,r as b,o as f}from"./sites-CLm6NhbO.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view>
    <view class="demo-desc">
      基础进度条
    </view>
    <view class="demo-wrapper">
      <t-progress percentage="80" />
    </view>

    <view class="demo-desc">
      百分比内显
    </view>
    <view class="demo-wrapper">
      <t-progress
        theme="plump"
        percentage="80"
      />
    </view>

    <view class="demo-desc">
      环形进度条
    </view>
    <view
      v-if="!skylineRender"
      class="demo-wrapper"
    >
      <t-progress
        theme="circle"
        percentage="30"
      />
    </view>

    <view class="demo-desc">
      微型环形进度条
    </view>
    <view
      v-if="!skylineRender"
      class="demo-wrapper"
    >
      <t-progress
        theme="circle"
        size="micro"
        percentage="30"
        :label="false"
      />
    </view>
  </view>
</template>

<script>
import tProgress from 'tdesign-uniapp/progress/progress';
// import SkylineBehavior from 'tdesign-site/src/mixins/skyline.js'
export default {
  components: {
    tProgress,
  },
  //   mixins: [SkylineBehavior],
  data() {
    return {
      skylineRender: '',
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
  <view>
    <t-progress percentage="80" />
    <t-progress
      percentage="88"
      status="warning"
    />
    <t-progress
      percentage="88"
      status="error"
    />
    <t-progress
      percentage="88"
      status="success"
    />
    <t-progress
      percentage="88"
      color=""
      status="active"
    />
  </view>
</template>

<script>
import tProgress from 'tdesign-uniapp/progress/progress';
export default {
  components: {
    tProgress,
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
    <t-progress
      theme="plump"
      percentage="80"
    />
    <t-progress
      theme="plump"
      percentage="88"
      status="warning"
    />
    <t-progress
      theme="plump"
      percentage="88"
      status="error"
    />
    <t-progress
      theme="plump"
      percentage="88"
      status="success"
    />
    <t-progress
      theme="plump"
      :color="{ from: '#0052D9', to: '#00A870' }"
      percentage="88"
      status="active"
    />
  </view>
</template>

<script>
import tProgress from 'tdesign-uniapp/progress/progress';
export default {
  components: {
    tProgress,
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
    <t-demo
      v-if="!skylineRender"
      desc="环形进度条"
      padding
    >
      <t-progress
        theme="circle"
        percentage="80"
      />
      <t-progress
        theme="circle"
        percentage="88"
        status="warning"
      />
      <t-progress
        theme="circle"
        percentage="88"
        status="error"
      />
      <t-progress
        theme="circle"
        percentage="88"
        status="success"
      />
    </t-demo>
  </view>
</template>

<script>
import tProgress from 'tdesign-uniapp/progress/progress';
// import SkylineBehavior from 'tdesign-site/src/mixins/skyline.js'
export default {
  components: {
    tProgress,
  },
  //   mixins: [SkylineBehavior],
  data() {
    return {
      skylineRender: '',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,k=g({data(){return{DemoexamplebaseCode:_,DemoexamplelineCode:w,DemoexampleplumpCode:y,DemoexamplecircleCode:D}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:d,tdDocTabs:s,tdDocPhone:o}=this.$refs,p="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/progress/progress";d&&(d.docInfo={title:"Progress 进度条",desc:"用于展示任务当前的进度。"}),s&&(s.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],s.onchange=({detail:l})=>this.tab=l),o&&(o.qrcodeUrl=p),v.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}}),E={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},x={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"progress"},S=["tab"],A={name:"DEMO"},P=c(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><h3 id="引入组件">引入组件 <a class="header-anchor" href="#引入组件"></a></h3><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TProgress <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/progress/progress.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_01-组件类型">01 组件类型 <a class="header-anchor" href="#_01-组件类型"></a></h3>`,5),R={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},C=["code"],M={slot:"action"},N=e("h3",{id:"_02-组件状态"},[u("02 组件状态 "),e("a",{class:"header-anchor",href:"#_02-组件状态"})],-1),T=e("p",null,"线性进度条",-1),B={class:"tdesign-demo-wrapper tdesign-demo-item-- README-line tdesign-demo-item-- README"},$=["code"],j={slot:"action"},z=e("p",null,"百分比内显进度条",-1),V={class:"tdesign-demo-wrapper tdesign-demo-item-- README-plump tdesign-demo-item-- README"},q=["code"],I={slot:"action"},O=e("p",null,"环形进度条",-1),H={class:"tdesign-demo-wrapper tdesign-demo-item-- README-circle tdesign-demo-item-- README"},U=["code"],F={slot:"action"},G={ref:"tdDocPhone"},J=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/progress/progress",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),K=[J],L=e("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"progress"},null,-1),Q={name:"API"},W=c('<h3 id="progress-props">Progress Props <a class="header-anchor" href="#progress-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>color</td><td>String / Object / Array</td><td>&#39;&#39;</td><td>进度条颜色。示例：&#39;#ED7B2F&#39; 或 &#39;orange&#39; 或 <code>[&#39;#f00&#39;, &#39;#0ff&#39;, &#39;#f0f&#39;]</code> 或 <code>{ &#39;0%&#39;: &#39;#f00&#39;, &#39;100%&#39;: &#39;#0ff&#39; }</code> 或 <code>{ from: &#39;#000&#39;, to: &#39;#000&#39; }</code> 等。TS 类型：<code>string \\| Array&lt;string&gt; \\| Record&lt;string, string&gt;</code></td><td>N</td></tr><tr><td>label</td><td>String / Boolean / Slot</td><td>true</td><td>进度百分比，可自定义。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>percentage</td><td>Number</td><td>0</td><td>进度条百分比</td><td>N</td></tr><tr><td>size</td><td>String / Number</td><td>&#39;default&#39;</td><td>进度条尺寸，仅对环形进度条有效。可选值：default/micro。default 值为 112； micro 值为 24</td><td>N</td></tr><tr><td>status</td><td>String</td><td>-</td><td>进度条状态。可选项：success/error/warning/active。TS 类型：<code>ProgressStatus</code> <code>type ProgressStatus = &#39;success&#39; \\| &#39;error&#39; \\| &#39;warning&#39; \\| &#39;active&#39;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/progress/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>stroke-width</td><td>String / Number</td><td>-</td><td>进度条线宽，默认单位 <code>px</code></td><td>N</td></tr><tr><td>theme</td><td>String</td><td>line</td><td>进度条风格。值为 line，标签（label）显示在进度条右侧；值为 plump，标签（label）显示在进度条里面；值为 circle，标签（label）显示在进度条正中间。可选项：line/plump/circle。TS 类型：<code>ProgressTheme</code> <code>type ProgressTheme = &#39;line&#39; \\| &#39;plump&#39; \\| &#39;circle&#39;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/progress/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>track-color</td><td>String</td><td>&#39;&#39;</td><td>进度条未完成部分颜色</td><td>N</td></tr></tbody></table><h3 id="progress-external-classes">Progress External Classes <a class="header-anchor" href="#progress-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-bar</td><td>进度文字样式类</td></tr><tr><td>t-class-label</td><td>标签样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-progress-info-dark-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-progress-info-light-color</td><td>@text-color-anti</td><td>-</td></tr><tr><td>--td-progress-inner-bg-color-active</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-progress-inner-bg-color-error</td><td>@error-color</td><td>-</td></tr><tr><td>--td-progress-inner-bg-color-success</td><td>@success-color</td><td>-</td></tr><tr><td>--td-progress-inner-bg-color-warning</td><td>@warning-color</td><td>-</td></tr><tr><td>--td-progress-circle-inner-bg-color</td><td>@text-color-anti</td><td>-</td></tr><tr><td>--td-progress-circle-label-font-size</td><td>40rpx</td><td>-</td></tr><tr><td>--td-progress-circle-label-font-weight</td><td>700</td><td>-</td></tr><tr><td>--td-progress-circle-label-line-height</td><td>56rpx</td><td>-</td></tr><tr><td>--td-progress-circle-width</td><td>224rpx</td><td>-</td></tr><tr><td>--td-progress-inner-bg-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-progress-line-stroke-width</td><td>12rpx</td><td>-</td></tr><tr><td>--td-progress-stroke-circle-width</td><td>12rpx</td><td>-</td></tr><tr><td>--td-progress-stroke-plump-width</td><td>40rpx</td><td>-</td></tr><tr><td>--td-progress-track-bg-color</td><td>@bg-color-component</td><td>-</td></tr></tbody></table>',7),X=[W],Y={name:"DESIGN"},Z=c('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当有一项系统任务正在进行，需要向用户展示该任务的当前进度时使用。</p><h3 id="与页面布局相关">与页面布局相关 <a class="header-anchor" href="#与页面布局相关"></a></h3><h5 id="当展示页面、模块的加载进度时，通常进度条放置在页面、模块的正中间。">当展示页面、模块的加载进度时，通常进度条放置在页面、模块的正中间。 <a class="header-anchor" href="#当展示页面、模块的加载进度时，通常进度条放置在页面、模块的正中间。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/progress/progress-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/progress/progress-2.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="通常用于任务周期较长的场景中，配有文字或图标显示进度和状态。">通常用于任务周期较长的场景中，配有文字或图标显示进度和状态。 <a class="header-anchor" href="#通常用于任务周期较长的场景中，配有文字或图标显示进度和状态。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/progress/progress-3.png"></div></div><hr><h5 id="当任务时间较短、或难以预估剩余时间时，通常弱化进度的百分比信息，如使用隐藏数值进度条、或微型的环形进度条。">当任务时间较短、或难以预估剩余时间时，通常弱化进度的百分比信息，如使用隐藏数值进度条、或微型的环形进度条。 <a class="header-anchor" href="#当任务时间较短、或难以预估剩余时间时，通常弱化进度的百分比信息，如使用隐藏数值进度条、或微型的环形进度条。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/progress/progress-4.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/progress/progress-5.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="若任务需要等待的时间很长，可以提供大概的时间估计，让用户更有预期。">若任务需要等待的时间很长，可以提供大概的时间估计，让用户更有预期。 <a class="header-anchor" href="#若任务需要等待的时间很长，可以提供大概的时间估计，让用户更有预期。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/progress/progress-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./loading">加载</a></td><td style="text-align:left;">当打开新页面或操作完成后，等待加载时使用。</td></tr></tbody></table>',16),ee=[Z],te=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760436862393"})],-1),se=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function re(t,d,s,o,p,l){const r=b("Stackblitz");return f(),h("td-doc-content",E,[e("td-doc-header",x,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:t.tab},null,8,S),a(e("div",null,[e("div",A,[P,e("div",R,[e("td-doc-demo",{code:t.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[e("div",M,[n(r,{"demo-name":"base","component-name":" README",code:t.DemoexamplebaseCode},null,8,["code"])])],8,C)]),N,T,e("div",B,[e("td-doc-demo",{code:t.DemoexamplelineCode,language:"markup","show-code":"",mode:"open","demo-name":"line","component-name":" README"},[e("div",j,[n(r,{"demo-name":"line","component-name":" README",code:t.DemoexamplelineCode},null,8,["code"])])],8,$)]),z,e("div",V,[e("td-doc-demo",{code:t.DemoexampleplumpCode,language:"markup","show-code":"",mode:"open","demo-name":"plump","component-name":" README"},[e("div",I,[n(r,{"demo-name":"plump","component-name":" README",code:t.DemoexampleplumpCode},null,8,["code"])])],8,q)]),O,e("div",H,[e("td-doc-demo",{code:t.DemoexamplecircleCode,language:"markup","show-code":"",mode:"open","demo-name":"circle","component-name":" README"},[e("div",F,[n(r,{"demo-name":"circle","component-name":" README",code:t.DemoexamplecircleCode},null,8,["code"])])],8,U)])]),e("td-doc-phone",G,K,512),L],512),[[i,t.tab==="demo"]]),a(e("div",Q,X,512),[[i,t.tab==="api"]]),a(e("div",Y,ee,512),[[i,t.tab==="design"]]),te,se],512)}const oe=m(k,[["render",re]]);export{oe as default};
