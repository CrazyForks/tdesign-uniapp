import{_ as p,d as h,c as u,a as t,w as s,v as l,b,e as n,f as d,r as g,o as v}from"./sites-CW8c24Yg.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const _=`<template>
  <view>
    <t-tab-bar
      t-class="t-tab-bar"
      :value="value"
      theme="tag"
      :split="false"
      @change="onChange"
    >
      <t-tab-bar-item
        v-for="(item, index) in list"
        :key="index"
        :value="item.value"
      >
        {{ item.label }}
      </t-tab-bar-item>
    </t-tab-bar>
  </view>
</template>

<script>
import tTabBar from 'tdesign-uniapp/tab-bar/tab-bar.vue';
import tTabBarItem from 'tdesign-uniapp/tab-bar-item/tab-bar-item.vue';
export default {
  components: {
    tTabBar,
    tTabBarItem,
  },
  data() {
    return {
      value: 'home',
      list: [
        {
          value: 'home',
          label: '首页',
        },
        {
          value: 'app',
          label: '应用',
        },
        {
          value: 'chat',
          label: '聊天',
        },
        {
          value: 'user',
          label: '我的',
        },
      ],
    };
  },
  created() {},
  methods: {
    onChange(e) {
      this.value = e.value;
    },
  },
};
<\/script>
<style>
</style>
`,y=`<template>
  <view>
    <t-tab-bar
      t-class="t-tab-bar"
      :value="value"
      theme="tag"
      :split="false"
      @change="onChange"
    >
      <t-tab-bar-item
        v-for="(item, index) in list"
        :key="index"
        :value="item.value"
        :icon="item.icon"
      >
        {{ item.label }}
      </t-tab-bar-item>
    </t-tab-bar>
  </view>
</template>

<script>
import tTabBar from 'tdesign-uniapp/tab-bar/tab-bar.vue';
import tTabBarItem from 'tdesign-uniapp/tab-bar-item/tab-bar-item.vue';
export default {
  components: {
    tTabBar,
    tTabBarItem,
  },
  data() {
    return {
      value: 'label_1',
      list: [
        {
          value: 'label_1',
          label: '首页',
          icon: 'home',
        },
        {
          value: 'label_2',
          label: '应用',
          icon: 'app',
        },
        {
          value: 'label_3',
          label: '聊天',
          icon: 'chat',
        },
        {
          value: 'label_4',
          label: '我的',
          icon: 'user',
        },
      ],
    };
  },
  created() {},
  methods: {
    onChange(e) {
      this.value = e.value;
    },
  },
};
<\/script>
<style>
</style>
`,E=`<template>
  <view>
    <t-tab-bar
      t-class="t-tab-bar"
      :value="value"
      theme="tag"
      :split="false"
      @change="onChange"
    >
      <t-tab-bar-item
        v-for="(item, index) in list"
        :key="index"
        :value="item.value"
        :icon="item.icon"
        :aria-label="item.ariaLabel"
      />
    </t-tab-bar>
  </view>
</template>

<script>
import tTabBar from 'tdesign-uniapp/tab-bar/tab-bar.vue';
import tTabBarItem from 'tdesign-uniapp/tab-bar-item/tab-bar-item.vue';
export default {
  components: {
    tTabBar,
    tTabBarItem,
  },
  data() {
    return {
      value: 'label_1',
      list: [
        {
          value: 'label_1',
          icon: 'home',
          ariaLabel: '首页',
        },
        {
          value: 'label_2',
          icon: 'app',
          ariaLabel: '软件',
        },
        {
          value: 'label_3',
          icon: 'chat',
          ariaLabel: '聊天',
        },
        {
          value: 'label_4',
          icon: 'user',
          ariaLabel: '我的',
        },
      ],
    };
  },
  created() {},
  methods: {
    onChange(e) {
      this.value = e.value;
    },
  },
};
<\/script>
<style>
</style>
`,D=`<template>
  <view>
    <t-tab-bar
      t-class="t-tab-bar"
      default-value="user"
      theme="tag"
      :split="false"
    >
      <t-tab-bar-item
        v-for="(item, index) in list"
        :key="index"
        :value="item.value"
        :sub-tab-bar="item.children"
      >
        {{ item.label }}
      </t-tab-bar-item>
    </t-tab-bar>
  </view>
</template>

<script>
import tTabBar from 'tdesign-uniapp/tab-bar/tab-bar.vue';
import tTabBarItem from 'tdesign-uniapp/tab-bar-item/tab-bar-item.vue';
const list = [
  {
    value: 'home',
    label: '首页',
    icon: 'home',
    children: [],
  },
  {
    value: 'app',
    label: '应用',
    icon: 'app',
    children: [],
  },
  {
    value: 'user',
    label: '我的',
    children: [
      {
        value: 'info',
        label: '基本信息',
      },
      {
        value: 'home-page',
        label: '个人主页',
      },
      {
        value: 'setting',
        label: '设置',
      },
    ],
  },
];
export default {
  components: {
    tTabBar,
    tTabBarItem,
  },
  data() {
    return {
      list,
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
</style>
`,w=`<template>
  <view>
    <!-- 文本 + 徽标 -->
    <view class="wrapper">
      <t-tab-bar
        t-class="t-tab-bar"
        default-value="label1"
      >
        <t-tab-bar-item
          :badge-props="{count: 16, offset: [16, 0]} "
          aria-label="首页，有16条消息"
          value="label1"
        >
          首页
        </t-tab-bar-item>
        <t-tab-bar-item
          :badge-props="{ dot: true, offset: [16, 0] }"
          aria-label="应用，有新的消息"
          value="label2"
        >
          应用
        </t-tab-bar-item>
        <t-tab-bar-item
          :badge-props="{count: 'New', offset: [16, 0]}"
          aria-label="聊天，New"
          value="label3"
        >
          聊天
        </t-tab-bar-item>
        <t-tab-bar-item
          :badge-props="{count: '···', offset: [16, 0]}"
          aria-label="我的，有很多消息"
          value="label4"
        >
          我的
        </t-tab-bar-item>
      </t-tab-bar>
    </view>

    <!-- 图标 + 徽标 -->
    <view class="wrapper">
      <t-tab-bar
        t-class="t-tab-bar"
        default-value="label1"
        :split="false"
      >
        <t-tab-bar-item
          :badge-props="{count: 16}"
          aria-label="首页，有16条消息"
          value="label1"
          icon="home"
        />
        <t-tab-bar-item
          :badge-props="{ dot: true }"
          aria-label="应用，有新的消息"
          value="label2"
          icon="app"
        />
        <t-tab-bar-item
          :badge-props="{count: 'New'}"
          aria-label="聊天，New"
          value="label3"
          icon="chat"
        />
        <t-tab-bar-item
          :badge-props="{count: '···'}"
          aria-label="我的，有很多消息"
          value="label4"
          icon="user"
        />
      </t-tab-bar>
    </view>

    <!-- 文本 + 图标 + 徽标 -->
    <view class="wrapper">
      <t-tab-bar
        t-class="t-tab-bar"
        default-value="label1"
        :split="false"
      >
        <t-tab-bar-item
          :badge-props="{count: 16}"
          aria-label="首页，有16条消息"
          value="label1"
          icon="home"
        >
          首页
        </t-tab-bar-item>
        <t-tab-bar-item
          :badge-props="{ dot: true }"
          aria-label="应用，有新的消息"
          value="label2"
          icon="app"
        >
          应用
        </t-tab-bar-item>
        <t-tab-bar-item
          :badge-props="{count: 'New'}"
          aria-label="聊天，New"
          value="label3"
          icon="chat"
        >
          聊天
        </t-tab-bar-item>
        <t-tab-bar-item
          :badge-props="{count: '···'}"
          aria-label="我的，有很多消息"
          value="label4"
          icon="user"
        >
          我的
        </t-tab-bar-item>
      </t-tab-bar>
    </view>
  </view>
</template>

<script>
import tTabBar from 'tdesign-uniapp/tab-bar/tab-bar.vue';
import tTabBarItem from 'tdesign-uniapp/tab-bar-item/tab-bar-item.vue';
export default {
  components: {
    tTabBar,
    tTabBarItem,
  },
  data() {
    return {
      list: [
        {
          value: 'label_1',
          label: '文字',
          icon: 'home',
        },
        {
          value: 'label_2',
          label: '文字',
          icon: 'app',
        },
        {
          value: 'label_3',
          label: '文字',
          icon: 'chat',
        },
        {
          value: 'label_4',
          label: '文字',
          icon: 'user',
        },
      ],
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.wrapper:not(:last-child) {
    margin-bottom: 32rpx;
}
</style>
`,x=`<template>
  <view>
    <t-tab-bar
      t-class="t-tab-bar"
      :value="value"
      shape="round"
      theme="tag"
      :split="false"
      @change="onChange"
    >
      <t-tab-bar-item
        v-for="(item, index) in list"
        :key="index"
        :value="item.value"
        :icon="item.icon"
        :aria-label="item.ariaLabel"
      />
    </t-tab-bar>
  </view>
</template>

<script>
import tTabBar from 'tdesign-uniapp/tab-bar/tab-bar.vue';
import tTabBarItem from 'tdesign-uniapp/tab-bar-item/tab-bar-item.vue';
export default {
  components: {
    tTabBar,
    tTabBarItem,
  },
  data() {
    return {
      value: 'label_1',
      list: [
        {
          value: 'label_1',
          icon: 'home',
          ariaLabel: '首页',
        },
        {
          value: 'label_2',
          icon: 'app',
          ariaLabel: '软件',
        },
        {
          value: 'label_3',
          icon: 'chat',
          ariaLabel: '聊天',
        },
        {
          value: 'label_4',
          icon: 'user',
          ariaLabel: '我的',
        },
      ],
    };
  },
  created() {},
  methods: {
    onChange(e) {
      this.value = e.value;
    },
  },
};
<\/script>
<style>
</style>
`,T=`<template>
  <view class="wrapper">
    <t-tab-bar
      t-class="t-tab-bar"
      :value="value"
      @change="onChange"
    >
      <t-tab-bar-item
        v-for="(item, index) in list"
        :key="index"
        :value="item.value"
        :icon="item.icon"
        :aria-label="item.ariaLabel"
      />
    </t-tab-bar>
  </view>
</template>

<script>
import tTabBar from 'tdesign-uniapp/tab-bar/tab-bar.vue';
import tTabBarItem from 'tdesign-uniapp/tab-bar-item/tab-bar-item.vue';
export default {
  components: {
    tTabBar,
    tTabBarItem,
  },
  data() {
    return {
      value: 'label_1',
      list: [
        {
          value: 'label_1',
          icon: 'home',
          ariaLabel: '首页',
        },
        {
          value: 'label_2',
          icon: 'app',
          ariaLabel: '软件',
        },
        {
          value: 'label_3',
          icon: 'chat',
          ariaLabel: '聊天',
        },
        {
          value: 'label_4',
          icon: 'user',
          ariaLabel: '我的',
        },
      ],
    };
  },
  created() {},
  methods: {
    onChange(e) {
      this.value = e.value;
    },
  },
};
<\/script>
<style>
.wrapper {
    --td-tab-bar-border-color: var(--td-border-level-1-color, #e7e7e7);
    --td-tab-bar-bg-color: var(--td-bg-color-secondarycontainer, #f3f3f3);
    --td-tab-bar-hover-color: #ddd;
    --td-tab-bar-item-color: var(--td-text-color-primary, rgba(0, 0, 0, 0.9));
    --td-tab-bar-item-active-color: var(--td-brand-color, #0052d9);
}
</style>
`,B=h({data(){return{DemoexampletextonlyCode:_,DemoexamplebaseCode:y,DemoexampleicononlyCode:E,DemoexamplesubCode:D,DemoexamplebadgeCode:w,DemoexampleroundCode:x,DemoexamplecustomCode:T}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:r,tdDocTabs:o,tdDocPhone:i}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/tab-bar/tab-bar";r&&(r.docInfo={title:"TabBar 标签栏",desc:"用于在不同功能模块之间进行快速切换，位于页面底部。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:c})=>this.tab=c),i&&(i.qrcodeUrl=m),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),A={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},C={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"navigation","component-name":"tab-bar"},k=["tab"],M={name:"DEMO"},N=b(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TTabBar <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/tab-bar/tab-bar.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TTabBarItem <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/tab-barr-item/tab-barr-item.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><h4 id="纯文本标签栏">纯文本标签栏 <a class="header-anchor" href="#纯文本标签栏"></a></h4>`,5),R={class:"tdesign-demo-wrapper tdesign-demo-item-- README-text-only tdesign-demo-item-- README"},I=["code"],S={slot:"action"},L=t("h4",{id:"图标加文字标签栏"},[d("图标加文字标签栏 "),t("a",{class:"header-anchor",href:"#图标加文字标签栏"})],-1),P={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},$=["code"],j={slot:"action"},O=t("h4",{id:"纯图标标签栏"},[d("纯图标标签栏 "),t("a",{class:"header-anchor",href:"#纯图标标签栏"})],-1),V={class:"tdesign-demo-wrapper tdesign-demo-item-- README-icon-only tdesign-demo-item-- README"},q=["code"],z={slot:"action"},H=t("h4",{id:"双层级纯文本标签栏"},[d("双层级纯文本标签栏 "),t("a",{class:"header-anchor",href:"#双层级纯文本标签栏"})],-1),U={class:"tdesign-demo-wrapper tdesign-demo-item-- README-sub tdesign-demo-item-- README"},G=["code"],F={slot:"action"},J=t("h3",{id:"组件样式"},[d("组件样式 "),t("a",{class:"header-anchor",href:"#组件样式"})],-1),K=t("h4",{id:"弱选中标签栏"},[d("弱选中标签栏 "),t("a",{class:"header-anchor",href:"#弱选中标签栏"})],-1),Q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-badge tdesign-demo-item-- README"},W=["code"],X={slot:"action"},Y=t("h4",{id:"悬浮胶囊标签栏"},[d("悬浮胶囊标签栏 "),t("a",{class:"header-anchor",href:"#悬浮胶囊标签栏"})],-1),Z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-round tdesign-demo-item-- README"},tt=["code"],et={slot:"action"},at=t("h4",{id:"自定义主题"},[d("自定义主题 "),t("a",{class:"header-anchor",href:"#自定义主题"})],-1),nt={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom tdesign-demo-item-- README"},dt=["code"],ot={slot:"action"},rt={ref:"tdDocPhone"},it=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/tab-bar/tab-bar",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),st=[it],lt=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"tab-bar"},null,-1),bt={name:"API"},mt=b('<h3 id="tabbar-props">TabBar Props <a class="header-anchor" href="#tabbar-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>bordered</td><td>Boolean</td><td>true</td><td>是否显示外边框</td><td>N</td></tr><tr><td>fixed</td><td>Boolean</td><td>true</td><td>是否固定在底部</td><td>N</td></tr><tr><td>safe-area-inset-bottom</td><td>Boolean</td><td>true</td><td>是否开启底部安全区适配</td><td>N</td></tr><tr><td>shape</td><td>String</td><td>normal</td><td>标签栏的形状。可选项：normal/round</td><td>N</td></tr><tr><td>split</td><td>Boolean</td><td>true</td><td>是否需要分割线</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>normal</td><td>选项风格。可选项：normal/tag</td><td>N</td></tr><tr><td>value</td><td>String / Number / Array</td><td>-</td><td>当前选中标签的索引。TS 类型：<code>string \\| number \\| Array&lt;string \\| number&gt;</code></td><td>N</td></tr><tr><td>default-value</td><td>String / Number / Array</td><td>undefined</td><td>当前选中标签的索引。非受控属性。TS 类型：<code>string \\| number \\| Array&lt;string \\| number&gt;</code></td><td>N</td></tr></tbody></table><h3 id="tabbar-events">TabBar Events <a class="header-anchor" href="#tabbar-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: string \\| number)</code></td><td>选中标签切换时触发</td></tr></tbody></table><h3 id="tabbar-external-classes">TabBar External Classes <a class="header-anchor" href="#tabbar-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr></tbody></table><h3 id="tabbaritem-props">TabBarItem Props <a class="header-anchor" href="#tabbaritem-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>badge-props</td><td>Object</td><td>-</td><td>图标右上角提示信息。TS 类型：<code>BadgeProps</code>，<a href="./badge?tab=api">Badge API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/tab-bar-item/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>icon</td><td>String / Object / Slot</td><td>-</td><td>图标名称。传入对象时透传至 Icon 组件。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>sub-tab-bar</td><td>Array</td><td>-</td><td>二级菜单。TS 类型：<code>SubTabBarItem[] </code> <code>interface SubTabBarItem { value: string; label: string }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/tab-bar-item/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>value</td><td>String / Number</td><td>-</td><td>标识符</td><td>N</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-tab-bar-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-tab-bar-border-color</td><td>@border-level-1-color</td><td>-</td></tr><tr><td>--td-tab-bar-round-shadow</td><td>@shadow-3</td><td>-</td></tr><tr><td>--td-tab-bar-active-bg</td><td>@brand-color-light</td><td>-</td></tr><tr><td>--td-tab-bar-active-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-tab-bar-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-tab-bar-border-color</td><td>@border-color</td><td>-</td></tr><tr><td>--td-tab-bar-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-tab-bar-height</td><td>80rpx</td><td>-</td></tr><tr><td>--td-tab-bar-hover-bg-color</td><td>rgba(0, 0, 0, 0.05)</td><td>-</td></tr><tr><td>--td-tab-bar-spread-border-color</td><td>@border-color</td><td>-</td></tr><tr><td>--td-tab-bar-spread-shadow</td><td>@shadow-3</td><td>-</td></tr></tbody></table>',11),ct=[mt],pt={name:"DESIGN"},ht=b('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>目标模块/视图需要从应用的任何地方直接进行访问时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="标签栏与徽标组合使用，用于告知用户该模块-视图的状态变化。">标签栏与<a href="./badge">徽标</a>组合使用，用于告知用户该模块/视图的状态变化。 <a class="header-anchor" href="#标签栏与徽标组合使用，用于告知用户该模块-视图的状态变化。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tab-bar/tab-bar-1.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tab-bar/tab-bar-2.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="建议标签栏数量在2-5个之间；若多与5个，建议重新审视应用的信息架构，对信息架构进行优化。">建议标签栏数量在2-5个之间；若多与5个，建议重新审视应用的信息架构，对信息架构进行优化。 <a class="header-anchor" href="#建议标签栏数量在2-5个之间；若多与5个，建议重新审视应用的信息架构，对信息架构进行优化。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tab-bar/tab-bar-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tab-bar/tab-bar-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="避免在同个状态下有不同颜色的文本和图标。">避免在同个状态下有不同颜色的文本和图标。 <a class="header-anchor" href="#避免在同个状态下有不同颜色的文本和图标。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tab-bar/tab-bar-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tab-bar/tab-bar-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="文本是对标签的简要说明，不建议将文本进行截断或换行，所以应避免使用长文本。">文本是对标签的简要说明，不建议将文本进行截断或换行，所以应避免使用长文本。 <a class="header-anchor" href="#文本是对标签的简要说明，不建议将文本进行截断或换行，所以应避免使用长文本。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tab-bar/tab-bar-7.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div></div><hr><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/tab-bar/tab-bar-8.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./tabs">选项卡</a></td><td style="text-align:left;">当内容/数据需要一定的分类纬度进行区分，便于用户快速作出选择并切换时可以使用。</td></tr><tr><td style="text-align:left;"><a href="./side-bar">侧边栏</a></td><td style="text-align:left;">当内容项数量较多，需要用户根据品类快速选择到目标内容项时使用。</td></tr></tbody></table>',18),ut=[ht],gt=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760533894924"})],-1),vt=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function ft(e,r,o,i,m,c){const a=g("Stackblitz");return v(),u("td-doc-content",A,[t("td-doc-header",C,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,k),s(t("div",null,[t("div",M,[N,t("div",R,[t("td-doc-demo",{code:e.DemoexampletextonlyCode,language:"markup","show-code":"",mode:"open","demo-name":"text-only","component-name":" README"},[t("div",S,[n(a,{"demo-name":"text-only","component-name":" README",code:e.DemoexampletextonlyCode},null,8,["code"])])],8,I)]),L,t("div",P,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",j,[n(a,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,$)]),O,t("div",V,[t("td-doc-demo",{code:e.DemoexampleicononlyCode,language:"markup","show-code":"",mode:"open","demo-name":"icon-only","component-name":" README"},[t("div",z,[n(a,{"demo-name":"icon-only","component-name":" README",code:e.DemoexampleicononlyCode},null,8,["code"])])],8,q)]),H,t("div",U,[t("td-doc-demo",{code:e.DemoexamplesubCode,language:"markup","show-code":"",mode:"open","demo-name":"sub","component-name":" README"},[t("div",F,[n(a,{"demo-name":"sub","component-name":" README",code:e.DemoexamplesubCode},null,8,["code"])])],8,G)]),J,K,t("div",Q,[t("td-doc-demo",{code:e.DemoexamplebadgeCode,language:"markup","show-code":"",mode:"open","demo-name":"badge","component-name":" README"},[t("div",X,[n(a,{"demo-name":"badge","component-name":" README",code:e.DemoexamplebadgeCode},null,8,["code"])])],8,W)]),Y,t("div",Z,[t("td-doc-demo",{code:e.DemoexampleroundCode,language:"markup","show-code":"",mode:"open","demo-name":"round","component-name":" README"},[t("div",et,[n(a,{"demo-name":"round","component-name":" README",code:e.DemoexampleroundCode},null,8,["code"])])],8,tt)]),at,t("div",nt,[t("td-doc-demo",{code:e.DemoexamplecustomCode,language:"markup","show-code":"",mode:"open","demo-name":"custom","component-name":" README"},[t("div",ot,[n(a,{"demo-name":"custom","component-name":" README",code:e.DemoexamplecustomCode},null,8,["code"])])],8,dt)])]),t("td-doc-phone",rt,st,512),lt],512),[[l,e.tab==="demo"]]),s(t("div",bt,ct,512),[[l,e.tab==="api"]]),s(t("div",pt,ut,512),[[l,e.tab==="design"]]),gt,vt],512)}const Et=p(B,[["render",ft]]);export{Et as default};
