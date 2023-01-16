import { Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function MyListItem(props) {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>{props.item.name}</Text>
            <Text>Count: {count}</Text>
            <Button title="Increment count" onPress={() => setCount(count + 1)} />
        </View>
    );
}