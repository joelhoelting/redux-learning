import { SET_STACK } from "../actions/actionTypes";
import { LOAD_STACKS } from "../actions/actionTypes";

const initialState = {
  stack: {},
  stacks: []
};

function stack(state = initialState, action) {
  switch (action.type) {
    case SET_STACK:
      const { stack } = action.payload;
      return {
        stack,
        stacks: [...state.stacks]
      };
    case LOAD_STACKS:
      const { stacks } = action.payload;
      return {
        stack: {...state.stack},
        stacks
      }
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