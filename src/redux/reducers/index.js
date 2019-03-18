import { SET_STACK } from "../actions/actionTypes";

function stack(state = {}, action) {
  switch (action.type) {
    case SET_STACK:
      const { stack } = action.payload;
      return stack;
    default:
      return state;
  }
}

export default stack;


// import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

// const initialState = {
//   allIds: [],
//   byIds: {}
// };

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO: {
//       const { id, content } = action.payload;
//       return {
//         ...state,
//         allIds: [...state.allIds, id],
//         byIds: {
//           ...state.byIds,
//           [id]: {
//             content,
//             completed: false
//           }
//         }
//       };
//     }
//     case TOGGLE_TODO: {
//       const { id } = action.payload;
//       return {
//         ...state,
//         byIds: {
//           ...state.byIds,
//           [id]: {
//             ...state.byIds[id],
//             completed: !state.byIds[id].completed
//           }
//         }
//       };
//     }
//     default:
//       return state;
//   }
// }