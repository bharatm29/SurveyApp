import { Text, useWindowDimensions } from "react-native";
import React from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Complain from "./Complain";
import ToDo from "./ToDo";
import NewCustomer from "./NewCustomer";
import Support from "./Support";

export default function TopTabNavigation(){
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "first", title: "Todo" },
        { key: "second", title: "Complain" },
        { key: "third", title: "New Customer" },
        { key: "fourth", title: "Support" },
    ]);

    const renderScene = SceneMap({
        first: ToDo,
        second: Complain,
        third: NewCustomer,
        fourth: Support,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            lazy={true}
            renderTabBar={props =>
                <TabBar
                    {...props}
                    // style={{ backgroundColor: "red" }}
                    // inactiveColor={"black"}
                    // activeColor={"blue"}
                    // indicatorStyle={{backgroundColor: "#fff", width: 50}}
                    // renderIcon={({ route, focused, color }) => {
                    //     return <MaterialCommunityIcons color={color} name={"home"} size={15}/>
                    // }}
                    renderLabel={({ route, focused, color }) => {
                        return <Text style={{fontSize: 14}}>{route.title}</Text>
                    }}
                />
            }

        />
    );
}
