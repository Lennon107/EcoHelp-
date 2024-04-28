import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const EcoHelpInicioSesin = () => {
  return (
    <View style={styles.ecohelpInicioSesin}>
      <Image
        style={styles.ecohelpInicioSesinChild}
        resizeMode="cover"
        source={require("../assets/group-1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.inicioSesin, styles.botonLayout]}>
          <Pressable
            style={[styles.boton, styles.botonBg]}
            onPress={() => {}}
          />
          <Text
            style={[styles.iniciarSesion, styles.registrarseTypo]}
          >{`Iniciar sesión  `}</Text>
        </View>
        <View style={[styles.inicioSesin1, styles.botonLayout]}>
          <View style={[styles.boton1, styles.botonLayout]} />
          <Pressable
            style={[styles.registrase, styles.registrasePosition]}
            onPress={() => {}}
          >
            <Text style={[styles.registrarse, styles.registrarseTypo]}>
              Registrarse
            </Text>
          </Pressable>
        </View>
        <View style={[styles.inicioSesin2, styles.boton2Layout]}>
          <View style={[styles.boton2, styles.boton2Layout]} />
          <Text style={styles.iniciarSesin}>{`Iniciar sesión  `}</Text>
        </View>
        <Text style={styles.hasOlvidadoTu}>¿Has olvidado tu contraseña?</Text>
        <Text style={styles.bienvenidoAEcohelp}>Bienvenido a EcoHelp</Text>
        <View style={[styles.input, styles.inputLayout]}>
          <Pressable style={styles.contrasea} onPress={() => {}}>
            <Text style={styles.contrasea1}>Contraseña</Text>
          </Pressable>
          <Image
            style={[styles.inputChild, styles.inputLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={[styles.input1, styles.inputLayout]}>
          <Pressable style={styles.contrasea} onPress={() => {}}>
            <Text style={styles.contrasea1}>Nombre de Usuario</Text>
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
    height: 412,
    width: 319,
    position: "absolute",
  },
  botonLayout: {
    height: 70,
    left: 0,
    width: 319,
    position: "absolute",
  },
  botonBg: {
    backgroundColor: Color.colorSeagreen,
    borderRadius: Border.br_21xl,
    top: 0,
  },
  registrarseTypo: {
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
  registrasePosition: {
    top: 23,
    position: "absolute",
  },
  boton2Layout: {
    width: 167,
    height: 70,
    left: 0,
    position: "absolute",
  },
  inputLayout: {
    width: 220,
    position: "absolute",
  },
  ecohelpInicioSesinChild: {
    top: -130,
    left: -121,
    width: 601,
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
    height: 70,
    left: 0,
    width: 319,
    position: "absolute",
  },
  iniciarSesion: {
    left: 98,
    width: 123,
    top: 23,
    position: "absolute",
  },
  inicioSesin: {
    top: 297,
  },
  boton1: {
    backgroundColor: Color.colorGray,
    borderRadius: Border.br_21xl,
    top: 0,
  },
  registrarse: {
    width: 113,
  },
  registrase: {
    left: 190,
  },
  inicioSesin1: {
    top: 21,
  },
  boton2: {
    backgroundColor: Color.colorSeagreen,
    borderRadius: Border.br_21xl,
    top: 0,
  },
  iniciarSesin: {
    marginLeft: -63.5,
    width: 127,
    left: "50%",
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
    top: 23,
    position: "absolute",
  },
  inicioSesin2: {
    top: 21,
  },
  hasOlvidadoTu: {
    marginLeft: -94.5,
    top: 373,
    fontSize: 14,
    width: 186,
    height: 14,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunitoRegular,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  bienvenidoAEcohelp: {
    marginLeft: -106.5,
    top: 118,
    width: 214,
    height: 27,
    color: Color.colorBlack,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  contrasea1: {
    fontSize: FontSize.size_base,
    color: Color.colorGray,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
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
    top: 227,
    left: 50,
    width: 220,
    height: 27,
  },
  input1: {
    top: 176,
    left: 50,
    width: 220,
    height: 27,
  },
  rectangleParent: {
    top: 318,
    left: 20,
  },
  logoEcohelpIcon: {
    top: 97,
    left: 36,
    width: 287,
    height: 140,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  ecohelpInicioSesin: {
    backgroundColor: "#faf2f2",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default EcoHelpInicioSesin;
