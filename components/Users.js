import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getData } from "../services/http";
import Card from "./Card";

function Users() {
  const [userDetails, setUserDetails] = useState([]);

  async function getExpenses() {
    const userData = await getData();
    setUserDetails(userData);
  }

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {userDetails.map((data, key) => {
          return (
            <Card key={key}>
              <Text style={styles.text}>Name: {data.name}</Text>
              <Text style={styles.text}>Age: {data.age}</Text>
              <Text style={styles.text}>DOB: {data.DOB}</Text>
            </Card>
          );
        })}
      </View>
    </>
  );
}

export default Users;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
