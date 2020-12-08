import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../components/dataArrays';
//import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
//import { getCategoryName } from '../../data/MockDataAPI';

export default class HomeScreen extends React.Component {


  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('MyForestScreen');
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='#FF69B4' backgroundColor='#FF69B4' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
       
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View style={{ flex:1,
        backgroundColor:'#420642',marginTop:50}}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
