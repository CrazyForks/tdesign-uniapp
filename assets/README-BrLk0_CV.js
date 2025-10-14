import{_ as h,d as g,c as v,a as t,w as s,v as i,b as c,e as d,f as l,r as u,o as b}from"./sites-QsDL4Fx-.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const x=`<template>
  <view>
    <t-avatar
      t-class="avatar-example"
      :image="image"
    />
    <t-avatar
      t-class="avatar-example"
      shape="round"
      :image="image"
    />
  </view>
</template>

<script>
import tAvatar from 'tdesign-uniapp/avatar/avatar';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tAvatar,
  },
  data() {
    return {
      image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
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
    <t-avatar
      class="avatar-example"
      t-class-content="external-class-content"
      aria-label="字符头像"
    >
      A
    </t-avatar>
    <t-avatar
      class="avatar-example"
      t-class-content="external-class-content"
      shape="round"
    >
      A
    </t-avatar>
  </view>
</template>

<script>
import tAvatar from 'tdesign-uniapp/avatar/avatar';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tAvatar,
  },
  data() {
    return {
      image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,A=`<template>
  <view>
    <t-avatar
      class="avatar-example"
      icon="user"
    />
    <t-avatar
      class="avatar-example"
      shape="round"
      icon="user"
    />
  </view>
</template>

<script>
import tAvatar from 'tdesign-uniapp/avatar/avatar';
export default {
  components: {
    tAvatar,
  },
  data() {
    return {
      image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,E=`<template>
  <view>
    <t-avatar
      class="avatar-example"
      :image="image"
      :badge-props="{dot: true, offset: [0, 4] }"
    />
    <t-avatar
      class="avatar-example"
      t-class-content="external-class-content"
      :badge-props="{count: 8, offset: [-6, 6] }"
    >
      A
    </t-avatar>
    <t-avatar
      class="avatar-example"
      icon="user"
      :badge-props="{count: 12, offset: [-6, 6] }"
    />
  </view>
</template>

<script>
import tAvatar from 'tdesign-uniapp/avatar/avatar';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tAvatar,
  },
  data() {
    return {
      image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    };
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
    <t-avatar-group
      max="5"
      collapse-avatar="+5"
    >
      <t-avatar
        v-for="(pic, index) in pics"
        :key="index"
        :image="pic"
      />
    </t-avatar-group>
  </view>
</template>

<script>
import tAvatar from 'tdesign-uniapp/avatar/avatar';
import tAvatarGroup from 'tdesign-uniapp/avatar-group/avatar-group';
export default {
  components: {
    tAvatar,
    tAvatarGroup,
  },
  data() {
    return {
      pics: [
        'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar2.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar3.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar4.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar5.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      ],
      pic: '',
    };
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
    <t-avatar-group
      cascading="right-up"
      max="5"
      @collapsed-item-click="onClickCollapsedAvatar"
    >
      <t-avatar
        v-for="(pic, index) in pics"
        :key="index"
        :image="pic"
      />
    </t-avatar-group>
  </view>
</template>

<script>
import tAvatar from 'tdesign-uniapp/avatar/avatar';
import tAvatarGroup from 'tdesign-uniapp/avatar-group/avatar-group';
export default {
  components: {
    tAvatar,
    tAvatarGroup,
  },
  data() {
    return {
      pics: [
        'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar2.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar3.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar4.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar5.png',
        'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      ],
      pic: '',
    };
  },
  created() {},
  methods: {
    onAddTap() {
      uni.showToast({
        title: '您按下了添加',
        icon: 'none',
        duration: 1000,
      });
    },
    onClickCollapsedAvatar() {
      console.log('click collapsed avatar');
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,w=`<template>
  <view>
    <view class="avatar-example">
      <t-avatar
        class="avatar-example--large"
        :image="image"
        size="large"
      />
      <t-avatar
        class="avatar-example--large"
        t-class-content="external-class-content"
        size="large"
      >
        A
      </t-avatar>
      <t-avatar
        class="avatar-example--large"
        icon="user"
        size="large"
      />
    </view>

    <view class="avatar-example">
      <t-avatar
        class="avatar-example--medium"
        :image="image"
      />
      <t-avatar
        class="avatar-example--medium"
        t-class-content="external-class-content"
        size="medium"
      >
        A
      </t-avatar>
      <t-avatar
        class="avatar-example--medium"
        icon="user"
        size="medium"
      />
    </view>

    <view class="avatar-example">
      <t-avatar
        class="avatar-example--small"
        :image="image"
        size="small"
      />
      <t-avatar
        class="avatar-example--small"
        t-class-content="external-class-content"
        size="small"
      >
        A
      </t-avatar>
      <t-avatar
        class="avatar-example--small"
        icon="user"
        size="small"
      />
    </view>
  </view>
</template>

<script>
import tAvatar from 'tdesign-uniapp/avatar/avatar';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tAvatar,
  },
  data() {
    return {
      image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
@import './index.css';
</style>
`,k=g({data(){return{DemoexampleimageavatarCode:x,DemoexamplecharacteravatarCode:_,DemoexampleiconavatarCode:A,DemoexamplebadgeavatarCode:E,DemoexampleexhibitionCode:D,DemoexampleactionCode:y,DemoexamplesizeCode:w}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(a){this.$route.query.tab!==a&&this.$router.push({query:{tab:a}})}}},mounted(){const{tdDocContent:a,tdDocHeader:o,tdDocTabs:n,tdDocPhone:r}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/avatar/avatar";o&&(o.docInfo={title:"Avatar 头像",desc:"用于展示用户头像信息，除了纯展示也可点击进入个人详情等操作。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:p})=>this.tab=p),r&&(r.qrcodeUrl=m),f.highlightAll(),this.$emit("loaded",()=>{a.pageStatus="show"})}}),C={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},z={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"avatar"},S=["tab"],M={name:"DEMO"},R=c(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;t-avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/avatar/avatar&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;t-avatar-group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/avatar-group/avatar-group&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/a86Sfimw7VSO" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="头像类型">头像类型 <a class="header-anchor" href="#头像类型"></a></h3><p>图片头像</p>`,8),N={class:"tdesign-demo-wrapper tdesign-demo-item-- README-image-avatar tdesign-demo-item-- README"},q=["code"],T={slot:"action"},G=t("p",null,"字符头像",-1),I={class:"tdesign-demo-wrapper tdesign-demo-item-- README-character-avatar tdesign-demo-item-- README"},j=["code"],P={slot:"action"},O=t("p",null,"图标头像",-1),$={class:"tdesign-demo-wrapper tdesign-demo-item-- README-icon-avatar tdesign-demo-item-- README"},B=["code"],V={slot:"action"},H=t("p",null,"徽标头像",-1),U={class:"tdesign-demo-wrapper tdesign-demo-item-- README-badge-avatar tdesign-demo-item-- README"},J=["code"],F={slot:"action"},K=t("h3",{id:"组合头像"},[l("组合头像 "),t("a",{class:"header-anchor",href:"#组合头像"})],-1),L=t("p",null,"纯展示",-1),Q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-exhibition tdesign-demo-item-- README"},W=["code"],X={slot:"action"},Y=t("p",null,"带操作",-1),Z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-action tdesign-demo-item-- README"},tt=["code"],at={slot:"action"},et=t("h3",{id:"头像尺寸"},[l("头像尺寸 "),t("a",{class:"header-anchor",href:"#头像尺寸"})],-1),dt=t("p",null,"头像 large/medium/small 尺寸",-1),nt={class:"tdesign-demo-wrapper tdesign-demo-item-- README-size tdesign-demo-item-- README"},ot=["code"],rt={slot:"action"},st={ref:"tdDocPhone"},it=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/avatar/avatar",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),ct=[it],mt=t("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"avatar"},null,-1),pt={name:"API"},lt=c('<h3 id="avatar-props">Avatar Props <a class="header-anchor" href="#avatar-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>alt</td><td>String</td><td>-</td><td>头像替换文本，仅当图片加载失败时有效</td><td>N</td></tr><tr><td>badge-props</td><td>Object</td><td>-</td><td>头像右上角提示信息，继承 Badge 组件的全部特性。如：小红点，或者数字。TS 类型：<code>BadgeProps</code>，<a href="./badge?tab=api">Badge API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/avatar/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>bordered</td><td>Boolean</td><td>false</td><td>已废弃。是否显示外边框</td><td>N</td></tr><tr><td>hide-on-load-failed</td><td>Boolean</td><td>false</td><td>加载失败时隐藏图片</td><td>N</td></tr><tr><td>icon</td><td>String / Object</td><td>-</td><td>图标。值为字符串表示图标名称，值为 <code>Object</code> 类型，表示透传至 <code>icon</code></td><td>N</td></tr><tr><td>image</td><td>String</td><td>-</td><td>图片地址</td><td>N</td></tr><tr><td>image-props</td><td>Object</td><td>-</td><td>透传至 Image 组件。TS 类型：<code>ImageProps</code>，<a href="./image?tab=api">Image API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/avatar/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>shape</td><td>String</td><td>-</td><td>形状。优先级高于 AvatarGroup.shape 。Avatar 单独存在时，默认值为 circle。如果父组件 AvatarGroup 存在，默认值便由 AvatarGroup.shape 决定。可选项：circle/round。TS 类型：<code>ShapeEnum</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>size</td><td>String</td><td>-</td><td>尺寸，示例值：small/medium/large/24px/38px 等。优先级高于 AvatarGroup.size 。Avatar 单独存在时，默认值为 medium。如果父组件 AvatarGroup 存在，默认值便由 AvatarGroup.size 决定</td><td>N</td></tr></tbody></table><h3 id="avatar-events">Avatar Events <a class="header-anchor" href="#avatar-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>error</td><td>-</td><td>图片加载失败时触发</td></tr></tbody></table><h3 id="avatar-external-classes">Avatar External Classes <a class="header-anchor" href="#avatar-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-alt</td><td>替代文本样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-icon</td><td>图标样式类</td></tr><tr><td>t-class-image</td><td>图片样式类</td></tr></tbody></table><h3 id="avatargroup-props">AvatarGroup Props <a class="header-anchor" href="#avatargroup-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>cascading</td><td>String</td><td>&#39;left-up&#39;</td><td>图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上。可选项：left-up/right-up。TS 类型：<code>CascadingValue</code> <code>type CascadingValue = &#39;left-up&#39; \\| &#39;right-up&#39;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/avatar-group/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>collapse-avatar</td><td>String / Slot</td><td>-</td><td>头像数量超出时，会出现一个头像折叠元素。该元素内容可自定义。默认为 <code>+N</code>。示例：<code>+5</code>，<code>...</code>, <code>更多</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>max</td><td>Number</td><td>-</td><td>能够同时显示的最多头像数量</td><td>N</td></tr><tr><td>shape</td><td>String</td><td>-</td><td>形状。优先级低于 Avatar.shape。可选项：circle/round。TS 类型：<code>ShapeEnum</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>size</td><td>String</td><td>-</td><td>尺寸，示例值：small/medium/large/24px/38px 等。优先级低于 Avatar.size</td><td>N</td></tr></tbody></table><h3 id="avatargroup-events">AvatarGroup Events <a class="header-anchor" href="#avatargroup-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>collapsed-item-click</td><td>-</td><td>点击头像折叠元素触发</td></tr></tbody></table><h3 id="avatargroup-external-classes">AvatarGroup External Classes <a class="header-anchor" href="#avatargroup-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-image</td><td>图片样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-avatar-group-init-z-index</td><td>@avatar-group-init-zIndex) - @i</td><td>-</td></tr><tr><td>--td-avatar-group-line-spacing</td><td>4rpx</td><td>-</td></tr><tr><td>--td-avatar-group-margin-left-large</td><td>-16rpx</td><td>-</td></tr><tr><td>--td-avatar-group-margin-left-medium</td><td>-16rpx</td><td>-</td></tr><tr><td>--td-avatar-group-margin-left-small</td><td>-16rpx</td><td>-</td></tr><tr><td>--td-avatar-bg-color</td><td>@brand-color-light-active</td><td>-</td></tr><tr><td>--td-avatar-border-color</td><td>#fff</td><td>-</td></tr><tr><td>--td-avatar-border-width-large</td><td>6rpx</td><td>-</td></tr><tr><td>--td-avatar-border-width-medium</td><td>4rpx</td><td>-</td></tr><tr><td>--td-avatar-border-width-small</td><td>2rpx</td><td>-</td></tr><tr><td>--td-avatar-circle-border-radius</td><td>@radius-circle</td><td>-</td></tr><tr><td>--td-avatar-content-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-avatar-icon-large-font-size</td><td>64rpx</td><td>-</td></tr><tr><td>--td-avatar-icon-medium-font-size</td><td>48rpx</td><td>-</td></tr><tr><td>--td-avatar-icon-small-font-size</td><td>40rpx</td><td>-</td></tr><tr><td>--td-avatar-large-width</td><td>128rpx</td><td>-</td></tr><tr><td>--td-avatar-margin-left</td><td>0</td><td>-</td></tr><tr><td>--td-avatar-medium-width</td><td>96rpx</td><td>-</td></tr><tr><td>--td-avatar-round-border-radius</td><td>@radius-default</td><td>-</td></tr><tr><td>--td-avatar-small-width</td><td>80rpx</td><td>-</td></tr><tr><td>--td-avatar-text-large-font-size</td><td>@font-size-xl</td><td>-</td></tr><tr><td>--td-avatar-text-medium-font-size</td><td>@font-size-m</td><td>-</td></tr><tr><td>--td-avatar-text-small-font-size</td><td>@font-size-base</td><td>-</td></tr></tbody></table>',15),ht=[lt],gt={name:"DESIGN"},vt=c('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>作为一个用户信息展示，或用来代表某个/某些具体用户。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="头像与动作面板-组合使用，在分享场景中利用动作面板承载用户头像，用于分享对象的选择。">头像与<a href="./action-sheet">动作面板</a> 组合使用，在分享场景中利用动作面板承载用户头像，用于分享对象的选择。 <a class="header-anchor" href="#头像与动作面板-组合使用，在分享场景中利用动作面板承载用户头像，用于分享对象的选择。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/avatar/avatar-1.png"></div></div><hr><h5 id="头像与单元格-组合使用，用于展示结构化的成员名称及信息，方便快速识别。">头像与<a href="./cell">单元格</a> 组合使用，用于展示结构化的成员名称及信息，方便快速识别。 <a class="header-anchor" href="#头像与单元格-组合使用，用于展示结构化的成员名称及信息，方便快速识别。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/avatar/avatar-2.png"></div></div><hr><h5 id="头像与徽标-组合使用，可作为消息提示或人员数量提示等。">头像与<a href="./badge">徽标</a> 组合使用，可作为消息提示或人员数量提示等。 <a class="header-anchor" href="#头像与徽标-组合使用，可作为消息提示或人员数量提示等。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/avatar/avatar-3.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="多个头像可组合展示构成头像组；当页面布局空间有限，超过可外显个数时候，可将重复性较高的头像信息做隐藏收起，需要时再让用户主动触发查看。">多个头像可组合展示构成头像组；当页面布局空间有限，超过可外显个数时候，可将重复性较高的头像信息做隐藏收起，需要时再让用户主动触发查看。 <a class="header-anchor" href="#多个头像可组合展示构成头像组；当页面布局空间有限，超过可外显个数时候，可将重复性较高的头像信息做隐藏收起，需要时再让用户主动触发查看。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/avatar/avatar-4.png"></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="对于字符型头像，需要根据场景定义最大字符数，避免字符过多影响可读性，降低可识别度。">对于字符型头像，需要根据场景定义最大字符数，避免字符过多影响可读性，降低可识别度。 <a class="header-anchor" href="#对于字符型头像，需要根据场景定义最大字符数，避免字符过多影响可读性，降低可识别度。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/avatar/avatar-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/avatar/avatar-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div>',17),ut=[vt],bt=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760416343476"})],-1),ft=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function xt(a,o,n,r,m,p){const e=u("Stackblitz");return b(),v("td-doc-content",C,[t("td-doc-header",z,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:a.tab},null,8,S),s(t("div",null,[t("div",M,[R,t("div",N,[t("td-doc-demo",{code:a.DemoexampleimageavatarCode,language:"markup","show-code":"",mode:"open","demo-name":"image-avatar","component-name":" README"},[t("div",T,[d(e,{"demo-name":"image-avatar","component-name":" README",code:a.DemoexampleimageavatarCode},null,8,["code"])])],8,q)]),G,t("div",I,[t("td-doc-demo",{code:a.DemoexamplecharacteravatarCode,language:"markup","show-code":"",mode:"open","demo-name":"character-avatar","component-name":" README"},[t("div",P,[d(e,{"demo-name":"character-avatar","component-name":" README",code:a.DemoexamplecharacteravatarCode},null,8,["code"])])],8,j)]),O,t("div",$,[t("td-doc-demo",{code:a.DemoexampleiconavatarCode,language:"markup","show-code":"",mode:"open","demo-name":"icon-avatar","component-name":" README"},[t("div",V,[d(e,{"demo-name":"icon-avatar","component-name":" README",code:a.DemoexampleiconavatarCode},null,8,["code"])])],8,B)]),H,t("div",U,[t("td-doc-demo",{code:a.DemoexamplebadgeavatarCode,language:"markup","show-code":"",mode:"open","demo-name":"badge-avatar","component-name":" README"},[t("div",F,[d(e,{"demo-name":"badge-avatar","component-name":" README",code:a.DemoexamplebadgeavatarCode},null,8,["code"])])],8,J)]),K,L,t("div",Q,[t("td-doc-demo",{code:a.DemoexampleexhibitionCode,language:"markup","show-code":"",mode:"open","demo-name":"exhibition","component-name":" README"},[t("div",X,[d(e,{"demo-name":"exhibition","component-name":" README",code:a.DemoexampleexhibitionCode},null,8,["code"])])],8,W)]),Y,t("div",Z,[t("td-doc-demo",{code:a.DemoexampleactionCode,language:"markup","show-code":"",mode:"open","demo-name":"action","component-name":" README"},[t("div",at,[d(e,{"demo-name":"action","component-name":" README",code:a.DemoexampleactionCode},null,8,["code"])])],8,tt)]),et,dt,t("div",nt,[t("td-doc-demo",{code:a.DemoexamplesizeCode,language:"markup","show-code":"",mode:"open","demo-name":"size","component-name":" README"},[t("div",rt,[d(e,{"demo-name":"size","component-name":" README",code:a.DemoexamplesizeCode},null,8,["code"])])],8,ot)])]),t("td-doc-phone",st,ct,512),mt],512),[[i,a.tab==="demo"]]),s(t("div",pt,ht,512),[[i,a.tab==="api"]]),s(t("div",gt,ut,512),[[i,a.tab==="design"]]),bt,ft],512)}const Et=h(k,[["render",xt]]);export{Et as default};
