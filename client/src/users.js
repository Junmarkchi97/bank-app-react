const Users = [
  {
    name: "Junmark Chi",
    email: "junmark@chi.com",
    password: "1234",
    balance: 0,
    id: 1,
    imageUrl:
      "https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/107698530_608912933379140_3157116742695773486_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHy5T97kTojJxIg4PU2FWx1c69ASEv9LTBzr0BIS_0tMHZzj5Bov20HP4v6M__PWTwW-jN7Aj5SEbrMmxSntjD4&_nc_ohc=RoQtXM5fz2YAX-ueCdk&_nc_ht=scontent.fcgy1-1.fna&oh=00_AT9ucyLun50ihoiphqPVpIE2qnjP7RzXuuYTTcUcIKvtpg&oe=62E1B838",
  },
  {
    name: "Elon Musk",
    email: "elon@musk.com",
    password: "1234",
    balance: 1000000,
    id: 2,
    imageUrl: "https://www.famousbirthdays.com/faces/musk-elon-image.jpg",
  },
  {
    name: "James Bond",
    email: "james@bond.com",
    password: "1234",
    balance: 99999999,
    id: 3,
    imageUrl:
      "https://pbs.twimg.com/profile_images/662806967937708032/Imaxxzfj_400x400.jpg",
  },
];

function localStore() {
  localStorage.setItem("users", JSON.stringify(Users));
}

export default Users;
