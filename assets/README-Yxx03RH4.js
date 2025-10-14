import{_ as h,d as g,c as u,a as t,w as l,v as c,b as a,e as d,f as i,r as f,o as x}from"./sites-BI0e1los.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const b=`<template>
  <view class="loading-container-flex">
    <t-loading
      v-if="!skylineRender"
      theme="circular"
      size="40rpx"
      extra-class="wrapper"
    />
    <t-loading
      theme="spinner"
      size="40rpx"
      extra-class="wrapper"
    />
    <t-loading
      theme="dots"
      size="80rpx"
      extra-class="wrapper"
    />
    <t-loading
      theme="custom"
      extra-class="wrapper"
    >
      <template
        #indicator
      >
        <t-image
          style="width: 100%; height: 100%"
          src="https://tdesign.gtimg.com/mobile/demos/logo2.png"
        />
      </template>
    </t-loading>
  </view>
</template>

<script>
import tLoading from 'tdesign-uniapp/loading/loading';
import tImage from 'tdesign-uniapp/image/image';
import SkylineBehavior from 'packages/demo/src/mixins/skyline.js';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tLoading,
    tImage,
  },
  mixins: [SkylineBehavior],
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
`,_=`<template>
  <view class="loading-container-flex">
    <t-loading
      v-if="!skylineRender"
      theme="circular"
      size="40rpx"
      text="加载中..."
      t-class="wrapper"
    />
    <t-loading
      theme="spinner"
      size="40rpx"
      text="加载中..."
      inherit-color
      t-class="wrapper"
    />
  </view>
</template>

<script>
import tLoading from 'tdesign-uniapp/loading/loading';
// import SkylineBehavior from 'tdesign-site/src/mixins/skyline.js'
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tLoading,
  },
  data() {
    return {
      skylineRender: '',
    };
  },
  created() {},
  // mixins: [SkylineBehavior],
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <div class="box">
      <t-loading
        :theme="skylineRender ? 'spinner' : 'circular'"
        size="40rpx"
        text="加载中"
        layout="vertical"
        t-class="wrapper"
      />
      <t-loading
        theme="spinner"
        size="40rpx"
        text="加载中"
        layout="vertical"
        t-class="wrapper"
      />
    </div>
  </view>
</template>

<script>
import tLoading from 'tdesign-uniapp/loading/loading';
// import SkylineBehavior from 'tdesign-site/src/mixins/skyline.js'
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tLoading,
  },
  data() {
    return {
      skylineRender: false,
    };
  },
  created() {},
  // mixins: [SkylineBehavior],
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,D=`<template>
  <view>
    <t-loading
      :indicator="false"
      text="加载中..."
    />
  </view>
</template>

<script>
import tLoading from 'tdesign-uniapp/loading/loading';
export default {
  components: {
    tLoading,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
</style>
`,E=`<template>
  <view>
    <t-loading
      :theme="skylineRender ? 'spinner' : 'circular'"
      size="52rpx"
      text="加载中..."
      t-class-text="text-l"
      :duration="2000 - duration"
    />
    <view class="slider-container">
      <t-slider
        t-class="slider-class"
        :value="duration"
        :min="100"
        :max="1500"
        label
        @change="durationChange"
      />
    </view>
  </view>
</template>

<script>
import tLoading from 'tdesign-uniapp/loading/loading';
// import tSlider from 'tdesign-uniapp/slider/slider';
// import SkylineBehavior from 'tdesign-site/src/mixins/skyline.js'
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tLoading,
    // tSlider,
  },
  //   mixins: [SkylineBehavior],
  data() {
    return {
      duration: 800,
      skylineRender: false,
    };
  },
  created() {},
  methods: {
    durationChange(e) {
      this.setData({
        duration: e.detail.value,
      });
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,k=`<template>
  <view class="loading-size-demo">
    <t-loading
      :theme="skylineRender ? 'spinner' : 'circular'"
      size="64rpx"
      text="加载中..."
      t-class="large"
    />

    <view class="demo-desc">
      中尺寸
    </view>

    <t-loading
      :theme="skylineRender ? 'spinner' : 'circular'"
      size="56rpx"
      text="加载中..."
      t-class="middle"
    />

    <view class="demo-desc">
      小尺寸
    </view>

    <t-loading
      :theme="skylineRender ? 'spinner' : 'circular'"
      size="48rpx"
      text="加载中..."
    />
  </view>
</template>

<script>
import tLoading from 'tdesign-uniapp/loading/loading';
// import SkylineBehavior from 'tdesign-site/src/mixins/skyline.js'
export default {
  components: {
    tLoading,
  },
  data() {
    return {
      skylineRender: false,
    };
  },
  created() {},
  // mixins: [SkylineBehavior],
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,w=g({data(){return{DemoexamplebaseCode:b,DemoexamplehorizontalCode:_,DemoexampleverticalCode:y,DemoexampletextCode:D,DemoexampledurationCode:E,DemoexamplesizeCode:k}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:s,tdDocTabs:o,tdDocPhone:r}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/loading/loading";s&&(s.docInfo={title:"Loading 加载",desc:"用于表示页面或操作的加载状态，给予用户反馈的同时减缓等待的焦虑感，由一个或一组反馈动效组成。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:p})=>this.tab=p),r&&(r.qrcodeUrl=m),v.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),R={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},z={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"loading"},S=["tab"],A={name:"DEMO"},C=a(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-loading&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/loading/loading&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/Jraocimc7mSr" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="纯icon">纯icon <a class="header-anchor" href="#纯icon"></a></h3>`,7),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},N=["code"],B={slot:"action"},q=t("h3",{id:"icon加文字横向"},[i("icon加文字横向 "),t("a",{class:"header-anchor",href:"#icon加文字横向"})],-1),L={class:"tdesign-demo-wrapper tdesign-demo-item-- README-horizontal tdesign-demo-item-- README"},j=["code"],I={slot:"action"},$=t("h3",{id:"icon加文字竖向"},[i("icon加文字竖向 "),t("a",{class:"header-anchor",href:"#icon加文字竖向"})],-1),P={class:"tdesign-demo-wrapper tdesign-demo-item-- README-vertical tdesign-demo-item-- README"},T=["code"],O={slot:"action"},V=t("h3",{id:"纯文字"},[i("纯文字 "),t("a",{class:"header-anchor",href:"#纯文字"})],-1),H={class:"tdesign-demo-wrapper tdesign-demo-item-- README-text tdesign-demo-item-- README"},J=["code"],U={slot:"action"},G=a('<h3 id="加载失败">加载失败 <a class="header-anchor" href="#加载失败"></a></h3><h3>DEMO (🚧建设中）...</h3><h3 id="状态">状态 <a class="header-anchor" href="#状态"></a></h3><h3>DEMO (🚧建设中）...</h3><h3 id="加载速度">加载速度 <a class="header-anchor" href="#加载速度"></a></h3>',5),F={class:"tdesign-demo-wrapper tdesign-demo-item-- README-duration tdesign-demo-item-- README"},K=["code"],Q={slot:"action"},W=t("h3",{id:"规格"},[i("规格 "),t("a",{class:"header-anchor",href:"#规格"})],-1),X={class:"tdesign-demo-wrapper tdesign-demo-item-- README-size tdesign-demo-item-- README"},Y=["code"],Z={slot:"action"},tt={ref:"tdDocPhone"},et=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/loading/loading",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),nt=[et],dt=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"loading"},null,-1),ot={name:"API"},at=a('<h3 id="loading-props">Loading Props <a class="header-anchor" href="#loading-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>delay</td><td>Number</td><td>0</td><td>延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒</td><td>N</td></tr><tr><td>duration</td><td>Number</td><td>800</td><td>加载动画执行完成一次的时间，单位：毫秒</td><td>N</td></tr><tr><td>fullscreen</td><td>Boolean</td><td>false</td><td><code>1.8.5</code>。是否显示为全屏加载</td><td>N</td></tr><tr><td>indicator</td><td>Boolean / Slot</td><td>true</td><td>加载指示符，值为 true 显示默认指示符，值为 false 则不显示，也可以自定义指示符。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>inherit-color</td><td>Boolean</td><td>false</td><td>是否继承父元素颜色</td><td>N</td></tr><tr><td>layout</td><td>String</td><td>horizontal</td><td>对齐方式。可选项：horizontal/vertical</td><td>N</td></tr><tr><td>loading</td><td>Boolean</td><td>true</td><td>是否处于加载状态</td><td>N</td></tr><tr><td>pause</td><td>Boolean</td><td>false</td><td>是否暂停动画</td><td>N</td></tr><tr><td>progress</td><td>Number</td><td>-</td><td>加载进度</td><td>N</td></tr><tr><td>reverse</td><td>Boolean</td><td>-</td><td>加载动画是否反向</td><td>N</td></tr><tr><td>size</td><td>String</td><td>&#39;20px&#39;</td><td>尺寸，示例：20px</td><td>N</td></tr><tr><td>text</td><td>String / Slot</td><td>-</td><td>加载提示文案。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>theme</td><td>String</td><td>circular</td><td>加载组件类型。可选项：circular/spinner/dots</td><td>N</td></tr></tbody></table><h3 id="loading-external-classes">Loading External Classes <a class="header-anchor" href="#loading-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-indicator</td><td>指示符样式类</td></tr><tr><td>t-class-text</td><td>文本样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-loading-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-loading-full-bg-color</td><td>rgba(255, 255, 255, 0.6)</td><td>-</td></tr><tr><td>--td-loading-text-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-loading-text-font-size</td><td>24rpx</td><td>-</td></tr><tr><td>--td-loading-text-line-height</td><td>40rpx</td><td>-</td></tr><tr><td>--td-loading-z-index</td><td>3500</td><td>-</td></tr></tbody></table>',7),it=[at],st={name:"DESIGN"},rt=a('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当打开新页面或操作完成后，等待加载时使用。</p><h3 id="与页面布局相关">与页面布局相关 <a class="header-anchor" href="#与页面布局相关"></a></h3><h5 id="当展示整个页面、或模块的加载进度时，通常放置在页面、模块的正中间。">当展示整个页面、或模块的加载进度时，通常放置在页面、模块的正中间。 <a class="header-anchor" href="#当展示整个页面、或模块的加载进度时，通常放置在页面、模块的正中间。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/loading/loading-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/loading/loading-2.png"></div></div><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="在信息流页面中，可结合下拉刷新使用，对未展示出来的最新内容进行加载。">在信息流页面中，可结合下拉刷新使用，对未展示出来的最新内容进行加载。 <a class="header-anchor" href="#在信息流页面中，可结合下拉刷新使用，对未展示出来的最新内容进行加载。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/loading/loading-3.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/loading/loading-4.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="当加载时间较长，尤其是超过10秒的场景中，推荐使用进度条，向用户明确展示当前任务的进展，避免等待时间过长带来焦急的负面体验。">当加载时间较长，尤其是超过10秒的场景中，推荐使用进度条，向用户明确展示当前任务的进展，避免等待时间过长带来焦急的负面体验。 <a class="header-anchor" href="#当加载时间较长，尤其是超过10秒的场景中，推荐使用进度条，向用户明确展示当前任务的进展，避免等待时间过长带来焦急的负面体验。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/loading/loading-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/loading/loading-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./progress">进度条</a></td><td style="text-align:left;">当有一项系统任务正在进行，需要向用户展示该任务的当前进度时使用。</td></tr><tr><td style="text-align:left;"><a href="./pull-down-refresh">下拉刷新</a></td><td style="text-align:left;">当需要对页面信息进行整体刷新或加载更多同类信息时使用。</td></tr></tbody></table>',13),lt=[rt],ct=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416556293"})],-1),mt=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function pt(e,s,o,r,m,p){const n=f("Stackblitz");return x(),u("td-doc-content",R,[t("td-doc-header",z,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,S),l(t("div",null,[t("div",A,[C,t("div",M,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",B,[d(n,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,N)]),q,t("div",L,[t("td-doc-demo",{code:e.DemoexamplehorizontalCode,language:"markup","show-code":"",mode:"open","demo-name":"horizontal","component-name":" README"},[t("div",I,[d(n,{"demo-name":"horizontal","component-name":" README",code:e.DemoexamplehorizontalCode},null,8,["code"])])],8,j)]),$,t("div",P,[t("td-doc-demo",{code:e.DemoexampleverticalCode,language:"markup","show-code":"",mode:"open","demo-name":"vertical","component-name":" README"},[t("div",O,[d(n,{"demo-name":"vertical","component-name":" README",code:e.DemoexampleverticalCode},null,8,["code"])])],8,T)]),V,t("div",H,[t("td-doc-demo",{code:e.DemoexampletextCode,language:"markup","show-code":"",mode:"open","demo-name":"text","component-name":" README"},[t("div",U,[d(n,{"demo-name":"text","component-name":" README",code:e.DemoexampletextCode},null,8,["code"])])],8,J)]),G,t("div",F,[t("td-doc-demo",{code:e.DemoexampledurationCode,language:"markup","show-code":"",mode:"open","demo-name":"duration","component-name":" README"},[t("div",Q,[d(n,{"demo-name":"duration","component-name":" README",code:e.DemoexampledurationCode},null,8,["code"])])],8,K)]),W,t("div",X,[t("td-doc-demo",{code:e.DemoexamplesizeCode,language:"markup","show-code":"",mode:"open","demo-name":"size","component-name":" README"},[t("div",Z,[d(n,{"demo-name":"size","component-name":" README",code:e.DemoexamplesizeCode},null,8,["code"])])],8,Y)])]),t("td-doc-phone",tt,nt,512),dt],512),[[c,e.tab==="demo"]]),l(t("div",ot,it,512),[[c,e.tab==="api"]]),l(t("div",st,lt,512),[[c,e.tab==="design"]]),ct,mt],512)}const ut=h(w,[["render",pt]]);export{ut as default};
