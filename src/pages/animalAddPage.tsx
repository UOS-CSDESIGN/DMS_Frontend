import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamList } from "../AppInner";
import {Text, View} from 'react-native'
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../model";
import postPetRegister from "../model/Pet/postPetRegister";
import Animal from "../components/AnimalComponent";
import Pet from "../model/Pet/Pet";

type AnimalScreenProps = NativeStackScreenProps<RootParamList, 'AnimalAddPage'>;

function AnimalAddPage({navigation} : AnimalScreenProps){
    const [name, setName] = useState<string>('');
    const [birth, setBirth] = useState<string>('');
    const [showBirth, setShowBirth] = useState<boolean>(false);
    const [gender, setGender] = useState<number>(0);
    const [showGender, setShowGender] = useState<boolean>(false);
    const [breed, setBreed] = useState<string>('');
    const [showBreed, setShowBreed] = useState<boolean>(false);
    const [weight, setWeight] = useState<string>('');
    const [showWeight, setShowWeight] = useState<boolean>(false);
    const [animalID, setAnimalID] = useState<string>('');
    const [showAnimalID, setShowAnimalID] = useState<boolean>(false);
    const [picture, setPicture] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [imageName, setImageName] = useState<string>('');
    const [showPicture, setShowPicture] = useState<boolean>(false);
    const [showButton, setShowButton] = useState<boolean>(false);

    const onChangeName = (value: string) => {
        setName(value);
        setShowBirth(true);
    }
    const onChangeBirth = (value: string) => {
        setBirth(value);
        setShowGender(true);
    }
    const onChangeGender = useCallback((gender: number) => {
        setGender(gender);
        setShowBreed(true);
        console.log(gender);
    }, []);
    const onChangeBreed = (value: string) => {
        setBreed(value);
        setShowWeight(true);
    }
    const onChangeWeight = (value: string) => {
        setWeight(value);
        setShowAnimalID(true);
    }
    const onChangeAnimalId = (value: string) => {
        setAnimalID(value);
        setShowPicture(true);
    }
    const onChangePicture = (value: string) => {
        setPicture(value);
        if (value !== null) {
        setImageUrl(value);
        if (imageUrl !== undefined) {
            const tempName = imageUrl.split("/").pop();
            setImageName(tempName || '');
        }
        } else {
        console.log('Selected image does not have assets');
        }
        setShowButton(true),[imageUrl, imageName]
    }
    const dispatch = useDispatch(); 
    const token = useSelector((state:RootState)=>state.login.accessToken)

    const onSubmit = useCallback(async () => {
        console.log(breed);
        const pet = new Pet(
        Number(animalID), name, birth, gender, 1,
        0, 0, 0, imageUrl, imageName
        );
        await postPetRegister(pet, dispatch, token)
        .then(() => {
            navigation.navigate('MultiProfilePage');
        })
        .catch(() => {
            navigation.navigate('AnimalAddPage');
        });

        console.log(pet.registerFormData);
    }, [animalID, name, birth, gender, breed, weight, imageUrl, imageName]);
    return(
        <View>
            <Animal
                name = {name} birth = {birth} showBirth = {showBirth}
                gender = {gender} showGender = {showGender} breed = {breed}
                showBreed = {showBreed} weight = {weight} showWeight = {showWeight}
                animalID = {animalID} showAnimalID = {showAnimalID} picture = {picture}
                showPicture = {showPicture} imageUrl = {imageUrl} imageName = {imageName}
                showButton = {showButton} onChangeName = {onChangeName}
                onChangeBirth = {onChangeBirth} onChangeGender = {onChangeGender}
                onChangeBreed = {onChangeBreed} onChangeWeight = {onChangeWeight}
                onChangeAnimalId = {onChangeAnimalId} onChangePicture = {onChangePicture} onSubmit = {onSubmit}/>
        </View>
    )

}

export default AnimalAddPage;