import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { NewsContext } from "../utilities/NewsContext";
import React, { useContext, useEffect, useState } from "react";
//react Hooks

const Home2 = (props) => {
  const { getNews } = useContext(NewsContext);
  const [data, setData] = useState([]);
  const { navigation } = props;

  const [refreshing, setRefreshing] = useState(false);
  
  const refreshData = async () =>{
    setRefreshing(true);
    const result = await getNews();
    setData(result);
    setRefreshing(false);
  }
  // useEffect(() => {
  //   //Chạy khi component được render
  //   //Chạy 1 lần duy nhất
  //   const fetchData = async () => {
  //     const result = await getNews();
  //     setData(result);
  //   };
  //   fetchData();
  //   return () => {}

  //   }, [])

  useEffect(() => {
    //Tự động chạy sau khi component được render
    //Chạy lần đầu tiên và mỗi khi có sự thay đổi state
    const get = async () => {
      const response = await getNews();
      setData(response);
    };
    get();
    return () => {};
  }, []);
    //useEffect(() => {
    //Tự động chạy sau khi component được render
    //Chạy lần đầu tiên và mỗi khi có sự thay đổi state
    //state được khai báo trong mảng
    //}, [data]);

  //Adapter
  const renderItem = ({item}) => {
    // const { item } = props;
    // const { title, image, createdAt, _id} = item;
const {name, image, price, createdAt, _id} = item;

    const displayDate = (value) => {
      const date = new Date(value);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
    return (
      <Pressable
      onPress={() => navigation.navigate("Detail", {id: _id})}
      style={homeStyle.card}>
        <Image source={{ uri: image }} style={homeStyle.image} />
        <View style={homeStyle.information}>
          <Text style={homeStyle.category}>{name}</Text>
          {/* <Text style={homeStyle.category}>{displayDate(createdAt)}</Text> */}
          <Text style={homeStyle.title}>{price}</Text>
        </View>
      </Pressable>
    )
  }
  return (
    <View style={homeStyle.container}>
      <Image source={require("../../../media/images/appIcon.png")} />

      <FlatList
        data={data}
        renderItem={renderItem}
        // keyExtractor={(item) => item._id}
        keyExtractor={Math.random}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        refreshing={refreshing}
        onRefresh={refreshData}
       // initialScrollIndex={8}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>{
           data.map((item, index) => {
           return renderItem({item, index});
         })
         </ScrollView>
         } */}
    </View>
  );
};

export default Home2;

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

// //du lieu ao
// var data = [
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee205",
//     title: "Happy birthday",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee206",
//     title: "Happy party",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
//   {
//     _id: "63bfa809c4f47f0016aee207",
//     title: "Happy new year",
//     content:
//       "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
//     image:
//       "https://cdn.tuoitre.vn/2022/8/21/z36603545985729afe273eca0b86d68c30c8be6d894cd1-16610703194001184506404.jpg",
//     createdAt: "2023-01-12T06:26:17.539Z",
//     createdBy: {
//       _id: "63ac39aeedf7c80016c57a67",
//       name: "",
//       avatar: "",
//     },
//   },
// ];
