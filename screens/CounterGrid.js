import { StyleSheet, Text, View } from 'react-native';
import Counter  from './Counter';

export default function CounterGrid() {
    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <Counter startingLife={40} playerColor='#3A7256'/>
                <Counter startingLife={40} playerColor='#8E89CA' />
            </View>
            <View style={styles.column}>
                <Counter startingLife={40} playerColor='#C6959D'/>
                <Counter startingLife={40} playerColor='#BC55AC' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
    },
  });