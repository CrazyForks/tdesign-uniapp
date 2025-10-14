import{_ as p,d as g,c as b,a as t,w as a,v as i,b as s,e as m,f as n,r as u,o as w}from"./sites-B_SbFHPk.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view>
    <t-button
      variant="outline"
      block
      size="large"
      theme="primary"
      @click="openDrawerBase"
    >
      基础抽屉
    </t-button>

    <t-drawer
      v-model:visible="visible"
      :placement="placement"
      :items="sidebar"
      using-custom-navbar
      :custom-navbar-height="isH5 ? 48 : 0"
      @overlay-click="overlayClick"
      @item-click="itemClick"
    />
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tDrawer from 'tdesign-uniapp/drawer/drawer';
import SkylineBehavior from 'packages/demo/src/mixins/skyline.js';

export default {
  components: {
    tButton,
    tDrawer,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
      placement: 'left',
      sidebar: [],

      baseSidebar: [
        {
          title: '菜单一',
        },
        {
          title: '菜单二',
        },
        {
          title: '菜单三',
        },
        {
          title: '菜单四',
        },
        {
          title: '菜单五',
        },
        {
          title: '菜单六',
        },
        {
          title: '菜单七',
        },
        {
          title: '菜单八',
        },
      ],

      visible: false,
    };
  },
  created() {},
  /**
     * 组件的方法列表
     */
  methods: {
    openDrawerBase() {
      this.visible = true;
      this.sidebar = this.baseSidebar;
    },
    itemClick(e) {
      console.log(e);
    },
    overlayClick(e) {
      console.log(e);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <t-button
      variant="outline"
      block
      size="large"
      theme="primary"
      @click="openDrawerIcon"
    >
      带图标抽屉
    </t-button>

    <t-drawer
      v-model:visible="visible"
      :placement="placement"
      :items="sidebar"
      using-custom-navbar
      :custom-navbar-height="isH5 ? 48 : 0"
      @overlay-click="overlayClick"
      @item-click="itemClick"
    />
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tDrawer from 'tdesign-uniapp/drawer/drawer';
export default {
  components: {
    tButton,
    tDrawer,
  },
  data() {
    return {
      placement: 'left',
      sidebar: [],

      iconSidebar: [
        {
          title: '菜单一',
          icon: 'app',
        },
        {
          title: '菜单二',
          icon: 'app',
        },
        {
          title: '菜单三',
          icon: 'app',
        },
        {
          title: '菜单四',
          icon: 'app',
        },
        {
          title: '菜单五',
          icon: 'app',
        },
        {
          title: '菜单六',
          icon: 'app',
        },
        {
          title: '菜单七',
          icon: 'app',
        },
        {
          title: '菜单八',
          icon: 'app',
        },
      ],

      visible: false,
    };
  },
  created() {},
  /**
     * 组件的方法列表
     */
  methods: {
    openDrawerIcon() {
      this.visible = true;
      this.sidebar = this.iconSidebar;
    },
    itemClick(e) {
      console.log(e);
    },
    overlayClick(e) {
      console.log(e);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=g({data(){return{DemoexamplebaseCode:v,DemoexampleicondrawerCode:y}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:r,tdDocTabs:d,tdDocPhone:o}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/drawer/drawer";r&&(r.docInfo={title:"Drawer 抽屉",desc:"用作一组平行关系页面/内容的切换器，相较于Tab，同屏可展示更多的选项数量。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:c})=>this.tab=c),o&&(o.qrcodeUrl=l),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),D={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},k={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"drawer"},x=["tab"],S={name:"DEMO"},E=s(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TDrawer <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/drawer/drawer.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="基础抽屉">基础抽屉 <a class="header-anchor" href="#基础抽屉"></a></h3>`,4),C={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},N=["code"],B={slot:"action"},A=t("h3",{id:"带图标的抽屉"},[n("带图标的抽屉 "),t("a",{class:"header-anchor",href:"#带图标的抽屉"})],-1),T={class:"tdesign-demo-wrapper tdesign-demo-item-- README-icon-drawer tdesign-demo-item-- README"},I=["code"],M={slot:"action"},P=t("blockquote",null,[t("p",null,[n("Drawer的 "),t("code",null,"visible"),n(" 是受控的，需要手动设置 "),t("code",null,"visible"),n(" 为 "),t("code",null,"true"),n(" 才会开启抽屉")])],-1),R={ref:"tdDocPhone"},$=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/drawer/drawer",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),z=[$],j=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"drawer"},null,-1),O={name:"API"},q=s('<h3 id="drawer-props">Drawer Props <a class="header-anchor" href="#drawer-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>close-on-overlay-click</td><td>Boolean</td><td>true</td><td>点击蒙层时是否触发抽屉关闭事件</td><td>N</td></tr><tr><td>destroy-on-close</td><td>Boolean</td><td>false</td><td>抽屉关闭时是否销毁节点</td><td>N</td></tr></tbody></table><p>items | Array | - | 抽屉里的列表项。TS 类型：<code>DrawerItem[]</code> <code>interface DrawerItem { title: string; icon: string; }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/drawer/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a> | N overlay-props | Object | {} | 遮罩层的属性，透传至 overlay。TS 类型：<code>OverlayProps</code>，<a href="./overlay?tab=api">Overlay API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/drawer/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a> | N placement | String | right | 抽屉方向。可选项：left/right | N show-overlay | Boolean | true | 是否显示遮罩层 | N title | String | - | <code>0.29.0</code>。抽屉的标题 | N using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N visible | Boolean | false | 组件是否可见 | N z-index | Number | 11500 | 抽屉层级，样式默认为 11500 | N</p><h3 id="drawer-slots">Drawer Slots <a class="header-anchor" href="#drawer-slots"></a></h3><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>footer</td><td><code>0.29.0</code>。抽屉的底部</td></tr><tr><td>title</td><td><code>0.29.0</code>。抽屉的标题</td></tr></tbody></table><h3 id="drawer-events">Drawer Events <a class="header-anchor" href="#drawer-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>close</td><td><code>(trigger: DrawerTriggerSource)</code></td><td>关闭时触发。。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/drawer/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type DrawerTriggerSource = &#39;overlay&#39;</code><br></td></tr><tr><td>item-click</td><td><code>(index: number; item: DrawerItem)</code></td><td>点击抽屉里的列表项</td></tr><tr><td>overlay-click</td><td>-</td><td>如果蒙层存在，点击蒙层时触发</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-drawer-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-drawer-border-color</td><td>@border-level-1-color</td><td>-</td></tr><tr><td>--td-drawer-footer-padding-bottom</td><td>40rpx</td><td>-</td></tr><tr><td>--td-drawer-hover-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-drawer-item-height</td><td>48rpx</td><td>-</td></tr><tr><td>--td-drawer-item-icon-color</td><td>@drawer-title-color</td><td>-</td></tr><tr><td>--td-drawer-item-icon-size</td><td>48rpx</td><td>-</td></tr><tr><td>--td-drawer-item-padding</td><td>32rpx</td><td>-</td></tr><tr><td>--td-drawer-sidebar-height</td><td>70vh</td><td>-</td></tr><tr><td>--td-drawer-title-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-drawer-title-font-size</td><td>36rpx</td><td>-</td></tr><tr><td>--td-drawer-title-padding</td><td>48rpx 32rpx 16rpx</td><td>-</td></tr><tr><td>--td-drawer-width</td><td>560rpx</td><td>-</td></tr></tbody></table>',10),V=[q],H={name:"DESIGN"},U=s('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>需要收折展示一组数量较多的菜单时使用</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="抽屉与按钮组合使用，通过按钮点击唤起抽屉。">抽屉与<a href="./button">按钮</a>组合使用，通过按钮点击唤起抽屉。 <a class="header-anchor" href="#抽屉与按钮组合使用，通过按钮点击唤起抽屉。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/drawer/drawer-1.png"></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="在网站场景，通常用来收折展示整个网站的菜单导航。">在网站场景，通常用来收折展示整个网站的菜单导航。 <a class="header-anchor" href="#在网站场景，通常用来收折展示整个网站的菜单导航。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/drawer/drawer-2.png"></div><hr><h5 id="在应用场景，通常用来承载某类相关性较强的或较为低频的，如个人中心、设置等场景。">在应用场景，通常用来承载某类相关性较强的或较为低频的，如个人中心、设置等场景。 <a class="header-anchor" href="#在应用场景，通常用来承载某类相关性较强的或较为低频的，如个人中心、设置等场景。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/drawer/drawer-3.png"></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="若抽屉内的菜单项较多，且菜单项之间的关联性存在差异时，建议对菜单项进行分组。">若抽屉内的菜单项较多，且菜单项之间的关联性存在差异时，建议对菜单项进行分组。 <a class="header-anchor" href="#若抽屉内的菜单项较多，且菜单项之间的关联性存在差异时，建议对菜单项进行分组。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/drawer/drawer-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/drawer/drawer-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./action-sheet">动作面板</a></td><td style="text-align:left;">需要提供一组与当前场景操作相关的关联操作时使用。</td></tr><tr><td style="text-align:left;"><a href="./dialog">对话框</a></td><td style="text-align:left;">需要用户做一些决定，或这提供完成某个任务是需要的一些额外信息时使用。</td></tr><tr><td style="text-align:left;"><a href="./dropdown-menu">下拉菜单</a></td><td style="text-align:left;">当内容较多时，需要通过筛选快速定位某一类内容时使用。</td></tr><tr><td style="text-align:left;"><a href="./dropdown-menu">选择器</a></td><td style="text-align:left;">当需要在有限的空间展示大量选项供用户选择，或者一组选项由递进层级构成需要用户逐级选择时使用。</td></tr></tbody></table>',16),G=[U],F=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760435766723"})],-1),J=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function K(e,r,d,o,l,c){const h=u("Stackblitz");return w(),b("td-doc-content",D,[t("td-doc-header",k,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,x),a(t("div",null,[t("div",S,[E,t("div",C,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",B,[m(h,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,N)]),A,t("div",T,[t("td-doc-demo",{code:e.DemoexampleicondrawerCode,language:"markup","show-code":"",mode:"open","demo-name":"icon-drawer","component-name":" README"},[t("div",M,[m(h,{"demo-name":"icon-drawer","component-name":" README",code:e.DemoexampleicondrawerCode},null,8,["code"])])],8,I)]),P]),t("td-doc-phone",R,z,512),j],512),[[i,e.tab==="demo"]]),a(t("div",O,V,512),[[i,e.tab==="api"]]),a(t("div",H,G,512),[[i,e.tab==="design"]]),F,J],512)}const W=p(_,[["render",K]]);export{W as default};
