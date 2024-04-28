import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GBoardAlphabeticEnglish = () => {
  return (
    <View style={styles.gBoardAlphabeticEnglish}>
      <View style={[styles.componentBar, styles.cnt1FlexBox]}>
        <View style={[styles.componentButton, styles.componentFlexBox1]}>
          <Image
            style={[styles.iconMaterialIconChevron, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon--materialicon--chevron-left-black-24dp.png")}
          />
        </View>
        <View style={[styles.cnt, styles.cntFlexBox1]}>
          <Text style={styles.textTypo1}>Suggest</Text>
          <Image
            style={styles.separatorIcon}
            resizeMode="cover"
            source={require("../assets/separator.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>Suggest</Text>
          <Image
            style={styles.separatorIcon}
            resizeMode="cover"
            source={require("../assets/separator1.png")}
          />
          <Text style={[styles.text1, styles.textTypo1]}>Suggest</Text>
        </View>
        <View style={[styles.componentButton1, styles.componentFlexBox1]}>
          <Image
            style={[styles.iconMaterialIconChevron, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon--materialicon--mic-black-24dp.png")}
          />
        </View>
      </View>
      <View style={[styles.keysLayoutAlphabeticEng, styles.componentBarBg]}>
        <View style={styles.cnt1FlexBox}>
          <View style={[styles.componentKey, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>Q</Text>
            <Text style={styles.superscriptPosition}>1</Text>
          </View>
          <View style={[styles.componentKey1, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>W</Text>
            <Text style={styles.superscriptPosition}>2</Text>
          </View>
          <View style={[styles.componentKey2, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>E</Text>
            <Text style={styles.superscriptPosition}>3</Text>
          </View>
          <View style={[styles.componentKey3, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>R</Text>
            <Text style={styles.superscriptPosition}>4</Text>
          </View>
          <View style={[styles.componentKey4, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>T</Text>
            <Text style={styles.superscriptPosition}>5</Text>
          </View>
          <View style={[styles.componentKey5, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>Y</Text>
            <Text style={styles.superscriptPosition}>6</Text>
          </View>
          <View style={[styles.componentKey6, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>U</Text>
            <Text style={styles.superscriptPosition}>7</Text>
          </View>
          <View style={[styles.componentKey7, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>I</Text>
            <Text style={styles.superscriptPosition}>8</Text>
          </View>
          <View style={[styles.componentKey8, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>O</Text>
            <Text style={styles.superscriptPosition}>9</Text>
          </View>
          <View style={[styles.componentKey9, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>P</Text>
            <Text style={styles.superscriptPosition}>0</Text>
          </View>
        </View>
        <View style={[styles.cnt2, styles.cntFlexBox]}>
          <View style={[styles.componentKey10, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>A</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey11, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>S</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey12, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>D</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey13, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>F</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey14, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>G</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey15, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>H</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey16, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>J</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey17, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>K</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey18, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>L</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
        </View>
        <View style={styles.cntFlexBox}>
          <View style={[styles.componentKey19, styles.componentFlexBox]}>
            <Image
              style={[styles.iconMaterialIconChevron, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon--materialicon--caps-lock.png")}
            />
          </View>
          <View style={[styles.componentKey20, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>Z</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey21, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>X</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey22, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>C</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey23, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>V</Text>
            <Text style={styles.superscriptPosition}>{` `}</Text>
          </View>
          <View style={[styles.componentKey24, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>B</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey25, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>N</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey26, styles.componentSpaceBlock]}>
            <Text style={[styles.text3, styles.textTypo2]}>M</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >
              #
            </Text>
          </View>
          <View style={[styles.componentKey27, styles.componentFlexBox]}>
            <Image
              style={[styles.iconMaterialIconChevron, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon--materialicon--backspace-black-24dp.png")}
            />
          </View>
        </View>
        <View style={styles.cntFlexBox}>
          <View style={[styles.componentKey28, styles.componentShadowBox1]}>
            <Text style={[styles.text29, styles.textTypo]}>?123</Text>
          </View>
          <View style={[styles.componentKey29, styles.componentShadowBox]}>
            <Text style={[styles.text30, styles.textTypo]}>,</Text>
            <Image
              style={styles.iconMaterialIconSentime}
              resizeMode="cover"
              source={require("../assets/icon--materialicon--sentiment-satisfied-black-24dp.png")}
            />
          </View>
          <View style={[styles.componentKey30, styles.componentShadowBox]}>
            <Image
              style={[styles.iconMaterialIconChevron, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon--materialicon--language-black-24dp.png")}
            />
          </View>
          <View style={[styles.componentKey31, styles.componentShadowBox1]}>
            <Text style={[styles.text31, styles.textTypo2]}>English</Text>
          </View>
          <View style={[styles.componentKey32, styles.componentShadowBox]}>
            <Text style={[styles.text3, styles.textTypo2]}>.</Text>
            <Text
              style={[styles.superscriptText10, styles.superscriptPosition]}
            >{` `}</Text>
          </View>
          <View style={[styles.componentKey33, styles.componentFlexBox]}>
            <Image
              style={[styles.iconMaterialIconChevron, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/icon--materialicon--keyboard-tab-black-24dp.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.componentHomeIndicator, styles.cntFlexBox1]}>
        <View style={styles.iconLayout}>
          <View style={styles.fill} />
        </View>
        <Image
          style={[styles.iconHome, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--home.png")}
        />
        <Image
          style={[styles.iconHome, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon--back.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cnt1FlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  componentFlexBox1: {
    padding: Padding.p_10xs,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  cntFlexBox1: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo1: {
    height: 21,
    color: Color.gBoard454647,
    fontSize: FontSize.gBoardMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.gBoardLarge,
    overflow: "hidden",
    flex: 1,
  },
  componentBarBg: {
    backgroundColor: Color.gBoardE8EAED,
    alignItems: "center",
  },
  componentSpaceBlock: {
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo2: {
    textAlign: "center",
    fontFamily: FontFamily.gBoardLarge,
    color: Color.gBoard000000,
  },
  cntFlexBox: {
    marginTop: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  superscriptPosition: {
    zIndex: 1,
    textAlign: "right",
    color: Color.gBoard666666,
    fontFamily: FontFamily.gBoardTiny,
    fontWeight: "700",
    fontSize: FontSize.gBoardTiny_size,
    right: 2,
    top: 2,
    position: "absolute",
  },
  componentFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_10xs,
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  componentShadowBox1: {
    padding: Padding.p_11xs,
    height: 40,
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    alignItems: "center",
  },
  textTypo: {
    fontFamily: FontFamily.gBoardDefault,
    fontWeight: "500",
    fontSize: FontSize.gBoardDefault_size,
    textAlign: "center",
  },
  componentShadowBox: {
    width: 30,
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    marginLeft: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
  },
  iconMaterialIconChevron: {
    overflow: "hidden",
  },
  componentButton: {
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    padding: Padding.p_10xs,
    borderRadius: Border.br_11xl,
  },
  separatorIcon: {
    maxWidth: "100%",
    height: 22,
    marginLeft: 4,
    overflow: "hidden",
  },
  text1: {
    marginLeft: 4,
  },
  cnt: {
    marginLeft: 4,
    flex: 1,
  },
  componentButton1: {
    marginLeft: 4,
  },
  componentBar: {
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_6xs,
    paddingRight: Padding.p_6xs,
    paddingBottom: Padding.p_6xs,
    backgroundColor: Color.gBoardE8EAED,
    alignItems: "center",
  },
  text3: {
    fontSize: FontSize.gBoardLarge_size,
    zIndex: 0,
    color: Color.gBoard000000,
    flex: 1,
  },
  componentKey: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
  },
  componentKey1: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey2: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey3: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey4: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey5: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey6: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey7: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey8: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey9: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  superscriptText10: {
    display: "none",
  },
  componentKey10: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
  },
  componentKey11: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey12: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey13: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey14: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey15: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey16: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey17: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey18: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  cnt2: {
    paddingHorizontal: Padding.p_lg,
    paddingVertical: 0,
  },
  componentKey19: {
    width: 48,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_10xs,
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    backgroundColor: Color.gBoardCCCED5,
  },
  componentKey20: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey21: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey22: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey23: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey24: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey25: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey26: {
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    backgroundColor: Color.gBoardFFFFFF,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    flex: 1,
    marginLeft: 4,
  },
  componentKey27: {
    width: 48,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_10xs,
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    backgroundColor: Color.gBoardCCCED5,
    marginLeft: 4,
  },
  text29: {
    color: Color.gBoard3D3D3F,
    alignSelf: "stretch",
  },
  componentKey28: {
    width: 53,
    backgroundColor: Color.gBoardCCCED5,
  },
  text30: {
    top: 18,
    left: 2,
    width: 26,
    position: "absolute",
    color: Color.gBoard000000,
  },
  iconMaterialIconSentime: {
    marginLeft: -7,
    top: 5,
    left: "50%",
    width: 13,
    height: 13,
    position: "absolute",
    overflow: "hidden",
  },
  componentKey29: {
    height: 40,
    width: 30,
    backgroundColor: Color.gBoardCCCED5,
  },
  componentKey30: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_10xs,
    height: 40,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.gBoardFFFFFF,
  },
  text31: {
    fontSize: FontSize.gBoardSmall_size,
    color: Color.gBoard000000,
    alignSelf: "stretch",
  },
  componentKey31: {
    marginLeft: 4,
    backgroundColor: Color.gBoardFFFFFF,
    flex: 1,
  },
  componentKey32: {
    backgroundColor: Color.gBoardCCCED5,
    paddingBottom: Padding.p_8xs,
    paddingTop: Padding.p_5xs,
    paddingHorizontal: Padding.p_11xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  componentKey33: {
    backgroundColor: Color.gBoard1A73E8,
    width: 48,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_10xs,
    borderRadius: Border.br_7xs,
    elevation: 0,
    shadowRadius: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.27)",
    marginLeft: 4,
  },
  keysLayoutAlphabeticEng: {
    padding: Padding.p_9xs,
    alignSelf: "stretch",
  },
  fill: {
    height: "50%",
    width: "50%",
    top: "25%",
    right: "25%",
    bottom: "25%",
    left: "25%",
    borderRadius: Border.br_12xs,
    backgroundColor: Color.gBoard666666,
    position: "absolute",
  },
  iconHome: {
    marginLeft: 58,
  },
  componentHomeIndicator: {
    padding: Padding.p_2xs,
    overflow: "hidden",
    backgroundColor: Color.gBoardFFFFFF,
    alignSelf: "stretch",
  },
  gBoardAlphabeticEnglish: {
    width: "100%",
    height: 287,
    alignItems: "center",
    flex: 1,
  },
});

export default GBoardAlphabeticEnglish;
