import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import SubjectListPage from './SubjectListPage'
import LikedSubjects from './LikedSubjects'
import MySubjects from './MySubjects'

const areas = [
  {
    title: 'Lista de cadeiras',
    screen: 'SubjectListPage',
    iconSrc: require('../../../assets/list.jpg'),
  },
  {
    title: 'Cadeiras favoritas',
    screen: 'LikedSubjects',
    iconSrc: require('../../../assets/empty-heart.jpg'),
  },
  {
    title: 'Minhas cadeiras',
    screen: 'MySubjects',
    iconSrc: require('../../../assets/edit.jpg'),
  }
]

export default function SubjectPages({ navigation }) {
  const [screen, setArea] = useState('SubjectListPage');

  return (
    <>
      <View style={styles.container}>
        {screen === 'SubjectListPage' && (
            <SubjectListPage title='Lista' />
          )
        }
        {screen === 'LikedSubjects' && (
            <LikedSubjects title='Cadeiras favoritas' />
          )
        }
        {screen === 'MySubjects' && (
            <MySubjects navigation={navigation} title='Minhas cadeiras' />
          )
        }
      </View>

      <View style={styles.navbar}>
        {areas.map((area, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => setArea(area.screen)} style={styles.pageListItem}>
              <Image
                style={styles.pageListItemIcon}
                source={area.iconSrc}
              />
              <Text style={styles.pageListItemText}>
                {area.title}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </>
  )
}
