import{_ as h,d as p,c as u,a as t,w as s,v as i,b as l,e as n,f as m,r as b,o as v}from"./sites-DTGQr0F7.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const k=`<template>
  <view>
    <view class="demo">
      <view class="demo-desc">
        基础标签
      </view>

      <t-tag
        class="margin-16"
        variant="light"
      >
        标签文字
      </t-tag>
      <t-tag
        class="margin-16"
        variant="outline"
      >
        标签文字
      </t-tag>
    </view>

    <view class="demo">
      <view class="demo-desc">
        圆弧标签
      </view>

      <t-tag
        class="margin-16"
        variant="light"
        shape="round"
      >
        标签文字
      </t-tag>
      <t-tag
        class="margin-16"
        variant="outline"
        shape="round"
      >
        标签文字
      </t-tag>
      <t-tag
        class="margin-16"
        variant="outline"
        shape="mark"
      >
        标签文字
      </t-tag>
    </view>

    <view class="demo">
      <view class="demo-desc">
        带图标的标签
      </view>

      <t-tag
        class="margin-16"
        variant="light"
        icon="discount"
      >
        标签文字
      </t-tag>
      <t-tag
        class="margin-16"
        variant="outline"
        icon="discount"
      >
        标签文字
      </t-tag>
    </view>

    <!-- skyline暂不支持设置后max-width超出省略 -->
    <view
      v-if="!skylineRender"
      class="demo"
    >
      <view class="demo-desc">
        超长省略文本标签
      </view>

      <t-tag
        :max-width="130"
        variant="light"
      >
        超长省略文本标签超长省略文本标签
      </t-tag>
    </view>
  </view>
</template>

<script>
import tTag from 'tdesign-uniapp/tag/tag';
import SkylineBehavior from 'packages/demo/src/mixins/skyline.js';

export default {
  components: {
    tTag,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
      skylineRender: '',
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
  <view class="demo">
    <t-tag
      v-if="show[0]"
      class="margin-16"
      closable
      variant="light"
      @close="handleClose0"
    >
      文字标签
    </t-tag>
    <t-tag
      v-if="show[1]"
      class="margin-16"
      closable
      variant="outline"
      @close="handleClose1"
    >
      文字标签
    </t-tag>
  </view>
</template>

<script>
import tTag from 'tdesign-uniapp/tag/tag';
export default {
  components: {
    tTag,
  },
  data() {
    return {
      show: [true, true],
    };
  },
  created() {},
  methods: {
    handleClose0() {
      this.show[0] = false;
    },
    handleClose1() {
      this.show[1] = false;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,w=`<template>
  <view class="wrapper">
    <block
      v-for="(item, index) in items"
      :key="index"
    >
      <view class="block">
        <text>{{ item }}</text>
        <t-check-tag
          class="margin-16"
          size="large"
          :variant="item"
          :content="['已选中态', '未选中态']"
        />
        <t-check-tag
          class="margin-16"
          default-checked
          size="large"
          :variant="item"
          :content="['已选中态', '未选中态']"
        />
      </view>
    </block>
  </view>
</template>

<script>
import tCheckTag from 'tdesign-uniapp/check-tag/check-tag';
export default {
  components: {
    tCheckTag,
  },
  data() {
    return {
      items: ['light', 'dark', 'outline', 'light-outline'],
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
    <view class="block">
      <t-tag
        class="margin-16"
        variant="light"
      >
        默认
      </t-tag>
      <t-tag
        class="margin-16"
        variant="light"
        theme="primary"
      >
        主要
      </t-tag>
      <t-tag
        class="margin-16"
        variant="light"
        theme="warning"
      >
        警告
      </t-tag>
      <t-tag
        class="margin-16"
        variant="light"
        theme="danger"
      >
        危险
      </t-tag>
      <t-tag
        class="margin-16"
        variant="light"
        theme="success"
      >
        成功
      </t-tag>
    </view>

    <view class="block">
      <t-tag
        class="margin-16"
        theme="default"
      >
        默认
      </t-tag>
      <t-tag
        class="margin-16"
        theme="primary"
      >
        主要
      </t-tag>
      <t-tag
        class="margin-16"
        theme="warning"
      >
        警告
      </t-tag>
      <t-tag
        class="margin-16"
        theme="danger"
      >
        危险
      </t-tag>
      <t-tag
        class="margin-16"
        theme="success"
      >
        成功
      </t-tag>
    </view>

    <view class="block">
      <t-tag
        class="margin-16"
        variant="outline"
      >
        默认
      </t-tag>
      <t-tag
        class="margin-16"
        variant="outline"
        theme="primary"
      >
        主要
      </t-tag>
      <t-tag
        class="margin-16"
        variant="outline"
        theme="warning"
      >
        警告
      </t-tag>
      <t-tag
        class="margin-16"
        variant="outline"
        theme="danger"
      >
        危险
      </t-tag>
      <t-tag
        class="margin-16"
        variant="outline"
        theme="success"
      >
        成功
      </t-tag>
    </view>

    <view class="block">
      <t-tag
        class="margin-16"
        variant="light-outline"
      >
        默认
      </t-tag>
      <t-tag
        class="margin-16"
        variant="light-outline"
        theme="primary"
      >
        主要
      </t-tag>
      <t-tag
        class="margin-16"
        variant="light-outline"
        theme="warning"
      >
        警告
      </t-tag>
      <t-tag
        class="margin-16"
        variant="light-outline"
        theme="danger"
      >
        危险
      </t-tag>
      <t-tag
        class="margin-16"
        variant="light-outline"
        theme="success"
      >
        成功
      </t-tag>
    </view>
  </view>
</template>

<script>
import tTag from 'tdesign-uniapp/tag/tag';
export default {
  components: {
    tTag,
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
`,y=`<template>
  <view>
    <view class="block">
      <t-tag
        class="margin-16"
        size="extra-large"
        variant="light"
      >
        加大尺寸
      </t-tag>
      <t-tag
        class="margin-16"
        size="large"
        variant="light"
      >
        大尺寸
      </t-tag>
      <t-tag
        class="margin-16"
        size="medium"
        variant="light"
      >
        中尺寸
      </t-tag>
      <t-tag
        class="margin-16"
        size="small"
        variant="light"
      >
        小尺寸
      </t-tag>
    </view>

    <view class="block">
      <t-tag
        class="margin-8"
        size="extra-large"
        variant="light"
        closable
      >
        加大尺寸
      </t-tag>
      <t-tag
        class="margin-8"
        size="large"
        variant="light"
        closable
      >
        大尺寸
      </t-tag>
      <t-tag
        class="margin-8"
        size="medium"
        variant="light"
        closable
      >
        中尺寸
      </t-tag>
      <t-tag
        class="margin-8"
        size="small"
        variant="light"
        closable
      >
        小尺寸
      </t-tag>
    </view>
  </view>
</template>

<script>
import tTag from 'tdesign-uniapp/tag/tag';
export default {
  components: {
    tTag,
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
`,E=p({data(){return{DemoexampletypeCode:k,DemoexampleclosableCode:x,DemoexamplecheckableCode:w,DemoexamplethemeCode:_,DemoexamplesizeCode:y}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(d){this.$route.query.tab!==d&&this.$router.push({query:{tab:d}})}}},mounted(){const{tdDocContent:d,tdDocHeader:r,tdDocTabs:a,tdDocPhone:o}=this.$refs,c="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/tag/tag";r&&(r.docInfo={title:"Tag 标签",desc:"用于表明主体的类目，属性或状态。"}),a&&(a.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],a.onchange=({detail:g})=>this.tab=g),o&&(o.qrcodeUrl=c),f.highlightAll(),this.$emit("loaded",()=>{d.pageStatus="show"})}}),D={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},z={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"tag"},C=["tab"],S={name:"DEMO"},T=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TTag <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/tag/tag.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TCheckTag <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/check-tag/check-tag.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3>`,4),N={class:"tdesign-demo-wrapper tdesign-demo-item-- README-type tdesign-demo-item-- README"},A=["code"],R={slot:"action"},M=t("p",null,"可关闭的标签",-1),B={class:"tdesign-demo-wrapper tdesign-demo-item-- README-closable tdesign-demo-item-- README"},j=["code"],q={slot:"action"},$=t("p",null,"可点击的标签",-1),O={class:"tdesign-demo-wrapper tdesign-demo-item-- README-checkable tdesign-demo-item-- README"},P=["code"],V={slot:"action"},I=t("h3",{id:"组件状态"},[m("组件状态 "),t("a",{class:"header-anchor",href:"#组件状态"})],-1),H=t("p",null,"展示型标签",-1),U={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},G=["code"],F={slot:"action"},J=t("h3",{id:"组件尺寸"},[m("组件尺寸 "),t("a",{class:"header-anchor",href:"#组件尺寸"})],-1),K={class:"tdesign-demo-wrapper tdesign-demo-item-- README-size tdesign-demo-item-- README"},L=["code"],Q={slot:"action"},W={ref:"tdDocPhone"},X=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/tag/tag",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),Y=[X],Z=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"tag"},null,-1),tt={name:"API"},dt=l('<h3 id="tag-props">Tag Props <a class="header-anchor" href="#tag-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>closable</td><td>Boolean / Object / Slot</td><td>false</td><td>标签是否可关闭。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>false</td><td>标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态</td><td>N</td></tr><tr><td>icon</td><td>String / Object / Slot</td><td>-</td><td>标签中的图标，可自定义图标呈现。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>max-width</td><td>String / Number</td><td>-</td><td>标签最大宽度，宽度超出后会出现省略号。示例：&#39;50px&#39; / 80</td><td>N</td></tr><tr><td>shape</td><td>String</td><td>square</td><td>标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark</td><td>N</td></tr><tr><td>size</td><td>String</td><td>medium</td><td>标签尺寸。可选项：small/medium/large/extra-large</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>default</td><td>组件风格，用于描述组件不同的应用场景。可选项：default/primary/warning/danger/success</td><td>N</td></tr><tr><td>variant</td><td>String</td><td>dark</td><td>标签风格变体。可选项：dark/light/outline/light-outline</td><td>N</td></tr></tbody></table><h3 id="tag-events">Tag Events <a class="header-anchor" href="#tag-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>click</td><td>-</td><td>点击时触发</td></tr><tr><td>close</td><td>-</td><td>如果关闭按钮存在，点击关闭按钮时触发</td></tr></tbody></table><h3 id="tag-external-classes">Tag External Classes <a class="header-anchor" href="#tag-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr></tbody></table><h3 id="checktag-props">CheckTag Props <a class="header-anchor" href="#checktag-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>checked</td><td>Boolean</td><td>-</td><td>标签选中的状态，默认风格（theme=default）才有选中态</td><td>N</td></tr><tr><td>default-checked</td><td>Boolean</td><td>undefined</td><td>标签选中的状态，默认风格（theme=default）才有选中态。非受控属性</td><td>N</td></tr><tr><td>closable</td><td>Boolean</td><td>false</td><td>标签是否可关闭</td><td>N</td></tr><tr><td>content</td><td>String / Number / Array / Slot</td><td>-</td><td>组件子元素；传入数组时：[选中内容，非选中内容]。TS 类型：<code>string \\| number \\| string[]</code></td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>false</td><td>标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态</td><td>N</td></tr><tr><td>icon</td><td>String / Object / Slot</td><td>-</td><td>标签图标。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>shape</td><td>String</td><td>square</td><td>标签类型，有三种：方形、圆角方形、标记型。可选项：square/round/mark</td><td>N</td></tr><tr><td>size</td><td>String</td><td>medium</td><td>标签尺寸。可选项：small/medium/large。TS 类型：<code>SizeEnum</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>variant</td><td>String</td><td>dark</td><td><code>0.26.0</code>。标签风格变体。可选项：dark/light/outline/light-outline</td><td>N</td></tr></tbody></table><h3 id="checktag-events">CheckTag Events <a class="header-anchor" href="#checktag-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(checked: boolean)</code></td><td>状态切换时触发</td></tr><tr><td>click</td><td>-</td><td>点击标签时触发</td></tr><tr><td>close</td><td>-</td><td>如果关闭按钮存在，点击关闭按钮时触发</td></tr></tbody></table><h3 id="checktag-external-classes">CheckTag External Classes <a class="header-anchor" href="#checktag-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-tag-close-icon-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-tag-danger-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-tag-danger-light-color</td><td>@error-color-1</td><td>-</td></tr><tr><td>--td-tag-default-color</td><td>@bg-color-component</td><td>-</td></tr><tr><td>--td-tag-default-font-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-tag-default-light-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-tag-disabled-background-color</td><td>@bg-color-component-disabled</td><td>-</td></tr><tr><td>--td-tag-disabled-border-color</td><td>@component-border</td><td>-</td></tr><tr><td>--td-tag-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-tag-extra-large-font-size</td><td>@font-size-base</td><td>-</td></tr><tr><td>--td-tag-extra-large-height</td><td>80rpx</td><td>-</td></tr><tr><td>--td-tag-extra-large-icon-size</td><td>32rpx</td><td>-</td></tr><tr><td>--td-tag-extra-large-padding</td><td>32rpx - 1px</td><td>-</td></tr><tr><td>--td-tag-large-font-size</td><td>@font-size-base</td><td>-</td></tr><tr><td>--td-tag-large-height</td><td>56rpx</td><td>-</td></tr><tr><td>--td-tag-large-icon-size</td><td>32rpx</td><td>-</td></tr><tr><td>--td-tag-large-padding</td><td>16rpx - 1px</td><td>-</td></tr><tr><td>--td-tag-mark-border-radius</td><td>@tag-round-border-radius</td><td>-</td></tr><tr><td>--td-tag-medium-font-size</td><td>@font-size-s</td><td>-</td></tr><tr><td>--td-tag-medium-height</td><td>48rpx</td><td>-</td></tr><tr><td>--td-tag-medium-icon-size</td><td>28rpx</td><td>-</td></tr><tr><td>--td-tag-medium-padding</td><td>16rpx - 1px</td><td>-</td></tr><tr><td>--td-tag-primary-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-tag-primary-light-color</td><td>@brand-color-light</td><td>-</td></tr><tr><td>--td-tag-round-border-radius</td><td>999px</td><td>-</td></tr><tr><td>--td-tag-small-font-size</td><td>@font-size</td><td>-</td></tr><tr><td>--td-tag-small-height</td><td>40rpx</td><td>-</td></tr><tr><td>--td-tag-small-icon-size</td><td>24rpx</td><td>-</td></tr><tr><td>--td-tag-small-padding</td><td>12rpx - 1px</td><td>-</td></tr><tr><td>--td-tag-square-border-radius</td><td>8rpx</td><td>-</td></tr><tr><td>--td-tag-success-color</td><td>@success-color</td><td>-</td></tr><tr><td>--td-tag-success-light-color</td><td>@success-color-1</td><td>-</td></tr><tr><td>--td-tag-warning-color</td><td>@warning-color</td><td>-</td></tr><tr><td>--td-tag-warning-light-color</td><td>@warning-color-1</td><td>-</td></tr><tr><td>ant</td><td></td><td></td></tr><tr><td>@tag-outline-bg-color: var(--td-tag-outline-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>ant = dark</td><td>@@theme-color, @@theme-light-color</td><td>-</td></tr><tr><td>ant = dark</td><td>@text-color-anti, @@theme-color</td><td>-</td></tr><tr><td>ant = light</td><td>@@theme-light-color, @@theme-color</td><td>-</td></tr><tr><td>ant) {</td><td></td><td></td></tr><tr><td>@themes: default</td><td>primary, success, warning, dange</td><td>-</td></tr><tr><td>--td-tag-danger-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-tag-danger-light-color</td><td>@error-color-1</td><td>-</td></tr><tr><td>--td-tag-default-color</td><td>@bg-color-component</td><td>-</td></tr><tr><td>--td-tag-default-font-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-tag-default-light-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-tag-disabled-background-color</td><td>@bg-color-component-disabled</td><td>-</td></tr><tr><td>--td-tag-disabled-border-color</td><td>@component-border</td><td>-</td></tr><tr><td>--td-tag-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-tag-extra-large-font-size</td><td>@font-size-base</td><td>-</td></tr><tr><td>--td-tag-extra-large-height</td><td>80rpx</td><td>-</td></tr><tr><td>--td-tag-extra-large-icon-size</td><td>32rpx</td><td>-</td></tr><tr><td>--td-tag-extra-large-padding</td><td>32rpx - 1px</td><td>-</td></tr><tr><td>--td-tag-large-font-size</td><td>@font-size-base</td><td>-</td></tr><tr><td>--td-tag-large-height</td><td>56rpx</td><td>-</td></tr><tr><td>--td-tag-large-icon-size</td><td>32rpx</td><td>-</td></tr><tr><td>--td-tag-large-padding</td><td>16rpx - 1px</td><td>-</td></tr><tr><td>--td-tag-mark-border-radius</td><td>@tag-round-border-radius</td><td>-</td></tr><tr><td>--td-tag-medium-font-size</td><td>@font-size-s</td><td>-</td></tr><tr><td>--td-tag-medium-height</td><td>48rpx</td><td>-</td></tr><tr><td>--td-tag-medium-icon-size</td><td>28rpx</td><td>-</td></tr><tr><td>--td-tag-medium-padding</td><td>16rpx - 1px</td><td>-</td></tr><tr><td>--td-tag-primary-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-tag-primary-light-color</td><td>@brand-color-light</td><td>-</td></tr><tr><td>--td-tag-round-border-radius</td><td>999px</td><td>-</td></tr><tr><td>--td-tag-small-font-size</td><td>@font-size</td><td>-</td></tr><tr><td>--td-tag-small-height</td><td>40rpx</td><td>-</td></tr><tr><td>--td-tag-small-icon-size</td><td>24rpx</td><td>-</td></tr><tr><td>--td-tag-small-padding</td><td>12rpx - 1px</td><td>-</td></tr><tr><td>--td-tag-square-border-radius</td><td>8rpx</td><td>-</td></tr><tr><td>--td-tag-success-color</td><td>@success-color</td><td>-</td></tr><tr><td>--td-tag-success-light-color</td><td>@success-color-1</td><td>-</td></tr><tr><td>--td-tag-warning-color</td><td>@warning-color</td><td>-</td></tr><tr><td>--td-tag-warning-light-color</td><td>@warning-color-1</td><td>-</td></tr><tr><td>ant</td><td></td><td></td></tr><tr><td>@tag-outline-bg-color: var(--td-tag-outline-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>ant = dark</td><td>@@theme-color, @@theme-light-color</td><td>-</td></tr><tr><td>ant = dark</td><td>@text-color-anti, @@theme-color</td><td>-</td></tr><tr><td>ant = light</td><td>@@theme-light-color, @@theme-color</td><td>-</td></tr><tr><td>ant) {</td><td></td><td></td></tr><tr><td>@themes: default</td><td>primary, success, warning, dange</td><td>-</td></tr></tbody></table>',15),et=[dt],nt={name:"DESIGN"},at=l('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要展示内容本身的属性、状态、类别、营销情况时作为纯展示使用；或者当大量的内容数据需要根据类型进行选择筛选时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="与图片组合使用，图片作为内容、商品等对象的详情入口时，可通过添加标签来展示该对象的属性、状态、类别、营销情况等。">与<a href="./image">图片</a>组合使用，图片作为内容、商品等对象的详情入口时，可通过添加标签来展示该对象的属性、状态、类别、营销情况等。 <a class="header-anchor" href="#与图片组合使用，图片作为内容、商品等对象的详情入口时，可通过添加标签来展示该对象的属性、状态、类别、营销情况等。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tag/tag-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tag/tag-2.png"></div></div><hr><h5 id="与下拉菜单组合使用，作为菜单面板下拉后的选项，供用户进行选择。">与<a href="./dropdown-menu">下拉菜单</a>组合使用，作为菜单面板下拉后的选项，供用户进行选择。 <a class="header-anchor" href="#与下拉菜单组合使用，作为菜单面板下拉后的选项，供用户进行选择。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tag/tag-3.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="常用于展示对象本身的属性、状态、类别、营销情况等信息，且仅作为展示使用。">常用于展示对象本身的属性、状态、类别、营销情况等信息，且仅作为展示使用。 <a class="header-anchor" href="#常用于展示对象本身的属性、状态、类别、营销情况等信息，且仅作为展示使用。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tag/tag-4.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tag/tag-5.png"></div></div><hr><h5 id="常用于内容数据基于某个维度或某些维度的检索、筛选。">常用于内容数据基于某个维度或某些维度的检索、筛选。 <a class="header-anchor" href="#常用于内容数据基于某个维度或某些维度的检索、筛选。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tag/tag-6.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tag/tag-7.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="标签颜色和字体颜色在明度、色相上要避免难以区分，保证标签的可读性。">标签颜色和字体颜色在明度、色相上要避免难以区分，保证标签的可读性。 <a class="header-anchor" href="#标签颜色和字体颜色在明度、色相上要避免难以区分，保证标签的可读性。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tag/tag-8.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="标签文案需要经过概括和提炼，不建议过长。">标签文案需要经过概括和提炼，不建议过长。 <a class="header-anchor" href="#标签文案需要经过概括和提炼，不建议过长。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tag/tag-9.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./badge">徽标</a></td><td style="text-align:left;">当需要展示特定对象的状态变化或承载运营性质提示时使用。</td></tr></tbody></table>',22),rt=[at],ot=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760437151307"})],-1),st=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function it(d,r,a,o,c,g){const e=b("Stackblitz");return v(),u("td-doc-content",D,[t("td-doc-header",z,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:d.tab},null,8,C),s(t("div",null,[t("div",S,[T,t("div",N,[t("td-doc-demo",{code:d.DemoexampletypeCode,language:"markup","show-code":"",mode:"open","demo-name":"type","component-name":" README"},[t("div",R,[n(e,{"demo-name":"type","component-name":" README",code:d.DemoexampletypeCode},null,8,["code"])])],8,A)]),M,t("div",B,[t("td-doc-demo",{code:d.DemoexampleclosableCode,language:"markup","show-code":"",mode:"open","demo-name":"closable","component-name":" README"},[t("div",q,[n(e,{"demo-name":"closable","component-name":" README",code:d.DemoexampleclosableCode},null,8,["code"])])],8,j)]),$,t("div",O,[t("td-doc-demo",{code:d.DemoexamplecheckableCode,language:"markup","show-code":"",mode:"open","demo-name":"checkable","component-name":" README"},[t("div",V,[n(e,{"demo-name":"checkable","component-name":" README",code:d.DemoexamplecheckableCode},null,8,["code"])])],8,P)]),I,H,t("div",U,[t("td-doc-demo",{code:d.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",F,[n(e,{"demo-name":"theme","component-name":" README",code:d.DemoexamplethemeCode},null,8,["code"])])],8,G)]),J,t("div",K,[t("td-doc-demo",{code:d.DemoexamplesizeCode,language:"markup","show-code":"",mode:"open","demo-name":"size","component-name":" README"},[t("div",Q,[n(e,{"demo-name":"size","component-name":" README",code:d.DemoexamplesizeCode},null,8,["code"])])],8,L)])]),t("td-doc-phone",W,Y,512),Z],512),[[i,d.tab==="demo"]]),s(t("div",tt,et,512),[[i,d.tab==="api"]]),s(t("div",nt,rt,512),[[i,d.tab==="design"]]),ot,st],512)}const gt=h(E,[["render",it]]);export{gt as default};
