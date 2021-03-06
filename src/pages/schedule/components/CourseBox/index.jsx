import React from 'react'
import Taro from '@tarojs/taro'
import { useDispatch, useSelector } from 'react-redux'
import { View } from '@tarojs/components'

import { updateUiData } from '../../../../actions/schedule'
import IconFont from '../../../../components/iconfont'

export default ({ boxType, courseBoxList, dayIndex, startTime }) => {
  const courseBoxData = courseBoxList[0] ? courseBoxList[0] : {}
  const courseBoxData_ = courseBoxList[1] ? courseBoxList[1] : {}
  const { type, name = "", clazzRoom, color, memo } = courseBoxData
  const { name: name_ = "", color: color_, memo: memo_ } = courseBoxData_
  const theme = useSelector(state => state.schedule.bizData.userConfig.theme)
  const showRedPoint = useSelector(state => state.schedule.bizData.userConfig.showRedPoint)
  const diff = useSelector(state => state.schedule.uiData.diff)
  const chosenBlank = useSelector(state => state.schedule.uiData.chosenBlank)
  const courseOpacity = useSelector(state => state.schedule.bizData.userConfig.courseOpacity)
  const weekIndex = useSelector(state => state.schedule.bizData.weekIndex)
  const currentWeekIndex = useSelector(state => state.schedule.bizData.currentWeekIndex)
  const dispatch = useDispatch()

  const isChosen = (chosenBlank[0] === dayIndex && chosenBlank[1] === startTime)
  let courseName = name.length <= 8 ? name : (name.slice(0, 7) + "...")
  let courseName_ = name_.length <= 4 ? name_ : (name_.slice(0, 4) + `\n...`)
  if (courseBoxList.length > 1) {
    courseName = name.length <= 4 ? name : (name.slice(0, 4) + `\n...`)
  } else if (boxType === 1) {
    courseName = name.length <= 5 ? name : (name.slice(0, 5) + `\n...`)
  }

  const handleClickCourse = (data) => {
    if (!name) { return }

    dispatch(updateUiData({
      courseDetailFLData: {
        isOpened: true,
        showMemo: true,
        type: data.type,
        name: data.name,
        clazzRoom: data.clazzRoom,
        teacher: data.teacher,
        timeRange: data.timeRange,
        timeIndexes: data.timeIndexes,
        dayIndex,
        lessonCode: data.lessonCode,
        lessonType: data.lessonType,
        weekIndexes: data.weekIndexes,
        studentClazzes: data.studentClazzes,
        studentNumber: data.studentNumber,
        color: data.color,
        lessonId: data.lessonId,
        credits: data.credits,
        campus: data.campus,
        weekIndexesZh: data.weekIndexesZh,
        semesterId: data.semesterId,
        semestercode: data.semestercode,
        memo: data.memo,
      },
      chosenBlank: [],
    }))
  }

  const setChosenBlank = () => {
    dispatch(updateUiData({ chosenBlank: [dayIndex, startTime] }))
  }

  const openCustomScheduleFL = () => {
    setTimeout(() => {
      dispatch(updateUiData({
        customScheduleFLData: {
          isOpened: true,
          ...courseBoxData,
          dayIndex,
          startTime,
          chosenWeeks: [weekIndex + 1],
          currentWeekIndex: currentWeekIndex + 1,
        },
        chosenBlank: [],
      }))
    });
  }

  const handleMultCourseClick = () => {
    Taro.showActionSheet({
      itemList: courseBoxList.map(courseBD => courseBD.name),
      success: function (res) {
        dispatch(updateUiData({
          courseDetailFLData: {
            isOpened: true,
            ...courseBoxList[res.tapIndex],
          },
          chosenBlank: [],
        }))
      },
    })
  }

  if (!boxType) {
    return ''
  }
  else if (!name && !diff) {
    return (
      <View className={`courseBox courseBox-boxType_${boxType}`} style={`opacity: ${courseOpacity}`} onClick={setChosenBlank}>
        {
          isChosen &&
          <View className='courseBox-blank' onClick={openCustomScheduleFL}>
            <IconFont name='plus' size={46} color='#c5c5c5' />
          </View>
        }
      </View>
    )
  }
  else if (courseBoxList.length > 2) {
    return (
      <View className={`courseBox courseBox-boxType_${boxType}`} style={`opacity: ${courseOpacity}`}>
        <View className={`courseBox-course courseBox-course_mult courseBox-course-boxType_${boxType} courseBox-boxColor-${color}_${theme}`} onClick={handleMultCourseClick}>
          <View className={`courseBox-course-name courseBox-fontColor-${color}_${theme}`}>{`这里有${courseBoxList.length}节课`}</View>
          <View className={`courseBox-course-clazzRoom courseBox-fontColor-${color}_${theme}`}>点击查看详情</View>
        </View>
      </View>
    )
  }

  return (
    <View className={`courseBox courseBox-boxType_${boxType}`} style={`opacity: ${courseOpacity}`}>
      <View className={`courseBox-course  courseBox-course_${type} courseBox-course-boxType_${boxType} courseBox-boxColor-${color}_${theme} courseBox-course__${courseBoxList.length > 1 ? 'doubleLeft' : ''}`} onClick={() => handleClickCourse(courseBoxData)}>
        {
          (memo && showRedPoint) && <View className='courseBox-redPoint'></View>
        }
        <View className={`courseBox-course-name courseBox-fontColor-${color}_${theme}`}>{courseName}</View>
        {
          courseBoxList.length > 1 || boxType > 1 &&
          <View className={`courseBox-course-clazzRoom courseBox-fontColor-${color}_${theme}`}>{clazzRoom}</View>
        }
      </View>
      {
        courseBoxList.length > 1 &&
        <View className={`courseBox-course courseBox-course-boxType_${boxType} courseBox-course__doubleRight courseBox-boxColor-${color_}_${theme}`} onClick={() => handleClickCourse(courseBoxData_)}>
          {
            (memo_ && showRedPoint) && <View className='courseBox-redPoint'></View>
          }
          <View className={`courseBox-course-name courseBox-fontColor-${color_}_${theme}`}>{courseName_}</View>
        </View>
      }
    </View>
  )
}
