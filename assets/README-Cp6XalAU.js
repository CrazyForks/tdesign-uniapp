import{_ as p,d as b,c as v,a as t,w as c,v as i,b as l,e as a,f as d,r as g,o as u}from"./sites-3xGvLtLV.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view>
    <view class="block">
      <t-navbar
        t-class-placeholder="t-navbar-placeholder"
        t-class-content="t-navbar-content"
        title="标题文字"
        t-class-title="nav-title"
      />
    </view>

    <view class="block">
      <t-navbar
        t-class-placeholder="t-navbar-placeholder"
        t-class-content="t-navbar-content"
        class="block"
        title="标题文字"
        left-arrow
        @go-back="handleBack"
      />
    </view>
  </view>
</template>

<script>
import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
export default {
  components: {
    tNavbar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleBack() {
      console.log('go back');
    },
  },
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,w=`<template>
  <view>
    <t-navbar
      t-class-placeholder="t-navbar-placeholder"
      t-class-content="t-navbar-content"
      title="标题文字"
    >
      <template
        #capsule
      >
        <view
          class="custom-capsule"
        >
          <t-icon
            size="40rpx"
            aria-role="button"
            aria-label="返回"
            name="chevron-left"
            class="custom-capsule__icon back"
            @click="onBack"
          />
          <t-icon
            size="40rpx"
            aria-role="button"
            aria-label="首页"
            name="home"
            class="custom-capsule__icon home"
            @click="onGoHome"
          />
        </view>
      </template>
    </t-navbar>
  </view>
</template>

<script>
import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import tIcon from 'tdesign-uniapp/icon/icon';
export default {
  components: {
    tNavbar,
    tIcon,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onBack() {
      uni.navigateBack();
    },
    onGoHome() {
      uni.reLaunch({
        url: '/pages/home/home',
      });
    },
  },
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,k=`<template>
  <view>
    <t-navbar
      t-class-placeholder="t-navbar-placeholder"
      t-class-content="t-navbar-content"
      left-icon="slot"
    >
      <template
        #left
      >
        <view
          class="search-box"
        >
          <t-search
            shape="round"
            placeholder="搜索内容"
          />
        </view>
      </template>
    </t-navbar>
  </view>
</template>

<script>
import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import tSearch from 'tdesign-uniapp/search/search';
export default {
  components: {
    tNavbar,
    tSearch,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,E=`<template>
  <view>
    <t-navbar
      t-class-placeholder="t-navbar-placeholder"
      t-class-content="t-navbar-content"
    >
      <template #left>
        <view>
          <t-image
            t-class="custom-image"
            :src="theme === 'dark' ? 'https://tdesign.gtimg.com/mobile/demos/image-dark.png' : 'https://tdesign.gtimg.com/mobile/demos/logo-light.png'"
            aria-label="导航栏图片"
          />
        </view>
      </template>
    </t-navbar>
  </view>
</template>

<script lang="ts" setup>
import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import tImage from 'tdesign-uniapp/image/image.vue';
import { useTheme } from 'tdesign-uniapp/mixins/theme-change';


const { theme } = useTheme();

defineOptions({
  options: {
    styleIsolation: 'shared',
  },
});
<\/script>
<style scoped>
@import './index.css';
</style>
`,D=`<template>
  <view>
    <view class="block">
      <t-navbar
        t-class-placeholder="t-navbar-placeholder"
        t-class-content="t-navbar-content"
        left-arrow
        title="标题居中"
      />
    </view>

    <t-navbar
      t-class-placeholder="t-navbar-placeholder"
      t-class-content="t-navbar-content"
      left-arrow
    >
      <template
        #left
      >
        <view
          class="custom-title"
        >
          标题左对齐
        </view>
      </template>
    </t-navbar>

    <view class="demo-desc">
      标题尺寸
    </view>

    <t-navbar
      t-class-placeholder="t-navbar-placeholder"
      t-class-content="t-navbar-content"
      left-arrow
    >
      <template
        #left
      >
        <text
          class="left-text"
          @tap="onBack"
        >
          返回
        </text>
      </template>
    </t-navbar>
    <view class="header-title">
      大标题尺寸
    </view>
  </view>
</template>

<script>
import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
export default {
  components: {
    tNavbar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onBack() {
      uni.navigateBack();
    },
  },
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,x=`<template>
  <view>
    <t-navbar
      t-class-placeholder="t-navbar-placeholder"
      t-class-content="t-navbar-content"
      class="custom-navbar"
      left-arrow
      title="标题文字"
    />
  </view>
</template>

<script>
import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
export default {
  components: {
    tNavbar,
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
`,N=b({data(){return{DemoexamplebaseCode:_,DemoexamplebackhomeCode:w,DemoexamplesearchCode:k,DemoexampleimgCode:E,DemoexamplelefttitleCode:D,DemoexamplecustomcolorCode:x}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:r,tdDocTabs:o,tdDocPhone:s}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/navbar/navbar";r&&(r.docInfo={title:"Navbar 导航栏",desc:"用于不同页面之间切换或者跳转，位于内容区的上方，系统状态栏的下方。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:h})=>this.tab=h),s&&(s.qrcodeUrl=m),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),y={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},A={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"navigation","component-name":"navbar"},M=["tab"],C={name:"DEMO"},R=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TNavbar <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/navbar/navbar.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="基础导航栏">基础导航栏 <a class="header-anchor" href="#基础导航栏"></a></h3>`,4),B={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},S=["code"],T={slot:"action"},$=t("h3",{id:"胶囊样式导航栏"},[d("胶囊样式导航栏 "),t("a",{class:"header-anchor",href:"#胶囊样式导航栏"})],-1),I={class:"tdesign-demo-wrapper tdesign-demo-item-- README-back-home tdesign-demo-item-- README"},P=["code"],q={slot:"action"},z=t("h3",{id:"带搜索导航栏"},[d("带搜索导航栏 "),t("a",{class:"header-anchor",href:"#带搜索导航栏"})],-1),H={class:"tdesign-demo-wrapper tdesign-demo-item-- README-search tdesign-demo-item-- README"},V=["code"],j={slot:"action"},O=t("h3",{id:"带图片导航栏"},[d("带图片导航栏 "),t("a",{class:"header-anchor",href:"#带图片导航栏"})],-1),G={class:"tdesign-demo-wrapper tdesign-demo-item-- README-img tdesign-demo-item-- README"},U=["code"],L={slot:"action"},F=t("h3",{id:"组件样式"},[d("组件样式 "),t("a",{class:"header-anchor",href:"#组件样式"})],-1),J={class:"tdesign-demo-wrapper tdesign-demo-item-- README-left-title tdesign-demo-item-- README"},K=["code"],Q={slot:"action"},W=t("h3",{id:"自定义颜色"},[d("自定义颜色 "),t("a",{class:"header-anchor",href:"#自定义颜色"})],-1),X={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom-color tdesign-demo-item-- README"},Y=["code"],Z={slot:"action"},tt={ref:"tdDocPhone"},et=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/navbar/navbar",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),nt=[et],at=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"navbar"},null,-1),dt={name:"API"},ot=l('<h3 id="navbar-props">Navbar Props <a class="header-anchor" href="#navbar-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>animation</td><td>Boolean</td><td>true</td><td>是否添加动画效果</td><td>N</td></tr><tr><td>background</td><td>String</td><td>-</td><td>已废弃。背景</td><td>N</td></tr><tr><td>capsule</td><td>Slot</td><td>-</td><td>左侧胶囊区域。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>delta</td><td>Number</td><td>1</td><td>后退按钮后退层数，含义参考 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html" target="_blank" rel="noopener noreferrer">wx.navigateBack</a>，特殊的，传入 0 不会发生执行 wx.navigateBack</td><td>N</td></tr><tr><td>fixed</td><td>Boolean</td><td>true</td><td>是否固定在顶部</td><td>N</td></tr><tr><td>home-icon</td><td>String</td><td>-</td><td>已废弃。首页图标地址。值为 &#39;&#39; 或者 undefined 则表示不显示返回图标，值为 &#39;circle&#39; 表示显示默认图标，值为 &#39;slot&#39; 表示使用插槽渲染，值为其他则表示图标地址</td><td>N</td></tr><tr><td>left</td><td>Slot</td><td>-</td><td><code>0.26.0</code>。左侧内容区域。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>left-arrow</td><td>Boolean</td><td>false</td><td><code>0.26.0</code>。是否展示左侧箭头</td><td>N</td></tr><tr><td>left-icon</td><td>String</td><td>-</td><td>已废弃。左侧图标地址，值为 &#39;&#39; 或者 undefined 则表示不显示返回图标，值为 &#39;arrow-left&#39; 表示显示返回图标，值为 &#39;slot&#39; 表示使用插槽渲染，值为其他则表示图标地址</td><td>N</td></tr><tr><td>safe-area-inset-top</td><td>Boolean</td><td>true</td><td>是否开启顶部安全区适配</td><td>N</td></tr><tr><td>title</td><td>String / Slot</td><td>-</td><td>页面标题。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>title-max-length</td><td>Number</td><td>-</td><td>标题文字最大长度，超出的范围使用 <code>...</code> 表示</td><td>N</td></tr><tr><td>visible</td><td>Boolean</td><td>true</td><td>是否显示</td><td>N</td></tr></tbody></table><h3 id="navbar-events">Navbar Events <a class="header-anchor" href="#navbar-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>complete</td><td>-</td><td>navigateBack 执行完成后触发（失败或成功均会触发）</td></tr><tr><td>fail</td><td>-</td><td>navigateBack 执行失败后触发</td></tr><tr><td>go-back</td><td>-</td><td>点击左侧箭头时触发</td></tr><tr><td>go-home</td><td>-</td><td>已废弃。点击 Home 触发</td></tr><tr><td>success</td><td>-</td><td>navigateBack 执行成功后触发</td></tr></tbody></table><h3 id="navbar-external-classes">Navbar External Classes <a class="header-anchor" href="#navbar-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-capsule</td><td>左侧胶囊区域样式类</td></tr><tr><td>t-class-center</td><td>中间内容样式类</td></tr><tr><td>t-class-home-icon</td><td>首页图标样式类</td></tr><tr><td>t-class-left</td><td>左侧内容样式类</td></tr><tr><td>t-class-left-icon</td><td>左侧图标样式类</td></tr><tr><td>t-class-nav-btn</td><td>导航按钮样式类</td></tr><tr><td>t-class-title</td><td>标题样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-navbar-padding-top</td><td>20px</td><td>-</td></tr><tr><td>--td-navbar-right</td><td>95px</td><td>-</td></tr><tr><td>--td-navbar-background</td><td>@navbar-bg-color</td><td>-</td></tr><tr><td>--td-navbar-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-navbar-capsule-border-color</td><td>@border-level-1-color</td><td>-</td></tr><tr><td>--td-navbar-capsule-border-radius</td><td>16px</td><td>-</td></tr><tr><td>--td-navbar-capsule-height</td><td>32px</td><td>-</td></tr><tr><td>--td-navbar-capsule-width</td><td>88px</td><td>-</td></tr><tr><td>--td-navbar-center-left</td><td>@navbar-right</td><td>-</td></tr><tr><td>--td-navbar-center-width</td><td>187px</td><td>-</td></tr><tr><td>--td-navbar-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-navbar-height</td><td>48px</td><td>-</td></tr><tr><td>--td-navbar-left-arrow-size</td><td>24px</td><td>-</td></tr><tr><td>--td-navbar-left-max-width</td><td>--td-navbar-left-max-width</td><td>-</td></tr><tr><td>--td-navbar-title-font-size</td><td>18px</td><td>-</td></tr><tr><td>--td-navbar-title-font-weight</td><td>600</td><td>-</td></tr></tbody></table>',9),rt=[ot],st={name:"DESIGN"},ct=l('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>需要在页面间跳转、返回，或需承载少量辅助功能时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="带图标的导航栏与抽屉、动作面板组合使用，用于唤起一组操作或功能。">带图标的导航栏与<a href="./drawer">抽屉</a>、<a href="./action-sheet">动作面板</a>组合使用，用于唤起一组操作或功能。 <a class="header-anchor" href="#带图标的导航栏与抽屉、动作面板组合使用，用于唤起一组操作或功能。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/navbar/navbar-1.png"></div><hr><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/navbar/navbar-2.png"></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="通常用来承载页面标题和返回操作，点击跳转回到上一个打开的页面。">通常用来承载页面标题和返回操作，点击跳转回到上一个打开的页面。 <a class="header-anchor" href="#通常用来承载页面标题和返回操作，点击跳转回到上一个打开的页面。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/navbar/navbar-3.png"></div><hr><h5 id="在应用内，通常用来承载搜索、扫码等功能性高频操作。">在应用内，通常用来承载搜索、扫码等功能性高频操作。 <a class="header-anchor" href="#在应用内，通常用来承载搜索、扫码等功能性高频操作。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/navbar/navbar-4.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/navbar/navbar-5.png"></div></div><hr><h5 id="在需要定位的场景，通常结合当前定位进行、所在城市等进行展示并提供切换的能力。">在需要定位的场景，通常结合当前定位进行、所在城市等进行展示并提供切换的能力。 <a class="header-anchor" href="#在需要定位的场景，通常结合当前定位进行、所在城市等进行展示并提供切换的能力。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/navbar/navbar-6.png"></div></div>',16),it=[ct],lt=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760433699062"})],-1),mt=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function ht(e,r,o,s,m,h){const n=g("Stackblitz");return u(),v("td-doc-content",y,[t("td-doc-header",A,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,M),c(t("div",null,[t("div",C,[R,t("div",B,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",T,[a(n,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,S)]),$,t("div",I,[t("td-doc-demo",{code:e.DemoexamplebackhomeCode,language:"markup","show-code":"",mode:"open","demo-name":"back-home","component-name":" README"},[t("div",q,[a(n,{"demo-name":"back-home","component-name":" README",code:e.DemoexamplebackhomeCode},null,8,["code"])])],8,P)]),z,t("div",H,[t("td-doc-demo",{code:e.DemoexamplesearchCode,language:"markup","show-code":"",mode:"open","demo-name":"search","component-name":" README"},[t("div",j,[a(n,{"demo-name":"search","component-name":" README",code:e.DemoexamplesearchCode},null,8,["code"])])],8,V)]),O,t("div",G,[t("td-doc-demo",{code:e.DemoexampleimgCode,language:"markup","show-code":"",mode:"open","demo-name":"img","component-name":" README"},[t("div",L,[a(n,{"demo-name":"img","component-name":" README",code:e.DemoexampleimgCode},null,8,["code"])])],8,U)]),F,t("div",J,[t("td-doc-demo",{code:e.DemoexamplelefttitleCode,language:"markup","show-code":"",mode:"open","demo-name":"left-title","component-name":" README"},[t("div",Q,[a(n,{"demo-name":"left-title","component-name":" README",code:e.DemoexamplelefttitleCode},null,8,["code"])])],8,K)]),W,t("div",X,[t("td-doc-demo",{code:e.DemoexamplecustomcolorCode,language:"markup","show-code":"",mode:"open","demo-name":"custom-color","component-name":" README"},[t("div",Z,[a(n,{"demo-name":"custom-color","component-name":" README",code:e.DemoexamplecustomcolorCode},null,8,["code"])])],8,Y)])]),t("td-doc-phone",tt,nt,512),at],512),[[i,e.tab==="demo"]]),c(t("div",dt,rt,512),[[i,e.tab==="api"]]),c(t("div",st,it,512),[[i,e.tab==="design"]]),lt,mt],512)}const vt=p(N,[["render",ht]]);export{vt as default};
