import{_ as h,d as u,c as g,a as e,w as r,v as c,b as m,e as d,f as n,r as k,o as b}from"./sites-D4JVSqOo.js";import{P as f}from"./prism-bash-zcnM7wlG.js";const v=`<template>
  <view>
    <t-cell
      title="选择日期"
      hover
      :note="dateText || ''"
      arrow
      data-mode="date"
      class="test"
      t-class="panel-item"
      @click="showPicker($event, { mode: 'date' })"
    />

    <!-- 年月日 -->
    <t-date-time-picker
      v-model:visible="dateVisible"
      auto-close
      title="选择日期"
      show-week
      mode="date"
      :default-value="date"
      format="YYYY-MM-DD ddd"
      :filter="filter"
      :formatter="formatter"
      :popup-props="popupProps"
      @change="onConfirm"
      @pick="onColumnChange"
      @cancel="hidePicker"
      @close="handleClose"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tDateTimePicker from 'tdesign-uniapp/date-time-picker/date-time-picker';
const calendarMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export default {
  components: {
    tCell,
    tDateTimePicker,
  },
  data() {
    return {
      mode: '',
      dateVisible: false,
      date: new Date('2021-12-23').getTime(),
      // 支持时间戳传入
      dateText: '',
      filter(type, options) {
        if (type === 'year') {
          return options.sort((a, b) => b.value - a.value);
        }
        return options;
      },
      popupProps: {
        usingCustomNavbar: true,
      },
      formatter(item, index) {
        if (index === 1) {
          const label = item.label.slice(0, -1);
          return {
            value: item.value,
            label: calendarMonth[Number(label) - 1],
          };
        }
        if (index === 2) {
          const [dateValue, weekValue] = item.label.split(' ');
          const dateSuffixes = {
            1: 'st',
            2: 'nd',
            3: 'rd',
          };
          const weekMap = {
            周一: 'Mon.',
            周二: 'Tues.',
            周三: 'Wed.',
            周四: 'Thurs.',
            周五: 'Fri.',
            周六: 'Sat.',
            周日: 'Sun.',
          };
          const label = dateValue.slice(0, -1);
          return {
            value: item.value,
            label: \`\${label}\${dateSuffixes[label] || 'th'} \${weekMap[weekValue]}\`,
          };
        }
        return {
          value: item.value,
          label: item.label.slice(0, -1),
        };
      },
    };
  },
  methods: {
    showPicker(e, { mode }) {
      this.mode = mode;
      this[\`\${mode}Visible\`] = true;
    },

    handleClose(e) {
      console.log('handleClose:', e);
    },

    onConfirm(e) {
      const { value } = e;
      const { mode } = this;
      console.log('confirm', value);
      this[mode] = value;
      this[\`\${mode}Text\`] = value;
    },

    onColumnChange(e) {
      console.log('pick', e.value);
    },

    hidePicker() {
      console.log('占位：函数 hidePicker 未声明');
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,D=`<template>
  <view>
    <t-cell
      title="选择日期"
      hover
      :note="monthText"
      arrow
      data-mode="month"
      t-class="panel-item"
      @click="showPicker($event, { mode: 'month' })"
    />

    <!-- 年月 -->
    <t-date-time-picker
      v-model:visible="monthVisible"
      title="选择日期"
      mode="month"
      :value="month"
      format="YYYY-MM"
      :start="start"
      :end="end"
      @change="onConfirm"
      @pick="onColumnChange"
      @cancel="hidePicker"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tDateTimePicker from 'tdesign-uniapp/date-time-picker/date-time-picker';
export default {
  components: {
    tCell,
    tDateTimePicker,
  },
  data() {
    return {
      mode: '',
      monthVisible: false,
      month: '2021-09',
      monthText: '',
      // 指定选择区间起始值
      start: '2000-01-01 00:00:00',
      end: '2030-09-09 12:12:12',
    };
  },
  methods: {
    showPicker(e, { mode }) {
      this.mode = mode;
      this[\`\${mode}Visible\`] = true;
    },

    hidePicker() {
      const { mode } = this;
      this[\`\${mode}Visible\`] = false;
    },

    onConfirm(e) {
      const { value } = e;
      const { mode } = this;
      console.log('confirm', value);
      this[mode] = value;
      this[\`\${mode}Text\`] = value;
      this.hidePicker();
    },

    onColumnChange(e) {
      console.log('pick', e.value);
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
      时分秒选择器
    </view>
    <t-cell
      title="选择时间"
      hover
      :note="secondText || ''"
      arrow
      data-mode="second"
      t-class="panel-item"
      @click="showPicker($event, { mode: 'second' })"
    />

    <view class="demo-desc">
      时分选择器
    </view>
    <t-cell
      title="选择时间"
      hover
      :note="minuteText || ''"
      arrow
      data-mode="minute"
      t-class="panel-item"
      @click="showPicker($event, { mode: 'minute' })"
    />

    <!-- 时分 -->
    <t-date-time-picker
      v-model:visible="secondVisible"
      title="选择时间"
      :mode="['null', 'second']"
      :value="second"
      format="HH:mm:ss"
      @change="onConfirm"
      @pick="onColumnChange"
      @cancel="hidePicker"
    />

    <!-- 时分 -->
    <t-date-time-picker
      v-model:visible="minuteVisible"
      title="选择时间"
      :mode="['null', 'minute']"
      :start="start"
      :value="minute"
      format="HH:mm"
      @change="onConfirm"
      @pick="onColumnChange"
      @cancel="hidePicker"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tDateTimePicker from 'tdesign-uniapp/date-time-picker/date-time-picker';
export default {
  components: {
    tCell,
    tDateTimePicker,
  },
  data() {
    return {
      mode: '',
      second: '10:00:00',
      minute: '23:59',
      start: '2025-04-29 00:00:00',
      secondText: '',
      minuteText: '',
      secondVisible: false,
      minuteVisible: false,
    };
  },
  created() {},
  methods: {
    showPicker(e, { mode }) {
      this.mode = mode;
      this[\`\${mode}Visible\`] = true;
    },
    hidePicker() {
      const { mode } = this;
      this[\`\${mode}Visible\`] = false;
    },
    onConfirm(e) {
      const { value } = e;
      const { mode } = this;
      console.log('confirm', value);
      this[mode] = value;
      this[\`\${mode}Text\`] = value;
      this.hidePicker();
    },
    onColumnChange(e) {
      console.log('pick', e.value);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,C=`<template>
  <view>
    <t-cell
      title="选择日期时间"
      hover
      :note="datetimeText"
      arrow
      data-mode="datetime"
      t-class="panel-item"
      @click="showPicker($event, { mode: 'datetime' })"
    />

    <!-- 年月日时分 -->
    <t-date-time-picker
      v-model:visible="datetimeVisible"
      title="选择日期和时间"
      mode="second"
      :value="datetime"
      format="YYYY-MM-DD HH:mm:ss"
      @change="onConfirm"
      @pick="onColumnChange"
      @cancel="hidePicker"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tDateTimePicker from 'tdesign-uniapp/date-time-picker/date-time-picker';
export default {
  components: {
    tCell,
    tDateTimePicker,
  },
  data() {
    return {
      mode: '',
      datetimeVisible: false,
      datetime: new Date('2021-12-23').getTime(),
      datetimeText: '',
    };
  },
  methods: {
    showPicker(e, { mode }) {
      this.mode = mode;
      this[\`\${mode}Visible\`] = true;
    },

    hidePicker() {
      const { mode } = this;
      this[\`\${mode}Visible\`] = false;
    },

    onConfirm(e) {
      const { value } = e;
      const { mode } = this;
      console.log('confirm', value);

      this[mode] = value;
      this[\`\${mode}Text\`] = value;

      this.hidePicker();
    },

    onColumnChange(e) {
      console.log('pick', e.value);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,y=`<template>
  <view>
    <t-cell
      title="选择时间"
      hover
      :note="text || ''"
      arrow
      t-class="panel-item"
      @click="showPicker"
    />

    <t-date-time-picker
      v-model:visible="visible"
      title="选择时间"
      :value="value"
      format="HH:mm:ss"
      :mode="['null', 'second']"
      :steps="{ minute: 5 }"
      @change="onConfirm"
      @pick="onColumnChange"
      @cancel="hidePicker"
    />
  </view>
</template>

<script>
import tCell from 'tdesign-uniapp/cell/cell';
import tDateTimePicker from 'tdesign-uniapp/date-time-picker/date-time-picker';
export default {
  components: {
    tCell,
    tDateTimePicker,
  },
  data() {
    return {
      text: '',
      value: '10:00:00',
      visible: false,
    };
  },
  created() {},
  methods: {
    showPicker() {
      this.visible = true;
    },
    hidePicker() {
      this.visible = false;
    },
    onConfirm(e) {
      const { value } = e;
      console.log('confirm', value);
      this.value = value;
      this.text = value;
      this.hidePicker();
    },
    onColumnChange(e) {
      console.log('pick', e.value);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,T=`<template>
  <view>
    <t-date-time-picker
      :use-popup="false"
      title="选择日期"
      :visible="dateVisible"
      mode="date"
      :default-value="date"
      format="YYYY-MM-DD"
      :start="start"
      :end="end"
      @change="onConfirm"
      @pick="onColumnChange"
      @cancel="hidePicker"
    />
  </view>
</template>

<script>
import tDateTimePicker from 'tdesign-uniapp/date-time-picker/date-time-picker';
export default {
  components: {
    tDateTimePicker,
  },
  data() {
    return {
      mode: '',
      dateVisible: false,
      date: new Date('2021-12-23').getTime(),
      // 支持时间戳传入

      // 指定选择区间起始值
      start: '2000-01-01 00:00:00',
      end: '2030-09-09 12:12:12',
    };
  },
  methods: {
    hidePicker() {
      const { mode } = this;
      this[\`\${mode}Visible\`] = false;
    },

    onConfirm(e) {
      const { value } = e;
      const { mode } = this;
      console.log('confirm', value);
      this[mode] = value;
      this[\`\${mode}Text\`] = value;
      this.hidePicker();
    },

    onColumnChange(e) {
      console.log('pick', e.value);
    },
  },
};
<\/script>
<style>
@import './index.css';
</style>
`,w=u({data(){return{DemoexampleyearmonthdateCode:v,DemoexampleyearmonthCode:D,DemoexampletimeCode:_,DemoexampledateallCode:C,DemoexamplestepsCode:y,DemoexamplewithoutpopupCode:T}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:i,tdDocTabs:a,tdDocPhone:s}=this.$refs,l="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/date-time-picker/date-time-picker";i&&(i.docInfo={title:"DateTimePicker 时间选择器",desc:"用于选择一个时间点或者一个时间段。"}),a&&(a.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],a.onchange=({detail:p})=>this.tab=p),s&&(s.qrcodeUrl=l),f.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}}),P={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},E={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"date-time-picker"},x=["tab"],M={name:"DEMO"},V=m(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TDateTimePicker <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/date-time-picker/date-time-picker.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="组件类型">组件类型 <a class="header-anchor" href="#组件类型"></a></h3><h4 id="年月日选择器">年月日选择器 <a class="header-anchor" href="#年月日选择器"></a></h4>`,5),S={class:"tdesign-demo-wrapper tdesign-demo-item-- README-year-month-date tdesign-demo-item-- README"},N=["code"],A={slot:"action"},$=e("h4",{id:"年月选择器"},[n("年月选择器 "),e("a",{class:"header-anchor",href:"#年月选择器"})],-1),R={class:"tdesign-demo-wrapper tdesign-demo-item-- README-year-month tdesign-demo-item-- README"},Y=["code"],H={slot:"action"},I=e("h3",{id:"时间选择器"},[n("时间选择器 "),e("a",{class:"header-anchor",href:"#时间选择器"})],-1),j=e("p",null,[n("包括："),e("code",null,"时分秒"),n("、"),e("code",null,"时分"),n("两个示例")],-1),B={class:"tdesign-demo-wrapper tdesign-demo-item-- README-time tdesign-demo-item-- README"},O=["code"],q={slot:"action"},z=e("h4",{id:"年月日时分秒选择器"},[n("年月日时分秒选择器 "),e("a",{class:"header-anchor",href:"#年月日时分秒选择器"})],-1),F={class:"tdesign-demo-wrapper tdesign-demo-item-- README-date-all tdesign-demo-item-- README"},J=["code"],U={slot:"action"},G=e("h3",{id:"组件用法"},[n("组件用法 "),e("a",{class:"header-anchor",href:"#组件用法"})],-1),W=e("h4",{id:"调整步数"},[n("调整步数 "),e("a",{class:"header-anchor",href:"#调整步数"})],-1),K={class:"tdesign-demo-wrapper tdesign-demo-item-- README-steps tdesign-demo-item-- README"},L=["code"],Q={slot:"action"},X=e("h4",{id:"不使用-popup"},[n("不使用 Popup "),e("a",{class:"header-anchor",href:"#不使用-popup"})],-1),Z={class:"tdesign-demo-wrapper tdesign-demo-item-- README-without-popup tdesign-demo-item-- README"},ee=["code"],te={slot:"action"},ne={ref:"tdDocPhone"},oe=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/date-time-picker/date-time-picker",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),de=[oe],ae=e("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"date-time-picker"},null,-1),ie={name:"API"},se=m('<h3 id="datetimepicker-props">DateTimePicker Props <a class="header-anchor" href="#datetimepicker-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>auto-close</td><td>Boolean</td><td>false</td><td>自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible</td><td>N</td></tr><tr><td>cancel-btn</td><td>String</td><td>取消</td><td>取消按钮文字</td><td>N</td></tr><tr><td>confirm-btn</td><td>String</td><td>-</td><td>确定按钮文字</td><td>N</td></tr><tr><td>custom-locale</td><td>String</td><td>zh</td><td>组件国际化语言，目前支持: 简体中文(zh)、(tc)、英文(en)、日语(ja)、韩语(ko)、俄语(ru)等六种语言</td><td>N</td></tr><tr><td>end</td><td>String / Number</td><td>-</td><td>选择器的最大可选时间，默认为当前时间+10年</td><td>N</td></tr><tr><td>filter</td><td>Function</td><td>-</td><td>列选项过滤函数，支持自定义列内容。(type 值可为: year, month, date, hour, minute, second)。TS 类型：<code>(type: TimeModeValues, columns: DateTimePickerColumn) =&gt; DateTimePickerColumn</code> <code>type DateTimePickerColumn = DateTimePickerColumnItem[]</code> <code>interface DateTimePickerColumnItem { label: string,value: string}</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/date-time-picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>footer</td><td>Slot</td><td>-</td><td>底部内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>format</td><td>String</td><td>&#39;YYYY-MM-DD HH:mm:ss&#39;</td><td>用于格式化 pick、change、confirm 事件返回的值，<a href="https://day.js.org/docs/en/display/format" target="_blank" rel="noopener noreferrer">详细文档</a></td><td>N</td></tr><tr><td>formatter</td><td>Function</td><td>-</td><td>格式化标签。TS 类型：<code>(option: DateTimePickerColumnItem, columnIndex: number) =&gt; DateTimePickerColumnItem</code></td><td>N</td></tr><tr><td>header</td><td>Boolean / Slot</td><td>true</td><td>头部内容。值为 true 显示空白头部，值为 false 不显示任何内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>mode</td><td>String / Array</td><td>&#39;date&#39;</td><td>year = 年；month = 年月；date = 年月日；hour = 年月日时； minute = 年月日时分；当类型为数组时，第一个值控制年月日，第二个值控制时分秒。TS 类型：<code>DateTimePickerMode</code> <code>type DateTimePickerMode = TimeModeValues \\| Array&lt;TimeModeValues&gt; </code> <code>type TimeModeValues = &#39;year&#39; \\| &#39;month&#39; \\| &#39;date&#39; \\| &#39;hour&#39; \\| &#39;minute&#39; \\| &#39;second&#39;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/date-time-picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>popup-props</td><td>Object</td><td>{}</td><td>透传 Popup 组件全部属性。TS 类型：<code>PopupProps</code>，<a href="./popup?tab=api">Popup API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/date-time-picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>show-week</td><td>Boolean</td><td>false</td><td><code>1.9.0</code>。是否在日期旁边显示周几（如周一，周二，周日等）</td><td>N</td></tr><tr><td>start</td><td>String / Number</td><td>-</td><td>选择器的最小可选时间，默认为当前时间-10年</td><td>N</td></tr><tr><td>steps</td><td>Object</td><td>{}</td><td>时间间隔步数，示例：<code>{ minute: 5 }</code>。TS 类型：<code>{ [key in TimeModeValues]?: number }</code></td><td>N</td></tr><tr><td>title</td><td>String</td><td>-</td><td>标题</td><td>N</td></tr><tr><td>use-popup</td><td>Boolean</td><td>true</td><td>是否使用弹出层包裹</td><td>N</td></tr><tr><td>value</td><td>String / Number</td><td>-</td><td>选中值。TS 类型：<code>DateValue</code> <code>type DateValue = string \\| number</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/date-time-picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-value</td><td>String / Number</td><td>undefined</td><td>选中值。非受控属性。TS 类型：<code>DateValue</code> <code>type DateValue = string \\| number</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/date-time-picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>visible</td><td>Boolean</td><td>false</td><td>是否显示</td><td>N</td></tr></tbody></table><h3 id="datetimepicker-events">DateTimePicker Events <a class="header-anchor" href="#datetimepicker-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>cancel</td><td>-</td><td>取消按钮点击时触发</td></tr><tr><td>change</td><td><code>(value: DateValue)</code></td><td>确认按钮点击时触发</td></tr><tr><td>close</td><td><code>(trigger: TriggerSource)</code></td><td><code>1.0.1</code>。关闭时触发。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/date-time-picker/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type TriggerSource = &#39;overlay&#39; \\| &#39;cancel-btn&#39; \\| &#39;confirm-btn&#39;</code><br></td></tr><tr><td>confirm</td><td><code>(value: DateValue)</code></td><td><code>1.0.1</code>。确认按钮点击时触发</td></tr><tr><td>pick</td><td><code>(value: DateValue)</code></td><td>选中值发生变化时触发</td></tr></tbody></table><h3 id="datetimepicker-external-classes">DateTimePicker External Classes <a class="header-anchor" href="#datetimepicker-external-classes"></a></h3><table><thead><tr><th>类名</th><th>描述</th></tr></thead><tbody><tr><td>t-class</td><td>根节点样式类</td></tr><tr><td>t-class-cancel</td><td>取消样式类</td></tr><tr><td>t-class-confirm</td><td>确认样式类</td></tr><tr><td>t-class-title</td><td>标题样式类</td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-data-time-picker-year-width</td><td>128rpx</td><td>-</td></tr></tbody></table>',9),re=[se],ce={name:"DESIGN"},me=m('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>在表单中需要输入单个日期或时间时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="通常和单元格搭配使用，点击后唤起时间选择器。">通常和<a href="./Cell">单元格</a>搭配使用，点击后唤起时间选择器。 <a class="header-anchor" href="#通常和单元格搭配使用，点击后唤起时间选择器。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/date-time-picker/date-time-picker-1.png"></div><h3 id="常见用法">常见用法 <a class="header-anchor" href="#常见用法"></a></h3><h5 id="当需要输入时间区间时，通常使用两个时间选择器分别选择起、止时间。">当需要输入时间区间时，通常使用两个时间选择器分别选择起、止时间。 <a class="header-anchor" href="#当需要输入时间区间时，通常使用两个时间选择器分别选择起、止时间。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/date-time-picker/date-time-picker-2.png"></div><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/date-time-picker/date-time-picker-3.png"></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="选择时间后，建议使用标准化格式在表单中书写日期和时间。">选择时间后，建议使用标准化格式在表单中书写日期和时间。 <a class="header-anchor" href="#选择时间后，建议使用标准化格式在表单中书写日期和时间。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/date-time-picker/date-time-picker-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div></div><h3 id="何时使用-1">何时使用 <a class="header-anchor" href="#何时使用-1"></a></h3><table><thead><tr><th style="text-align:left;">组件名</th><th style="text-align:left;">何时使用</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="./Calendar">日历</a></td><td style="text-align:left;">在表单中需要精确输入单个、多个、或区间日期时使用。</td></tr></tbody></table>',14),le=[me],pe=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760510538353"})],-1),he=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function ue(t,i,a,s,l,p){const o=k("Stackblitz");return b(),g("td-doc-content",P,[e("td-doc-header",E,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:t.tab},null,8,x),r(e("div",null,[e("div",M,[V,e("div",S,[e("td-doc-demo",{code:t.DemoexampleyearmonthdateCode,language:"markup","show-code":"",mode:"open","demo-name":"year-month-date","component-name":" README"},[e("div",A,[d(o,{"demo-name":"year-month-date","component-name":" README",code:t.DemoexampleyearmonthdateCode},null,8,["code"])])],8,N)]),$,e("div",R,[e("td-doc-demo",{code:t.DemoexampleyearmonthCode,language:"markup","show-code":"",mode:"open","demo-name":"year-month","component-name":" README"},[e("div",H,[d(o,{"demo-name":"year-month","component-name":" README",code:t.DemoexampleyearmonthCode},null,8,["code"])])],8,Y)]),I,j,e("div",B,[e("td-doc-demo",{code:t.DemoexampletimeCode,language:"markup","show-code":"",mode:"open","demo-name":"time","component-name":" README"},[e("div",q,[d(o,{"demo-name":"time","component-name":" README",code:t.DemoexampletimeCode},null,8,["code"])])],8,O)]),z,e("div",F,[e("td-doc-demo",{code:t.DemoexampledateallCode,language:"markup","show-code":"",mode:"open","demo-name":"date-all","component-name":" README"},[e("div",U,[d(o,{"demo-name":"date-all","component-name":" README",code:t.DemoexampledateallCode},null,8,["code"])])],8,J)]),G,W,e("div",K,[e("td-doc-demo",{code:t.DemoexamplestepsCode,language:"markup","show-code":"",mode:"open","demo-name":"steps","component-name":" README"},[e("div",Q,[d(o,{"demo-name":"steps","component-name":" README",code:t.DemoexamplestepsCode},null,8,["code"])])],8,L)]),X,e("div",Z,[e("td-doc-demo",{code:t.DemoexamplewithoutpopupCode,language:"markup","show-code":"",mode:"open","demo-name":"without-popup","component-name":" README"},[e("div",te,[d(o,{"demo-name":"without-popup","component-name":" README",code:t.DemoexamplewithoutpopupCode},null,8,["code"])])],8,ee)])]),e("td-doc-phone",ne,de,512),ae],512),[[c,t.tab==="demo"]]),r(e("div",ie,re,512),[[c,t.tab==="api"]]),r(e("div",ce,le,512),[[c,t.tab==="design"]]),pe,he],512)}const be=h(w,[["render",ue]]);export{be as default};
