import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DatePicker from "react-native-date-picker";

export function DatePickerComp() {
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    return (
        <View style={{ margin: 2 }}>
            <View>
                <TouchableOpacity
                    onPress={() => setOpen(true)}
                    style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
                >
                    {/*<Pressable onPress={() => setOpen(true)}>*/}
                    <TextInput
                        style={{ color: "#fff", minWidth: "35%", backgroundColor: "green", padding: 0 }}
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
