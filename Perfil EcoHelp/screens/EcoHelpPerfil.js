import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const EcoHelpPerfil = () => {
  return (
    <View style={styles.ecohelpPerfil}>
      <Image
        style={styles.ecohelpPerfilChild}
        resizeMode="cover"
        source={require("../assets/group-1.png")}
      />
      <View style={styles.ecohelpPerfilItem} />
      <View
        style={[styles.navegacinSuperior, styles.navegacinSuperiorPosition]}
      >
        <Image
          style={styles.logoEcohelpIcon}
          resizeMode="cover"
          source={require("../assets/logo-ecohelp.png")}
        />
        <Pressable
          style={[styles.pressable, styles.text1Position]}
          onPress={() => {}}
        >
          <Text style={[styles.text, styles.textTypo]}></Text>
        </Pressable>
        <Text style={[styles.text1, styles.textTypo]}></Text>
        <Text style={[styles.tutorialesDeSeparacin, styles.puntos0Typo]}>
          Tutoriales de Separación Residuos
        </Text>
        <Image
          style={styles.fotoPerfilIcon}
          resizeMode="cover"
          source={require("../assets/foto-perfil.png")}
        />
      </View>
      <View style={styles.datosUsuario}>
        <View
          style={[styles.datosUsuarioChild, styles.cristianPeraltaLayout]}
        />
        <Text style={[styles.cristianPeralta, styles.cristianPeraltaPosition]}>
          Cristian Peralta
        </Text>
        <Text style={[styles.nivelDeCuenta, styles.puntos0Typo]}>
          Nivel de cuenta: 0
        </Text>
        <Text style={[styles.puntos0, styles.puntos0Typo]}>Puntos: 0</Text>
        <Text style={[styles.publicaciones0, styles.puntos0Typo]}>
          Publicaciones: 0
        </Text>
        <Text style={[styles.historialDeClasificacin, styles.puntos0Typo]}>
          Historial de clasificación
        </Text>
        <Text style={[styles.estadsticasPersonales, styles.puntos0Typo]}>
          Estadísticas personales
        </Text>
      </View>
      <Image
        style={[styles.ecohelpPerfilInner, styles.cristianPeraltaPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navegacinSuperiorPosition: {
    left: 10,
    position: "absolute",
  },
  text1Position: {
    top: 3,
    position: "absolute",
  },
  textTypo: {
    height: 34,
    textAlign: "left",
    fontFamily: FontFamily.fontAwesome5Free,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
  },
  puntos0Typo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  cristianPeraltaLayout: {
    width: 155,
    top: 0,
  },
  cristianPeraltaPosition: {
    left: 53,
    position: "absolute",
  },
  ecohelpPerfilChild: {
    top: -130,
    left: -121,
    width: 601,
    height: 593,
    display: "none",
    position: "absolute",
  },
  ecohelpPerfilItem: {
    backgroundColor: "#3d7d48",
    width: 366,
    height: 187,
    left: 0,
    top: 0,
    position: "absolute",
  },
  logoEcohelpIcon: {
    left: 123,
    width: 94,
    height: 40,
    top: 0,
    position: "absolute",
  },
  text: {
    width: 24,
  },
  pressable: {
    left: 0,
  },
  text1: {
    left: 311,
    width: 29,
    top: 3,
    position: "absolute",
  },
  tutorialesDeSeparacin: {
    top: 502,
    color: "#fe0505",
    left: 10,
    position: "absolute",
  },
  fotoPerfilIcon: {
    top: 131,
    left: 99,
    width: 141,
    height: 137,
    position: "absolute",
  },
  navegacinSuperior: {
    width: 340,
    height: 529,
    top: 0,
  },
  datosUsuarioChild: {
    left: 48,
    borderRadius: 40,
    backgroundColor: "rgba(65, 148, 78, 0.77)",
    height: 26,
    position: "absolute",
  },
  cristianPeralta: {
    color: "#fff",
    width: 155,
    top: 0,
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  nivelDeCuenta: {
    top: 36,
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 0,
    position: "absolute",
  },
  puntos0: {
    top: 72,
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 0,
    position: "absolute",
  },
  publicaciones0: {
    top: 108,
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 0,
    position: "absolute",
  },
  historialDeClasificacin: {
    top: 145,
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 0,
    position: "absolute",
  },
  estadsticasPersonales: {
    top: 181,
    color: Color.colorBlack,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: 0,
    position: "absolute",
  },
  datosUsuario: {
    top: 277,
    left: 58,
    width: 226,
    height: 208,
    position: "absolute",
  },
  ecohelpPerfilInner: {
    top: 546,
    width: 254,
    height: 230,
  },
  ecohelpPerfil: {
    backgroundColor: "#faf2f2",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default EcoHelpPerfil;
