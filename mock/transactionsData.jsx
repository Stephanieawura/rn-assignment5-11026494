import colors from "../config/colors.jsx"


export const transactionsData = [
  {
    id:0,
    icon: require("../assets/apple.png"),
    title:"Apple Store",
    subTitle:"Entertainment",
    amount:"-$5,99",
    style: {color: colors.black, fontSize:15, fontWeight:"600", marginLeft:145}
  },
  {
    id:1,
    icon: require("../assets/spotify.png"),
    title:"Spotify",
    subTitle:"Music",
    amount:"-$12,99",
    style: {color: colors.black, fontSize:15, fontWeight:"600", marginLeft:200}
  },
  {
    id:2,
    icon: require("../assets/moneyTransfer.png"),
    title:"Money Transfer",
    subTitle:"Transaction",
    amount:"$300",
    style: {color: colors.blue, fontSize:15, fontWeight:"600", marginLeft:160}
  },
  {
    id:3,
    icon: require("../assets/grocery.png"),
    title:"Grocery",
    subTitle:"Shopping",
    amount:"-$88",
    style: {color: colors.black, fontSize:15, fontWeight:"600", marginLeft:170}
  },
]