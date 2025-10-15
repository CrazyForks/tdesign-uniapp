import{_ as m,d as h,c as u,a as t,w as s,v as a,b as p,e as i,r as f,o as b}from"./sites-DDA63Ty2.js";import{P as g}from"./prism-bash-zcnM7wlG.js";const _=`<template>
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
import tCol from 'tdesign-uniapp/col/col.vue';
import tRow from 'tdesign-uniapp/row/row.vue';
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
.dark {
    background-color: #0052d9;
}

.light {
    background-color: #366ef4;
}

.dark,
.light {
    background-clip: content-box;
    color: #fff;
    font-size: 28rpx;
    line-height: 96rpx;
    margin-bottom: 32rpx;
    text-align: center;
}
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
import tCol from 'tdesign-uniapp/col/col.vue';
import tRow from 'tdesign-uniapp/row/row.vue';
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
.dark {
    background-color: #0052d9;
}

.light {
    background-color: #366ef4;
}

.dark,
.light {
    color: #fff;
    font-size: 28rpx;
    line-height: 96rpx;
    margin-bottom: 32rpx;
    text-align: center;
}
</style>
`,k=h({data(){return{DemoexamplebaseCode:_,DemoexampleoffsetCode:w}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(o){this.$route.query.tab!==o&&this.$router.push({query:{tab:o}})}}},mounted(){const{tdDocContent:o,tdDocHeader:e,tdDocTabs:n,tdDocPhone:d}=this.$refs,r="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/col/col";e&&(e.docInfo={title:"Layout 布局",desc:"以规则的网格阵列来指导和规范页面中的版面布局以及信息分布，提高界面内布局的一致性，节约成本。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:c})=>this.tab=c),d&&(d.qrcodeUrl=r),g.highlightAll(),this.$emit("loaded",()=>{o.pageStatus="show"})}}),v={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},D={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"base","component-name":"col"},y=["tab"],E={name:"DEMO"},x=p(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TRow <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/row/row.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TCol <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/col/col.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>基础</p>`,5),C={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},R=["code"],N={slot:"action"},A=t("p",null,"增加间距",-1),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-offset tdesign-demo-item-- README"},S=["code"],$={slot:"action"},P={ref:"tdDocPhone"},j=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/col/col",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),O=[j],q={name:"API"},z=p('<h3 id="col-props">Col Props <a class="header-anchor" href="#col-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>offset</td><td>String / Number</td><td>-</td><td>列的偏移量（默认单位px）</td><td>N</td></tr><tr><td>span</td><td>String / Number</td><td>-</td><td>列的宽度（默认单位px）</td><td>N</td></tr></tbody></table><h3 id="row-props">Row Props <a class="header-anchor" href="#row-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>gutter</td><td>String / Number</td><td>-</td><td>列之间的间距（默认单位px）</td><td>N</td></tr></tbody></table>',4),I=[z],T={name:"DESIGN"},B=t("td-doc-empty",null,null,-1),V=[B],H=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760547040731"})],-1),U=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function G(o,e,n,d,r,c){const l=f("Stackblitz");return b(),u("td-doc-content",v,[t("td-doc-header",D,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:o.tab},null,8,y),s(t("div",null,[t("div",E,[x,t("div",C,[t("td-doc-demo",{code:o.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",N,[i(l,{"demo-name":"base","component-name":" README",code:o.DemoexamplebaseCode},null,8,["code"])])],8,R)]),A,t("div",M,[t("td-doc-demo",{code:o.DemoexampleoffsetCode,language:"markup","show-code":"",mode:"open","demo-name":"offset","component-name":" README"},[t("div",$,[i(l,{"demo-name":"offset","component-name":" README",code:o.DemoexampleoffsetCode},null,8,["code"])])],8,S)])]),t("td-doc-phone",P,O,512)],512),[[a,o.tab==="demo"]]),s(t("div",q,I,512),[[a,o.tab==="api"]]),s(t("div",T,V,512),[[a,o.tab==="design"]]),H,U],512)}const J=m(k,[["render",G]]);export{J as default};
