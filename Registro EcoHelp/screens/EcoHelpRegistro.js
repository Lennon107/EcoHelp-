import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const EcoHelpRegistro = () => {
  return (
    <View style={styles.ecohelpRegistro}>
      <Image
        style={styles.ecohelpRegistroChild}
        resizeMode="cover"
        source={require("../assets/group-1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.registrase, styles.boton1Layout]}>
          <Pressable
            style={[styles.boton, styles.botonLayout]}
            onPress={() => {}}
          />
          <Text style={[styles.registrase1, styles.registraseTypo]}>
            Registrarse
          </Text>
        </View>
        <View style={[styles.inicioSesin, styles.inicioPosition]}>
          <View style={[styles.boton1, styles.boton1Layout]} />
        </View>
        <View style={[styles.inicioSesin1, styles.inicioPosition]}>
          <View style={[styles.boton2, styles.botonLayout]} />
          <Pressable style={styles.iniciarSesin} onPress={() => {}}>
            <Text
              style={[styles.iniciarSesin1, styles.registraseTypo]}
            >{`Iniciar sesión  `}</Text>
          </Pressable>
        </View>
        <Text style={[styles.registrase2, styles.registraseTypo]}>
          Registrarse
        </Text>
        <Text style={styles.uneteAEcohelp}>Unete a EcoHelp</Text>
        <Pressable
          style={[styles.input, styles.inputLayout]}
          onPress={() => {}}
        >
          <Text style={[styles.contrasea, styles.contraseaTypo]}>
            Contraseña
          </Text>
          <Image
            style={[styles.inputChild, styles.inputLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </Pressable>
        <View style={[styles.input1, styles.inputLayout]}>
          <Pressable style={styles.nombreDeUsuarioContainer} onPress={() => {}}>
            <Text style={styles.contraseaTypo}>Nombre de Usuario</Text>
          </Pressable>
          <Image
            style={[styles.inputChild, styles.inputLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
      </View>
      <Image
        style={styles.logoEcohelpIcon}
        resizeMode="cover"
        source={require("../assets/logo-ecohelp.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 410,
    width: 319,
    position: "absolute",
  },
  boton1Layout: {
    height: 70,
    left: 0,
    width: 319,
    position: "absolute",
  },
  botonLayout: {
    backgroundColor: Color.colorSeagreen,
    height: 70,
    borderRadius: Border.br_21xl,
    top: 0,
    position: "absolute",
  },
  registraseTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 24,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  inicioPosition: {
    top: 19,
    height: 70,
    position: "absolute",
  },
  inputLayout: {
    width: 220,
    position: "absolute",
  },
  contraseaTypo: {
    color: Color.colorGray,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  ecohelpRegistroChild: {
    top: -130,
    left: -121,
    width: 599,
    height: 593,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_21xl,
    left: 0,
    top: 0,
  },
  boton: {
    left: 0,
    width: 319,
  },
  registrase1: {
    left: 98,
    width: 123,
    top: 23,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 24,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  registrase: {
    top: 295,
  },
  boton1: {
    backgroundColor: Color.colorGray,
    borderRadius: Border.br_21xl,
    top: 0,
  },
  inicioSesin: {
    left: 0,
    width: 319,
  },
  boton2: {
    left: 132,
    width: 167,
  },
  iniciarSesin1: {
    marginLeft: -149.5,
    width: 127,
  },
  iniciarSesin: {
    left: "50%",
    top: 23,
    position: "absolute",
  },
  inicioSesin1: {
    left: 20,
    width: 299,
  },
  registrase2: {
    top: 42,
    left: 184,
    width: 113,
    position: "absolute",
  },
  uneteAEcohelp: {
    marginLeft: -80.5,
    top: 117,
    color: "#000",
    width: 162,
    height: 27,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  contrasea: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  inputChild: {
    top: 26,
    height: 1,
    left: 0,
  },
  input: {
    top: 225,
    left: 50,
    width: 220,
    height: 27,
  },
  nombreDeUsuarioContainer: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  input1: {
    top: 174,
    left: 50,
    width: 220,
    height: 27,
  },
  rectangleParent: {
    top: 308,
    left: 22,
  },
  logoEcohelpIcon: {
    top: 96,
    left: 38,
    width: 287,
    height: 140,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  ecohelpRegistro: {
    backgroundColor: "#faf2f2",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default EcoHelpRegistro;
