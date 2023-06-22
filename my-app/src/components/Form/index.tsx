import React from "react";

import { Button, Text, TextInput, View } from "react-native";

export default function Form() {
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
               />

               <Button 
                title="Calcular IMC"
                />
            </View>
        </View>
    )
}