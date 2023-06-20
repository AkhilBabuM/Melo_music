export const initialState = {
    playlists: [],
    playing: null,
    bannerOpen: false,
    search: null,
    language: null,
  };
  
  const musicReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PLAYLIST":
        return {
          ...state,
          playlists: action.payload,
        };
      case "SET_CURR_PLAYING":
        return {
          ...state,
          playing: action.payload,
        };
      case "SET_BANNER_OPEN":
        return {
          ...state,
          bannerOpen: action.payload,
        };
      case "INC_TIMES_PLAYED":
        const updatedPlaylists = state.playlists.map((item, index) => {
          if (index === action.payload) {
            return {
              ...item,
              timesPlayed: item.timesPlayed + 1,
            };
          }
          return item;
        });
        return {
          ...state,
          playlists: updatedPlaylists,
        };
      case "SET_SEARCH_QUERY":
        return {
          ...state,
          search: action.payload,
        };
      case "SET_MUSIC_LIST":
        return {
          ...state,
          language: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default musicReducer;
  