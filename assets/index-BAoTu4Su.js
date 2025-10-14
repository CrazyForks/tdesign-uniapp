const n=`<template>
  <view>
    <view class="button-example">
      <t-button
        theme="primary"
        size="large"
      >
        填充按钮
      </t-button>
      <t-button
        theme="light"
        size="large"
      >
        填充按钮
      </t-button>
      <t-button size="large">
        填充按钮
      </t-button>
    </view>

    <view class="button-example">
      <t-button
        theme="primary"
        size="large"
        variant="outline"
      >
        描边按钮
      </t-button>
      <t-button
        theme="primary"
        size="large"
        variant="dashed"
      >
        虚框按钮
      </t-button>
      <t-button
        theme="primary"
        size="large"
        variant="text"
      >
        文字按钮
      </t-button>
    </view>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';

export default {
  components: {
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style scoped>
.button-example {
    margin: 16px;
    display: flex;
    justify-content: space-between;
}

.button-example:after {
    content: '';
    flex: auto;
}
</style>
`,t=`<template>
  <view class="button-example">
    <t-button
      theme="primary"
      icon="app"
      content="填充按钮"
      size="large"
    />
    <t-button
      v-if="skylineRender"
      theme="light"
      size="large"
    >
      <t-loading
        t-class="loading"
        theme="spinner"
        size="40rpx"
        text="加载中..."
      />
    </t-button>
    <t-button
      v-else
      theme="primary"
      size="large"
      loading
    >
      加载中
    </t-button>
    <t-button
      theme="primary"
      icon="search"
      shape="square"
      size="large"
      aria-label="搜索"
    />
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
import tLoading from 'tdesign-uniapp/loading/loading';
import SkylineBehavior from 'packages/demo/src/mixins/skyline.js';

export default {
  components: {
    tButton,
    tLoading,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
      skylineRender: '',
    };
  },
  created() {},
  methods: {},
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,e=`<template>
  <view class="button-example">
    <t-button
      theme="primary"
      ghost
      size="large"
    >
      幽灵按钮
    </t-button>
    <t-button
      theme="danger"
      ghost
      size="large"
    >
      幽灵按钮
    </t-button>
    <t-button
      ghost
      size="large"
    >
      幽灵按钮
    </t-button>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';
export default {
  components: {
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,o=`<template>
  <view class="button-example">
    <t-button
      theme="light"
      block
      size="large"
      t-class="group-btn"
    >
      填充按钮
    </t-button>
    <t-button
      theme="primary"
      block
      size="large"
      t-class="group-btn"
    >
      填充按钮
    </t-button>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
export default {
  components: {
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,a=`<template>
  <view class="button-example">
    <t-button
      theme="primary"
      size="large"
      block
    >
      填充按钮
    </t-button>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';
export default {
  components: {
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,i=`<template>
  <view>
    <view class="button-example">
      <t-button
        theme="primary"
        size="large"
        disabled
      >
        填充按钮
      </t-button>
      <t-button
        theme="light"
        size="large"
        disabled
      >
        填充按钮
      </t-button>
      <t-button
        size="large"
        disabled
      >
        填充按钮
      </t-button>
    </view>

    <view class="button-example">
      <t-button
        theme="primary"
        size="large"
        variant="outline"
        disabled
      >
        描边按钮
      </t-button>
      <t-button
        theme="primary"
        size="large"
        variant="dashed"
        disabled
      >
        虚框按钮
      </t-button>
      <t-button
        theme="primary"
        size="large"
        variant="text"
        disabled
      >
        文字按钮
      </t-button>
    </view>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';
export default {
  components: {
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,s=`<template>
  <view class="button-example">
    <t-button
      theme="primary"
      size="large"
    >
      按钮48
    </t-button>
    <t-button theme="primary">
      按钮40
    </t-button>
    <t-button
      theme="primary"
      size="small"
    >
      按钮32
    </t-button>
    <t-button
      theme="primary"
      size="extra-small"
    >
      按钮28
    </t-button>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
export default {
  components: {
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,r=`<template>
  <view>
    <view class="button-example">
      <t-button
        theme="primary"
        size="large"
      >
        填充按钮
      </t-button>
      <t-button
        theme="primary"
        size="large"
        icon="search"
        shape="square"
        aria-label="搜索"
      />
      <t-button
        theme="primary"
        size="large"
        shape="round"
      >
        填充按钮
      </t-button>
      <t-button
        theme="primary"
        size="large"
        icon="search"
        shape="circle"
        aria-label="搜索"
      />
    </view>

    <t-button
      theme="primary"
      size="large"
      block
      t-class="external-class"
    >
      填充按钮
    </t-button>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
<\/script>
<style scoped>
@import './index.css';
</style>
`,l=`<template>
  <view>
    <view class="button-example">
      <t-button size="large">
        填充按钮
      </t-button>
      <t-button
        size="large"
        variant="outline"
      >
        描边按钮
      </t-button>
      <t-button
        size="large"
        variant="text"
      >
        文字按钮
      </t-button>
    </view>

    <view class="button-example">
      <t-button
        size="large"
        theme="primary"
      >
        填充按钮
      </t-button>
      <t-button
        size="large"
        theme="primary"
        variant="outline"
      >
        描边按钮
      </t-button>
      <t-button
        size="large"
        theme="primary"
        variant="text"
      >
        文字按钮
      </t-button>
    </view>

    <view class="button-example">
      <t-button
        size="large"
        theme="danger"
      >
        填充按钮
      </t-button>
      <t-button
        size="large"
        theme="danger"
        variant="outline"
      >
        描边按钮
      </t-button>
      <t-button
        size="large"
        theme="danger"
        variant="text"
      >
        文字按钮
      </t-button>
    </view>

    <view class="button-example">
      <t-button
        size="large"
        theme="light"
      >
        填充按钮
      </t-button>
      <t-button
        size="large"
        theme="light"
        variant="outline"
      >
        描边按钮
      </t-button>
      <t-button
        size="large"
        theme="light"
        variant="text"
      >
        文字按钮
      </t-button>
    </view>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button';
export default {
  components: {
    tButton,
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
`;export{l as D,r as a,s as b,i as c,a as d,o as e,e as f,t as g,n as h};
