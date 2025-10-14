import{_ as u,d as b,c as h,a as t,w as s,v as r,b as p,f as g,e as n,r as f,o as m}from"./sites-_W3AzEs2.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const _=`<template>
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
`,x=`<template>
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
`,C=`<template>
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
`,D=b({data(){return{DemoexamplebaseCode:_,DemoexampleactionCode:x,DemoexampleaccordionCode:y,DemoexamplethemeCode:C}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:a,tdDocTabs:o,tdDocPhone:l}=this.$refs,c="https://novlan1.github.io/tdesign-uniapp#/pages-more/collapse/collapse";a&&(a.docInfo={title:"Collapse 折叠面板",desc:"用于对复杂区域进行分组和隐藏 常用于订单信息展示等"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:i})=>this.tab=i),l&&(l.qrcodeUrl=c),v.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),E={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},k={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"collapse"},w=["tab"],S={name:"DEMO"},A={style:{background:"#ecf2fe",display:"flex","align-items":"center","line-height":"20px",padding:"14px 24px","border-radius":"3px",color:"#555a65"}},N={fill:"none",viewBox:"0 0 16 16",width:"16px",height:"16px",style:{"margin-right":"5px"}},q=t("path",{fill:"#0052d9",d:"M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z",fillOpacity:"0.9"},null,-1),M=[q],V=p(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-collapse&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/collapse/collapse&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;t-collapse-panel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/collapse-panel/collapse-panel&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/P67sAimx75Sy" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="类型">类型 <a class="header-anchor" href="#类型"></a></h3><p>基础折叠面板</p>`,8),P={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},R=["code"],z={slot:"action"},T=t("p",null,"带操作说明",-1),B={class:"tdesign-demo-wrapper tdesign-demo-item-- README-action tdesign-demo-item-- README"},$=["code"],j={slot:"action"},O=t("p",null,"手风琴模式",-1),I={class:"tdesign-demo-wrapper tdesign-demo-item-- README-accordion tdesign-demo-item-- README"},H=["code"],U={slot:"action"},G=t("h3",{id:"样式"},[g("样式 "),t("a",{class:"header-anchor",href:"#样式"})],-1),J=t("p",null,"卡片折叠面板",-1),F={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},K=["code"],L={slot:"action"},Q={ref:"tdDocPhone"},W=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp#/pages-more/collapse/collapse",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),X=[W],Y=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"collapse"},null,-1),Z={name:"API"},tt=p('<h3 id="collapse-props">Collapse Props <a class="header-anchor" href="#collapse-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>default-expand-all</td><td>Boolean</td><td>false</td><td>默认是否展开全部</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>-</td><td>是否禁用面板展开/收起操作</td><td>N</td></tr><tr><td>expand-icon</td><td>Boolean</td><td>true</td><td>展开图标</td><td>N</td></tr><tr><td>expand-mutex</td><td>Boolean</td><td>false</td><td>每个面板互斥展开，每次只展开一个面板</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>default</td><td>折叠面板风格。可选项：default/card</td><td>N</td></tr><tr><td>value</td><td>Array</td><td>[]</td><td>展开的面板集合。TS 类型：<code>CollapseValue</code> <code>type CollapseValue = Array&lt;string \\| number&gt;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/collapse/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-value</td><td>Array</td><td>undefined</td><td>展开的面板集合。非受控属性。TS 类型：<code>CollapseValue</code> <code>type CollapseValue = Array&lt;string \\| number&gt;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/collapse/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="collapse-events">Collapse Events <a class="header-anchor" href="#collapse-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: CollapseValue)</code></td><td>切换面板时触发，返回变化的值</td></tr></tbody></table><h3 id="collapsepanel-props">CollapsePanel Props <a class="header-anchor" href="#collapsepanel-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>content</td><td>String / Slot</td><td>-</td><td>折叠面板内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>undefined</td><td>禁止当前面板展开，优先级大于 Collapse 的同名属性</td><td>N</td></tr><tr><td>expand-icon</td><td>Boolean / Slot</td><td>undefined</td><td>当前折叠面板展开图标，优先级大于 Collapse 的同名属性。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>header</td><td>String / Slot</td><td>-</td><td>面板头内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>header-left-icon</td><td>String / Slot</td><td>-</td><td>面板头左侧图标。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>header-right-content</td><td>String / Slot</td><td>-</td><td>面板头的右侧区域，一般用于呈现面板操作。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>placement</td><td>String</td><td>bottom</td><td><code>0.34.0</code>。选项卡内容的位置。可选项：bottom/top</td><td>N</td></tr><tr><td>value</td><td>String / Number</td><td>-</td><td>当前面板唯一标识，如果值为空则取当前面下标兜底作为唯一标识</td><td>N</td></tr></tbody></table><h3 id="collapsepanel-external-classes">CollapsePanel External Classes <a class="header-anchor" href="#collapsepanel-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-header</td><td>头部样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-collapse-border-color</td><td>@border-level-1-color</td><td>-</td></tr><tr><td>--td-collapse-content-font-size</td><td>@font-size-base</td><td>-</td></tr><tr><td>--td-collapse-content-line-height</td><td>1.5</td><td>-</td></tr><tr><td>--td-collapse-content-padding</td><td>32rpx</td><td>-</td></tr><tr><td>--td-collapse-content-text-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-collapse-extra-font-size</td><td>@font-size-m</td><td>-</td></tr><tr><td>--td-collapse-header-height</td><td>auto</td><td>-</td></tr><tr><td>--td-collapse-header-text-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-collapse-header-text-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-collapse-horizontal-padding</td><td>32rpx</td><td>-</td></tr><tr><td>--td-collapse-icon-color</td><td>@font-gray-3</td><td>-</td></tr><tr><td>--td-collapse-panel-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-collapse-title-font-size</td><td>@font-size-m</td><td>-</td></tr></tbody></table>',11),et=[tt],ot={name:"DESIGN"},dt=p('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当信息较多，需要进行收纳时使用。</p><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="经常用于信息种类较多的页面，将相对次要的信息收纳起来，让用户能够关注到页面中的主要信息或流程。">经常用于信息种类较多的页面，将相对次要的信息收纳起来，让用户能够关注到页面中的主要信息或流程。 <a class="header-anchor" href="#经常用于信息种类较多的页面，将相对次要的信息收纳起来，让用户能够关注到页面中的主要信息或流程。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/collapse/collapse-1.png"></div><hr><h5 id="在展示多条内容较长的同类型信息时，通常从中抽取出关键信息作为标题，收纳在手风琴式折叠面板中，便于用户检索和查看。">在展示多条内容较长的同类型信息时，通常从中抽取出关键信息作为标题，收纳在手风琴式折叠面板中，便于用户检索和查看。 <a class="header-anchor" href="#在展示多条内容较长的同类型信息时，通常从中抽取出关键信息作为标题，收纳在手风琴式折叠面板中，便于用户检索和查看。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/collapse/collapse-2.png"></div></div><hr><h5 id="在网站中，经常使用折叠面板作为分类导航，将页面进行归类、收纳在折叠面板中，展开后可点击跳转。">在网站中，经常使用折叠面板作为分类导航，将页面进行归类、收纳在折叠面板中，展开后可点击跳转。 <a class="header-anchor" href="#在网站中，经常使用折叠面板作为分类导航，将页面进行归类、收纳在折叠面板中，展开后可点击跳转。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/collapse/collapse-3.png"></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="当信息层级较多时，不建议嵌套折叠面板，层级过多时建议审视信息结构或使用其它交互方式展示。">当信息层级较多时，不建议嵌套折叠面板，层级过多时建议审视信息结构或使用其它交互方式展示。 <a class="header-anchor" href="#当信息层级较多时，不建议嵌套折叠面板，层级过多时建议审视信息结构或使用其它交互方式展示。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/collapse/collapse-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="不建议使用右箭头作为折叠面板的展开图标，用户可能会误把它认作跳转二级页面的入口。">不建议使用右箭头作为折叠面板的展开图标，用户可能会误把它认作跳转二级页面的入口。 <a class="header-anchor" href="#不建议使用右箭头作为折叠面板的展开图标，用户可能会误把它认作跳转二级页面的入口。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/collapse/collapse-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./dropdown-menu">下拉菜单</a></td><td style="text-align:left;">当内容较多时，需要通过筛选快速定位某一类内容时使用。</td></tr></tbody></table>',19),nt=[dt],at=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416085522"})],-1),lt=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function st(e,a,o,l,c,i){const d=f("Stackblitz");return m(),h("td-doc-content",E,[t("td-doc-header",k,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,w),s(t("div",null,[t("div",S,[t("div",A,[(m(),h("svg",N,M)),g(" 该组件于 0.7.3 版本上线，请留意版本。 ")]),V,t("div",P,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",z,[n(d,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,R)]),T,t("div",B,[t("td-doc-demo",{code:e.DemoexampleactionCode,language:"markup","show-code":"",mode:"open","demo-name":"action","component-name":" README"},[t("div",j,[n(d,{"demo-name":"action","component-name":" README",code:e.DemoexampleactionCode},null,8,["code"])])],8,$)]),O,t("div",I,[t("td-doc-demo",{code:e.DemoexampleaccordionCode,language:"markup","show-code":"",mode:"open","demo-name":"accordion","component-name":" README"},[t("div",U,[n(d,{"demo-name":"accordion","component-name":" README",code:e.DemoexampleaccordionCode},null,8,["code"])])],8,H)]),G,J,t("div",F,[t("td-doc-demo",{code:e.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",L,[n(d,{"demo-name":"theme","component-name":" README",code:e.DemoexamplethemeCode},null,8,["code"])])],8,K)])]),t("td-doc-phone",Q,X,512),Y],512),[[r,e.tab==="demo"]]),s(t("div",Z,et,512),[[r,e.tab==="api"]]),s(t("div",ot,nt,512),[[r,e.tab==="design"]]),at,lt],512)}const ct=u(D,[["render",st]]);export{ct as default};
