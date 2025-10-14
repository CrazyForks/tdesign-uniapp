import{_ as p,d as h,c as g,a as t,w as i,v as r,b as l,e as o,f as u,r as k,o as w}from"./sites-CV9d1pkc.js";import{P as b}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view>
    <view
      v-for="(themeItem, index) in themeList"
      :key="index"
    >
      <view class="demo-section__desc">
        {{ themeItem.title }}
      </view>

      <view class="demo-section__content">
        <t-skeleton :theme="themeItem.value" />
      </view>
    </view>
  </view>
</template>

<script>
import tSkeleton from 'tdesign-uniapp/skeleton/skeleton';
export default {
  components: {
    tSkeleton,
  },
  data() {
    return {
      themeList: [
        {
          title: '头像骨架屏',
          value: 'avatar',
        },
        {
          title: '图片骨架屏',
          value: 'image',
        },
        {
          title: '文本骨架屏',
          value: 'text',
        },
        {
          title: '段落骨架屏',
          value: 'paragraph',
        },
      ],

      themeItem: {
        title: '',
        value: '',
      },
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,v=`<template>
  <view>
    <view class="group">
      <t-skeleton
        class="group-avatar"
        :row-col="rowColsAvater"
        loading
      />
      <t-skeleton
        class="group-content"
        :row-col="rowColsContent"
        loading
      />
    </view>

    <view class="group">
      <t-skeleton
        class="group-avatar"
        :row-col="rowColsImage"
        loading
      />
      <t-skeleton
        class="group-content"
        :row-col="rowColsContent"
        loading
      />
    </view>
  </view>
</template>

<script>
import tSkeleton from 'tdesign-uniapp/skeleton/skeleton';
export default {
  components: {
    tSkeleton,
  },
  data() {
    return {
      rowColsAvater: [
        {
          size: '96rpx',
          type: 'circle',
        },
      ],
      rowColsImage: [
        {
          size: '96rpx',
          type: 'rect',
        },
      ],
      rowColsContent: [
        {
          width: '50%',
        },
        {
          width: '100%',
        },
      ],
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,x=`<template>
  <view class="wrapper">
    <t-skeleton
      :row-col="grid"
      loading
    />
  </view>
</template>

<script>
import tSkeleton from 'tdesign-uniapp/skeleton/skeleton';
export default {
  components: {
    tSkeleton,
  },
  data() {
    return {
      grid: [
        [
          {
            width: '96rpx',
            height: '96rpx',
            borderRadius: '12rpx',
          },
          {
            width: '96rpx',
            height: '96rpx',
            borderRadius: '12rpx',
          },
          {
            width: '96rpx',
            height: '96rpx',
            borderRadius: '12rpx',
          },
          {
            width: '96rpx',
            height: '96rpx',
            borderRadius: '12rpx',
          },
          {
            width: '96rpx',
            height: '96rpx',
            borderRadius: '12rpx',
          },
        ],
        [
          {
            width: '96rpx',
            height: '32rpx',
            borderRadius: '6rpx',
          },
          {
            width: '96rpx',
            height: '32rpx',
            borderRadius: '6rpx',
          },
          {
            width: '96rpx',
            height: '32rpx',
            borderRadius: '6rpx',
          },
          {
            width: '96rpx',
            height: '32rpx',
            borderRadius: '6rpx',
          },
          {
            width: '96rpx',
            height: '32rpx',
            borderRadius: '6rpx',
          },
        ],
      ],
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,f=`<template>
  <view class="group">
    <t-skeleton
      :row-col="rowCol"
      loading
    />
    <t-skeleton
      :row-col="rowCol"
      loading
    />
  </view>
</template>

<script>
import tSkeleton from 'tdesign-uniapp/skeleton/skeleton';
export default {
  components: {
    tSkeleton,
  },
  data() {
    return {
      rowCol: [
        {
          size: '327rpx',
          borderRadius: '24rpx',
        },
        1,
        {
          width: '61%',
        },
      ],
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,D=`<template>
  <view>
    <view
      v-for="(animationItem, index) in animationList"
      :key="index"
    >
      <view class="demo-section__desc">
        {{ animationItem.title }}
      </view>

      <view class="demo-section__content">
        <t-skeleton
          theme="paragraph"
          :animation="animationItem.value"
          :loading="animationItem.loading"
        />
      </view>
    </view>
  </view>
</template>

<script>
import tSkeleton from 'tdesign-uniapp/skeleton/skeleton';
export default {
  components: {
    tSkeleton,
  },
  data() {
    return {
      animationList: [
        {
          title: '渐变加载效果',
          value: 'gradient',
          loading: true,
        },
        {
          title: '闪烁加载效果',
          value: 'flashed',
          loading: true,
        },
      ],

      animationItem: {
        title: '',
        value: '',
        loading: '',
      },
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,E=h({data(){return{DemoexamplethemeCode:_,DemoexamplecellgroupCode:v,DemoexamplegridCode:x,DemoexampleimagegroupCode:f,DemoexampleanimationCode:D}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:a,tdDocTabs:d,tdDocPhone:s}=this.$refs,c="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/skeleton/skeleton";a&&(a.docInfo={title:"Skeleton 骨架屏",desc:"用于等待加载内容所展示的占位图形组合，有动态效果加载效果，减少用户等待焦虑。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:m})=>this.tab=m),s&&(s.qrcodeUrl=c),b.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),y={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},C={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"skeleton"},R=["tab"],S={name:"DEMO"},A=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TSkeleton <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/skeleton/skeleton.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="骨架屏类型">骨架屏类型 <a class="header-anchor" href="#骨架屏类型"></a></h3><p>基础骨架屏</p>`,5),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},I=["code"],N={slot:"action"},$=t("p",null,"单元格骨架屏",-1),j={class:"tdesign-demo-wrapper tdesign-demo-item-- README-cell-group tdesign-demo-item-- README"},P=["code"],z={slot:"action"},L=t("p",null,"宫格骨架屏",-1),O={class:"tdesign-demo-wrapper tdesign-demo-item-- README-grid tdesign-demo-item-- README"},T=["code"],V={slot:"action"},q=t("p",null,"图文组合骨架屏",-1),B={class:"tdesign-demo-wrapper tdesign-demo-item-- README-image-group tdesign-demo-item-- README"},H=["code"],U={slot:"action"},G=t("h3",{id:"组件动效"},[u("组件动效 "),t("a",{class:"header-anchor",href:"#组件动效"})],-1),F={class:"tdesign-demo-wrapper tdesign-demo-item-- README-animation tdesign-demo-item-- README"},J=["code"],K={slot:"action"},Q={ref:"tdDocPhone"},W=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/skeleton/skeleton",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),X=[W],Y=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"skeleton"},null,-1),Z={name:"API"},tt=l('<h3 id="skeleton-props">Skeleton Props <a class="header-anchor" href="#skeleton-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>animation</td><td>String</td><td>none</td><td>动画效果，有「渐变加载动画」和「闪烁加载动画」两种。值为 &#39;none&#39; 则表示没有动画。可选项：gradient/flashed/none</td><td>N</td></tr><tr><td>delay</td><td>Number</td><td>0</td><td>延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒</td><td>N</td></tr><tr><td>loading</td><td>Boolean</td><td>true</td><td>是否为加载状态，如果是则显示骨架图，如果不是则显示加载完成的内容</td><td>N</td></tr><tr><td>row-col</td><td>Array</td><td>-</td><td>高级设置，用于自定义行列数量、宽度高度、间距等。【示例一】，<code>[1, 1, 2]</code> 表示输出三行骨架图，第一行一列，第二行一列，第三行两列。【示例二】，<code>[1, 1, { width: &#39;100px&#39; }]</code> 表示自定义第三行的宽度为 <code>100px</code>。【示例三】，<code>[1, 2, [{ width, height }, { width, height, marginLeft }]]</code> 表示第三行有两列，且自定义宽度、高度、尺寸（圆形或方形使用）、间距、内容等。TS 类型：<code>SkeletonRowCol</code> <code>type SkeletonRowCol = Array&lt;Number \\| SkeletonRowColObj \\| Array&lt;SkeletonRowColObj&gt;&gt;</code> <code>interface SkeletonRowColObj { width?: string; size?: string;height?: string; marginRight?: string; marginLeft?: string; margin?: string; type?: &#39;rect&#39; \\| &#39;circle&#39; \\| &#39;text&#39;;}</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/skeleton/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>theme</td><td>String</td><td>text</td><td>骨架图风格，有基础、头像组合等两大类。可选项：avatar/image/text/paragraph</td><td>N</td></tr></tbody></table><h3 id="skeleton-external-classes">Skeleton External Classes <a class="header-anchor" href="#skeleton-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-col</td><td>行样式类</td></tr><tr><td>t-class-row</td><td>列样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-skeleton-circle-border-radius</td><td>@skeleton-circle-border-radius</td><td>-</td></tr><tr><td>--td-skeleton-animation-flashed</td><td>rgba(90%, 90%, 90%, 0.3)</td><td>-</td></tr><tr><td>--td-skeleton-animation-gradient</td><td>rgba(0, 0, 0, 4%)</td><td>-</td></tr><tr><td>--td-skeleton-bg-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-skeleton-circle-border-radius</td><td>@radius-circle</td><td>-</td></tr><tr><td>--td-skeleton-circle-height</td><td>96rpx</td><td>-</td></tr><tr><td>--td-skeleton-rect-border-radius</td><td>@radius-default</td><td>-</td></tr><tr><td>--td-skeleton-rect-height</td><td>32rpx</td><td>-</td></tr><tr><td>--td-skeleton-row-spacing</td><td>@spacer-2</td><td>-</td></tr><tr><td>--td-skeleton-text-border-radius</td><td>@radius-small</td><td>-</td></tr><tr><td>--td-skeleton-text-height</td><td>32rpx</td><td>-</td></tr></tbody></table>',7),et=[tt],nt={name:"DESIGN"},ot=l('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当整个页面需要加载时使用</p><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="建议骨架屏的元素构成和排布方式与页面自身保持一致">建议骨架屏的元素构成和排布方式与页面自身保持一致 <a class="header-anchor" href="#建议骨架屏的元素构成和排布方式与页面自身保持一致"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/skeleton/skeleton-1.gif"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/skeleton/skeleton-2.gif"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./loading">加载</a></td><td style="text-align:left;">当打开新页面或操作完成后，等待加载时使用。</td></tr></tbody></table>',7),dt=[ot],at=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760435391753"})],-1),st=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function it(e,a,d,s,c,m){const n=k("Stackblitz");return w(),g("td-doc-content",y,[t("td-doc-header",C,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,R),i(t("div",null,[t("div",S,[A,t("div",M,[t("td-doc-demo",{code:e.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",N,[o(n,{"demo-name":"theme","component-name":" README",code:e.DemoexamplethemeCode},null,8,["code"])])],8,I)]),$,t("div",j,[t("td-doc-demo",{code:e.DemoexamplecellgroupCode,language:"markup","show-code":"",mode:"open","demo-name":"cell-group","component-name":" README"},[t("div",z,[o(n,{"demo-name":"cell-group","component-name":" README",code:e.DemoexamplecellgroupCode},null,8,["code"])])],8,P)]),L,t("div",O,[t("td-doc-demo",{code:e.DemoexamplegridCode,language:"markup","show-code":"",mode:"open","demo-name":"grid","component-name":" README"},[t("div",V,[o(n,{"demo-name":"grid","component-name":" README",code:e.DemoexamplegridCode},null,8,["code"])])],8,T)]),q,t("div",B,[t("td-doc-demo",{code:e.DemoexampleimagegroupCode,language:"markup","show-code":"",mode:"open","demo-name":"image-group","component-name":" README"},[t("div",U,[o(n,{"demo-name":"image-group","component-name":" README",code:e.DemoexampleimagegroupCode},null,8,["code"])])],8,H)]),G,t("div",F,[t("td-doc-demo",{code:e.DemoexampleanimationCode,language:"markup","show-code":"",mode:"open","demo-name":"animation","component-name":" README"},[t("div",K,[o(n,{"demo-name":"animation","component-name":" README",code:e.DemoexampleanimationCode},null,8,["code"])])],8,J)])]),t("td-doc-phone",Q,X,512),Y],512),[[r,e.tab==="demo"]]),i(t("div",Z,et,512),[[r,e.tab==="api"]]),i(t("div",nt,dt,512),[[r,e.tab==="design"]]),at,st],512)}const ct=p(E,[["render",it]]);export{ct as default};
