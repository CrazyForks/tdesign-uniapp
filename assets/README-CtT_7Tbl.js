import{_ as c,d as p,c as h,a as t,w as a,v as m,b as s,e as i,f as b,r as u,o as x}from"./sites-Co6lQ2MM.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view>
    <t-grid
      class="block"
      :column="5"
    >
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img1"
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img2"
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img3"
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img2"
      />
      <t-grid-item
        t-class-image="image"
        text="最多四字"
        :image="img1"
      />
    </t-grid>

    <t-grid class="block">
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img1"
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img2"
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img3"
      />
      <t-grid-item
        t-class-image="image"
        text="最多五个字"
        :image="img1"
      />
    </t-grid>

    <t-grid
      class="block"
      :column="3"
    >
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img1"
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img2"
      />
      <t-grid-item
        t-class-image="image"
        text="最多六个文字"
        :image="img3"
      />
    </t-grid>
  </view>
</template>

<script>
import tGrid from 'tdesign-uniapp/grid/grid.vue';
import tGridItem from 'tdesign-uniapp/grid-item/grid-item.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tGrid,
    tGridItem,
  },
  data() {
    return {
      img1: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
      img2: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
      img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.block {
    display: block;
    margin-bottom: 32rpx;
}

.block :deep(.image) {
    position: inherit;
}

.block :deep(.image)::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border-radius: 24rpx;
    border: 2rpx solid var(--td-gray-color-4);
    transform-origin: 0 0;
    transform: scale(0.5);
}
</style>
`,_=`<template>
  <view>
    <view class="block">
      <t-grid :column="3">
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          description="描述文字"
          :image="img1"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          description="描述文字"
          :image="img2"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          description="描述文字"
          :image="img3"
        />
      </t-grid>
    </view>

    <view class="block">
      <t-grid
        :column="2"
        align="left"
      >
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          description="描述文字"
          layout="horizontal"
          :image="img1"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          description="描述文字"
          layout="horizontal"
          :image="img2"
        />
      </t-grid>
    </view>
  </view>
</template>

<script>
import tGrid from 'tdesign-uniapp/grid/grid.vue';
import tGridItem from 'tdesign-uniapp/grid-item/grid-item.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tGrid,
    tGridItem,
  },
  data() {
    return {
      img1: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
      img2: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
      img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.block {
    display: block;
    margin-bottom: 32rpx;
}

.block :deep(.image) {
    position: inherit;
}

.block :deep(.image)::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border-radius: 24rpx;
    border: 2rpx solid var(--td-gray-color-4);
    transform-origin: 0 0;
    transform: scale(0.5);
}
</style>
`,y=`<template>
  <view>
    <view class="block">
      <t-grid
        :border="border"
        :column="3"
      >
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img1"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img2"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img3"
        />
      </t-grid>
    </view>

    <view class="block">
      <t-grid
        :border="border"
        :column="2"
        align="left"
      >
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          description="描述文字"
          layout="horizontal"
          :image="img1"
        />
        <t-grid-item
          t-class-image="image"
          text="标题最多六字"
          description="描述文字"
          layout="horizontal"
          :image="img2"
        />
      </t-grid>
    </view>
  </view>
</template>

<script>
import tGrid from 'tdesign-uniapp/grid/grid.vue';
import tGridItem from 'tdesign-uniapp/grid-item/grid-item.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tGrid,
    tGridItem,
  },
  data() {
    return {
      img1: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
      img2: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
      img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
      border: {
        color: 'var(--td-border-level-1-color, #E7E7E7)',
      },
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.block {
    display: block;
    margin-bottom: 32rpx;
}

.block :deep(.image) {
    position: inherit;
}

.block :deep(.image)::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border-radius: 24rpx;
    border: 2rpx solid var(--td-gray-color-4);
    transform-origin: 0 0;
    transform: scale(0.5);
}
</style>
`,k=`<template>
  <view>
    <t-grid class="t-grid badge">
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img1"
        :badge-props="{ dot: true }"
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img2"
        :badge-props=" { count: 8 } "
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img3"
        :badge-props="{ count: 13 } "
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img3"
        :badge-props="{ count: 'NEW' } "
      />
    </t-grid>
  </view>
</template>

<script>
import tGrid from 'tdesign-uniapp/grid/grid.vue';
import tGridItem from 'tdesign-uniapp/grid-item/grid-item.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tGrid,
    tGridItem,
  },
  data() {
    return {
      img1: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
      img2: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
      img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.external-class-content {
    padding: 32rpx 0 !important;
}

.text {
    font-size: 24rpx !important;
    line-height: 40rpx !important;
    padding-top: 20rpx !important;
}
:deep(.image) {
    width: 64rpx !important;
    height: 64rpx !important;
}
.image-icon {
    width: 64rpx;
    height: 64rpx;
}

.badge-circle {
    display: flex;
    justify-content: center;
    background-color: #e34d59;
    border-radius: 15rpx;
    width: 36rpx;
    height: 32rpx;
    align-items: center;
    position: absolute;
    top: -15rpx;
    left: 46rpx;
}

.circle {
    width: 4rpx;
    height: 4rpx;
    border-radius: 2rpx;
    background-color: white;
    margin-left: 4rpx;
}

.badge-circle-container {
    margin-left: -4rpx;
    display: flex;
}

.badge :deep(.image) {
    position: inherit;
}

.badge :deep(.image)::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border-radius: 24rpx;
    border: 2rpx solid var(--td-gray-color-4);
    transform-origin: 0 0;
    transform: scale(0.5);
}
</style>
`,E=`<template>
  <view>
    <t-grid
      class="block"
      :column="0"
    >
      <t-grid-item
        v-for="(item, index) in gridItemList"
        :key="index"
        t-class-image="image"
        :text="item.text"
        :image="item.img"
      />
    </t-grid>
  </view>
</template>

<script>
import tGrid from 'tdesign-uniapp/grid/grid.vue';
import tGridItem from 'tdesign-uniapp/grid-item/grid-item.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tGrid,
    tGridItem,
  },
  data() {
    return {
      gridItemList: [
        {
          text: '标题文字',
          img: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
        },
        {
          text: '标题文字',
          img: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
        },
        {
          text: '标题文字',
          img: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
        },
        {
          text: '最多五个字',
          img: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
        },
        {
          text: '最多五个字',
          img: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
        },
        {
          text: '最多五个字',
          img: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
        },
      ],
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.block {
    display: block;
    margin-bottom: 32rpx;
}

.block :deep(.image) {
    position: inherit;
}

.block :deep(.image)::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border-radius: 24rpx;
    border: 2rpx solid var(--td-gray-color-4);
    transform-origin: 0 0;
    transform: scale(0.5);
}
</style>
`,w=`<template>
  <view>
    <t-grid class="block">
      <t-grid-item
        text="分享"
        image="slot"
      >
        <template
          #image
        >
          <view
            class="grid-item__image"
          >
            <t-button
              variant="text"
              icon="share"
              open-type="share"
            />
          </view>
        </template>
      </t-grid-item>
      <t-grid-item
        text="收藏"
        icon="star"
        @click="onClick"
      />
      <t-grid-item
        text="保存"
        icon="download"
        @click="onClick"
      />
      <t-grid-item
        text="编辑"
        icon="edit-1"
        @click="onClick"
      />
    </t-grid>
  </view>
</template>

<script>
import tGrid from 'tdesign-uniapp/grid/grid.vue';
import tGridItem from 'tdesign-uniapp/grid-item/grid-item.vue';
import tButton from 'tdesign-uniapp/button/button.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tGrid,
    tGridItem,
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onClick() {
      console.log('click grid-item');
    },
  },
};
<\/script>
<style>
.block {
    display: block;
    margin-bottom: 32rpx;
}

:deep(.grid-item__image) {
    --td-button-medium-icon-font-size: 48rpx;

    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: var(--td-bg-color-secondarycontainer);
    border-radius: 12rpx;
}
</style>
`,D=`<template>
  <view>
    <t-grid
      class="block"
      :column="4"
    >
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img1"
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img2"
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img3"
      />
      <t-grid-item
        t-class-image="image"
        text="最多五个字"
        :image="img1"
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img1"
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img3"
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img1"
      />
      <t-grid-item
        t-class-image="image"
        text="最多五个字"
        :image="img2"
      />
    </t-grid>
  </view>
</template>

<script>
import tGrid from 'tdesign-uniapp/grid/grid.vue';
import tGridItem from 'tdesign-uniapp/grid-item/grid-item.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tGrid,
    tGridItem,
  },
  data() {
    return {
      img1: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
      img2: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
      img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.block {
    display: block;
    margin-bottom: 32rpx;
}

.block :deep(.image) {
    position: inherit;
}

.block :deep(.image)::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border-radius: 24rpx;
    border: 2rpx solid var(--td-gray-color-4);
    transform-origin: 0 0;
    transform: scale(0.5);
}
</style>
`,G=`<template>
  <view>
    <view class="block">
      <t-grid
        :column="4"
        theme="card"
      >
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img1"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img2"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img3"
        />
        <t-grid-item
          t-class-image="image"
          text="最多五个字"
          :image="img1"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img1"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img3"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img2"
        />
        <t-grid-item
          t-class-image="image"
          text="最多五个字"
          :image="img2"
        />
      </t-grid>
    </view>

    <view class="block">
      <t-grid
        :column="2"
        theme="card"
        align="left"
      >
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          description="描述文字"
          layout="horizontal"
          :image="img1"
        />
        <t-grid-item
          t-class-image="image"
          text="标题最多六字"
          description="描述文字"
          layout="horizontal"
          :image="img2"
        />
      </t-grid>
    </view>
  </view>
</template>

<script>
import tGrid from 'tdesign-uniapp/grid/grid.vue';
import tGridItem from 'tdesign-uniapp/grid-item/grid-item.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tGrid,
    tGridItem,
  },
  data() {
    return {
      img1: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
      img2: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
      img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
      border: '',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style>
.block {
    display: block;
    margin-bottom: 32rpx;
}

.block :deep(.image) {
    position: inherit;
}

.block :deep(.image)::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border-radius: 24rpx;
    border: 2rpx solid var(--td-gray-color-4);
    transform-origin: 0 0;
    transform: scale(0.5);
}
</style>
`,I=p({data(){return{DemoexamplebaseCode:v,DemoexampledescriptionCode:_,DemoexampleborderCode:y,DemoexamplebadgeCode:k,DemoexamplescrollCode:E,DemoexampleicongridCode:w,DemoexamplemultipleCode:D,DemoexamplecardCode:G}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:o,tdDocTabs:d,tdDocPhone:r}=this.$refs,g="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/grid/grid";o&&(o.docInfo={title:"Grid 宫格",desc:"用于功能入口布局，将页面或特定区域切分成若干等大的区块，形成若干功能入口。"}),d&&(d.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],d.onchange=({detail:l})=>this.tab=l),r&&(r.qrcodeUrl=g),f.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}}),A={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},C={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"data","component-name":"grid"},M=["tab"],R={name:"DEMO"},N=s(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TGrid <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/grid/grid.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TGridItem <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/grid-item/grid-item.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><p>基础宫格</p>`,5),S={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},z=["code"],j={slot:"action"},P=t("p",null,"带说明的宫格",-1),T={class:"tdesign-demo-wrapper tdesign-demo-item-- README-description tdesign-demo-item-- README"},B=["code"],O={slot:"action"},$=t("p",null,"带边框的宫格",-1),V={class:"tdesign-demo-wrapper tdesign-demo-item-- README-border tdesign-demo-item-- README"},q=["code"],H={slot:"action"},L=t("p",null,"带徽章的宫格",-1),U={class:"tdesign-demo-wrapper tdesign-demo-item-- README-badge tdesign-demo-item-- README"},W=["code"],F={slot:"action"},J=t("p",null,"可滑动的宫格",-1),K={class:"tdesign-demo-wrapper tdesign-demo-item-- README-scroll tdesign-demo-item-- README"},Q=["code"],X={slot:"action"},Y=t("h3",{id:"组件样式"},[b("组件样式 "),t("a",{class:"header-anchor",href:"#组件样式"})],-1),Z=t("p",null,"可传图标的宫格",-1),tt={class:"tdesign-demo-wrapper tdesign-demo-item-- README-icon-grid tdesign-demo-item-- README"},et=["code"],nt={slot:"action"},it=t("p",null,"多行宫格",-1),dt={class:"tdesign-demo-wrapper tdesign-demo-item-- README-multiple tdesign-demo-item-- README"},ot=["code"],rt={slot:"action"},at=t("p",null,"卡片宫格",-1),mt={class:"tdesign-demo-wrapper tdesign-demo-item-- README-card tdesign-demo-item-- README"},st=["code"],gt={slot:"action"},lt={ref:"tdDocPhone"},ct=t("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/grid/grid",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),pt=[ct],ht={name:"API"},bt=s('<h3 id="grid-props">Grid Props <a class="header-anchor" href="#grid-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>align</td><td>String</td><td>center</td><td>内容对齐方式。可选项：left/center</td><td>N</td></tr><tr><td>border</td><td>Boolean / Object</td><td>false</td><td>边框，默认不显示。值为 true 则显示默认边框，值类型为 object 则表示自定义边框样式。TS 类型：<code>boolean \\| { color?: string; width?: string; style?: &#39;solid&#39; \\| &#39;dashed&#39; \\| &#39;dotted&#39; \\| &#39;double&#39; \\| &#39;groove&#39; \\| &#39;inset&#39; \\| &#39;outset&#39; }</code></td><td>N</td></tr><tr><td>column</td><td>Number</td><td>4</td><td>每一行的列数量；为 0 时等于固定大小</td><td>N</td></tr><tr><td>gutter</td><td>Number</td><td>-</td><td>间隔大小</td><td>N</td></tr><tr><td>hover</td><td>Boolean</td><td>false</td><td>是否开启点击反馈</td><td>N</td></tr><tr><td>theme</td><td>String</td><td>default</td><td>宫格的风格。可选项：default/card</td><td>N</td></tr></tbody></table><h3 id="grid-external-classes">Grid External Classes <a class="header-anchor" href="#grid-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr></tbody></table><h3 id="griditem-props">GridItem Props <a class="header-anchor" href="#griditem-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>badge-props</td><td>Object</td><td>null</td><td>透传至 Badge 属性。TS 类型：<code>BadgeProps</code>，<a href="./badge?tab=api">Badge API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/grid-item/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>description</td><td>String / Slot</td><td>-</td><td>文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>icon</td><td>String / Object</td><td>-</td><td>图标名称。值为字符串表示图标名称，值为 <code>Object</code> 类型，表示透传至 <code>icon</code></td><td>N</td></tr><tr><td>image</td><td>String / Slot</td><td>-</td><td>图片，可以是图片地址，也可以自定义图片节点，值为 slot 的时候才能使用插槽。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>image-props</td><td>Object</td><td>-</td><td>透传至 Image 组件。TS 类型：<code>ImageProps</code>，<a href="./image?tab=api">Image API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/grid-item/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>jump-type</td><td>String</td><td>navigate-to</td><td>链接跳转类型。可选项：redirect-to/switch-tab/relaunch/navigate-to</td><td>N</td></tr><tr><td>layout</td><td>String</td><td>vertical</td><td>内容布局方式。可选项：vertical/horizontal</td><td>N</td></tr><tr><td>text</td><td>String / Slot</td><td>-</td><td>文本，可以通过 Props 传入文本，也可以自定义标题节点。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>url</td><td>String</td><td>-</td><td>点击后的跳转链接</td><td>N</td></tr></tbody></table><h3 id="griditem-events">GridItem Events <a class="header-anchor" href="#griditem-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>click</td><td>-</td><td>点击子项后触发。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td></tr></tbody></table><h3 id="griditem-external-classes">GridItem External Classes <a class="header-anchor" href="#griditem-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-content</td><td>内容样式类</td></tr><tr><td>t-class-description</td><td>描述样式类</td></tr><tr><td>t-class-image</td><td>图片样式类</td></tr><tr><td>t-class-text</td><td>文本样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-grid-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-grid-card-radius</td><td>@radius-large</td><td>-</td></tr><tr><td>--td-grid-item-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-grid-item-description-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-grid-item-description-font-size</td><td>24rpx</td><td>-</td></tr><tr><td>--td-grid-item-description-line-height</td><td>40rpx</td><td>-</td></tr><tr><td>--td-grid-item-description-padding-top</td><td>0</td><td>-</td></tr><tr><td>--td-grid-item-horizontal-text-description-top</td><td>0</td><td>-</td></tr><tr><td>--td-grid-item-horizontal-text-padding-left</td><td>0</td><td>-</td></tr><tr><td>--td-grid-item-hover-bg-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-grid-item-image-middle-width</td><td>80rpx</td><td>-</td></tr><tr><td>--td-grid-item-image-small-width</td><td>64rpx</td><td>-</td></tr><tr><td>--td-grid-item-image-width</td><td>96rpx</td><td>-</td></tr><tr><td>--td-grid-item-padding</td><td>32rpx</td><td>-</td></tr><tr><td>--td-grid-item-text-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-grid-item-text-font-size</td><td>28rpx</td><td>-</td></tr><tr><td>--td-grid-item-text-line-height</td><td>44rpx</td><td>-</td></tr><tr><td>--td-grid-item-text-middle-font-size</td><td>24rpx</td><td>-</td></tr><tr><td>--td-grid-item-text-padding-top</td><td>16rpx</td><td>-</td></tr><tr><td>--td-grid-item-text-small-font-size</td><td>24rpx</td><td>-</td></tr></tbody></table>',13),ut=[bt],xt={name:"DESIGN"},ft=s('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要展示多个功能或信息入口，且这些入口没有明显的优先级时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="可与徽标组合使用，可作为消息提示、或其它相关的数量提示。">可与徽标组合使用，可作为消息提示、或其它相关的数量提示。 <a class="header-anchor" href="#可与徽标组合使用，可作为消息提示、或其它相关的数量提示。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/grid/grid-1.png"></div></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="通常用于金刚区、或底部标签栏等，在页面中较为醒目的位置承载主要的功能入口。">通常用于金刚区、或底部标签栏等，在页面中较为醒目的位置承载主要的功能入口。 <a class="header-anchor" href="#通常用于金刚区、或底部标签栏等，在页面中较为醒目的位置承载主要的功能入口。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/grid/grid-2.png"></div></div><hr><h5 id="通常承载图片、头像等信息进行展示，并作为查看相应信息的入口。">通常承载图片、头像等信息进行展示，并作为查看相应信息的入口。 <a class="header-anchor" href="#通常承载图片、头像等信息进行展示，并作为查看相应信息的入口。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/grid/grid-3.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/grid/grid-4.png"></div></div><hr><h5 id="通常用于动作面板，和头像、图标按钮相结合，承载分享、保存到本地等操作。">通常用于动作面板，和头像、图标按钮相结合，承载分享、保存到本地等操作。 <a class="header-anchor" href="#通常用于动作面板，和头像、图标按钮相结合，承载分享、保存到本地等操作。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/grid/grid-5.png"></div></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="当在金刚区使用宫格承载功能入口时，建议梳理功能的优先级，将金刚区控制在3行以内，一些相对次要的功能可通过左右滑动的方式收纳在第二屏。">当在金刚区使用宫格承载功能入口时，建议梳理功能的优先级，将金刚区控制在3行以内，一些相对次要的功能可通过左右滑动的方式收纳在第二屏。 <a class="header-anchor" href="#当在金刚区使用宫格承载功能入口时，建议梳理功能的优先级，将金刚区控制在3行以内，一些相对次要的功能可通过左右滑动的方式收纳在第二屏。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/grid/grid-6.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/grid/grid-7.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/grid/grid-8.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/grid/grid-9.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./cell">单元格</a></td><td style="text-align:left;">用于各个类别行的信息展示。</td></tr></tbody></table>',21),vt=[ft],_t=t("div",{style:{"margin-top":"48px"}},[t("td-doc-history",{time:"1760587843648"})],-1),yt=t("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function kt(e,o,d,r,g,l){const n=u("Stackblitz");return x(),h("td-doc-content",A,[t("td-doc-header",C,null,512),t("td-doc-tabs",{ref:"tdDocTabs",tab:e.tab},null,8,M),a(t("div",null,[t("div",R,[N,t("div",S,[t("td-doc-demo",{code:e.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[t("div",j,[i(n,{"demo-name":"base","component-name":" README",code:e.DemoexamplebaseCode},null,8,["code"])])],8,z)]),P,t("div",T,[t("td-doc-demo",{code:e.DemoexampledescriptionCode,language:"markup","show-code":"",mode:"open","demo-name":"description","component-name":" README"},[t("div",O,[i(n,{"demo-name":"description","component-name":" README",code:e.DemoexampledescriptionCode},null,8,["code"])])],8,B)]),$,t("div",V,[t("td-doc-demo",{code:e.DemoexampleborderCode,language:"markup","show-code":"",mode:"open","demo-name":"border","component-name":" README"},[t("div",H,[i(n,{"demo-name":"border","component-name":" README",code:e.DemoexampleborderCode},null,8,["code"])])],8,q)]),L,t("div",U,[t("td-doc-demo",{code:e.DemoexamplebadgeCode,language:"markup","show-code":"",mode:"open","demo-name":"badge","component-name":" README"},[t("div",F,[i(n,{"demo-name":"badge","component-name":" README",code:e.DemoexamplebadgeCode},null,8,["code"])])],8,W)]),J,t("div",K,[t("td-doc-demo",{code:e.DemoexamplescrollCode,language:"markup","show-code":"",mode:"open","demo-name":"scroll","component-name":" README"},[t("div",X,[i(n,{"demo-name":"scroll","component-name":" README",code:e.DemoexamplescrollCode},null,8,["code"])])],8,Q)]),Y,Z,t("div",tt,[t("td-doc-demo",{code:e.DemoexampleicongridCode,language:"markup","show-code":"",mode:"open","demo-name":"icon-grid","component-name":" README"},[t("div",nt,[i(n,{"demo-name":"icon-grid","component-name":" README",code:e.DemoexampleicongridCode},null,8,["code"])])],8,et)]),it,t("div",dt,[t("td-doc-demo",{code:e.DemoexamplemultipleCode,language:"markup","show-code":"",mode:"open","demo-name":"multiple","component-name":" README"},[t("div",rt,[i(n,{"demo-name":"multiple","component-name":" README",code:e.DemoexamplemultipleCode},null,8,["code"])])],8,ot)]),at,t("div",mt,[t("td-doc-demo",{code:e.DemoexamplecardCode,language:"markup","show-code":"",mode:"open","demo-name":"card","component-name":" README"},[t("div",gt,[i(n,{"demo-name":"card","component-name":" README",code:e.DemoexamplecardCode},null,8,["code"])])],8,st)])]),t("td-doc-phone",lt,pt,512)],512),[[m,e.tab==="demo"]]),a(t("div",ht,ut,512),[[m,e.tab==="api"]]),a(t("div",xt,vt,512),[[m,e.tab==="design"]]),_t,yt],512)}const Dt=c(I,[["render",kt]]);export{Dt as default};
