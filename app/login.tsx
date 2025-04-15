import {Text} from "react-native"

import {Link} from "expo-router"

export default function TelaLogin(){
    return(
       <>
        <Text>Tela Login</Text>
        <Link href = "/(drawer)"> Ir para o drawer</Link>
        </>
    )
}