import{_ as g,d as b,c as h,a as t,w as a,v as s,b as i,f as p,e as l,r as w,o as u}from"./sites-QsDL4Fx-.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view>
    <t-dropdown-menu>
      <t-dropdown-item
        :options="product.options"
        placement="right"
        :value="product.value"
        @change="onChange"
      />
      <t-dropdown-item
        :options="sorter.options"
        placement="right"
        :default-value="sorter.value"
      />
    </t-dropdown-menu>
  </view>
</template>

<script>
import tDropdownMenu from 'tdesign-uniapp/dropdown-menu/dropdown-menu.vue';
import tDropdownItem from 'tdesign-uniapp/dropdown-item/dropdown-item.vue';
export default {
  components: {
    tDropdownMenu,
    tDropdownItem,
  },
  data() {
    return {
      product: {
        value: 'all',
        options: [
          {
            value: 'all',
            label: '全部产品',
          },
          {
            value: 'new',
            label: '最新产品',
          },
          {
            value: 'hot',
            label: '最火产品',
          },
          {
            value: 'disabled',
            label: '禁用选项',
            disabled: true,
          },
        ],
      },
      sorter: {
        value: 'default',
        options: [
          {
            value: 'default',
            label: '默认排序',
          },
          {
            value: 'price',
            label: '价格从高到低',
          },
        ],
      },
    };
  },
  created() {},
  methods: {
    onChange(e) {
      this.product.value = e.value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <t-dropdown-menu>
      <t-dropdown-item
        label="单列多选"
        :options="multipleSelect.options"
        :value="multipleSelect.value"
        multiple
        @change="handleMultipleSelect"
      />
      <t-dropdown-item
        label="双列多选"
        options-columns="2"
        :options="doubleColumnsOptions"
        :default-value="['option_1', 'option_2']"
        multiple
      />
      <t-dropdown-item
        label="三列多选"
        options-columns="3"
        :options="tripleColumnsOptions"
        :default-value="['option_1', 'option_2', 'option_3']"
        multiple
      />
    </t-dropdown-menu>
  </view>
</template>

<script>
import tDropdownMenu from 'tdesign-uniapp/dropdown-menu/dropdown-menu.vue';
import tDropdownItem from 'tdesign-uniapp/dropdown-item/dropdown-item.vue';
const chineseNumber = '一二三四五六七八九十'.split('');
const singleSelectOptions = new Array(8).fill(null)
  .map((_, i) => ({
    label: \`选项\${chineseNumber[i]}\`,
    value: \`option_\${i + 1}\`,
    disabled: false,
  }));
singleSelectOptions.push({
  label: '禁用选项',
  value: 'disabled',
  disabled: true,
});
const doubleColumnsOptions = [
  ...singleSelectOptions,
  {
    label: '禁用选项',
    value: 'disabled',
    disabled: true,
  },
];
const tripleColumnsOptions = [
  ...doubleColumnsOptions,
  {
    label: '禁用选项',
    value: 'disabled',
    disabled: true,
  },
];
tripleColumnsOptions.splice(8, 0, {
  label: \`选项\${chineseNumber[8]}\`,
  value: \`option_\${9}\`,
  disabled: false,
});
export default {
  components: {
    tDropdownMenu,
    tDropdownItem,
  },
  data() {
    return {
      multipleSelect: {
        value: ['option_1'],
        options: singleSelectOptions,
      },
      doubleColumnsOptions,
      tripleColumnsOptions,
    };
  },
  created() {},
  methods: {
    handleMultipleSelect(e) {
      this.multipleSelect.value = e.value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <t-dropdown-menu>
      <t-dropdown-item
        label="树形双列"
        options-layout="tree"
        :options="doubleColumnsTree.options"
        :value="doubleColumnsTree.value"
        @change="handleTreeSelect"
      />
      <t-dropdown-item
        label="选项最多八字树形三列"
        options-layout="tree"
        :options="tripleColumnsTree.options"
        :default-value="tripleColumnsTree.value"
        multiple
      />
    </t-dropdown-menu>
  </view>
</template>

<script>
import tDropdownMenu from 'tdesign-uniapp/dropdown-menu/dropdown-menu.vue';
import tDropdownItem from 'tdesign-uniapp/dropdown-item/dropdown-item.vue';
const chineseNumber = '一二三四五六七八九十'.split('');
const generateTree = function (deep = 0, count = 10, prefix) {
  const ans = [];
  for (let i = 0; i < count; i += 1) {
    const value = prefix ? \`\${prefix}-\${i}\` : \`\${i}\`;
    const rect = {
      label: \`选项\${chineseNumber[i]}\`,
      value,
    };
    if (deep > 0) {
      rect.options = generateTree(deep - 1, 10, value);
    }
    ans.push(rect);
  }
  return ans;
};
export default {
  components: {
    tDropdownMenu,
    tDropdownItem,
  },
  data() {
    return {
      doubleColumnsTree: {
        options: generateTree(1),
        value: ['0', '0-0'],
      },
      tripleColumnsTree: {
        options: generateTree(2),
        value: ['0', '0-0', ['0-0-0', '0-0-1']],
      },
    };
  },
  created() {},
  methods: {
    handleTreeSelect(e) {
      this.doubleColumnsTree.value = e.value;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,D=b({data(){return{DemoexamplesingleCode:v,DemoexamplemultiCode:_,DemoexampletreeCode:y}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:n,tdDocTabs:d,tdDocPhone:o}=this.$refs,c="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/dropdown-menu/dropdown-menu";n&&(n.docInfo={title:"DropdownMenu 下拉菜单",desc:"菜单呈现数个并列的选项类目，用于整个页面的内容筛选，由菜单面板和菜单选项组成。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:m})=>this.tab=m),o&&(o.qrcodeUrl=c),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),x={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},S={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"message","component-name":"dropdown-menu"},k=["tab"],C={name:"DEMO"},N={style:{background:"#ecf2fe",display:"flex","align-items":"center","line-height":"20px",padding:"14px 24px","border-radius":"3px",color:"#555a65"}},E={fill:"none",viewBox:"0 0 16 16",width:"16px",height:"16px",style:{"margin-right":"5px"}},M=t("path",{fill:"#0052d9",d:"M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z",fillOpacity:"0.9"},null,-1),T=[M],A=i(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><h3 id="引入组件">引入组件 <a class="header-anchor" href="#引入组件"></a></h3><p>在 <code>app.json</code> 或 <code>page.json</code> 中引入组件：</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-dropdown-menu&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/dropdown-menu/dropdown-menu&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;t-dropdown-item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/dropdown-item/dropdown-item&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/T58agimj75SB" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="单选下拉菜单">单选下拉菜单 <a class="header-anchor" href="#单选下拉菜单"></a></h3>`,8),O={class:"tdesign-demo-wrapper tdesign-demo-item-- README-single tdesign-demo-item-- README"},q=["code"],V={slot:"action"},$=t("h3",{id:"多列下拉菜单"},[p("多列下拉菜单 "),t("a",{class:"header-anchor",href:"#多列下拉菜单"})],-1),I={class:"tdesign-demo-wrapper tdesign-demo-item-- README-multi tdesign-demo-item-- README"},R=["code"],j={slot:"action"},z=t("h3",{id:"树形下拉菜单"},[p("树形下拉菜单 "),t("a",{class:"header-anchor",href:"#树形下拉菜单"})],-1),B={class:"tdesign-demo-wrapper tdesign-demo-item-- README-tree tdesign-demo-item-- README"},P=["code"],H={slot:"action"},U={ref:"tdDocPhone"},G=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/dropdown-menu/dropdown-menu",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),J=[G],K=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"dropdown-menu"},null,-1),F={name:"API"},L=i('<h3 id="dropdownmenu-props">DropdownMenu Props <a class="header-anchor" href="#dropdownmenu-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>arrow-icon</td><td>String / Object</td><td>&#39;caret-down-small&#39;</td><td>自定义箭头图标</td><td>N</td></tr><tr><td>close-on-click-overlay</td><td>Boolean</td><td>true</td><td>是否在点击遮罩层后关闭菜单</td><td>N</td></tr><tr><td>duration</td><td>String / Number</td><td>200</td><td>动画时长</td><td>N</td></tr><tr><td>show-overlay</td><td>Boolean</td><td>true</td><td>是否显示遮罩层</td><td>N</td></tr><tr><td>z-index</td><td>Number</td><td>11600</td><td>菜单栏 z-index 层级</td><td>N</td></tr></tbody></table><h3 id="dropdownmenu-events">DropdownMenu Events <a class="header-anchor" href="#dropdownmenu-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>close</td><td>-</td><td>菜单关闭时触发</td></tr><tr><td>open</td><td>-</td><td>菜单展开时触发</td></tr></tbody></table><h3 id="dropdownmenu-external-classes">DropdownMenu External Classes <a class="header-anchor" href="#dropdownmenu-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-icon</td><td>图标样式类</td></tr><tr><td>t-class-item</td><td>选项样式类</td></tr><tr><td>t-class-label</td><td>标签样式类</td></tr></tbody></table><h3 id="dropdownitem-props">DropdownItem Props <a class="header-anchor" href="#dropdownitem-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>false</td><td>是否禁用操作项</td><td>N</td></tr><tr><td>footer</td><td>Slot</td><td>-</td><td>底部。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>keys</td><td>Object</td><td>-</td><td>用来定义 value / label / disabled 在 <code>options</code> 中对应的字段别名。TS 类型：<code>KeysType</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>label</td><td>String</td><td>-</td><td>标题</td><td>N</td></tr><tr><td>multiple</td><td>Boolean</td><td>false</td><td>是否多选</td><td>N</td></tr><tr><td>options</td><td>Array</td><td>[]</td><td>选项数据。TS 类型：<code>Array&lt;DropdownOption&gt;</code> <code>interface DropdownOption { label: string; disabled: boolean; value: DropdownValue; }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/dropdown-item/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>options-columns</td><td>String / Number</td><td>1</td><td>选项分栏（1-3）</td><td>N</td></tr><tr><td>options-layout</td><td>String</td><td>columns</td><td>已废弃。选项排列；不再支持 tree 布局，可与 treeSelect 配合使用</td><td>N</td></tr><tr><td>placement</td><td>String</td><td>left</td><td>复选框和内容相对位置，仅单选菜单栏有效。可选项：left/right</td><td>N</td></tr><tr><td>value</td><td>String / Number / Array</td><td>undefined</td><td>选中值。TS 类型：<code>DropdownValue </code> <code>type DropdownValue = string \\| number \\| Array&lt;DropdownValue&gt;;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/dropdown-item/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-value</td><td>String / Number / Array</td><td>undefined</td><td>选中值。非受控属性。TS 类型：<code>DropdownValue </code> <code>type DropdownValue = string \\| number \\| Array&lt;DropdownValue&gt;;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/dropdown-item/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="dropdownitem-events">DropdownItem Events <a class="header-anchor" href="#dropdownitem-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: DropdownValue)</code></td><td>值改变时触发</td></tr><tr><td>close</td><td>-</td><td>关闭时触发</td></tr><tr><td>confirm</td><td><code>(value: DropdownValue)</code></td><td>点击确认时触发</td></tr><tr><td>reset</td><td>-</td><td>点击重置时触发</td></tr></tbody></table><h3 id="dropdownitem-external-classes">DropdownItem External Classes <a class="header-anchor" href="#dropdownitem-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-column</td><td>菜单列样式类</td></tr><tr><td>t-class-column-item</td><td>菜单列选项样式类</td></tr><tr><td>t-class-column-item-label</td><td>菜单列选项标签样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-footer</td><td>底部样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-dropdown-menu-active-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-dropdown-menu-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-dropdown-menu-border-width</td><td>1px</td><td>-</td></tr><tr><td>--td-dropdown-menu-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-dropdown-menu-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-dropdown-menu-font-size</td><td>28rpx</td><td>-</td></tr><tr><td>--td-dropdown-menu-height</td><td>96rpx</td><td>-</td></tr><tr><td>--td-dropdown-menu-icon-size</td><td>40rpx</td><td>-</td></tr><tr><td>--td-dropdown-body-max-height</td><td>560rpx</td><td>-</td></tr><tr><td>--td-dropdown-menu-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-tree-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-tree-item-active-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-tree-item-font-size</td><td>32rpx</td><td>-</td></tr><tr><td>--td-tree-item-height</td><td>96rpx</td><td>-</td></tr><tr><td>--td-tree-root-bg-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr></tbody></table>',15),Q=[L],W={name:"DESIGN"},X=i('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当内容较多时，需要通过筛选快速定位某一类内容时使用。</p><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="常用于单个维度筛选或多个维度复合筛选的场景，可进行单选或多选。">常用于单个维度筛选或多个维度复合筛选的场景，可进行单选或多选。 <a class="header-anchor" href="#常用于单个维度筛选或多个维度复合筛选的场景，可进行单选或多选。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/dropdown-menu/dropdown-menu-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/dropdown-menu/dropdown-menu-2.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="在单选的筛选场景内，建议将用户选择项替换标题显示于菜单面板内。">在单选的筛选场景内，建议将用户选择项替换标题显示于菜单面板内。 <a class="header-anchor" href="#在单选的筛选场景内，建议将用户选择项替换标题显示于菜单面板内。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/dropdown-menu/dropdown-menu-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div></div><hr><h5 id="当筛选维度为多选时，建议提供重置按钮，便于用户恢复到未筛选状态。">当筛选维度为多选时，建议提供重置按钮，便于用户恢复到未筛选状态。 <a class="header-anchor" href="#当筛选维度为多选时，建议提供重置按钮，便于用户恢复到未筛选状态。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/dropdown-menu/dropdown-menu-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./Cascader">选择器</a></td><td style="text-align:left;">当需要在有限的空间展示大量选项供用户选择时，或一组选项由递进层级构成，需要用户逐级选择使用时。</td></tr></tbody></table>',13),Y=[X],Z=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416343495"})],-1),tt=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function et(e,n,d,o,c,m){const r=w("Stackblitz");return u(),h("td-doc-content",x,[t("td-doc-header",S,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,k),a(t("div",null,[t("div",C,[t("div",N,[(u(),h("svg",E,T)),p(" 该组件于 0.8.0 版本上线，请留意版本。 ")]),A,t("div",O,[t("td-doc-demo",{code:e.DemoexamplesingleCode,language:"markup","show-code":"",mode:"open","demo-name":"single","component-name":" README"},[t("div",V,[l(r,{"demo-name":"single","component-name":" README",code:e.DemoexamplesingleCode},null,8,["code"])])],8,q)]),$,t("div",I,[t("td-doc-demo",{code:e.DemoexamplemultiCode,language:"markup","show-code":"",mode:"open","demo-name":"multi","component-name":" README"},[t("div",j,[l(r,{"demo-name":"multi","component-name":" README",code:e.DemoexamplemultiCode},null,8,["code"])])],8,R)]),z,t("div",B,[t("td-doc-demo",{code:e.DemoexampletreeCode,language:"markup","show-code":"",mode:"open","demo-name":"tree","component-name":" README"},[t("div",H,[l(r,{"demo-name":"tree","component-name":" README",code:e.DemoexampletreeCode},null,8,["code"])])],8,P)])]),t("td-doc-phone",U,J,512),K],512),[[s,e.tab==="demo"]]),a(t("div",F,Q,512),[[s,e.tab==="api"]]),a(t("div",W,Y,512),[[s,e.tab==="design"]]),Z,tt],512)}const ot=g(D,[["render",et]]);export{ot as default};
