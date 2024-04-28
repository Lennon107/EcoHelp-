import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EcoHelpComunidad = () => {
  return (
    <View style={styles.ecohelpComunidad}>
      <Image
        style={styles.ecohelpComunidadChild}
        resizeMode="cover"
        source={require("../assets/group-1.png")}
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
          <Text style={[styles.text, styles.textTypo]}></Text>
        </Pressable>
        <Pressable
          style={[styles.pressable1, styles.pressablePosition]}
          onPress={() => {}}
        >
          <Text style={[styles.text1, styles.textTypo]}></Text>
        </Pressable>
      </View>
      <Image
        style={[styles.ecohelpComunidadItem, styles.ecohelpLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Image
        style={[styles.ecohelpComunidadInner, styles.ecohelpLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={styles.comparteTusLogros}>Comparte tus logros</Text>
      <Text style={[styles.dianaAcabaDe, styles.acabaTypo]}>
        Diana acaba de reciclar 5 botellas correctamente
      </Text>
      <Text
        style={[styles.danielAcabaDe, styles.acabaTypo]}
      >{`Daniel acaba de reciclar carton 
y gana 5 puntos`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.fontAwesome5Free,
    fontSize: FontSize.size_11xl,
  },
  ecohelpLayout: {
    height: 277,
    width: 212,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  acabaTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  ecohelpComunidadChild: {
    top: -130,
    left: -121,
    width: 601,
    height: 593,
    display: "none",
    position: "absolute",
  },
  logoEcohelpIcon: {
    left: 123,
    width: 94,
  },
  text: {
    width: 24,
  },
  pressable: {
    left: 0,
  },
  text1: {
    width: 31,
  },
  pressable1: {
    left: 313,
  },
  navegacinSuperior: {
    left: 10,
    width: 344,
  },
  ecohelpComunidadItem: {
    top: 500,
    left: 127,
  },
  ecohelpComunidadInner: {
    top: 177,
    left: 21,
  },
  rectangleView: {
    top: 75,
    left: 31,
    backgroundColor: "#3d7d48",
    width: 298,
    height: 46,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  comparteTusLogros: {
    top: 85,
    left: 84,
    fontSize: 20,
    color: Color.colorSnow,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  dianaAcabaDe: {
    top: 138,
    left: 38,
    width: 177,
    height: 39,
  },
  danielAcabaDe: {
    top: 460,
    left: 122,
    width: 216,
  },
  ecohelpComunidad: {
    backgroundColor: Color.colorSnow,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default EcoHelpComunidad;
