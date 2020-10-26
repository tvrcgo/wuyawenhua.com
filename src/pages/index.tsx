import React from 'react'
import styles from './index.less'

export default function () {
  return (
    <div className={styles.page}>
      <div><img className={styles.logo} src={require('@/assets/wuya.png')} /></div>
      <h1>乌鸦文化</h1>
      <div className={styles.foot}>粤ICP 012345678</div>
    </div>
  )
}
