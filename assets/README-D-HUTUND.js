import{_ as b,d as u,c as h,a as e,w as r,v as l,b as c,f as o,e as s,r as v,o as g}from"./sites-Bu3uYr-A.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const x=`<template>
  <view>
    <view class="custom-navbar">
      <t-navbar
        class="demo-navbar"
        title="TDesign"
        left-arrow
      />
    </view>

    <view
      class="side-bar-wrapper"
      :style="'height: calc(100vh - ' + navbarHeight + 'px)'"
    >
      <t-side-bar
        :value="sideBarIndex"
        @change="onSideBarChange"
      >
        <t-side-bar-item
          v-for="(item, index) in categories"
          :key="index"
          :value="item.value || index"
          :label="item.label"
          :badge-props="item.badgeProps"
        />
      </t-side-bar>
      <scroll-view
        class="content"
        scroll-y
        scroll-with-animation
        :scroll-top="scrollTop"
        @scroll="onScroll"
      >
        <view
          v-for="(item, index) in categories"
          :key="index"
          class="section"
        >
          <view class="title">
            {{ item.title || item.label }}
          </view>

          <t-grid
            :column="3"
            :border="false"
          >
            <block
              v-for="(cargo, index1) in item.items"
              :key="index1"
            >
              <t-grid-item
                t-class-image="image"
                :text="cargo.label"
                :image="cargo.image"
                :image-props="{ shape: 'round', lazy: true }"
              />
            </block>
          </t-grid>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import tSideBar from 'tdesign-uniapp/side-bar/side-bar';
import tSideBarItem from 'tdesign-uniapp/side-bar-item/side-bar-item';
import tGrid from 'tdesign-uniapp/grid/grid';
import tGridItem from 'tdesign-uniapp/grid-item/grid-item';

const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';
const items = new Array(12).fill()
  .map((_, index) => ({
    label: index % 3 === 2 ? '最多六个文字' : '标题文字',
    image,
  }));

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tSideBar,
    tSideBarItem,
    tGrid,
    tGridItem,
  },
  data() {
    return {
      sideBarIndex: 1,
      scrollTop: 0,

      categories: [
        {
          label: '选项一',
          title: '标题一',
          badgeProps: {},
          items,
        },
        {
          label: '选项二',
          title: '标题二',
          badgeProps: {
            dot: true,
          },
          items: items.slice(0, 9),
        },
        {
          label: '选项三',
          title: '标题三',
          badgeProps: {},
          items: items.slice(0, 9),
        },
        {
          label: '选项四',
          title: '标题四',
          badgeProps: {
            count: 6,
          },
          items: items.slice(0, 6),
        },
        {
          label: '选项五',
          title: '标题五',
          badgeProps: {},
          items: items.slice(0, 3),
        },
      ],

      navbarHeight: 0,
      offsetTopList: [],
      lastScrollTop: 0,

      cargo: {
        label: '',
        image: '',
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.getCustomNavbarHeight();
    }, 30);
  },
  methods: {
    getCustomNavbarHeight() {
      const query = uni.createSelectorQuery().in(this);
      const { sideBarIndex } = this;
      query.selectAll('.title').boundingClientRect();
      query.select('.custom-navbar').boundingClientRect();
      query.exec((res) => {
        const [rects, { height: navbarHeight }] = res;
        this.offsetTopList = rects.map(item => item.top - navbarHeight);

        this.navbarHeight = navbarHeight;
        this.scrollTop = this.offsetTopList[sideBarIndex];
      });
    },
    onSideBarChange(e) {
      const { value } = e;
      console.log('change: ', value);

      this.sideBarIndex = value;
      this.scrollTop = this.offsetTopList[value];
    },

    onScroll(e) {
      const { scrollTop } = e.detail;
      const threshold = 50; // 下一个标题与顶部的距离
      const direction = scrollTop > this.lastScrollTop ? 'down' : 'up';
      this.lastScrollTop = scrollTop;

      // 动态调整阈值：向下滚动时增大阈值，向上时减小
      const dynamicThreshold = direction === 'down' ? threshold * 1.5 : threshold * 0.8;

      // 使用二分查找优化查找效率
      const findNearestIndex = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        let result = 0;
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (arr[mid] <= target + dynamicThreshold) {
            result = mid;
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        return result;
      };
      const newIndex = findNearestIndex(this.offsetTopList, scrollTop);
      if (newIndex !== this.sideBarIndex) {
        this.sideBarIndex = newIndex;
      }
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,w=`<template>
  <view>
    <view class="custom-navbar">
      <t-navbar
        class="demo-navbar"
        title="TDesign"
        left-arrow
      />
    </view>

    <view
      class="side-bar-wrapper"
      :style="'height: calc(100vh - ' + navbarHeight + 'px)'"
    >
      <t-side-bar
        :value="sideBarIndex"
        @change="onSideBarChange"
      >
        <t-side-bar-item
          v-for="(item, index) in categories"
          :key="index"
          :value="item.value || index"
          :label="item.label"
          :disabled="item.disabled"
          :badge-props="item.badgeProps"
        />
      </t-side-bar>
      <view
        class="content"
        :style="'transform: translateY(-' + sideBarIndex * 100 + '%)'"
      >
        <scroll-view
          v-for="(item, index) in categories"
          :key="index"
          class="section"
          scroll-y
          :scroll-top="scrollTop"
          scroll-with-animation
          :show-scrollbar="false"
        >
          <view class="title">
            {{ item.title || item.label }}
          </view>

          <t-cell-group>
            <block
              v-for="(cargo, index1) in item.items"
              :key="index1"
            >
              <t-cell
                t-class-left="cell"
                :title="cargo.label + index"
              >
                <template
                  #image
                >
                  <t-image
                    shape="round"
                    :src="cargo.image"
                    lazy
                    t-class="image"
                  />
                </template>
              </t-cell>
            </block>
          </t-cell-group>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import tSideBar from 'tdesign-uniapp/side-bar/side-bar';
import tSideBarItem from 'tdesign-uniapp/side-bar-item/side-bar-item';
import tCellGroup from 'tdesign-uniapp/cell-group/cell-group';
import tCell from 'tdesign-uniapp/cell/cell';
import tImage from 'tdesign-uniapp/image/image';

const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';
const items = new Array(12).fill(
  {
    label: '标题文字',
    image,
  },
  0,
  12,
);

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tSideBar,
    tSideBarItem,
    tCellGroup,
    tCell,
    tImage,
  },
  data() {
    return {
      sideBarIndex: 1,
      scrollTop: 0,

      categories: [
        {
          label: '选项一',
          title: '标题一',
          badgeProps: {},
          items,
        },
        {
          label: '选项二',
          title: '标题二',
          badgeProps: {
            dot: true,
          },
          items: items.slice(0, 10),
        },
        {
          label: '选项三',
          title: '标题三',
          badgeProps: {},
          items: items.slice(0, 6),
        },
        {
          label: '选项四',
          title: '标题四',
          badgeProps: {
            count: 8,
          },
          items: items.slice(0, 8),
        },
        {
          label: '选项五',
          title: '标题五',
          badgeProps: {},
          disabled: true,
          items: items.slice(0, 8),
        },
      ],

      navbarHeight: 0,
      offsetTopList: [],

      cargo: {
        label: '',
        image: '',
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.getCustomNavbarHeight();
    }, 30);
  },
  methods: {
    getCustomNavbarHeight() {
      const query = uni.createSelectorQuery().in(this);
      query.select('.custom-navbar').boundingClientRect();
      query.exec((res) => {
        const { height = 0 } = res[0] || {};
        this.navbarHeight = height;
      });
    },

    onSideBarChange(e) {
      const { value } = e;
      console.log('change: ', value);
      this.sideBarIndex = value;
      this.scrollTop = 0;
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <view class="custom-navbar">
      <t-navbar
        class="demo-navbar"
        title="TDesign"
        left-arrow
      />
    </view>

    <view
      class="side-bar-wrapper"
      :style="'height: calc(100vh - ' + navbarHeight + 'px)'"
    >
      <t-side-bar
        :value="sideBarIndex"
        @change="onSideBarChange"
      >
        <t-side-bar-item
          v-for="(item, index) in categories"
          :key="index"
          :value="item.value || index"
          :label="item.label"
          :icon="item.icon"
          :badge-props="item.badgeProps"
        />
      </t-side-bar>
      <scroll-view
        class="content"
        scroll-y
        scroll-with-animation
        :scroll-top="scrollTop"
        @scroll="onScroll"
      >
        <view
          v-for="(item, index) in categories"
          :key="index"
          class="section"
        >
          <view class="title">
            {{ item.title || item.label }}
          </view>

          <t-grid
            :column="3"
            :border="false"
          >
            <block
              v-for="(cargo, index1) in item.items"
              :key="index1"
            >
              <t-grid-item
                t-class-image="image"
                :text="cargo.label"
                :image="cargo.image"
                :image-props="{ shape: 'round', lazy: true }"
              />
            </block>
          </t-grid>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import tSideBar from 'tdesign-uniapp/side-bar/side-bar';
import tSideBarItem from 'tdesign-uniapp/side-bar-item/side-bar-item';
import tGrid from 'tdesign-uniapp/grid/grid';
import tGridItem from 'tdesign-uniapp/grid-item/grid-item';
const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';
const items = new Array(12).fill()
  .map((_, index) => ({
    label: index % 3 === 2 ? '最多六个文字' : '标题文字',
    image,
  }));
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tSideBar,
    tSideBarItem,
    tGrid,
    tGridItem,
  },
  data() {
    return {
      sideBarIndex: 1,
      scrollTop: 0,

      categories: [
        {
          label: '选项一',
          title: '标题一',
          icon: 'app',
          badgeProps: {},
          items,
        },
        {
          label: '选项二',
          title: '标题二',
          icon: 'app',
          badgeProps: {
            dot: true,
          },
          items: items.slice(0, 9),
        },
        {
          label: '选项三',
          title: '标题三',
          icon: 'app',
          badgeProps: {},
          items: items.slice(0, 9),
        },
        {
          label: '选项四',
          title: '标题四',
          icon: 'app',
          badgeProps: {
            count: 6,
          },
          items: items.slice(0, 6),
        },
        {
          label: '选项五',
          title: '标题五',
          icon: 'app',
          badgeProps: {},
          items: items.slice(0, 3),
        },
      ],

      navbarHeight: 0,
      offsetTopList: [],
      lastScrollTop: 0,

      cargo: {
        label: '',
        image: '',
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.getCustomNavbarHeight();
    }, 30);
  },
  methods: {
    getCustomNavbarHeight() {
      const query = uni.createSelectorQuery().in(this);
      const { sideBarIndex } = this;
      query.selectAll('.title').boundingClientRect();
      query.select('.custom-navbar').boundingClientRect();
      query.exec((res) => {
        const [rects, { height: navbarHeight = 0 }] = res;
        this.offsetTopList = rects.map(item => item.top - navbarHeight);

        this.navbarHeight = navbarHeight;
        this.scrollTop = this.offsetTopList[sideBarIndex];
      });
    },
    onSideBarChange(e) {
      const { value } = e;

      this.sideBarIndex = value;
      this.scrollTop = this.offsetTopList[value];
    },

    onScroll(e) {
      const { scrollTop } = e.detail;
      const threshold = 50; // 下一个标题与顶部的距离
      const direction = scrollTop > this.lastScrollTop ? 'down' : 'up';
      this.lastScrollTop = scrollTop;

      // 动态调整阈值：向下滚动时增大阈值，向上时减小
      const dynamicThreshold = direction === 'down' ? threshold * 1.5 : threshold * 0.8;

      // 使用二分查找优化查找效率
      const findNearestIndex = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        let result = 0;
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (arr[mid] <= target + dynamicThreshold) {
            result = mid;
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        return result;
      };
      const newIndex = findNearestIndex(this.offsetTopList, scrollTop);
      if (newIndex !== this.sideBarIndex) {
        this.sideBarIndex = newIndex;
      }
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,_=`<template>
  <view>
    <view class="custom-navbar">
      <t-navbar
        class="demo-navbar"
        title="TDesign"
        left-arrow
      />
    </view>

    <view
      class="side-bar-wrapper"
      :style="'height: calc(100vh - ' + navbarHeight + 'px)'"
    >
      <t-side-bar
        :value="sideBarIndex"
        @change="onSideBarChange"
      >
        <t-side-bar-item
          v-for="(item, index) in categories"
          :key="index"
          :value="item.value || index"
          :label="item.label"
          :badge-props="item.badgeProps"
        />
      </t-side-bar>
      <scroll-view
        class="content"
        scroll-y
        scroll-with-animation
        :scroll-top="scrollTop"
        @scroll="onScroll"
      >
        <view
          v-for="(item, index) in categories"
          :key="index"
          class="section"
        >
          <view class="title">
            {{ item.title || item.label }}
          </view>

          <t-grid
            :column="3"
            :border="false"
          >
            <block
              v-for="(cargo, index1) in item.items"
              :key="index1"
            >
              <t-grid-item
                t-class-image="image"
                :text="cargo.label"
                :image="cargo.image"
                :image-props="{ shape: 'round', lazy: true }"
              />
            </block>
          </t-grid>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import tSideBar from 'tdesign-uniapp/side-bar/side-bar';
import tSideBarItem from 'tdesign-uniapp/side-bar-item/side-bar-item';
import tGrid from 'tdesign-uniapp/grid/grid';
import tGridItem from 'tdesign-uniapp/grid-item/grid-item';
const image = 'https://tdesign.gtimg.com/mobile/demos/example1.png';
const items = new Array(12).fill()
  .map((_, index) => ({
    label: index % 3 === 2 ? '最多六个文字' : '标题文字',
    image,
  }));
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tSideBar,
    tSideBarItem,
    tGrid,
    tGridItem,
  },
  data() {
    return {
      sideBarIndex: 1,
      scrollTop: 0,

      categories: [
        {
          label: '选项一',
          title: '标题一',
          badgeProps: {},
          items,
        },
        {
          label: '选项二',
          title: '标题二',
          badgeProps: {
            dot: true,
          },
          items: items.slice(0, 9),
        },
        {
          label: '选项三',
          title: '标题三',
          badgeProps: {},
          items: items.slice(0, 9),
        },
        {
          label: '选项四',
          title: '标题四',
          badgeProps: {
            count: 6,
          },
          items: items.slice(0, 6),
        },
        {
          label: '选项五',
          title: '标题五',
          badgeProps: {},
          items: items.slice(0, 3),
        },
      ],

      navbarHeight: 0,
      offsetTopList: [],
      lastScrollTop: 0,

      cargo: {
        label: '',
        image: '',
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.getCustomNavbarHeight();
    }, 30);
  },
  methods: {
    getCustomNavbarHeight() {
      const query = uni.createSelectorQuery().in(this);
      const { sideBarIndex } = this;
      query.selectAll('.title').boundingClientRect();
      query.select('.custom-navbar').boundingClientRect();
      query.exec((res) => {
        const [rects, { height: navbarHeight }] = res;
        this.offsetTopList = rects.map(item => item.top - navbarHeight);

        this.navbarHeight = navbarHeight;
        this.scrollTop = this.offsetTopList[sideBarIndex];
      });
    },
    onSideBarChange(e) {
      const { value } = e;

      this.sideBarIndex = value;
      this.scrollTop = this.offsetTopList[value];
    },

    onScroll(e) {
      const { scrollTop } = e.detail;
      const threshold = 50; // 下一个标题与顶部的距离
      const direction = scrollTop > this.lastScrollTop ? 'down' : 'up';
      this.lastScrollTop = scrollTop;

      // 动态调整阈值：向下滚动时增大阈值，向上时减小
      const dynamicThreshold = direction === 'down' ? threshold * 1.5 : threshold * 0.8;

      // 使用二分查找优化查找效率
      const findNearestIndex = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
        let result = 0;
        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (arr[mid] <= target + dynamicThreshold) {
            result = mid;
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        return result;
      };
      const newIndex = findNearestIndex(this.offsetTopList, scrollTop);
      if (newIndex !== this.sideBarIndex) {
        this.sideBarIndex = newIndex;
      }
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,T=u({data(){return{DemoexamplebaseCode:x,DemoexampleswitchCode:w,DemoexamplewithiconCode:y,DemoexamplecustomCode:_}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:a,tdDocTabs:n,tdDocPhone:d}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/side-bar/side-bar";a&&(a.docInfo={title:"SideBar 侧边栏",desc:"用于内容分类后的展示切换。"}),n&&(n.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],n.onchange=({detail:p})=>this.tab=p),d&&(d.qrcodeUrl=m),f.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}}),I={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},S={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"navigation","component-name":"side-bar"},B=["tab"],k={name:"DEMO"},C={style:{background:"#ecf2fe",display:"flex","align-items":"center","line-height":"20px",padding:"14px 24px","border-radius":"3px",color:"#555a65"}},D={fill:"none",viewBox:"0 0 16 16",width:"16px",height:"16px",style:{"margin-right":"5px"}},E=e("path",{fill:"#0052d9",d:"M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z",fillOpacity:"0.9"},null,-1),q=[E],N=c(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>全局引入，在 miniprogram 根目录下的<code>app.json</code>中配置，局部引入，在需要引入的页面或组件的<code>index.json</code>中配置。</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;t-side-bar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/side-bar/side-bar&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;t-side-bar-item&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tdesign-miniprogram/side-bar-item/side-bar-item&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="代码演示">代码演示 <a class="header-anchor" href="#代码演示"></a></h2><p><a href="https://developers.weixin.qq.com/s/fL9gNim87GSp" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a></p><blockquote style="background-color:#d9e1ff;font-size:15px;line-height:26px;margin:16px 0 0;padding:16px;border-radius:6px;color:#0052d9;"><p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i &gt; 构建npm包 &gt; 勾选 &quot;将JS编译成ES5&quot;</p></blockquote><h3 id="锚点用法">锚点用法 <a class="header-anchor" href="#锚点用法"></a></h3>`,7),P={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},H=["code"],A={slot:"action"},R=e("h3",{id:"切页用法"},[o("切页用法 "),e("a",{class:"header-anchor",href:"#切页用法"})],-1),M={class:"tdesign-demo-wrapper tdesign-demo-item-- README-switch tdesign-demo-item-- README"},L=["code"],G={slot:"action"},j=e("h3",{id:"带图标侧边导航"},[o("带图标侧边导航 "),e("a",{class:"header-anchor",href:"#带图标侧边导航"})],-1),z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-with-icon tdesign-demo-item-- README"},$=["code"],O={slot:"action"},V=e("h3",{id:"自定义样式"},[o("自定义样式 "),e("a",{class:"header-anchor",href:"#自定义样式"})],-1),Q={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom tdesign-demo-item-- README"},U=["code"],J={slot:"action"},Y={ref:"tdDocPhone"},F=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/side-bar/side-bar",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),K=[F],W=e("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"side-bar"},null,-1),X={name:"API"},Z=c('<h3 id="sidebar-props">SideBar Props <a class="header-anchor" href="#sidebar-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>value</td><td>String / Number</td><td>-</td><td>选项值</td><td>N</td></tr><tr><td>default-value</td><td>String / Number</td><td>undefined</td><td>选项值。非受控属性</td><td>N</td></tr></tbody></table><h3 id="sidebar-events">SideBar Events <a class="header-anchor" href="#sidebar-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: number \\| string, label: string)</code></td><td>选项值发生变化时触发</td></tr><tr><td>click</td><td><code>(value: number \\| string, label: string)</code></td><td>点击选项时触发</td></tr></tbody></table><h3 id="sidebaritem-props">SideBarItem Props <a class="header-anchor" href="#sidebaritem-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>badge-props</td><td>Object</td><td>-</td><td>透传至 Badge 组件。TS 类型：<code>BadgeProps</code>，<a href="./badge?tab=api">Badge API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/side-bar-item/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>false</td><td>是否禁用</td><td>N</td></tr><tr><td>icon</td><td>String / Object</td><td>-</td><td>图标，传对象则透传至 Icon</td><td>N</td></tr><tr><td>label</td><td>String</td><td>-</td><td>展示的标签</td><td>N</td></tr><tr><td>value</td><td>String / Number</td><td>-</td><td>当前选项的值</td><td>N</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-side-bar-bg-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-side-bar-height</td><td>100%</td><td>-</td></tr><tr><td>--td-side-bar-width</td><td>206rpx</td><td>-</td></tr><tr><td>--td-side-bar-active-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-side-bar-bg-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-side-bar-border-radius</td><td>18rpx</td><td>-</td></tr><tr><td>--td-side-bar-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-side-bar-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-side-bar-font-size</td><td>32rpx</td><td>-</td></tr><tr><td>--td-side-bar-icon-size</td><td>40rpx</td><td>-</td></tr><tr><td>--td-side-bar-item-height</td><td>auto</td><td>-</td></tr><tr><td>--td-side-bar-item-line-height</td><td>48rpx</td><td>-</td></tr></tbody></table>',9),ee=[Z],te={name:"DESIGN"},ne=c('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当内容项数量较多，需要用户根据品类快速选择到目标内容项时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="侧边栏与徽标组合使用，用于展示品类的状态信息或营销情况。">侧边栏与徽标组合使用，用于展示品类的状态信息或营销情况。 <a class="header-anchor" href="#侧边栏与徽标组合使用，用于展示品类的状态信息或营销情况。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/side-bar/side-bar-1.png"></div></div><h3 id="正确-慎用示例">正确/慎用示例 <a class="header-anchor" href="#正确-慎用示例"></a></h3><h5 id="建议文本简明扼要，若文本过长建议进行换行处理，尽量避免将文本进行截断。">建议文本简明扼要，若文本过长建议进行换行处理，尽量避免将文本进行截断。 <a class="header-anchor" href="#建议文本简明扼要，若文本过长建议进行换行处理，尽量避免将文本进行截断。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/side-bar/side-bar-2.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/side-bar/side-bar-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="不建议仅用图标、emoji作为品类选项，避免表意不清晰。">不建议仅用图标、emoji作为品类选项，避免表意不清晰。 <a class="header-anchor" href="#不建议仅用图标、emoji作为品类选项，避免表意不清晰。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/side-bar/side-bar-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./tab-bar">标签栏</a></td><td style="text-align:left;">目标模块/视图需要从应用的任何地方直接进行访问时使用</td></tr><tr><td style="text-align:left;"><a href="./tabs">选项卡</a></td><td style="text-align:left;">当内容/数据需要一定的分类纬度进行区分，便于用户快速作出选择并切换时可以使用。</td></tr></tbody></table>',13),ie=[ne],se=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760416906898"})],-1),oe=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function ae(t,a,n,d,m,p){const i=v("Stackblitz");return g(),h("td-doc-content",I,[e("td-doc-header",S,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:t.tab},null,8,B),r(e("div",null,[e("div",k,[e("div",C,[(g(),h("svg",D,q)),o(" 该组件于 0.25.0 版本上线，请留意版本。 ")]),N,e("div",P,[e("td-doc-demo",{code:t.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[e("div",A,[s(i,{"demo-name":"base","component-name":" README",code:t.DemoexamplebaseCode},null,8,["code"])])],8,H)]),R,e("div",M,[e("td-doc-demo",{code:t.DemoexampleswitchCode,language:"markup","show-code":"",mode:"open","demo-name":"switch","component-name":" README"},[e("div",G,[s(i,{"demo-name":"switch","component-name":" README",code:t.DemoexampleswitchCode},null,8,["code"])])],8,L)]),j,e("div",z,[e("td-doc-demo",{code:t.DemoexamplewithiconCode,language:"markup","show-code":"",mode:"open","demo-name":"with-icon","component-name":" README"},[e("div",O,[s(i,{"demo-name":"with-icon","component-name":" README",code:t.DemoexamplewithiconCode},null,8,["code"])])],8,$)]),V,e("div",Q,[e("td-doc-demo",{code:t.DemoexamplecustomCode,language:"markup","show-code":"",mode:"open","demo-name":"custom","component-name":" README"},[e("div",J,[s(i,{"demo-name":"custom","component-name":" README",code:t.DemoexamplecustomCode},null,8,["code"])])],8,U)])]),e("td-doc-phone",Y,K,512),W],512),[[l,t.tab==="demo"]]),r(e("div",X,ee,512),[[l,t.tab==="api"]]),r(e("div",te,ie,512),[[l,t.tab==="design"]]),se,oe],512)}const le=b(T,[["render",ae]]);export{le as default};
