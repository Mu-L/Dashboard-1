<template>
  <el-radio-group v-model="mode" @change="handleBackgroundChange">
    <el-radio :label="1">
      {{ $t('无') }}
    </el-radio>
    <el-radio :label="2">
      {{ $t('纯色') }}
    </el-radio>
    <el-radio v-if="isSupportIndexDB && isFullScreen" :label="5">
      {{ $t('本地图片') }}
    </el-radio>
    <el-radio :label="3">
      {{ $t('网络图片') }}
    </el-radio>
    <el-radio :label="4">
      {{ $t('随机图片') }}
    </el-radio>
  </el-radio-group>
  <div v-if="mode === 2" class="color-wrapper">
    <div class="form-row-control">
      <div class="label">
        {{ $t('选择颜色') }}
      </div>
      <div class="content">
        <standard-color-picker
          v-model="color"
          show-alpha
          @change="handleBackgroundChange"
        />
      </div>
    </div>
  </div>
  <div v-if="showGlassOption && [1,2].includes(mode)" class="glass-wrapper">
    <div class="form-row-control">
      <div class="label">
        {{ $t('毛玻璃效果') }}
      </div>
      <div class="content">
        <el-switch :model-value="!!backdropFilter" @change="onSwitchBackdroupFilter" />
        <Tips :content="$t('glassTips')" />
      </div>
    </div>
    <div v-if="!!backdropFilter" class="form-row-control">
      <div class="label">
        {{ $t('模糊值') }}
      </div>
      <div class="content">
        <el-input-number
          :model-value="glassBlur"
          :min="0"
          :max="50"
          controls-position="right"
          style="width: 100px"
          @change="onChangeGlassBlur"
        />
      </div>
    </div>
  </div>
  <div v-if="mode === 3" class="online-img-wrapper">
    <div class="form-row-control">
      <div class="label">
        URL
      </div>
      <div class="content" style="flex-wrap: wrap">
        <div class="flex-center-y" style="width: 100%">
          <el-input
            v-model="bgImg"
            type="textarea"
            style="width: 100%"
            :autosize="{ minRows: 2, maxRows: 8 }"
            :placeholder="isFullScreen ? $t('输入图片或动态壁纸URL') : $t('输入图片URL')"
            @change="handleBackgroundChange"
          />
          <Tips
            v-if="isFullScreen"
            :content="$t('bgImgTips')"
          />
        </div>
        <div style="margin-top: 8px;">
          <RecommendVideo v-if="recommendVideo" @submit="handleRecommendSelect" />
          <RecommendPicture v-if="recommendPicture" @submit="handleRecommendSelect" />
        </div>
      </div>
    </div>
  </div>
  <div v-if="mode === 4" class="random-img-wrapper">
    <div class="form-row-control">
      <label class="label">{{ $t('图片源') }}</label>
      <div class="content">
        <el-radio-group v-model="randomSource" @change="handleBackgroundChange">
          <el-radio label="unsplash" class="row-radio">
            Unsplash
          </el-radio>
          <el-radio label="bing" class="row-radio">
            {{ $t('必应') }}
          </el-radio>
          <!-- <el-radio label="sina" class="row-radio">{{$t('新浪')}}</el-radio> -->
          <el-radio
            v-if="isFullScreen"
            label="personal"
            :disabled="!wallpaperCollectionList || wallpaperCollectionList.length < 2"
            class="row-radio"
            style="margin-bottom: 16px;"
          >
            <span style="margin-right: 24px;">{{ $t('个人壁纸库') }}</span>
            <PersonalWallpaper />
          </el-radio>
        </el-radio-group>
      </div>
    </div>
    <!-- <template v-if="randomSource === 'unsplash'">
      <div class="form-row-control">
        <label class="label" style="line-height: 32px">{{ $t('关键词') }}</label>
        <div class="content" style="flex-wrap: wrap;">
          <el-radio-group v-model="imgType" @change="handleBackgroundChange">
            <el-radio v-for="(value, key) in BG_IMG_TYPE_MAP" :key="key" :label="key">
              {{
                store.global.lang === 'zh-cn' ? value: key
              }}
            </el-radio>
            <el-radio label="Custom">
              {{ $t('自定义') }}
            </el-radio>
          </el-radio-group>
          <el-input
            v-if="imgType === 'Custom'"
            v-model.lazy="customImgType"
            :placeholder="$t('自定义关键词(英文)')"
            @change="handleBackgroundChange"
          />
        </div>
      </div>
      <div class="form-row-control">
        <label class="label">{{ $t('国内镜像') }}</label>
        <div class="content">
          <el-switch v-model="mirror" @change="handleBackgroundChange" />
        </div>
      </div>
    </template> -->
    <div v-if="isFullScreen" class="form-row-control">
      <label class="label">{{ $t('定时刷新') }}</label>
      <div class="content flex-center-y">
        <el-input-number
          v-model="duration"
          :min="0"
          :max="3600"
          controls-position="right"
          @change="handleBackgroundChange"
        />
        <Tips :content="$t('refreshDurationTips')" />
      </div>
    </div>
    <div v-if="isFullScreen" class="form-row-control">
      <label class="label ellipsis">{{ $t('操作按钮') }}</label>
      <div class="content flex-center-y">
        <el-switch v-model="showRefreshBtn" style="width: 150px" />
        <Tips :content="$t('refreshBtnTips')" />
      </div>
    </div>
  </div>
  <div v-if="mode === 5" class="local-img-wrapper">
    <div class="form-row-control" style="margin: 10px 0 20px;">
      <label class="label">{{ $t('本地图片库') }}</label>
      <div class="content">
        <LocalImg />
      </div>
    </div>
    <div class="form-row-control">
      <label class="label">{{ $t('定时刷新') }}</label>
      <div class="content flex-center-y">
        <el-input-number
          v-model="duration"
          :min="0"
          :max="3600"
          controls-position="right"
          @change="handleBackgroundChange"
        />
        <Tips :content="$t('refreshDurationTips')" />
      </div>
    </div>
    <div v-if="isFullScreen" class="form-row-control">
      <label class="label ellipsis">{{ $t('操作按钮') }}</label>
      <div class="content flex-center-y">
        <el-switch v-model="showRefreshBtn" style="width: 150px" />
        <Tips :content="$t('refreshBtnTips')" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, ref, watch } from 'vue'
import { BG_IMG_TYPE_MAP } from '@/constanst'
import StandardColorPicker from '@/components/FormControl/StandardColorPicker.vue'
import Tips from '@/components/Tools/Tips.vue'
import { useStore } from '@/store'
import { isSupportIndexDB } from '@/plugins/local-img'
import RecommendVideo from './BackgroundTool/RecommendVideo.vue'
import RecommendPicture from './BackgroundTool/RecommendPicture.vue'
import PersonalWallpaper from './BackgroundTool/PersonalWallpaper.vue'
export default defineComponent({
  name: 'BackgroundSelector',
  components: {
    StandardColorPicker,
    Tips,
    RecommendVideo,
    RecommendPicture,
    PersonalWallpaper,
    LocalImg: defineAsyncComponent(() => import('./BackgroundTool/LocalImg.vue'))
  },
  props: {
    background: {
      type: String,
      default: ''
    },
    w: {
      type: Number,
      default: 4
    },
    h: {
      type: Number,
      default: 4
    },
    positionMode: {
      type: Number,
      default: 1
    },
    isFullScreen: {
      type: Boolean,
      default: false
    },
    recommendVideo: {
      type: Boolean,
      default: false
    },
    recommendPicture: {
      type: Boolean,
      default: true
    },
    // 是否展示毛玻璃选项
    showGlassOption: {
      type: Boolean,
      default: false
    },
    backdropFilter: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const mode = ref(1)
    const color = ref('rgba(255,255,255,1)')
    const bgImg = ref('')
    const randomSource = ref('bing')
    const imgType = ref('Nature')
    const customImgType = ref('')
    const mirror = ref(false)
    const duration = ref(120)

    const glassBlur = ref(10)

    watch(
      () => props.background,
      (val) => {
        // Transform background to form data.
        if (!val || val.includes('transparent')) {
          mode.value = 1
        } else if (val.includes('url')) {
          const getURL = (input: string) => {
            const reg = /url\(['"]?(.*?)['"]?\)/
            const match = input.match(reg)
            return match && match.length >= 2 ? match[1] : ''
          }
          const url = getURL(val)
          if (url.includes('/api/randomPhoto')) {
            const _url = new URL(url)
            if (url.includes('sina')) {
              randomSource.value = 'sina'
            } else if (url.includes('bing')) {
              randomSource.value = 'bing'
            } else if (url.includes('personal')) {
              randomSource.value = 'personal'
            } else {
              const keyword = _url.searchParams.get('keyword')
              if (keyword) {
                if (Object.keys(BG_IMG_TYPE_MAP).includes(keyword)) {
                  imgType.value = keyword
                } else {
                  imgType.value = 'Custom'
                  customImgType.value = keyword
                }
              }
              mirror.value = url.includes('mirror')
              randomSource.value = 'unsplash'
            }
            duration.value = ~~(_url.searchParams.get('duration') || 120)
            mode.value = 4
          } else if (url.includes('localhost/localImg')) {
            const _url = new URL(url)
            duration.value = ~~(_url.searchParams.get('duration') || 0)
            mode.value = 5
          } else {
            mode.value = 3
            bgImg.value = url
          }
        } else {
          mode.value = 2
          color.value = val || 'rgba(255,255,255,1)'
        }
      },
      {
        immediate: true
      }
    )

    const w = computed(() => {
      if (props.isFullScreen) {
        return window.innerWidth
      } else if (props.positionMode === 2) {
        return props.w
      } else {
        return props.w * 80
      }
    })

    const h = computed(() => {
      if (props.isFullScreen) {
        return window.innerHeight
      } else if (props.positionMode === 2) {
        return props.h
      } else {
        return props.h * 80
      }
    })

    const handleBackgroundChange = () => {
      let output = ''
      switch (mode.value) {
        case 1:
          output = 'transparent'
          break
        case 2:
          output = color.value
          break
        case 3:
          output = `#242428 url(${bgImg.value}) center center / cover`
          break
        case 4:
          if (randomSource.value === 'sina') {
            output = `#242428 url(https://kongfandong.cn/api/randomPhoto/sina?duration=${duration.value}) center center / cover`
          } else if (randomSource.value === 'bing') {
            output = `#242428 url(https://kongfandong.cn/api/randomPhoto/bing?duration=${duration.value}) center center / cover`
          } else if (randomSource.value === 'personal') {
            output = `#242428 url(https://kongfandong.cn/api/randomPhoto/personal?duration=${duration.value}) center center / cover`
          } else {
            const keyword = imgType.value === 'Custom' ? customImgType.value : imgType.value
            const mirrorStr = mirror.value ? '&type=mirror' : ''
            output = `#242428 url(https://kongfandong.cn/api/randomPhoto?keyword=${keyword}&w=${w.value}&h=${h.value}${mirrorStr}&duration=${duration.value}) center center / cover`
          }
          break
        case 5:
          output = `#242428 url(https://localhost/localImg?duration=${duration.value})`
          break
      }
      emit('update:background', output)
    }

    watch(
      () => [props.w, props.h, props.positionMode],
      () => {
        handleBackgroundChange()
      }
    )

    const handleRecommendSelect = (url: string) => {
      bgImg.value = url
      handleBackgroundChange()
    }

    const store = useStore()
    const showRefreshBtn = computed({
      get: () => store.showRefreshBtn,
      set: (value: boolean) => {
        store.updateState({ key: 'showRefreshBtn', value })
      }
    })

    const wallpaperCollectionList = computed(() => store.wallpaperCollectionList)

    watch(() => props.backdropFilter, (val) => {
      if (val) {
        const regExp = /backdrop-filter:\s{0,}blur\((\d+)px\)/;
        const matchArr = val.match(regExp);
        if (matchArr) {
          const num = matchArr[1];
          glassBlur.value = Number(num)
        }
      }
    })

    const onSwitchBackdroupFilter = (val: boolean) => {
      if (val) {
        if (!glassBlur.value) glassBlur.value = 10
        emit('update:backdropFilter', `blur(${glassBlur.value}px)`)
      } else {
        emit('update:backdropFilter', '')
      }
    }

    const onChangeGlassBlur = (val: number) => {
      glassBlur.value = val
      emit('update:backdropFilter', `blur(${glassBlur.value}px)`)
    }

    return {
      mode,
      bgImg,
      color,
      imgType,
      randomSource,
      wallpaperCollectionList,
      BG_IMG_TYPE_MAP,
      customImgType,
      mirror,
      duration,
      handleBackgroundChange,
      handleRecommendSelect,
      showRefreshBtn,
      store,
      isSupportIndexDB,
      glassBlur,
      onSwitchBackdroupFilter,
      onChangeGlassBlur
    }
  }
})
</script>
<style lang="scss" scoped>
.radio-group-item {
  display: inline-flex;
  margin-right: 10px;
  label {
    cursor: pointer;
    padding-left: 3px;
  }
}
.random-img-wrapper {
  margin-top: 10px;
}
:deep(.el-radio) {
  margin-bottom: 5px;
  margin-right: 20px;
}
.row-radio {
  display: flex;
  height: 32px;
  line-height: 32px;
  margin-bottom: 0;
}
.glass-wrapper,
.color-wrapper {
  width: 100%;
}
</style>
