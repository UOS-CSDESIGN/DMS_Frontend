import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import getBreed from '../model/Pet/getBreed';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../model";
interface IBreed {
    breedName: string;
    id: number;
}

function BreedAuto(onChange:any){
    const [breedList, setBreedList] = useState([]);
    const [breed, setBreed] = useState(null);
    const [loading, setLoading] = useState(false);
    
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
        <>
            <AutocompleteDropdown
              clearOnFocus = {false}
              closeOnBlur = {false}
              closeOnSubmit={false}
              onSelectItem={onChange}
              textInputProps={
                { placeholder: "견종을 입력하세요" }
              }
              dataSet={breedList}
              
            />
        </>
    )
}

export default BreedAuto;