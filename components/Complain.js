import { SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "react-native-date-picker";
import { MD2Colors } from "react-native-paper";

export default function Complain() {
    return (
        <SafeAreaView style={{marginTop:  10}}>
            <View style={{ flexDirection: "row", gap: 10, margin: 2.5 }}>
                <View style={{ flex: 1, backgroundColor: "gray", gap: 5 }}>
                    <View style={{ zIndex: 2000 }}><DropDownMenu /></View>
                    <View style={{ zIndex: 1900 }}><DropDownMenu /></View>
                    <View style={{ zIndex: 1800 }}><DropDownMenu /></View>
                </View>
                <View style={{ alignItems: "flex-start", zIndex: -1, backgroundColor: MD2Colors.green400, gap: 5 }}>
                    <DatePickerComp />
                    <TextInput multiline={true} style={{ backgroundColor: "green", width: 175, padding: 0 }} />
                </View>
            </View>
        </SafeAreaView>
    );
}

function DropDownMenu() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {
            label: "Dummy Text dadwdddddddddddddddddddddddddddddddddddddddd",
            value: "apple",
            icon: () => {
                return <MaterialCommunityIcons name="email" color={"black"} size={16} />;
            },
            containerStyle: { backgroundColor: "pink" },
            labelStyle: { backgroundColor: "blue" },
        },
        { label: "Banana", value: "banana" },
    ]);

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            labelProps={{
                numberOfLines: 1,
            }}
            // multiple={true}
            disabled={false}
            style={{ backgroundColor: "red" }}
            disabledStyle={{ backgroundColor: "gray" }}
            textStyle={{ backgroundColor: "green" }}
            labelStyle={{ backgroundColor: "pink" }}

            containerStyle={{ backgroundColor: "pink" }}
            showTickIcon={false}
            placeholder={"Select Customer"}
            placeholderStyle={{ fontSize: 13 }}
        />
    );
}

function DatePickerComp() {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    return (
        <View style={{ margin: 2 }}>
            <View>
                <TouchableOpacity
                        onPress={() => setOpen(true)}
                        style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    {/*<Pressable onPress={() => setOpen(true)}>*/}
                    <TextInput
                        style={{ color: "#fff", minWidth: "35%", backgroundColor: MD2Colors.green900, padding: 0 }}
                        value={date.toDateString()}
                        placeholder={"select a date"}
                        editable={false}
                    />
                    {/*</Pressable>*/}
                    <MaterialCommunityIcons name="calendar-clock" color={"black"} size={26} />
                </TouchableOpacity>
            </View>
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                }}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </View>
    );
}
