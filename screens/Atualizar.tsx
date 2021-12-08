import * as React from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { servidor } from "../config/Path";
import { styles } from "../css/Styles";
import {AntDesign} from '@expo/vector-icons'

let idusuario = "";
let nome = "";
let email = "";
let rs = "";

export default function Atualizar({route}) {
    const {usuario} = route.params;
    const {token} = route.params;
    rs = token;
    
    console.log(`Tela Atualizar ${usuario.email}`);
    console.log(`Token no atualizar ${token}`)
    
    const [nomeUsuario,setnomeUsuario] = React.useState(usuario.nome);
    const [emailUsuario,setEmailUsuario] = React.useState(usuario.email);
    idusuario = usuario._id;     
    
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atualizar dados</Text>
            <View>
                <TextInput placeholder="Nome do Usuário" style={styles.input}
                value={nomeUsuario}
                onChangeText={(value)=>setnomeUsuario(value)}
                />
                <TextInput placeholder="E-Mail" keyboardType="email-address" style={styles.input}
                value={emailUsuario}
                onChangeText={(value)=>setEmailUsuario(value)}
                />
                <TouchableOpacity style={styles.btnlogar} onPress={() => {
                    nome = nomeUsuario;
                    email = emailUsuario;

                    efetuarAtualização();

                    setnomeUsuario('');
                    setEmailUsuario('');

                }}>
                    <Text style={styles.btnlogar}>Atualizar os dados</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.apagar} onPress={()=>{

                excluirUsuario();

            }}>
                <AntDesign name="delete" size={24} color="black" />
                <Text style={styles.txtbtnapagar}>Apagar a conta</Text>
            </TouchableOpacity>
        </View>
    );
}


function efetuarAtualização(){

    fetch(`${servidor}/atualizar/${idusuario}`,{
        method:'PUT',
        headers:{
            accept:'application/json',
            'content-type':'application/json',
            'token':rs
        },
        body:JSON.stringify({
            nome:nome.toLowerCase,
            email:email
        })
    }).then((response)=>response.json())
    .then((rs)=>{
        Alert.alert("Atualização",rs.output);
    })
    .catch((erro)=>console.error(`Erro ao tentar ler a api ->${erro}`))
}


function excluirUsuario(){

    let r = false;

    Alert.alert("Atenção","Você realmente deseja apagar essa conta?",[
        {
            text:"Cancelar",
            onPress: () => {},
        },
        {
            text: "APAGAR",
            onPress: () => r = true,
        },
    ]);

    if(r){
        fetch(`${servidor}/apagar/${idusuario}`, {
            method:"DELETE",
            headers:{
                accept:"application/json",
                "content-type":"application/json",
                "token":rs 
            }

        }).then((response)=>response.json())
        .then((dados)=>{
            if(!dados){
                return Alert.alert("Apagado","Conta Excluida");
            }
            else{
                Alert.alert("Atenção",dados.output)
            }
        }).catch((erro)=>console.error(`Erro ao ler a api -> ${erro}`))
    }

}