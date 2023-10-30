import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";

export default function App() {
  const [number, setNumber] = useState(" ");
  const [previousNumber, setPreviousNumber] = useState(" ");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(0);

  const addNumberDisplay = (num) => {
    if (number.length < 9) {
      setNumber(number.toString() + num.toString());
    }
  };
  const clearNumberHandler = () => {
    setNumber("");
    setPreviousNumber("");
    setOperator(null);
  };
  const plusMinusHandler = () => {
    setNumber(number * -1);
  };
  const percentHandler = () => {
    setNumber(number / 100);
  };
  const resultHandler = () => {
    if (operator === "+") {
      setResult(parseFloat(previousNumber) + parseFloat(number));
      setNumber(parseFloat(previousNumber) + parseFloat(number));
    }
    if (operator === "-") {
      setResult(parseFloat(previousNumber) - parseFloat(number));
      setNumber(parseFloat(previousNumber) - parseFloat(number));
    }
    if (operator === "x") {
      setResult(parseFloat(previousNumber) * parseFloat(number));
      setNumber(parseFloat(previousNumber) * parseFloat(number));
    }
    if (operator === "÷") {
      setResult(parseFloat(previousNumber) / parseFloat(number));
      setNumber(parseFloat(previousNumber) / parseFloat(number));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text numberOfLines={1} style={styles.text}>
          {number}
        </Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={clearNumberHandler}
          style={[styles.press, { backgroundColor: "#D4D4D2" }]}
        >
          <Text style={[styles.numbers, { color: "#000" }]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={plusMinusHandler}
          style={[styles.press, { backgroundColor: "#D4D4D2" }]}
        >
          <Text style={[styles.numbers, { color: "#000" }]}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={percentHandler}
          style={[styles.press, { backgroundColor: "#D4D4D2" }]}
        >
          <Text style={[styles.numbers, { color: "#000" }]}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPreviousNumber(number);
            setNumber("");
            setOperator("÷");
          }}
          style={[
            styles.press,
            { backgroundColor: operator === "÷" ? "#fff" : "#DB162F" },
          ]}
        >
          <Text
            style={[
              styles.numbers,
              { fontSize: 60, color: operator === "÷" ? "#DB162F" : "#fff" },
            ]}
          >
            ÷
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addNumberDisplay(7);
          }}
          style={[styles.press, { backgroundColor: "#505050" }]}
        >
          <Text style={[styles.numbers, { color: "#fff", fontWeight: "bold" }]}>
            7
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addNumberDisplay(8);
          }}
          style={[styles.press, { backgroundColor: "#505050" }]}
        >
          <Text style={[styles.numbers, { color: "#fff", fontWeight: "bold" }]}>
            8
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addNumberDisplay(9);
          }}
          style={[styles.press, { backgroundColor: "#505050" }]}
        >
          <Text style={[styles.numbers, { color: "#fff", fontWeight: "bold" }]}>
            9
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPreviousNumber(number);
            setNumber("");
            setOperator("x");
          }}
          style={[
            styles.press,
            { backgroundColor: operator === "x" ? "#fff" : "#DB162F" },
          ]}
        >
          <Text
            style={[
              styles.numbers,
              { fontSize: 50, color: operator === "x" ? "#DB162F" : "#fff" },
            ]}
          >
            x
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addNumberDisplay(4);
          }}
          style={[styles.press, { backgroundColor: "#505050" }]}
        >
          <Text style={[styles.numbers, { color: "#fff", fontWeight: "bold" }]}>
            4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addNumberDisplay(5);
          }}
          style={[styles.press, { backgroundColor: "#505050" }]}
        >
          <Text style={[styles.numbers, { color: "#fff", fontWeight: "bold" }]}>
            5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addNumberDisplay(6);
          }}
          style={[styles.press, { backgroundColor: "#505050" }]}
        >
          <Text style={[styles.numbers, { color: "#fff", fontWeight: "bold" }]}>
            6
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPreviousNumber(number);
            setNumber("");
            setOperator("-");
          }}
          style={[
            styles.press,
            { backgroundColor: operator === "-" ? "#fff" : "#DB162F" },
          ]}
        >
          <Text
            style={[
              styles.numbers,
              { fontSize: 50, color: operator === "-" ? "#DB162F" : "#fff" },
            ]}
          >
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addNumberDisplay(1);
          }}
          style={[styles.press, { backgroundColor: "#505050" }]}
        >
          <Text style={[styles.numbers, { color: "#fff", fontWeight: "bold" }]}>
            1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addNumberDisplay(2);
          }}
          style={[styles.press, { backgroundColor: "#505050" }]}
        >
          <Text style={[styles.numbers, { color: "#fff", fontWeight: "bold" }]}>
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addNumberDisplay(3);
          }}
          style={[styles.press, { backgroundColor: "#505050" }]}
        >
          <Text style={[styles.numbers, { color: "#fff", fontWeight: "bold" }]}>
            3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPreviousNumber(number);
            setNumber("");
            setOperator("+");
          }}
          style={[
            styles.press,
            { backgroundColor: operator === "+" ? "#fff" : "#DB162F" },
          ]}
        >
          <Text
            style={[
              styles.numbers,
              { fontSize: 50, color: operator === "+" ? "#DB162F" : "#fff" },
            ]}
          >
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addNumberDisplay(0);
          }}
          style={[styles.press, { backgroundColor: "#505050", width: 190 }]}
        >
          <Text style={[styles.numbers, { color: "#fff", fontWeight: "bold" }]}>
            0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            addNumberDisplay(".");
          }}
          style={[styles.press, { backgroundColor: "#505050" }]}
        >
          <Text style={[styles.numbers, { color: "#fff", fontWeight: "bold" }]}>
            .
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            resultHandler();
          }}
          style={[styles.press, { backgroundColor: "#DB162F" }]}
        >
          <Text style={[styles.numbers, { fontSize: 60 }]}>=</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  display: {
    marginTop: 120,
    height: 140,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#000",
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  text: {
    fontSize: 80,
    color: "#fff",
  },
  numbers: {
    fontSize: 40,
    color: "#fff",
  },
  press: {
    width: 85,
    height: 85,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 20,
  },
  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
});
