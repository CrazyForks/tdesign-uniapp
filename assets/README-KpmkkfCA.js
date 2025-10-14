import{_ as l,d as h,c as g,a as t,w as a,v as i,b as r,e as m,r as y,o as b}from"./sites-C0tGvoHY.js";import{P as u}from"./prism-bash-zcnM7wlG.js";const f=`<template>
  <view>
    <t-empty
      icon="info-circle-filled"
      description="描述文字"
    />
  </view>
</template>

<script>
import tEmpty from 'tdesign-uniapp/empty/empty';
export default {
  components: {
    tEmpty,
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
  <view>
    <t-empty
      t-class="empty-cls"
      t-class-image="t-empty__image"
      :image="image"
      description="描述文字"
    />
  </view>
</template>

<script>
import tEmpty from 'tdesign-uniapp/empty/empty';

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tEmpty,
  },
  data() {
    return {
      image: 'https://tdesign.gtimg.com/mobile/demos/empty1.png',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,E=`<template>
  <view>
    <t-empty
      icon="info-circle-filled"
      description="描述文字"
    >
      <template
        #action
      >
        <t-button
          theme="primary"
          size="large"
        >
          操作按钮
        </t-button>
      </template>
    </t-empty>
  </view>
</template>

<script>
import tEmpty from 'tdesign-uniapp/empty/empty';
import tButton from 'tdesign-uniapp/button/button';


export default {
  components: {
    tEmpty,
    tButton,
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
`,v=h({data(){return{DemoexamplebaseCode:f,DemoexampleimageEmptyCode:_,DemoexamplebuttonEmptyCode:E}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:d,tdDocTabs:o,tdDocPhone:n}=this.$refs,p="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/empty/empty";d&&(d.docInfo={title:"Empty 空状态",desc:"用于空状态时的占位提示。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:c})=>this.tab=c),n&&(n.qrcodeUrl=p),u.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),D={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},x={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"empty"},k=["tab"],w={name:"DEMO"},A=r(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TEmpty <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/empty/empty.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="类型">类型 <a class="header-anchor" href="#类型"></a></h3><p>图标空状态</p>`,5),C={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},S=["code"],M={slot:"action"},R=t("p",null,"自定义图片空状态",-1),N={class:"tdesign-demo-wrapper tdesign-demo-item-- README-imageEmpty tdesign-demo-item-- README"},$=["code"],P={slot:"action"},j=t("p",null,"带操作空状态",-1),T={class:"tdesign-demo-wrapper tdesign-demo-item-- README-buttonEmpty tdesign-demo-item-- README"},z=["code"],B={slot:"action"},I={ref:"tdDocPhone"},O=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/empty/empty",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),q=[O],V=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"empty"},null,-1),H={name:"API"},U=r('<h3 id="empty-props">Empty Props <a class="header-anchor" href="#empty-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>action</td><td>Slot</td><td>-</td><td>操作按钮。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>description</td><td>String / Slot</td><td>-</td><td>描述文字。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>icon</td><td>String / Object</td><td>-</td><td>图标名称。值为字符串表示图标名称，值为 <code>Object</code> 类型，表示透传至 <code>icon</code></td><td>N</td></tr><tr><td>image</td><td>String / Slot</td><td>-</td><td>图片地址。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr></tbody></table><h3 id="empty-external-classes">Empty External Classes <a class="header-anchor" href="#empty-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-description</td><td>描述样式类</td></tr><tr><td>t-class-image</td><td>图片样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-empty-action-margin-top</td><td>@spacer-4</td><td>-</td></tr><tr><td>--td-empty-description-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-empty-description-font-size</td><td>@font-size-base</td><td>-</td></tr><tr><td>--td-empty-description-line-height</td><td>44rpx</td><td>-</td></tr><tr><td>--td-empty-description-margin-top</td><td>@spacer-2</td><td>-</td></tr><tr><td>--td-empty-icon-color</td><td>@text-color-placeholder</td><td>-</td></tr></tbody></table>',7),G=[U],F={name:"DESIGN"},J=r('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当页面或模块数据为空时使用。</p><h3 id="与页面布局相关">与页面布局相关 <a class="header-anchor" href="#与页面布局相关"></a></h3><h5 id="用于整个页面或某个独立模块的状态展示，在页面、模块内居中。">用于整个页面或某个独立模块的状态展示，在页面、模块内居中。 <a class="header-anchor" href="#用于整个页面或某个独立模块的状态展示，在页面、模块内居中。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/empty/empty-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/empty/empty-2.png"></div></div><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="空状态与步骤条组合使用，通过步骤展示提示用户如何新建-添加。">空状态与<a href="./steps">步骤条</a>组合使用，通过步骤展示提示用户如何新建/添加。 <a class="header-anchor" href="#空状态与步骤条组合使用，通过步骤展示提示用户如何新建-添加。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/empty/empty-3.png"></div></div><hr><h5 id="空状态与按钮组合使用，引导用户直接新建-添加。">空状态与<a href="./button">按钮</a>组合使用，引导用户直接新建/添加。 <a class="header-anchor" href="#空状态与按钮组合使用，引导用户直接新建-添加。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/empty/empty-4.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./result">结果</a></td><td style="text-align:left;">当需要向用户展示操作后的结果反馈时使用。</td></tr></tbody></table>',13),K=[J],L=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760435850866"})],-1),Q=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function W(e,d,o,n,p,c){const s=y("Stackblitz");return b(),g("td-doc-content",D,[t("td-doc-header",x,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,k),a(t("div",null,[t("div",w,[A,t("div",C,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",M,[m(s,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,S)]),R,t("div",N,[t("td-doc-demo",{code:e.DemoexampleimageEmptyCode,language:"markup","show-code":"",mode:"open","demo-name":"imageEmpty","component-name":" README"},[t("div",P,[m(s,{"demo-name":"imageEmpty","component-name":" README",code:e.DemoexampleimageEmptyCode},null,8,["code"])])],8,$)]),j,t("div",T,[t("td-doc-demo",{code:e.DemoexamplebuttonEmptyCode,language:"markup","show-code":"",mode:"open","demo-name":"buttonEmpty","component-name":" README"},[t("div",B,[m(s,{"demo-name":"buttonEmpty","component-name":" README",code:e.DemoexamplebuttonEmptyCode},null,8,["code"])])],8,z)])]),t("td-doc-phone",I,q,512),V],512),[[i,e.tab==="demo"]]),a(t("div",H,G,512),[[i,e.tab==="api"]]),a(t("div",F,K,512),[[i,e.tab==="design"]]),L,Q],512)}const Z=l(v,[["render",W]]);export{Z as default};
