import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imglogo:{
        width:100,
        height:100,
        resizeMode: "cover",
    },
    controles:{
        width:'80%',
        padding:10,
        margin:20,
        shadowColor:'black',
        shadowOffset:{width:10, height:10},
        shadowOpacity:0.8,
        shadowRadius:10,
        elevation:10,
        backgroundColor: "white",
    },
    input:{
        borderBottomColor: "#eee",
        borderBottomWidth:1,
        padding:5,
        marginBottom:10,
        fontSize:15,
    },
    btnlogar:{
        padding:30,
    },
    txtbtnlogar:{
        textAlign:'center',
        color: "teal",
        textTransform: "uppercase"
    },
    btncadastrar:{
        // position: "absolute",
        // bottom: 100,
        backgroundColor:'#000',
        padding: 20,
        borderRadius: 50,
    },
    txtbtncadastrar:{
        fontSize: 20,
        fontWeight: "bold",
        color: "teal",
        textTransform: "uppercase",
        textAlign:"center",
    },
    titulo:{
        fontSize:30,
        fontWeight:"bold",
        textAlign: "center",
    },
    imgusuario: {
        width: '100%',
        height:200,
        resizeMode: 'cover'
    },
    usuario: {
        padding:20,
        backgroundColor:'#fff',
        shadowColor: 'silver',
        shadowOffset:{width:10,height:10},
        shadowOpacity:1,
        shadowRadius: 10,
        elevation: 10,
    },
    nome: {
        fontSize:15,
        fontWeight: 'bold',
    },
    cpf: {
        fontSize:12,
        fontWeight: 'bold',
    },
    email: {
        fontSize:15,
        color:"#f00",
        fontWeight: "bold",
    },
    senha: {
        fontSize: 15,
        color: "teal",
        fontWeight: "bold",
    },
    scroll: {
        width:"100%",
    },
    apagar:{
        textAlign:"center",
        padding:20,
        width:'80%',
        borderRadius:10,
        borderWidth:1,
        borderColor:'red',
    },
    txtbtnapagar:{
        fontSize:15,
        textAlign:'center',
        fontWeight: "bold",
    },
    header:{
        flexDirection:'row',
        paddingTop:60,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:30,
        justifyContent:'center'
        
    },
    perfil:{

    },
    imgperfil:{
        width:60,
        height:60,
        resizeMode:'contain',
        borderRadius:100
    },
    titulos:{
        flex:2
    },
    nomes:{
        color:'#989cac',
        fontWeight:'bold',
        fontSize:15,
        padding:10,
    },
    descricao:{
        color:'#989cac',
        paddingLeft:20
    },
    pesquisa:{
        
    },
    imgpesquisa:{
        flex:1,
        width:30,
        height:30,
        resizeMode:'contain',
    },
    stories:{

    },
    titulostories:{
        color:'#989cac',
        fontSize:20,
        margin:20
    },
    scrollstories:{

    },
    imgstories:{
        width:200,
        height:300,
        resizeMode:'contain',
        borderRadius:60,
        margin:5  
    },
    blackbox:{
        backgroundColor:"#090909",
        color:'#989cac',
        fontSize:15,
        padding:10,
        width:50,
        borderRadius:10,
        position:"absolute",
        zIndex:1000,
        top:20,
        left:30,
        textAlign:"center"
    },
    redbox:{
        backgroundColor:"#090909",
        color:'#989cac',
        fontSize:15,
        padding:10,
        width:90,
        borderRadius:10,
        position:"absolute",
        zIndex:1000,
        top:20,
        left:30,
        textAlign:"center"
    },
    txticon:{
        flexDirection:"row",
        alignItems:"center"

    },
    txt:{
        color:"#989cac",
        fontSize:20,
        padding:10
    },
    icon:{
        width:28,
        height:18,
        resizeMode:'contain'
    },
    trending:{
       
    },
    cxtitulo:{
        flexDirection:"row",
        alignItems:'center',
        marginTop:30,
        marginBottom:30
    },
    trendingtitulo:{
        fontSize:30,
        color:"#989cac",
        paddingLeft:10
    },
    trendingmore:{
        width:60,
        height:10,
        resizeMode:'contain',
        marginLeft:'auto',
        paddingRight:10
    }, 
    cxtrendingdetalhe:{ 
        backgroundColor:"#403d40",
        borderRadius:20,
        padding:10,
        width:'90%',
        marginLeft:'auto',
        marginRight:'auto'
    },
    detalheimg:{
        width:'100%',
        height:300,
        borderRadius:10,
        resizeMode:'cover'
    },
    // o Bottom foi utilizado para mandar o like para baixo.
    detalhelike:{
        backgroundColor:'#ff6',
        padding:10,
        borderWidth:5,
        borderColor:'rgba(255,255,100,0.7)',
        position:'absolute',
        zIndex:1000,
        bottom:0,
        right:0,
        borderBottomRightRadius:10,
        borderTopLeftRadius:5,
        textAlign:'center'
        
    },
    trendingusuario:{
        flexDirection:"row",
        marginTop:20,
        marginBottom:20
    },
    trendingusuarioimg:{
        width:50,
        height:50,
        borderRadius:20,
        resizeMode:'contain',
        marginRight:10
    },
    trendingusuariotitulo:{
        fontSize:20,
        color:'#989cac',
        fontWeight:'bold'
    },
    trendingusuariosub:{
        color:'#989cac'
    },
    trendingobs:{
        color:'#989cac'
    }
});