import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Notificaciones = () => {
  return (
    <View style={styles.notificaciones}>
      <View style={[styles.notifications, styles.notificationsSpaceBlock]}>
        <View style={styles.frameParent}>
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View style={[styles.smalliconParent, styles.frameFlexBox]}>
              <Image
                style={styles.smalliconLayout}
                resizeMode="cover"
                source={require("../assets/smallicon.png")}
              />
              <View style={styles.appname}>
                <Text style={[styles.hangouts, styles.dTypo]}>EcoHelp</Text>
              </View>
              <Text style={[styles.d, styles.dTypo]}>Ahora</Text>
            </View>
            <Image
              style={[styles.evaarrowIosUpwardFillIcon, styles.smalliconLayout]}
              resizeMode="cover"
              source={require("../assets/evaarrowiosupwardfill.png")}
            />
          </View>
          <View style={[styles.frameWrapper, styles.largeiconSpaceBlock]}>
            <View style={styles.contenttitleParent}>
              <View style={styles.contenttitle}>
                <Text style={[styles.lucileBanks, styles.lucileBanksTypo]}>
                  Hola Cristian!
                </Text>
              </View>
              <View style={styles.contenttext}>
                <Text style={[styles.dontForgetBuy, styles.lucileBanksTypo]}>
                  ¿Deseas activar las notificaciones?
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.largeicon, styles.largeiconLayout]}>
            <LinearGradient
              style={[styles.largeiconChild, styles.largeiconLayout]}
              locations={[]}
              colors={[]}
              useAngle={true}
              angle={217.75}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameContainerFlexBox]}>
        <View style={[styles.activarWrapper, styles.frameContainerFlexBox]}>
          <Text style={[styles.activar, styles.cerrarTypo]}>Activar</Text>
        </View>
        <View style={styles.frameChild} />
        <Pressable
          style={[styles.activarWrapper, styles.frameContainerFlexBox]}
          onPress={() => {}}
        >
          <Text style={[styles.cerrar, styles.cerrarTypo]}>Cerrar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationsSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    width: 340,
  },
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  dTypo: {
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  smalliconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  largeiconSpaceBlock: {
    marginTop: 12,
    width: 308,
  },
  lucileBanksTypo: {
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  largeiconLayout: {
    display: "none",
    height: 150,
  },
  frameContainerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cerrarTypo: {
    color: Color.accentColor,
    textTransform: "capitalize",
    fontSize: FontSize.size_base,
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
  },
  hangouts: {
    color: "#3d7d48",
    textAlign: "left",
  },
  appname: {
    marginLeft: 6,
    flexDirection: "row",
  },
  d: {
    color: Color.colorDimgray_100,
    textAlign: "left",
    marginLeft: 6,
  },
  smalliconParent: {
    width: 276,
  },
  evaarrowIosUpwardFillIcon: {
    marginLeft: 16,
  },
  frameGroup: {
    justifyContent: "flex-end",
    width: 308,
  },
  lucileBanks: {
    fontSize: FontSize.size_mini,
    color: Color.settingsFirstTitle,
  },
  contenttitle: {
    flexDirection: "row",
  },
  dontForgetBuy: {
    fontSize: FontSize.size_smi,
    color: Color.secondaryColor,
    flex: 1,
  },
  contenttext: {
    height: 20,
    marginTop: 4,
    width: 328,
    flexDirection: "row",
  },
  contenttitleParent: {
    width: 308,
    overflow: "hidden",
  },
  frameWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  largeiconChild: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    width: 328,
  },
  largeicon: {
    marginTop: 12,
    width: 308,
    overflow: "hidden",
  },
  frameParent: {
    width: 308,
  },
  notifications: {
    backgroundColor: Color.colorGray_200,
    paddingTop: Padding.p_sm,
    overflow: "hidden",
  },
  activar: {
    textAlign: "center",
  },
  activarWrapper: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_lg,
    flex: 1,
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: Color.accentColor,
    borderRightWidth: 1,
    width: 1,
    height: 27,
    opacity: 0.2,
  },
  cerrar: {
    textAlign: "left",
  },
  frameContainer: {
    backgroundColor: Color.colorGray_100,
    height: 54,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    width: 340,
  },
  notificaciones: {
    borderRadius: Border.br_xl,
    width: "100%",
    height: 133,
    overflow: "hidden",
    flex: 1,
  },
});

export default Notificaciones;
