// ------------------------------------
// Constants
// ------------------------------------
export const DASHBOARD_VISIT_COUNT = 'DASHBOARD_VISIT_COUNT'
export const DASHBOARD_ADD_ITEM = 'DASHBOARD_ADD_ITEM'
export const DASHBOARD_EDIT_ITEM = 'DASHBOARD_EDIT_ITEM'

// ------------------------------------
// Actions
// ------------------------------------
export function dashboardAddItem (value) {
  return {
    type: DASHBOARD_ADD_ITEM,
    payload: value
  }
}

export function dashboardEditItem (value) {
  return {
    type: DASHBOARD_ADD_ITEM,
    payload: value
  }
}

export function dashboardVisitIncrement (value = 1) {
  return {
    type: DASHBOARD_VISIT_COUNT,
    payload: value
  }
}

export const actions = {
  dashboardVisitIncrement,
  dashboardAddItem,
  dashboardEditItem
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DASHBOARD_VISIT_COUNT]: (state, action) => {
    state.visitsCount = state.visitsCount + action.payload
    return Object.assign({}, state)
  },
  [DASHBOARD_ADD_ITEM]: (state, action) => {
    const mockId = Math.floor(Date.now / 1000)
    const newItem = {
      label: action.payload,
      id: mockId
    }
    state.dashboardItems.push(newItem)
    return Object.assign({}, state)
  },
  [DASHBOARD_EDIT_ITEM]: (state, action) => {
    const newLabel = action.payload.val
    const index = action.payload.editItemIndex

    state.dashboardItems[index].label = newLabel
    return Object.assign({}, state)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  visitsCount: 0,
  dashboardItems: [
      {key: 0, label: 'Angular'},
      {key: 1, label: 'JQuery'},
      {key: 2, label: 'Polymer'},
      {key: 3, label: 'ReactJS'}
  ]
}
export default function dashboardReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
