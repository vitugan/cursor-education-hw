var re_username = /^user_@?\w+(\.[\w]{1,3})?$/;
console.log(re_username.test('user_test'));
console.log(re_username.test('user_213kjasd'));
console.log(re_username.test('user_@gmail.com'));
console.log(re_username.test('john'));
console.log(re_username.test('_user_test'));
console.log(re_username.test('testuser_test'));

// var re_date = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
// console.log(re_date.test('dd/mm/yyyy'));
// console.log(re_date.test('20/11/1212'));
// console.log(re_date.test('01/12/1233'));
// console.log(re_date.test('01/13/1233'));
// console.log(re_date.test('41/12/12334'));
// console.log(re_date.test('41/12/12334'));