import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function Counter(props) {
    const [lifeTotal, setLifeTotal] = useState(props.startingLife);
    const [playerColor, setPlayerColor] = useState(props.playerColor)

    function adjustLife(amount) {
        setLifeTotal(lifeTotal + amount);
    }

    return (
        <View style={[styles.container, {backgroundColor: playerColor}]}>
            <Pressable 
                style={styles.adjustors} 
                onPress={() => adjustLife(-1)}
                onLongPress={() => adjustLife(-5)} >

                <Text style={styles.adjustorText}>-</Text>
            </Pressable>
            <Text style={styles.text}>{lifeTotal}</Text>
            <Pressable 
                style={styles.adjustors} 
                onPress={() => adjustLife(1)}
                onLongPress={() => adjustLife(5)} >

                <Text style={styles.adjustorText}>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    adjustors: {
        flex: 1,
    },
    adjustorText: {
        fontSize: 100,
        textAlign: 'center',
    },
    text: {
        flex: 2,
        fontSize: 120,
        textAlign: 'center',
    }
  });