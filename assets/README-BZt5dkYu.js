import{_ as h,d as u,c as g,a as e,w as i,v as s,b as c,e as a,f as d,r as v,o as f}from"./sites-Co6lQ2MM.js";import{P as b}from"./prism-bash-zcnM7wlG.js";const D=`<template>
  <view>
    <t-calendar
      v-model:visible="visible"
      :value="value"
      @confirm="handleConfirm"
      @close="onClose"
    />
    <t-cell
      arrow
      title="单个选择日历"
      :note="formatTimestamp(value)"
      @click="handleCalendar"
    />
  </view>
</template>
<script>
import tCalendar from 'tdesign-uniapp/calendar/calendar.vue';
import tCell from 'tdesign-uniapp/cell/cell.vue';
import { formatTimestamp } from '../computed';


export default {
  components: {
    tCalendar,
    tCell,
  },
  data() {
    return {
      visible: false,
      value: null,
    };
  },
  created() {},
  methods: {
    formatTimestamp,
    handleCalendar() {
      this.visible = true;
    },
    handleConfirm(e) {
      const { value } = e;
      console.log(value);
      this.value = value;
    },
    onClose(detail) {
      console.log(detail.trigger);
    },
  },
};
<\/script>
<style>
</style>
`,y=`<template>
  <view>
    <t-calendar
      v-model:visible="visible"
      :value="value"
      type="multiple"
      @confirm="handleConfirm"
    />
    <t-cell
      arrow
      title="多个选择日历"
      @click="handleCalendar"
    >
      <template
        #note
      >
        <view
          class="custom-class-note"
        >
          {{ formatTimestamp(value) }}
        </view>
      </template>
    </t-cell>
  </view>
</template>
<script>
import tCell from 'tdesign-uniapp/cell/cell.vue';
import tCalendar from 'tdesign-uniapp/calendar/calendar.vue';
import { formatTimestamp } from '../computed';


export default {
  components: {
    tCell,
    tCalendar,
  },
  data() {
    return {
      visible: false,
      value: null,
    };
  },
  created() {},
  methods: {
    formatTimestamp,
    handleCalendar() {
      this.visible = true;
    },
    handleConfirm(e) {
      const { value } = e;
      this.value = value;
      console.log(e.value);
    },
  },
};
<\/script>
<style>
.custom-class-note {
    width: 360rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
`,w=`<template>
  <view>
    <t-cell
      arrow
      title="带单行描述的日历"
      :note="formatTimestamp(singleValue)"
      data-type="single"
      @click="handleCalendar($event, { type: 'single' })"
    />

    <view class="demo-desc">
      带双行描述的日历
    </view>
    <t-calendar
      v-model:visible="visible"
      :value="type === 'single' ? singleValue : value"
      :min-date="minDate"
      :max-date="maxDate"
      :format="type === 'single' ? singleFormat : format"
      :data-type="type"
      @confirm="handleConfirm($event, { type })"
    />
    <t-cell
      arrow
      title="带双行描述的日历"
      :note="formatTimestamp(value)"
      data-type="multiple"
      @click="handleCalendar($event, { type: 'multiple' })"
    />
  </view>
</template>
<script>
import tCell from 'tdesign-uniapp/cell/cell.vue';
import tCalendar from 'tdesign-uniapp/calendar/calendar.vue';
import { formatTimestamp } from '../computed';

export default {
  components: {
    tCell,
    tCalendar,
  },
  data() {
    return {
      type: 'single',
      visible: false,
      value: new Date(2022, 1, 18).getTime(),
      singleValue: new Date(2022, 1, 18).getTime(),
      minDate: new Date(2022, 1, 1).getTime(),
      maxDate: new Date(2022, 2, 15).getTime(),
      singleFormat(day) {
        day.suffix = '¥60';
        return day;
      },
      format(day) {
        const { date } = day;
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const curDate = date.getDate();
        day.suffix = '¥60';
        if (year === 2022) {
          if (month === 2) {
            const map = {
              1: '初一',
              2: '初二',
              3: '初三',
              14: '情人节',
              15: '元宵节',
            };
            if (curDate in map) {
              day.prefix = map[curDate];
              day.suffix = '¥100';
              day.className = 'is-holiday';
            }
          }
        }
        return day;
      },
    };
  },
  created() {},
  methods: {
    formatTimestamp,
    handleCalendar(e, { type }) {
      this.type = type;
      console.log('type', type);
      this.visible = true;
    },
    handleConfirm(e, { type }) {
      const { value } = e;
      if (type === 'single') {
        this.singleValue = value;
      } else {
        this.value = value;
      }
      console.log(e.value);
    },
  },
};
<\/script>
<style>
.demo-desc {
    margin-top: 32rpx;
    margin-bottom: 32rpx;
}

:deep(.is-holiday:not(.t-calendar__dates-item--selected)) {
    color: #e34d59 !important;
}
</style>
`,_=`<template>
  <view>
    <t-calendar
      v-model:visible="visible"
      :value="value"
      switch-mode="year-month"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="handleConfirm"
      @panel-change="handlePanelChange"
    />
    <t-cell
      arrow
      title="带翻页功能的日历"
      :note="formatTimestamp(value)"
      @click="handleCalendar"
    />
  </view>
</template>
<script>
import tCell from 'tdesign-uniapp/cell/cell.vue';
import tCalendar from 'tdesign-uniapp/calendar/calendar.vue';
import { formatTimestamp } from '../computed';

export default {
  components: {
    tCell,
    tCalendar,
  },
  data() {
    return {
      visible: false,
      value: new Date(2022, 1, 27).getTime(),
      minDate: new Date(2022, 0, 10).getTime(),
      maxDate: new Date(2027, 10, 27).getTime(),
    };
  },
  created() {},
  methods: {
    formatTimestamp,
    handleCalendar() {
      this.visible = true;
    },
    handleConfirm(e) {
      this.value = e.value;
      console.log(e.value);
    },
    handlePanelChange(e) {
      const { year, month } = e;
      console.log('year: ', year, 'month: ', month);
    },
  },
};
<\/script>
<style>
</style>
`,C=`<template>
  <view>
    <t-calendar
      v-model:visible="visible"
      :value="value"
      :min-date="minDate"
      :max-date="maxDate"
      type="range"
      @confirm="handleConfirm"
    />

    <view
      class="wrapper"
      @tap="handleCalendar"
    >
      <view class="wrapper__left">
        {{ formatTimestamp(value[0]) }}
      </view>
      <t-icon
        class="wrapper__center"
        name="swap-right"
        size="40rpx"
      />
      <view class="wrapper__right">
        {{ formatTimestamp(value[1]) }}
      </view>
    </view>
  </view>
</template>
<script>
import tIcon from 'tdesign-uniapp/icon/icon.vue';
import tCalendar from 'tdesign-uniapp/calendar/calendar.vue';
import { formatTimestamp } from '../computed';


export default {
  components: {
    tIcon,
    tCalendar,
  },
  data() {
    return {
      visible: false,
      value: [new Date(2024, 11, 5).getTime(), new Date(2024, 11, 10).getTime()],
      minDate: new Date(2024, 10, 1).getTime(),
      maxDate: new Date(2024, 12, 1).getTime(),
    };
  },
  created() {},
  methods: {
    formatTimestamp,
    handleCalendar() {
      this.visible = true;
    },
    handleConfirm(e) {
      console.log(e.value);
      const { value } = e;
      this.value = value;
    },
  },
};
<\/script>
<style>
.wrapper {
    background-color: var(--td-bg-color-container);
    padding: 32rpx;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.wrapper__center {
    color: var(--td-text-color-placeholder);
}

.wrapper__left,
.wrapper__right {
    width: 240rpx;
    color: var(--td-text-color-primary);
    font-size: 32rpx;
    font-weight: 600;
    line-height: 48rpx;
}

.wrapper__right {
    text-align: right;
}
</style>
`,x=`<template>
  <view>
    <t-calendar
      v-model:visible="visible"
      :value="value"
      :min-date="minDate"
      :max-date="maxDate"
      :locale-text="localeText"
      @confirm="handleConfirm"
      @close="onClose"
    />
    <t-cell
      arrow
      title="国际化"
      :note="formatTimestamp(value)"
      @click="handleCalendar"
    />
  </view>
</template>
<script>
import tCalendar from 'tdesign-uniapp/calendar/calendar.vue';
import tCell from 'tdesign-uniapp/cell/cell.vue';
import { formatTimestamp } from '../computed';


export default {
  components: {
    tCalendar,
    tCell,
  },
  data() {
    return {
      visible: false,
      value: new Date(2022, 1, 18).getTime(),
      minDate: new Date(2022, 1, 1).getTime(),
      maxDate: new Date(2022, 2, 15).getTime(),
      localeText: {
        title: 'Select Date',
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        monthTitle: '{month} {year}',
        confirm: 'Confirm',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      },
    };
  },
  created() {},
  methods: {
    formatTimestamp,
    handleCalendar() {
      this.visible = true;
    },
    handleConfirm(e) {
      const { value } = e;
      this.value = value;
    },
    onClose(detail) {
      console.log(detail.trigger);
    },
  },
};
<\/script>
<style>
</style>
`,T=`<template>
  <view>
    <t-calendar
      v-model:visible="visible"
      :value="value"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="handleConfirm"
    />
    <t-cell
      arrow
      title="含不可选的日历"
      :note="formatTimestamp(value)"
      @click="handleCalendar"
    />
  </view>
</template>
<script>
import tCell from 'tdesign-uniapp/cell/cell.vue';
import tCalendar from 'tdesign-uniapp/calendar/calendar.vue';
import { formatTimestamp } from '../computed';


export default {
  components: {
    tCell,
    tCalendar,
  },
  data() {
    return {
      visible: false,
      value: new Date(2022, 1, 18).getTime(),
      minDate: new Date(2022, 1, 18).getTime(),
      maxDate: new Date(2022, 2, 1).getTime(),
    };
  },
  created() {},
  methods: {
    formatTimestamp,
    handleCalendar() {
      this.visible = true;
    },
    handleConfirm(e) {
      const { value } = e;
      this.value = value;
      console.log(value);
    },
  },
};
<\/script>
<style>
.is-holiday:not(.t-calendar__dates-item--selected) {
    color: #e34d59 !important;
}
</style>
`,E=`<template>
  <view>
    <t-calendar
      title="日历标题"
      :use-popup="false"
      type="multiple"
      @select="handleSelect"
    />
  </view>
</template>

<script>
import tCalendar from 'tdesign-uniapp/calendar/calendar.vue';
export default {
  components: {
    tCalendar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleSelect(e) {
      const { value } = e;
      console.log(value);
    },
  },
};
<\/script>
<style>
</style>
`,k=u({data(){return{DemoexamplebaseCode:D,DemoexamplemultipleCode:y,DemoexamplecustomtextCode:w,DemoexampleswitchmodeCode:_,DemoexamplerangeCode:C,DemoexamplelocaltextCode:x,DemoexamplecustomrangeCode:T,DemoexamplewithoutpopupCode:E}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:l,tdDocTabs:o,tdDocPhone:r}=this.$refs,m="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/calendar/calendar";l&&(l.docInfo={title:"Calendar 日历",desc:"按照日历形式展示数据或日期的容器。"}),o&&(o.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],o.onchange=({detail:p})=>this.tab=p),r&&(r.qrcodeUrl=m),b.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}}),A={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},M={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"calendar"},R=["tab"],N={name:"DEMO"},S=c(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TCalendar <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/calendar/calendar.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><h4 id="单个选择日历">单个选择日历 <a class="header-anchor" href="#单个选择日历"></a></h4>`,5),$={class:"tdesign-demo-wrapper tdesign-demo-item-- README-base tdesign-demo-item-- README"},P=["code"],B={slot:"action"},V=e("h4",{id:"多个选择日历"},[d("多个选择日历 "),e("a",{class:"header-anchor",href:"#多个选择日历"})],-1),j={class:"tdesign-demo-wrapper tdesign-demo-item-- README-multiple tdesign-demo-item-- README"},F=["code"],O={slot:"action"},z=e("h4",{id:"带单行-双行描述的日历"},[d("带单行/双行描述的日历 "),e("a",{class:"header-anchor",href:"#带单行-双行描述的日历"})],-1),I={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom-text tdesign-demo-item-- README"},q=["code"],H={slot:"action"},J=e("h4",{id:"带翻页功能的日历"},[d("带翻页功能的日历 "),e("a",{class:"header-anchor",href:"#带翻页功能的日历"})],-1),L={class:"tdesign-demo-wrapper tdesign-demo-item-- README-switch-mode tdesign-demo-item-- README"},U=["code"],W={slot:"action"},Y=e("h4",{id:"可选择区间日期的日历"},[d("可选择区间日期的日历 "),e("a",{class:"header-anchor",href:"#可选择区间日期的日历"})],-1),G={class:"tdesign-demo-wrapper tdesign-demo-item-- README-range tdesign-demo-item-- README"},X=["code"],K={slot:"action"},Q=e("h3",{id:"组件样式"},[d("组件样式 "),e("a",{class:"header-anchor",href:"#组件样式"})],-1),Z=e("h4",{id:"国际化"},[d("国际化 "),e("a",{class:"header-anchor",href:"#国际化"})],-1),ee={class:"tdesign-demo-wrapper tdesign-demo-item-- README-local-text tdesign-demo-item-- README"},te=["code"],ne={slot:"action"},ae=e("h4",{id:"含不可选的日历"},[d("含不可选的日历 "),e("a",{class:"header-anchor",href:"#含不可选的日历"})],-1),de={class:"tdesign-demo-wrapper tdesign-demo-item-- README-custom-range tdesign-demo-item-- README"},oe=["code"],le={slot:"action"},re=e("h4",{id:"不使用-popup"},[d("不使用 Popup "),e("a",{class:"header-anchor",href:"#不使用-popup"})],-1),ie={class:"tdesign-demo-wrapper tdesign-demo-item-- README-without-popup tdesign-demo-item-- README"},se=["code"],ce={slot:"action"},me={ref:"tdDocPhone"},pe=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/calendar/calendar",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),he=[pe],ue={name:"API"},ge=c('<h3 id="calendar-props">Calendar Props <a class="header-anchor" href="#calendar-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>auto-close</td><td>Boolean</td><td>true</td><td><code>0.34.0</code>。自动关闭；在点击关闭按钮、确认按钮、遮罩层时自动关闭，不需要手动设置 visible</td><td>N</td></tr><tr><td>confirm-btn</td><td>String / Object / Slot</td><td>&#39;&#39;</td><td>确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/calendar/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>first-day-of-week</td><td>Number</td><td>0</td><td>第一天从星期几开始，默认 0 = 周日</td><td>N</td></tr><tr><td>format</td><td>Function</td><td>-</td><td>用于格式化日期的函数。TS 类型：<code>CalendarFormatType </code> <code>type CalendarFormatType = (day: TDate) =&gt; TDate</code> <code>type TDateType = &#39;selected&#39; \\| &#39;disabled&#39; \\| &#39;start&#39; \\| &#39;centre&#39; \\| &#39;end&#39; \\| &#39;&#39;</code> <code>interface TDate { date: Date; day: number; type: TDateType; className?: string; prefix?: string; suffix?: string;}</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/calendar/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>locale-text</td><td>Object</td><td>-</td><td>国际化文案。TS 类型：<code>CalendarLocaleText</code> <code>interface CalendarLocaleText {title?: string; weekdays?: string[]; monthTitle?: string; months?: string[]; confirm?: string;}</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/calendar/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>max-date</td><td>Number</td><td>-</td><td>最大可选的日期，不传则默认半年后</td><td>N</td></tr><tr><td>min-date</td><td>Number</td><td>-</td><td>最小可选的日期，不传则默认今天</td><td>N</td></tr><tr><td>readonly</td><td>Boolean</td><td>-</td><td><code>1.9.7</code>。是否只读，只读状态下不能选择日期</td><td>N</td></tr><tr><td>switch-mode</td><td>String</td><td>none</td><td><code>1.8.2</code>。切换模式。 <code>none</code> 表示平铺展示所有月份； <code>month</code> 表示支持按月切换， <code>year-month</code> 表示既按年切换，也支持按月切换。可选项：none/month/year-month</td><td>N</td></tr><tr><td>title</td><td>String / Slot</td><td>-</td><td>标题，不传默认为“请选择日期”。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>type</td><td>String</td><td>&#39;single&#39;</td><td>日历的选择类型，single = 单选；multiple = 多选; range = 区间选择。可选项：single/multiple/range</td><td>N</td></tr><tr><td>use-popup</td><td>Boolean</td><td>true</td><td><code>0.32.0</code>。是否使用弹出层包裹日历</td><td>N</td></tr><tr><td>using-custom-navbar</td><td>Boolean</td><td>false</td><td>是否使用了自定义导航栏</td><td>N</td></tr><tr><td>value</td><td>Number / Array</td><td>-</td><td>当前选择的日期，不传则选用 minDate 属性值或今天，优先级：minDate &gt; today。当 type = multiple 或 range 时传入数组。TS 类型：<code>number \\| number[]</code></td><td>N</td></tr><tr><td>default-value</td><td>Number / Array</td><td>undefined</td><td>当前选择的日期，不传则选用 minDate 属性值或今天，优先级：minDate &gt; today。当 type = multiple 或 range 时传入数组。非受控属性。TS 类型：<code>number \\| number[]</code></td><td>N</td></tr><tr><td>visible</td><td>Boolean</td><td>false</td><td>是否显示日历；<code>usePopup</code> 为 true 时有效</td><td>N</td></tr></tbody></table><h3 id="calendar-events">Calendar Events <a class="header-anchor" href="#calendar-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td><code>(value: timestamp)</code></td><td><code>0.28.0</code>。不显示 confirm-btn 时，完成选择时触发（暂不支持 type = multiple）</td></tr><tr><td>close</td><td><code>(trigger: CalendarTrigger)</code></td><td><code>0.34.0</code>。关闭按钮时触发。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/calendar/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type CalendarTrigger = &#39;close-btn&#39; \\| &#39;confirm-btn&#39; \\| &#39;overlay&#39; \\| &#39;auto-close&#39;</code><br></td></tr><tr><td>confirm</td><td><code>(value: timestamp)</code></td><td>点击确认按钮时触发</td></tr><tr><td>panel-change</td><td><code>(detail: { year: number, month: number })</code></td><td><code>1.8.4</code>。切换月或年时触发（switch-mode 不为 none 时有效）</td></tr><tr><td>scroll</td><td><code>({scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY})</code></td><td><code>1.4.6</code>。滚动时触发</td></tr><tr><td>select</td><td><code>(value: timestamp)</code></td><td><code>0.28.0</code>。点击日期时触发</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-calendar-active-color</td><td>@brand-color</td><td>-</td></tr><tr><td>--td-calendar-bg-color</td><td>@bg-color-container</td><td>-</td></tr><tr><td>--td-calendar-days-color</td><td>@text-color-secondary</td><td>-</td></tr><tr><td>--td-calendar-item-centre-color</td><td>@brand-color-light</td><td>-</td></tr><tr><td>--td-calendar-item-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-calendar-item-suffix-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-calendar-radius</td><td>24rpx</td><td>-</td></tr><tr><td>--td-calendar-selected-border-radius</td><td>@radius-default</td><td>-</td></tr><tr><td>--td-calendar-selected-color</td><td>@text-color-anti</td><td>-</td></tr><tr><td>--td-calendar-switch-mode-icon-color</td><td>@text-color-secondary</td><td>-</td></tr><tr><td>--td-calendar-switch-mode-icon-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-calendar-title-color</td><td>@text-color-primary</td><td>-</td></tr><tr><td>--td-calendar-title-font-size</td><td>18px</td><td>-</td></tr></tbody></table>',7),ve=[ge],fe={name:"DESIGN"},be=c('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>需要在页面间跳转、返回，或需承载少量辅助功能时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="通常和单元格搭配使用，点击后唤起日历。">通常和<a href="./cell">单元格</a>搭配使用，点击后唤起日历。 <a class="header-anchor" href="#通常和单元格搭配使用，点击后唤起日历。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/calendar/calendar-1.png"></div><h3 id="推荐-慎用">推荐/慎用 <a class="header-anchor" href="#推荐-慎用"></a></h3><h5 id="日期与描述结合时，通常与价格结合，不建议描述过长、或承载过复杂的信息。">日期与描述结合时，通常与价格结合，不建议描述过长、或承载过复杂的信息。 <a class="header-anchor" href="#日期与描述结合时，通常与价格结合，不建议描述过长、或承载过复杂的信息。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/calendar/calendar-2.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/calendar/calendar-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><hr><h5 id="区间选择尽量使用在较短时间的场景中，当涉及的时间通常在数月、数年的长度时，建议使用其它方式让用户输入。">区间选择尽量使用在较短时间的场景中，当涉及的时间通常在数月、数年的长度时，建议使用其它方式让用户输入。 <a class="header-anchor" href="#区间选择尽量使用在较短时间的场景中，当涉及的时间通常在数月、数年的长度时，建议使用其它方式让用户输入。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/calendar/calendar-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/calendar/calendar-5.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/bad.png"></div></div><h3 id="相似组件">相似组件 <a class="header-anchor" href="#相似组件"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./date-time-picker">时间选择器</a></td><td style="text-align:left;">在表单中需要输入单个日期或时间时使用。</td></tr></tbody></table>',13),De=[be],ye=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760587843631"})],-1),we=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function _e(t,l,o,r,m,p){const n=v("Stackblitz");return f(),g("td-doc-content",A,[e("td-doc-header",M,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:t.tab},null,8,R),i(e("div",null,[e("div",N,[S,e("div",$,[e("td-doc-demo",{code:t.DemoexamplebaseCode,language:"markup","show-code":"",mode:"open","demo-name":"base","component-name":" README"},[e("div",B,[a(n,{"demo-name":"base","component-name":" README",code:t.DemoexamplebaseCode},null,8,["code"])])],8,P)]),V,e("div",j,[e("td-doc-demo",{code:t.DemoexamplemultipleCode,language:"markup","show-code":"",mode:"open","demo-name":"multiple","component-name":" README"},[e("div",O,[a(n,{"demo-name":"multiple","component-name":" README",code:t.DemoexamplemultipleCode},null,8,["code"])])],8,F)]),z,e("div",I,[e("td-doc-demo",{code:t.DemoexamplecustomtextCode,language:"markup","show-code":"",mode:"open","demo-name":"custom-text","component-name":" README"},[e("div",H,[a(n,{"demo-name":"custom-text","component-name":" README",code:t.DemoexamplecustomtextCode},null,8,["code"])])],8,q)]),J,e("div",L,[e("td-doc-demo",{code:t.DemoexampleswitchmodeCode,language:"markup","show-code":"",mode:"open","demo-name":"switch-mode","component-name":" README"},[e("div",W,[a(n,{"demo-name":"switch-mode","component-name":" README",code:t.DemoexampleswitchmodeCode},null,8,["code"])])],8,U)]),Y,e("div",G,[e("td-doc-demo",{code:t.DemoexamplerangeCode,language:"markup","show-code":"",mode:"open","demo-name":"range","component-name":" README"},[e("div",K,[a(n,{"demo-name":"range","component-name":" README",code:t.DemoexamplerangeCode},null,8,["code"])])],8,X)]),Q,Z,e("div",ee,[e("td-doc-demo",{code:t.DemoexamplelocaltextCode,language:"markup","show-code":"",mode:"open","demo-name":"local-text","component-name":" README"},[e("div",ne,[a(n,{"demo-name":"local-text","component-name":" README",code:t.DemoexamplelocaltextCode},null,8,["code"])])],8,te)]),ae,e("div",de,[e("td-doc-demo",{code:t.DemoexamplecustomrangeCode,language:"markup","show-code":"",mode:"open","demo-name":"custom-range","component-name":" README"},[e("div",le,[a(n,{"demo-name":"custom-range","component-name":" README",code:t.DemoexamplecustomrangeCode},null,8,["code"])])],8,oe)]),re,e("div",ie,[e("td-doc-demo",{code:t.DemoexamplewithoutpopupCode,language:"markup","show-code":"",mode:"open","demo-name":"without-popup","component-name":" README"},[e("div",ce,[a(n,{"demo-name":"without-popup","component-name":" README",code:t.DemoexamplewithoutpopupCode},null,8,["code"])])],8,se)])]),e("td-doc-phone",me,he,512)],512),[[s,t.tab==="demo"]]),i(e("div",ue,ve,512),[[s,t.tab==="api"]]),i(e("div",fe,De,512),[[s,t.tab==="design"]]),ye,we],512)}const Te=h(k,[["render",_e]]);export{Te as default};
