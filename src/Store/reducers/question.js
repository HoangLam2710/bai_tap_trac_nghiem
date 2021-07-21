const initialState = {
    questionList: [],
    answerList: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_QUESTIONS":
            state.questionList = action.payload;
            return { ...state };
        case "SET_ANSWERLIST":
            const index = state.answerList.findIndex(
                (item) => item.questionId === action.payload.questionId
            );
            if (index === -1) {
                state.answerList = [...state.answerList, action.payload];
            } else {
                const editAnswerList = [...state.answerList];
                editAnswerList[index].answer = {
                    ...editAnswerList[index].answer,
                    ...action.payload.answer,
                };
                state.answerList = editAnswerList;
            }
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
