import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const EcoHelpMenu = () => {
  return (
    <View style={styles.ecohelpMenu}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.logoEcohelpParent}>
          <Image
            style={styles.logoEcohelpIcon}
            resizeMode="cover"
            source={require("../assets/logo-ecohelp.png")}
          />
          <Text
            style={[styles.holaCristianTeContainer, styles.elPlanetaEsTypo]}
          >
            <Text style={styles.holaCristian}>{`Hola, Cristian.
`}</Text>
            <Text
              style={styles.teAyudareA}
            >{`¡Te ayudare a reciclar de manera correcta!
`}</Text>
          </Text>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Pressable style={styles.pressable} onPress={() => {}}>
            <Text style={styles.text}></Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Pressable
          style={[styles.comunidad, styles.comunidadLayout]}
          onPress={() => {}}
        >
          <Image
            style={[styles.comunidadChild, styles.comunidadLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Text style={[styles.comunidad1, styles.perfil1FlexBox]}>
            COMUNIDAD
          </Text>
        </Pressable>
        <Pressable style={styles.reciclar} onPress={() => {}}>
          <Image
            style={[styles.reciclarChild, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <Image
            style={[styles.mdirecycleIcon, styles.vectorIconLayout]}
            resizeMode="cover"
            source={require("../assets/mdirecycle.png")}
          />
          <Text style={[styles.reciclar1, styles.perfil1FlexBox]}>
            RECICLAR
          </Text>
        </Pressable>
        <Pressable
          style={[styles.perfil, styles.perfilLayout]}
          onPress={() => {}}
        >
          <Image
            style={[styles.healthiconsuiUserProfile, styles.perfilLayout]}
            resizeMode="cover"
            source={require("../assets/healthiconsuiuserprofile.png")}
          />
          <Text style={[styles.perfil1, styles.perfil1FlexBox]}>PERFIL</Text>
        </Pressable>
      </View>
      <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={[styles.fraseDelDa, styles.perfil1FlexBox]}>
          FRASE DEL DÍA
        </Text>
        <Text style={[styles.elPlanetaEs, styles.elPlanetaEsTypo]}>
          “El planeta es nuestro hogar; su cuidado depende de nuestras acciones
          diarias, como reciclar, plantar árboles y ahorrar energía.”
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 257,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  elPlanetaEsTypo: {
    textAlign: "justify",
    color: Color.colorWhite,
    fontFamily: FontFamily.spaceMonoBold,
    fontWeight: "700",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout1: {
    height: 706,
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_21xl,
    top: 0,
  },
  comunidadLayout: {
    width: 122,
    position: "absolute",
  },
  perfil1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  perfilLayout: {
    width: 138,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 276,
    width: 360,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorForestgreen,
  },
  logoEcohelpIcon: {
    left: 122,
    width: 94,
    height: 40,
    top: 0,
    position: "absolute",
  },
  holaCristian: {
    fontSize: 32,
  },
  teAyudareA: {
    fontSize: FontSize.size_mini,
  },
  holaCristianTeContainer: {
    top: 64,
    left: 12,
    width: 313,
    height: 91,
  },
  vectorIcon: {
    height: "17.42%",
    width: "7.94%",
    top: "4.52%",
    right: "92.06%",
    bottom: "78.06%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  text: {
    fontSize: 30,
    fontFamily: FontFamily.fontAwesome5Free,
    textAlign: "left",
    width: 29,
    height: 29,
    color: Color.colorWhite,
  },
  pressable: {
    left: 311,
    top: 5,
    position: "absolute",
  },
  logoEcohelpParent: {
    top: 6,
    left: 11,
    width: 340,
    height: 155,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorWhite,
    height: 706,
    width: 360,
    left: 0,
    position: "absolute",
  },
  comunidadChild: {
    height: 122,
    left: 0,
    top: 0,
  },
  vectorIcon1: {
    height: "54.01%",
    width: "69.59%",
    top: "19.01%",
    right: "15.7%",
    bottom: "26.97%",
    left: "14.71%",
  },
  comunidad1: {
    top: 122,
    left: 4,
    width: 112,
    height: 20,
    color: Color.colorBlack,
    fontFamily: FontFamily.spaceMonoRegular,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  comunidad: {
    top: 30,
    left: 203,
    height: 142,
  },
  reciclarChild: {
    height: "85.91%",
    top: "0%",
    right: "0%",
    bottom: "14.09%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  mdirecycleIcon: {
    height: "59.56%",
    width: "69.75%",
    top: "12.98%",
    right: "14.66%",
    bottom: "27.46%",
    left: "15.6%",
  },
  reciclar1: {
    height: "14.09%",
    width: "91.85%",
    top: "85.94%",
    left: "3.64%",
    color: Color.colorBlack,
    fontFamily: FontFamily.spaceMonoRegular,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  reciclar: {
    height: "19.41%",
    width: "33.06%",
    top: "28.05%",
    right: "33.61%",
    bottom: "52.55%",
    left: "33.33%",
    position: "absolute",
  },
  healthiconsuiUserProfile: {
    height: 137,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  perfil1: {
    top: 128,
    left: 16,
    width: 106,
    height: 19,
    color: Color.colorBlack,
    fontFamily: FontFamily.spaceMonoRegular,
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  perfil: {
    top: 24,
    left: 21,
    height: 147,
  },
  rectangleGroup: {
    top: 187,
  },
  groupInner: {
    borderRadius: Border.br_21xl,
    top: 0,
    backgroundColor: Color.colorForestgreen,
  },
  fraseDelDa: {
    top: 17,
    left: 36,
    fontSize: 20,
    width: 270,
    height: 24,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.spaceMonoBold,
    fontWeight: "700",
  },
  elPlanetaEs: {
    marginLeft: -147,
    top: 75,
    left: "50%",
    width: 292,
    height: 109,
    fontSize: FontSize.size_mini,
  },
  rectangleContainer: {
    top: 581,
  },
  ecohelpMenu: {
    backgroundColor: "#faf2f2",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default EcoHelpMenu;
