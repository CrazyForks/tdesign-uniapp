import{_ as h,d as m,c as g,a as t,w as l,v as a,b as i,e as s,f as b,r as u,o as f}from"./sites-BI0e1los.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view>
    <t-cell
      title="单行标题"
      hover
      :arrow="true"
    />
    <t-cell
      title="单行标题"
      hover
      required
      arrow
    />
    <t-cell
      title="单行标题"
      hover
      arrow
      aria-label="单行标题，有16条消息"
    >
      <template
        #note
      >
        <t-badge
          :count="16"
        />
      </template>
    </t-cell>
    <t-cell
      title="单行标题"
      hover
    >
      <template
        #note
      >
        <t-switch
          :default-value="true"
        />
      </template>
    </t-cell>
    <t-cell
      title="单行标题"
      hover
      note="辅助信息"
      arrow
    />
    <t-cell
      title="单行标题"
      hover
      arrow
      left-icon="app"
      :bordered="false"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tBadge from 'tdesign-uniapp/badge/badge';
import tSwitch from 'tdesign-uniapp/switch/switch';
export default {
  components: {
    tCell,
    tBadge,
    tSwitch,
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
`,w=`<template>
  <view>
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      hover
      arrow
    />
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      hover
      arrow
      required
    />
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      hover
      arrow
    >
      <template
        #note
      >
        <t-badge
          :count="16"
        />
      </template>
    </t-cell>
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      hover
    >
      <template
        #note
      >
        <t-switch
          :default-value="true"
        />
      </template>
    </t-cell>
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      note="辅助信息"
      hover
      arrow
    />
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      left-icon="app"
      hover
      arrow
    />
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字，长文本自动换行，该选项的描述是一段很长的内容"
      hover
    />
    <t-cell
      title="单行标题"
      description="一段很长很长很长的内容文字"
      hover
      arrow
    >
      <template
        #left-icon
      >
        <view
          class="avatar"
        >
          <!-- #ifndef H5 -->
          <open-data type="userAvatarUrl" />
        <!-- #endif -->
        </view>
      </template>
    </t-cell>
    <t-cell
      title="单行标题"
      description="一段很长很长的内容文字"
      align="top"
      image="https://tdesign.gtimg.com/mobile/demos/avatar1.png"
      hover
      :bordered="false"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tBadge from 'tdesign-uniapp/badge/badge';
import tSwitch from 'tdesign-uniapp/switch/switch';

export default {
  components: {
    tCell,
    tBadge,
    tSwitch,
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
    <t-cell-group theme="card">
      <t-cell
        title="单行标题"
        left-icon="service"
        hover
        arrow
      />
      <t-cell
        title="单行标题"
        left-icon="internet"
        hover
        arrow
      />
      <t-cell
        title="单行标题"
        left-icon="lock-on"
        hover
        arrow
      />
    </t-cell-group>
  </view>
</template>

<script>
import tCellGroup from 'tdesign-uniapp/cell-group/cell-group';
import tCell from 'tdesign-uniapp/cell/cell';
export default {
  components: {
    tCellGroup,
    tCell,
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
`,y=m({data(){return{DemoexamplebaseCode:_,DemoexamplemultipleCode:w,DemoexamplethemeCode:x}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:n,tdDocTabs:d,tdDocPhone:o}=this.$refs,c="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/cell/cell";n&&(n.docInfo={title:"Cell 单元格",desc:"用于各个类别行的信息展示。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:p})=>this.tab=p),o&&(o.qrcodeUrl=c),v.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),k={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},S={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"cell"},D=["tab"],E={name:"DEMO"},C=i(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-cell&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/cell/cell&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;t-cell-group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/cell-group/cell-group&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/bz7aGimL72S2" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="类型">类型 <a class="header-anchor" href="#类型"></a></h3><p>单行单元格</p><img src="https://tdesign.gtimg.com/miniprogram/readme/cell-1.png" width="375px" height="50%">`,9),q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},N=["code"],z={slot:"action"},A=t("p",null,"多行单元格",-1),T=t("img",{src:"https://tdesign.gtimg.com/miniprogram/readme/cell-2.png",width:"375px",height:"50%"},null,-1),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-multiple tdesign-demo-item-- README"},R=["code"],j={slot:"action"},B=t("h3",{id:"样式"},[b("样式 "),t("a",{class:"header-anchor",href:"#样式"})],-1),$=t("p",null,"卡片单元格",-1),O={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},P=["code"],G={slot:"action"},V={ref:"tdDocPhone"},I=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/cell/cell",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),H=[I],U=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"cell"},null,-1),L={name:"API"},J=i('<h3 id="cell-props">Cell Props <a class="header-anchor" href="#cell-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>align</td><td>String</td><td>middle</td><td>右侧内容的对齐方式，默认居中对齐。可选项：top/middle/bottom</td><td>N</td></tr><tr><td>arrow</td><td>Boolean / Object</td><td>false</td><td>是否显示右侧箭头</td><td>N</td></tr><tr><td>bordered</td><td>Boolean</td><td>true</td><td>是否显示下边框</td><td>N</td></tr><tr><td>description</td><td>String / Slot</td><td>-</td><td>下方内容描述。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>hover</td><td>Boolean</td><td>-</td><td>是否开启点击反馈</td><td>N</td></tr><tr><td>image</td><td>String / Slot</td><td>-</td><td>主图。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>jump-type</td><td>String</td><td>navigateTo</td><td>链接跳转类型。可选项：switchTab/reLaunch/redirectTo/navigateTo</td><td>N</td></tr><tr><td>left-icon</td><td>String / Object / Slot</td><td>-</td><td>左侧图标，出现在单元格标题的左侧。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>note</td><td>String / Slot</td><td>-</td><td>和标题同行的说明文字。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>required</td><td>Boolean</td><td>false</td><td>是否显示表单必填星号</td><td>N</td></tr><tr><td>right-icon</td><td>String / Object / Slot</td><td>-</td><td>最右侧图标。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>title</td><td>String / Slot</td><td>-</td><td>标题。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>url</td><td>String</td><td>-</td><td>点击后跳转链接地址。如果值为空，则表示不需要跳转</td><td>N</td></tr></tbody></table><h3 id="cell-events">Cell Events <a class="header-anchor" href="#cell-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>click</td><td>-</td><td>右侧内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td></tr></tbody></table><h3 id="cell-external-classes">Cell External Classes <a class="header-anchor" href="#cell-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-center</td><td>中间（<code>title</code>, <code>description</code>）内容样式类</td></tr><tr><td>t-class-description</td><td>下方描述内容样式类</td></tr><tr><td>t-class-hover</td><td>悬停样式类</td></tr><tr><td>t-class-image</td><td>图片样式类</td></tr><tr><td>t-class-left</td><td>左侧内容样式类</td></tr><tr><td>t-class-left-icon</td><td>左侧图标样式类</td></tr><tr><td>t-class-note</td><td>右侧说明文字样式类</td></tr><tr><td>t-class-right</td><td>右侧内容样式类</td></tr><tr><td>t-class-right-icon</td><td>右侧图标样式类</td></tr><tr><td>t-class-title</td><td>标题样式类</td></tr></tbody></table><h3 id="cellgroup-props">CellGroup Props <a class="header-anchor" href="#cellgroup-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>bordered</td><td>Boolean</td><td>false</td><td>是否显示组边框</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>default</td><td>单元格组风格。可选项：default/card</td><td>N</td></tr><tr><td>title</td><td>String</td><td>-</td><td>单元格组标题</td><td>N</td></tr></tbody></table><h3 id="cellgroup-external-classes">CellGroup External Classes <a class="header-anchor" href="#cellgroup-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-title</td><td>标题样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-cell-group-border-color</td><td>@component-stroke</td><td>-</td></tr><tr><td>--td-cell-group-title-bg-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-cell-group-title-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-cell-group-title-font-size</td><td>28rpx</td><td>-</td></tr><tr><td>--td-cell-group-title-line-height</td><td>90rpx</td><td>-</td></tr><tr><td>--td-cell-group-title-padding-left</td><td>32rpx</td><td>-</td></tr><tr><td>--td-cell-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-cell-border-color</td><td>@component-stroke</td><td>-</td></tr><tr><td>--td-cell-border-left-space</td><td>@cell-horizontal-padding</td><td>-</td></tr><tr><td>--td-cell-border-right-space</td><td>0</td><td>-</td></tr><tr><td>--td-cell-border-width</td><td>1px</td><td>-</td></tr><tr><td>--td-cell-description-color</td><td>@text-color-secondary</td><td>-</td></tr><tr><td>--td-cell-description-font-size</td><td>@font-size-base</td><td>-</td></tr><tr><td>--td-cell-description-line-height</td><td>44rpx</td><td>-</td></tr><tr><td>--td-cell-height</td><td>auto</td><td>-</td></tr><tr><td>--td-cell-horizontal-padding</td><td>32rpx</td><td>-</td></tr><tr><td>--td-cell-hover-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-cell-image-height</td><td>96rpx</td><td>-</td></tr><tr><td>--td-cell-image-width</td><td>96rpx</td><td>-</td></tr><tr><td>--td-cell-left-icon-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-cell-left-icon-font-size</td><td>48rpx</td><td>-</td></tr><tr><td>--td-cell-line-height</td><td>48rpx</td><td>-</td></tr><tr><td>--td-cell-note-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-cell-note-font-size</td><td>@font-size-m</td><td>-</td></tr><tr><td>--td-cell-required-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-cell-required-font-size</td><td>@font-size-m</td><td>-</td></tr><tr><td>--td-cell-right-icon-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-cell-right-icon-font-size</td><td>48rpx</td><td>-</td></tr><tr><td>--td-cell-title-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-cell-title-font-size</td><td>@font-size-m</td><td>-</td></tr><tr><td>--td-cell-vertical-padding</td><td>32rpx</td><td>-</td></tr></tbody></table>',13),F=[J],K={name:"DESIGN"},Q=i('<h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="常用作内容详情入口或功能入口的平铺陈列。">常用作内容详情入口或功能入口的平铺陈列。 <a class="header-anchor" href="#常用作内容详情入口或功能入口的平铺陈列。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/cell/cell-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/cell/cell-2.png"></div></div><hr><h5 id="常用作同类型同格式信息项平铺陈列。">常用作同类型同格式信息项平铺陈列。 <a class="header-anchor" href="#常用作同类型同格式信息项平铺陈列。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/cell/cell-3.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="作为入口时，不建议承载过多过复杂的内容。">作为入口时，不建议承载过多过复杂的内容。 <a class="header-anchor" href="#作为入口时，不建议承载过多过复杂的内容。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/cell/cell-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="作为入口时，不建议在一个单元格内承载其他操作。">作为入口时，不建议在一个单元格内承载其他操作。 <a class="header-anchor" href="#作为入口时，不建议在一个单元格内承载其他操作。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/cell/cell-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./grid">宫格</a></td><td style="text-align:left;">当需要展示多个功能或信息入口，且这些入口没有明显的优先级时使用。</td></tr></tbody></table>',14),W=[Q],X=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416556270"})],-1),Y=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function Z(e,n,d,o,c,p){const r=u("Stackblitz");return f(),g("td-doc-content",k,[t("td-doc-header",S,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,D),l(t("div",null,[t("div",E,[C,t("div",q,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",z,[s(r,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,N)]),A,T,t("div",M,[t("td-doc-demo",{code:e.DemoexamplemultipleCode,language:"markup","show-code":"",mode:"open","demo-name":"multiple","component-name":" README"},[t("div",j,[s(r,{"demo-name":"multiple","component-name":" README",code:e.DemoexamplemultipleCode},null,8,["code"])])],8,R)]),B,$,t("div",O,[t("td-doc-demo",{code:e.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",G,[s(r,{"demo-name":"theme","component-name":" README",code:e.DemoexamplethemeCode},null,8,["code"])])],8,P)])]),t("td-doc-phone",V,H,512),U],512),[[a,e.tab==="demo"]]),l(t("div",L,F,512),[[a,e.tab==="api"]]),l(t("div",K,W,512),[[a,e.tab==="design"]]),X,Y],512)}const dt=h(y,[["render",Z]]);export{dt as default};
