import { ElMessageBox } from 'element-plus'
import { ElMessage } from 'element-plus'
import { Listener } from './listener'
import { compressAccurately } from 'image-conversion'
import http from '@/request/index'

export const listener = new Listener()

// 防抖函数
export const debounce = (
  fn: (args: 'title' | 'content') => void,
  delay = 2000,
) => {
  let timer: number | null = null

  return function (args: 'title' | 'content') {
    // const args = [].slice.call(arguments)

    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(args)
    }, delay)
  }
}

// cusConfirm
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const cusConfirm = (title: string, fn: Function) => {
  ElMessageBox.confirm(title, '操作提醒', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
    customStyle: { padding: '14px 0 20px' },
    showClose: false,
    center: true,
  }).then(() => {
    fn()
  })
}

export const getTimer = (stringTime: string) => {
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const week = day * 7
  const month = day * 30
  const time1 = new Date().getTime() //当前的时间戳
  const time2 = Date.parse(stringTime) //指定时间的时间戳
  const time = time1 - time2

  let result = null
  if (time < 0) {
    alert('设置的时间不能早于当前时间！')
  } else if (time / month >= 1) {
    result = Math.floor(time / month) + '月前'
  } else if (time / week >= 1) {
    result = Math.floor(time / week) + '周前'
  } else if (time / day >= 1) {
    result = Math.floor(time / day) + '天前'
  } else if (time / hour >= 1) {
    result = Math.floor(time / hour) + '小时前'
  } else if (time / minute >= 1) {
    result = Math.floor(time / minute) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}

export const isToBottom = (fn: () => void) => {
  const position = window.pageYOffset || document.documentElement.scrollTop
  const docHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight,
  )
  if (position + window.innerHeight >= docHeight - 1) {
    fn()
  }
}

export const compressImg = (file: File) => {
  const maxsize = 300
  const typeList = ['image/jpeg', 'image/png', 'image/gif']
  const isValid = typeList.includes(file.type)
  const need_press = file.size / 1024 > maxsize
  if (!isValid) {
    ElMessage.error('图片格式只能是 JPG/PNG/GIF!')
  }
  return new Promise((resolve, reject) => {
    if (!isValid) {
      return reject()
    }
    if (!need_press) {
      return resolve(file)
    }
    compressAccurately(file, maxsize).then(res => {
      if (res instanceof Blob) {
        res = new File([res], file.name, { type: file.type })
      }
      resolve(res)
    })
  })
}

export const uploadImg = async (files: any[]) => {
  if (files.length == 0) {
    return null
  }
  const form_data = new FormData()
  for (let i = 0; i < files.length; i++) {
    const res: any = await compressImg(files[i])
    form_data.append('images', res, res.name)
  }
  return http.post('/others/uploads', form_data, {
    baseURL: 'localhost:9000//api2',
  })
}
