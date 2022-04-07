import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { addData } from "../services/http";
import CustomButton from "./CustomButton";
import Input from "./Input";
import Users from "./Users";

// Component Starts
function UserForm() {
  const [isUserScreenNeeded, setUserScreenNeeded] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    DOB: "",
    age: "",
    password: "",
    confirmPwd: "",
  });

  function inputChangeHandler(inputIdentifier, enteredText) {
    setUserDetails((currInputs) => {
      return {
        ...currInputs,
        [inputIdentifier]: enteredText,
      };
    });
  }

  const nameIsValid = userDetails.name.length > 0;
  const ageIsValid = userDetails.age > 0;
  const pwsIsValid = userDetails.password.length > 0;

  function addDataHandler() {
    if (!nameIsValid || !ageIsValid || !pwsIsValid) {
      Alert.alert("Invalid input!", "Please verify your inputs");
      return;
    }
    if (userDetails.password !== userDetails.confirmPwd) {
      Alert.alert("Invalid Input!", "Please re-enter your password correctly!");
      return;
    }

    addData({
      name: userDetails.name,
      DOB: userDetails.DOB,
      age: userDetails.age,
      password: userDetails.password,
    });
    resetHandler();
  }

  function resetHandler() {
    setUserDetails({
      name: "",
      DOB: "",
      age: "",
      password: "",
      confirmPwd: "",
    });
  }
  function viewUsers() {
    setUserScreenNeeded(true);
  }

  if (isUserScreenNeeded) {
    return <Users />;
  }

  return (
    <View style={styles.container}>
      <Text>Please enter the below details</Text>
      <Input
        label="Name"
        icon={true}
        textInputConfig={{
          placeholder: "Enter your name",
          keyboardType: "default",
          autoCorrect: false,
          autoCapitalize: "none",
          onChangeText: inputChangeHandler.bind(this, "name"),
          value: userDetails.name,
        }}
      />
      <Input
        label="DOB"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          autoCorrect: false,
          autoCapitalize: "none",
          onChangeText: inputChangeHandler.bind(this, "DOB"),
          value: userDetails.DOB,
        }}
      />
      <Input
        label="Age"
        textInputConfig={{
          placeholder: "Enter your age",
          keyboardType: "number-pad",
          maxLength: 2,
          onChangeText: inputChangeHandler.bind(this, "age"),
          value: userDetails.age,
        }}
      />
      <Input
        label="Password"
        textInputConfig={{
          placeholder: "Enter your password",
          autoCorrect: false,
          autoCapitalize: "none",
          secureTextEntry: true,
          onChangeText: inputChangeHandler.bind(this, "password"),
          value: userDetails.password,
        }}
      />
      <Input
        label="Confirm Password"
        textInputConfig={{
          placeholder: "Re-enter your password",
          autoCorrect: false,
          autoCapitalize: "none",
          secureTextEntry: true,
          onChangeText: inputChangeHandler.bind(this, "confirmPwd"),
          value: userDetails.confirmPwd,
        }}
      />
      <View style={styles.buttonContainer}>
        <CustomButton onPress={addDataHandler}>Upload</CustomButton>
        <CustomButton onPress={resetHandler}>Clear</CustomButton>
      </View>
      <CustomButton onPress={viewUsers} addStyle={true}>
        View Users
      </CustomButton>
    </View>
  );
}

export default UserForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: 50,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
