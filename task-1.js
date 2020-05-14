const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
  changeHobby(newHobby) {
    this.hobby = newHobby;
  },
  changePremium(newPremium) {
    this.premium = newPremium;
  },
  addMood(mood) {},
};
user.changeHobby("skydiving");
user.changePremium(false);
user.addMood("happy");
console.log(user);
