import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DropDownPicker from "react-native-dropdown-picker";

export function DropDownMenu() {
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
