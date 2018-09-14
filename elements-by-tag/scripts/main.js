const body = document.querySelector(`body`);
const para = document.querySelector(`p`);

console.log(getArrayByTagName(body, `h1`).length);
console.log(getArrayByTagName(body, `span`).length);
console.log(getArrayByTagName(para, `span`).length);

function getArrayByTagName(element, tagName) {
  let children = Array.from(element.children);
  if (children[children.length - 1].nodeName.toLowerCase() === `script`) {
    children.pop(); //Removes the script element from LiveServer.
  }
  let childrenWithTag = [];
  for (let child of children) {
    if (Array.from(child.children).length > 0) {
      let subChildrenWithTag = getArrayByTagName(child, tagName);
      if (subChildrenWithTag.length > 0) {
        childrenWithTag = [...childrenWithTag, ...subChildrenWithTag];
      }
    }
    if (child.nodeName.toLowerCase() === tagName) {
      childrenWithTag.push(child);
    }
  }
  return childrenWithTag;
}