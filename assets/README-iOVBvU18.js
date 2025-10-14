import{_ as p,d as g,c as b,a as e,w as c,v as r,b as a,e as d,f as l,r as f,o as u}from"./sites-BvyEwcEd.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view>
    <t-fab
      icon="add"
      aria-label="增加"
      @click="handleClick"
    />
  </view>
</template>

<script>
import tFab from 'tdesign-uniapp/fab/fab.vue';
export default {
  components: {
    tFab,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
<\/script>
`,D=`<template>
  <view>
    <t-fab
      icon="add"
      :button-props="fabButton"
      text="分享给朋友"
      @click="handleClick"
    />
  </view>
</template>

<script>
import tFab from 'tdesign-uniapp/fab/fab.vue';
export default {
  components: {
    tFab,
  },
  data() {
    return {
      fabButton: {
        icon: 'share',
        openType: 'share',
      },
    };
  },
  created() {},
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
<\/script>
<style>
/* @import './index.css'; */
</style>
`,y=`<template>
  <view>
    <t-fab
      icon="gesture-press"
      text="拖我"
      aria-label="增加"
      using-custom-navbar
      draggable
      :y-bounds="[0, 32]"
      @click="handleClick"
      @dragstart="handleDragStart"
      @dragend="handleDragEnd"
    />
  </view>
</template>

<script>
import tFab from 'tdesign-uniapp/fab/fab.vue';
export default {
  components: {
    tFab,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleClick(e) {
      console.log('handleClick: ', e);
    },
    handleDragStart(e) {
      console.log('handleDragStart: ', e);
    },
    handleDragEnd(e) {
      console.log('handleDragEnd: ', e);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,E=`<template>
  <view>
    <t-fab
      :custom-style="scrolling ? 'right: 0;bottom:64px;' : 'right:16px; bottom:24px'"
      @click="handleClick"
      @dragstart="handleDragStart"
      @dragend="handleDragEnd"
    >
      <view
        v-if="!scrolling"
        class="wrap"
      >
        <view class="item">
          <t-icon
            name="add-circle"
            size="20"
          />
          <view class="text">
            添加
          </view>
        </view>
        <view class="item">
          <t-icon
            name="star"
            size="20"
          />
          <view class="text">
            收藏
          </view>
        </view>
        <view class="item">
          <t-icon
            name="jump"
            size="20"
          />
          <view class="text">
            分享
          </view>
        </view>
      </view>
      <view
        v-else
        class="symbol"
      >
        <t-icon
          name="chevron-left"
          size="20"
        />
      </view>
    </t-fab>
  </view>
</template>

<script>
import tFab from 'tdesign-uniapp/fab/fab.vue';
import tIcon from 'tdesign-uniapp/icon/icon.vue';
import pageScrollMixin from 'tdesign-uniapp/mixins/page-scroll';
export default {
  components: {
    tFab,
    tIcon,
  },
  mixins: [pageScrollMixin()],
  data() {
    return {
      scrolling: false,
      timer: null,
    };
  },
  created() {},
  methods: {
    handleClick(e) {
      console.log('handleClick: ', e);
    },
    handleDragStart(e) {
      console.log('handleDragStart: ', e);
    },
    handleDragEnd(e) {
      console.log('handleDragEnd: ', e);
    },
    onScroll() {
      clearTimeout(this.timer);
      this.scrolling = true,
      this.timer = setTimeout(() => {
        this.scrolling = false;
      }, 100);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,w=g({data(){return{DemoexamplebaseCode:_,DemoexampleadvanceCode:D,DemoexampledraggableCode:y,DemoexamplecollapsibleCode:E}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:s,tdDocTabs:n,tdDocPhone:i}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/fab/fab";s&&(s.docInfo={title:"Fab 悬浮按钮",desc:"当功能使用图标即可表意清楚时，可使用纯图标悬浮按钮，例如：添加、发布。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:h})=>this.tab=h),i&&(i.qrcodeUrl=m),v.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}}),k={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},x={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"fab"},S=["tab"],C={name:"DEMO"},A=a(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TFab <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/fab/fab.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="基础使用">基础使用 <a class="header-anchor" href="#基础使用"></a></h3>`,4),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},F=["code"],R={slot:"action"},T=e("h3",{id:"进阶使用"},[l("进阶使用 "),e("a",{class:"header-anchor",href:"#进阶使用"})],-1),N={class:"tdesign-demo-wrapper tdesign-demo-item-- README-advance tdesign-demo-item-- README"},B=["code"],P={slot:"action"},$=e("h3",{id:"可移动悬浮按钮"},[l("可移动悬浮按钮 "),e("a",{class:"header-anchor",href:"#可移动悬浮按钮"})],-1),z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-draggable tdesign-demo-item-- README"},I=["code"],j={slot:"action"},q=e("h3",{id:"带自动收缩功能"},[l("带自动收缩功能 "),e("a",{class:"header-anchor",href:"#带自动收缩功能"})],-1),V={class:"tdesign-demo-wrapper tdesign-demo-item-- README-collapsible tdesign-demo-item-- README"},O=["code"],H={slot:"action"},U=a('<h2 id="faq">FAQ <a class="header-anchor" href="#faq"></a></h2><h3 id="为什么通过-style-customstyle-设置-top-left-调整初试定位后，会使页面内容无法点击以及拖拽异常？">为什么通过 style/customStyle 设置 top/left 调整初试定位后，会使页面内容无法点击以及拖拽异常？ <a class="header-anchor" href="#为什么通过-style-customstyle-设置-top-left-调整初试定位后，会使页面内容无法点击以及拖拽异常？"></a></h3><p>由于 <code>position: fixed;</code> 会使得元素脱离文档流，它将悬浮于页面上方。同时，元素没有设置宽高，当同时使用 <code>top</code>、<code>right</code>、<code>bottom</code> 和 <code>left</code> 属性时，浏览器会根据给定的 <code>top</code>、<code>right</code>、<code>bottom</code> 和 <code>left</code> 创建一个矩形框来容纳元素及其内容，所以会出现元素覆盖页面内容及拖拽异常等问题。</p><p>Fab 组件默认定位 <code>right: 16px; bottom: 32px;</code>，且拖拽功能也是通过调整 <code>right</code> 与 <code>bottom</code> 属性值实现，因此在使用 <code>Fab</code> 组件时，仅支持通过 <code>style/customStyle</code> 属性设置 <code>right/bottom</code> 来调整初试位置， 避免使用 <code>top/left</code>。</p><h3 id="开启-skyline-渲染引擎后，组件所在页面崩溃？">开启 Skyline 渲染引擎后，组件所在页面崩溃？ <a class="header-anchor" href="#开启-skyline-渲染引擎后，组件所在页面崩溃？"></a></h3><p>因为 Skyline 还不支持多层阴影，要等微信官方处理。当下可参考 <a href="https://github.com/Tencent/tdesign-miniprogram/issues/2865" target="_blank" rel="noopener noreferrer">#2865</a> 进行规避处理</p>',6),G={ref:"tdDocPhone"},Q=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/fab/fab",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),J=[Q],K=e("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"fab"},null,-1),L={name:"API"},W=a('<h3 id="fab-props">Fab Props <a class="header-anchor" href="#fab-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>button-props</td><td>Object</td><td>-</td><td>透传至 Button 组件。TS 类型：<code>ButtonProps</code>，<a href="./button?tab=api">Button API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/fab/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>draggable</td><td>String / Boolean</td><td>false</td><td>是否可拖拽。<code>true</code> / <code>&#39;all&#39;</code>可拖动<br><code>&#39;vertical&#39;</code>可垂直拖动<br><code>&#39;horizontal&#39;</code>可水平拖动<br><code>false</code>禁止拖动。TS 类型：<code>boolean \\| FabDirectionEnum </code> <code>type FabDirectionEnum = &#39;all&#39; \\| &#39;vertical&#39; \\| &#39;horizontal&#39;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/fab/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>icon</td><td>String</td><td>-</td><td>图标</td><td>N</td></tr><tr><td>text</td><td>String</td><td>-</td><td>文本内容</td><td>N</td></tr><tr><td>using-custom-navbar</td><td>Boolean</td><td>false</td><td>是否使用了自定义导航栏</td><td>N</td></tr><tr><td>y-bounds</td><td>Array</td><td>-</td><td>设置垂直方向边界限制，示例：[48, 48] 或 [&#39;96px&#39;, 80]。TS 类型：<code>Array&lt;string \\| number&gt;</code></td><td>N</td></tr></tbody></table><h3 id="fab-events">Fab Events <a class="header-anchor" href="#fab-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>click</td><td><code>(detail: {e: Event})</code></td><td>悬浮按钮点击事件</td></tr><tr><td>drag-end</td><td><code>(detail: { e: TouchEvent })</code></td><td>结束拖拽时触发</td></tr><tr><td>drag-start</td><td><code>(detail: { e: TouchEvent })</code></td><td>开始拖拽时触发</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-fab-shadow</td><td>@shadow-2</td><td>-</td></tr></tbody></table>',7),X=[W],Y={name:"DESIGN"},Z=a('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当某个操作为全局操作，且为用户高频/业务强推的操作时可使用。</p><h3 id="与页面布局相关">与页面布局相关 <a class="header-anchor" href="#与页面布局相关"></a></h3><h5 id="为了避免遮挡页面中重要内容，通常将悬浮按钮放置于页面右下角，当页面中没有底部标签栏时，也可以考虑放置于中下位置。">为了避免遮挡页面中重要内容，通常将悬浮按钮放置于页面右下角，当页面中没有底部标签栏时，也可以考虑放置于中下位置。 <a class="header-anchor" href="#为了避免遮挡页面中重要内容，通常将悬浮按钮放置于页面右下角，当页面中没有底部标签栏时，也可以考虑放置于中下位置。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/fab/fab-1.png"><em></em></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/fab/fab-2.png"><em></em></div></div><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/fab/fab-3.png"><em></em></div></div><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="悬浮按钮与动作面板组合使用，当触发悬浮按钮涉及的任务通过若干种方式达成，可以用动态面板来承载这若干种方式的操作。">悬浮按钮与<a href="./action-sheet">动作面板</a>组合使用，当触发悬浮按钮涉及的任务通过若干种方式达成，可以用动态面板来承载这若干种方式的操作。 <a class="header-anchor" href="#悬浮按钮与动作面板组合使用，当触发悬浮按钮涉及的任务通过若干种方式达成，可以用动态面板来承载这若干种方式的操作。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/fab/fab-4.png"><em></em></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="通常情况下页面中建议只使用一个悬浮按钮；若页面以地图、看板为主要场景，需要出现多个悬浮按钮时，建议通过样式区分主次、层级关系。">通常情况下页面中建议只使用一个悬浮按钮；若页面以地图、看板为主要场景，需要出现多个悬浮按钮时，建议通过样式区分主次、层级关系。 <a class="header-anchor" href="#通常情况下页面中建议只使用一个悬浮按钮；若页面以地图、看板为主要场景，需要出现多个悬浮按钮时，建议通过样式区分主次、层级关系。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/fab/fab-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/fab/fab-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="图标加文字悬浮按钮上的字数建议精简，控制在2-4个字左右，避免遮挡过多页面内容。">图标加文字悬浮按钮上的字数建议精简，控制在2-4个字左右，避免遮挡过多页面内容。 <a class="header-anchor" href="#图标加文字悬浮按钮上的字数建议精简，控制在2-4个字左右，避免遮挡过多页面内容。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/fab/fab-7.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/fab/fab-8.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./button">按钮</a></td><td style="text-align:left;">当前流程的结束或新流程的开启需要用户点击触发时使用。</td></tr><tr><td style="text-align:left;"><a href="./back-top">返回顶部</a></td><td style="text-align:left;">当页面内容过长，用户有快速返回到页面顶部的诉求时使用。</td></tr></tbody></table>',17),ee=[Z],te=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760436141091"})],-1),ne=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function oe(t,s,n,i,m,h){const o=f("Stackblitz");return u(),b("td-doc-content",k,[e("td-doc-header",x,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:t.tab},null,8,S),c(e("div",null,[e("div",C,[A,e("div",M,[e("td-doc-demo",{code:t.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[e("div",R,[d(o,{"demo-name":"base","component-name":" README",code:t.DemoexamplebaseCode},null,8,["code"])])],8,F)]),T,e("div",N,[e("td-doc-demo",{code:t.DemoexampleadvanceCode,language:"markup","show-code":"",mode:"open","demo-name":"advance","component-name":" README"},[e("div",P,[d(o,{"demo-name":"advance","component-name":" README",code:t.DemoexampleadvanceCode},null,8,["code"])])],8,B)]),$,e("div",z,[e("td-doc-demo",{code:t.DemoexampledraggableCode,language:"markup","show-code":"",mode:"open","demo-name":"draggable","component-name":" README"},[e("div",j,[d(o,{"demo-name":"draggable","component-name":" README",code:t.DemoexampledraggableCode},null,8,["code"])])],8,I)]),q,e("div",V,[e("td-doc-demo",{code:t.DemoexamplecollapsibleCode,language:"markup","show-code":"",mode:"open","demo-name":"collapsible","component-name":" README"},[e("div",H,[d(o,{"demo-name":"collapsible","component-name":" README",code:t.DemoexamplecollapsibleCode},null,8,["code"])])],8,O)]),U]),e("td-doc-phone",G,J,512),K],512),[[r,t.tab==="demo"]]),c(e("div",L,X,512),[[r,t.tab==="api"]]),c(e("div",Y,ee,512),[[r,t.tab==="design"]]),te,ne],512)}const se=p(w,[["render",oe]]);export{se as default};
