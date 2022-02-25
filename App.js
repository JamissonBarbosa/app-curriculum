import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'


import Card from './components/Card'

import fotoPerfil from './assets/child.png'  


const App = () => {

  function handleRedeSocial(social_Media){

    switch (social_Media) {

      case 'github':
        Alert.alert('GitHub', 'https://github.com/JamissonBarbosa')
        break

      case 'facebook':
        Alert.alert('FaceBook', 'https://facebook.com/jamisson-barbosa-silva')
        break

      case 'linkedin':
        Alert.alert('LinkedIn', 'https://linkedin.com/in/jamisson-barbosa-silva')
        break
    }
  }



  return (
    <>
      <View style={styles.page}>
        <View style={styles.containerCabecalho}>
          <Image source={fotoPerfil} style={styles.foto}/>
          <Text style={styles.nome} >JAMISSON BARBOSA</Text>
          <Text style={styles.desc}>FullStack Developer</Text>
          <View style={styles.socialMedia}>

            <TouchableOpacity onPress={()=>handleRedeSocial('github')}>
              <Icon name="github" size={30}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30}/>
            </TouchableOpacity>
          </View>
        </View>

          <Card titulo="Formação Acadêmica">
            <Text style={styles.cardContentText}>Descrição das formaçoes academicas</Text>
            <Text style={styles.cardContentText}>Descrição das formaçoes academicas</Text>
            <Text style={styles.cardContentText}>Descrição das formaçoes academicas</Text>
            <Text style={styles.cardContentText}>Descrição das formaçoes academicas</Text>
          </Card>

          <Card titulo="Experiências Profissional">
            <Text style={styles.cardContentText}>Descrição das Experiências  Profissionais</Text>
            <Text style={styles.cardContentText}>Descrição das Experiências  Profissionais</Text>
            <Text style={styles.cardContentText}>Descrição das Experiências  Profissionais</Text>
            <Text style={styles.cardContentText}>Descrição das Experiências  Profissionais</Text>
          </Card>

          <Card titulo="Experiências Profissional">
            <Text>Descrição das Experiências  Profissionais</Text>
            <Text>Descrição das Experiências  Profissionais</Text>
            <Text>Descrição das Experiências  Profissionais</Text>
            <Text>Descrição das Experiências  Profissionais</Text>
          </Card>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E7e7e7',
    alignItems: 'center'
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  containerCabecalho:{
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nome:{
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10
  },
  desc: {
    color: '#34495E',
    fontWeight: 'bold',
    marginBottom: 10
  }, 
  socialMedia:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
    marginTop: 20
  },
  cardContentText:{
    marginBottom: 10,
    color: '#414549',
  } 
});

export default App;