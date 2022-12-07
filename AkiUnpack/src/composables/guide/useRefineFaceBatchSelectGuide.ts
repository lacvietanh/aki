import { nextTick, onUnmounted, Ref, ref } from 'vue'
// @ts-ignore
import Driver from '@/components/TsDriver'
import useRefinePointsRepositories from '@/composables/points/useRefinePointsRepositories'
import { GuideStoryKey } from '@/constants/constants'
import { APP_VERSION } from '@/constants/config'
import QtEventFilter, { QtEventFilterType } from '@/utils/QtEventFilter'
import {delay} from "@/universal/utils/common";

interface IUseRefineGuideRepositories {
    handleGuideStart: () => void
    destroy: () => void
}

export enum GuideId {
    ManualFaceFrameId = 'guide__manual_face_frame'
}

//@ts-ignore
let isWin32 = `${ process.platform }` === 'win32'

export default function useRefineFaceUpdateGuide(): IUseRefineGuideRepositories {

    const { PointGuideImgAdjust, PointGuideBackground, PointGuideHistory } = useRefinePointsRepositories()

    const _onFinishGuide = (): void => {
        localStorage.setItem(GuideStoryKey.Refine_ManualFaceBatchSelect, APP_VERSION)
    }

    const steps = [
        {
            element: `#${ GuideId.ManualFaceFrameId }`,
            popover: {
                className: 'first-step-popover-class',
                title:'',
                description: `按住  ${isWin32?'ctrl':'command ⌘'} + 鼠标点击，可多选人脸，支持批量修改性别/删除`,
                position:'bottom-center'
            },
            onNext: () => null
        }
    ]

    let timer = 0

    const driver: Ref<Driver | null> = ref(null)
    const handleGuideStart = (): void => {
        const value = localStorage.getItem(GuideStoryKey.Refine_ManualFaceBatchSelect)
        if (value) {
            return
        }

        timer = setTimeout(() => {
            driver.value = new Driver({
                autoComplete: true,
                nextBtnText: '',
                doneBtnText: '',
                padding: 2,
                opacity: 0.4,
                allowClose: true,
                showPreviewButton: false,
                keyboardControl:false,
                autocompleteWait:2000000,
                stageBackground:'#00000000',
                position:'bottom-center',
                className: 'refine__face-guide',
                onCloseClicked: () => _onFinishGuide(),
                onClose: () => {
                    QtEventFilter.getInstance().process([QtEventFilterType.Mouse, QtEventFilterType.KeyBoard], true)
                }
            })
            driver.value.defineSteps(steps)
            nextTick(() => {
                delay(10).then(()=>{
                    const footEl:HTMLElement = document.getElementsByClassName('driver-popover-footer')[0] as HTMLElement
                    footEl.style.display = 'none'
                })
                QtEventFilter.getInstance().process([QtEventFilterType.Mouse, QtEventFilterType.KeyBoard], false)
                driver.value?.start()
                _onFinishGuide()
            })
        }, 300)
    }

    // onUnmounted(() => {
    //     if (timer) {
    //         clearTimeout(timer)
    //         timer = 0
    //     }
    //     driver.value = null
    // })

    return {
        handleGuideStart,
        destroy: () => {
            if (timer) {
                clearTimeout(timer)
                timer = 0
            }
            driver.value = null
        }
    }
}
