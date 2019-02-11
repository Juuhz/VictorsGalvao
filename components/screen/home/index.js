import React, {Component} from 'react';
var Sound = require('react-native-sound')
Sound.setCategory('Playback');
// Importação do estilo
import {
  Wrapper,
  Title,
  BtnStart,
  BtnText,
} from './styled';

class Home extends Component {

  startGemidao = () => {
    var gemidao = new Sound('gemidao.mp3', Sound.MAIN_BUNDLE, (error) => {
      
      if ( error ) {
        alert('Erro, feche o app e abra novamente', error);
        return;
      }

      gemidao.play();
    });
  }

  render() {
    return (
      <Wrapper>
        <Title>Victor's Fala Galvão!</Title>
        <BtnStart onPress={this.startGemidao}>
          <BtnText>INICIAR!</BtnText>
        </BtnStart>
      </Wrapper>
    );
  }
}

export default Home;