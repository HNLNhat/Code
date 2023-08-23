import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { NewsContext } from "../utilities/NewsContext";

const Detail = (props) => {
  const { navigation } = props;
  const { id } = props?.route?.params;
  const { getDetail } = useContext(NewsContext);
  const [data, setData] = useState(null); //Chi tiết tin tức
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () =>{
      const result = await getDetail(id);
      setData(result);
      setIsLoading(false);
    };
    if(id){
      fetchData();
    }
    return () => {}
  }, [id]);

  return (
      (id && data && data._id.toString() == id.toString()) ? 
      <ScrollView style={styles.container}>
      <View style={styles.authorInfomation}>
        <Image source={require("../../../media/images/author.png")} />
        <View style={styles.author}>
          <Text style={styles.authorName}>BBC News</Text>
          <Text style={styles.authorTime}>14m ago</Text>
        </View>
      </View>

      <Image
        //source={require("../../../media/images/girl.jpg")}
        source={{uri: data.image}}
        style={styles.img}
        resizeMode="cover"
      />

      <Text style={styles.europe}>Europe</Text>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.content}>{data.price}</Text>

     
     </ScrollView>
     : <><View><Text>Loading...</Text></View></>
  )
}
export default Detail;

const styles = StyleSheet.create({
  content: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    color: "#4E4B66",
    marginTop: 16,
  },
  title: {
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 36,
    color: "#000",
    marginTop: 4,
  },
  europe: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    color: "#4E4866",
    marginTop: 16,
  },
  img: {
    width: "100%",
    height: 500,
    marginTop: 16,
    borderRadius: 6,
  },
  authorTime: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    color: "#4E4B66",
  },
  authorName: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
  },
  author: {
    marginLeft: 4,
  },
  authorInfomation: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
});
