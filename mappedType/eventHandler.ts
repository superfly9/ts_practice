type Events = {
  add: string;
  remove: string;
  move: string;
};

type EventsKeys = keyof Events; // add | remove | move - 포인트1

const userActions: OnEvents = {
  onAdd: () => {},
  onRemove: () => {},
  onMove: () => {},
};

// 포인트2
type OnEvents = {
  [key in EventsKeys as `on${Capitalize<key>}`]: () => any;
};

// 포인트3
type OnEventWithGeneric<T extends object> = {
  [key in keyof T as key extends string
    ? `on${Capitalize<key>}`
    : never]: () => any;
};

type Events2 = {
  visit: string;
  location: string;
  submit: string;
};

const userActionsWithGeneric: OnEventWithGeneric<Events2> = {
  onVisit: () => {},
  onLocation: () => {},
  onSubmit: () => {},
};
