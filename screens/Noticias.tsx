import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { styles } from '../css/Styles';
import Home from './Home';

export default function App() {
  return (
    <View style={styles.container}>


      {/* Início do header */}
      <View style={styles.header}>
       
        <View style={styles.perfil}>
          <Image source={{uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"}} style={styles.imgperfil}/>
        </View>

        <View style={styles.titulos}>
          <Text style={styles.nomes}> José de Carvalho </Text>
          <Text style={styles.descricao}>Futebolista</Text>
        </View>
        
        <View style={styles.pesquisa}>
          <Image source={{uri:"https://upload.wikimedia.org/wikipedia/meta/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png"}} style={styles.imgpesquisa}/>
        </View>

      </View>
      {/*Fim do header*/}

      <ScrollView horizontal={false}>
      
      {/* Inicio do Stories */}

      <View style={styles.stories}>
        <Text style={styles.titulostories}>
          Stories
        </Text>

        <ScrollView horizontal={true} style={styles.scrollstories}>
          <View>
            <Text style={styles.blackbox}>Live</Text>
            <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/8/83/Bra-Cos_%281%29_%28cropped%29.jpg"}} style={styles.imgstories}/>
            <View style={styles.txticon}>
              <Text style={styles.txt}>Neymar</Text>
              <Image source={require("./assets/iconverifield.png")} style={styles.icon}/>
              </View> 
          </View>

          <View>
            <Text style={styles.redbox}>Premiere</Text>
            <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"}} style={styles.imgstories}/>
            <View style={styles.txticon}>
              <Text style={styles.txt}>CR7</Text>
              <Image source={require("./assets/iconverifield.png")} style={styles.icon}/>
              </View> 
          </View>

          <View>
            <Image source={{uri:"https://www.ogol.com.br/img/jogadores/48/557248_med__20190318102658_edilson.png"}} style={styles.imgstories}/>
            <View style={styles.txticon}>
              <Text style={styles.txt}>Edilson</Text>
              <Image source={require("./assets/iconverifield.png")} style={styles.icon}/>
              </View> 
          </View>

          <View>
            <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Pele_by_John_Mathew_Smith.jpg/1200px-Pele_by_John_Mathew_Smith.jpg"}} style={styles.imgstories}/>
            <View style={styles.txticon}>
              <Text style={styles.txt}>Pelé</Text>
              <Image source={require("./assets/iconverifield.png")} style={styles.icon}/>
              </View> 
          </View>

          <View>
            <Image source={{uri:"https://www.diariodopeixe.com.br/wp-content/uploads/2020/09/Cristiane2.jpeg"}} style={styles.imgstories}/>
            <View style={styles.txticon}>
              <Text style={styles.txt}>Cristiane</Text>
              <Image source={require("./assets/iconverifield.png")} style={styles.icon}/>
              </View> 
          </View>
        </ScrollView>

      </View>
      {/* Fim dos Stories */}

      {/* Início do Trending */}
      <View style={styles.trending}>

        <View style={styles.cxtitulo}>
          <Text style={styles.trendingtitulo}>
            Trending
          </Text>
          <Image source={require("./assets/more.png")} style={styles.trendingmore}/> 
        </View>

        <View style={styles.cxtrendingdetalhe}>
          <View>
            <Image source={{uri:"https://magazine.zarpo.com.br/wp-content/uploads/2019/02/A-sensacao-de-saltar-de-paraquedas-1200x900.jpg"}} style={styles.detalheimg}/>
            <Text style={styles.detalhelike}>Like</Text>
          </View>

        <View style={styles.trendingusuario}>
          <Image source={{uri:"https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"}} style={styles.trendingusuarioimg}/>
          <View>
            <Text style={styles.trendingusuariotitulo}>João Miguel</Text>
            <Text style={styles.trendingusuariosub}>2 minutos atrás</Text>
          </View>

          

        </View>

        <Text style={styles.trendingobs}>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet in dolorem,
          ducimus quasi accusamus magnam optio culpa unde deserunt aliquid corporis
          suscipit distinctio vel similique? Repellendus eligendi sit distinctio maxime.

          </Text>


      </View>
      
      </View>

      {/* Fim do Trending */}


      {/* Todos os elementos devem ficar acima do ScrollView */}
      </ScrollView>


    </View>
 
  );
}