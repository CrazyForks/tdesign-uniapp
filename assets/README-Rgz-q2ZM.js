import{_ as h,d as p,c as m,a as t,w as r,v as s,b as l,e as u,f as g,r as f,o as b}from"./sites-CLm6NhbO.js";import{P as w}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view>
    <t-pull-down-refresh
      :value="enable"
      :loading-texts="['下拉刷新', '松手刷新', '正在刷新', '刷新完成']"
      using-custom-navbar
      @refresh="onRefresh"
      @scroll="onScroll"
    >
      <!-- 包裹页面全部内容 -->
      <view class="demo">
        <t-demo-header
          title="PullDownRefresh 下拉刷新"
          desc="用于快速刷新页面信息，刷新可以是整页刷新也可以是页面的局部刷新。"
          notice="渲染框架支持情况：WebView"
        />
        <view class="pulldown-refresh__content">
          <t-skeleton
            :row-col="rowCol1"
            loading
          />
          <view class="row">
            <t-skeleton
              :row-col="rowCol2"
              loading
            />
            <t-skeleton
              :row-col="rowCol2"
              loading
            />
          </view>
          <view class="row">
            <t-skeleton
              :row-col="rowCol2"
              loading
            />
            <t-skeleton
              :row-col="rowCol2"
              loading
            />
          </view>
          <view class="row">
            <t-skeleton
              :row-col="rowCol2"
              loading
            />
            <t-skeleton
              :row-col="rowCol2"
              loading
            />
          </view>
          <view class="text">
            拖拽该区域演示 顶部下拉刷新
          </view>
        </view>
        <t-back-top
          text="顶部"
          :scroll-top="scrollTop"
          :visibility-height="100"
        />
      </view>
    </t-pull-down-refresh>
  </view>
</template>

<script>
import tPullDownRefresh from 'tdesign-uniapp/pull-down-refresh/pull-down-refresh';
import tSkeleton from 'tdesign-uniapp/skeleton/skeleton';
import tBackTop from 'tdesign-uniapp/back-top/back-top';
export default {
  components: {
    tPullDownRefresh,
    tSkeleton,
    tBackTop,
  },
  data() {
    return {
      enable: false,
      rowCol1: [
        {
          width: '100%',
          height: '342rpx',
          borderRadius: '24rpx',
        },
      ],
      rowCol2: [
        [
          {
            width: '327rpx',
          },
        ],
        [
          {
            width: '200rpx',
          },
        ],
        [
          {
            size: '327rpx',
            borderRadius: '24rpx',
          },
        ],
      ],
      scrollTop: 0,
    };
  },
  mounted() {
    // 处理小程序 ready 生命周期
    this.$nextTick(() => this.ready());
  },
  created() {},
  methods: {
    ready() {
      this.enable = true;
      setTimeout(() => {
        this.enable = false;
      }, 1000);
    },

    onRefresh() {
      this.enable = true;
      setTimeout(() => {
        this.enable = false;
      }, 1500);
    },

    onScroll(e) {
      const { scrollTop } = e;
      this.scrollTop = scrollTop;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=p({data(){return{DemoexamplebaseCode:v}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:o,tdDocTabs:d,tdDocPhone:n}=this.$refs,a="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/pull-down-refresh/pull-down-refresh";o&&(o.docInfo={title:"PullDownRefresh 下拉刷新",desc:"用于快速刷新页面信息，刷新可以是整页刷新也可以是页面的局部刷新。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:i})=>this.tab=i),n&&(n.qrcodeUrl=a),w.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),k={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},y={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"pull-down-refresh"},N=["tab"],x={name:"DEMO"},D=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TPullDownRefresh <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/pull-down-refresh/pull-down-refresh.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="顶部下拉刷新">顶部下拉刷新 <a class="header-anchor" href="#顶部下拉刷新"></a></h3><p>由于组件内无法监听页面滚动，需要由页面获取组件实例，并将页面滚动事件传递到组件。</p>`,5),S={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},T=["code"],C={slot:"action"},P=t("blockquote",null,[t("p",null,[g("在使用 pull-down-refresh 组件的页面，建议开启 "),t("code",null,"disableScroll: true")])],-1),R={ref:"tdDocPhone"},E=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/pull-down-refresh/pull-down-refresh",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),B=[E],A=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"pull-down-refresh"},null,-1),$={name:"API"},M=l('<h3 id="pulldownrefresh-props">PullDownRefresh Props <a class="header-anchor" href="#pulldownrefresh-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>false</td><td>是否禁用下拉刷新</td><td>N</td></tr><tr><td>enable-back-to-top</td><td>Boolean</td><td>true</td><td><code>1.1.5</code>。iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向。自 2.27.3 版本开始，若非显式设置为 false，则在显示尺寸大于屏幕 90% 时自动开启</td><td>N</td></tr><tr><td>enable-passive</td><td>Boolean</td><td>false</td><td><code>1.1.5</code>。开启 passive 特性，能优化一定的滚动性能</td><td>N</td></tr><tr><td>header</td><td>Slot</td><td>-</td><td><code>1.2.10</code>。头部。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>loading-bar-height</td><td>String / Number</td><td>50</td><td>加载中下拉高度，如果值为数字则单位是：&#39;px&#39;</td><td>N</td></tr><tr><td>loading-props</td><td>Object</td><td>-</td><td>加载loading样式。TS 类型：<code>LoadingProps</code>，<a href="./loading?tab=api">Loading API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/pull-down-refresh/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>loading-texts</td><td>Array</td><td>[]</td><td>提示语，组件内部默认值为 [&#39;下拉刷新&#39;, &#39;松手刷新&#39;, &#39;正在刷新&#39;, &#39;刷新完成&#39;]。TS 类型：<code>string[]</code></td><td>N</td></tr><tr><td>lower-threshold</td><td>String / Number</td><td>50</td><td><code>1.1.5</code>。距底部/右边多远时，触发 scrolltolower 事件</td><td>N</td></tr><tr><td>max-bar-height</td><td>String / Number</td><td>80</td><td>最大下拉高度，如果值为数字则单位是：&#39;px&#39;</td><td>N</td></tr><tr><td>refresh-timeout</td><td>Number</td><td>3000</td><td>刷新超时时间</td><td>N</td></tr><tr><td>scroll-into-view</td><td>String</td><td>-</td><td><code>1.1.5</code>。值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素</td><td>N</td></tr><tr><td>show-scrollbar</td><td>Boolean</td><td>true</td><td>滚动条显隐控制 (同时开启 enhanced 属性后生效)</td><td>N</td></tr><tr><td>success-duration</td><td>String / Number</td><td>500</td><td>刷新成功提示展示时长，单位 &#39;ms&#39;</td><td>N</td></tr><tr><td>upper-threshold</td><td>String / Number</td><td>50</td><td><code>1.1.5</code>。距顶部/左边多远时，触发 scrolltoupper 事件</td><td>N</td></tr><tr><td>using-custom-navbar</td><td>Boolean</td><td>false</td><td>是否使用了自定义导航栏</td><td>N</td></tr><tr><td>value</td><td>Boolean</td><td>false</td><td>组件状态，值为 <code>true</code> 表示下拉状态，值为 <code>false</code> 表示收起状态</td><td>N</td></tr><tr><td>default-value</td><td>Boolean</td><td>undefined</td><td>组件状态，值为 <code>true</code> 表示下拉状态，值为 <code>false</code> 表示收起状态。非受控属性</td><td>N</td></tr></tbody></table><h3 id="pulldownrefresh-events">PullDownRefresh Events <a class="header-anchor" href="#pulldownrefresh-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: boolean)</code></td><td>下拉或收起时触发，用户手势往下滑动触发下拉状态，手势松开触发收起状态</td></tr><tr><td>dragend</td><td><code>(scrollTop: number, scrollLeft: number)</code></td><td><code>1.2.10</code>。滑动结束事件</td></tr><tr><td>dragging</td><td><code>(scrollTop: number, scrollLeft: number)</code></td><td><code>1.2.10</code>。滑动事件</td></tr><tr><td>dragstart</td><td><code>(scrollTop: number, scrollLeft: number)</code></td><td><code>1.2.10</code>。滑动开始事件</td></tr><tr><td>refresh</td><td>-</td><td>结束下拉时触发</td></tr><tr><td>scrolltolower</td><td>-</td><td>滚动到页面底部时触发</td></tr><tr><td>timeout</td><td>-</td><td>刷新超时触发</td></tr></tbody></table><h3 id="pulldownrefresh-external-classes">PullDownRefresh External Classes <a class="header-anchor" href="#pulldownrefresh-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-indicator</td><td>指示样式类</td></tr><tr><td>t-class-loading</td><td>加载样式类</td></tr><tr><td>t-class-text</td><td>文本样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-pull-down-refresh-color</td><td>@text-color-placeholder</td><td>-</td></tr></tbody></table>',9),V=[M],j={name:"DESIGN"},q=l('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要对页面信息进行整体刷新或加载更多同类信息时使用。</p><h3 id="与页面布局相关">与页面布局相关 <a class="header-anchor" href="#与页面布局相关"></a></h3><h5 id="下拉刷新位于内容最上方；通常在页面最顶部或者选项卡、吸顶模块之下。">下拉刷新位于内容最上方；通常在页面最顶部或者选项卡、吸顶模块之下。 <a class="header-anchor" href="#下拉刷新位于内容最上方；通常在页面最顶部或者选项卡、吸顶模块之下。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/pull-downre-fresh/pull-downre-fresh-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/pull-downre-fresh/pull-downre-fresh-2.png"></div></div><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/pull-downre-fresh/pull-downre-fresh-3.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="在推荐型信息流页面使用下拉刷新，对页面所有信息进行整体更新。">在推荐型信息流页面使用下拉刷新，对页面所有信息进行整体更新。 <a class="header-anchor" href="#在推荐型信息流页面使用下拉刷新，对页面所有信息进行整体更新。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/pull-downre-fresh/pull-downre-fresh-4.png"></div></div><hr><h5 id="在按时间排布型信息流页面使用下拉刷新，对未展示出来的最新内容进行加载。">在按时间排布型信息流页面使用下拉刷新，对未展示出来的最新内容进行加载。 <a class="header-anchor" href="#在按时间排布型信息流页面使用下拉刷新，对未展示出来的最新内容进行加载。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/pull-downre-fresh/pull-downre-fresh-5.png"><em></em></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/pull-downre-fresh/pull-downre-fresh-6.png"><em></em></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./loading">加载</a></td><td style="text-align:left;">当打开新页面或操作完成后，等待加载时使用。</td></tr></tbody></table>',14),I=[q],L=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760436862393"})],-1),O=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function z(e,o,d,n,a,i){const c=f("Stackblitz");return b(),m("td-doc-content",k,[t("td-doc-header",y,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,N),r(t("div",null,[t("div",x,[D,t("div",S,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",C,[u(c,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,T)]),P]),t("td-doc-phone",R,B,512),A],512),[[s,e.tab==="demo"]]),r(t("div",$,V,512),[[s,e.tab==="api"]]),r(t("div",j,I,512),[[s,e.tab==="design"]]),L,O],512)}const G=h(_,[["render",z]]);export{G as default};
