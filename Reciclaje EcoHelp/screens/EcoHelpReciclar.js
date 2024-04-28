import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const EcoHelpReciclar = () => {
  return (
    <View style={styles.ecohelpReciclar}>
      <Image
        style={styles.ecohelpReciclarChild}
        resizeMode="cover"
        source={require("../assets/group-1.png")}
      />
      <Pressable style={[styles.enviar, styles.botonLayout]} onPress={() => {}}>
        <View style={[styles.boton, styles.botonPosition]} />
        <Text style={[styles.enviar1, styles.enviar1Typo]}>Enviar</Text>
      </Pressable>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textClr]}></Text>
        <Text style={[styles.oprimeEsteBoton, styles.textClr]}>
          Oprime este boton
        </Text>
        <Text
          style={[styles.descubreEnDonde, styles.textClr]}
        >{`Descubre en donde se debe
depositar tu residuo`}</Text>
      </View>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={[styles.navegacinSuperior, styles.logoEcohelpIconPosition]}>
        <Image
          style={[styles.logoEcohelpIcon, styles.logoEcohelpIconPosition]}
          resizeMode="cover"
          source={require("../assets/logo-ecohelp.png")}
        />
        <Pressable
          style={[styles.pressable, styles.pressablePosition]}
          onPress={() => {}}
        >
          <Text style={[styles.text1, styles.textTypo]}></Text>
        </Pressable>
        <Pressable
          style={[styles.pressable1, styles.pressablePosition]}
          onPress={() => {}}
        >
          <Text style={[styles.text2, styles.textTypo]}></Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  botonLayout: {
    height: 70,
    width: 266,
    position: "absolute",
  },
  botonPosition: {
    top: 0,
    left: 0,
  },
  enviar1Typo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  textClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  logoEcohelpIconPosition: {
    height: 40,
    top: 0,
    position: "absolute",
  },
  pressablePosition: {
    top: 3,
    position: "absolute",
  },
  textTypo: {
    height: 34,
    color: Color.colorBlack,
    fontFamily: FontFamily.fontAwesome5Free,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
  },
  ecohelpReciclarChild: {
    top: -130,
    left: -121,
    width: 601,
    height: 593,
    display: "none",
    position: "absolute",
  },
  boton: {
    borderRadius: 40,
    backgroundColor: "#3d7d48",
    left: 0,
    height: 70,
    width: 266,
    position: "absolute",
  },
  enviar1: {
    top: 23,
    left: 105,
    color: "#fff",
    width: 62,
    height: 24,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    position: "absolute",
  },
  enviar: {
    top: 349,
    left: 47,
  },
  text: {
    top: 54,
    left: 199,
    width: 30,
    height: 35,
    fontFamily: FontFamily.fontAwesome5Free,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    textAlign: "left",
  },
  oprimeEsteBoton: {
    marginTop: 16.5,
    marginLeft: -63,
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
  },
  descubreEnDonde: {
    textAlign: "center",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 0,
    top: 0,
  },
  parent: {
    top: 53,
    left: 52,
    width: 256,
    height: 89,
    position: "absolute",
  },
  image1Icon: {
    top: 142,
    left: 79,
    width: 201,
    height: 192,
    position: "absolute",
  },
  logoEcohelpIcon: {
    left: 123,
    width: 94,
  },
  text1: {
    width: 24,
  },
  pressable: {
    left: 0,
  },
  text2: {
    width: 27,
  },
  pressable1: {
    left: 314,
  },
  navegacinSuperior: {
    left: 10,
    width: 341,
  },
  ecohelpReciclar: {
    backgroundColor: "#faf2f2",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default EcoHelpReciclar;
