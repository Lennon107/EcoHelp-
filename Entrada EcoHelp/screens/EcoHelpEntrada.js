import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, FontFamily, Color } from "../GlobalStyles";

const EcoHelpEntrada = () => {
  return (
    <View style={styles.ecohelpEntrada}>
      <LinearGradient
        style={[styles.fondoEntrada, styles.fondoEntradaPosition]}
        locations={[]}
        colors={[]}
        useAngle={true}
        angle={180}
      >
        <ImageBackground
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/fondoentrada.png")}
        />
      </LinearGradient>
      <View style={[styles.botonInicioDeSesin, styles.botonLayout]}>
        <Pressable
          style={[
            styles.botonInicioDeSesinChild,
            styles.logoEcohelpIconPosition,
          ]}
        />
        <Text
          style={[styles.iniciarSesin, styles.iniciarSesinPosition]}
        >{`Iniciar sesión  `}</Text>
      </View>
      <Text style={[styles.noTienesUnaContainer, styles.iniciarSesinPosition]}>
        <Text style={styles.noTienesUna}>{`¿No tienes una cuenta? `}</Text>
        <Text style={styles.regstrate}>Regístrate</Text>
      </Text>
      <ImageBackground
        style={[styles.logoEcohelpIcon, styles.logoEcohelpIconPosition]}
        resizeMode="cover"
        source={require("../assets/logoecohelp.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fondoEntradaPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  botonLayout: {
    height: 70,
    width: 319,
  },
  logoEcohelpIconPosition: {
    borderRadius: Border.br_21xl,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  iniciarSesinPosition: {
    textAlign: "left",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  icon: {
    marginTop: -400,
    marginLeft: -180,
    height: "100%",
    backgroundColor: "transparent",
    width: "100%",
  },
  fondoEntrada: {
    width: 364,
    height: 800,
  },
  botonInicioDeSesinChild: {
    marginTop: -35,
    marginLeft: -159.5,
    backgroundColor: "#3d7d48",
    height: 70,
    width: 319,
  },
  iniciarSesin: {
    marginTop: -12,
    marginLeft: -61.5,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    width: 123,
    height: 24,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.colorWhite,
  },
  botonInicioDeSesin: {
    marginTop: 253,
    marginLeft: -158,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  noTienesUna: {
    color: Color.colorWhite,
  },
  regstrate: {
    textDecoration: "underline",
    color: "#46d867",
  },
  noTienesUnaContainer: {
    marginTop: 323,
    marginLeft: -108,
    fontSize: 14,
    fontFamily: FontFamily.nunitoRegular,
    width: 215,
    height: 14,
  },
  logoEcohelpIcon: {
    marginTop: -346,
    marginLeft: -142,
    width: 287,
    height: 140,
  },
  ecohelpEntrada: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default EcoHelpEntrada;
