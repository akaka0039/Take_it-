import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { useState, useEffect } from "react";
import ScoreCard from "./scoreCard";
import Switch from "./switch";
import { Props } from "./Dummydata";

export default function Game() {
  const navigation = useNavigation();
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const ClickBottom = () => {
    if (count == 4) {
      return navigation.navigate("Result");
    } else {
      const random = Math.floor(Math.random() * 10);
      setNumber(random);
      Props[count]["score"] = random;
      setCount(count + 1);
    }
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      setNumber(0);
      setCount(0);
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.scoreBox}>
        <View style={styles.cardBox}>
          <ScoreCard />
        </View>
      </View>
      <Text style={styles.numberText}>{number}</Text>

      <View style={styles.Box}>
        <Pressable onPress={() => ClickBottom()}>
          <Switch />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoreBox: {
    paddingTop: 10,
    height: 440,
  },
  cardBox: {
    paddingLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  cardBoxScore: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 5,
    height: 90,
    width: 140,
    backgroundColor: "#5DB075",
  },
  nameText: {
    paddingTop: 20,
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#5DB075",
  },
  scoreText: {
    paddingTop: 20,
    padding: 20,
    fontSize: 36,
  },
  numberText: {
    paddingTop: 5,
    fontSize: 60,
    textAlign: "center",
  },
  Box: {
    padding: 10,
    alignItems: "center",
  },
  buttonBox: {
    borderRadius: 50,
    justifyContent: "center",
    height: 110,
    width: 110,
    backgroundColor: "#B2ABAB",
    transform: [{ scaleX: 2 }],
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowColor: "#000000",
    // for android
    elevation: 5,
  },
  buttonText: {
    paddingTop: 5,
    padding: 10,
    fontSize: 20,
    textAlign: "center",
  },
});
