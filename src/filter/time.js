import { format } from 'timeago.js'
import dayjs from 'dayjs'

export function timeago(time) {
  return format(time, 'zh_CN');
}

export function date(time) {
  return dayjs.unix(time).format('YYYY年MM月DD日')
}