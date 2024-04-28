import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FontFamily } from "../GlobalStyles";

const Instrucciones = () => {
  return (
    <View style={styles.instrucciones}>
      <View style={styles.instruccionesChild} />
      <Text style={[styles.instrucciones1, styles.tuResiduoEsTypo]}>
        INSTRUCCIONES
      </Text>
      <Text
        style={[styles.tuResiduoEs, styles.tuResiduoEsTypo]}
      >{`Tu residuo es orgánico.
Debes depositar tu residuo en la caneca verde.
Tu residuo es una cascara de banano.`}</Text>
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tuResiduoEsTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    position: "absolute",
  },
  instruccionesChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    backgroundColor: "rgba(204, 204, 204, 0.3)",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  instrucciones1: {
    height: "6.18%",
    width: "60.36%",
    top: "4.21%",
    left: "19.64%",
    fontSize: 20,
    color: "#fe0505",
    textAlign: "left",
  },
  tuResiduoEs: {
    height: "27.81%",
    width: "95%",
    top: "14.61%",
    fontSize: 15,
    color: "#000",
    textAlign: "justify",
    left: "0%",
  },
  image2Icon: {
    height: "50.28%",
    width: "41.79%",
    top: "46.63%",
    right: "29.29%",
    bottom: "3.09%",
    left: "28.93%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  instrucciones: {
    flex: 1,
    height: 356,
    width: "100%",
  },
});

export default Instrucciones;
