import { useState } from "react";
import { Text, View } from "react-native";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';

interface IBreed {
    id : number;
    name : string;
}

function BreedAuto(props : IBreed){
    const [breedList, setBreedList] = useState<IBreed[]>([]);
    const [breed, setBreed] = useState(null);
    
    return(
        <View>
            <AutocompleteDropdown
              clearOnFocus = {false}
              closeOnBlur = {true}
              closeOnSubmit = {false}
              onSelectItem={setBreed}
              data = {breedList}

              />
        </View>
    )
}

export default BreedAuto;