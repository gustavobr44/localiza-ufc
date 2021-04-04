import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import styles from './styles'
import Modal from '../ModalSubject'

import emptyHeart from '../../../assets/empty-heart.png';
import fullHeart from '../../../assets/full-heart.png';

export default function Card({
    subjectName,
    subjectHour,
    subjectWeekDays,
    subjectCode,
    profesorName,
    localization,
    courseName,
    courseImage,
    observation,
    likedSubject
  }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [liked, setLiked] = useState(likedSubject);

  const handleLikedSubject = () => {
    setLiked(!liked);
  }

  return (
    <>
      <Modal setModalVisible={setModalVisible} modalVisible={modalVisible} subjectName={subjectName}/>
      <TouchableOpacity style={styles.item} onPress={() => setModalVisible(true)}>
        <View style={styles.courseContainer}>
          <Image
            style={styles.courseImage}
            source={{uri: courseImage}}
          />
          <Text style={styles.courseName}>{courseName}</Text>
        </View>
        <View style={styles.subjectContainer}>
          <Text style={styles.subjectHour}>08:00-10:00</Text>
          <Text style={styles.subjectWeekDays}>Seg | Qua</Text>
          <Text style={styles.subjectName}>{subjectCode} - {subjectName}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{position: 'absolute', marginTop: 50, marginLeft: 310}} onPress={handleLikedSubject}>
        <Image
            style={styles.heartImg}
            source={liked ? fullHeart : emptyHeart}
          />
      </TouchableOpacity>
    </>
  )
}
