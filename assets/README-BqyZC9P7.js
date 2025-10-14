import{_ as h,d as g,c as u,a as t,w as i,v as l,b as c,e as a,f as o,r as x,o as b}from"./sites-CV9d1pkc.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view>
    <t-textarea
      t-class="external-class"
      placeholder="请输入文字"
      :disable-default-padding="true"
    />
  </view>
</template>

<script>
import tTextarea from 'tdesign-uniapp/textarea/textarea';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tTextarea,
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
`,v=`<template>
  <view>
    <t-textarea
      t-class="external-class"
      label="标签文字"
      placeholder="请输入文字"
      :disable-default-padding="true"
    />
  </view>
</template>

<script>
import tTextarea from 'tdesign-uniapp/textarea/textarea';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tTextarea,
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
    <t-textarea
      label="标签文字"
      placeholder="请输入文字"
      :disable-default-padding="true"
      :autosize="autosize"
      @line-change="onLineChange"
    />
  </view>
</template>

<script>
import tTextarea from 'tdesign-uniapp/textarea/textarea';
export default {
  components: {
    tTextarea,
  },
  data() {
    return {
      autosize: {
        maxHeight: 120,
        minHeight: 20,
      },
    };
  },
  created() {},
  methods: {
    onLineChange(e) {
      console.log('lineCount: ', e.detail);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <t-textarea
      t-class="external-class"
      label="标签文字"
      placeholder="设置最大字符个数"
      maxlength="200"
      :disable-default-padding="true"
      indicator
    />
  </view>
</template>

<script>
import tTextarea from 'tdesign-uniapp/textarea/textarea';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tTextarea,
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
`,D=`<template>
  <view>
    <t-textarea
      t-class="external-class"
      label="标签文字"
      placeholder="设置最大字符个数，一个汉字表示两个字符"
      maxcharacter="200"
      :disable-default-padding="true"
      indicator
    />
  </view>
</template>

<script>
import tTextarea from 'tdesign-uniapp/textarea/textarea';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tTextarea,
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
`,N=`<template>
  <view>
    <t-textarea
      t-class="external-class"
      label="标签文字"
      placeholder="请输入文字"
      value="不可编辑文字"
      :disable-default-padding="true"
      disabled
    />
  </view>
</template>

<script>
import tTextarea from 'tdesign-uniapp/textarea/textarea';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tTextarea,
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
`,w=`<template>
  <view class="textarea-example">
    <text class="textarea-example__label">
      标签文字
    </text>
    <t-textarea
      t-class="external-class"
      placeholder="请输入文字"
      bordered
      maxlength="100"
      :disable-default-padding="true"
      indicator
      :custom-style="style"
    />
  </view>
</template>

<script>
import tTextarea from 'tdesign-uniapp/textarea/textarea';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tTextarea,
  },
  data() {
    return {
      style: 'height: 248rpx',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,T=g({data(){return{DemoexamplebaseCode:_,DemoexamplelabelCode:v,DemoexampleautosizeCode:E,DemoexamplemaxlengthCode:y,DemoexamplemaxcharacterCode:D,DemoexampledisabledCode:N,DemoexamplecustomCode:w}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:r,tdDocTabs:n,tdDocPhone:s}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/textarea/textarea";r&&(r.docInfo={title:"Textarea 多行文本框",desc:"用于多行文本信息输入。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:p})=>this.tab=p),s&&(s.qrcodeUrl=m),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),A={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},C={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"textarea"},M=["tab"],R={name:"DEMO"},k=c(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TTextarea <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/textarea/textarea.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>基础多行文本框</p>`,5),S={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},B=["code"],z={slot:"action"},V=t("p",null,"带标题多行文本框",-1),I={class:"tdesign-demo-wrapper tdesign-demo-item-- README-label tdesign-demo-item-- README"},$=["code"],H={slot:"action"},P=t("p",null,"自动增高多行文本框",-1),j={class:"tdesign-demo-wrapper tdesign-demo-item-- README-autosize tdesign-demo-item-- README"},O=["code"],q={slot:"action"},L=t("p",null,"设置最大字符个数",-1),U={class:"tdesign-demo-wrapper tdesign-demo-item-- README-maxlength tdesign-demo-item-- README"},G=["code"],F={slot:"action"},J=t("p",null,"设置最大字符个数，一个汉字表示两个字符",-1),K={class:"tdesign-demo-wrapper tdesign-demo-item-- README-maxcharacter tdesign-demo-item-- README"},Q=["code"],W={slot:"action"},X=t("h3",{id:"组件状态"},[o("组件状态 "),t("a",{class:"header-anchor",href:"#组件状态"})],-1),Y=t("p",null,"禁用多行文本框",-1),Z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-disabled tdesign-demo-item-- README"},tt=["code"],et={slot:"action"},dt=t("h3",{id:"自定义组件样式"},[o("自定义组件样式 "),t("a",{class:"header-anchor",href:"#自定义组件样式"})],-1),at=t("p",null,"标签外置输入框",-1),ot={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom tdesign-demo-item-- README"},nt=["code"],rt={slot:"action"},st=t("h2",{id:"提示"},[o("提示 "),t("a",{class:"header-anchor",href:"#提示"})],-1),it=t("ul",null,[t("li",null,[o("如果需要在页面中调整 "),t("code",null,"textarea"),o(" 中 "),t("code",null,"placeholder"),o(" 样式，请使用名称为"),t("code",null,"t-textarea__placeholder"),o("的Class选择器，直接覆盖组件内部样式（注意权重）。")])],-1),lt={ref:"tdDocPhone"},ct=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/textarea/textarea",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),mt=[ct],pt=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"textarea"},null,-1),ht={name:"API"},gt=c('<h3 id="textarea-props">Textarea Props <a class="header-anchor" href="#textarea-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>adjust-position</td><td>Boolean</td><td>true</td><td>键盘弹起时，是否自动上推页面</td><td>N</td></tr><tr><td>allow-input-over-max</td><td>Boolean</td><td>false</td><td><code>1.8.6</code>。超出 <code>maxlength</code> 或 <code>maxcharacter</code> 之后是否还允许输入</td><td>N</td></tr><tr><td>autofocus</td><td>Boolean</td><td>false</td><td>自动聚焦，拉起键盘</td><td>N</td></tr><tr><td>autosize</td><td>Boolean / Object</td><td>false</td><td>是否自动增高，值为 true 时，style.height 不生效。支持传入对象，如 { maxHeight: 120, minHeight: 20 }。TS 类型：<code>boolean \\| { maxHeight?: number, minHeight?: number }</code></td><td>N</td></tr><tr><td>bordered</td><td>Boolean</td><td>false</td><td>是否显示外边框</td><td>N</td></tr><tr><td>confirm-hold</td><td>Boolean</td><td>false</td><td>点击键盘右下角按钮时是否保持键盘不收起点</td><td>N</td></tr><tr><td>confirm-type</td><td>String</td><td>return</td><td>设置键盘右下角按钮的文字，仅在 type=&#39;text&#39;时生效。可选项：return/send/search/next/go/done。TS 类型：<code>&#39;return&#39; \\| &#39;send&#39; \\| &#39;search&#39; \\| &#39;next&#39; \\| &#39;go&#39; \\| &#39;done&#39;</code></td><td>N</td></tr><tr><td>cursor</td><td>Number</td><td>-1</td><td>指定 focus 时的光标位置</td><td>N</td></tr><tr><td>cursor-color</td><td>String</td><td>#0052d9</td><td>【试验性】光标颜色，仅在 Skyline 下有效</td><td>N</td></tr><tr><td>cursor-spacing</td><td>Number</td><td>0</td><td>指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离</td><td>N</td></tr><tr><td>disable-default-padding</td><td>Boolean</td><td>false</td><td>是否去掉 iOS 下的默认内边距</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>undefined</td><td>是否禁用文本框</td><td>N</td></tr><tr><td>fixed</td><td>Boolean</td><td>false</td><td>如果 textarea 是在一个 <code>position:fixed</code> 的区域，需要显式指定属性 fixed 为 true</td><td>N</td></tr><tr><td>focus</td><td>Boolean</td><td>false</td><td>自动聚焦</td><td>N</td></tr><tr><td>hold-keyboard</td><td>Boolean</td><td>false</td><td>focus时，点击页面的时候不收起键盘</td><td>N</td></tr><tr><td>indicator</td><td>Boolean</td><td>false</td><td>显示文本计数器，如 0/140。当 <code>maxlength &lt; 0 &amp;&amp; maxcharacter &lt; 0</code> 成立时， indicator无效</td><td>N</td></tr><tr><td>label</td><td>String / Slot</td><td>-</td><td>左侧文本。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>maxcharacter</td><td>Number</td><td>-</td><td>用户最多可以输入的字符个数，一个中文汉字表示两个字符长度</td><td>N</td></tr><tr><td>maxlength</td><td>Number</td><td>-1</td><td>用户最多可以输入的字符个数，值为 -1 的时候不限制最大长度</td><td>N</td></tr><tr><td>placeholder</td><td>String</td><td>undefined</td><td>占位符</td><td>N</td></tr><tr><td>placeholder-class</td><td>String</td><td>textarea-placeholder</td><td>指定 placeholder 的样式类，目前仅支持color,font-size和font-weight</td><td>N</td></tr><tr><td>placeholder-style</td><td>String</td><td>-</td><td>指定 placeholder 的样式，目前仅支持 color ,font-size和font-weight</td><td>N</td></tr><tr><td>readonly</td><td>Boolean</td><td>undefined</td><td><code>1.8.6</code>。只读状态</td><td>N</td></tr><tr><td>selection-end</td><td>Number</td><td>-1</td><td>光标结束位置，自动聚集时有效，需与 selection-start 搭配使用</td><td>N</td></tr><tr><td>selection-start</td><td>Number</td><td>-1</td><td>光标起始位置，自动聚集时有效，需与 selection-end 搭配使用</td><td>N</td></tr><tr><td>show-confirm-bar</td><td>Boolean</td><td>true</td><td>是否显示键盘上方带有”完成“按钮那一栏</td><td>N</td></tr><tr><td>value</td><td>String / Number</td><td>-</td><td>文本框值。TS 类型：<code>TextareaValue</code> <code>type TextareaValue = string \\| number</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/textarea/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-value</td><td>String / Number</td><td>undefined</td><td>文本框值。非受控属性。TS 类型：<code>TextareaValue</code> <code>type TextareaValue = string \\| number</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/textarea/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="textarea-events">Textarea Events <a class="header-anchor" href="#textarea-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>blur</td><td><code>(value: TextareaValue, cursor: number)</code></td><td>失去焦点时触发</td></tr><tr><td>change</td><td><code>(value: TextareaValue, cursor: number)</code></td><td>输入内容变化时触发</td></tr><tr><td>enter</td><td><code>(value: TextareaValue)</code></td><td>点击完成时触发</td></tr><tr><td>focus</td><td><code>(value: TextareaValue)</code></td><td>获得焦点时触发</td></tr><tr><td>keyboardheightchange</td><td><code>(height: number, duration: number)</code></td><td>键盘高度发生变化的时候触发此事件</td></tr><tr><td>line-change</td><td><code>(value: TextareaValue)</code></td><td>行高发生变化时触发</td></tr></tbody></table><h3 id="textarea-external-classes">Textarea External Classes <a class="header-anchor" href="#textarea-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-indicator</td><td>计数器样式类</td></tr><tr><td>t-class-label</td><td>左侧文本样式类</td></tr><tr><td>t-class-textarea</td><td>多行文本框样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-textarea-background-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-textarea-border-color</td><td>@component-border</td><td>-</td></tr><tr><td>--td-textarea-border-radius</td><td>@radius-default</td><td>-</td></tr><tr><td>--td-textarea-disabled-text-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-textarea-indicator-text-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-textarea-label-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-textarea-padding</td><td>32rpx</td><td>-</td></tr><tr><td>--td-textarea-placeholder-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-textarea-text-color</td><td>@text-color-primary</td><td>-</td></tr></tbody></table>',9),ut=[gt],xt={name:"DESIGN"},bt=c('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>需要进行文字输入，且需填写的字数较多时使用。</p><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="常见于表单、内容发布的场景中，用于输入较长的文本内容。">常见于表单、内容发布的场景中，用于输入较长的文本内容。 <a class="header-anchor" href="#常见于表单、内容发布的场景中，用于输入较长的文本内容。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/textarea/textarea-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/textarea/textarea-2.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="尽量避免输入过于复杂的文本内容，考虑将内容拆分，让用户分步输入。">尽量避免输入过于复杂的文本内容，考虑将内容拆分，让用户分步输入。 <a class="header-anchor" href="#尽量避免输入过于复杂的文本内容，考虑将内容拆分，让用户分步输入。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/textarea/textarea-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/textarea/textarea-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div></div><hr><h5 id="建议根据待输入的内容决定多行文本框的高度。">建议根据待输入的内容决定多行文本框的高度。 <a class="header-anchor" href="#建议根据待输入的内容决定多行文本框的高度。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/textarea/textarea-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/textarea/textarea-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./input">输入框</a></td><td style="text-align:left;">需要进行文字输入，且需填写的字数较少时使用。</td></tr></tbody></table>',13),ft=[bt],_t=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760435391764"})],-1),vt=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function Et(e,r,n,s,m,p){const d=x("Stackblitz");return b(),u("td-doc-content",A,[t("td-doc-header",C,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,M),i(t("div",null,[t("div",R,[k,t("div",S,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",z,[a(d,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,B)]),V,t("div",I,[t("td-doc-demo",{code:e.DemoexamplelabelCode,language:"markup","show-code":"",mode:"open","demo-name":"label","component-name":" README"},[t("div",H,[a(d,{"demo-name":"label","component-name":" README",code:e.DemoexamplelabelCode},null,8,["code"])])],8,$)]),P,t("div",j,[t("td-doc-demo",{code:e.DemoexampleautosizeCode,language:"markup","show-code":"",mode:"open","demo-name":"autosize","component-name":" README"},[t("div",q,[a(d,{"demo-name":"autosize","component-name":" README",code:e.DemoexampleautosizeCode},null,8,["code"])])],8,O)]),L,t("div",U,[t("td-doc-demo",{code:e.DemoexamplemaxlengthCode,language:"markup","show-code":"",mode:"open","demo-name":"maxlength","component-name":" README"},[t("div",F,[a(d,{"demo-name":"maxlength","component-name":" README",code:e.DemoexamplemaxlengthCode},null,8,["code"])])],8,G)]),J,t("div",K,[t("td-doc-demo",{code:e.DemoexamplemaxcharacterCode,language:"markup","show-code":"",mode:"open","demo-name":"maxcharacter","component-name":" README"},[t("div",W,[a(d,{"demo-name":"maxcharacter","component-name":" README",code:e.DemoexamplemaxcharacterCode},null,8,["code"])])],8,Q)]),X,Y,t("div",Z,[t("td-doc-demo",{code:e.DemoexampledisabledCode,language:"markup","show-code":"",mode:"open","demo-name":"disabled","component-name":" README"},[t("div",et,[a(d,{"demo-name":"disabled","component-name":" README",code:e.DemoexampledisabledCode},null,8,["code"])])],8,tt)]),dt,at,t("div",ot,[t("td-doc-demo",{code:e.DemoexamplecustomCode,language:"markup","show-code":"",mode:"open","demo-name":"custom","component-name":" README"},[t("div",rt,[a(d,{"demo-name":"custom","component-name":" README",code:e.DemoexamplecustomCode},null,8,["code"])])],8,nt)]),st,it]),t("td-doc-phone",lt,mt,512),pt],512),[[l,e.tab==="demo"]]),i(t("div",ht,ut,512),[[l,e.tab==="api"]]),i(t("div",xt,ft,512),[[l,e.tab==="design"]]),_t,vt],512)}const Nt=h(T,[["render",Et]]);export{Nt as default};
