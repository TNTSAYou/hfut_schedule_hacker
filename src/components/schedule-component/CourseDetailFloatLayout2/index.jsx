// 这个是全校课表/历史课表/搜索课程使用的

import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { useDispatch } from 'react-redux'
import { AtFloatLayout } from 'taro-ui'

import IconFont from '../../iconfont'
import CustomButton from '../../CustomButton'
import { UPDATE_BIZDATA } from '../../../constants/schedule/classlist'
import './index.scss'

export default (props) => {
  const { courseDetailFLData, onClose } = props
  const { isOpened, name, credits, clazzRoom, teacher, timeRange, lessonCode, lessonType, studentClazzes, studentNumber, weekIndexesZh, semestercode, campus } = courseDetailFLData
  const dispatch = useDispatch()

  let clazzString = ''
  if (studentClazzes) {
    studentClazzes.map((clazz) => {
      clazzString += clazz
      clazzString += (clazz === studentClazzes[studentClazzes.length - 1] ? '' : '、')
    })
  }

  // icon先不要了啊
  const items = [
    {
      value: <><Text className='courseDetailFloatLayout2-itemTitle'>教室：</Text><Text>{clazzRoom}</Text></>,
      icon: '',
    },
    {
      value: <><Text className='courseDetailFloatLayout2-itemTitle'>老师：</Text><Text>{teacher}</Text></>,
      icon: '',
    },
    {
      value: <><Text className='courseDetailFloatLayout2-itemTitle'>学分：</Text><Text>{credits}</Text></>,
      icon: '',
    },
    {
      value: <><Text className='courseDetailFloatLayout2-itemTitle'>时间：</Text><Text>{timeRange}</Text></>,
      icon: '',
    },
    {
      value: <><Text className='courseDetailFloatLayout2-itemTitle'>校区：</Text><Text>{campus}</Text></>,
      icon: '',
    },
    {
      value: <><Text className='courseDetailFloatLayout2-itemTitle'>课堂人数：</Text><Text>{studentNumber}</Text></>,
      icon: '',
    },
    {
      value: <><Text className='courseDetailFloatLayout2-itemTitle'>开设周目：</Text><Text>{weekIndexesZh}</Text></>,
      icon: '',
    },
    {
      value: <><Text className='courseDetailFloatLayout2-itemTitle'>课程类别：</Text><Text>{lessonType}</Text></>,
      icon: '',
    },
    {
      value: <><Text className='courseDetailFloatLayout2-itemTitle'>课程代码：</Text><Text>{lessonCode}</Text></>,
      icon: '',
    },
    {
      value: <><Text className='courseDetailFloatLayout2-itemTitle'>上课班级：</Text><Text>{clazzString}</Text></>,
      icon: '',
    },
  ]

  const handleClickClazzMates = () => {
    dispatch({
      type: UPDATE_BIZDATA,
      payload: {
        clazzName: name,
        lessonCode,
        semestercode,
      },
    })
    Taro.navigateTo({ url: '/pages/schedule/pages/class-list/index' })
  }

  return (
    <AtFloatLayout
      isOpened={isOpened}
      className='courseDetailFloatLayout2'
      onClose={onClose}
    >
      <View className='courseDetailFloatLayout2-header'>
        {name}
        <View className='courseDetailFloatLayout2-header-close' onClick={onClose}>
          <IconFont name='shibai' size={48} color='#60646b' />
        </View>
      </View>

      <View className='courseDetailFloatLayout2-content'>
        {
          items.map((item, index) => (
            <View className='courseDetailFloatLayout2-content-item' key={`thisis${index}`}>
              <IconFont name={item.icon} />
              <Text>{item.value}</Text>
            </View>
          ))
        }
      </View>

      <View className='courseDetailFloatLayout2-footer'>
        <CustomButton value='班级同学' onSubmit={handleClickClazzMates} />
      </View>
    </AtFloatLayout>
  )
}
