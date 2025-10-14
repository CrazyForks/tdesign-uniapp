import{_ as m,d as b,c as g,a as t,w as r,v as s,b as l,e as o,f as i,r as u,o as x}from"./sites-taiaIPy6.js";import{P as k}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view>
    <t-checkbox-group
      :value="current"
      :options="options"
      @change="handleGroupChange"
    />
  </view>
</template>

<script>
import tCheckboxGroup from 'tdesign-uniapp/checkbox-group/checkbox-group';

export default {
  components: {
    tCheckboxGroup,
  },
  data() {
    return {
      current: ['checkbox1', 'checkbox2'],
      options: [
        {
          label: '多选',
          value: 'checkbox1',
        },
        {
          label: '多选',
          value: 'checkbox2',
        },
        {
          label: '多选标题多行多选标题多行多选标题多行多选标题多行多选标题多行多选标题多行',
          value: 'checkbox3',
          maxLabelRow: 2,
        },
        {
          label: '多选',
          value: 'checkbox4',
          content: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
          maxContentRow: 2,
        },
      ],
    };
  },
  created() {},
  methods: {
    handleGroupChange(event) {
      console.log('change: ', event);
      const { value } = event;
      this.current = value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,f=`<template>
  <view>
    <t-checkbox-group
      t-class="box"
      borderless
      :value="current"
      @change="onChange"
    >
      <t-checkbox
        :block="false"
        value="checkbox1"
        label="多选标题"
      />
      <t-checkbox
        :block="false"
        value="checkbox2"
        label="多选标题"
      />
      <t-checkbox
        :block="false"
        value="checkbox3"
        label="上限四字"
      />
    </t-checkbox-group>
  </view>
</template>

<script>
import tCheckboxGroup from 'tdesign-uniapp/checkbox-group/checkbox-group';
import tCheckbox from 'tdesign-uniapp/checkbox/checkbox';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tCheckboxGroup,
    tCheckbox,
  },
  data() {
    return {
      current: ['checkbox1', 'checkbox2'],
    };
  },
  created() {},
  /**
     * 组件的方法列表
     */
  methods: {
    onChange(event) {
      console.log('checkbox', event.value);
      this.current =  event.value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <t-checkbox-group
      :options="options"
      :default-value="checkAllValues"
      @change="onCheckAllChange"
    />
  </view>
</template>

<script>
import tCheckboxGroup from 'tdesign-uniapp/checkbox-group/checkbox-group';
export default {
  components: {
    tCheckboxGroup,
  },
  data() {
    return {
      options: [
        {
          label: '全选',
          checkAll: true,
        },
        {
          label: '多选',
          value: 1,
        },
        {
          label: '多选',
          value: 2,
        },
        {
          label: '多选',
          value: 3,
          content: '单选描述信息单选描述信息单选描述信息单选描述信息单选描述信息单选描述信息单选描述信息',
        },
      ],
      checkAllValues: [1, 2, 3, ''],
    };
  },
  created() {},
  methods: {
    onCheckAllChange(event) {
      console.log('change: ', event);
      this.checkAllValues = event.value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,C=`<template>
  <view>
    <t-checkbox-group
      :default-value="['checkbox1']"
      disabled
    >
      <t-checkbox
        value="checkbox1"
        label="选项禁用-已选"
      />
      <t-checkbox
        value="checkbox2"
        label="选项禁用-默认"
      />
    </t-checkbox-group>
  </view>
</template>

<script>
import tCheckboxGroup from 'tdesign-uniapp/checkbox-group/checkbox-group';
import tCheckbox from 'tdesign-uniapp/checkbox/checkbox';
export default {
  components: {
    tCheckboxGroup,
    tCheckbox,
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
    <t-checkbox
      label="多选"
      icon="line"
      default-checked
    />

    <view
      style="height: 32rpx"
    />

    <t-checkbox
      label="多选"
      icon="rectangle"
      default-checked
    />

    <view
      style="height: 32rpx"
    />

    <t-checkbox
      value="checkbox1"
      label="图片图标"
      :icon="[activeImage, inActiveImage]"
    />
  </view>
</template>

<script>
import tCheckbox from 'tdesign-uniapp/checkbox/checkbox';
export default {
  components: {
    tCheckbox,
  },
  data() {
    return {
      demoCheckbox2: ['checkbox2', 'checkbox3'],
      activeImage: 'https://tdesign.gtimg.com/mobile/demos/checkbox-checked.png',
      inActiveImage: 'https://tdesign.gtimg.com/mobile/demos/checkbox.png',
    };
  },
  created() {},
  /**
     * 组件的方法列表
     */
  methods: {
    onChange(event) {
      console.log('checkbox', event.value);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,E=`<template>
  <view>
    <t-checkbox
      value="1"
      label="多选"
      default-checked
    />

    <view
      style="height: 32rpx"
    />

    <t-checkbox
      value="2"
      label="多选"
      placement="right"
      default-checked
    />
  </view>
</template>

<script>
import tCheckbox from 'tdesign-uniapp/checkbox/checkbox';
export default {
  components: {
    tCheckbox,
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
    <t-checkbox-group
      t-class="theme-card"
      :default-value="['1', '2']"
    >
      <t-checkbox
        value="1"
        label="多选"
      />
      <t-checkbox
        value="2"
        label="多选"
      />
      <t-checkbox
        value="3"
        label="多选标题多行多选标题多行多选标题多行多选标题多行多选标题多行多选标题"
      />
    </t-checkbox-group>
  </view>
</template>

<script>
import tCheckboxGroup from 'tdesign-uniapp/checkbox-group/checkbox-group';
import tCheckbox from 'tdesign-uniapp/checkbox/checkbox';
export default {
  components: {
    tCheckboxGroup,
    tCheckbox,
  },
  data() {
    return {
      checked: true,
    };
  },
  created() {},
  /**
     * 组件的方法列表
     */
  methods: {
    changeChecked(e) {
      this.checked = e.checked;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,A=`<template>
  <view>
    <t-checkbox-group
      :value="value"
      @change="onChange"
    >
      <view
        v-for="(item, index) in 3"
        :key="index"
        :class="'card ' + (contain(value, index) ? 'card--active' : '')"
      >
        <t-icon
          v-if="contain(value, index)"
          name="check"
          t-class="card__icon"
          :aria-hidden="true"
        />

        <t-checkbox
          :value="index"
          label="多选"
          content="描述信息描述信息描述信息描述信息描述信息"
          icon="none"
          borderless
        />
      </view>
    </t-checkbox-group>

    <view
      class="demo-desc"
      style="margin: 48rpx 32rpx 32rpx"
    >
      横向卡片多选框
    </view>

    <t-checkbox-group
      t-class="horizontal-box"
      :value="value1"
      @change="onChange1"
    >
      <view
        v-for="(item, index) in 3"
        :key="index"
        :class="'card ' + (contain(value1, index) ? 'card--active' : '')"
      >
        <t-icon
          v-if="contain(value1, index)"
          name="check"
          t-class="card__icon"
          :aria-hidden="true"
        />

        <t-checkbox
          :value="index"
          label="多选"
          icon="none"
          borderless
        />
      </view>
    </t-checkbox-group>
  </view>
</template>
<script>
import tCheckboxGroup from 'tdesign-uniapp/checkbox-group/checkbox-group';
import tCheckbox from 'tdesign-uniapp/checkbox/checkbox';
import tIcon from 'tdesign-uniapp/icon/icon';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tCheckboxGroup,
    tCheckbox,
    tIcon,
  },
  data() {
    return {
      value: [0, 1],
      value1: [0, 1],
    };
  },
  created() {},
  methods: {
    contain(arr, key) {
      return arr.indexOf(key) > -1;
    },
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
`,w=b({data(){return{DemoexamplebaseCode:v,DemoexamplehorizontalCode:f,DemoexampleallCode:_,DemoexamplestatusCode:C,DemoexampletypeCode:y,DemoexamplerightCode:E,DemoexamplecardCode:D,DemoexamplespecialCode:A}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:c,tdDocTabs:d,tdDocPhone:a}=this.$refs,h="https://novlan1.github.io/tdesign-uniapp#/pages-more/checkbox/checkbox";c&&(c.docInfo={title:"Checkbox 多选框",desc:"用于预设的一组选项中执行多项选择，并呈现选择结果。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:p})=>this.tab=p),a&&(a.qrcodeUrl=h),k.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),N={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},M={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"checkbox"},R=["tab"],S={name:"DEMO"},G=l(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-checkbox&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/checkbox/checkbox&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;t-checkbox-group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/checkbox-group/checkbox-group&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/2M5mxim27YSp" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>纵向多选框</p>`,8),T={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},q=["code"],B={slot:"action"},O=t("p",null,"横向多选框",-1),z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-horizontal tdesign-demo-item-- README"},I=["code"],j={slot:"action"},V=t("p",null,"带全选多选框",-1),$={class:"tdesign-demo-wrapper tdesign-demo-item-- README-all tdesign-demo-item-- README"},P=["code"],H={slot:"action"},L=t("h3",{id:"组件状态"},[i("组件状态 "),t("a",{class:"header-anchor",href:"#组件状态"})],-1),F=t("p",null,"多选框状态",-1),U={class:"tdesign-demo-wrapper tdesign-demo-item-- README-status tdesign-demo-item-- README"},J=["code"],K={slot:"action"},Y=t("h3",{id:"组件样式"},[i("组件样式 "),t("a",{class:"header-anchor",href:"#组件样式"})],-1),Q=t("p",null,"勾选样式",-1),W={class:"tdesign-demo-wrapper tdesign-demo-item-- README-type tdesign-demo-item-- README"},X=["code"],Z={slot:"action"},tt=t("p",null,"勾选显示位置",-1),et={class:"tdesign-demo-wrapper tdesign-demo-item-- README-right tdesign-demo-item-- README"},nt=["code"],ot={slot:"action"},dt=t("p",null,"非通栏多选样式",-1),ct={class:"tdesign-demo-wrapper tdesign-demo-item-- README-card tdesign-demo-item-- README"},at=["code"],rt={slot:"action"},st=t("h3",{id:"组件规格"},[i("组件规格 "),t("a",{class:"header-anchor",href:"#组件规格"})],-1),lt=t("p",null,"多选框尺寸规格",-1),it={class:"tdesign-demo-wrapper tdesign-demo-item-- README-special tdesign-demo-item-- README"},ht=["code"],pt={slot:"action"},mt={ref:"tdDocPhone"},bt=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp#/pages-more/checkbox/checkbox",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),gt=[bt],ut=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"checkbox"},null,-1),xt={name:"API"},kt=l('<h3 id="checkbox-props">Checkbox Props <a class="header-anchor" href="#checkbox-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>block</td><td>Boolean</td><td>true</td><td>是否为块级元素</td><td>N</td></tr><tr><td>borderless</td><td>Boolean</td><td>undefined</td><td>是否开启无边框模式</td><td>N</td></tr><tr><td>check-all</td><td>Boolean</td><td>false</td><td>用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用</td><td>N</td></tr><tr><td>checked</td><td>Boolean</td><td>false</td><td>是否选中</td><td>N</td></tr><tr><td>default-checked</td><td>Boolean</td><td>undefined</td><td>是否选中。非受控属性</td><td>N</td></tr><tr><td>content</td><td>String / Slot</td><td>-</td><td>多选框内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>content-disabled</td><td>Boolean</td><td>-</td><td>是否禁用组件内容（content）触发选中</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>undefined</td><td>是否禁用组件。如果父组件存在 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。优先级：Checkbox.disabled &gt; CheckboxGroup.disabled &gt; Form.disabled</td><td>N</td></tr><tr><td>icon</td><td>String / Array</td><td>&#39;circle&#39;</td><td>自定义选中图标和非选中图标。使用 Array 时表示：<code>[选中态图标，非选中态图标，半选中态图标]</code>。使用 String 时，值为 circle 表示填充圆形图标、值为 line 表示描边型图标、值为 rectangle 表示填充矩形图标。TS 类型：<code>&#39;circle&#39; \\| &#39;line&#39; \\| &#39;rectangle&#39; \\| string[]</code></td><td>N</td></tr><tr><td>indeterminate</td><td>Boolean</td><td>false</td><td>是否为半选</td><td>N</td></tr><tr><td>label</td><td>String / Slot</td><td>-</td><td>主文案。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>max-content-row</td><td>Number</td><td>5</td><td>内容最大行数限制</td><td>N</td></tr><tr><td>max-label-row</td><td>Number</td><td>3</td><td>主文案最大行数限制</td><td>N</td></tr><tr><td>name</td><td>String</td><td>-</td><td>HTML 元素原生属性</td><td>N</td></tr><tr><td>placement</td><td>String</td><td>left</td><td>多选框和内容相对位置。可选项：left/right</td><td>N</td></tr><tr><td>readonly</td><td>Boolean</td><td>undefined</td><td>只读状态</td><td>N</td></tr><tr><td>value</td><td>String / Number / Boolean</td><td>-</td><td>多选框的值。TS 类型：<code>string \\| number \\| boolean</code></td><td>N</td></tr></tbody></table><h3 id="checkbox-events">Checkbox Events <a class="header-anchor" href="#checkbox-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(checked: boolean, context: { value: boolean\\|number\\|string, label: boolean\\|number\\|string })</code></td><td>值变化时触发。<code>context</code> 表示当前点击项内容</td></tr></tbody></table><h3 id="checkbox-external-classes">Checkbox External Classes <a class="header-anchor" href="#checkbox-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-border</td><td>边框样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-icon</td><td>图标样式类</td></tr><tr><td>t-class-label</td><td>标签样式类</td></tr></tbody></table><h3 id="checkboxgroup-props">CheckboxGroup Props <a class="header-anchor" href="#checkboxgroup-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>borderless</td><td>Boolean</td><td>false</td><td>是否开启无边框模式。优先级低于 Checkbox.borderless</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>undefined</td><td>是否禁用组件。优先级：Form.disabled &lt; CheckboxGroup.disabled &lt; Checkbox.disabled</td><td>N</td></tr><tr><td>keys</td><td>Object</td><td>-</td><td>用来定义 value / label / disabled 在 <code>options</code> 中对应的字段别名。TS 类型：<code>KeysType</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>max</td><td>Number</td><td>undefined</td><td>支持最多选中的数量</td><td>N</td></tr><tr><td>name</td><td>String</td><td>-</td><td>统一设置内部复选框 HTML 属性</td><td>N</td></tr><tr><td>options</td><td>Array</td><td>[]</td><td>以配置形式设置子元素。示例1：<code>[&#39;北京&#39;, &#39;上海&#39;]</code> ，示例2: <code>[{ label: &#39;全选&#39;, checkAll: true }, { label: &#39;上海&#39;, value: &#39;shanghai&#39; }]</code>。checkAll 值为 true 表示当前选项为「全选选项」。TS 类型：<code>Array&lt;CheckboxOption&gt;</code> <code>type CheckboxOption = string \\| number \\| CheckboxOptionObj</code> <code>interface CheckboxOptionObj { label?: string; value?: string \\| number; disabled?: boolean; checkAll?: true }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/checkbox-group/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>readonly</td><td>Boolean</td><td>undefined</td><td>只读状态</td><td>N</td></tr><tr><td>value</td><td>Array</td><td>[]</td><td>选中值。TS 类型：<code>T</code> <code>type CheckboxGroupValue = Array&lt;string \\| number \\| boolean&gt;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/checkbox-group/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-value</td><td>Array</td><td>undefined</td><td>选中值。非受控属性。TS 类型：<code>T</code> <code>type CheckboxGroupValue = Array&lt;string \\| number \\| boolean&gt;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/checkbox-group/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="checkboxgroup-events">CheckboxGroup Events <a class="header-anchor" href="#checkboxgroup-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: CheckboxGroupValue, context: { value: boolean\\|number\\|string, label: boolean\\|number\\|string })</code></td><td>值变化时触发。<code>context</code> 表示当前点击项内容</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-checkbox-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-checkbox-border-color</td><td>@component-stroke</td><td>-</td></tr><tr><td>--td-checkbox-description-color</td><td>@text-color-secondary</td><td>-</td></tr><tr><td>--td-checkbox-description-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-checkbox-description-line-height</td><td>44rpx</td><td>-</td></tr><tr><td>--td-checkbox-font-size</td><td>32rpx</td><td>-</td></tr><tr><td>--td-checkbox-icon-checked-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-checkbox-icon-color</td><td>@component-border</td><td>-</td></tr><tr><td>--td-checkbox-icon-disabled-bg-color</td><td>@bg-color-component-disabled</td><td>-</td></tr><tr><td>--td-checkbox-icon-disabled-color</td><td>@brand-color-disabled</td><td>-</td></tr><tr><td>--td-checkbox-icon-size</td><td>48rpx</td><td>-</td></tr><tr><td>--td-checkbox-tag-active-bg-color</td><td>@brand-color-light</td><td>-</td></tr><tr><td>--td-checkbox-tag-active-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-checkbox-title-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-checkbox-title-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-checkbox-title-line-height</td><td>48rpx</td><td>-</td></tr><tr><td>--td-checkbox-vertical-padding</td><td>32rpx</td><td>-</td></tr></tbody></table>',13),vt=[kt],ft={name:"DESIGN"},_t=l('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当用户需要从一组数据选择多个选项时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="多选框与索引、搜索框组合使用，便于用户从大量的选项中，快速地找到目标选项。">多选框与<a href="./indexes">索引</a>、<a href="./search">搜索框</a>组合使用，便于用户从大量的选项中，快速地找到目标选项。 <a class="header-anchor" href="#多选框与索引、搜索框组合使用，便于用户从大量的选项中，快速地找到目标选项。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/check-box/check-box-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/check-box/check-box-2.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="带有详情信息的选项，建议就近展开相关内容，不建议在触发一个弹窗。">带有详情信息的选项，建议就近展开相关内容，不建议在触发一个弹窗。 <a class="header-anchor" href="#带有详情信息的选项，建议就近展开相关内容，不建议在触发一个弹窗。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/check-box/check-box-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/check-box/check-box-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div><hr><h5 id="在选项较多的场景下执行多选时，建议展示用户已选数量。">在选项较多的场景下执行多选时，建议展示用户已选数量。 <a class="header-anchor" href="#在选项较多的场景下执行多选时，建议展示用户已选数量。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/check-box/check-box-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./radio">单选框</a></td><td style="text-align:left;">当用户需要从一组数据选择一个选项时使用。</td></tr></tbody></table>',14),Ct=[_t],yt=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760415890933"})],-1),Et=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function Dt(e,c,d,a,h,p){const n=u("Stackblitz");return x(),g("td-doc-content",N,[t("td-doc-header",M,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,R),r(t("div",null,[t("div",S,[G,t("div",T,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",B,[o(n,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,q)]),O,t("div",z,[t("td-doc-demo",{code:e.DemoexamplehorizontalCode,language:"markup","show-code":"",mode:"open","demo-name":"horizontal","component-name":" README"},[t("div",j,[o(n,{"demo-name":"horizontal","component-name":" README",code:e.DemoexamplehorizontalCode},null,8,["code"])])],8,I)]),V,t("div",$,[t("td-doc-demo",{code:e.DemoexampleallCode,language:"markup","show-code":"",mode:"open","demo-name":"all","component-name":" README"},[t("div",H,[o(n,{"demo-name":"all","component-name":" README",code:e.DemoexampleallCode},null,8,["code"])])],8,P)]),L,F,t("div",U,[t("td-doc-demo",{code:e.DemoexamplestatusCode,language:"markup","show-code":"",mode:"open","demo-name":"status","component-name":" README"},[t("div",K,[o(n,{"demo-name":"status","component-name":" README",code:e.DemoexamplestatusCode},null,8,["code"])])],8,J)]),Y,Q,t("div",W,[t("td-doc-demo",{code:e.DemoexampletypeCode,language:"markup","show-code":"",mode:"open","demo-name":"type","component-name":" README"},[t("div",Z,[o(n,{"demo-name":"type","component-name":" README",code:e.DemoexampletypeCode},null,8,["code"])])],8,X)]),tt,t("div",et,[t("td-doc-demo",{code:e.DemoexamplerightCode,language:"markup","show-code":"",mode:"open","demo-name":"right","component-name":" README"},[t("div",ot,[o(n,{"demo-name":"right","component-name":" README",code:e.DemoexamplerightCode},null,8,["code"])])],8,nt)]),dt,t("div",ct,[t("td-doc-demo",{code:e.DemoexamplecardCode,language:"markup","show-code":"",mode:"open","demo-name":"card","component-name":" README"},[t("div",rt,[o(n,{"demo-name":"card","component-name":" README",code:e.DemoexamplecardCode},null,8,["code"])])],8,at)]),st,lt,t("div",it,[t("td-doc-demo",{code:e.DemoexamplespecialCode,language:"markup","show-code":"",mode:"open","demo-name":"special","component-name":" README"},[t("div",pt,[o(n,{"demo-name":"special","component-name":" README",code:e.DemoexamplespecialCode},null,8,["code"])])],8,ht)])]),t("td-doc-phone",mt,gt,512),ut],512),[[s,e.tab==="demo"]]),r(t("div",xt,vt,512),[[s,e.tab==="api"]]),r(t("div",ft,Ct,512),[[s,e.tab==="design"]]),yt,Et],512)}const Nt=m(w,[["render",Dt]]);export{Nt as default};
