import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';
import getBreed from '../model/Pet/getBreed';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../model";
interface IBreed {
    breedName: string;
    id: number;
}

function BreedAuto(props : {onSelectItem : (value : string) => void}){
    const [breedList, setBreedList] = useState([]);
    const onSelectBreed = (value : string) => {
        props.onSelectItem(value);
    }
    
    const tmpList = useSelector((state: RootState) => state.petBreed.List);
    const dispatch = useDispatch();

    useEffect(() => {
        const innerFunc = async () => {
            try {
                await getBreed(dispatch);
            }
            catch (error) {
                console.log(error);
            }
        }
        innerFunc();
    }, []);
    useEffect(() => {
        if (tmpList.length === 179 && breedList.length === 0) {
            for (let i = 0; i < tmpList.length; i++) {
                setBreedList((breedList) => {
                    return [
                        ...breedList,
                        tmpList[i]
                    ];
                });
            }
        }
    }, [tmpList, breedList]);
    return(
        <View>
            <ModalDropdown
              options = {breedList}
              onSelect={onSelectBreed}
              defaultValue = "견종을 입력하세요"
            />
        </View>
    )
}

const styles = StyleSheet.create({
})

export default BreedAuto;