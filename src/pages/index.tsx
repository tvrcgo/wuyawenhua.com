import React from 'react'
import styles from './index.less'

export default function () {
  return (
    <div className={styles.page}>
      <div><img className={styles.logo} src={require('@/assets/wuya.jpg')} /></div>
      <h1>乌鸦文化</h1>
      <div className={styles.foot}><a href='http://beian.miit.gov.cn' target='_blank'>粤ICP备2020110649号</a></div>
    </div>
  )
}
