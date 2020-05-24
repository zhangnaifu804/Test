import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSin: [], 
    };
  }

  danLie = (v, i) => {
    return (
      <View
        key={v.id}
        style={{
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 5,
          backgroundColor: '#e94f4f',
        }}>
        
          <Image
            source={{uri: v.img}}
            style={{
              height: 55,
              width: 66,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              flex:1,
              textAlign: 'center',
              color: 'yellow',
            }}>
            {v.name}
          </Text>
     
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            textAlign: 'left',
            paddingRight: 10,
          }}>
          <Text
            onPress={() => {
              var pre = JSON.parse(JSON.stringify(this.state.allSin));
              pre.splice(i, 1);
              this.setState({
                allSin: pre,
              });
            }}
            style={{
              width: 45,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#428bca',
              borderRadius: 23,
              lineHeight: 45,
              textAlign: 'center',
              color: 'yellow',
            }}>
            删除
          </Text>
        </View>
      </View>
    );
  };

  componentDidMount() {
    fetch('http://www.cjlly.com:3041/record')
      .then(res => res.json())
      .then(res => {
        this.setState({
          allSin: res,
        });
      });
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: 'red'}}>
        {this.state.allSin.map((n, i) => {
          return this.danLie(n, i);
        })}
      </ScrollView>
    );
  }
}

module.exports = App;
