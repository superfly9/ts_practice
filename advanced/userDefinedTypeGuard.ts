type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

function isSqaure(shape: Shape): shape is Square {
  return "size" in shape;
}

function isRenctangle(shape: Shape): shape is Rectangle {
  return "width" in shape;
}

function area(shape: Shape) {
  if (isSqaure(shape)) {
    return shape.size * shape.size;
  }

  if (isRenctangle(shape)) {
    return shape.width * shape.height;
  }
  //   위의 2가지 경우 제외하고는 일어나지 않을 거라는 걸 never로 알려줘야
  const ensure: never = shape;
  return ensure;
}

area({ size: 3 });
area({ width: 5, height: 10 });

function area2(shape: Shape) {
  if ("size" in shape) {
    return shape.size * shape.size;
  }

  if ("width" in shape) {
    return shape.width * shape.height;
  }
  let result: never = shape;
  return result;
}

area2({ size: 3 });
area2({ width: 5, height: 10 });
