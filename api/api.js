// api/api.js
// mock API for members and items
// Fake data and functions

let members = [
  { id: 1, fullName: "Sara", email: "sara@test.com", password: "1111" },
  { id: 2, fullName: "Tom", email: "tom@test.com", password: "2222" }
];

let items = [
  { id: 1, title: "Backpack", cost: 45 },
  { id: 2, title: "Shoes", cost: 80 }
];

// show all members
function listMembers() {
  return members;
}

// add a member
function addMember(member) {
  member.id = members.length + 1;
  members.push(member);
  return member;
}

// show all items
function listItems() {
  return items;
}

// add an item
function addItem(item) {
  item.id = items.length + 1;
  items.push(item);
  return item;
}

// quick test output
console.log("Members:", listMembers());
console.log("Items:", listItems());
