import{_ as p,d as g,c as u,a as t,w as s,v as c,b as i,e as n,f as m,r as b,o as f}from"./sites-CjFR1T9E.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view>
    <view class="example-search">
      <t-search placeholder="搜索预设文案" />
    </view>

    <view class="example-search">
      <t-search
        placeholder="输入tdesign，有预览结果"
        :result-list="resultList"
        @change="onChangeValue"
      />
    </view>
  </view>
</template>

<script>
import tSearch from 'tdesign-uniapp/search/search';
export default {
  components: {
    tSearch,
  },
  data() {
    return {
      value: '',
      resultList: [],
    };
  },
  created() {},
  methods: {
    onChangeValue(e) {
      const { value } = e;
      const list = ['tdesign-vue', 'tdesign-react', 'tdesign-miniprogram', 'tdesign-angular', 'tdesign-mobile-vue', 'tdesign-mobile-react'];
      this.resultList = value ? list.filter(v => v.includes(value)) : [];
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,x=`<template>
  <view class="example-search">
    <t-search
      :value="value"
      center
      placeholder="搜索预设文案"
      :action="actionText"
      @blur="blurHandle"
      @focus="focusHandle"
      @action-click="actionHandle"
      @change="changeHandle"
    />
  </view>
</template>

<script>
import tSearch from 'tdesign-uniapp/search/search';
export default {
  components: {
    tSearch,
  },
  data() {
    return {
      value: '',
      actionText: '',
    };
  },
  created() {},
  methods: {
    changeHandle(e) {
      const { value } = e;
      this.value = value;
    },
    focusHandle() {
      this.actionText = '取消';
    },
    blurHandle() {
      this.actionText = '';
    },
    actionHandle() {
      this.actionText = '';
      this.value = '';
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <view class="example-search">
      <t-search placeholder="搜索预设文案" />
    </view>

    <view class="example-search">
      <t-search
        placeholder="搜索预设文案"
        shape="round"
      />
    </view>
  </view>
</template>

<script>
import tSearch from 'tdesign-uniapp/search/search';
export default {
  components: {
    tSearch,
  },
  data() {
    return {
      value: '',
    };
  },
  created() {},
  methods: {
    onChange(e) {
      console.log(e.value);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,S=`<template>
  <view class="example-search">
    <t-search
      v-model="value"
      center
      placeholder="搜索预设文案"
      @change="onChange"
    />
  </view>
</template>

<script>
import tSearch from 'tdesign-uniapp/search/search';
export default {
  components: {
    tSearch,
  },
  data() {
    return {
      value: '',
    };
  },
  created() {},
  methods: {
    onChange(detail) {
      console.log(\`modelValue: \${detail.value}\`);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,D=g({data(){return{DemoexamplebaseCode:_,DemoexampleactionCode:x,DemoexampleshapeCode:y,DemoexampleotherCode:S}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:a,tdDocTabs:d,tdDocPhone:r}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/search/search";a&&(a.docInfo={title:"Search 搜索框",desc:"用于用户输入搜索信息，并进行页面内容搜索。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:h})=>this.tab=h),r&&(r.qrcodeUrl=l),v.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),E={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},N={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"search"},w=["tab"],k={name:"DEMO"},C=i(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TSearch <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/search/search.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="_01-组件类型">01 组件类型 <a class="header-anchor" href="#_01-组件类型"></a></h3><p>基础搜索框</p>`,5),A={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},M=["code"],R={slot:"action"},T=t("p",null,"获取焦点后显示取消按钮",-1),B={class:"tdesign-demo-wrapper tdesign-demo-item-- README-action tdesign-demo-item-- README"},H=["code"],$={slot:"action"},q=t("h3",{id:"_02-组件样式"},[m("02 组件样式 "),t("a",{class:"header-anchor",href:"#_02-组件样式"})],-1),V=t("p",null,"搜索框形状",-1),P={class:"tdesign-demo-wrapper tdesign-demo-item-- README-shape tdesign-demo-item-- README"},z=["code"],j={slot:"action"},I=t("h3",{id:"_03-组件状态"},[m("03 组件状态 "),t("a",{class:"header-anchor",href:"#_03-组件状态"})],-1),O=t("p",null,"默认状态其他对齐方式",-1),L={class:"tdesign-demo-wrapper tdesign-demo-item-- README-other tdesign-demo-item-- README"},U=["code"],Y={slot:"action"},G={ref:"tdDocPhone"},F=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/search/search",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),J=[F],K=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"search"},null,-1),Q={name:"API"},W=i('<h3 id="search-props">Search Props <a class="header-anchor" href="#search-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>action</td><td>String / Slot</td><td>&#39;&#39;</td><td>自定义右侧操作按钮文字。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>adjust-position</td><td>Boolean</td><td>true</td><td>键盘弹起时，是否自动上推页面</td><td>N</td></tr><tr><td>always-embed</td><td>Boolean</td><td>false</td><td>强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)</td><td>N</td></tr><tr><td>center</td><td>Boolean</td><td>false</td><td>是否居中</td><td>N</td></tr><tr><td>clear-trigger</td><td>String</td><td>always</td><td>清空图标触发方式，仅在输入框有值时有效。可选项：always / focus</td><td>N</td></tr><tr><td>clearable</td><td>Boolean</td><td>true</td><td>是否启用清除控件</td><td>N</td></tr><tr><td>confirm-hold</td><td>Boolean</td><td>false</td><td>点击键盘右下角按钮时是否保持键盘不收起</td><td>N</td></tr><tr><td>confirm-type</td><td>String</td><td>search</td><td>设置键盘右下角按钮的文字，仅在type=&#39;text&#39;时生效。<br>具体释义：<br><code>send</code> 右下角按钮为“发送”；<br><code>search</code> 右下角按钮为“搜索”；<br><code>next</code> 右下角按钮为“下一个”；<br><code>go</code> 右下角按钮为“前往”；<br><code>done</code> 右下角按钮为“完成”。<br><a href="https://developers.weixin.qq.com/miniprogram/dev/component/input.html" target="_blank" rel="noopener noreferrer">小程序官方文档</a>。可选项：send/search/next/go/done</td><td>N</td></tr><tr><td>cursor</td><td>Number</td><td>-1</td><td>必需。指定 focus 时的光标位置</td><td>Y</td></tr><tr><td>cursor-spacing</td><td>Number</td><td>0</td><td>搜索框聚焦时底部与键盘的距离</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>false</td><td>是否禁用</td><td>N</td></tr><tr><td>focus</td><td>Boolean</td><td>false</td><td>是否聚焦</td><td>N</td></tr><tr><td>hold-keyboard</td><td>Boolean</td><td>false</td><td>focus时，点击页面的时候不收起键盘</td><td>N</td></tr><tr><td>label</td><td>String</td><td>&#39;&#39;</td><td>已废弃。左侧文本</td><td>N</td></tr><tr><td>left-icon</td><td>String / Slot</td><td>&#39;search&#39;</td><td>左侧图标。如果需要使用 <code>Slot</code> 进行自定义，必须将该值设置为假值。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>maxcharacter</td><td>Number</td><td>-</td><td>用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。<code>maxcharacter</code> 和 <code>maxlength</code> 二选一使用</td><td>N</td></tr><tr><td>maxlength</td><td>Number</td><td>-1</td><td>用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。<code>maxcharacter</code> 和 <code>maxlength</code> 二选一使用</td><td>N</td></tr><tr><td>placeholder</td><td>String</td><td>&#39;&#39;</td><td>占位符</td><td>N</td></tr><tr><td>placeholder-class</td><td>String</td><td>input-placeholder</td><td>指定 placeholder 的样式类</td><td>N</td></tr><tr><td>placeholder-style</td><td>String</td><td>-</td><td>必需。指定 placeholder 的样式</td><td>Y</td></tr><tr><td>readonly</td><td>Boolean</td><td>undefined</td><td>只读状态</td><td>N</td></tr><tr><td>result-list</td><td>Array</td><td>[]</td><td>预览结果列表。TS 类型：<code>Array&lt;string&gt;</code></td><td>N</td></tr><tr><td>right-icon</td><td>String / Slot</td><td>&#39;close-circle-filled&#39;</td><td>已废弃。右侧图标。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>selection-end</td><td>Number</td><td>-1</td><td>光标结束位置，自动聚集时有效，需与 selection-start 搭配使用</td><td>N</td></tr><tr><td>selection-start</td><td>Number</td><td>-1</td><td>光标起始位置，自动聚集时有效，需与 selection-end 搭配使用</td><td>N</td></tr><tr><td>shape</td><td>String</td><td>&#39;square&#39;</td><td>搜索框形状。可选项：square/round</td><td>N</td></tr><tr><td>type</td><td>String</td><td>&#39;text&#39;</td><td>拉起键盘的类型。可选项：text/number/idcard/digit/nickname</td><td>N</td></tr><tr><td>value</td><td>String</td><td>&#39;&#39;</td><td>值</td><td>N</td></tr></tbody></table><h3 id="search-events">Search Events <a class="header-anchor" href="#search-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>action-click</td><td><code>({})</code></td><td>点击右侧操作按钮文字时触发</td></tr><tr><td>blur</td><td><code>({ value: string })</code></td><td>失去焦点时触发</td></tr><tr><td>change</td><td><code>({ value: string })</code></td><td>值发生变化时触发</td></tr><tr><td>clear</td><td><code>({ value: string })</code></td><td>点击清除时触发</td></tr><tr><td>focus</td><td><code>({ value: string })</code></td><td>聚焦时触发</td></tr><tr><td>submit</td><td><code>({ value: string })</code></td><td>提交时触发</td></tr></tbody></table><h3 id="search-external-classes">Search External Classes <a class="header-anchor" href="#search-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-action</td><td>操作按钮样式类</td></tr><tr><td>t-class-clear</td><td>右侧图标样式类</td></tr><tr><td>t-class-input</td><td>输入框样式类</td></tr><tr><td>t-class-input-container</td><td>输入框容器样式类</td></tr><tr><td>t-class-left</td><td>左侧图标样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-search-action-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-search-bg-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-search-clear-icon-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-search-clear-icon-font-size</td><td>48rpx</td><td>-</td></tr><tr><td>--td-search-disabled-text-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-search-font-size</td><td>@font-size-m</td><td>-</td></tr><tr><td>--td-search-height</td><td>80rpx</td><td>-</td></tr><tr><td>--td-search-icon-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-search-icon-font-size</td><td>48rpx</td><td>-</td></tr><tr><td>--td-search-label-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-search-padding</td><td>16rpx 24rpx</td><td>-</td></tr><tr><td>--td-search-placeholder-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-search-result-high-light-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-search-square-radius</td><td>@radius-default</td><td>-</td></tr><tr><td>--td-search-text-color</td><td>@text-color-primary</td><td>-</td></tr></tbody></table>',9),X=[W],Z={name:"DESIGN"},tt=i('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要从海量信息中准确提取准确的内容时使用。</p><h3 id="与页面布局相关">与页面布局相关 <a class="header-anchor" href="#与页面布局相关"></a></h3><h5 id="位于页面或内容模块的最上方，通过搜索框、搜索icon等方式承载和触发功能。">位于页面或内容模块的最上方，通过搜索框、搜索icon等方式承载和触发功能。 <a class="header-anchor" href="#位于页面或内容模块的最上方，通过搜索框、搜索icon等方式承载和触发功能。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/search/search-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/search/search-2.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="在可搜索内容类型较为单一的场景下，可直接在原页面激活搜索态进行搜索，并通过高亮命中字符的方式展示搜索结果，页面内容组织结构保持不变。">在可搜索内容类型较为单一的场景下，可直接在原页面激活搜索态进行搜索，并通过高亮命中字符的方式展示搜索结果，页面内容组织结构保持不变。 <a class="header-anchor" href="#在可搜索内容类型较为单一的场景下，可直接在原页面激活搜索态进行搜索，并通过高亮命中字符的方式展示搜索结果，页面内容组织结构保持不变。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/search/search-3.png"></div><hr><h5 id="在可搜索内容类型较丰富的场景下，通过模态承载搜索态，并在新页面中按分类呈现搜索结果。">在可搜索内容类型较丰富的场景下，通过模态承载搜索态，并在新页面中按分类呈现搜索结果。 <a class="header-anchor" href="#在可搜索内容类型较丰富的场景下，通过模态承载搜索态，并在新页面中按分类呈现搜索结果。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/search/search-4.png"></div><hr><h5 id="在用户触发搜索后，对用户即将搜索的内容进行预判和推荐，并需要满足营销的诉求。">在用户触发搜索后，对用户即将搜索的内容进行预判和推荐，并需要满足营销的诉求。 <a class="header-anchor" href="#在用户触发搜索后，对用户即将搜索的内容进行预判和推荐，并需要满足营销的诉求。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/search/search-5.png"></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./Input">输入框</a></td><td style="text-align:left;">需要进行文字输入，且需填写的字数较少时使用。</td></tr></tbody></table>',16),et=[tt],dt=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760427541118"})],-1),ot=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function nt(e,a,d,r,l,h){const o=b("Stackblitz");return f(),u("td-doc-content",E,[t("td-doc-header",N,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,w),s(t("div",null,[t("div",k,[C,t("div",A,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",R,[n(o,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,M)]),T,t("div",B,[t("td-doc-demo",{code:e.DemoexampleactionCode,language:"markup","show-code":"",mode:"open","demo-name":"action","component-name":" README"},[t("div",$,[n(o,{"demo-name":"action","component-name":" README",code:e.DemoexampleactionCode},null,8,["code"])])],8,H)]),q,V,t("div",P,[t("td-doc-demo",{code:e.DemoexampleshapeCode,language:"markup","show-code":"",mode:"open","demo-name":"shape","component-name":" README"},[t("div",j,[n(o,{"demo-name":"shape","component-name":" README",code:e.DemoexampleshapeCode},null,8,["code"])])],8,z)]),I,O,t("div",L,[t("td-doc-demo",{code:e.DemoexampleotherCode,language:"markup","show-code":"",mode:"open","demo-name":"other","component-name":" README"},[t("div",Y,[n(o,{"demo-name":"other","component-name":" README",code:e.DemoexampleotherCode},null,8,["code"])])],8,U)])]),t("td-doc-phone",G,J,512),K],512),[[c,e.tab==="demo"]]),s(t("div",Q,X,512),[[c,e.tab==="api"]]),s(t("div",Z,et,512),[[c,e.tab==="design"]]),dt,ot],512)}const st=p(D,[["render",nt]]);export{st as default};
