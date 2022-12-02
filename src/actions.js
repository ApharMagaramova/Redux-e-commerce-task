export function actionAdd(id) {
  return {
    type: "ADD",
    payload: {
      id: id,
    },
  };
}
export function actionDelete(id) {
  return {
    type: "DEL",
    payload: {
      id: id,
    },
  };
}
