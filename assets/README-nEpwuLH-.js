import{_ as h,d as g,c as u,a as t,w as s,v as c,b as l,e as o,f as n,r as b,o as v}from"./sites-BI0e1los.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view>
    <t-radio-group
      allow-uncheck
      :value="current"
      :options="options"
      @change="onChange"
    />
  </view>
</template>

<script>
import tRadioGroup from 'tdesign-uniapp/radio-group/radio-group';

export default {
  components: {
    tRadioGroup,
  },
  data() {
    return {
      current: 1,
      options: [
        {
          value: 0,
          label: '单选',
        },
        {
          value: 1,
          label: '单选',
        },
        {
          value: 2,
          label: '单选单选单选单选单选单选单选单选单选单选单选单选单选单选',
        },
        {
          value: 3,
          label: '单选',
          content: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
        },
      ],
    };
  },
  created() {},
  methods: {
    onChange(event) {
      console.log('[onChange]', event);
      const { value } = event;
      this.current = value;
      console.log('[current]', this.current);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <t-radio-group
      default-value="0"
      borderless
      t-class="box"
    >
      <t-radio
        :block="false"
        label="单选标题"
        value="0"
      />
      <t-radio
        :block="false"
        label="单选标题"
        value="1"
      />
      <t-radio
        :block="false"
        label="上限四字"
        value="2"
      />
    </t-radio-group>
  </view>
</template>

<script>
import tRadioGroup from 'tdesign-uniapp/radio-group/radio-group';
import tRadio from 'tdesign-uniapp/radio/radio';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tRadioGroup,
    tRadio,
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    handleChange(e) {
      console.log('handleChange', e);
      this.checked = e.checked;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,k=`<template>
  <view>
    <t-radio-group
      default-value="radio1"
      :disabled="true"
    >
      <t-radio
        value="radio1"
        label="单选"
      />
      <t-radio
        value="radio2"
        label="单选"
      />
    </t-radio-group>
  </view>
</template>

<script>
import tRadioGroup from 'tdesign-uniapp/radio-group/radio-group';
import tRadio from 'tdesign-uniapp/radio/radio';
export default {
  components: {
    tRadioGroup,
    tRadio,
  },
  /**
     * 组件的属性列表
     */
  props: {},
  data() {
    return {};
  },
  created() {},
  /**
     * 组件的方法列表
     */
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,R=`<template>
  <view>
    <t-radio
      :default-checked="true"
      allow-uncheck
      icon="line"
      label="单选"
    />

    <view
      class="gutter"
      style="height: 32rpx"
    />

    <t-radio
      :default-checked="true"
      allow-uncheck
      icon="dot"
      label="单选"
    />
  </view>
</template>

<script>
import tRadio from 'tdesign-uniapp/radio/radio';
export default {
  components: {
    tRadio,
  },
  /**
     * 组件的属性列表
     */
  props: {},
  data() {
    return {};
  },
  created() {},
  /**
     * 组件的方法列表
     */
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,x=`<template>
  <view>
    <t-radio
      value="radio1"
      allow-uncheck
      label="单选"
      default-checked
    />

    <view class="block" />

    <t-radio
      value="radio2"
      allow-uncheck
      label="单选"
      placement="right"
      default-checked
    />
  </view>
</template>

<script>
import tRadio from 'tdesign-uniapp/radio/radio';
export default {
  components: {
    tRadio,
  },
  /**
     * 组件的属性列表
     */
  props: {},
  data() {
    return {};
  },
  created() {},
  /**
     * 组件的方法列表
     */
  methods: {
    onChange(event) {
      console.log('radio', event);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,E=`<template>
  <view>
    <t-radio-group
      t-class="theme-card"
      default-value="radio1"
    >
      <t-radio
        label="单选"
        value="radio1"
        default-checked
      />
      <t-radio
        label="单选"
        value="radio2"
      />
      <t-radio
        label="单选标题多行单选标题多行单选标题多行单选标题多行单选标题多行"
        value="radio3"
      />
    </t-radio-group>
  </view>
</template>

<script>
import tRadioGroup from 'tdesign-uniapp/radio-group/radio-group';
import tRadio from 'tdesign-uniapp/radio/radio';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tRadioGroup,
    tRadio,
  },
  /**
     * 组件的属性列表
     */
  props: {},
  data() {
    return {};
  },
  created() {},
  /**
     * 组件的方法列表
     */
  methods: {
    onChange() {},
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,D=`<template>
  <view>
    <t-radio-group
      :value="value"
      allow-uncheck
      @change="onChange"
    >
      <view
        v-for="(item, index) in 3"
        :key="index"
        :class="'card ' + (value == index ? 'card--active' : '')"
      >
        <t-icon
          v-if="value == index"
          name="check"
          t-class="card__icon"
        />

        <t-radio
          :value="index"
          label="单选"
          content="描述信息描述信息描述信息描述信息描述信息"
          icon="none"
          borderless
        />
      </view>
    </t-radio-group>

    <view
      class="demo-desc"
      style="margin: 48rpx 32rpx 32rpx"
    >
      横向卡片单选框
    </view>

    <t-radio-group
      t-class="horizontal-box"
      :value="value1"
      @change="onChange1"
    >
      <view
        v-for="(item, index) in 3"
        :key="index"
        :class="'card ' + (value1 == index ? 'card--active' : '')"
      >
        <t-icon
          v-if="value1 == index"
          name="check"
          t-class="card__icon"
        />

        <t-radio
          :value="index"
          label="单选"
          icon="none"
          borderless
        />
      </view>
    </t-radio-group>
  </view>
</template>

<script>
import tRadioGroup from 'tdesign-uniapp/radio-group/radio-group';
import tRadio from 'tdesign-uniapp/radio/radio';
import tIcon from 'tdesign-uniapp/icon/icon';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tRadioGroup,
    tRadio,
    tIcon,
  },
  data() {
    return {
      value: 0,
      value1: 0,
    };
  },
  created() {},
  methods: {
    onChange(e) {
      this.value = e.value;
    },
    onChange1(e) {
      this.value1 = e.value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,w=g({data(){return{DemoexamplebaseCode:_,DemoexamplehorizontalCode:y,DemoexamplestatusCode:k,DemoexamplethemeCode:R,DemoexamplealignCode:x,DemoexamplecardCode:E,DemoexamplespecialCode:D}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:r,tdDocTabs:a,tdDocPhone:i}=this.$refs,p="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/radio/radio";r&&(r.docInfo={title:"Radio 单选框",desc:"用于在预设的一组选项中执行单项选择，并呈现选择结果。"}),a&&(a.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],a.onchange=({detail:m})=>this.tab=m),i&&(i.qrcodeUrl=p),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),C={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},N={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"radio"},A=["tab"],S={name:"DEMO"},M=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-radio&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/radio/radio&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;t-radio-group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/radio-group/radio-group&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/GW6DrimI7hSV" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="纵向单选框">纵向单选框 <a class="header-anchor" href="#纵向单选框"></a></h3>`,7),T={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},q=["code"],B={slot:"action"},G=t("h3",{id:"横向单选框"},[n("横向单选框 "),t("a",{class:"header-anchor",href:"#横向单选框"})],-1),z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-horizontal tdesign-demo-item-- README"},O=["code"],j={slot:"action"},I=t("h3",{id:"单选框状态"},[n("单选框状态 "),t("a",{class:"header-anchor",href:"#单选框状态"})],-1),V={class:"tdesign-demo-wrapper tdesign-demo-item-- README-status tdesign-demo-item-- README"},$=["code"],P={slot:"action"},H=t("h3",{id:"勾选样式"},[n("勾选样式 "),t("a",{class:"header-anchor",href:"#勾选样式"})],-1),U={class:"tdesign-demo-wrapper tdesign-demo-item-- README-theme tdesign-demo-item-- README"},L=["code"],J={slot:"action"},K=t("h3",{id:"勾选显示位置"},[n("勾选显示位置 "),t("a",{class:"header-anchor",href:"#勾选显示位置"})],-1),W={class:"tdesign-demo-wrapper tdesign-demo-item-- README-align tdesign-demo-item-- README"},F=["code"],Q={slot:"action"},X=t("h3",{id:"非通栏单选样式"},[n("非通栏单选样式 "),t("a",{class:"header-anchor",href:"#非通栏单选样式"})],-1),Y={class:"tdesign-demo-wrapper tdesign-demo-item-- README-card tdesign-demo-item-- README"},Z=["code"],tt={slot:"action"},et=t("h3",{id:"特殊样式"},[n("特殊样式 "),t("a",{class:"header-anchor",href:"#特殊样式"})],-1),dt={class:"tdesign-demo-wrapper tdesign-demo-item-- README-special tdesign-demo-item-- README"},ot=["code"],nt={slot:"action"},at={ref:"tdDocPhone"},rt=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/radio/radio",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),it=[rt],st=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"radio"},null,-1),ct={name:"API"},lt=l('<h3 id="radio-props">Radio Props <a class="header-anchor" href="#radio-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>allow-uncheck</td><td>Boolean</td><td>false</td><td>是否允许取消选中</td><td>N</td></tr><tr><td>block</td><td>Boolean</td><td>true</td><td>是否为块级元素</td><td>N</td></tr><tr><td>checked</td><td>Boolean</td><td>false</td><td>是否选中</td><td>N</td></tr><tr><td>default-checked</td><td>Boolean</td><td>undefined</td><td>是否选中。非受控属性</td><td>N</td></tr><tr><td>content</td><td>String / Slot</td><td>-</td><td>单选内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>content-disabled</td><td>Boolean</td><td>false</td><td>是否禁用组件内容（content）触发选中</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>undefined</td><td>是否为禁用态</td><td>N</td></tr><tr><td>icon</td><td>String / Array / Slot</td><td>&#39;circle&#39;</td><td>自定义选中图标和非选中图标。使用 Array 时表示：<code>[选中态图标，非选中态图标]</code>。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标，值为 slot 时使用插槽。TS 类型：<code>&#39;circle&#39; \\| &#39;line&#39; \\| &#39;dot&#39; \\| Array&lt;string&gt;</code></td><td>N</td></tr><tr><td>label</td><td>String / Slot</td><td>-</td><td>主文案。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>max-content-row</td><td>Number</td><td>5</td><td>内容最大行数限制</td><td>N</td></tr><tr><td>max-label-row</td><td>Number</td><td>3</td><td>主文案最大行数限制</td><td>N</td></tr><tr><td>name</td><td>String</td><td>-</td><td>HTML 元素原生属性</td><td>N</td></tr><tr><td>placement</td><td>String</td><td>-</td><td>复选框和内容相对位置。优先级高于 RadioGroup.placement。Radio 单独存在时，默认值为 left。如果父组件存在 RadioGroup，默认值便由 RadioGroup.placement 决定。可选项：left/right</td><td>N</td></tr><tr><td>readonly</td><td>Boolean</td><td>undefined</td><td><code>1.8.6</code>。只读状态</td><td>N</td></tr><tr><td>value</td><td>String / Number / Boolean</td><td>false</td><td>单选按钮的值。TS 类型：<code>T</code> <code>type RadioValue = string \\| number \\| boolean</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/radio/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="radio-events">Radio Events <a class="header-anchor" href="#radio-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(checked: boolean)</code></td><td>值变化时触发</td></tr></tbody></table><h3 id="radio-external-classes">Radio External Classes <a class="header-anchor" href="#radio-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-border</td><td>边框样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-icon</td><td>图标样式类</td></tr><tr><td>t-class-label</td><td>标签样式类</td></tr></tbody></table><h3 id="radiogroup-props">RadioGroup Props <a class="header-anchor" href="#radiogroup-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>allow-uncheck</td><td>Boolean</td><td>false</td><td>是否允许取消选中</td><td>N</td></tr><tr><td>borderless</td><td>Boolean</td><td>false</td><td>是否开启无边框模式</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>undefined</td><td>是否禁用全部子单选框</td><td>N</td></tr><tr><td>icon</td><td>String / Array</td><td>&#39;circle&#39;</td><td>自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。使用 String 时，值为 circle 表示填充型图标、值为 line 表示描边型图标、值为 dot 表示圆点图标；仅在使用 options 时生效。TS 类型：<code>&#39;circle&#39; \\| &#39;line&#39; \\| &#39;dot&#39; \\| Array&lt;string&gt;</code></td><td>N</td></tr><tr><td>keys</td><td>Object</td><td>-</td><td>用来定义 value / label / disabled 在 <code>options</code> 中对应的字段别名。TS 类型：<code>KeysType</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>name</td><td>String</td><td>-</td><td>HTML 元素原生属性</td><td>N</td></tr><tr><td>options</td><td>Array</td><td>-</td><td>单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同。TS 类型：<code>Array&lt;RadioOption&gt;</code> <code>type RadioOption = string \\| number \\| RadioOptionObj</code> <code>interface RadioOptionObj { label?: string; value?: string \\| number; readonly?: boolean; disabled?: boolean; allowUncheck?: boolean; }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/radio-group/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>placement</td><td>String</td><td>left</td><td>复选框和内容相对位置。优先级低于 Radio.placement。可选项：left/right</td><td>N</td></tr><tr><td>readonly</td><td>Boolean</td><td>undefined</td><td><code>1.8.6</code>。只读状态</td><td>N</td></tr><tr><td>value</td><td>String / Number / Boolean</td><td>-</td><td>选中的值。TS 类型：<code>T</code> <code>type RadioValue = string \\| number \\| boolean</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/radio-group/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-value</td><td>String / Number / Boolean</td><td>undefined</td><td>选中的值。非受控属性。TS 类型：<code>T</code> <code>type RadioValue = string \\| number \\| boolean</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/radio-group/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="radiogroup-events">RadioGroup Events <a class="header-anchor" href="#radiogroup-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: RadioValue)</code></td><td>选中值发生变化时触发</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-radio-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-radio-border-color</td><td>@component-stroke</td><td>-</td></tr><tr><td>--td-radio-content-checked-color</td><td>@text-color-secondary</td><td>-</td></tr><tr><td>--td-radio-content-color</td><td>@text-color-secondary</td><td>-</td></tr><tr><td>--td-radio-content-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-radio-content-font-size</td><td>28rpx</td><td>-</td></tr><tr><td>--td-radio-content-line-height</td><td>44rpx</td><td>-</td></tr><tr><td>--td-radio-font-size</td><td>32rpx</td><td>-</td></tr><tr><td>--td-radio-icon-checked-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-radio-icon-color</td><td>@component-border</td><td>-</td></tr><tr><td>--td-radio-icon-disabled-bg-color</td><td>@bg-color-component-disabled</td><td>-</td></tr><tr><td>--td-radio-icon-disabled-color</td><td>@brand-color-disabled</td><td>-</td></tr><tr><td>--td-radio-icon-size</td><td>48rpx</td><td>-</td></tr><tr><td>--td-radio-label-checked-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-radio-label-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-radio-label-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-radio-label-line-height</td><td>48rpx</td><td>-</td></tr><tr><td>--td-radio-vertical-padding</td><td>32rpx</td><td>-</td></tr></tbody></table>',13),pt=[lt],mt={name:"DESIGN"},ht=l('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当用户需要从一组数据选择一个选项时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="单选框与索引、搜索框组合使用，便于用户从大量的选项中，快速地找到目标选项。">单选框与<a href="./indexes">索引</a>、<a href="./search">搜索框</a>组合使用，便于用户从大量的选项中，快速地找到目标选项。 <a class="header-anchor" href="#单选框与索引、搜索框组合使用，便于用户从大量的选项中，快速地找到目标选项。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/radio/radio-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/radio/radio-2.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="带有详情信息的选项，建议就近展开相关内容，不太建议用单选框触发一个弹窗。">带有详情信息的选项，建议就近展开相关内容，不太建议用单选框触发一个弹窗。 <a class="header-anchor" href="#带有详情信息的选项，建议就近展开相关内容，不太建议用单选框触发一个弹窗。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/radio/radio-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/radio/radio-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div><hr><h5 id="不建议用单选框开启-关闭一个功能，建议使用开关组件。">不建议用单选框开启/关闭一个功能，建议使用开关组件。 <a class="header-anchor" href="#不建议用单选框开启-关闭一个功能，建议使用开关组件。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/radio/radio-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/radio/radio-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./checkbox">多选框</a></td><td style="text-align:left;">当用户需要从一组数据选择多个选项时使用。</td></tr></tbody></table>',14),gt=[ht],ut=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416556303"})],-1),bt=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function vt(e,r,a,i,p,m){const d=b("Stackblitz");return v(),u("td-doc-content",C,[t("td-doc-header",N,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,A),s(t("div",null,[t("div",S,[M,t("div",T,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",B,[o(d,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,q)]),G,t("div",z,[t("td-doc-demo",{code:e.DemoexamplehorizontalCode,language:"markup","show-code":"",mode:"open","demo-name":"horizontal","component-name":" README"},[t("div",j,[o(d,{"demo-name":"horizontal","component-name":" README",code:e.DemoexamplehorizontalCode},null,8,["code"])])],8,O)]),I,t("div",V,[t("td-doc-demo",{code:e.DemoexamplestatusCode,language:"markup","show-code":"",mode:"open","demo-name":"status","component-name":" README"},[t("div",P,[o(d,{"demo-name":"status","component-name":" README",code:e.DemoexamplestatusCode},null,8,["code"])])],8,$)]),H,t("div",U,[t("td-doc-demo",{code:e.DemoexamplethemeCode,language:"markup","show-code":"",mode:"open","demo-name":"theme","component-name":" README"},[t("div",J,[o(d,{"demo-name":"theme","component-name":" README",code:e.DemoexamplethemeCode},null,8,["code"])])],8,L)]),K,t("div",W,[t("td-doc-demo",{code:e.DemoexamplealignCode,language:"markup","show-code":"",mode:"open","demo-name":"align","component-name":" README"},[t("div",Q,[o(d,{"demo-name":"align","component-name":" README",code:e.DemoexamplealignCode},null,8,["code"])])],8,F)]),X,t("div",Y,[t("td-doc-demo",{code:e.DemoexamplecardCode,language:"markup","show-code":"",mode:"open","demo-name":"card","component-name":" README"},[t("div",tt,[o(d,{"demo-name":"card","component-name":" README",code:e.DemoexamplecardCode},null,8,["code"])])],8,Z)]),et,t("div",dt,[t("td-doc-demo",{code:e.DemoexamplespecialCode,language:"markup","show-code":"",mode:"open","demo-name":"special","component-name":" README"},[t("div",nt,[o(d,{"demo-name":"special","component-name":" README",code:e.DemoexamplespecialCode},null,8,["code"])])],8,ot)])]),t("td-doc-phone",at,it,512),st],512),[[c,e.tab==="demo"]]),s(t("div",ct,pt,512),[[c,e.tab==="api"]]),s(t("div",mt,gt,512),[[c,e.tab==="design"]]),ut,bt],512)}const yt=h(w,[["render",vt]]);export{yt as default};
