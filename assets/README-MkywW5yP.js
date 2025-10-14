import{_ as u,d as h,c as w,a as t,w as s,v as a,b as i,e as l,f as p,r as g,o as v}from"./sites-vH1cnupm.js";import{P as b}from"./prism-bash-zcnM7wlG.js";const f=`<template>
  <view>
    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        时分秒
      </text>
      <view class="demo-count-down-content">
        <t-count-down :time="time" />
      </view>
    </view>

    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        带毫秒
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          format="HH:mm:ss:SSS"
          :time="time"
          millisecond
        />
      </view>
    </view>

    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        带方形底
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          content="default"
          :time="time"
          theme="square"
        />
      </view>
    </view>

    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        带圆形底
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          content="default"
          :time="time"
          theme="round"
        />
      </view>
    </view>

    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        带单位
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          content="default"
          :time="time"
          split-with-unit
          theme="round"
        />
      </view>
    </view>

    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        无底色带单位
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          t-class-count="external-count"
          t-class-split="external-split"
          content="default"
          :time="time"
          split-with-unit
        />
      </view>
    </view>
  </view>
</template>

<script>
import tCountDown from 'tdesign-uniapp/count-down/count-down';
export default {
  components: {
    tCountDown,
  },
  data() {
    return {
      time: 5760000,
    };
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
    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        时分秒
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          size="small"
          :time="time"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down :time="time" />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          size="large"
          :time="time"
        />
      </view>
    </view>

    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        带毫秒
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          size="small"
          format="HH:mm:ss:SSS"
          :time="time"
          millisecond
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          format="HH:mm:ss:SSS"
          :time="time"
          millisecond
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          size="large"
          format="HH:mm:ss:SSS"
          :time="time"
          millisecond
        />
      </view>
    </view>

    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        带方形底
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          size="small"
          format="HH:mm:ss"
          :time="time"
          theme="square"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          format="HH:mm:ss"
          :time="time"
          theme="square"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          size="large"
          format="HH:mm:ss"
          :time="time"
          theme="square"
        />
      </view>
    </view>

    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        带圆形底
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          size="small"
          format="HH:mm:ss"
          :time="time"
          theme="round"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          format="HH:mm:ss"
          :time="time"
          theme="round"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          size="large"
          format="HH:mm:ss"
          :time="time"
          theme="round"
        />
      </view>
    </view>

    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        带单位
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          size="small"
          format="HH:mm:ss"
          :time="time"
          split-with-unit
          theme="round"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          format="HH:mm:ss"
          :time="time"
          split-with-unit
          theme="round"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          size="large"
          format="HH:mm:ss"
          :time="time"
          split-with-unit
          theme="round"
        />
      </view>
    </view>
  </view>
</template>

<script>
import tCountDown from 'tdesign-uniapp/count-down/count-down';
export default {
  components: {
    tCountDown,
  },
  data() {
    return {
      time: 5760000,
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,x=h({data(){return{DemoexamplebaseCode:f,DemoexamplesizeCode:_}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(n){this.$route.query.tab!==n&&this.$router.push({query:{tab:n}})}}},mounted(){const{tdDocContent:n,tdDocHeader:o,tdDocTabs:e,tdDocPhone:d}=this.$refs,c="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/count-down/count-down";o&&(o.docInfo={title:"CountDown 倒计时",desc:"用于实时展示倒计时数值。"}),e&&(e.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],e.onchange=({detail:r})=>this.tab=r),d&&(d.qrcodeUrl=c),b.highlightAll(),this.$emit("loaded",()=>{n.pageStatus="show"})}}),D={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},y={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"count-down"},S=["tab"],H={name:"DEMO"},C=i(`<blockquote><p>CountDown 组件用于实时展示倒计时数值。 如果需要与站点演示一致的数字字体效果，推荐您到 <a href="https://tdesign.tencent.com/design/fonts">数字字体章节</a>，将 TCloudNumber 字体下载并将包含的 TCloudNumberVF.ttf 做为 TCloudNumber 字体资源引入到具体项目中使用。</p></blockquote><h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-count-down&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/count-down/count-down&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/C37tsims79Sk" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="基础倒计时">基础倒计时 <a class="header-anchor" href="#基础倒计时"></a></h3>`,8),k={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},q=["code"],E={slot:"action"},z=t("h3",{id:"调整尺寸"},[p("调整尺寸 "),t("a",{class:"header-anchor",href:"#调整尺寸"})],-1),N={class:"tdesign-demo-wrapper tdesign-demo-item-- README-size tdesign-demo-item-- README"},A=["code"],T={slot:"action"},M={ref:"tdDocPhone"},R=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/count-down/count-down",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),$=[R],P=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"count-down"},null,-1),j={name:"API"},B=i('<h3 id="countdown-props">CountDown Props <a class="header-anchor" href="#countdown-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>auto-start</td><td>Boolean</td><td>true</td><td>是否自动开始倒计时</td><td>N</td></tr><tr><td>content</td><td>String / Slot</td><td>&#39;default&#39;</td><td>最终倒计时的展示内容，值为&#39;default&#39;时使用默认的格式，否则使用自定义样式插槽。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>format</td><td>String</td><td>HH:mm:ss</td><td>时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒</td><td>N</td></tr><tr><td>millisecond</td><td>Boolean</td><td>false</td><td>是否开启毫秒级渲染</td><td>N</td></tr><tr><td>size</td><td>String</td><td>&#39;medium&#39;</td><td><code>0.5.1</code>。倒计时尺寸。可选项：small/medium/large</td><td>N</td></tr><tr><td>split-with-unit</td><td>Boolean</td><td>false</td><td><code>0.5.1</code>。使用时间单位分割</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>&#39;default&#39;</td><td><code>0.5.1</code>。倒计时风格。可选项：default/round/square</td><td>N</td></tr><tr><td>time</td><td>Number</td><td>0</td><td>必需。倒计时时长，单位毫秒</td><td>Y</td></tr></tbody></table><h3 id="countdown-events">CountDown Events <a class="header-anchor" href="#countdown-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(time: TimeData)</code></td><td>时间变化时触发。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/count-down/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>interface TimeData { days: number; hours: number; minutes: number; seconds: number; milliseconds: number }</code><br></td></tr><tr><td>finish</td><td>-</td><td>倒计时结束时触发</td></tr></tbody></table><h3 id="countdown-external-classes">CountDown External Classes <a class="header-anchor" href="#countdown-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-count</td><td>计数样式类</td></tr><tr><td>t-class-split</td><td>分隔线样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-countdown-bg-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-countdown-default-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-countdown-round-border-radius</td><td>@radius-circle</td><td>-</td></tr><tr><td>--td-countdown-round-color</td><td>@text-color-anti</td><td>-</td></tr><tr><td>--td-countdown-square-border-radius</td><td>@radius-small</td><td>-</td></tr></tbody></table>',9),V=[B],I={name:"DESIGN"},O=i('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要向用户提示剩余时间时使用。</p><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="在营销场景下，通过倒计时向用户展示运营活动开始倒计时或距活动结束的剩余时间，从而体现稀缺性吸引目标受众的注意力，勾起足够兴趣以此激励用户参与。">在营销场景下，通过倒计时向用户展示运营活动开始倒计时或距活动结束的剩余时间，从而体现稀缺性吸引目标受众的注意力，勾起足够兴趣以此激励用户参与。 <a class="header-anchor" href="#在营销场景下，通过倒计时向用户展示运营活动开始倒计时或距活动结束的剩余时间，从而体现稀缺性吸引目标受众的注意力，勾起足够兴趣以此激励用户参与。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/count-down/count-down-1.png"></div></div><hr><h5 id="在一些工作流场景下，提示用户还剩余多少时间来完成某项任务或处理某些事项，强化时间概念。">在一些工作流场景下，提示用户还剩余多少时间来完成某项任务或处理某些事项，强化时间概念。 <a class="header-anchor" href="#在一些工作流场景下，提示用户还剩余多少时间来完成某项任务或处理某些事项，强化时间概念。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/count-down/count-down-2.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="不建议在同一个页面滥用倒计时，若需要反复使用，建议用较为轻量的样式">不建议在同一个页面滥用倒计时，若需要反复使用，建议用较为轻量的样式. <a class="header-anchor" href="#不建议在同一个页面滥用倒计时，若需要反复使用，建议用较为轻量的样式"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/count-down/count-down-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/count-down/count-down-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./tag">标签</a></td><td style="text-align:left;">当需要展示内容本身的属性、状态、类别、营销情况时作为纯展示使用；或者当大量的内容数据需要根据类型进行选择筛选时使用。</td></tr><tr><td style="text-align:left;"><a href="./badge">徽标</a></td><td style="text-align:left;">当需要展示特定对象的状态变化或承载运营性质提示时使用。</td></tr></tbody></table>',13),U=[O],F=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416475784"})],-1),G=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function J(n,o,e,d,c,r){const m=g("Stackblitz");return v(),w("td-doc-content",D,[t("td-doc-header",y,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:n.tab},null,8,S),s(t("div",null,[t("div",H,[C,t("div",k,[t("td-doc-demo",{code:n.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",E,[l(m,{"demo-name":"base","component-name":" README",code:n.DemoexamplebaseCode},null,8,["code"])])],8,q)]),z,t("div",N,[t("td-doc-demo",{code:n.DemoexamplesizeCode,language:"markup","show-code":"",mode:"open","demo-name":"size","component-name":" README"},[t("div",T,[l(m,{"demo-name":"size","component-name":" README",code:n.DemoexamplesizeCode},null,8,["code"])])],8,A)])]),t("td-doc-phone",M,$,512),P],512),[[a,n.tab==="demo"]]),s(t("div",j,V,512),[[a,n.tab==="api"]]),s(t("div",I,U,512),[[a,n.tab==="design"]]),F,G],512)}const L=u(x,[["render",J]]);export{L as default};
