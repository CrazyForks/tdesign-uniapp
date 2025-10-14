import{_ as b,d as u,c as p,a as t,w as a,v as i,b as s,f as n,e as m,r as f,o as g}from"./sites-CFYcBLxc.js";import{P as w}from"./prism-bash-zcnM7wlG.js";const v=`<template>
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
`,_=u({data(){return{DemoexamplebaseCode:v,DemoexampleicondrawerCode:y}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:r,tdDocTabs:d,tdDocPhone:o}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/drawer/drawer";r&&(r.docInfo={title:"Drawer 抽屉",desc:"用作一组平行关系页面/内容的切换器，相较于Tab，同屏可展示更多的选项数量。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:c})=>this.tab=c),o&&(o.qrcodeUrl=l),w.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),k={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},x={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"drawer"},D=["tab"],S={name:"DEMO"},E={style:{background:"#ecf2fe",display:"flex","align-items":"center","line-height":"20px",padding:"14px 24px","border-radius":"3px",color:"#555a65"}},C={fill:"none",viewBox:"0 0 16 16",width:"16px",height:"16px",style:{"margin-right":"5px"}},N=t("path",{fill:"#0052d9",d:"M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z",fillOpacity:"0.9"},null,-1),q=[N],B=s(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-drawer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/drawer/drawer&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/WoE0Rdmj7GSE" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="基础抽屉">基础抽屉 <a class="header-anchor" href="#基础抽屉"></a></h3>`,7),A={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},M=["code"],T={slot:"action"},z=t("h3",{id:"带图标的抽屉"},[n("带图标的抽屉 "),t("a",{class:"header-anchor",href:"#带图标的抽屉"})],-1),I={class:"tdesign-demo-wrapper tdesign-demo-item-- README-icon-drawer tdesign-demo-item-- README"},R=["code"],j={slot:"action"},P=t("blockquote",null,[t("p",null,[n("Drawer的 "),t("code",null,"visible"),n(" 是受控的，需要手动设置 "),t("code",null,"visible"),n(" 为 "),t("code",null,"true"),n(" 才会开启抽屉")])],-1),$={ref:"tdDocPhone"},V=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/drawer/drawer",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),O=[V],H=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"drawer"},null,-1),G={name:"API"},U=s('<h3 id="drawer-props">Drawer Props <a class="header-anchor" href="#drawer-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>close-on-overlay-click</td><td>Boolean</td><td>true</td><td>点击蒙层时是否触发抽屉关闭事件</td><td>N</td></tr><tr><td>destroy-on-close</td><td>Boolean</td><td>false</td><td>抽屉关闭时是否销毁节点</td><td>N</td></tr></tbody></table><p>items | Array | - | 抽屉里的列表项。TS 类型：<code>DrawerItem[]</code> <code>interface DrawerItem { title: string; icon: string; }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/drawer/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a> | N overlay-props | Object | {} | 遮罩层的属性，透传至 overlay。TS 类型：<code>OverlayProps</code>，<a href="./overlay?tab=api">Overlay API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/drawer/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a> | N placement | String | right | 抽屉方向。可选项：left/right | N show-overlay | Boolean | true | 是否显示遮罩层 | N title | String | - | <code>0.29.0</code>。抽屉的标题 | N using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N visible | Boolean | false | 组件是否可见 | N z-index | Number | 11500 | 抽屉层级，样式默认为 11500 | N</p><h3 id="drawer-slots">Drawer Slots <a class="header-anchor" href="#drawer-slots"></a></h3><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>footer</td><td><code>0.29.0</code>。抽屉的底部</td></tr><tr><td>title</td><td><code>0.29.0</code>。抽屉的标题</td></tr></tbody></table><h3 id="drawer-events">Drawer Events <a class="header-anchor" href="#drawer-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>close</td><td><code>(trigger: DrawerTriggerSource)</code></td><td>关闭时触发。。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/drawer/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type DrawerTriggerSource = &#39;overlay&#39;</code><br></td></tr><tr><td>item-click</td><td><code>(index: number; item: DrawerItem)</code></td><td>点击抽屉里的列表项</td></tr><tr><td>overlay-click</td><td>-</td><td>如果蒙层存在，点击蒙层时触发</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-drawer-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-drawer-border-color</td><td>@border-level-1-color</td><td>-</td></tr><tr><td>--td-drawer-footer-padding-bottom</td><td>40rpx</td><td>-</td></tr><tr><td>--td-drawer-hover-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-drawer-item-height</td><td>48rpx</td><td>-</td></tr><tr><td>--td-drawer-item-icon-color</td><td>@drawer-title-color</td><td>-</td></tr><tr><td>--td-drawer-item-icon-size</td><td>48rpx</td><td>-</td></tr><tr><td>--td-drawer-item-padding</td><td>32rpx</td><td>-</td></tr><tr><td>--td-drawer-sidebar-height</td><td>70vh</td><td>-</td></tr><tr><td>--td-drawer-title-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-drawer-title-font-size</td><td>36rpx</td><td>-</td></tr><tr><td>--td-drawer-title-padding</td><td>48rpx 32rpx 16rpx</td><td>-</td></tr><tr><td>--td-drawer-width</td><td>560rpx</td><td>-</td></tr></tbody></table>',10),J=[U],W={name:"DESIGN"},F=s('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>需要收折展示一组数量较多的菜单时使用</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="抽屉与按钮组合使用，通过按钮点击唤起抽屉。">抽屉与<a href="./button">按钮</a>组合使用，通过按钮点击唤起抽屉。 <a class="header-anchor" href="#抽屉与按钮组合使用，通过按钮点击唤起抽屉。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/drawer/drawer-1.png"></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="在网站场景，通常用来收折展示整个网站的菜单导航。">在网站场景，通常用来收折展示整个网站的菜单导航。 <a class="header-anchor" href="#在网站场景，通常用来收折展示整个网站的菜单导航。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/drawer/drawer-2.png"></div><hr><h5 id="在应用场景，通常用来承载某类相关性较强的或较为低频的，如个人中心、设置等场景。">在应用场景，通常用来承载某类相关性较强的或较为低频的，如个人中心、设置等场景。 <a class="header-anchor" href="#在应用场景，通常用来承载某类相关性较强的或较为低频的，如个人中心、设置等场景。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/drawer/drawer-3.png"></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="若抽屉内的菜单项较多，且菜单项之间的关联性存在差异时，建议对菜单项进行分组。">若抽屉内的菜单项较多，且菜单项之间的关联性存在差异时，建议对菜单项进行分组。 <a class="header-anchor" href="#若抽屉内的菜单项较多，且菜单项之间的关联性存在差异时，建议对菜单项进行分组。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/drawer/drawer-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/drawer/drawer-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./action-sheet">动作面板</a></td><td style="text-align:left;">需要提供一组与当前场景操作相关的关联操作时使用。</td></tr><tr><td style="text-align:left;"><a href="./dialog">对话框</a></td><td style="text-align:left;">需要用户做一些决定，或这提供完成某个任务是需要的一些额外信息时使用。</td></tr><tr><td style="text-align:left;"><a href="./dropdown-menu">下拉菜单</a></td><td style="text-align:left;">当内容较多时，需要通过筛选快速定位某一类内容时使用。</td></tr><tr><td style="text-align:left;"><a href="./dropdown-menu">选择器</a></td><td style="text-align:left;">当需要在有限的空间展示大量选项供用户选择，或者一组选项由递进层级构成需要用户逐级选择时使用。</td></tr></tbody></table>',16),K=[F],L=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416658033"})],-1),Q=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function X(e,r,d,o,l,c){const h=f("Stackblitz");return g(),p("td-doc-content",k,[t("td-doc-header",x,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,D),a(t("div",null,[t("div",S,[t("div",E,[(g(),p("svg",C,q)),n(" 该组件于 0.7.2 版本上线，请留意版本。 ")]),B,t("div",A,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",T,[m(h,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,M)]),z,t("div",I,[t("td-doc-demo",{code:e.DemoexampleicondrawerCode,language:"markup","show-code":"",mode:"open","demo-name":"icon-drawer","component-name":" README"},[t("div",j,[m(h,{"demo-name":"icon-drawer","component-name":" README",code:e.DemoexampleicondrawerCode},null,8,["code"])])],8,R)]),P]),t("td-doc-phone",$,O,512),H],512),[[i,e.tab==="demo"]]),a(t("div",G,J,512),[[i,e.tab==="api"]]),a(t("div",W,K,512),[[i,e.tab==="design"]]),L,Q],512)}const tt=b(_,[["render",X]]);export{tt as default};
