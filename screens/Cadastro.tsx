import * as React from 'react'
import { Alert } from 'react-native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { servidor } from '../config/Path';
import { styles } from '../css/Styles';


let nome = "";
let email = "";
let cpf = "";
let usuario = "";
let senha = "";


export default function Cadastro() {

    // Vamos criar o estado inicial das caixas do
    // formulário
    const[nomeUsuario, setNomeUsuario] = React.useState("");
    const[emailUsuario, setEmailUsuario] = React.useState("");
    const[cpfUsuario, setCPFUsuario] = React.useState("");
    const[usuarioUsuario, setUsuarioUsuario] = React.useState("");
    const[senhaUsuario, setSenhaUsuario] = React.useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro Usuário</Text>
            <View style={styles.controles}>
                <TextInput placeholder="Nome do Usuário" style={styles.input} onChangeText={(value)=>setNomeUsuario(value)}/>
                
                <TextInput placeholder="E-mail" keyboardType="email-address" style={styles.input} onChangeText={(value)=>setEmailUsuario(value)}/>
                
                <TextInput placeholder="Usuário" style={styles.input} onChangeText={(value)=>setUsuarioUsuario(value)}/>
                
                <TextInput placeholder="Senha" secureTextEntry style={styles.input} onChangeText={(value)=>setSenhaUsuario(value)}/>

                <TouchableOpacity style={styles.btnlogar} onPress={()=>{
                    
                    nome = nomeUsuario;
                    email = emailUsuario;
                    cpf = cpfUsuario;
                    usuario = usuarioUsuario;
                    senha = senhaUsuario;
                    
                    
                    efetuarCadastro();

                    setNomeUsuario("");
                    setEmailUsuario("");
                    setCPFUsuario("");
                    setUsuarioUsuario("");
                    setSenhaUsuario("");

                }}>
                    <Text style={styles.txtbtncadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            
            
            </View>
        </View>
    );
}




function efetuarCadastro() {

    // Faremos um fetch, ou seja, uma busca de dados
    // por url em javascript
    fetch(`${servidor}/cadastro` ,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nome:nome,
            email:email.toLowerCase,
            cpf:cpf,
            usuario:usuario.toLowerCase,
            senha:senha,
        }),
    }).then((response)=>response.json())
    .then((resultado)=>{
        Alert.alert("Aviso",resultado.output);
        // console.log(resultado);
    }).catch((erro)=>console.error(`Erro ao executar->${erro}`))


}