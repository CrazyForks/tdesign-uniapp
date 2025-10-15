import{_ as g,d as h,c as u,a as e,w as l,v as c,b as i,e as d,f as o,r as b,o as f}from"./sites-DRVMbq6-.js";import{P as v}from"./prism-bash-zcnM7wlG.js";const y=`<template>
  <view class="wrapper">
    <t-upload
      :disabled="false"
      :media-type="['video', 'image']"
      :max="1"
      :files="fileList"
      @add="handleAdd"
      @remove="handleRemove"
    />
  </view>
</template>

<script>
import tUpload from 'tdesign-uniapp/upload/upload.vue';
export default {
  components: {
    tUpload,
  },
  data() {
    return {
      fileList: [],
    };
  },
  created() {},
  methods: {
    handleAdd(e) {
      const { fileList } = this;
      console.log('add: ', e);
      const { files } = e;

      // 方法1：选择完所有图片之后，统一上传，因此选择完就直接展示
      this.fileList = [...fileList, ...files]; // 此时设置了 fileList 之后才会展示选择的图片

      // 方法2：每次选择图片都上传，展示每次上传图片的进度
      // files.forEach(file => this.uploadFile(file))
    },
    onUpload(file) {
      const { fileList } = this;
      this.fileList = [
        ...fileList,
        {
          ...file,
          status: 'loading',
        },
      ];

      console.log('onUpload', file);
      const { length } = fileList;
      const task = uni.uploadFile({
        url: 'https://example.weixin.qq.com/upload',
        // 仅为示例，非真实的接口地址
        filePath: file.url,
        name: 'file',
        formData: {
          user: 'test',
        },
        success: () => {
          this[\`fileList[\${length}].status\`] = 'done';
        },
      });
      task.onProgressUpdate((res) => {
        this[\`fileList[\${length}].percent\`] = res.progress;
      });
    },
    handleRemove(e) {
      const { index } = e;
      const { fileList } = this;
      fileList.splice(index, 1);
      this.fileList = fileList;
    },
  },
};
<\/script>
<style>
</style>
`,_=`<template>
  <view class="wrapper">
    <t-upload
      :media-type="['video', 'image']"
      :files="originFiles"
      :grid-config="gridConfig"
      :remove-btn="false"
      @success="handleSuccess"
      @remove="handleRemove"
      @click="handleClick"
      @sort-end="handleSortEnd"
    />
  </view>
</template>

<script>
import tUpload from 'tdesign-uniapp/upload/upload.vue';
export default {
  components: {
    tUpload,
  },
  data() {
    return {
      originFiles: [
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
          name: 'uploaded1.png',
          type: 'image',
          removeBtn: true,
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example6.png',
          name: 'uploaded2.png',
          type: 'image',
          removeBtn: true,
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example5.png',
          name: 'uploaded3.png',
          type: 'image',
          removeBtn: true,
        },
      ],
      gridConfig: {
        column: 4,
        width: 160,
        height: 160,
      },
      config: {
        count: 1,
      },
    };
  },
  created() {},
  methods: {
    handleSuccess(e) {
      const { files } = e;
      this.originFiles = files;
    },

    handleRemove(e) {
      const { index } = e;
      const { originFiles } = this;
      originFiles.splice(index, 1);
      this.originFiles = originFiles;
    },

    handleClick(e) {
      console.log(e.file);
    },

    handleSortEnd() {
      console.log('占位：函数 handleSortEnd 未声明');
    },
  },
};
<\/script>
<style>
</style>
`,x=`<template>
  <view class="wrapper">
    <t-upload
      draggable
      :media-type="['video', 'image']"
      :files="originFiles"
      :grid-config="gridConfig"
      @success="handleSuccess"
      @remove="handleRemove"
      @click="handleClick"
      @drop="handleDrop"
    />
  </view>
</template>

<script>
import tUpload from 'tdesign-uniapp/upload/upload.vue';
export default {
  components: {
    tUpload,
  },
  data() {
    return {
      originFiles: [
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
          name: 'uploaded1.png',
          type: 'image',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example6.png',
          name: 'uploaded2.png',
          type: 'image',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example5.png',
          name: 'uploaded3.png',
          type: 'image',
        },
      ],
      gridConfig: {
        column: 4,
        width: 160,
        height: 160,
      },
      config: {
        count: 1,
      },
    };
  },
  created() {},
  methods: {
    handleSuccess(e) {
      const { files } = e;
      this.originFiles = files;
    },
    handleRemove(e) {
      const { index } = e;
      const { originFiles } = this;
      originFiles.splice(index, 1);
      this.originFiles = originFiles;
    },
    handleClick(e) {
      console.log(e.file);
    },
    handleDrop(e) {
      const { files } = e;
      this.originFiles = files;
    },
  },
};
<\/script>
<style>
</style>
`,C=`<template>
  <view class="wrapper">
    <t-upload
      :media-type="['video', 'image']"
      :files="originFiles"
      :grid-config="gridConfig"
      @success="handleSuccess"
      @remove="handleRemove"
      @click="handleClick"
    />
  </view>
</template>

<script>
import tUpload from 'tdesign-uniapp/upload/upload.vue';
export default {
  components: {
    tUpload,
  },
  data() {
    return {
      originFiles: [
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
          name: 'uploaded1.png',
          type: 'image',
          status: 'loading',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example5.png',
          name: 'uploaded2.png',
          type: 'image',
          percent: 68,
          status: 'loading',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example6.png',
          name: 'uploaded3.png',
          type: 'image',
          status: 'reload',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example5.png',
          name: 'uploaded4.png',
          type: 'image',
          status: 'failed',
        },
      ],
      gridConfig: {
        column: 4,
        width: 160,
        height: 160,
      },
      config: {
        count: 1,
      },
    };
  },
  created() {},
  methods: {
    handleSuccess(e) {
      const { files } = e;
      this.originFiles = files;
    },
    handleRemove(e) {
      const { index } = e;
      const { originFiles } = this;
      originFiles.splice(index, 1);
      this.originFiles = originFiles;
    },
    handleClick(e) {
      console.log(e.file);
    },
  },
};
<\/script>
<style>
</style>
`,w=`<template>
  <view class="wrapper">
    <t-upload
      :media-type="['video', 'image']"
      :files="originFiles"
      :grid-config="gridConfig"
      :config="config"
      source="messageFile"
      @success="handleSuccess"
      @remove="handleRemove"
    />
  </view>
</template>

<script>
import tUpload from 'tdesign-uniapp/upload/upload.vue';
export default {
  components: {
    tUpload,
  },
  data() {
    return {
      originFiles: [
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
          name: 'uploaded1.png',
          type: 'image',
        },
      ],
      gridConfig: {
        column: 4,
        width: 160,
        height: 160,
      },
      config: {
        count: 1,
      },
    };
  },
  created() {},
  methods: {
    handleSuccess(e) {
      const { files } = e;
      this.originFiles = files;
    },
    handleRemove(e) {
      const { index } = e;
      const { originFiles } = this;
      originFiles.splice(index, 1);
      this.originFiles = originFiles;
    },
  },
};
<\/script>
<style>
</style>
`,k=h({data(){return{DemoexamplesingleCode:y,DemoexamplemultipleCode:_,DemoexampledragCode:x,DemoexamplestatusCode:C,DemoexamplemessageFileCode:w}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(t){this.$route.query.tab!==t&&this.$router.push({query:{tab:t}})}}},mounted(){const{tdDocContent:t,tdDocHeader:s,tdDocTabs:a,tdDocPhone:r}=this.$refs,p="https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/upload/upload";s&&(s.docInfo={title:"Upload 上传",desc:"用于相册读取或拉起拍照的图片上传功能。"}),a&&(a.tabs=[{tab:"demo",name:"示例"},{tab:"api",name:"API"},{tab:"design",name:"指南"}],a.onchange=({detail:m})=>this.tab=m),r&&(r.qrcodeUrl=p),v.highlightAll(),this.$emit("loaded",()=>{t.pageStatus="show"})}}),D={ref:"tdDocContent","page-status":"hidden",platform:"mobile"},F={slot:"doc-header",ref:"tdDocHeader",platform:"mobile",spline:"form","component-name":"upload"},E=["tab"],S={name:"DEMO"},M=i(`<h2 id="引入">引入 <a class="header-anchor" href="#引入"></a></h2><p>可在 <code>main.ts</code> 或在需要使用的页面或组件中引入。</p><div class="language-js"><pre><code><span class="token keyword">import</span> TUpload <span class="token keyword">from</span> <span class="token string">&#39;tdesign-uniapp/upload/upload.vue&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="单选上传图片">单选上传图片 <a class="header-anchor" href="#单选上传图片"></a></h3><p>图片上传有两种方式：</p><p>1 选择完所有图片之后，统一上传，因此选择完就直接展示</p><p>2 每次选择图片都上传，展示每次上传图片的进度</p>`,7),A={class:"tdesign-demo-wrapper tdesign-demo-item-- README-single tdesign-demo-item-- README"},T=["code"],U={slot:"action"},R=e("h3",{id:"多选上传图片"},[o("多选上传图片 "),e("a",{class:"header-anchor",href:"#多选上传图片"})],-1),N={class:"tdesign-demo-wrapper tdesign-demo-item-- README-multiple tdesign-demo-item-- README"},z=["code"],B={slot:"action"},V=e("h3",{id:"长按拖拽排序图片"},[o("长按拖拽排序图片 "),e("a",{class:"header-anchor",href:"#长按拖拽排序图片"})],-1),L={class:"tdesign-demo-wrapper tdesign-demo-item-- README-drag tdesign-demo-item-- README"},I=["code"],q={slot:"action"},j=i('<h3 id="加载状态">加载状态 <a class="header-anchor" href="#加载状态"></a></h3><p>支持多种状态：<code>loading</code>、<code>reload</code>、<code>failed</code>；</p><p>其中 <code>loading</code> 还可以通过传入 <code>percent</code> 来区分是否展示进度。</p>',3),O={class:"tdesign-demo-wrapper tdesign-demo-item-- README-status tdesign-demo-item-- README"},P=["code"],$={slot:"action"},G=e("h3",{id:"从聊天记录上选"},[o("从聊天记录上选 "),e("a",{class:"header-anchor",href:"#从聊天记录上选"})],-1),K=e("p",null,[o("使用 "),e("code",null,"wx.chooseMessageFile"),o(" 实现，需要基础版本库 "),e("code",null,"2.5.0+")],-1),H={class:"tdesign-demo-wrapper tdesign-demo-item-- README-messageFile tdesign-demo-item-- README"},Q=["code"],J={slot:"action"},W=i('<h2 id="faq">FAQ <a class="header-anchor" href="#faq"></a></h2><h3 id="为什么-upload-外层使用-display-flex-时会造成组件样式混乱？">为什么 <code>Upload</code> 外层使用 <code>display: flex</code> 时会造成组件样式混乱？ <a class="header-anchor" href="#为什么-upload-外层使用-display-flex-时会造成组件样式混乱？"></a></h3><p><code>Upload</code> 是基于 <code>TGrid</code> 宫格实现，当外层使用 <code>display: flex</code> ，子元素会默认加上 <code>flex-grow: 0</code>，造成 <code>Upload</code> 组件整体宽度不足。可以通过给 <code>Upload</code> 组件节点加上 <code>flex-grow: 1</code> 处理。</p>',3),X={ref:"tdDocPhone"},Y=e("iframe",{src:"https://novlan1.github.io/tdesign-uniapp/mobile#/pages-more/upload/upload",frameborder:"0",width:"100%",height:"100%",style:{"border-radius":"0 0 6px 6px"}},null,-1),Z=[Y],ee=e("td-contributors",{platform:"mobile",framework:"uniapp","component-name":"upload"},null,-1),te={name:"API"},ne=i('<h3 id="upload-props">Upload Props <a class="header-anchor" href="#upload-props"></a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>描述</th><th>必传</th></tr></thead><tbody><tr><td>style</td><td>Object</td><td>-</td><td>样式</td><td>N</td></tr><tr><td>custom-style</td><td>Object</td><td>-</td><td>样式，一般用于开启虚拟化组件节点场景</td><td>N</td></tr><tr><td>add-btn</td><td>Boolean</td><td>true</td><td>添加按钮</td><td>N</td></tr><tr><td>add-content</td><td>String / Slot</td><td>-</td><td>添加按钮内容。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/common/common.ts" target="_blank" rel="noopener noreferrer">通用类型定义</a></td><td>N</td></tr><tr><td>allow-upload-duplicate-file</td><td>Boolean</td><td>false</td><td><code>暂不支持</code>。是否允许重复上传相同文件名的文件</td><td>N</td></tr><tr><td>config</td><td>Object</td><td>-</td><td>图片上传配置，视频上传配置，文件上传配置等，包含图片尺寸、图片来源、视频来源、视频拍摄最长时间等。更多细节查看小程序官网。<a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html" target="_blank" rel="noopener noreferrer">图片上传</a>。<a href="https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html" target="_blank" rel="noopener noreferrer">视频上传</a>。TS 类型：<code>UploadMpConfig</code> <code>type UploadMpConfig = ImageConfig \\| VideoConfig</code> <code>interface ImageConfig { count?: number; sizeType?: Array&lt;SizeTypeValues&gt;; sourceType?: Array&lt;SourceTypeValues&gt; }</code> <code>type SizeTypeValues = &#39;original&#39; \\| &#39;compressed&#39;</code> <code>type SourceTypeValues = &#39;album&#39; \\| &#39;camera&#39;</code> <code>interface VideoConfig { sourceType?: Array&lt;SourceTypeValues&gt;; compressed?: boolean; maxDuration?: number; camera?: &#39;back&#39; \\| &#39;front&#39; }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>disabled</td><td>Boolean</td><td>undefined</td><td>是否禁用组件</td><td>N</td></tr><tr><td>draggable</td><td>Boolean / Object</td><td>-</td><td>是否支持拖拽排序。长按时是否振动，碰撞时是否振动。示例一：<code>true</code>。示例二：<code>{ vibrate: true, collisionVibrate: true }</code>。TS 类型：<code>boolean \\| {vibrate?: boolean; collisionVibrate?: boolean}</code></td><td>N</td></tr><tr><td>files</td><td>Array</td><td>-</td><td>已上传文件列表。TS 类型：<code>Array&lt;UploadFile&gt;</code> <code>interface UploadFile { url: string; name?: string; size?: number; type?: &#39;image&#39; \\| &#39;video&#39;; percent?: number; status: &#39;loading&#39; \\| &#39;reload&#39; \\| &#39;failed&#39; \\| &#39;done&#39; }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>default-files</td><td>Array</td><td>undefined</td><td>已上传文件列表。非受控属性。TS 类型：<code>Array&lt;UploadFile&gt;</code> <code>interface UploadFile { url: string; name?: string; size?: number; type?: &#39;image&#39; \\| &#39;video&#39;; percent?: number; status: &#39;loading&#39; \\| &#39;reload&#39; \\| &#39;failed&#39; \\| &#39;done&#39; }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>grid-config</td><td>Object</td><td>-</td><td>upload组件每行上传图片列数以及图片的宽度和高度。TS 类型：<code>{column?: number; width?: number; height?: number;}</code></td><td>N</td></tr><tr><td>gutter</td><td>Number</td><td>16</td><td>预览窗格的 <code>gutter</code> 大小，单位 rpx</td><td>N</td></tr><tr><td>image-props</td><td>Object</td><td>-</td><td>透传 Image 组件全部属性。TS 类型：<code>ImageProps</code>，<a href="./image?tab=api">Image API Documents</a>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>max</td><td>Number</td><td>0</td><td>用于控制文件上传数量，值为 0 则不限制</td><td>N</td></tr><tr><td>media-type</td><td>Array</td><td>[&#39;image&#39;, &#39;video&#39;]</td><td>支持上传的文件类型，图片或视频。TS 类型：<code>Array&lt;MediaType&gt;</code> <code>type MediaType = &#39;image&#39; \\| &#39;video&#39;</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>preview</td><td>Boolean</td><td>true</td><td><code>1.9.5</code>。是否支持图片预览，文件没有预览</td><td>N</td></tr><tr><td>remove-btn</td><td>Boolean</td><td>true</td><td>移除按钮</td><td>N</td></tr><tr><td>request-method</td><td>Function</td><td>-</td><td>自定义上传方法</td><td>N</td></tr><tr><td>size-limit</td><td>Number / Object</td><td>-</td><td>图片文件大小限制，默认单位 KB。可选单位有：<code>&#39;B&#39; \\| &#39;KB&#39; \\| &#39;MB&#39; \\| &#39;GB&#39;</code>。示例一：<code>1000</code>。示例二：<code>{ size: 2, unit: &#39;MB&#39;, message: &#39;图片大小不超过 {sizeLimit} MB&#39; }</code>。TS 类型：<code>number \\| SizeLimitObj</code> <code>interface SizeLimitObj { size: number; unit: SizeUnit ; message?: string }</code> <code>type SizeUnitArray = [&#39;B&#39;, &#39;KB&#39;, &#39;MB&#39;, &#39;GB&#39;]</code> <code>type SizeUnit = SizeUnitArray[number]</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr><tr><td>source</td><td>String</td><td>media</td><td>来源。可选项：media/messageFile</td><td>N</td></tr><tr><td>transition</td><td>Object</td><td><code>{ backTransition: true, duration: 300, timingFunction: &#39;ease&#39; }</code></td><td>拖拽位置移动时的过渡参数,<code>duration</code>单位为ms。TS 类型：<code>Transition</code> <code>interface Transition { backTransition?: boolean, duration?: number, timingFunction?: string }</code>。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a></td><td>N</td></tr></tbody></table><h3 id="upload-events">Upload Events <a class="header-anchor" href="#upload-events"></a></h3><table><thead><tr><th>名称</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>add</td><td><code>(files: MediaContext)</code></td><td>选择后触发，仅包含本次选择的照片；<code>url</code> 表示选定视频的临时文件路径 (本地路径)。<code>duration</code> 表示选定视频的时间长度。<code>size</code>选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type MediaContext = VideoContext[] \\| ImageContext[]</code><br><br><code>interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }</code><br><br><code>interface ImageContext { name: string; type: string; url: string; size: number; width: number; height: number; progress: number }</code><br></td></tr><tr><td>click</td><td><code>(index: number; file: VideoContext \\| ImageContext)</code></td><td>点击已选文件时触发；常用于重新上传</td></tr><tr><td>complete</td><td>-</td><td>上传成功或失败后触发</td></tr><tr><td>drop</td><td><code>(files: MediaContext) </code></td><td>拖拽结束后触发，包含所有上传的文件（拖拽后的文件顺序）；<code>url</code> 表示选定视频的临时文件路径 (本地路径)。<code>duration</code> 表示选定视频的时间长度。<code>size</code> 选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type MediaContext = VideoContext[] \\| ImageContext[]; interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }; interface ImageContext { name: string; type: string; url: string; size: number; width: number; height: number; progress: number}</code><br></td></tr><tr><td>fail</td><td>-</td><td>上传失败后触发</td></tr><tr><td>remove</td><td><code>(index: number; file: UploadFile)</code></td><td>移除文件时触发</td></tr><tr><td>select-change</td><td><code>(files: MediaContext[]; currentSelectedFiles: MediaContext[])</code></td><td>选择文件或图片之后，上传之前，触发该事件。<br><code>files</code> 表示之前已经上传完成的文件列表。<br><code>currentSelectedFiles</code> 表示本次上传选中的文件列表</td></tr><tr><td>success</td><td><code>(files: MediaContext)</code></td><td>上传成功后触发，包含所有上传的文件；<code>url</code> 表示选定视频的临时文件路径 (本地路径)。<code>duration</code> 表示选定视频的时间长度。<code>size</code>选定视频的数据量大小。更多描述参考 wx.chooseMedia 小程序官网描述。<a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/upload/type.ts" target="_blank" rel="noopener noreferrer">详细类型定义</a>。<br><code>type MediaContext = VideoContext[] \\| ImageContext[]</code><br><br><code>interface VideoContext { name?: string; type?: string; url?: string; duration?: number; size?: number; width?: number; height?: number; thumb: string; progress: number }</code><br><br><code>interface ImageContext { name: string; type: string; url: string; size: number; width: number; height: number; progress: number }</code><br></td></tr></tbody></table><h3 id="css-variables">CSS Variables <a class="header-anchor" href="#css-variables"></a></h3><p>组件提供了下列 CSS 变量，可用于自定义样式。</p><table><thead><tr><th>名称</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>--td-upload-add-bg-color</td><td>@bg-color-secondarycontainer</td><td>-</td></tr><tr><td>--td-upload-add-color</td><td>@text-color-placeholder</td><td>-</td></tr><tr><td>--td-upload-add-disabled-bg-color</td><td>@bg-color-component-disabled</td><td>-</td></tr><tr><td>--td-upload-add-icon-disabled-color</td><td>@text-color-disabled</td><td>-</td></tr><tr><td>--td-upload-add-icon-font-size</td><td>56rpx</td><td>-</td></tr><tr><td>--td-upload-disabled-mask</td><td>rgba(0, 0.6)</td><td>-</td></tr><tr><td>--td-upload-drag-transition-duration</td><td>--td-upload-drag-transition-duration</td><td>-</td></tr><tr><td>--td-upload-drag-transition-timing-function</td><td>--td-upload-drag-transition-timing-function</td><td>-</td></tr><tr><td>--td-upload-drag-z-index</td><td>999</td><td>-</td></tr><tr><td>--td-upload-radius</td><td>@radius-default</td><td>-</td></tr></tbody></table>',7),de=[ne],oe={name:"DESIGN"},ie=i('<h3 id="何时使用">何时使用 <a class="header-anchor" href="#何时使用"></a></h3><p>当需要进行图片上传时使用。</p><h3 id="组件搭配使用">组件搭配使用 <a class="header-anchor" href="#组件搭配使用"></a></h3><h5 id="通常用于图片上传，点击上传按钮可唤起动作面板，供用户选择不同渠道进行新的上传。">通常用于图片上传，点击上传按钮可唤起<a href="./action-sheet">动作面板</a>，供用户选择不同渠道进行新的上传。 <a class="header-anchor" href="#通常用于图片上传，点击上传按钮可唤起动作面板，供用户选择不同渠道进行新的上传。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/upload/upload-1.png"></div><hr><h5 id="点击已经上传的图片可跳转图片预览，让用户对已上传的图片进行快速查看。">点击已经上传的图片可跳转<a href="./image-viewer">图片预览</a>，让用户对已上传的图片进行快速查看。 <a class="header-anchor" href="#点击已经上传的图片可跳转图片预览，让用户对已上传的图片进行快速查看。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/upload/upload-2.png"></div><h3 id="推荐-慎用示例">推荐/慎用示例 <a class="header-anchor" href="#推荐-慎用示例"></a></h3><h5 id="若上传的文件有尺寸、格式、数量限制，推荐在文案中进行明确标识。">若上传的文件有尺寸、格式、数量限制，推荐在文案中进行明确标识。 <a class="header-anchor" href="#若上传的文件有尺寸、格式、数量限制，推荐在文案中进行明确标识。"></a></h5><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/upload/upload-3.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div><hr><h5 id="上传特定证件图片，特别是涉及到证件正反面时，推荐结合图示进行上传指引，更加直观。">上传特定证件图片，特别是涉及到证件正反面时，推荐结合图示进行上传指引，更加直观。 <a class="header-anchor" href="#上传特定证件图片，特别是涉及到证件正反面时，推荐结合图示进行上传指引，更加直观。"></a></h5><div class="legend"><div class="item"><img src="https://tdesign.gtimg.com/site/design/mobile-guide/upload/upload-4.png"><img class="tag" src="https://tdesign.gtimg.com/site/doc/good.png"></div></div>',14),ae=[ie],se=e("div",{style:{"margin-top":"48px"}},[e("td-doc-history",{time:"1760543041547"})],-1),re=e("td-doc-footer",{slot:"doc-footer",platform:"mobile"},null,-1);function le(t,s,a,r,p,m){const n=b("Stackblitz");return f(),u("td-doc-content",D,[e("td-doc-header",F,null,512),e("td-doc-tabs",{ref:"tdDocTabs",tab:t.tab},null,8,E),l(e("div",null,[e("div",S,[M,e("div",A,[e("td-doc-demo",{code:t.DemoexamplesingleCode,language:"markup","show-code":"",mode:"open","demo-name":"single","component-name":" README"},[e("div",U,[d(n,{"demo-name":"single","component-name":" README",code:t.DemoexamplesingleCode},null,8,["code"])])],8,T)]),R,e("div",N,[e("td-doc-demo",{code:t.DemoexamplemultipleCode,language:"markup","show-code":"",mode:"open","demo-name":"multiple","component-name":" README"},[e("div",B,[d(n,{"demo-name":"multiple","component-name":" README",code:t.DemoexamplemultipleCode},null,8,["code"])])],8,z)]),V,e("div",L,[e("td-doc-demo",{code:t.DemoexampledragCode,language:"markup","show-code":"",mode:"open","demo-name":"drag","component-name":" README"},[e("div",q,[d(n,{"demo-name":"drag","component-name":" README",code:t.DemoexampledragCode},null,8,["code"])])],8,I)]),j,e("div",O,[e("td-doc-demo",{code:t.DemoexamplestatusCode,language:"markup","show-code":"",mode:"open","demo-name":"status","component-name":" README"},[e("div",$,[d(n,{"demo-name":"status","component-name":" README",code:t.DemoexamplestatusCode},null,8,["code"])])],8,P)]),G,K,e("div",H,[e("td-doc-demo",{code:t.DemoexamplemessageFileCode,language:"markup","show-code":"",mode:"open","demo-name":"messageFile","component-name":" README"},[e("div",J,[d(n,{"demo-name":"messageFile","component-name":" README",code:t.DemoexamplemessageFileCode},null,8,["code"])])],8,Q)]),W]),e("td-doc-phone",X,Z,512),ee],512),[[c,t.tab==="demo"]]),l(e("div",te,de,512),[[c,t.tab==="api"]]),l(e("div",oe,ae,512),[[c,t.tab==="design"]]),se,re],512)}const me=g(k,[["render",le]]);export{me as default};
