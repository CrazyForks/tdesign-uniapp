import{_ as h,d as u,c as g,a as e,w as r,v as p,b as i,e as n,f as c,r as b,o as f}from"./sites-Co6lQ2MM.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view class="stepper-example">
    <t-stepper
      default-value="3"
      theme="filled"
    />
  </view>
</template>

<script>
import tStepper from 'tdesign-uniapp/stepper/stepper.vue';
export default {
  components: {
    tStepper,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.stepper-example {
    padding: 32rpx;
    background-color: var(--bg-color-demo);
}
</style>
`,x=`<template>
  <view class="stepper-example">
    <t-stepper
      default-value="0"
      theme="filled"
    />
    <t-stepper
      default-value="99"
      theme="filled"
      :min="5"
      :max="999"
    />
    <t-stepper
      default-value="999"
      theme="filled"
      :max="999"
    />
  </view>
</template>

<script>
import tStepper from 'tdesign-uniapp/stepper/stepper.vue';
export default {
  components: {
    tStepper,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.stepper-example {
    padding: 32rpx;
    display: flex;
    background-color: var(--bg-color-demo);
    justify-content: space-between;
}
</style>
`,E=`<template>
  <view class="stepper-example">
    <t-stepper
      disabled
      theme="filled"
    />
  </view>
</template>

<script>
import tStepper from 'tdesign-uniapp/stepper/stepper.vue';
export default {
  components: {
    tStepper,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.stepper-example {
    padding: 32rpx;
    background-color: var(--bg-color-demo);
}
</style>
`,D=`<template>
  <view class="stepper-example">
    <t-stepper
      default-value="3"
      theme="filled"
    />
    <t-stepper
      default-value="3"
      theme="outline"
    />
    <t-stepper default-value="3" />
  </view>
</template>

<script>
import tStepper from 'tdesign-uniapp/stepper/stepper.vue';
export default {
  components: {
    tStepper,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.stepper-example {
    padding: 32rpx;
    display: flex;
    background-color: var(--bg-color-demo);
    justify-content: space-between;
}
</style>
`,y=`<template>
  <view class="stepper-example">
    <t-stepper
      :value="value"
      size="large"
      theme="filled"
      @change="handleChange"
    />
    <t-stepper
      default-value="3"
      max="99"
      theme="filled"
    />
    <t-stepper
      default-value="3"
      size="small"
      theme="filled"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell.vue';
import tStepper from 'tdesign-uniapp/stepper/stepper.vue';
export default {
  components: {
    tCell,
    tStepper,
  },
  data() {
    return {
      value: 3,
    };
  },
  created() {},
  methods: {
    handleChange(e) {
      const { value } = e;
      console.log(value);
      this.value = value;
    },
  },
};
<\/script>
<style>
.stepper-example {
    padding: 32rpx;
    display: flex;
    background-color: var(--bg-color-demo);
    justify-content: space-between;
}
</style>
`,w=u({data(){return{DemoexamplebaseCode:_,DemoexampleminmaxCode:x,DemoexamplestatusCode:E,DemoexamplethemeCode:D,DemoexamplesizeCode:y}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:s,tdDocTabs:o,tdDocPhone:a}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/stepper/stepper";s&&(s.docInfo={title:"Stepper 步进器",desc:"用于数量的增减。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:m})=>this.tab=m),a&&(a.qrcodeUrl=l),v.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}}),S={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},C={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"stepper"},A=["tab"],N={name:"DEMO"},k=i(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TStepper <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/stepper/stepper.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>基础步进器</p>`,5),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},R=["code"],z={slot:"action"},$=e("h3",{id:"组件状态"},[c("组件状态 "),e("a",{class:"header-anchor",href:"#组件状态"})],-1),j=e("p",null,"最大最小状态",-1),P={class:"tdesign-demo-wrapper tdesign-demo-item-- README-min-max tdesign-demo-item-- README"},B=["code"],T={slot:"action"},V=e("p",null,"禁用状态",-1),q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-status tdesign-demo-item-- README"},I=["code"],O={slot:"action"},H=e("h3",{id:"组件样式"},[c("组件样式 "),e("a",{class:"header-anchor",href:"#组件样式"})],-1),U=e("p",null,"步进器样式",-1),G={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},F=["code"],J={slot:"action"},K=e("p",null,"步进器尺寸",-1),L={class:"tdesign-demo-wrapper tdesign-demo-item-- README-size tdesign-demo-item-- README"},Q=["code"],W={slot:"action"},X={ref:"tdDocPhone"},Y=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/stepper/stepper",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),Z=[Y],ee={name:"API"},te=i('<h3 id="stepper-props">Stepper Props <a class="header-anchor" href="#stepper-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>disable-input</td><td>Boolean</td><td>false</td><td>禁用输入框</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>undefined</td><td>禁用全部操作</td><td>N</td></tr><tr><td>input-width</td><td>Number</td><td>-</td><td>输入框宽度，默认单位 <code>px</code></td><td>N</td></tr><tr><td>integer</td><td>Boolean</td><td>true</td><td>是否整型</td><td>N</td></tr><tr><td>max</td><td>Number</td><td>100</td><td>最大值</td><td>N</td></tr><tr><td>min</td><td>Number</td><td>0</td><td>最小值</td><td>N</td></tr><tr><td>size</td><td>String</td><td>medium</td><td>组件尺寸。可选项：small/medium/large。TS 类型：<code>SizeEnum</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>step</td><td>Number</td><td>1</td><td>步长</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>normal</td><td>组件风格。可选项：normal/filled/outline</td><td>N</td></tr><tr><td>value</td><td>String / Number</td><td>0</td><td>值</td><td>N</td></tr><tr><td>default-value</td><td>String / Number</td><td>undefined</td><td>值。非受控属性</td><td>N</td></tr></tbody></table><h3 id="stepper-events">Stepper Events <a class="header-anchor" href="#stepper-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>blur</td><td><code>({ type: string \\| number })</code></td><td>输入框失去焦点时触发</td></tr><tr><td>change</td><td><code>({ value: string \\| number })</code></td><td>数值发生变更时触发</td></tr><tr><td>focus</td><td><code>({ value: string \\| number }))</code></td><td>输入框聚焦时触发</td></tr><tr><td>overlimit</td><td><code>({type: &#39;minus&#39; \\| &#39;plus&#39;})</code></td><td>数值超出限制时触发</td></tr></tbody></table><h3 id="stepper-external-classes">Stepper External Classes <a class="header-anchor" href="#stepper-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-input</td><td>输入框样式类</td></tr><tr><td>t-class-minus</td><td>左侧递减号样式类</td></tr><tr><td>t-class-plus</td><td>右侧递增号样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-stepper-input-disabled-bg</td><td>@bg-color-component-disabled</td><td>-</td></tr><tr><td>--td-stepper-input-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-stepper-border-color</td><td>@component-border</td><td>-</td></tr><tr><td>--td-stepper-border-radius</td><td>@radius-small</td><td>-</td></tr><tr><td>--td-stepper-input-color</td><td>@text-color-primary</td><td>-</td></tr></tbody></table>',9),de=[te],ne={name:"DESIGN"},oe=i('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>需要进行数量选择时使用</p><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="通常用于数量选择，如选择人数、天数、商品数量等">通常用于数量选择，如选择人数、天数、商品数量等 <a class="header-anchor" href="#通常用于数量选择，如选择人数、天数、商品数量等"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/stepper/stepper-1.png"></div></div><hr><h5 id="用户可通过“-”“-”按钮调整数值，或点击数字输入框来输入具体的数值">用户可通过“+”“-”按钮调整数值，或点击数字输入框来输入具体的数值 <a class="header-anchor" href="#用户可通过“-”“-”按钮调整数值，或点击数字输入框来输入具体的数值"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/stepper/stepper-2.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="点击“-”“-”按钮时，数值增减的步长相同，不建议进行不同步长的变化">点击“+”“-”按钮时，数值增减的步长相同，不建议进行不同步长的变化 <a class="header-anchor" href="#点击“-”“-”按钮时，数值增减的步长相同，不建议进行不同步长的变化"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/stepper/stepper-3.gif"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/stepper/stepper-4.gif"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./slider">滑动选择器</a></td><td style="text-align:left;">当用户需要快捷地进行数值/程度选择时使用。</td></tr><tr><td style="text-align:left;"><a href="./input">输入框</a></td><td style="text-align:left;">需要进行文字输入，且需填写的字数较少时使用。</td></tr></tbody></table>',13),se=[oe],ae=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760587843672"})],-1),re=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function pe(t,s,o,a,l,m){const d=b("Stackblitz");return f(),g("td-doc-content",S,[e("td-doc-header",C,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:t.tab},null,8,A),r(e("div",null,[e("div",N,[k,e("div",M,[e("td-doc-demo",{code:t.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[e("div",z,[n(d,{"demo-name":"base","component-name":" README",code:t.DemoexamplebaseCode},null,8,["code"])])],8,R)]),$,j,e("div",P,[e("td-doc-demo",{code:t.DemoexampleminmaxCode,language:"markup","show-code":"",mode:"open","demo-name":"min-max","component-name":" README"},[e("div",T,[n(d,{"demo-name":"min-max","component-name":" README",code:t.DemoexampleminmaxCode},null,8,["code"])])],8,B)]),V,e("div",q,[e("td-doc-demo",{code:t.DemoexamplestatusCode,language:"markup","show-code":"",mode:"open","demo-name":"status","component-name":" README"},[e("div",O,[n(d,{"demo-name":"status","component-name":" README",code:t.DemoexamplestatusCode},null,8,["code"])])],8,I)]),H,U,e("div",G,[e("td-doc-demo",{code:t.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[e("div",J,[n(d,{"demo-name":"theme","component-name":" README",code:t.DemoexamplethemeCode},null,8,["code"])])],8,F)]),K,e("div",L,[e("td-doc-demo",{code:t.DemoexamplesizeCode,language:"markup","show-code":"",mode:"open","demo-name":"size","component-name":" README"},[e("div",W,[n(d,{"demo-name":"size","component-name":" README",code:t.DemoexamplesizeCode},null,8,["code"])])],8,Q)])]),e("td-doc-phone",X,Z,512)],512),[[p,t.tab==="demo"]]),r(e("div",ee,de,512),[[p,t.tab==="api"]]),r(e("div",ne,se,512),[[p,t.tab==="design"]]),ae,re],512)}const me=h(w,[["render",pe]]);export{me as default};
