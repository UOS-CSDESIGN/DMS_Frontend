 import DropDownPicker from "react-native-dropdown-picker"
 import { Dispatch, SetStateAction } from "react";
 
 type DropDownProps = {
    open : boolean;
    setOpen : Dispatch<SetStateAction<boolean>>;
    items : Array<{value : string, label : string}>;
    setItems : Dispatch<SetStateAction<Array<{value : string, label : string}>>>;
    selectedItem : string;
    setSelectedItem : Dispatch<SetStateAction<string>>;
    text : string;
 }

 function DropDownComponent(props : DropDownProps){
    return(
         <DropDownPicker
            open = {props.open}
            setOpen = {props.setOpen}
            items = {props.items}
            setItems = {props.setItems}
            value = {props.selectedItem}
            onChangeValue={(value : any) => props.setSelectedItem(value)}
            setValue={props.setSelectedItem}
            placeholder= {props.text}
            multiple = {false}
            mode = "BADGE"
            />
    )
 }

 export default DropDownComponent;