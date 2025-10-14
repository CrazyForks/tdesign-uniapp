import{_ as p,d as u,c as v,a as e,w as i,v as r,b as c,e as d,t as g,f as l,r as _,o as w}from"./sites-BNdcO7Ez.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const E=`<template>
  <view class="demo-rate">
    <view class="demo-rate__title">
      实心评分
    </view>

    <t-rate
      :value="value"
      @change="onChange"
    />
  </view>
</template>

<script>
import tRate from 'tdesign-uniapp/rate/rate';
export default {
  components: {
    tRate,
  },
  data() {
    return {
      value: 3,
    };
  },
  created() {},
  methods: {
    onChange(e) {
      const { value } = e;
      this.value = value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,b=`<template>
  <view class="demo-rate">
    <view class="demo-rate__title">
      自定义评分
    </view>
    <t-rate
      :value="value"
      icon="thumb-up"
      @change="onChange"
    />
  </view>
</template>

<script>
import tRate from 'tdesign-uniapp/rate/rate';
export default {
  components: {
    tRate,
  },
  data() {
    return {
      value: 3,
    };
  },
  created() {},
  methods: {
    onChange(e) {
      const { value } = e;
      this.value = value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,x=`<template>
  <view class="demo-rate">
    <view class="demo-rate__title">
      自定义评分数量
    </view>
    <!-- 自定义评分数量，设置属性：count -->
    <t-rate
      :value="value"
      :count="3"
      @change="onChange"
    />
  </view>
</template>

<script>
import tRate from 'tdesign-uniapp/rate/rate';
export default {
  components: {
    tRate,
  },
  data() {
    return {
      value: 2,
    };
  },
  created() {},
  methods: {
    onChange(e) {
      const { value } = e;
      this.value = value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,D=`<template>
  <view>
    <view class="demo-rate">
      <view class="demo-rate__title">
        带描述评分
      </view>
      <!-- 自定义带描述评分，设置属性：texts -->
      <t-rate
        :value="value[0]"
        :data-index="0"
        :show-text="true"
        :texts="texts"
        @change="onChange($event, { index: 0 })"
      />
    </view>
    <view class="demo-rate">
      <view class="demo-rate__title">
        带描述评分
      </view>
      <!-- 带描述评分，设置属性：showText -->
      <t-rate
        :value="value[1]"
        :data-index="1"
        :show-text="true"
        @change="onChange($event, { index: 1 })"
      />
    </view>

    <view class="demo-rate">
      <view class="demo-rate__title">
        带描述评分
      </view>
      <t-rate
        :value="value[2]"
        :data-index="2"
        :show-text="true"
        @change="onChange($event, { index: 2 })"
      />
    </view>
  </view>
</template>

<script>
import tRate from 'tdesign-uniapp/rate/rate';
export default {
  components: {
    tRate,
  },
  data() {
    return {
      value: [3, 3, 0],
      texts: ['1分', '2分', '3分', '4分', '5分'],
    };
  },
  created() {},
  methods: {
    onChange(e, { index }) {
      const { value } = e;
      this.value[index] = value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,R=`<template>
  <view>
    <view class="demo-desc">
      只可选全星时
    </view>

    <view class="demo-rate">
      <view class="demo-rate__title">
        点击或滑动
      </view>
      <t-rate
        :value="value"
        @change="onChange"
      />
    </view>

    <view class="demo-desc">
      只可选半星时
    </view>

    <view class="demo-rate">
      <view class="demo-rate__title">
        点击或滑动
      </view>
      <t-rate
        :default-value="3"
        allow-half
      />
    </view>
  </view>
</template>

<script>
import tRate from 'tdesign-uniapp/rate/rate';
export default {
  components: {
    tRate,
  },
  data() {
    return {
      value: 3.5,
    };
  },
  created() {},
  methods: {
    onChange(e) {
      const { value } = e;
      this.value = value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,C=`<template>
  <view>
    <view class="demo-rate">
      <view class="demo-rate__title">
        大尺寸 24
      </view>
      <t-rate
        :value="value[0]"
        :data-index="0"
        @change="onChange($event, { index: 0 })"
      />
    </view>
    <view class="demo-rate">
      <view class="demo-rate__title">
        小尺寸 20
      </view>
      <t-rate
        :value="value[1]"
        :data-index="1"
        :size="20"
        @change="onChange($event, { index: 1 })"
      />
    </view>
  </view>
</template>

<script>
import tRate from 'tdesign-uniapp/rate/rate';
export default {
  components: {
    tRate,
  },
  data() {
    return {
      value: [3, 3],
    };
  },
  created() {},
  methods: {
    onChange(e, { index }) {
      const { value } = e;
      this.value[index] = value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <view class="demo-rate custom-color">
      <view class="demo-rate__title">
        填充评分
      </view>
      <t-rate
        :default-value="3"
        allow-half
      />
    </view>
    <view class="demo-rate">
      <view class="demo-rate__title">
        线描评分
      </view>
      <t-rate
        :default-value="3"
        :icon="['star-filled', 'star']"
        color="#00a870"
      />
    </view>
  </view>
</template>

<script>
import tRate from 'tdesign-uniapp/rate/rate';
export default {
  components: {
    tRate,
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
`,A=`<template>
  <view class="demo-rate">
    <view class="rate-wrapper">
      <t-rate
        :value="value"
        size="60rpx"
        :texts="texts"
        @change="onChange"
      />
    </view>
    <view :class="'desc desc--' + (value > 3 ? 'active' : '')">
      {{ texts[value - 1] }}
    </view>
  </view>
</template>

<script>
import tRate from 'tdesign-uniapp/rate/rate';
export default {
  components: {
    tRate,
  },
  data() {
    return {
      value: 4,
      texts: ['非常糟糕', '有些糟糕', '可以尝试', '可以前往', '推荐前往'],
    };
  },
  created() {},
  methods: {
    onChange(e) {
      const { value } = e;
      this.value = value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,M=u({data(){return{DemoexamplebaseCode:E,DemoexamplecustomCode:b,DemoexamplecountCode:x,DemoexampleshowtextCode:D,DemoexampleactionCode:R,DemoexamplesizeCode:C,DemoexamplecolorCode:y,DemoexamplespecialCode:A}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:a,tdDocTabs:o,tdDocPhone:s}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/rate/rate";a&&(a.docInfo={title:"Rate 评分",desc:"用于对某行为/事物进行打分。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:h})=>this.tab=h),s&&(s.qrcodeUrl=m),f.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}}),N={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},S={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"rate"},k=["tab"],$={name:"DEMO"},z=c(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TRate <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/rate/rate.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>实心评分</p>`,5),B={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},P=["code"],T={slot:"action"},V=e("p",null,"自定义评分",-1),j={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom tdesign-demo-item-- README"},q=["code"],I={slot:"action"},F=e("p",null,"自定义评分数量",-1),O={class:"tdesign-demo-wrapper tdesign-demo-item-- README-count tdesign-demo-item-- README"},H=["code"],U={slot:"action"},G=e("p",null,"带描述评分",-1),J={class:"tdesign-demo-wrapper tdesign-demo-item-- README-show-text tdesign-demo-item-- README"},K=["code"],L={slot:"action"},Q=e("h3",{id:"组件状态"},[l("组件状态 "),e("a",{class:"header-anchor",href:"#组件状态"})],-1),W={class:"tdesign-demo-wrapper tdesign-demo-item-- README-action tdesign-demo-item-- README"},X=["code"],Y={slot:"action"},Z=e("h3",{id:"组件样式"},[l("组件样式 "),e("a",{class:"header-anchor",href:"#组件样式"})],-1),ee=e("p",null,"评分大小",-1),te={class:"tdesign-demo-wrapper tdesign-demo-item-- README-size tdesign-demo-item-- README"},ne=["code"],de={slot:"action"},oe=e("p",null,"设置评分颜色",-1),ae={class:"tdesign-demo-wrapper tdesign-demo-item-- README-color tdesign-demo-item-- README"},se=["code"],ie={slot:"action"},re=e("h3",{id:"特殊样式"},[l("特殊样式 "),e("a",{class:"header-anchor",href:"#特殊样式"})],-1),ce=e("p",null,"竖向带描述评分",-1),le={class:"tdesign-demo-wrapper tdesign-demo-item-- README-special tdesign-demo-item-- README"},me=["code"],he={slot:"action"},pe=e("p",null,"自定义图片前缀",-1),ue={ref:"tdDocPhone"},ve=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/rate/rate",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),ge=[ve],_e=e("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"rate"},null,-1),we={name:"API"},fe=c('<h3 id="rate-props">Rate Props <a class="header-anchor" href="#rate-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>allow-half</td><td>Boolean</td><td>false</td><td>是否允许半选</td><td>N</td></tr><tr><td>color</td><td>String / Array</td><td>&#39;#ED7B2F&#39;</td><td><code>0.30.0</code>。评分图标的颜色，样式中默认为 #ED7B2F。一个值表示设置选中高亮的五角星颜色，示例：[选中颜色]。数组则表示分别设置 选中高亮的五角星颜色 和 未选中暗灰的五角星颜色，[选中颜色，未选中颜色]。示例：[&#39;#ED7B2F&#39;, &#39;#E3E6EB&#39;]。TS 类型：<code>string \\| Array&lt;string&gt;</code></td><td>N</td></tr><tr><td>count</td><td>Number</td><td>5</td><td>评分的数量</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>undefined</td><td>是否禁用评分</td><td>N</td></tr><tr><td>gap</td><td>String / Number</td><td>8</td><td>评分图标的间距</td><td>N</td></tr><tr><td>icon</td><td>String / Array</td><td>-</td><td><code>0.30.0</code>。自定义评分图标，[选中图标，未选中图标]。TS 类型：<code>string \\| string[]</code></td><td>N</td></tr><tr><td>icon-prefix</td><td>String</td><td>undefined</td><td>定义图标前缀</td><td>N</td></tr><tr><td>placement</td><td>String</td><td>top</td><td>选择评分弹框的位置，值为空字符表示不显示评分弹框。可选项：top / bottom / &#39;&#39;</td><td>N</td></tr><tr><td>show-text</td><td>Boolean</td><td>false</td><td>是否显示对应的辅助文字</td><td>N</td></tr><tr><td>size</td><td>String</td><td>24px</td><td>评分图标的大小</td><td>N</td></tr><tr><td>texts</td><td>Array</td><td>[]</td><td>评分等级对应的辅助文字。组件内置默认值为：[&#39;极差&#39;, &#39;失望&#39;, &#39;一般&#39;, &#39;满意&#39;, &#39;惊喜&#39;]。自定义值示例：[&#39;1分&#39;, &#39;2分&#39;, &#39;3分&#39;, &#39;4分&#39;, &#39;5分&#39;]。TS 类型：<code>Array&lt;string&gt;</code></td><td>N</td></tr><tr><td>value</td><td>Number</td><td>0</td><td>选择评分的值</td><td>N</td></tr><tr><td>default-value</td><td>Number</td><td>undefined</td><td>选择评分的值。非受控属性</td><td>N</td></tr><tr><td>variant</td><td>String</td><td>outline</td><td>已废弃。形状类型，有描边类型和填充类型两种。可选项：outline/filled</td><td>N</td></tr></tbody></table><h3 id="rate-events">Rate Events <a class="header-anchor" href="#rate-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: number)</code></td><td>评分数改变时触发</td></tr></tbody></table><h3 id="rate-external-classes">Rate External Classes <a class="header-anchor" href="#rate-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-icon</td><td>图标样式类</td></tr><tr><td>t-class-text</td><td>文本样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-rate-icon-scale</td><td>1.33</td><td>-</td></tr><tr><td>--td-rate-selected-color</td><td>@warning-color</td><td>-</td></tr><tr><td>--td-rate-text-active-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-rate-text-active-font-weight</td><td>600</td><td>-</td></tr><tr><td>--td-rate-text-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-rate-text-font-size</td><td>@font-size-m</td><td>-</td></tr><tr><td>--td-rate-unselected-color</td><td>@component-border</td><td>-</td></tr></tbody></table>',9),Ee=[fe],be={name:"DESIGN"},xe=c('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要对某行为/事物进行简单的星级评定时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="通常结合多行文本框、标签使用，常见于评论场景，用户对某事物进行星级评定后，可选择预设的文本标签、或在文本框中撰写内容来进行更详细的评价。">通常结合多行文本框、标签使用，常见于评论场景，用户对某事物进行星级评定后，可选择预设的文本标签、或在文本框中撰写内容来进行更详细的评价。 <a class="header-anchor" href="#通常结合多行文本框、标签使用，常见于评论场景，用户对某事物进行星级评定后，可选择预设的文本标签、或在文本框中撰写内容来进行更详细的评价。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/rate/rate-1.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="在较为严谨的评论场景，通常结合辅助文字，帮助用户更好地理解每个星级的含义，避免个体的打分标准不统一。">在较为严谨的评论场景，通常结合辅助文字，帮助用户更好地理解每个星级的含义，避免个体的打分标准不统一。 <a class="header-anchor" href="#在较为严谨的评论场景，通常结合辅助文字，帮助用户更好地理解每个星级的含义，避免个体的打分标准不统一。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/rate/rate-2.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="可结合业务场景自定义评分图标，如使用品牌的icon，增强品牌透出，但不建议使用过于复杂的图形作为评分图标。">可结合业务场景自定义评分图标，如使用品牌的icon，增强品牌透出，但不建议使用过于复杂的图形作为评分图标。 <a class="header-anchor" href="#可结合业务场景自定义评分图标，如使用品牌的icon，增强品牌透出，但不建议使用过于复杂的图形作为评分图标。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/rate/rate-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/rate/rate-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="在同一个评论场景中，评分机制应保持一致，不建议将半星、整星的评分机制混用。">在同一个评论场景中，评分机制应保持一致，不建议将半星、整星的评分机制混用。 <a class="header-anchor" href="#在同一个评论场景中，评分机制应保持一致，不建议将半星、整星的评分机制混用。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/rate/rate-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div>',14),De=[xe],Re=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760432202957"})],-1),Ce=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function ye(t,a,o,s,m,h){const n=_("Stackblitz");return w(),v("td-doc-content",N,[e("td-doc-header",S,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:t.tab},null,8,k),i(e("div",null,[e("div",$,[z,e("div",B,[e("td-doc-demo",{code:t.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[e("div",T,[d(n,{"demo-name":"base","component-name":" README",code:t.DemoexamplebaseCode},null,8,["code"])])],8,P)]),V,e("div",j,[e("td-doc-demo",{code:t.DemoexamplecustomCode,language:"markup","show-code":"",mode:"open","demo-name":"custom","component-name":" README"},[e("div",I,[d(n,{"demo-name":"custom","component-name":" README",code:t.DemoexamplecustomCode},null,8,["code"])])],8,q)]),F,e("div",O,[e("td-doc-demo",{code:t.DemoexamplecountCode,language:"markup","show-code":"",mode:"open","demo-name":"count","component-name":" README"},[e("div",U,[d(n,{"demo-name":"count","component-name":" README",code:t.DemoexamplecountCode},null,8,["code"])])],8,H)]),G,e("div",J,[e("td-doc-demo",{code:t.DemoexampleshowtextCode,language:"markup","show-code":"",mode:"open","demo-name":"show-text","component-name":" README"},[e("div",L,[d(n,{"demo-name":"show-text","component-name":" README",code:t.DemoexampleshowtextCode},null,8,["code"])])],8,K)]),Q,e("div",W,[e("td-doc-demo",{code:t.DemoexampleactionCode,language:"markup","show-code":"",mode:"open","demo-name":"action","component-name":" README"},[e("div",Y,[d(n,{"demo-name":"action","component-name":" README",code:t.DemoexampleactionCode},null,8,["code"])])],8,X)]),Z,ee,e("div",te,[e("td-doc-demo",{code:t.DemoexamplesizeCode,language:"markup","show-code":"",mode:"open","demo-name":"size","component-name":" README"},[e("div",de,[d(n,{"demo-name":"size","component-name":" README",code:t.DemoexamplesizeCode},null,8,["code"])])],8,ne)]),oe,e("div",ae,[e("td-doc-demo",{code:t.DemoexamplecolorCode,language:"markup","show-code":"",mode:"open","demo-name":"color","component-name":" README"},[e("div",ie,[d(n,{"demo-name":"color","component-name":" README",code:t.DemoexamplecolorCode},null,8,["code"])])],8,se)]),re,ce,e("div",le,[e("td-doc-demo",{code:t.DemoexamplespecialCode,language:"markup","show-code":"",mode:"open","demo-name":"special","component-name":" README"},[e("div",he,[d(n,{"demo-name":"special","component-name":" README",code:t.DemoexamplespecialCode},null,8,["code"])])],8,me)]),pe,e("p",null,g(t.iconPrefix),1)]),e("td-doc-phone",ue,ge,512),_e],512),[[r,t.tab==="demo"]]),i(e("div",we,Ee,512),[[r,t.tab==="api"]]),i(e("div",be,De,512),[[r,t.tab==="design"]]),Re,Ce],512)}const Ne=p(M,[["render",ye]]);export{Ne as default};
