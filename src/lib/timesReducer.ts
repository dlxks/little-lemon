import { fetchAPI } from "./api";

export const initializeItems = (): string[] => {
  const today = new Date();
  return fetchAPI(today)
}

export const timesReducer = (
  state: string[],
  action: { type: "update", date: string }
): string[] => {
  switch (action.type) {
    case "update":
      const newDate = new Date(action.date)
      return fetchAPI(newDate)

    default:
      return state
  }
}