import React from "react";
import { UserProvider } from "./src/app/user/utilities/UserContext";
import { NewsProvider } from "./src/app/news/utilities/NewsContext";
import AppNavigation from "./src/app/appNavigations/AppNavigation";


const App = () => {
  return (
<UserProvider>
  <NewsProvider>
   <AppNavigation/>
  </NewsProvider>
</UserProvider>
  );
};

export default App;

