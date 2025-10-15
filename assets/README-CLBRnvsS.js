import{_ as m,d as g,c as u,a as t,w as c,v as r,b as s,e as a,f as h,r as b,o as f}from"./sites-CaVUcqpO.js";import{P as k}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view>
    <t-action-sheet
      id="t-action-sheet"
      ref="t-action-sheet"
      using-custom-navbar
      @selected="handleSelected($event, { tagId: 't-action-sheet' })"
    />

    <t-button
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="handleAction"
    >
      列表型
    </t-button>

    <t-button
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="showDescAction"
    >
      带描述列表型
    </t-button>

    <t-button
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="showIconAction"
    >
      带图标列表型
    </t-button>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tActionSheet from 'tdesign-uniapp/action-sheet/action-sheet';
import ActionSheet, { ActionSheetTheme } from 'tdesign-uniapp/action-sheet/index';
export default {
  components: {
    tButton,
    tActionSheet,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        items: [
          {
            label: '选项一',
          },
          {
            label: '选项二',
          },
          {
            label: '选项三',
          },
          {
            label: '选项四',
          },
        ],
      });
    },
    showDescAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        description: '动作面板描述文字',
        items: [
          {
            label: '选项一',
          },
          {
            label: '选项二',
          },
          {
            label: '选项三',
          },
        ],
      });
    },
    showIconAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        items: [
          {
            label: '选项一',
            icon: 'app',
          },
          {
            label: '选项二',
            icon: 'app',
          },
          {
            label: '选项三',
            icon: 'app',
          },
          {
            label: '选项四',
            icon: 'app',
          },
        ],
      });
    },
    handleSelected(e) {
      /* ---处理dataset begin--- */
      // this.handleDataset(e, _dataset);
      /* ---处理dataset end--- */
      console.log(e);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,A=`<template>
  <view>
    <t-action-sheet
      id="t-action-sheet"
      ref="t-action-sheet"
      using-custom-navbar
      @selected="handleSelected($event, { tagId: 't-action-sheet' })"
    />

    <t-button
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="handleAction"
    >
      常规宫格型
    </t-button>

    <t-button
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="handleMultiAction"
    >
      带翻页宫格型
    </t-button>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tActionSheet from 'tdesign-uniapp/action-sheet/action-sheet';
import ActionSheet, { ActionSheetTheme } from 'tdesign-uniapp/action-sheet/index';
const firstGrid = [
  {
    label: '微信',
    image: 'https://tdesign.gtimg.com/mobile/demos/wechat.png',
  },
  {
    label: '朋友圈',
    image: 'https://tdesign.gtimg.com/mobile/demos/times.png',
  },
  {
    label: 'QQ',
    image: 'https://tdesign.gtimg.com/mobile/demos/qq.png',
  },
  {
    label: '企业微信',
    image: 'https://tdesign.gtimg.com/mobile/demos/wecom.png',
  },
  {
    label: '收藏',
    icon: 'star',
  },
  {
    label: '刷新',
    icon: 'refresh',
  },
  {
    label: '下载',
    icon: 'download',
  },
  {
    label: '复制',
    icon: 'queue',
  },
];
export default {
  components: {
    tButton,
    tActionSheet,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.Grid,
        selector: '#t-action-sheet',
        context: this,
        items: firstGrid,
      });
    },
    handleMultiAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.Grid,
        selector: '#t-action-sheet',
        context: this,
        items: firstGrid.concat(new Array(8).fill({
          label: '标题文字',
          icon: 'image',
        })),
      });
    },
    handleSelected(e) {
      /* ---处理dataset begin--- */
      // this.handleDataset(e, _dataset);
      /* ---处理dataset end--- */
      console.log(e);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <t-action-sheet
      id="t-action-sheet"
      ref="t-action-sheet"
      using-custom-navbar
      @selected="handleSelected($event, { tagId: 't-action-sheet' })"
    />

    <t-button
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="handleAction"
    >
      列表型选项状态
    </t-button>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tActionSheet from 'tdesign-uniapp/action-sheet/action-sheet';
import ActionSheet, { ActionSheetTheme } from 'tdesign-uniapp/action-sheet/index';
export default {
  components: {
    tButton,
    tActionSheet,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        items: [
          {
            label: '默认选项',
            icon: 'app',
          },
          {
            label: '自定义选项',
            icon: 'app',
            color: '#0052D9',
          },
          {
            label: '失效选项',
            disabled: true,
            icon: 'app',
          },
          {
            label: '警告选项',
            color: '#e34d59',
            icon: 'app',
          },
        ],
      });
    },
    handleSelected(e) {
      /* ---处理dataset begin--- */
      // this.handleDataset(e, _dataset);
      /* ---处理dataset end--- */
      console.log(e);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <t-action-sheet
      id="t-action-sheet"
      ref="t-action-sheet"
      using-custom-navbar
      @selected="handleSelected($event, { tagId: 't-action-sheet' })"
    />

    <t-button
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="handleAction"
    >
      左对齐列表型
    </t-button>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';
import tActionSheet from 'tdesign-uniapp/action-sheet/action-sheet.vue';
import { default as ActionSheet, ActionSheetTheme } from 'tdesign-uniapp/action-sheet/index';
export default {
  components: {
    tButton,
    tActionSheet,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        align: 'left',
        description: '动作面板描述文字',
        items: [
          {
            label: '选项一',
            icon: 'app',
            suffixIcon: 'chevron-right',
          },
          {
            label: '选项二',
            icon: 'app',
            suffixIcon: 'chevron-right',
          },
          {
            label: '选项三',
            icon: 'app',
            suffixIcon: 'chevron-right',
          },
          {
            label: '选项四',
            icon: 'app',
            suffixIcon: 'chevron-right',
          },
        ],
      });
    },
    handleSelected(e) {
      /* ---处理dataset begin--- */
      // this.handleDataset(e, _dataset);
      /* ---处理dataset end--- */
      console.log(e);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,S=g({data(){return{DemoexamplelistCode:v,DemoexamplegridCode:A,DemoexamplestatusCode:y,DemoexamplealignCode:_}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:d,tdDocTabs:n,tdDocPhone:i}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/action-sheet/action-sheet";d&&(d.docInfo={title:"ActionSheet 动作面板",desc:"由用户操作后触发的一种特定的模态弹出框 ，呈现一组与当前情境相关的两个或多个选项。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:p})=>this.tab=p),i&&(i.qrcodeUrl=l),k.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),x={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},w={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"action-sheet"},D=["tab"],E={name:"DEMO"},T=s(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TActionSheet <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/action-sheet/action-sheet.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>列表型动作面板</p>`,5),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-list tdesign-demo-item-- README"},C=["code"],I={slot:"action"},N=t("p",null,"宫格型动作面板",-1),R={class:"tdesign-demo-wrapper tdesign-demo-item-- README-grid tdesign-demo-item-- README"},B=["code"],$={slot:"action"},P=t("h3",{id:"组件状态"},[h("组件状态 "),t("a",{class:"header-anchor",href:"#组件状态"})],-1),z=t("p",null,"宫格型动作面板",-1),L={class:"tdesign-demo-wrapper tdesign-demo-item-- README-status tdesign-demo-item-- README"},j=["code"],q={slot:"action"},O=t("h3",{id:"组件样式"},[h("组件样式 "),t("a",{class:"header-anchor",href:"#组件样式"})],-1),G=t("p",null,"列表型对齐方式",-1),V={class:"tdesign-demo-wrapper tdesign-demo-item-- README-align tdesign-demo-item-- README"},H=["code"],Q={slot:"action"},U=s(`<h3 id="支持指令调用">支持指令调用 <a class="header-anchor" href="#支持指令调用"></a></h3><div class="language-javascript"><pre><code><span class="token keyword">import</span> ActionSheet<span class="token punctuation">,</span> <span class="token punctuation">{</span> ActionSheetTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/action-sheet/index&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 指令调用不同于组件引用不需要传入visible</span>
<span class="token keyword">const</span> <span class="token literal-property property">basicListOption</span><span class="token operator">:</span> ActionSheetShowOption <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> ActionSheetTheme<span class="token punctuation">.</span>List<span class="token punctuation">,</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;#t-action-sheet&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;默认选项&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;失效选项&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;警告选项&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;#e34d59&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handler <span class="token operator">=</span> ActionSheet<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>basicListOption<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>指令调用的关闭如下</p><div class="language-javascript"><pre><code>handler<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,4),Y={ref:"tdDocPhone"},F=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/action-sheet/action-sheet",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),J=[F],K=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"action-sheet"},null,-1),W={name:"API"},X=s('<h3 id="actionsheet-props">ActionSheet Props <a class="header-anchor" href="#actionsheet-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>align</td><td>String</td><td>center</td><td><code>0.29.0</code>。水平对齐方式。可选项：center/left</td><td>N</td></tr><tr><td>cancel-text</td><td>String</td><td>-</td><td>设置取消按钮的文本</td><td>N</td></tr><tr><td>count</td><td>Number</td><td>8</td><td>设置每页展示菜单的数量，仅当 type=grid 时有效</td><td>N</td></tr><tr><td>description</td><td>String</td><td>-</td><td><code>0.29.0</code>。动作面板描述文字</td><td>N</td></tr><tr><td>items</td><td>Array</td><td>-</td><td>必需。菜单项。TS 类型：<code>Array&lt;string \\| ActionSheetItem&gt;</code> <code>interface ActionSheetItem { label: string; color?: string; disabled?: boolean; icon?: string; suffixIcon?: string }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/action-sheet/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>Y</td></tr><tr><td>popup-props</td><td>Object</td><td>{}</td><td>透传 Popup 组件全部属性。TS 类型：<code>PopupProps</code>，<a href="./popup?tab=api">Popup API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/action-sheet/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>show-cancel</td><td>Boolean</td><td>true</td><td>是否显示取消按钮</td><td>N</td></tr><tr><td>show-overlay</td><td>Boolean</td><td>true</td><td>是否显示遮罩层</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>list</td><td>展示类型，列表和表格形式展示。可选项：list/grid</td><td>N</td></tr><tr><td>using-custom-navbar</td><td>Boolean</td><td>false</td><td>是否使用了自定义导航栏</td><td>N</td></tr><tr><td>visible</td><td>Boolean</td><td>false</td><td>显示与隐藏</td><td>N</td></tr><tr><td>default-visible</td><td>Boolean</td><td>undefined</td><td>显示与隐藏。非受控属性</td><td>N</td></tr></tbody></table><h3 id="actionsheet-events">ActionSheet Events <a class="header-anchor" href="#actionsheet-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>cancel</td><td>-</td><td>点击取消按钮时触发</td></tr><tr><td>close</td><td><code>(trigger: ActionSheetTriggerSource)</code></td><td>关闭时触发。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/action-sheet/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type ActionSheetTriggerSource = &#39;overlay&#39; \\| &#39;command&#39; \\| &#39;select&#39; </code><br></td></tr><tr><td>selected</td><td><code>(selected: ActionSheetItem \\| string, index: number)</code></td><td>选择菜单项时触发</td></tr></tbody></table><h3 id="actionsheet-external-classes">ActionSheet External Classes <a class="header-anchor" href="#actionsheet-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-cancel</td><td>取消样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-action-sheet-border-color</td><td>@border-level-1-color</td><td>-</td></tr><tr><td>--td-action-sheet-border-radius</td><td>@radius-extraLarge</td><td>-</td></tr><tr><td>--td-action-sheet-cancel-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-action-sheet-cancel-height</td><td>96rpx</td><td>-</td></tr><tr><td>--td-action-sheet-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-action-sheet-description-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-action-sheet-gap-color</td><td>@bg-color-page</td><td>-</td></tr><tr><td>--td-action-sheet-list-item-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-action-sheet-list-item-height</td><td>112rpx</td><td>-</td></tr><tr><td>--td-action-sheet-text-align</td><td>center</td><td>-</td></tr></tbody></table>',9),Z=[X],tt={name:"DESIGN"},et=s('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>需要提供一组与当前场景操作相关的关联操作时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="动作面板与按钮组合使用，通过按钮点击唤起动作面板。">动作面板与<a href="./button">按钮</a>组合使用，通过按钮点击唤起动作面板。 <a class="header-anchor" href="#动作面板与按钮组合使用，通过按钮点击唤起动作面板。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/action-sheet/action-sheet-1.png"></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="当用户完成一个事件可以通过若干种方式达成，可以用动态面板来承载这若干种方式的操作。">当用户完成一个事件可以通过若干种方式达成，可以用动态面板来承载这若干种方式的操作。 <a class="header-anchor" href="#当用户完成一个事件可以通过若干种方式达成，可以用动态面板来承载这若干种方式的操作。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/action-sheet/action-sheet-2.png"></div><hr><h5 id="当页面中有一组操作因低频-空间不足不希望外露时，但却必要存在，可以用动作面板来承载，通过“更多”按钮触发">当页面中有一组操作因低频/空间不足不希望外露时，但却必要存在，可以用动作面板来承载，通过“更多”按钮触发 <a class="header-anchor" href="#当页面中有一组操作因低频-空间不足不希望外露时，但却必要存在，可以用动作面板来承载，通过“更多”按钮触发"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/action-sheet/action-sheet-3.png"></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="动作面板中不建议提供太多操作项，若过多项在小屏手机中导致需纵向滚动，体验将会受损。">动作面板中不建议提供太多操作项，若过多项在小屏手机中导致需纵向滚动，体验将会受损。 <a class="header-anchor" href="#动作面板中不建议提供太多操作项，若过多项在小屏手机中导致需纵向滚动，体验将会受损。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/action-sheet/action-sheet-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/action-sheet/action-sheet-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="动作面板中的操作项不建议用icon完成替代文字。">动作面板中的操作项不建议用icon完成替代文字。 <a class="header-anchor" href="#动作面板中的操作项不建议用icon完成替代文字。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/action-sheet/action-sheet-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/action-sheet/action-sheet-7.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./drawer">抽屉</a></td><td style="text-align:left;">需要收折展示一组数量较多的菜单时使用。</td></tr><tr><td style="text-align:left;"><a href="./dialog">对话框</a></td><td style="text-align:left;">需要用户做一些决定，或这提供完成某个任务是需要的一些额外信息时使用。</td></tr><tr><td style="text-align:left;"><a href="./dropdown-menu">下拉菜单</a></td><td style="text-align:left;">当内容较多时，需要通过筛选快速定位某一类内容时使用。</td></tr><tr><td style="text-align:left;"><a href="./dropdown-menu">选择器</a></td><td style="text-align:left;">当需要在有限的空间展示大量选项供用户选择，或者一组选项由递进层级构成需要用户逐级选择时使用。</td></tr></tbody></table>',19),nt=[et],ot=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760510577418"})],-1),at=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function st(e,d,n,i,l,p){const o=b("Stackblitz");return f(),u("td-doc-content",x,[t("td-doc-header",w,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,D),c(t("div",null,[t("div",E,[T,t("div",M,[t("td-doc-demo",{code:e.DemoexamplelistCode,language:"markup","show-code":"",mode:"open","demo-name":"list","component-name":" README"},[t("div",I,[a(o,{"demo-name":"list","component-name":" README",code:e.DemoexamplelistCode},null,8,["code"])])],8,C)]),N,t("div",R,[t("td-doc-demo",{code:e.DemoexamplegridCode,language:"markup","show-code":"",mode:"open","demo-name":"grid","component-name":" README"},[t("div",$,[a(o,{"demo-name":"grid","component-name":" README",code:e.DemoexamplegridCode},null,8,["code"])])],8,B)]),P,z,t("div",L,[t("td-doc-demo",{code:e.DemoexamplestatusCode,language:"markup","show-code":"",mode:"open","demo-name":"status","component-name":" README"},[t("div",q,[a(o,{"demo-name":"status","component-name":" README",code:e.DemoexamplestatusCode},null,8,["code"])])],8,j)]),O,G,t("div",V,[t("td-doc-demo",{code:e.DemoexamplealignCode,language:"markup","show-code":"",mode:"open","demo-name":"align","component-name":" README"},[t("div",Q,[a(o,{"demo-name":"align","component-name":" README",code:e.DemoexamplealignCode},null,8,["code"])])],8,H)]),U]),t("td-doc-phone",Y,J,512),K],512),[[r,e.tab==="demo"]]),c(t("div",W,Z,512),[[r,e.tab==="api"]]),c(t("div",tt,nt,512),[[r,e.tab==="design"]]),ot,at],512)}const ct=m(S,[["render",st]]);export{ct as default};
