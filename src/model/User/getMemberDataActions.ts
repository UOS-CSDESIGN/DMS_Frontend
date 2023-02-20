import axios from "axios";
import { useSelector } from 'react-redux';
import { handleActions, Action } from "redux-actions";
import { initalState, UserState } from "./userState";
import User from "./User";
import { useState } from "react";

const GET_MEMBER_REQUEST = 'User/GET_MEMBER_REQUEST';
const GET_MEMBER_SUCCESS = 'User/GET_MEMBER_SUCCESS';
const GET_MEMBER_FAILURE = 'User/GET_MEMBER_FAILURE';

interface getMemberSuccessPayload{
    data: string;
}



export const getMemberData = (user: User) => async (dispatch: any) => {

    let store: any = useSelector((state) => { return state });

    dispatch({ type: GET_MEMBER_REQUEST });
    try {
        const res = await axios.get('http://25.15.132.100:8080/member/getMemberData',
            {
                headers: {
                    'Authorization': 'Bearer ' + store.userState.accessToken,
                    'Access-Control-Allow-Origin': "http://25.15.132.100:8080/"
                },
            })
        dispatch({
            type: GET_MEMBER_SUCCESS,
            payload: res.data
        });
    } catch (e) {
        dispatch({
            type: GET_MEMBER_FAILURE,
            payload: e,
            error: true
        });
        throw e;
    }
}
const getMemberDataActions = handleActions<UserState, any>(
    {
        [GET_MEMBER_REQUEST]: (state: UserState) => ({
            ...state,
            loading: {
                ...state.loading,
                getMember: true
            }
        }),
        [GET_MEMBER_SUCCESS]: (state: UserState, action: Action<getMemberSuccessPayload>) => ({
            ...state,
            memberData: action.payload.data,
            loading: {
                ...state.loading,
                getMember: false
            }
        }),
        [GET_MEMBER_FAILURE]: (state: UserState, action: Action<Error>) => ({
            ...state,
            loading: {
                ...state.loading,
                getMember: false,
            }
        })
    },
    initalState
);
export default getMemberDataActions;