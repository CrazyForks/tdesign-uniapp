import{_ as g,d as f,c as h,a as t,w as r,v as i,b as l,f as c,e as a,r as b,o as u}from"./sites-taiaIPy6.js";import{P as _}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view>
    <view
      v-for="(item, index) in resultList"
      :key="index"
    >
      <view class="demo-section__content">
        <t-result
          :theme="item.theme"
          :title="item.title"
        />
      </view>
    </view>
  </view>
</template>

<script>
import tResult from 'tdesign-uniapp/result/result';
export default {
  components: {
    tResult,
  },
  data() {
    return {
      resultList: [
        {
          title: '成功状态',
          theme: 'success',
        },
        {
          title: '失败状态',
          theme: 'error',
        },
        {
          title: '警示状态',
          theme: 'warning',
        },
        {
          title: '默认状态',
          theme: 'default',
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
  <view>
    <view
      v-for="(item, index) in resultList"
      :key="index"
    >
      <view class="demo-section__content">
        <t-result
          :theme="item.theme"
          :title="item.title"
          :description="item.description"
        />
      </view>
    </view>
  </view>
</template>

<script>
import tResult from 'tdesign-uniapp/result/result';
export default {
  components: {
    tResult,
  },
  data() {
    return {
      resultList: [
        {
          title: '成功状态',
          theme: 'success',
          description: '描述文字',
        },
        {
          title: '失败状态',
          theme: 'error',
          description: '描述文字',
        },
        {
          title: '警示状态',
          theme: 'warning',
          description: '描述文字',
        },
        {
          title: '默认状态',
          theme: 'default',
          description: '描述文字',
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
`,y=`<template>
  <view>
    <t-result
      t-class-image="external-class-image"
      image="https://tdesign.gtimg.com/mobile/demos/result1.png"
    >
      <template #title>
        <view>
          自定义结果
        </view>
      </template>
      <template #description>
        <view>
          描述文字
        </view>
      </template>
    </t-result>
  </view>
</template>

<script>
import tResult from 'tdesign-uniapp/result/result';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tResult,
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
`,w=f({data(){return{DemoexamplethemeCode:v,DemoexampledescriptionCode:x,DemoexamplecustomCode:y}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:d,tdDocTabs:n,tdDocPhone:o}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp#/pages-more/result/result";d&&(d.docInfo={title:"Result 结果",desc:"反馈结果状态。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:p})=>this.tab=p),o&&(o.qrcodeUrl=m),_.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),D={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},E={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"result"},k=["tab"],R={name:"DEMO"},S={style:{background:"#ecf2fe",display:"flex","align-items":"center","line-height":"20px",padding:"14px 24px","border-radius":"3px",color:"#555a65"}},A={fill:"none",viewBox:"0 0 16 16",width:"16px",height:"16px",style:{"margin-right":"5px"}},C=t("path",{fill:"#0052d9",d:"M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z",fillOpacity:"0.9"},null,-1),q=[C],M=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/result/result&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/lw77kim37uSg" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>基础结果</p>`,8),N={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},z=["code"],j={slot:"action"},$=t("p",null,"带描述的结果",-1),V={class:"tdesign-demo-wrapper tdesign-demo-item-- README-description tdesign-demo-item-- README"},P=["code"],T={slot:"action"},O=t("p",null,"自定义结果",-1),B={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom tdesign-demo-item-- README"},I=["code"],L={slot:"action"},H=t("h2",{id:"常见问题"},[c("常见问题 "),t("a",{class:"header-anchor",href:"#常见问题"})],-1),U=t("details",null,[t("summary",null,[c(" 本地图片无法正确引用? "),t("span",{class:"icon"},"👇")]),t("p",{style:{"margin-top":"10px",color:"rgba(0, 0, 0, .6)"}}," 建议使用绝对路径，而不是相对路径。绝对路径以 app.json 所在位置为基准。 ")],-1),G={ref:"tdDocPhone"},J=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp#/pages-more/result/result",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),F=[J],K=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"result"},null,-1),Q={name:"API"},W=l('<h3 id="result-props">Result Props <a class="header-anchor" href="#result-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>description</td><td>String / Slot</td><td>-</td><td>描述文字。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>icon</td><td>String / Boolean / Object</td><td>true</td><td>图标名称。值为字符串表示图标名称，值为 <code>false</code> 表示不显示图标，值为 <code>Object</code> 类型，表示透传至 <code>icon</code>，不传表示使用主题图标</td><td>N</td></tr><tr><td>image</td><td>String / Slot</td><td>-</td><td>图片地址。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>theme</td><td>String</td><td>default</td><td>内置主题。可选项：default/success/warning/error</td><td>N</td></tr><tr><td>title</td><td>String / Slot</td><td>&#39;&#39;</td><td>标题。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr></tbody></table><h3 id="result-external-classes">Result External Classes <a class="header-anchor" href="#result-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-description</td><td>描述样式类</td></tr><tr><td>t-class-image</td><td>图片样式类</td></tr><tr><td>t-class-title</td><td>标题样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-result-description-color</td><td>@text-color-secondary</td><td>-</td></tr><tr><td>--td-result-description-font-size</td><td>@font-size-base</td><td>-</td></tr><tr><td>--td-result-description-line-height</td><td>44rpx</td><td>-</td></tr><tr><td>--td-result-description-margin-top</td><td>@spacer</td><td>-</td></tr><tr><td>--td-result-icon-default-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-result-icon-error-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-result-icon-success-color</td><td>@success-color</td><td>-</td></tr><tr><td>--td-result-icon-warning-color</td><td>@warning-color</td><td>-</td></tr><tr><td>--td-result-title-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-result-title-font-size</td><td>@font-size-xl</td><td>-</td></tr><tr><td>--td-result-title-line-height</td><td>56rpx</td><td>-</td></tr><tr><td>--td-result-title-margin-top</td><td>@spacer-1</td><td>-</td></tr></tbody></table>',7),X=[W],Y={name:"DESIGN"},Z=l('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要向用户展示操作后的结果反馈时使用。</p><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="任务本身在弹窗中进行或仅需要较为轻量的结果反馈时，可使用弹窗承载结果反馈。">任务本身在弹窗中进行或仅需要较为轻量的结果反馈时，可使用弹窗承载结果反馈。 <a class="header-anchor" href="#任务本身在弹窗中进行或仅需要较为轻量的结果反馈时，可使用弹窗承载结果反馈。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/result/result-1.png"></div></div><hr><h5 id="当任务结束并给予反馈后，需要推荐其他内容、任务、商品等给用户时，通常使用页面承载结果和推荐。">当任务结束并给予反馈后，需要推荐其他内容、任务、商品等给用户时，通常使用页面承载结果和推荐。 <a class="header-anchor" href="#当任务结束并给予反馈后，需要推荐其他内容、任务、商品等给用户时，通常使用页面承载结果和推荐。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/result/result-2.png"></div></div><hr><h5 id="当任务结果为失败时，通常会告知用户失败原因，甚至提供解决问题的操作。">当任务结果为失败时，通常会告知用户失败原因，甚至提供解决问题的操作。 <a class="header-anchor" href="#当任务结果为失败时，通常会告知用户失败原因，甚至提供解决问题的操作。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/result/result-3.png"></div></div><hr><h5 id="当前操作结束后，若还存在一系列用户需关注的流程进度，通常会结合步骤条将流程展示于结果页。">当前操作结束后，若还存在一系列用户需关注的流程进度，通常会结合步骤条将流程展示于结果页。 <a class="header-anchor" href="#当前操作结束后，若还存在一系列用户需关注的流程进度，通常会结合步骤条将流程展示于结果页。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/result/result-4.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./empty">空状态</a></td><td style="text-align:left;">当页面或模块数据为空时使用。</td></tr></tbody></table>',16),tt=[Z],et=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760415890968"})],-1),nt=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function dt(e,d,n,o,m,p){const s=b("Stackblitz");return u(),h("td-doc-content",D,[t("td-doc-header",E,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,k),r(t("div",null,[t("div",R,[t("div",S,[(u(),h("svg",A,q)),c(" 该组件于 0.16.0 版本上线，请留意版本。 ")]),M,t("div",N,[t("td-doc-demo",{code:e.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",j,[a(s,{"demo-name":"theme","component-name":" README",code:e.DemoexamplethemeCode},null,8,["code"])])],8,z)]),$,t("div",V,[t("td-doc-demo",{code:e.DemoexampledescriptionCode,language:"markup","show-code":"",mode:"open","demo-name":"description","component-name":" README"},[t("div",T,[a(s,{"demo-name":"description","component-name":" README",code:e.DemoexampledescriptionCode},null,8,["code"])])],8,P)]),O,t("div",B,[t("td-doc-demo",{code:e.DemoexamplecustomCode,language:"markup","show-code":"",mode:"open","demo-name":"custom","component-name":" README"},[t("div",L,[a(s,{"demo-name":"custom","component-name":" README",code:e.DemoexamplecustomCode},null,8,["code"])])],8,I)]),H,U]),t("td-doc-phone",G,F,512),K],512),[[i,e.tab==="demo"]]),r(t("div",Q,X,512),[[i,e.tab==="api"]]),r(t("div",Y,tt,512),[[i,e.tab==="design"]]),et,nt],512)}const rt=g(w,[["render",dt]]);export{rt as default};
