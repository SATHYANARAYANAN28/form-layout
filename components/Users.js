import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getData } from "../services/http";
import Card from "./Card";

function Users() {
  const [userDetails, setUserDetails] = useState([]);

  async function getExpenses() {
    const userData = await getData();
    setUserDetails(userData);
  }

  function pressHandler(id) {
    console.log("Pressed user card");
  }

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={userDetails}
          renderItem={(itemData) => (
            <Card>
              <Text style={styles.text}>Name: {itemData.item.name}</Text>
              <Text style={styles.text}>Age: {itemData.item.age}</Text>
              <Text style={styles.text}>DOB: {itemData.item.DOB}</Text>
            </Card>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
}

export default Users;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  pressContainer: {
    overflow: "hidden",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
