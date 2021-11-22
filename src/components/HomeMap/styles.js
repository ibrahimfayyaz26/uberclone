import { StyleSheet ,Dimensions} from 'react-native'


export const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        height:Dimensions.get("window").height - 400
    }
})
