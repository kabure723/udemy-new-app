const initialState = {
  clips: [],
};

const reducer = (state = initialState, action) => {
  // oldstateとactionの切り分け
  switch (action.type) {
    case 'ADD_CLIP':
      return {
        // oldstateのclipsにnewAction上書きする感じ
        ...state,
        clips: [...state.clips, action.clip],
      };
    case 'DELETE_CLIP':
      return {
        ...state,
        clips: state.clips.filter((clip) => clip.url !== action.clip.url),
      };
    default:
      return state;
  }
};

export default reducer;
