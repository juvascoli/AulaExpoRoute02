import {Text} from "react-native"
import {Link} from "expo-router"

export default function TelaInicial(){
    return(
        //header caracteristica da nav stack
        <>
            <Text>Tela Inicial</Text>
            <Link href="/login" >Ir para login</Link>
        </>

    )
}