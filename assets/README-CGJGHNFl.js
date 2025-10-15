import{_ as p,d as u,c as g,a as t,w as r,v as i,b as l,e as a,f as h,r as b,o as f}from"./sites-CaVUcqpO.js";import{P as _}from"./prism-bash-zcnM7wlG.js";const v=`<template>
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
`,w=`<template>
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
`,D=u({data(){return{DemoexamplethemeCode:v,DemoexampledescriptionCode:w,DemoexamplecustomCode:y}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:n,tdDocTabs:d,tdDocPhone:o}=this.$refs,c="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/result/result";n&&(n.docInfo={title:"Result 结果",desc:"反馈结果状态。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:m})=>this.tab=m),o&&(o.qrcodeUrl=c),_.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),x={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},E={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"result"},R=["tab"],k={name:"DEMO"},S=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TResult <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/result/result.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>基础结果</p>`,5),A={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},C=["code"],M={slot:"action"},N=t("p",null,"带描述的结果",-1),$={class:"tdesign-demo-wrapper tdesign-demo-item-- README-description tdesign-demo-item-- README"},j=["code"],P={slot:"action"},T=t("p",null,"自定义结果",-1),z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom tdesign-demo-item-- README"},I=["code"],O={slot:"action"},V=t("h2",{id:"常见问题"},[h("常见问题 "),t("a",{class:"header-anchor",href:"#常见问题"})],-1),q=t("details",null,[t("summary",null,[h(" 本地图片无法正确引用? "),t("span",{class:"icon"},"👇")]),t("p",{style:{"margin-top":"10px",color:"rgba(0, 0, 0, .6)"}}," 建议使用绝对路径，而不是相对路径。绝对路径以 app.json 所在位置为基准。 ")],-1),B={ref:"tdDocPhone"},L=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/result/result",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),H=[L],U=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"result"},null,-1),G={name:"API"},F=l('<h3 id="result-props">Result Props <a class="header-anchor" href="#result-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>description</td><td>String / Slot</td><td>-</td><td>描述文字。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>icon</td><td>String / Boolean / Object</td><td>true</td><td>图标名称。值为字符串表示图标名称，值为 <code>false</code> 表示不显示图标，值为 <code>Object</code> 类型，表示透传至 <code>icon</code>，不传表示使用主题图标</td><td>N</td></tr><tr><td>image</td><td>String / Slot</td><td>-</td><td>图片地址。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>theme</td><td>String</td><td>default</td><td>内置主题。可选项：default/success/warning/error</td><td>N</td></tr><tr><td>title</td><td>String / Slot</td><td>&#39;&#39;</td><td>标题。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr></tbody></table><h3 id="result-external-classes">Result External Classes <a class="header-anchor" href="#result-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-description</td><td>描述样式类</td></tr><tr><td>t-class-image</td><td>图片样式类</td></tr><tr><td>t-class-title</td><td>标题样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-result-description-color</td><td>@text-color-secondary</td><td>-</td></tr><tr><td>--td-result-description-font-size</td><td>@font-size-base</td><td>-</td></tr><tr><td>--td-result-description-line-height</td><td>44rpx</td><td>-</td></tr><tr><td>--td-result-description-margin-top</td><td>@spacer</td><td>-</td></tr><tr><td>--td-result-icon-default-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-result-icon-error-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-result-icon-success-color</td><td>@success-color</td><td>-</td></tr><tr><td>--td-result-icon-warning-color</td><td>@warning-color</td><td>-</td></tr><tr><td>--td-result-title-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-result-title-font-size</td><td>@font-size-xl</td><td>-</td></tr><tr><td>--td-result-title-line-height</td><td>56rpx</td><td>-</td></tr><tr><td>--td-result-title-margin-top</td><td>@spacer-1</td><td>-</td></tr></tbody></table>',7),J=[F],K={name:"DESIGN"},Q=l('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要向用户展示操作后的结果反馈时使用。</p><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="任务本身在弹窗中进行或仅需要较为轻量的结果反馈时，可使用弹窗承载结果反馈。">任务本身在弹窗中进行或仅需要较为轻量的结果反馈时，可使用弹窗承载结果反馈。 <a class="header-anchor" href="#任务本身在弹窗中进行或仅需要较为轻量的结果反馈时，可使用弹窗承载结果反馈。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/result/result-1.png"></div></div><hr><h5 id="当任务结束并给予反馈后，需要推荐其他内容、任务、商品等给用户时，通常使用页面承载结果和推荐。">当任务结束并给予反馈后，需要推荐其他内容、任务、商品等给用户时，通常使用页面承载结果和推荐。 <a class="header-anchor" href="#当任务结束并给予反馈后，需要推荐其他内容、任务、商品等给用户时，通常使用页面承载结果和推荐。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/result/result-2.png"></div></div><hr><h5 id="当任务结果为失败时，通常会告知用户失败原因，甚至提供解决问题的操作。">当任务结果为失败时，通常会告知用户失败原因，甚至提供解决问题的操作。 <a class="header-anchor" href="#当任务结果为失败时，通常会告知用户失败原因，甚至提供解决问题的操作。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/result/result-3.png"></div></div><hr><h5 id="当前操作结束后，若还存在一系列用户需关注的流程进度，通常会结合步骤条将流程展示于结果页。">当前操作结束后，若还存在一系列用户需关注的流程进度，通常会结合步骤条将流程展示于结果页。 <a class="header-anchor" href="#当前操作结束后，若还存在一系列用户需关注的流程进度，通常会结合步骤条将流程展示于结果页。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/result/result-4.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./empty">空状态</a></td><td style="text-align:left;">当页面或模块数据为空时使用。</td></tr></tbody></table>',16),W=[Q],X=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760510577462"})],-1),Y=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function Z(e,n,d,o,c,m){const s=b("Stackblitz");return f(),g("td-doc-content",x,[t("td-doc-header",E,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,R),r(t("div",null,[t("div",k,[S,t("div",A,[t("td-doc-demo",{code:e.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",M,[a(s,{"demo-name":"theme","component-name":" README",code:e.DemoexamplethemeCode},null,8,["code"])])],8,C)]),N,t("div",$,[t("td-doc-demo",{code:e.DemoexampledescriptionCode,language:"markup","show-code":"",mode:"open","demo-name":"description","component-name":" README"},[t("div",P,[a(s,{"demo-name":"description","component-name":" README",code:e.DemoexampledescriptionCode},null,8,["code"])])],8,j)]),T,t("div",z,[t("td-doc-demo",{code:e.DemoexamplecustomCode,language:"markup","show-code":"",mode:"open","demo-name":"custom","component-name":" README"},[t("div",O,[a(s,{"demo-name":"custom","component-name":" README",code:e.DemoexamplecustomCode},null,8,["code"])])],8,I)]),V,q]),t("td-doc-phone",B,H,512),U],512),[[i,e.tab==="demo"]]),r(t("div",G,J,512),[[i,e.tab==="api"]]),r(t("div",K,W,512),[[i,e.tab==="design"]]),X,Y],512)}const dt=p(D,[["render",Z]]);export{dt as default};
