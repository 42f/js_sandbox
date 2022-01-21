/*function setNestedKey(obj, path, value) {
  if (path.length === 1) {
    obj[path] = value;
    return;
  }
  const index = path.indexOf('.');
  console.log(index);
  return setNestedKey(obj[path[0]], path.slice(path.indexOf('.')), value);
}
*/

function setNestedProperty(obj, path, value) {
  console.log('set', path);
  const index = path.indexOf('.');
  console.log('set', index);
  if (index <= 0) {
    obj[path] = value;
    return;
  }
  return setNestedProperty(
    obj[path.slice(0, index)],
    path.slice(index + 1),
    value
  );
}

function getNestedProperty(obj, path) {
  console.log('get', path);
  const index = path.indexOf('.');
  console.log('get', index);
  if (index <= 0) {
    return obj[path];
  }
  return getNestedProperty(obj[path.slice(0, index)], path.slice(index + 1));
}

let obj = {
  room: {
    part: {
      bye: 'ciao',
      hello: {
        you: 'coucou',
      },
    },
  },
};

console.log(JSON.stringify(obj, null, 4));
setNestedProperty(obj, 'room.part.hello.you', '42');
setNestedProperty(obj, 'room.part.bye', '21');
console.log(JSON.stringify(obj, null, 4));

console.log('----get', getNestedProperty(obj, 'room.part.hello.you'));
console.log('----get', getNestedProperty(obj, 'room.part.bye'));
