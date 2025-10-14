import{_ as p,d as u,c as g,a as t,w as i,v as c,b as r,e as n,f as s,r as w,o as b}from"./sites-CFYcBLxc.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view>
    <t-cell
      title="基础开关"
      :bordered="false"
    >
      <template
        #note
      >
        <t-switch
          :default-value="true"
        />
      </template>
    </t-cell>
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tSwitch from 'tdesign-uniapp/switch/switch';
export default {
  components: {
    tCell,
    tSwitch,
  },
  data() {
    return {
      defaultVal: true,
    };
  },
  created() {},
  methods: {
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <t-cell title="带文字开关">
      <template
        #note
      >
        <t-switch
          :value="defaultVal"
          :label="['开', '关']"
          @change="handleChange"
        />
      </template>
    </t-cell>

    <t-cell
      title="带图标开关"
      :bordered="false"
    >
      <template
        #note
      >
        <t-switch
          :default-value="true"
          :icon="['check', 'close']"
        />
      </template>
    </t-cell>
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tSwitch from 'tdesign-uniapp/switch/switch';
export default {
  components: {
    tCell,
    tSwitch,
  },
  data() {
    return {
      defaultVal: true,
    };
  },
  created() {},
  methods: {
    handleChange(e) {
      this.defaultVal = e.value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,x=`<template>
  <view class="custom-color">
    <t-cell
      title="自定义颜色开关"
      :bordered="false"
    >
      <template
        #note
      >
        <t-switch
          :default-value="true"
        />
      </template>
    </t-cell>
    <!-- <t-cell title="自定义颜色" bordered="{{false}}">
    <t-switch loading defaultValue="{{true}}" slot="note" />
  </t-cell>
  <t-cell title="自定义颜色" bordered="{{false}}">
    <t-switch defaultValue="{{true}}" label="{{['关', '开']}}" slot="note" />
  </t-cell>
  <t-cell title="自定义颜色" bordered="{{false}}">
    <t-switch defaultValue="{{true}}" icon="{{['close', 'check']}}" slot="note" />
  </t-cell> -->
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tSwitch from 'tdesign-uniapp/switch/switch';
export default {
  components: {
    tCell,
    tSwitch,
  },
  data() {
    return {
      defaultVal: true,
    };
  },
  created() {},
  methods: {
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,E=`<template>
  <view>
    <view class="demo-desc">
      加载状态
    </view>

    <view class="group">
      <t-cell title="加载状态">
        <template
          #note
        >
          <t-switch
            :default-value="false"
            loading
          />
        </template>
      </t-cell>
      <t-cell
        title="加载状态"
        :bordered="false"
      >
        <template
          #note
        >
          <t-switch
            :default-value="true"
            loading
          />
        </template>
      </t-cell>
    </view>

    <view class="demo-desc">
      禁用状态
    </view>

    <view class="group">
      <t-cell title="禁用状态">
        <template
          #note
        >
          <t-switch
            disabled
          />
        </template>
      </t-cell>
      <t-cell
        title="禁用状态"
        :bordered="false"
      >
        <template
          #note
        >
          <t-switch
            :default-value="true"
            disabled
          />
        </template>
      </t-cell>
    </view>
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tSwitch from 'tdesign-uniapp/switch/switch';
export default {
  components: {
    tCell,
    tSwitch,
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
`,D=`<template>
  <view>
    <t-cell title="大尺寸 32">
      <template
        #note
      >
        <t-switch
          :default-value="true"
          size="large"
        />
      </template>
    </t-cell>
    <t-cell title="中尺寸 28">
      <template
        #note
      >
        <t-switch
          :default-value="true"
        />
      </template>
    </t-cell>
    <t-cell
      title="小尺寸 24"
      :bordered="false"
    >
      <template
        #note
      >
        <t-switch
          :default-value="true"
          size="small"
        />
      </template>
    </t-cell>
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tSwitch from 'tdesign-uniapp/switch/switch';
export default {
  components: {
    tCell,
    tSwitch,
  },
  data() {
    return {
      defaultVal: true,
    };
  },
  created() {},
  methods: {

  },
};
<\/script>
<style>
@import './index.css';
</style>
`,S=u({data(){return{DemoexamplebaseCode:v,DemoexamplelabelCode:_,DemoexamplecolorCode:x,DemoexamplestatusCode:E,DemoexamplesizeCode:D}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:a,tdDocTabs:o,tdDocPhone:l}=this.$refs,h="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/switch/switch";a&&(a.docInfo={title:"Switch 开关",desc:"用于控制某个功能的开启和关闭。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:m})=>this.tab=m),l&&(l.qrcodeUrl=h),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),y={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},C={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"switch"},k=["tab"],A={name:"DEMO"},z=r(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-switch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/switch/switch&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/ea6Lpim37ISs" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="基础开关">基础开关 <a class="header-anchor" href="#基础开关"></a></h3>`,7),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},R=["code"],V={slot:"action"},N=t("h3",{id:"带描述开关"},[s("带描述开关 "),t("a",{class:"header-anchor",href:"#带描述开关"})],-1),q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-label tdesign-demo-item-- README"},T=["code"],$={slot:"action"},B=t("h3",{id:"自定义颜色"},[s("自定义颜色 "),t("a",{class:"header-anchor",href:"#自定义颜色"})],-1),P={class:"tdesign-demo-wrapper tdesign-demo-item-- README-color tdesign-demo-item-- README"},j=["code"],I={slot:"action"},O=t("h3",{id:"开关状态"},[s("开关状态 "),t("a",{class:"header-anchor",href:"#开关状态"})],-1),H={class:"tdesign-demo-wrapper tdesign-demo-item-- README-status tdesign-demo-item-- README"},U=["code"],F={slot:"action"},G=t("h3",{id:"尺寸"},[s("尺寸 "),t("a",{class:"header-anchor",href:"#尺寸"})],-1),J={class:"tdesign-demo-wrapper tdesign-demo-item-- README-size tdesign-demo-item-- README"},L=["code"],K={slot:"action"},Q={ref:"tdDocPhone"},W=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/switch/switch",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),X=[W],Y=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"switch"},null,-1),Z={name:"API"},tt=r('<h3 id="switch-props">Switch Props <a class="header-anchor" href="#switch-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>custom-value</td><td>Array</td><td>[true, false]</td><td>用于自定义开关的值，[打开时的值，关闭时的值]。默认为 [true, false]。示例：[1, 0]、[&#39;open&#39;, &#39;close&#39;]。TS 类型：<code>Array&lt;SwitchValue&gt;</code></td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>undefined</td><td>是否禁用组件。优先级：Switch.disabled &gt; Form.disabled</td><td>N</td></tr><tr><td>icon</td><td>Array</td><td>[]</td><td><code>0.27.0</code>。开关的图标；[打开时的图标，关闭时的图标]。TS 类型：<code>string[]</code></td><td>N</td></tr><tr><td>label</td><td>Array</td><td>[]</td><td><code>0.27.0</code>。开关内容，[开启时内容，关闭时内容]。示例：[&#39;开&#39;, &#39;关&#39;] 。TS 类型：<code>string[]</code></td><td>N</td></tr><tr><td>loading</td><td>Boolean</td><td>false</td><td><code>0.27.0</code>。是否处于加载中状态</td><td>N</td></tr><tr><td>size</td><td>String</td><td>medium</td><td><code>0.27.0</code>。开关尺寸。可选项：small/medium/large</td><td>N</td></tr><tr><td>value</td><td>String / Number / Boolean</td><td>null</td><td>开关值。TS 类型：<code>SwitchValue</code> <code>type SwitchValue = string \\| number \\| boolean</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/switch/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-value</td><td>String / Number / Boolean</td><td>undefined</td><td>开关值。非受控属性。TS 类型：<code>SwitchValue</code> <code>type SwitchValue = string \\| number \\| boolean</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/switch/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="switch-events">Switch Events <a class="header-anchor" href="#switch-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: SwitchValue)</code></td><td>数据发生变化时触发</td></tr></tbody></table><h3 id="switch-external-classes">Switch External Classes <a class="header-anchor" href="#switch-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-body</td><td>描述文本样式类</td></tr><tr><td>t-class-dot</td><td>滑块样式类</td></tr><tr><td>t-class-label</td><td>开关内容样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-switch-checked-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-switch-checked-disabled-color</td><td>@brand-color-disabled</td><td>-</td></tr><tr><td>--td-switch-dot-disabled-color</td><td>@font-white-1</td><td>-</td></tr><tr><td>--td-switch-dot-horizontal-margin</td><td>6rpx</td><td>-</td></tr><tr><td>--td-switch-dot-large-size</td><td>52rpx</td><td>-</td></tr><tr><td>--td-switch-dot-plain-horizontal-margin</td><td>10rpx</td><td>-</td></tr><tr><td>--td-switch-dot-plain-large-size</td><td>44rpx</td><td>-</td></tr><tr><td>--td-switch-dot-plain-size</td><td>36rpx</td><td>-</td></tr><tr><td>--td-switch-dot-plain-small-size</td><td>28rpx</td><td>-</td></tr><tr><td>--td-switch-dot-shadow</td><td>@shadow-1</td><td>-</td></tr><tr><td>--td-switch-dot-size</td><td>44rpx</td><td>-</td></tr><tr><td>--td-switch-dot-small-size</td><td>36rpx</td><td>-</td></tr><tr><td>--td-switch-height</td><td>56rpx</td><td>-</td></tr><tr><td>--td-switch-icon-large-size</td><td>48rpx</td><td>-</td></tr><tr><td>--td-switch-icon-size</td><td>40rpx</td><td>-</td></tr><tr><td>--td-switch-icon-small-size</td><td>32rpx</td><td>-</td></tr><tr><td>--td-switch-label-checked-color</td><td>@switch-checked-color</td><td>-</td></tr><tr><td>--td-switch-label-color</td><td>@bg-color-secondarycontainer-active</td><td>-</td></tr><tr><td>--td-switch-label-font-size</td><td>28rpx</td><td>-</td></tr><tr><td>--td-switch-label-large-font-size</td><td>32rpx</td><td>-</td></tr><tr><td>--td-switch-label-small-font-size</td><td>24rpx</td><td>-</td></tr><tr><td>--td-switch-large-height</td><td>64rpx</td><td>-</td></tr><tr><td>--td-switch-large-radius</td><td>calc(@switch-large-height / 2)</td><td>-</td></tr><tr><td>--td-switch-large-width</td><td>104rpx</td><td>-</td></tr><tr><td>--td-switch-loading-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-switch-radius</td><td>calc(@switch-height / 2)</td><td>-</td></tr><tr><td>--td-switch-small-height</td><td>48rpx</td><td>-</td></tr><tr><td>--td-switch-small-radius</td><td>calc(@switch-small-height / 2)</td><td>-</td></tr><tr><td>--td-switch-small-width</td><td>78rpx</td><td>-</td></tr><tr><td>--td-switch-unchecked-color</td><td>@bg-color-secondarycontainer-active</td><td>-</td></tr><tr><td>--td-switch-unchecked-disabled-color</td><td>@bg-color-component-disabled</td><td>-</td></tr><tr><td>--td-switch-width</td><td>90rpx</td><td>-</td></tr></tbody></table>',9),et=[tt],dt={name:"DESIGN"},nt=r('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要切换某个功能的开启、关闭时使用。</p><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="开关状态的颜色使用建议符合颜色语义，尽量避免让开启、关闭状态的颜色产生混淆。">开关状态的颜色使用建议符合颜色语义，尽量避免让开启、关闭状态的颜色产生混淆。 <a class="header-anchor" href="#开关状态的颜色使用建议符合颜色语义，尽量避免让开启、关闭状态的颜色产生混淆。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/switch/switch-1.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/switch/switch-2.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="若需结合文本描述开关状态，建议文案和开关状态保持一致，确保表意清晰。">若需结合文本描述开关状态，建议文案和开关状态保持一致，确保表意清晰。 <a class="header-anchor" href="#若需结合文本描述开关状态，建议文案和开关状态保持一致，确保表意清晰。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/switch/switch-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div>',8),ot=[nt],st=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416658066"})],-1),at=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function lt(e,a,o,l,h,m){const d=w("Stackblitz");return b(),g("td-doc-content",y,[t("td-doc-header",C,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,k),i(t("div",null,[t("div",A,[z,t("div",M,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",V,[n(d,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,R)]),N,t("div",q,[t("td-doc-demo",{code:e.DemoexamplelabelCode,language:"markup","show-code":"",mode:"open","demo-name":"label","component-name":" README"},[t("div",$,[n(d,{"demo-name":"label","component-name":" README",code:e.DemoexamplelabelCode},null,8,["code"])])],8,T)]),B,t("div",P,[t("td-doc-demo",{code:e.DemoexamplecolorCode,language:"markup","show-code":"",mode:"open","demo-name":"color","component-name":" README"},[t("div",I,[n(d,{"demo-name":"color","component-name":" README",code:e.DemoexamplecolorCode},null,8,["code"])])],8,j)]),O,t("div",H,[t("td-doc-demo",{code:e.DemoexamplestatusCode,language:"markup","show-code":"",mode:"open","demo-name":"status","component-name":" README"},[t("div",F,[n(d,{"demo-name":"status","component-name":" README",code:e.DemoexamplestatusCode},null,8,["code"])])],8,U)]),G,t("div",J,[t("td-doc-demo",{code:e.DemoexamplesizeCode,language:"markup","show-code":"",mode:"open","demo-name":"size","component-name":" README"},[t("div",K,[n(d,{"demo-name":"size","component-name":" README",code:e.DemoexamplesizeCode},null,8,["code"])])],8,L)])]),t("td-doc-phone",Q,X,512),Y],512),[[c,e.tab==="demo"]]),i(t("div",Z,et,512),[[c,e.tab==="api"]]),i(t("div",dt,ot,512),[[c,e.tab==="design"]]),st,at],512)}const rt=p(S,[["render",lt]]);export{rt as default};
