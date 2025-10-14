import{_ as p,d as h,c as g,a as t,w as i,v as s,b as c,e as a,r as f,o as u}from"./sites-v9LZeYm3.js";import{P as b}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view>
    <!-- 基础页脚 只有版权信息 -->
    <t-footer :text="text" />
  </view>
</template>

<script>
import tFooter from 'tdesign-uniapp/footer/footer';
export default {
  components: {
    tFooter,
  },
  data() {
    return {
      text: 'Copyright © 2021-2031 TD.All Rights Reserved.',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import "./index.css";
</style>
`,_=`<template>
  <view>
    <!-- theme 为 text，含有底部链接 -->
    <view class="footer-example">
      <t-footer
        :text="text"
        :links="links[0]"
      />
    </view>

    <view class="footer-example">
      <t-footer
        :text="text"
        :links="links[1]"
      />
    </view>
  </view>
</template>

<script>
import tFooter from 'tdesign-uniapp/footer/footer';
export default {
  components: {
    tFooter,
  },
  data() {
    return {
      text: 'Copyright © 2021-2031 TD.All Rights Reserved.',
      links: [[{
        name: '底部链接',
        url: '/pages/home/home',
        openType: 'navigate',
      }], [{
        name: '底部链接',
        url: '/pages/home/home',
        openType: 'navigate',
      }, {
        name: '底部链接',
        url: '',
        openType: 'navigateBack',
      }]],
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import "./index.css";
</style>
`,k=`<template>
  <view>
    <!-- theme 为 logo -->
    <view class="footer-example">
      <t-footer :logo="logo" />
    </view>

    <view class="footer-example">
      <t-footer
        :logo="{url:
          theme === 'dark'
            ? 'https://tdesign.gtimg.com/mobile/demos/footer-logo-dark.png'
            : 'https://tdesign.gtimg.com/mobile/demos/logo1.png'
        } "
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import tFooter from 'tdesign-uniapp/footer/footer';
import { ref } from 'vue';
import { useTheme } from 'tdesign-uniapp/mixins/theme-change';

const logo = ref({
  icon: 'https://tdesign.gtimg.com/mobile/demos/logo2.png',
  title: '品牌名称',
});
const { theme } = useTheme();

<\/script>
<style>
@import './index.css';
</style>
`,x=h({data(){return{DemoexamplebaseCode:v,DemoexamplelinkCode:_,DemoexamplelogoCode:k}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:d,tdDocTabs:o,tdDocPhone:n}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/footer/footer";d&&(d.docInfo={title:"Footer 页脚",desc:"用于基础列表展示，可附带文字、品牌 logo、操作，常用商详、个人中心、设置等页面。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:m})=>this.tab=m),n&&(n.qrcodeUrl=l),b.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),y={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},D={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"footer"},w=["tab"],E={name:"DEMO"},A=c(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TFooter <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/footer/footer.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="类型">类型 <a class="header-anchor" href="#类型"></a></h3><p>基础页脚</p>`,5),T={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},C=["code"],R={slot:"action"},S=t("p",null,"基础加链接页脚",-1),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-link tdesign-demo-item-- README"},N=["code"],F={slot:"action"},j=t("p",null,"品牌页脚",-1),$={class:"tdesign-demo-wrapper tdesign-demo-item-- README-logo tdesign-demo-item-- README"},z=["code"],O={slot:"action"},P={ref:"tdDocPhone"},B=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/footer/footer",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),L=[B],q=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"footer"},null,-1),I={name:"API"},V=c('<h3 id="footer-props">Footer Props <a class="header-anchor" href="#footer-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>copyright</td><td>String</td><td>&#39;&#39;</td><td>已废弃。版权信息，type 为<code>text</code>生效</td><td>N</td></tr><tr><td>links</td><td>Array</td><td>[]</td><td><code>1.0.0</code>。链接列表。name 表示链接名称， url 表示链接 page 路径，目前只支持小程序内部跳转，openType 表示跳转方式。TS 类型：<code>Array&lt;LinkObj&gt;</code> <code>interface LinkObj { name: string; url?: string; openType?: &#39;navigate&#39; \\| &#39;redirect&#39; \\| &#39;relaunch&#39; \\| &#39;switchTab&#39; \\| &#39;navigateBack&#39; }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/footer/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>logo</td><td>Object</td><td>-</td><td>图标配置。<code>logo.icon</code> 表示图标链接地址，<code>logo.title</code> 表示标题文本，<code>logo.url</code> 表示链接。TS 类型：<code>FooterLogo</code> <code>interface FooterLogo { icon: string; title?: string; url?: string }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/footer/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>text</td><td>String</td><td>&#39;&#39;</td><td><code>1.0.0</code>。版权信息</td><td>N</td></tr><tr><td>text-link-list</td><td>Array</td><td>[]</td><td>已废弃。链接列表，type 为<code>text</code>生效。name 表示链接名称， url 表示链接 page 路径，目前只支持小程序内部跳转，openType 表示跳转方式。TS 类型：<code>Array&lt;LinkObj&gt;</code> <code>interface LinkObj { name: string; url?: string; openType?: &#39;navigate&#39; \\| &#39;redirect&#39; \\| &#39;relaunch&#39; \\| &#39;switchTab&#39; \\| &#39;navigateBack&#39; }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/footer/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>theme</td><td>String</td><td>&#39;text&#39;</td><td>已废弃。页脚展示类型。可选项：text/logo</td><td>N</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-footer-link-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-footer-link-dividing-line-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-footer-link-dividing-line-padding</td><td>@spacer-1</td><td>-</td></tr><tr><td>--td-footer-link-font-size</td><td>@font-size-s</td><td>-</td></tr><tr><td>--td-footer-link-line-height</td><td>40rpx</td><td>-</td></tr><tr><td>--td-footer-logo-icon-height</td><td>48rpx</td><td>-</td></tr><tr><td>--td-footer-logo-icon-margin-right</td><td>@spacer</td><td>-</td></tr><tr><td>--td-footer-logo-icon-width</td><td>48rpx</td><td>-</td></tr><tr><td>--td-footer-logo-title-font-size</td><td>@font-size-m</td><td>-</td></tr><tr><td>--td-footer-logo-title-line-height</td><td>48rpx</td><td>-</td></tr><tr><td>--td-footer-logo-title-url-width</td><td>256rpx</td><td>-</td></tr><tr><td>--td-footer-text-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-footer-text-font-size</td><td>@font-size-s</td><td>-</td></tr><tr><td>--td-footer-text-line-height</td><td>40rpx</td><td>-</td></tr><tr><td>--td-footer-text-margin-top</td><td>8rpx</td><td>-</td></tr></tbody></table>',5),H=[V],U={name:"DESIGN"},G=c('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当页面底部需要放置一些补充信息和链接时使用。</p><h3 id="与页面布局相关">与页面布局相关 <a class="header-anchor" href="#与页面布局相关"></a></h3><h5 id="页脚通常位于网站每个页面底部或主体内容下方的区域。">页脚通常位于网站每个页面底部或主体内容下方的区域。 <a class="header-anchor" href="#页脚通常位于网站每个页面底部或主体内容下方的区域。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/footer/footer-1.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="用于承载版权、隐私政策和使用条款等信息，它们是法律保护所需的。">用于承载版权、隐私政策和使用条款等信息，它们是法律保护所需的。 <a class="header-anchor" href="#用于承载版权、隐私政策和使用条款等信息，它们是法律保护所需的。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/footer/footer-2.png"></div></div><hr><h5 id="用于承载网站、产品的联系方式，便于用户在页脚查找联系信息或查找获得客户支持的方式。">用于承载网站、产品的联系方式，便于用户在页脚查找联系信息或查找获得客户支持的方式。 <a class="header-anchor" href="#用于承载网站、产品的联系方式，便于用户在页脚查找联系信息或查找获得客户支持的方式。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/footer/footer-3.png"></div></div><hr><h5 id="用于承载网站导航。">用于承载网站导航。 <a class="header-anchor" href="#用于承载网站导航。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/footer/footer-4.png"></div></div><hr><h5 id="用于承载相关公司-品牌列表，让用户能认知合作或者旗下的品牌-公司，并提供找到他们的方式。">用于承载相关公司/品牌列表，让用户能认知合作或者旗下的品牌/公司，并提供找到他们的方式。 <a class="header-anchor" href="#用于承载相关公司-品牌列表，让用户能认知合作或者旗下的品牌-公司，并提供找到他们的方式。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/footer/footer-5.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/footer/footer-6.png"></div></div>',17),J=[G],K=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760436067726"})],-1),Q=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function W(e,d,o,n,l,m){const r=f("Stackblitz");return u(),g("td-doc-content",y,[t("td-doc-header",D,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,w),i(t("div",null,[t("div",E,[A,t("div",T,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",R,[a(r,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,C)]),S,t("div",M,[t("td-doc-demo",{code:e.DemoexamplelinkCode,language:"markup","show-code":"",mode:"open","demo-name":"link","component-name":" README"},[t("div",F,[a(r,{"demo-name":"link","component-name":" README",code:e.DemoexamplelinkCode},null,8,["code"])])],8,N)]),j,t("div",$,[t("td-doc-demo",{code:e.DemoexamplelogoCode,language:"markup","show-code":"",mode:"open","demo-name":"logo","component-name":" README"},[t("div",O,[a(r,{"demo-name":"logo","component-name":" README",code:e.DemoexamplelogoCode},null,8,["code"])])],8,z)])]),t("td-doc-phone",P,L,512),q],512),[[s,e.tab==="demo"]]),i(t("div",I,H,512),[[s,e.tab==="api"]]),i(t("div",U,J,512),[[s,e.tab==="design"]]),K,Q],512)}const Z=p(x,[["render",W]]);export{Z as default};
