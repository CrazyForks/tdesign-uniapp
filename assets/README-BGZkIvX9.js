import{_ as h,d as u,c as g,a as e,w as l,v as i,b as s,e as n,f as c,r as v,o as b}from"./sites-D4JVSqOo.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view class="wrapper">
    <t-slider
      :default-value="23"
      :step="0.1"
      @change="handleChange"
    />
  </view>
</template>

<script>
import tSlider from 'tdesign-uniapp/slider/slider';
export default {
  components: {
    tSlider,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleChange(e) {
      console.log(e.value);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,w=`<template>
  <view class="wrapper">
    <t-slider
      range
      :default-value="[35, 65]"
      @dragstart="onDragstart"
      @dragend="onDragend"
    />
  </view>
</template>

<script>
import tSlider from 'tdesign-uniapp/slider/slider';
export default {
  components: {
    tSlider,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onDragstart(e) {
      console.log('dragstart', e.detail);
    },
    onDragend(e) {
      console.log('dragend', e.detail);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,k=`<template>
  <view>
    <view class="wrapper">
      <t-slider
        :value="value"
        label="\${value}"
        @change="handleChange"
      />
    </view>

    <view class="demo-desc">
      带数值双游标滑块
    </view>

    <view class="wrapper">
      <t-slider
        show-extreme-value
        label="\${value}"
        :default-value="[40, 60]"
        range
      />
    </view>
  </view>
</template>

<script>
import tSlider from 'tdesign-uniapp/slider/slider';
export default {
  components: {
    tSlider,
  },
  data() {
    return {
      value: 35,
    };
  },
  created() {},
  methods: {
    handleChange(e) {
      this.value = e.value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,D=`<template>
  <view>
    <view class="wrapper">
      <t-slider
        :default-value="60"
        :marks="marks"
        :step="20"
        @change="handleChange"
      />
    </view>

    <view class="demo-desc">
      带刻度双游标滑块
    </view>

    <view class="wrapper">
      <t-slider
        range
        :default-value="[20, 60]"
        :marks="marks"
        :step="20"
      />
    </view>
  </view>
</template>

<script>
import tSlider from 'tdesign-uniapp/slider/slider';
export default {
  components: {
    tSlider,
  },
  data() {
    return {
      marks: {
        0: '0',
        20: '20',
        40: '40',
        60: '60',
        80: '80',
        100: '100',
      },
    };
  },
  created() {},
  methods: {
    handleChange(e) {
      console.log(e);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,E=`<template>
  <view>
    <t-slider
      :value="35"
      disabled
    />

    <view class="wrapper">
      <t-slider
        show-extreme-value
        label="\${value}"
        :value="[40, 60]"
        range
        disabled
      />
    </view>

    <view class="wrapper">
      <t-slider
        range
        :value="[20, 60]"
        :marks="marks"
        :step="20"
        disabled
      />
    </view>
  </view>
</template>

<script>
import tSlider from 'tdesign-uniapp/slider/slider';
export default {
  components: {
    tSlider,
  },
  data() {
    return {
      marks: {
        0: '0',
        20: '20',
        40: '40',
        60: '60',
        80: '80',
        100: '100',
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
  <view class="wrapper">
    <t-slider
      :default-value="30"
      theme="capsule"
    />

    <t-slider
      :default-value="[40, 60]"
      range
      theme="capsule"
    />

    <t-slider
      :default-value="[40, 60]"
      range
      label="\${value}"
      theme="capsule"
    />

    <t-slider
      :default-value="60"
      :marks="marks"
      :step="20"
      theme="capsule"
    />

    <t-slider
      :default-value="[20, 80]"
      range
      :marks="marks"
      :step="20"
      theme="capsule"
    />
  </view>
</template>

<script>
import tSlider from 'tdesign-uniapp/slider/slider';
export default {
  components: {
    tSlider,
  },
  data() {
    return {
      marks: {
        0: '0',
        20: '20',
        40: '40',
        60: '60',
        80: '80',
        100: '100',
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
`,x=`<template>
  <view>
    <view class="demo-desc">
      单游标垂直滑块
    </view>
    <view class="wrapper">
      <t-slider
        vertical
        :value="singlevalue"
        label="\${singlevalue}"
        @change="handleSingleChange"
      />
    </view>
    <view class="demo-desc">
      带刻度的双游标垂直滑块
    </view>
    <view class="wrapper">
      <t-slider
        vertical
        range
        :default-value="[20, 60]"
        :marks="marks"
        :step="20"
      />
    </view>
    <view class="demo-desc">
      胶囊型垂直滑块
    </view>
    <view class="wrapper">
      <t-slider
        vertical
        :value="capsuleValue"
        label="\${capsuleValue}"
        theme="capsule"
        @change="handleCapsuleChange"
      />
    </view>
    <view class="demo-desc">
      带刻度的胶囊型垂直滑块
    </view>
    <view class="wrapper">
      <t-slider
        vertical
        :default-value="[20, 80]"
        range
        :marks="marks"
        :step="20"
        theme="capsule"
      />
    </view>
  </view>
</template>

<script>
import tSlider from 'tdesign-uniapp/slider/slider';
export default {
  components: {
    tSlider,
  },
  data() {
    return {
      singlevalue: 35,
      capsuleValue: 35,
      marks: {
        0: '0',
        20: '20',
        40: '40',
        60: '60',
        80: '80',
        100: '100',
      },
    };
  },
  created() {},
  methods: {
    handleSingleChange(e) {
      this.singlevalue = e.value;
    },
    handleCapsuleChange(e) {
      this.capsuleValue = e.value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,S=u({data(){return{DemoexamplebaseCode:_,DemoexamplerangeCode:w,DemoexamplelabelCode:k,DemoexamplestepCode:D,DemoexampledisabledCode:E,DemoexamplecapsuleCode:y,DemoexampleverticalCode:x}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:o,tdDocTabs:a,tdDocPhone:r}=this.$refs,p="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/slider/slider";o&&(o.docInfo={title:"Slider 滑动选择器",desc:"用于选择横轴上的数值、区间、档位。"}),a&&(a.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],a.onchange=({detail:m})=>this.tab=m),r&&(r.qrcodeUrl=p),f.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}}),A={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},C={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"slider"},M=["tab"],R={name:"DEMO"},N=s(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TSlider <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/slider/slider.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>单游标滑块</p>`,5),$={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},V=["code"],T={slot:"action"},q=e("p",null,"双游标滑块",-1),B={class:"tdesign-demo-wrapper tdesign-demo-item-- README-range tdesign-demo-item-- README"},P=["code"],j={slot:"action"},I=e("p",null,"带数值滑动选择器",-1),O={class:"tdesign-demo-wrapper tdesign-demo-item-- README-label tdesign-demo-item-- README"},z=["code"],F={slot:"action"},H=e("p",null,"带刻度滑动选择器",-1),U={class:"tdesign-demo-wrapper tdesign-demo-item-- README-step tdesign-demo-item-- README"},G=["code"],Q={slot:"action"},J=e("h3",{id:"组件状态"},[c("组件状态 "),e("a",{class:"header-anchor",href:"#组件状态"})],-1),K=e("p",null,"滑块禁用状态",-1),L={class:"tdesign-demo-wrapper tdesign-demo-item-- README-disabled tdesign-demo-item-- README"},W=["code"],X={slot:"action"},Y=e("h4",{id:"特殊样式"},[c("特殊样式 "),e("a",{class:"header-anchor",href:"#特殊样式"})],-1),Z=e("p",null,"胶囊型滑块",-1),ee={class:"tdesign-demo-wrapper tdesign-demo-item-- README-capsule tdesign-demo-item-- README"},te=["code"],de={slot:"action"},ne=e("h4",{id:"垂直状态"},[c("垂直状态 "),e("a",{class:"header-anchor",href:"#垂直状态"})],-1),ae=e("p",null,"垂直方向的滑块",-1),se={class:"tdesign-demo-wrapper tdesign-demo-item-- README-vertical tdesign-demo-item-- README"},oe=["code"],re={slot:"action"},le=s(`<h2 id="faq">FAQ <a class="header-anchor" href="#faq"></a></h2><p>当 slider 外层使用 <code>hidden</code> 包裹，需要在 <code>hidden = false</code> 时，重新调用组件的 <code>init</code> 方法，才能正常渲染（在t-popup/t-dialog中同理）。如下：</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>t-slider</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>slider<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> $slider <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">selectComponent</span><span class="token punctuation">(</span><span class="token string">&#39;#slider&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

$slider<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,4),ie={ref:"tdDocPhone"},ce=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/slider/slider",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),pe=[ce],me=e("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"slider"},null,-1),he={name:"API"},ue=s('<h3 id="slider-props">Slider Props <a class="header-anchor" href="#slider-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>colors</td><td>Array</td><td>[]</td><td>已废弃。颜色，[已选择, 未选择]。TS 类型：<code>Array&lt;string&gt;</code></td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>undefined</td><td>是否禁用组件</td><td>N</td></tr><tr><td>disabled-color</td><td>Array</td><td>[]</td><td>已废弃。禁用状态滑动条的颜色，[已选, 未选]。TS 类型：<code>Array&lt;string&gt;</code></td><td>N</td></tr><tr><td>label</td><td>String / Boolean / Function</td><td>false</td><td>滑块当前值文本。<br>值为 true 显示默认文案；值为 false 不显示滑块当前值文本；<br>值为 <code>${value}%</code> 则表示组件会根据占位符渲染文案；<br>值类型为函数时，参数 <code>value</code> 标识滑块值，参数 <code>position=start</code> 表示范围滑块的起始值，参数 <code>position=end</code> 表示范围滑块的终点值。TS 类型：<code>string \\| boolean</code></td><td>N</td></tr><tr><td>marks</td><td>Object / Array</td><td>{}</td><td>刻度标记，示例：<code>[0, 10, 40, 200]</code> 或者 <code>{ 5: &#39;5¥&#39;, 10: &#39;10%&#39; }</code>。TS 类型：<code>Record&lt;number, string&gt; \\| Array&lt;number&gt;</code></td><td>N</td></tr><tr><td>max</td><td>Number</td><td>100</td><td>滑块范围最大值</td><td>N</td></tr><tr><td>min</td><td>Number</td><td>0</td><td>滑块范围最小值</td><td>N</td></tr><tr><td>range</td><td>Boolean</td><td>false</td><td>双游标滑块</td><td>N</td></tr><tr><td>show-extreme-value</td><td>Boolean</td><td>false</td><td>是否边界值</td><td>N</td></tr><tr><td>step</td><td>Number</td><td>1</td><td>步长</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>default</td><td><code>0.30.0</code>。滑块风格。可选项：default/capsule</td><td>N</td></tr><tr><td>value</td><td>Number / Array</td><td>0</td><td>滑块值。TS 类型：<code>SliderValue</code> <code>type SliderValue = number \\| Array&lt;number&gt;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/slider/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-value</td><td>Number / Array</td><td>undefined</td><td>滑块值。非受控属性。TS 类型：<code>SliderValue</code> <code>type SliderValue = number \\| Array&lt;number&gt;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/slider/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>vertical</td><td>Boolean</td><td>false</td><td>是否是垂直的滑块（渲染垂直滑块时，默认高度为400rpx，可通过修改<code>--td-slider-bar-height</code>来自定义高度）</td><td>N</td></tr></tbody></table><h3 id="slider-events">Slider Events <a class="header-anchor" href="#slider-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: SliderValue)</code></td><td>滑块值变化时触发</td></tr><tr><td>dragend</td><td><code>(value: SliderValue, e: TouchEvent)</code></td><td>结束拖动时触发</td></tr><tr><td>dragstart</td><td><code>(e: TouchEvent)</code></td><td>开始拖动时触发</td></tr></tbody></table><h3 id="slider-external-classes">Slider External Classes <a class="header-anchor" href="#slider-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-bar</td><td>滑道底部样式类</td></tr><tr><td>t-class-bar-active</td><td>滑道激活态样式类</td></tr><tr><td>t-class-bar-disabled</td><td>滑道禁用态样式类</td></tr><tr><td>t-class-cursor</td><td>游标样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-slider-active-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-slider-bar-height</td><td>8rpx</td><td>-</td></tr><tr><td>--td-slider-bar-width</td><td>8rpx</td><td>-</td></tr><tr><td>--td-slider-capsule-bar-color</td><td>@bg-color-component</td><td>-</td></tr><tr><td>--td-slider-capsule-bar-heihgt</td><td>48rpx</td><td>-</td></tr><tr><td>--td-slider-capsule-bar-width</td><td>48rpx</td><td>-</td></tr><tr><td>--td-slider-capsule-line-heihgt</td><td>36rpx</td><td>-</td></tr><tr><td>--td-slider-default-color</td><td>@bg-color-component</td><td>-</td></tr><tr><td>--td-slider-default-color</td><td>@bg-color-component-disabled</td><td>-</td></tr><tr><td>--td-slider-disabled-color</td><td>@brand-color-disabled</td><td>-</td></tr><tr><td>--td-slider-disabled-text-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-slider-dot-bg-color</td><td>#fff</td><td>-</td></tr><tr><td>--td-slider-dot-color</td><td>@component-border</td><td>-</td></tr><tr><td>--td-slider-dot-disabled-bg-color</td><td>#fff</td><td>-</td></tr><tr><td>--td-slider-dot-disabled-border-color</td><td>#f3f3f3</td><td>-</td></tr><tr><td>--td-slider-dot-size</td><td>40rpx</td><td>-</td></tr><tr><td>--td-slider-text-color</td><td>@text-color-primary</td><td>-</td></tr></tbody></table>',9),ge=[ue],ve={name:"DESIGN"},be=s('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当用户需要快捷地进行数值/程度选择时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="滑动选择器与单元格组合使用，单元格作为承载滑动选择器的容器。">滑动选择器与<a href="./cell">单元格</a>组合使用，单元格作为承载滑动选择器的容器。 <a class="header-anchor" href="#滑动选择器与单元格组合使用，单元格作为承载滑动选择器的容器。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/slider/slider-1.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="用于可量化的数值选择，需要精确到具体某个数值-区间。">用于可量化的数值选择，需要精确到具体某个数值/区间。 <a class="header-anchor" href="#用于可量化的数值选择，需要精确到具体某个数值-区间。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/slider/slider-2.png"></div></div><hr><h5 id="用于难以量化的对立数据，以此表示程度。">用于难以量化的对立数据，以此表示程度。 <a class="header-anchor" href="#用于难以量化的对立数据，以此表示程度。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/slider/slider-3.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="当有多个刻度区间时，避免区间数值不一致，造成滑动调整不准确。">当有多个刻度区间时，避免区间数值不一致，造成滑动调整不准确。 <a class="header-anchor" href="#当有多个刻度区间时，避免区间数值不一致，造成滑动调整不准确。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/slider/slider-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/slider/slider-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./stepper">步进器</a></td><td style="text-align:left;">需要进行数量选择时使用。</td></tr></tbody></table>',16),fe=[be],_e=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760510538385"})],-1),we=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function ke(t,o,a,r,p,m){const d=v("Stackblitz");return b(),g("td-doc-content",A,[e("td-doc-header",C,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:t.tab},null,8,M),l(e("div",null,[e("div",R,[N,e("div",$,[e("td-doc-demo",{code:t.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[e("div",T,[n(d,{"demo-name":"base","component-name":" README",code:t.DemoexamplebaseCode},null,8,["code"])])],8,V)]),q,e("div",B,[e("td-doc-demo",{code:t.DemoexamplerangeCode,language:"markup","show-code":"",mode:"open","demo-name":"range","component-name":" README"},[e("div",j,[n(d,{"demo-name":"range","component-name":" README",code:t.DemoexamplerangeCode},null,8,["code"])])],8,P)]),I,e("div",O,[e("td-doc-demo",{code:t.DemoexamplelabelCode,language:"markup","show-code":"",mode:"open","demo-name":"label","component-name":" README"},[e("div",F,[n(d,{"demo-name":"label","component-name":" README",code:t.DemoexamplelabelCode},null,8,["code"])])],8,z)]),H,e("div",U,[e("td-doc-demo",{code:t.DemoexamplestepCode,language:"markup","show-code":"",mode:"open","demo-name":"step","component-name":" README"},[e("div",Q,[n(d,{"demo-name":"step","component-name":" README",code:t.DemoexamplestepCode},null,8,["code"])])],8,G)]),J,K,e("div",L,[e("td-doc-demo",{code:t.DemoexampledisabledCode,language:"markup","show-code":"",mode:"open","demo-name":"disabled","component-name":" README"},[e("div",X,[n(d,{"demo-name":"disabled","component-name":" README",code:t.DemoexampledisabledCode},null,8,["code"])])],8,W)]),Y,Z,e("div",ee,[e("td-doc-demo",{code:t.DemoexamplecapsuleCode,language:"markup","show-code":"",mode:"open","demo-name":"capsule","component-name":" README"},[e("div",de,[n(d,{"demo-name":"capsule","component-name":" README",code:t.DemoexamplecapsuleCode},null,8,["code"])])],8,te)]),ne,ae,e("div",se,[e("td-doc-demo",{code:t.DemoexampleverticalCode,language:"markup","show-code":"",mode:"open","demo-name":"vertical","component-name":" README"},[e("div",re,[n(d,{"demo-name":"vertical","component-name":" README",code:t.DemoexampleverticalCode},null,8,["code"])])],8,oe)]),le]),e("td-doc-phone",ie,pe,512),me],512),[[i,t.tab==="demo"]]),l(e("div",he,ge,512),[[i,t.tab==="api"]]),l(e("div",ve,fe,512),[[i,t.tab==="design"]]),_e,we],512)}const ye=h(S,[["render",ke]]);export{ye as default};
