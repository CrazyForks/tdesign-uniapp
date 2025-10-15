import{_ as h,d as m,c as g,a as t,w as s,v as r,b as c,e as a,f as u,r as b,o as f}from"./sites-D4JVSqOo.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view class="wrapper">
    <t-collapse
      :value="activeValues"
      @change="handleChange"
    >
      <t-collapse-panel
        header="折叠面板标题"
        :value="0"
        expand-icon
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
    </t-collapse>
  </view>
</template>

<script>
import tCollapse from 'tdesign-uniapp/collapse/collapse';
import tCollapsePanel from 'tdesign-uniapp/collapse-panel/collapse-panel';
export default {
  components: {
    tCollapse,
    tCollapsePanel,
  },
  data() {
    return {
      activeValues: [0],
    };
  },
  created() {},
  methods: {
    handleChange(e) {
      this.activeValues = e.value;
    },
  },
};
<\/script>
<style>
/* @import './index.css'; */
</style>
`,C=`<template>
  <view class="wrapper">
    <t-collapse
      :value="activeValues"
      @change="handleChange"
    >
      <t-collapse-panel
        header="折叠面板标题"
        :header-right-content="activeValues.indexOf(0) > -1 ? '收起' : '展开'"
        :value="0"
        expand-icon
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
    </t-collapse>
  </view>
</template>
<script>
import tCollapse from 'tdesign-uniapp/collapse/collapse';
import tCollapsePanel from 'tdesign-uniapp/collapse-panel/collapse-panel';
export default {
  components: {
    tCollapse,
    tCollapsePanel,
  },
  data() {
    return {
      activeValues: [0],
    };
  },
  created() {},
  methods: {
    handleChange(e) {
      this.activeValues = e.value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <t-collapse
      :default-value="[0]"
      expand-mutex
      expand-icon
    >
      <t-collapse-panel
        header="折叠面板标题"
        :value="0"
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
      <t-collapse-panel
        header="折叠面板标题"
        :value="1"
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
      <t-collapse-panel
        header="折叠面板标题"
        :value="2"
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
      <t-collapse-panel
        header="折叠面板标题"
        disabled
        :value="3"
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
    </t-collapse>
  </view>
</template>

<script>
import tCollapse from 'tdesign-uniapp/collapse/collapse';
import tCollapsePanel from 'tdesign-uniapp/collapse-panel/collapse-panel';
export default {
  components: {
    tCollapse,
    tCollapsePanel,
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
  <view>
    <t-collapse
      theme="card"
      :default-value="[3]"
      expand-icon
    >
      <t-collapse-panel
        header="折叠面板标题"
        :value="0"
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
      <t-collapse-panel
        header="折叠面板标题"
        :value="1"
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
      <t-collapse-panel
        header="折叠面板标题"
        :value="2"
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
      <t-collapse-panel
        header="折叠面板标题"
        disabled
        :value="3"
      >
        此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
      </t-collapse-panel>
    </t-collapse>
  </view>
</template>

<script>
import tCollapse from 'tdesign-uniapp/collapse/collapse';
import tCollapsePanel from 'tdesign-uniapp/collapse-panel/collapse-panel';
export default {
  components: {
    tCollapse,
    tCollapsePanel,
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
`,D=m({data(){return{DemoexamplebaseCode:_,DemoexampleactionCode:C,DemoexampleaccordionCode:y,DemoexamplethemeCode:x}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:o,tdDocTabs:d,tdDocPhone:l}=this.$refs,p="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/collapse/collapse";o&&(o.docInfo={title:"Collapse 折叠面板",desc:"用于对复杂区域进行分组和隐藏 常用于订单信息展示等"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:i})=>this.tab=i),l&&(l.qrcodeUrl=p),v.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),E={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},k={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"collapse"},w=["tab"],N={name:"DEMO"},A=c(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TCollapse <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/collapse/collapse.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TCollapsePanel <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/collapse-panel/collapse-panel.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="类型">类型 <a class="header-anchor" href="#类型"></a></h3><p>基础折叠面板</p>`,5),S={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},P=["code"],M={slot:"action"},R=t("p",null,"带操作说明",-1),V={class:"tdesign-demo-wrapper tdesign-demo-item-- README-action tdesign-demo-item-- README"},T=["code"],z={slot:"action"},B=t("p",null,"手风琴模式",-1),$={class:"tdesign-demo-wrapper tdesign-demo-item-- README-accordion tdesign-demo-item-- README"},j=["code"],O={slot:"action"},q=t("h3",{id:"样式"},[u("样式 "),t("a",{class:"header-anchor",href:"#样式"})],-1),I=t("p",null,"卡片折叠面板",-1),H={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},U=["code"],G={slot:"action"},F={ref:"tdDocPhone"},J=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/collapse/collapse",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),K=[J],L=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"collapse"},null,-1),Q={name:"API"},W=c('<h3 id="collapse-props">Collapse Props <a class="header-anchor" href="#collapse-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>default-expand-all</td><td>Boolean</td><td>false</td><td>默认是否展开全部</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>-</td><td>是否禁用面板展开/收起操作</td><td>N</td></tr><tr><td>expand-icon</td><td>Boolean</td><td>true</td><td>展开图标</td><td>N</td></tr><tr><td>expand-mutex</td><td>Boolean</td><td>false</td><td>每个面板互斥展开，每次只展开一个面板</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>default</td><td>折叠面板风格。可选项：default/card</td><td>N</td></tr><tr><td>value</td><td>Array</td><td>[]</td><td>展开的面板集合。TS 类型：<code>CollapseValue</code> <code>type CollapseValue = Array&lt;string \\| number&gt;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/collapse/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-value</td><td>Array</td><td>undefined</td><td>展开的面板集合。非受控属性。TS 类型：<code>CollapseValue</code> <code>type CollapseValue = Array&lt;string \\| number&gt;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/collapse/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="collapse-events">Collapse Events <a class="header-anchor" href="#collapse-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: CollapseValue)</code></td><td>切换面板时触发，返回变化的值</td></tr></tbody></table><h3 id="collapsepanel-props">CollapsePanel Props <a class="header-anchor" href="#collapsepanel-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>content</td><td>String / Slot</td><td>-</td><td>折叠面板内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>undefined</td><td>禁止当前面板展开，优先级大于 Collapse 的同名属性</td><td>N</td></tr><tr><td>expand-icon</td><td>Boolean / Slot</td><td>undefined</td><td>当前折叠面板展开图标，优先级大于 Collapse 的同名属性。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>header</td><td>String / Slot</td><td>-</td><td>面板头内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>header-left-icon</td><td>String / Slot</td><td>-</td><td>面板头左侧图标。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>header-right-content</td><td>String / Slot</td><td>-</td><td>面板头的右侧区域，一般用于呈现面板操作。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>placement</td><td>String</td><td>bottom</td><td><code>0.34.0</code>。选项卡内容的位置。可选项：bottom/top</td><td>N</td></tr><tr><td>value</td><td>String / Number</td><td>-</td><td>当前面板唯一标识，如果值为空则取当前面下标兜底作为唯一标识</td><td>N</td></tr></tbody></table><h3 id="collapsepanel-external-classes">CollapsePanel External Classes <a class="header-anchor" href="#collapsepanel-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-header</td><td>头部样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-collapse-border-color</td><td>@border-level-1-color</td><td>-</td></tr><tr><td>--td-collapse-content-font-size</td><td>@font-size-base</td><td>-</td></tr><tr><td>--td-collapse-content-line-height</td><td>1.5</td><td>-</td></tr><tr><td>--td-collapse-content-padding</td><td>32rpx</td><td>-</td></tr><tr><td>--td-collapse-content-text-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-collapse-extra-font-size</td><td>@font-size-m</td><td>-</td></tr><tr><td>--td-collapse-header-height</td><td>auto</td><td>-</td></tr><tr><td>--td-collapse-header-text-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-collapse-header-text-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-collapse-horizontal-padding</td><td>32rpx</td><td>-</td></tr><tr><td>--td-collapse-icon-color</td><td>@font-gray-3</td><td>-</td></tr><tr><td>--td-collapse-panel-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-collapse-title-font-size</td><td>@font-size-m</td><td>-</td></tr></tbody></table>',11),X=[W],Y={name:"DESIGN"},Z=c('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当信息较多，需要进行收纳时使用。</p><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="经常用于信息种类较多的页面，将相对次要的信息收纳起来，让用户能够关注到页面中的主要信息或流程。">经常用于信息种类较多的页面，将相对次要的信息收纳起来，让用户能够关注到页面中的主要信息或流程。 <a class="header-anchor" href="#经常用于信息种类较多的页面，将相对次要的信息收纳起来，让用户能够关注到页面中的主要信息或流程。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/collapse/collapse-1.png"></div><hr><h5 id="在展示多条内容较长的同类型信息时，通常从中抽取出关键信息作为标题，收纳在手风琴式折叠面板中，便于用户检索和查看。">在展示多条内容较长的同类型信息时，通常从中抽取出关键信息作为标题，收纳在手风琴式折叠面板中，便于用户检索和查看。 <a class="header-anchor" href="#在展示多条内容较长的同类型信息时，通常从中抽取出关键信息作为标题，收纳在手风琴式折叠面板中，便于用户检索和查看。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/collapse/collapse-2.png"></div></div><hr><h5 id="在网站中，经常使用折叠面板作为分类导航，将页面进行归类、收纳在折叠面板中，展开后可点击跳转。">在网站中，经常使用折叠面板作为分类导航，将页面进行归类、收纳在折叠面板中，展开后可点击跳转。 <a class="header-anchor" href="#在网站中，经常使用折叠面板作为分类导航，将页面进行归类、收纳在折叠面板中，展开后可点击跳转。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/collapse/collapse-3.png"></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="当信息层级较多时，不建议嵌套折叠面板，层级过多时建议审视信息结构或使用其它交互方式展示。">当信息层级较多时，不建议嵌套折叠面板，层级过多时建议审视信息结构或使用其它交互方式展示。 <a class="header-anchor" href="#当信息层级较多时，不建议嵌套折叠面板，层级过多时建议审视信息结构或使用其它交互方式展示。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/collapse/collapse-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="不建议使用右箭头作为折叠面板的展开图标，用户可能会误把它认作跳转二级页面的入口。">不建议使用右箭头作为折叠面板的展开图标，用户可能会误把它认作跳转二级页面的入口。 <a class="header-anchor" href="#不建议使用右箭头作为折叠面板的展开图标，用户可能会误把它认作跳转二级页面的入口。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/collapse/collapse-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./dropdown-menu">下拉菜单</a></td><td style="text-align:left;">当内容较多时，需要通过筛选快速定位某一类内容时使用。</td></tr></tbody></table>',19),tt=[Z],et=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760510538347"})],-1),dt=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function nt(e,o,d,l,p,i){const n=b("Stackblitz");return f(),g("td-doc-content",E,[t("td-doc-header",k,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,w),s(t("div",null,[t("div",N,[A,t("div",S,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",M,[a(n,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,P)]),R,t("div",V,[t("td-doc-demo",{code:e.DemoexampleactionCode,language:"markup","show-code":"",mode:"open","demo-name":"action","component-name":" README"},[t("div",z,[a(n,{"demo-name":"action","component-name":" README",code:e.DemoexampleactionCode},null,8,["code"])])],8,T)]),B,t("div",$,[t("td-doc-demo",{code:e.DemoexampleaccordionCode,language:"markup","show-code":"",mode:"open","demo-name":"accordion","component-name":" README"},[t("div",O,[a(n,{"demo-name":"accordion","component-name":" README",code:e.DemoexampleaccordionCode},null,8,["code"])])],8,j)]),q,I,t("div",H,[t("td-doc-demo",{code:e.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",G,[a(n,{"demo-name":"theme","component-name":" README",code:e.DemoexamplethemeCode},null,8,["code"])])],8,U)])]),t("td-doc-phone",F,K,512),L],512),[[r,e.tab==="demo"]]),s(t("div",Q,X,512),[[r,e.tab==="api"]]),s(t("div",Y,tt,512),[[r,e.tab==="design"]]),et,dt],512)}const lt=h(D,[["render",nt]]);export{lt as default};
