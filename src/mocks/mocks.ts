export function getNumber() {
  return 2000;
}

export const cart = {
  getApples: () => 42,
};

interface IItem {
  message: string;
  from: string;
}
export const messages = {
  items: [{ message: "Message 1", from: "Testman" }],

  addItem(item: IItem) {
    messages.items.push(item);
    messages.callbacks.forEach((callBack) => callBack(item));
  },

  onItem(callback) {
    messages.callbacks.push(callback);
  },

  getLatest,
};
function getLatest(index = messages.items.length - 1) {
  return messages.items[index];
}
