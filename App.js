import React,{Component} from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      numero: 0,
      botao: 'Vai',
      ultimo: null
    }
    //variavel do timer relógio
    this.timer = null

    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  vai () {
    if(this.timer != null){
      clearInterval(this.timer)
      this.setState({botao:'Vai'})
      this.timer=null
    } else {

      this.setState({botao:'Parar'})
      this.timer = setInterval( () => {
        this.setState({numero: this.state.numero + 0.1})
      },100)
      this.setState({botao:'Parar'})
  
    }
    
  }

  limpar () {
    this.setState({ultimo:this.state.numero})
    clearInterval(this.timer)
    this.setState({botao:'Vai'})
    this.timer=null
    this.setState({numero:0})
  }

  render() {
    return (
      <View style={styles.container}>

        

        <Image
          source={require('./src/cronometro.png')}
          style={styles.img} 
        />

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
        
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
    <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.areaUltima}>
          <Text style={styles.textoTempo}>
            {(this.state.ultimo > 0) ? 'Último Tempo: ' + this.state.ultimo.toFixed(2) + 's' : ''}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -150,
    color:'#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 50,
    height: 40
  },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima: {
    marginTop: 40,
    
    color:'#FFF'
  },
  textoTempo: {
    fontSize: 30,
    fontStyle: 'italic',
    color:'#FFF'
  }
})


export default App;
