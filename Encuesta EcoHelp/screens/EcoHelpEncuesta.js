import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EcoHelpEncuesta = () => {
  return (
    <View style={styles.ecohelpEncuesta}>
      <Image
        style={styles.ecohelpEncuestaChild}
        resizeMode="cover"
        source={require("../assets/group-1.png")}
      />
      <View style={styles.ecohelpEncuestaItem} />
      <Pressable style={[styles.enviar, styles.botonLayout]} onPress={() => {}}>
        <View style={[styles.boton, styles.botonLayout]} />
        <Text style={styles.enviar1}>Enviar</Text>
      </Pressable>
      <Text style={styles.encuestaDiagnstica}>{`Encuesta Diagnóstica `}</Text>
      <View style={styles.preguntas}>
        <View style={[styles.pregunta10, styles.preguntaLayout]}>
          <Pressable style={styles.edad} onPress={() => {}}>
            <Text style={[styles.edad1, styles.hogarTypo]}>Edad</Text>
          </Pressable>
          <Image
            style={[styles.pregunta10Child, styles.preguntaLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={[styles.pregunta9, styles.preguntaLayout]}>
          <Pressable style={styles.edad} onPress={() => {}}>
            <Text style={[styles.edad1, styles.hogarTypo]}>Dirección</Text>
          </Pressable>
          <Image
            style={[styles.pregunta10Child, styles.preguntaLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={[styles.pregunta8, styles.preguntaLayout]}>
          <Pressable style={styles.edad} onPress={() => {}}>
            <Text style={[styles.edad1, styles.hogarTypo]}>Estrato</Text>
          </Pressable>
          <Image
            style={[styles.pregunta10Child, styles.preguntaLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={[styles.pregunta7, styles.preguntaPosition]}>
          <Pressable style={styles.edad} onPress={() => {}}>
            <Text style={[styles.nmeroDePersonasEnTuHogar, styles.hogarTypo]}>
              Número de personas en tu hogar
            </Text>
          </Pressable>
          <Image
            style={[styles.pregunta10Child, styles.preguntaLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={[styles.pregunta6, styles.preguntaLayout]}>
          <Pressable style={styles.edad} onPress={() => {}}>
            <Text style={[styles.reciclasEnTuHogar, styles.hogarTypo]}>
              ¿Reciclas en tu hogar?
            </Text>
          </Pressable>
          <Image
            style={[styles.pregunta10Child, styles.preguntaLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={[styles.pregunta5, styles.preguntaLayout]}>
          <Pressable style={styles.edad} onPress={() => {}}>
            <Text
              style={[styles.separasCorrectamenteLosResi, styles.hogarTypo]}
            >
              ¿Separas correctamente los residuos?
            </Text>
          </Pressable>
          <Image
            style={[styles.pregunta10Child, styles.preguntaLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={[styles.pregunta4, styles.preguntaLayout]}>
          <Pressable style={styles.edad} onPress={() => {}}>
            <Text
              style={[styles.separasCorrectamenteLosResi, styles.hogarTypo]}
            >
              ¿Comes en tu casa o pides domicilio?
            </Text>
          </Pressable>
          <Image
            style={[styles.pregunta10Child, styles.preguntaLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={[styles.pregunta3, styles.preguntaPosition]}>
          <Pressable style={styles.edad} onPress={() => {}}>
            <Text
              style={[styles.separasCorrectamenteLosResi, styles.hogarTypo]}
            >
              Número de veces que sacas la basura?
            </Text>
          </Pressable>
          <Image
            style={[styles.pregunta10Child, styles.preguntaLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={[styles.pregunta2, styles.preguntaLayout]}>
          <Pressable style={styles.edad} onPress={() => {}}>
            <Text style={[styles.edad1, styles.hogarTypo]}>Apellidos</Text>
          </Pressable>
          <Image
            style={[styles.pregunta10Child, styles.preguntaLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={[styles.pregunta1, styles.preguntaLayout]}>
          <Pressable style={styles.edad} onPress={() => {}}>
            <Text style={[styles.edad1, styles.hogarTypo]}>Nombre</Text>
          </Pressable>
          <Image
            style={[styles.pregunta10Child, styles.preguntaLayout]}
            resizeMode="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
      </View>
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
          <Text style={[styles.text1, styles.textTypo]}></Text>
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
  preguntaLayout: {
    width: 220,
    position: "absolute",
  },
  hogarTypo: {
    color: Color.colorGray,
    fontFamily: FontFamily.nunitoRegular,
    textAlign: "left",
  },
  preguntaPosition: {
    left: 2,
    height: 27,
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
    fontFamily: FontFamily.fontAwesome5Free,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    textAlign: "left",
  },
  ecohelpEncuestaChild: {
    top: -130,
    left: -121,
    width: 601,
    height: 593,
    display: "none",
    position: "absolute",
  },
  ecohelpEncuestaItem: {
    left: 22,
    backgroundColor: Color.colorWhite,
    width: 319,
    height: 723,
    borderRadius: Border.br_21xl,
    top: 56,
    position: "absolute",
  },
  boton: {
    backgroundColor: "#3d7d48",
    left: 0,
    top: 0,
    borderRadius: Border.br_21xl,
  },
  enviar1: {
    top: 23,
    left: 105,
    color: Color.colorWhite,
    width: 62,
    height: 24,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  enviar: {
    top: 689,
    left: 47,
  },
  encuestaDiagnstica: {
    marginLeft: -99,
    top: 69,
    left: "50%",
    width: 201,
    height: 27,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  edad1: {
    fontSize: FontSize.size_base,
  },
  edad: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  pregunta10Child: {
    top: 26,
    height: 1,
    left: 0,
  },
  pregunta10: {
    top: 112,
    left: 2,
    height: 27,
  },
  pregunta9: {
    top: 168,
    left: 2,
    height: 27,
  },
  pregunta8: {
    top: 224,
    left: 2,
    height: 27,
  },
  nmeroDePersonasEnTuHogar: {
    fontSize: 15,
  },
  pregunta7: {
    top: 280,
    width: 221,
    position: "absolute",
  },
  reciclasEnTuHogar: {
    fontSize: 14,
  },
  pregunta6: {
    top: 336,
    left: 2,
    height: 27,
  },
  separasCorrectamenteLosResi: {
    fontSize: FontSize.size_smi,
  },
  pregunta5: {
    top: 392,
    left: 2,
    height: 27,
  },
  pregunta4: {
    top: 448,
    height: 27,
    left: 0,
  },
  pregunta3: {
    top: 504,
    width: 224,
    position: "absolute",
  },
  pregunta2: {
    left: 2,
    height: 27,
    top: 56,
  },
  pregunta1: {
    left: 2,
    height: 27,
    top: 0,
  },
  preguntas: {
    top: 125,
    left: 70,
    width: 226,
    height: 531,
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
    width: 27,
  },
  pressable1: {
    left: 314,
  },
  navegacinSuperior: {
    left: 10,
    width: 341,
  },
  ecohelpEncuesta: {
    backgroundColor: "#faf2f2",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default EcoHelpEncuesta;
