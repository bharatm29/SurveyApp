import { SafeAreaView, TextInput, View } from "react-native";
import React from "react";
import { DropDownMenu } from "./DropDownMenu";
import { DatePickerComp } from "./DatePicker";

export default function Complain() {
    return (
        <SafeAreaView style={{marginTop:  10}}>
            <View style={{ flexDirection: "row", gap: 10, margin: 2.5 }}>
                <View style={{ flex: 1, backgroundColor: "gray", gap: 5 }}>
                    <View style={{ zIndex: 2000 }}><DropDownMenu /></View>
                    <View style={{ zIndex: 1900 }}><DropDownMenu /></View>
                    <View style={{ zIndex: 1800 }}><DropDownMenu /></View>
                </View>
                <View style={{ alignItems: "flex-start", zIndex: -1, backgroundColor: "green", gap: 5 }}>
                    <DatePickerComp />
                    <TextInput multiline={true} style={{ backgroundColor: "green", width: 175, padding: 0 }} />
                </View>
            </View>
        </SafeAreaView>
    );
}
