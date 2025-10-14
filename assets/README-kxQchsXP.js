import{_ as h,d as g,c as u,a as t,w as a,v as c,b as p,e as s,f as o,r as v,o as b}from"./sites-vH1cnupm.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const x=`<template>
  <view>
    <view class="demo-desc">
      水平带序号步骤条
    </view>

    <view class="block">
      <t-steps
        :current="first"
        @change="onFirstChange"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          :title="getText(first, index)"
          content="辅助信息"
        />
      </t-steps>
    </view>

    <view class="demo-desc">
      水平带图标步骤条
    </view>

    <view class="block">
      <t-steps
        :current="second"
        @change="onSecondChange"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          :title="getText(second, index)"
          content="辅助信息"
          icon="cart"
        />
      </t-steps>
    </view>

    <view class="demo-desc">
      水平简略步骤条
    </view>

    <view class="block">
      <t-steps
        theme="dot"
        :current="third"
        @change="onThirdChange"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          :title="getText(third, index)"
          content="辅助信息"
        />
      </t-steps>
    </view>
  </view>
</template>

<script>
import tSteps from 'tdesign-uniapp/steps/steps';
import tStepItem from 'tdesign-uniapp/step-item/step-item';


export default {
  components: {
    tSteps,
    tStepItem,
  },
  data() {
    return {
      first: 1,
      second: 1,
      third: 1,
    };
  },
  created() {},
  methods: {
    getText(value, curr) {
      if (value > curr) return '已完成';
      if (value == curr) return '当前步骤';
      return '未完成';
    },
    onFirstChange(e) {
      this.first = e.current;
    },
    onSecondChange(e) {
      this.second = e.current;
    },
    onThirdChange(e) {
      this.third = e.current;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <view class="demo-desc">
      垂直带序号步骤条
    </view>

    <view class="block">
      <t-steps
        layout="vertical"
        :current="first"
        @change="onFirstChange"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          :title="getText(first, index)"
          content="可自定义此处内容"
        />
      </t-steps>
    </view>

    <view class="demo-desc">
      垂直带图标步骤条
    </view>

    <view class="block">
      <t-steps
        layout="vertical"
        :current="second"
        @change="onSecondChange"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          :title="getText(second, index)"
          content="可自定义此处内容"
          icon="cart"
        />
      </t-steps>
    </view>

    <view class="demo-desc">
      垂直简略步骤条
    </view>

    <view class="block">
      <t-steps
        layout="vertical"
        theme="dot"
        :current="third"
        @change="onThirdChange"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          :title="getText(third, index)"
          content="可自定义此处内容"
        />
      </t-steps>
    </view>

    <view class="demo-desc">
      垂直带自定义内容步骤条
    </view>

    <view class="block">
      <t-steps
        layout="vertical"
        :current="third"
        @change="onThirdChange"
      >
        <t-step-item
          v-for="(item, index) in 3"
          :key="index"
          :title="getText(third, index)"
          content="可自定义此处内容"
        >
          <template
            #extra
          >
            <view
              v-if="index == 1"
            >
              <image
                src="https://tdesign.gtimg.com/mobile/demos/steps1.png"
                alt="图标"
                style="width: 100%"
                mode="widthFix"
              />
            </view>
          </template>
        </t-step-item>
      </t-steps>
    </view>
  </view>
</template>

<script>
import tSteps from 'tdesign-uniapp/steps/steps';
import tStepItem from 'tdesign-uniapp/step-item/step-item';


export default {
  components: {
    tSteps,
    tStepItem,
  },
  data() {
    return {
      first: 1,
      second: 1,
      third: 1,
    };
  },
  created() {},
  methods: {
    getText(value, curr) {
      if (value > curr) return '已完成步骤';
      if (value == curr) return '当前步骤';
      return '未完成步骤';
    },
    onFirstChange(e) {
      this.first = e.current;
    },
    onSecondChange(e) {
      this.second = e.current;
    },
    onThirdChange(e) {
      this.third = e.current;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <view class="block">
      <t-steps
        :current="first"
        current-status="error"
        @change="onFirstChange"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          :title="getText(first, index)"
          content="辅助信息"
        />
      </t-steps>
    </view>

    <view class="block">
      <t-steps
        :current="second"
        current-status="error"
        @change="onSecondChange"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          :title="getText(second, index)"
          content="辅助信息"
          icon="cart"
        />
      </t-steps>
    </view>

    <view class="block">
      <t-steps
        theme="dot"
        :current="third"
        current-status="error"
        @change="onThirdChange"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          :title="getText(third, index)"
          content="辅助信息"
        />
      </t-steps>
    </view>
  </view>
</template>

<script>
import tSteps from 'tdesign-uniapp/steps/steps';
import tStepItem from 'tdesign-uniapp/step-item/step-item';


export default {
  components: {
    tSteps,
    tStepItem,
  },
  data() {
    return {
      first: 1,
      second: 1,
      third: 1,
    };
  },
  created() {},
  methods: {
    getText(value, curr) {
      if (value > curr) return '已完成';
      if (value == curr) return '错误步骤';
      return '未完成';
    },
    onFirstChange(e) {
      this.first = e.current;
    },
    onSecondChange(e) {
      this.second = e.current;
    },
    onThirdChange(e) {
      this.third = e.current;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,S=`<template>
  <view>
    <view class="demo-desc">
      垂直自定义步骤条
    </view>

    <view class="block">
      <t-steps
        layout="vertical"
        theme="dot"
        :current="count - 1"
        @change="onCascader"
      >
        <t-step-item
          v-for="(item, index) in count"
          :key="index"
          :title="getText(count - 1, index)"
        >
          <template
            #title-right
          >
            <t-icon
              name="chevron-right"
              size="44rpx"
              color="rgba(0, 0, 0, .4)"
            />
          </template>
        </t-step-item>
      </t-steps>

      <t-button
        style="margin-top: 32rpx; display: block"
        block
        @click="toNext"
      >
        下一步
      </t-button>
    </view>

    <view class="demo-desc">
      纯展示步骤条
    </view>

    <view class="block">
      <t-steps
        layout="vertical"
        readonly
        theme="dot"
        :current="5"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          title="步骤展示"
          content="可自定义此处内容"
        />
      </t-steps>
    </view>
  </view>
</template>

<script>
import tSteps from 'tdesign-uniapp/steps/steps';
import tStepItem from 'tdesign-uniapp/step-item/step-item';
import tIcon from 'tdesign-uniapp/icon/icon';


export default {
  components: {
    tSteps,
    tStepItem,
    tIcon,
  },
  data() {
    return {
      count: 4,
    };
  },
  created() {},
  methods: {
    getText(value, curr) {
      if (value > curr) return '已完成步骤';
      if (value == curr) return '当前步骤';
      return '未完成步骤';
    },
    toNext() {
      this.count = this.count + 1;
    },
    onCascader(e) {
      const { current } = e;
      this.count = current + 1;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,w=g({data(){return{DemoexamplehorizontalCode:x,DemoexampleverticalCode:_,DemoexamplestatusCode:y,DemoexamplespecialCode:S}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:r,tdDocTabs:n,tdDocPhone:i}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/steps/steps";r&&(r.docInfo={title:"Steps 步骤条",desc:"用于任务步骤展示或任务进度展示。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:m})=>this.tab=m),i&&(i.qrcodeUrl=l),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),k={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},C={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"navigation","component-name":"steps"},E=["tab"],D={name:"DEMO"},T=p(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-steps&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/steps/steps&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;t-step-item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/step-item/step-item&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p>步骤条，方向可以横向和纵向，可以自定义步骤条显示内容以及是否可写</p><p><a href="https://developers.weixin.qq.com/s/3H9EuimQ7JS0" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><h4 id="水平步骤条">水平步骤条 <a class="header-anchor" href="#水平步骤条"></a></h4><p>支持三种类型：序号、图标、简略</p>`,10),N={class:"tdesign-demo-wrapper tdesign-demo-item-- README-horizontal tdesign-demo-item-- README"},I=["code"],q={slot:"action"},A=t("h4",{id:"垂直步骤条"},[o("垂直步骤条 "),t("a",{class:"header-anchor",href:"#垂直步骤条"})],-1),M=t("p",null,"支持三种类型：序号、图标、简略",-1),R={class:"tdesign-demo-wrapper tdesign-demo-item-- README-vertical tdesign-demo-item-- README"},z=["code"],F={slot:"action"},$=t("h3",{id:"组件状态"},[o("组件状态 "),t("a",{class:"header-anchor",href:"#组件状态"})],-1),j=t("h4",{id:"选项卡状态"},[o("选项卡状态 "),t("a",{class:"header-anchor",href:"#选项卡状态"})],-1),P=t("p",null,"共支持 4 种状态：未完成（default）、已完成（finish）、进行中（process）、错误（error）",-1),H={class:"tdesign-demo-wrapper tdesign-demo-item-- README-status tdesign-demo-item-- README"},O=["code"],V={slot:"action"},B=t("h3",{id:"特殊类型"},[o("特殊类型 "),t("a",{class:"header-anchor",href:"#特殊类型"})],-1),J=t("p",null,"通过已有特性，改造出两种常见类型：",-1),U=t("ul",null,[t("li",null,"垂直自定义（在 Cascader 中使用）"),t("li",null,"纯展示步骤条")],-1),G=t("p",null,"可以参考以下代码实现",-1),Q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-special tdesign-demo-item-- README"},K=["code"],L={slot:"action"},W={ref:"tdDocPhone"},X=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/steps/steps",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),Y=[X],Z=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"steps"},null,-1),tt={name:"API"},et=p('<h3 id="steps-props">Steps Props <a class="header-anchor" href="#steps-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>current</td><td>String / Number</td><td>-</td><td>当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = &#39;FINISH&#39; 表示所有状态完成</td><td>N</td></tr><tr><td>default-current</td><td>String / Number</td><td>undefined</td><td>当前步骤，即整个步骤条进度。默认根据步骤下标判断步骤的完成状态，当前步骤为进行中，当前步骤之前的步骤为已完成，当前步骤之后的步骤为未开始。如果每个步骤没有设置 value，current 值为步骤长度则表示所有步骤已完成。如果每个步骤设置了自定义 value，则 current = &#39;FINISH&#39; 表示所有状态完成。非受控属性</td><td>N</td></tr><tr><td>current-status</td><td>String</td><td>process</td><td>用于控制 current 指向的步骤条的状态。可选项：default/process/finish/error</td><td>N</td></tr><tr><td>layout</td><td>String</td><td>horizontal</td><td>步骤条方向，有两种：横向和纵向。可选项：horizontal/vertical</td><td>N</td></tr><tr><td>readonly</td><td>Boolean</td><td>undefined</td><td>只读状态</td><td>N</td></tr><tr><td>sequence</td><td>String</td><td>positive</td><td>步骤条顺序。可选项：positive/reverse</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>default</td><td>步骤条风格。可选项：default/dot</td><td>N</td></tr></tbody></table><h3 id="steps-events">Steps Events <a class="header-anchor" href="#steps-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>({current: string \\| number, previous: string \\| number})</code></td><td>当前步骤发生变化时触发</td></tr></tbody></table><h3 id="steps-external-classes">Steps External Classes <a class="header-anchor" href="#steps-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr></tbody></table><h3 id="stepitem-props">StepItem Props <a class="header-anchor" href="#stepitem-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>content</td><td>String / Slot</td><td>&#39;&#39;</td><td>步骤描述。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>extra</td><td>String / Slot</td><td>-</td><td>步骤条自定义内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>icon</td><td>String / Slot</td><td>-</td><td>图标。传入 slot 代表使用插槽，其他字符串代表使用内置图标。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>status</td><td>String</td><td>default</td><td>当前步骤的状态：默认状态（未开始）、进行中状态、完成状态、错误状态。可选项：default/process/finish/error。TS 类型：<code>StepStatus</code> <code>type StepStatus = &#39;default&#39; \\| &#39;process&#39; \\| &#39;finish&#39; \\| &#39;error&#39;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/step-item/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>sub-step-items</td><td>Array</td><td>[]</td><td>已废弃。子步骤条，仅支持 layout = &#39;vertical&#39; 时。TS 类型：<code>SubStepItem[]</code> <code>interface SubStepItem { status: StepStatus, title: string }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/step-item/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>title</td><td>String / Slot</td><td>&#39;&#39;</td><td>标题。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr></tbody></table><h3 id="stepitem-external-classes">StepItem External Classes <a class="header-anchor" href="#stepitem-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-description</td><td>描述样式类</td></tr><tr><td>t-class-extra</td><td>额外样式类</td></tr><tr><td>t-class-title</td><td>标题样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-step-item-circle-font-size</td><td>28rpx</td><td>-</td></tr><tr><td>--td-step-item-circle-size</td><td>44rpx</td><td>-</td></tr><tr><td>--td-step-item-default-circle-bg</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-step-item-default-circle-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-step-item-default-dot-border-color</td><td>@component-border</td><td>-</td></tr><tr><td>--td-step-item-default-icon-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-step-item-default-title-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-step-item-description-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-step-item-dot-size</td><td>16rpx</td><td>-</td></tr><tr><td>--td-step-item-error-circle-bg</td><td>@error-color-1</td><td>-</td></tr><tr><td>--td-step-item-error-circle-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-step-item-error-dot-border-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-step-item-error-icon-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-step-item-error-title-color</td><td>@error-color</td><td>-</td></tr><tr><td>--td-step-item-finish-circle-bg</td><td>@brand-color-light</td><td>-</td></tr><tr><td>--td-step-item-finish-circle-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-step-item-finish-dot-border-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-step-item-finish-icon-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-step-item-finish-line-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-step-item-finish-title-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-step-item-line-color</td><td>@component-border</td><td>-</td></tr><tr><td>--td-step-item-process-circle-bg</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-step-item-process-circle-color</td><td>@text-color-anti</td><td>-</td></tr><tr><td>--td-step-item-process-dot-border-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-step-item-process-icon-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-step-item-process-title-color</td><td>@brand-color</td><td>-</td></tr></tbody></table>',13),nt=[et],dt={name:"DESIGN"},st=p('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要展示较为复杂的线性流程时使用。</p><h3 id="与页面布局相关">与页面布局相关 <a class="header-anchor" href="#与页面布局相关"></a></h3><h5 id="位于页面或模块的顶部，统领下方内容的切换，通常设置吸顶，方便用户快速切换。">位于页面或模块的顶部，统领下方内容的切换，通常设置吸顶，方便用户快速切换。 <a class="header-anchor" href="#位于页面或模块的顶部，统领下方内容的切换，通常设置吸顶，方便用户快速切换。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/steps/steps-1.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="步骤不宜过多，过长的步骤建议优化流程或使用其它交互方式。">步骤不宜过多，过长的步骤建议优化流程或使用其它交互方式。 <a class="header-anchor" href="#步骤不宜过多，过长的步骤建议优化流程或使用其它交互方式。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/steps/steps-2.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/steps/steps-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="每个小步骤建议尽量简洁清晰，以降低用户的理解和操作成本；若小步骤本身已经具有较高的复杂度，建议使用其它方式呈现。">每个小步骤建议尽量简洁清晰，以降低用户的理解和操作成本；若小步骤本身已经具有较高的复杂度，建议使用其它方式呈现。 <a class="header-anchor" href="#每个小步骤建议尽量简洁清晰，以降低用户的理解和操作成本；若小步骤本身已经具有较高的复杂度，建议使用其它方式呈现。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/steps/steps-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/steps/steps-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="建议用简明的语言对步骤进行描述，描述文案不宜过长。">建议用简明的语言对步骤进行描述，描述文案不宜过长。 <a class="header-anchor" href="#建议用简明的语言对步骤进行描述，描述文案不宜过长。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/steps/steps-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div><hr><h5 id="尽量避免嵌套步骤条。">尽量避免嵌套步骤条。 <a class="header-anchor" href="#尽量避免嵌套步骤条。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/steps/steps-7.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./progress">进度条</a></td><td style="text-align:left;">当有一项系统任务正在进行，需要向用户展示该任务的当前进度时使用。</td></tr><tr><td style="text-align:left;"><a href="./tabs">选项卡</a></td><td style="text-align:left;">当内容/数据需要一定的分类纬度进行区分，便于用户快速作出选择并切换时可以使用。</td></tr></tbody></table>',19),ot=[st],rt=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416475819"})],-1),it=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function at(e,r,n,i,l,m){const d=v("Stackblitz");return b(),u("td-doc-content",k,[t("td-doc-header",C,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,E),a(t("div",null,[t("div",D,[T,t("div",N,[t("td-doc-demo",{code:e.DemoexamplehorizontalCode,language:"markup","show-code":"",mode:"open","demo-name":"horizontal","component-name":" README"},[t("div",q,[s(d,{"demo-name":"horizontal","component-name":" README",code:e.DemoexamplehorizontalCode},null,8,["code"])])],8,I)]),A,M,t("div",R,[t("td-doc-demo",{code:e.DemoexampleverticalCode,language:"markup","show-code":"",mode:"open","demo-name":"vertical","component-name":" README"},[t("div",F,[s(d,{"demo-name":"vertical","component-name":" README",code:e.DemoexampleverticalCode},null,8,["code"])])],8,z)]),$,j,P,t("div",H,[t("td-doc-demo",{code:e.DemoexamplestatusCode,language:"markup","show-code":"",mode:"open","demo-name":"status","component-name":" README"},[t("div",V,[s(d,{"demo-name":"status","component-name":" README",code:e.DemoexamplestatusCode},null,8,["code"])])],8,O)]),B,J,U,G,t("div",Q,[t("td-doc-demo",{code:e.DemoexamplespecialCode,language:"markup","show-code":"",mode:"open","demo-name":"special","component-name":" README"},[t("div",L,[s(d,{"demo-name":"special","component-name":" README",code:e.DemoexamplespecialCode},null,8,["code"])])],8,K)])]),t("td-doc-phone",W,Y,512),Z],512),[[c,e.tab==="demo"]]),a(t("div",tt,nt,512),[[c,e.tab==="api"]]),a(t("div",dt,ot,512),[[c,e.tab==="design"]]),rt,it],512)}const lt=h(w,[["render",at]]);export{lt as default};
