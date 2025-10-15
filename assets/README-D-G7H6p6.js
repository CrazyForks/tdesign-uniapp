import{_ as m,d as p,c as v,a as t,w as o,v as s,b as a,e as h,f as g,r as b,o as _}from"./sites-DNPg1eh9.js";import{P as u}from"./prism-bash-zcnM7wlG.js";const f=`<template>
  <view>
    <t-divider />

    <view class="divider-demo__title">
      带文字水平分割线
    </view>

    <t-divider
      content="文字信息"
      align="left"
    />
    <t-divider content="文字信息" />
    <t-divider
      content="文字信息"
      align="right"
    />

    <view class="divider-demo__title">
      垂直分割线
    </view>

    <view class="divider-wrapper">
      <text class="demo-6__text-color">
        文字信息
      </text>
      <t-divider layout="vertical" />
      <text class="demo-6__text-color">
        文字信息
      </text>
      <t-divider layout="vertical" />
      <text class="demo-6__text-color">
        文字信息
      </text>
    </view>
  </view>
</template>

<script>
import tDivider from 'tdesign-uniapp/divider/divider.vue';
import SkylineBehavior from 'packages/demo/src/mixins/skyline.js';

export default {
  components: {
    tDivider,
  },
  mixins: [SkylineBehavior],
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
    <t-divider
      :t-class="skylineRender ? 'skyline-dashed' : ''"
      dashed
    />
    <t-divider
      :t-class="skylineRender ? 'skyline-dashed' : ''"
      dashed
      content="文字信息"
      align="left"
    />
    <t-divider
      :t-class="skylineRender ? 'skyline-dashed' : ''"
      dashed
      content="文字信息"
    />
    <t-divider
      :t-class="skylineRender ? 'skyline-dashed' : ''"
      dashed
      content="文字信息"
      align="right"
    />
  </view>
</template>

<script>
import tDivider from 'tdesign-uniapp/divider/divider.vue';
import SkylineBehavior from 'packages/demo/src/mixins/skyline.js';

export default {
  components: {
    tDivider,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
      skylineRender: false,
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,D=p({data(){return{DemoexamplebaseCode:f,DemoexamplethemeCode:y}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:i,tdDocTabs:d,tdDocPhone:n}=this.$refs,r="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/divider/divider";i&&(i.docInfo={title:"Divider 分割线",desc:"用于分割、组织、细化有一定逻辑的组织元素内容和页面结构。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:c})=>this.tab=c),n&&(n.qrcodeUrl=r),u.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),k={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},x={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"divider"},w=["tab"],E={name:"DEMO"},S=a(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TDivider <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/divider/divider.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="基础分割符">基础分割符 <a class="header-anchor" href="#基础分割符"></a></h3><p>分割符主要是由直线和文字组成，通过<code>slot</code>传入分割线文案或者其他自定义内容，通过<code>layout</code>控制分隔符是垂直还是横向</p>`,5),R={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},C=["code"],A={slot:"action"},N=t("h3",{id:"虚线样式"},[g("虚线样式 "),t("a",{class:"header-anchor",href:"#虚线样式"})],-1),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},$=["code"],B={slot:"action"},z={ref:"tdDocPhone"},P=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/divider/divider",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),j=[P],T=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"divider"},null,-1),V={name:"API"},q=a('<h3 id="divider-props">Divider Props <a class="header-anchor" href="#divider-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>align</td><td>String</td><td>center</td><td>文本位置（仅在水平分割线有效）。可选项：left/right/center</td><td>N</td></tr><tr><td>content</td><td>String / Slot</td><td>-</td><td>子元素。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>dashed</td><td>Boolean</td><td>false</td><td>是否虚线（仅在水平分割线有效）</td><td>N</td></tr><tr><td>layout</td><td>String</td><td>horizontal</td><td>分隔线类型有两种：水平和垂直。可选项：horizontal/vertical</td><td>N</td></tr></tbody></table><h3 id="divider-external-classes">Divider External Classes <a class="header-anchor" href="#divider-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-divider-border-width</td><td>2rpx</td><td>-</td></tr><tr><td>--td-divider-color</td><td>@bg-color-component</td><td>-</td></tr><tr><td>--td-divider-content-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-divider-content-font-size</td><td>@font-size-s</td><td>-</td></tr><tr><td>--td-divider-content-line-height</td><td>40rpx</td><td>-</td></tr><tr><td>--td-divider-content-line-style</td><td>solid</td><td>-</td></tr><tr><td>--td-divider-content-margin</td><td>@spacer-1</td><td>-</td></tr><tr><td>--td-divider-horizontal-margin</td><td>20rpx</td><td>-</td></tr><tr><td>--td-divider-vertical-margin</td><td>@spacer</td><td>-</td></tr></tbody></table>',7),I=[q],O={name:"DESIGN"},H=a('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>为了区分内容与内容之间的分组、层级关系时可使用。</p><h3 id="与页面布局相关">与页面布局相关 <a class="header-anchor" href="#与页面布局相关"></a></h3><h5 id="通栏分割线：横向贯穿整个页面，一般为了区分更加独立性的内容信息，让信息分隔的更明显，更加独立性。">通栏分割线：横向贯穿整个页面，一般为了区分更加独立性的内容信息，让信息分隔的更明显，更加独立性。 <a class="header-anchor" href="#通栏分割线：横向贯穿整个页面，一般为了区分更加独立性的内容信息，让信息分隔的更明显，更加独立性。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/divider/divider-1.png"><em></em></div></div><hr><h5 id="内嵌分割线：一般会在左侧或者右侧预留缺口，目的来区分统一模块下的相关内容，目的是为了让用户浏览大量相关内容时，更加高效。">内嵌分割线：一般会在左侧或者右侧预留缺口，目的来区分统一模块下的相关内容，目的是为了让用户浏览大量相关内容时，更加高效。 <a class="header-anchor" href="#内嵌分割线：一般会在左侧或者右侧预留缺口，目的来区分统一模块下的相关内容，目的是为了让用户浏览大量相关内容时，更加高效。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/divider/divider-2.png"><em></em></div></div><hr><h5 id="组合分割线：通栏分割线与内嵌分割线组合布局。">组合分割线：通栏分割线与内嵌分割线组合布局。 <a class="header-anchor" href="#组合分割线：通栏分割线与内嵌分割线组合布局。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/divider/divider-3.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="当有明显的留白或副标题已经对内容起到分割作用时，要避免过度使用分割线导致的视觉干扰。">当有明显的留白或副标题已经对内容起到分割作用时，要避免过度使用分割线导致的视觉干扰。 <a class="header-anchor" href="#当有明显的留白或副标题已经对内容起到分割作用时，要避免过度使用分割线导致的视觉干扰。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/divider/divider-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/divider/divider-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div>',14),U=[H],G=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760519344220"})],-1),F=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function J(e,i,d,n,r,c){const l=b("Stackblitz");return _(),v("td-doc-content",k,[t("td-doc-header",x,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,w),o(t("div",null,[t("div",E,[S,t("div",R,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",A,[h(l,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,C)]),N,t("div",M,[t("td-doc-demo",{code:e.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",B,[h(l,{"demo-name":"theme","component-name":" README",code:e.DemoexamplethemeCode},null,8,["code"])])],8,$)])]),t("td-doc-phone",z,j,512),T],512),[[s,e.tab==="demo"]]),o(t("div",V,I,512),[[s,e.tab==="api"]]),o(t("div",O,U,512),[[s,e.tab==="design"]]),G,F],512)}const Q=m(D,[["render",J]]);export{Q as default};
