export const initialState = {
  loading: true,
  spotId: {},
  spotsList: [],
  spotsCate: [],
  spotsDeparts: [],
  newComment: '',
  newTypeSpot: 'Bike Park',
  newCategory: '1',
  newDepartement: '1',
  departValue: '1',
  spotDisci: '1',
  newOpeningHours: '00:00',
  newResultList: [],
  isLiked: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SAVE_SPOTS_LIST':
      return {
        ...state,
        spotsList: action.spotsList,
        spotsCate: action.spotsCate,
        spotsDeparts: action.spotsDepar,
      };
    case 'SAVE_SPOT_ID':
      return {
        ...state,
        spotId: action.newSpot,
        loading: false,
      };
    case 'CHANGE_SPOT_VALUE':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'SAVE_RESULT_LIST':
      return {
        ...state,
        newResultList: action.newList,
      };
    case 'SUCCESS_COMMENT_SPOT':
      return {
        ...state,
        newComment: '',
      };
    // case 'HOUR_CHANGE':
    //   return {
    //     ...state,
    //     newOpeningHours: action.newHour,
    //   };
    case 'TOGGLE_LIKE_SPOT':
      return {
        ...state,
        isLiked: action.liked,
      };
    default:
      return state;
  }
};

export default reducer;
