import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
import { Image } from 'react-native';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.encima}>

        <View style={{ paddingLeft: 10 }}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://static.thenounproject.com/png/101388-200.png',
            }}
          />
        </View>

        <View style={{ paddingLeft: 95 }} >

          <Image
            style={styles.titulo}
            source={{
              uri: 'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png',
            }}
          />
        </View>

        <View style={{ paddingLeft: 50 }}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://i.pinimg.com/originals/26/f4/8e/26f48ebfc6e55ff1d5cf75d106f62035.png',
            }}
          />
        </View>

        <View style={{ paddingLeft: 10 }}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://static.thenounproject.com/png/2552724-200.png',
            }}
          />
        </View>
      </View>

      <View style={styles.linha}>
        <Text></Text>
      </View>

      <View style={{
        flexDirection: 'row',
        paddingVertical: 10,
      }}>

        <Text style={{ paddingLeft: 15 }} >Stories</Text>

        <View style={{ paddingLeft: 210 }}>
          <Image
            style={{
              width: 15,
              height: 15,
            }}
            source={{
              uri: 'https://i.pinimg.com/originals/b1/f5/2e/b1f52e90182ba307803669ba82ef0cda.png',
            }}
          />
        </View>

        <Text style={{ paddingLeft: 5 }} >Watch All</Text>


      </View>


      <View style={{
        flexDirection: 'row',
        paddingVertical: 10,
      }}>

        <View style={{ paddingLeft: 10 }}>
          <Image
            style={styles.story}
            source={require('./assets/img/story.png')}
          />
          <Text style={{ paddingVertical: 3 }}>Your Story</Text>
        </View>

        <View style={{ paddingLeft: 13 }}>
          <Image
            style={styles.story}
            source={require('./assets/img/storyLive.png')}
          />
          <Text style={{ paddingVertical: 3, paddingLeft: 5 }}>ninanyc</Text>
        </View>

        <View style={{ paddingLeft: 16 }}>
          <Image
            style={styles.story}
            source={require('./assets/img/story.png')}
          />
          <Text style={{ paddingVertical: 3, paddingLeft: 5 }}>chrisrobinp</Text>
        </View>

        <View style={{ paddingLeft: 19 }}>
          <Image
            style={styles.story}
            source={require('./assets/img/story.png')}
          />
          <Text style={{ paddingVertical: 3, paddingLeft: 5 }}>ashoke</Text>
        </View>

        <View style={{ paddingLeft: 21 }}>
          <Image
            style={styles.story}
            source={require('./assets/img/story.png')}
          />
          <Text style={{ paddingVertical: 3, paddingLeft: 5 }}>bem</Text>
        </View>

      </View>

      <View style={{
        flexDirection: 'row',
        paddingVertical: 10,
      }}>

        <View style={{ paddingLeft: 10 }}>
          <Image
            style={{
              height: 40,
              width: 40
            }}
            source={{
              uri: 'https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-bot-atilde-o-de-perfil-do-instagram-by-vexels.png',
            }}
          />
        </View>


        <Text style={{ paddingLeft: 10, paddingVertical: 10 }}>dark_emeralds</Text>


      </View>

      <View style={{
        paddingVertical: 0,
      }}>

        <View >
          <Image
            style={styles.post}
            source={require('./assets/img/whats.jpeg')}
          />
        </View>


      </View>


      <View style={{
        paddingVertical: 10,
      }}>

        <View>
          <Image
            style={{
              height: 50,
              width: 370,

            }}
            source={require('./assets/img/barra.png')}
          />
        </View>


      </View>







    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  icon: {
    width: 25,
    height: 25,
  },
  titulo: {
    width: 110,
    height: 30,
  },
  encima: {
    flexDirection: 'row',
    paddingVertical: 30,
    flexBasis: 1,
  },
  linha: {
    height: 1,
    marginTop: 5,
    backgroundColor: 'black'
  },
  story: {
    width: 65,
    height: 65,
  },
  post: {
    height: 430,
    width: 400
  }
});
