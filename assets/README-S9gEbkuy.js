import{_ as m,d as h,c as u,a as t,w as d,v as a,b as i,e as p,r as f,o as b}from"./sites-vH1cnupm.js";import{P as g}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view>
    <t-row>
      <t-col
        span="8"
        t-class="dark"
      >
        col-8
      </t-col>
      <t-col
        span="8"
        t-class="light"
      >
        col-8
      </t-col>
      <t-col
        span="8"
        t-class="dark"
      >
        col-8
      </t-col>
    </t-row>

    <t-row>
      <t-col
        span="4"
        t-class="dark"
      >
        col-4
      </t-col>
      <t-col
        span="16"
        offset="4"
        t-class="light"
      >
        col-16 col-offset-4
      </t-col>
    </t-row>

    <t-row>
      <t-col
        offset="12"
        span="12"
        t-class="dark"
      >
        col-12 col-offset-12
      </t-col>
    </t-row>
  </view>
</template>

<script>
import tCol from 'tdesign-uniapp/col/col';
import tRow from 'tdesign-uniapp/row/row';
export default {
  components: {
    tCol,
    tRow,
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
`,w=`<template>
  <view>
    <t-row gutter="16">
      <t-col span="8">
        <view class="dark">
          col-8
        </view>
      </t-col>
      <t-col span="8">
        <view class="dark">
          col-8
        </view>
      </t-col>
      <t-col span="8">
        <view class="dark">
          col-8
        </view>
      </t-col>
    </t-row>
  </view>
</template>

<script>
import tCol from 'tdesign-uniapp/col/col';
import tRow from 'tdesign-uniapp/row/row';
export default {
  components: {
    tCol,
    tRow,
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
`,k=h({data(){return{DemoexamplebaseCode:_,DemoexampleoffsetCode:w}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(o){this.$route.query.tab!==o&&this.$router.push({query:{tab:o}})}}},mounted(){const{tdDocContent:o,tdDocHeader:n,tdDocTabs:e,tdDocPhone:s}=this.$refs,r="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/col/col";n&&(n.docInfo={title:"Layout 布局",desc:"以规则的网格阵列来指导和规范页面中的版面布局以及信息分布，提高界面内布局的一致性，节约成本。"}),e&&(e.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],e.onchange=({detail:c})=>this.tab=c),s&&(s.qrcodeUrl=r),g.highlightAll(),this.$emit("loaded",()=>{o.pageStatus="show"})}}),v={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},D={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"base","component-name":"col"},y=["tab"],E={name:"DEMO"},q=i(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-row&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/row/row&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;t-col&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/col/col&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/WwISnbmq7RSC" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>基础</p>`,8),x={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},C=["code"],R={slot:"action"},N=t("p",null,"增加间距",-1),S={class:"tdesign-demo-wrapper tdesign-demo-item-- README-offset tdesign-demo-item-- README"},A=["code"],M={slot:"action"},$={ref:"tdDocPhone"},j=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/col/col",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),P=[j],I=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"col"},null,-1),O={name:"API"},z=i('<h3 id="col-props">Col Props <a class="header-anchor" href="#col-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>offset</td><td>String / Number</td><td>-</td><td>列的偏移量（默认单位px）</td><td>N</td></tr><tr><td>span</td><td>String / Number</td><td>-</td><td>列的宽度（默认单位px）</td><td>N</td></tr></tbody></table><h3 id="row-props">Row Props <a class="header-anchor" href="#row-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>gutter</td><td>String / Number</td><td>-</td><td>列之间的间距（默认单位px）</td><td>N</td></tr></tbody></table>',4),B=[z],T={name:"DESIGN"},V=t("td-doc-empty",null,null,-1),H=[V],U=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416475778"})],-1),G=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function J(o,n,e,s,r,c){const l=f("Stackblitz");return b(),u("td-doc-content",v,[t("td-doc-header",D,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:o.tab},null,8,y),d(t("div",null,[t("div",E,[q,t("div",x,[t("td-doc-demo",{code:o.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",R,[p(l,{"demo-name":"base","component-name":" README",code:o.DemoexamplebaseCode},null,8,["code"])])],8,C)]),N,t("div",S,[t("td-doc-demo",{code:o.DemoexampleoffsetCode,language:"markup","show-code":"",mode:"open","demo-name":"offset","component-name":" README"},[t("div",M,[p(l,{"demo-name":"offset","component-name":" README",code:o.DemoexampleoffsetCode},null,8,["code"])])],8,A)])]),t("td-doc-phone",$,P,512),I],512),[[a,o.tab==="demo"]]),d(t("div",O,B,512),[[a,o.tab==="api"]]),d(t("div",T,H,512),[[a,o.tab==="design"]]),U,G],512)}const F=m(k,[["render",J]]);export{F as default};
