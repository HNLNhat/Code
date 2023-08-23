import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={homeStyle.container}>
      <Text>Home</Text>
      <Image source={require("../../media/images/appIcon.png")} />

      <View style={homeStyle.card}>
        <Image
          source={require("../../media/images/girl.jpg")}
          style={homeStyle.image}
        />
        <View style={homeStyle.information}>
          <Text style={homeStyle.category}>Europe</Text>
          <Text style={homeStyle.title}>
            Ukraine's President Zelensky to BBC: Blood money being paid...
          </Text>
          <View style={homeStyle.author}>
            <Image
              style={homeStyle.imgNew}
              source={require("../../media/images/author.png")}
            />
            <Text style={homeStyle.authorName}>BBC News</Text>
            <Image
              style={homeStyle.imgTime}
              source={require("../../media/images/time.png")}
            />
            <Text style={homeStyle.authorTime}>14m ago</Text>
          </View>
        </View>
      </View>
      <View style={homeStyle.card}>
        <Image
          source={require("../../media/images/girl.jpg")}
          style={homeStyle.image}
        />
        <View style={homeStyle.information}>
          <Text style={homeStyle.category}>Europe</Text>
          <Text style={homeStyle.title}>
            Ukraine's President Zelensky to BBC: Blood money being paid...
          </Text>
          <View style={homeStyle.author}>
            <Image
              style={homeStyle.imgNew}
              source={require("../../media/images/author.png")}
            />
            <Text style={homeStyle.authorName}>BBC News</Text>
            <Image
              style={homeStyle.imgTime}
              source={require("../../media/images/time.png")}
            />
            <Text style={homeStyle.authorTime}>14m ago</Text>
          </View>
        </View>
      </View>
      <View style={homeStyle.card}>
        <Image
          source={require("../../media/images/girl.jpg")}
          style={homeStyle.image}
        />
        <View style={homeStyle.information}>
          <Text style={homeStyle.category}>Europe</Text>
          <Text style={homeStyle.title}>
            Ukraine's President Zelensky to BBC: Blood money being paid...
          </Text>
          <View style={homeStyle.author}>
            <Image
              style={homeStyle.imgNew}
              source={require("../../media/images/author.png")}
            />
            <Text style={homeStyle.authorName}>BBC News</Text>
            <Image
              style={homeStyle.imgTime}
              source={require("../../media/images/time.png")}
            />
            <Text style={homeStyle.authorTime}>14m ago</Text>
          </View>
        </View>
      </View>
      <View style={homeStyle.card}>
        <Image
          source={require("../../media/images/girl.jpg")}
          style={homeStyle.image}
        />
        <View style={homeStyle.information}>
          <Text style={homeStyle.category}>Europe</Text>
          <Text style={homeStyle.title}>
            Ukraine's President Zelensky to BBC: Blood money being paid...
          </Text>
          <View style={homeStyle.author}>
            <Image
              style={homeStyle.imgNew}
              source={require("../../media/images/author.png")}
            />
            <Text style={homeStyle.authorName}>BBC News</Text>
            <Image
              style={homeStyle.imgTime}
              source={require("../../media/images/time.png")}
            />
            <Text style={homeStyle.authorTime}>14m ago</Text>
          </View>
        </View>
      </View>
      <View style={homeStyle.card}>
        <Image
          source={require("../../media/images/girl.jpg")}
          style={homeStyle.image}
        />
        <View style={homeStyle.information}>
          <Text style={homeStyle.category}>Europe</Text>
          <Text style={homeStyle.title}>
            Ukraine's President Zelensky to BBC: Blood money being paid...
          </Text>
          <View style={homeStyle.author}>
            <Image
              style={homeStyle.imgNew}
              source={require("../../media/images/author.png")}
            />
            <Text style={homeStyle.authorName}>BBC News</Text>
            <Image
              style={homeStyle.imgTime}
              source={require("../../media/images/time.png")}
            />
            <Text style={homeStyle.authorTime}>14m ago</Text>
          </View>
        </View>
      </View>
      
    </View>
  );
};

export default Home;
const homeStyle = StyleSheet.create({
  imgTime: {
    width: 11,
    height: 11,
    marginTop: 2,
  },
  imgNew: {
    width: 16,
    height: 16,
  },
  authorTime: {
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 13,
    letterSpacing: 0.12,
    color: "#4E4B66",
    marginTop: 2,
  },
  authorName: {
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.12,
    color: "#4E4B66",
    marginRight: 10,
  },
  author: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  title: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
  },
  category: {
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 20,
    color: "#4e4b66",
  },
  information: {
    flex: 1,
    height: 86,
  },
  image: {
    width: 86,
    height: 86,
    borderRadius: 6,
    marginRight: 4,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    padding: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
});
