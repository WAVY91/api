const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000

const cors = require('cors')
app.use(cors ({
  origin: 'https://frontendtutor.vercel.app',
  methods: ['GET', 'POST', 'PUT,', 'DELETE', 'PATCH'],
  credentials: true
}))

let allArtists = [
  {
    id: 1,
    artistName: "Bella Shmurda",
    songTitle: "Appraisal",
    songUrl: "https://audiomack.com/bella-shmurda/song/appraisal",
    songImg:
      "https://i.audiomack.com/bella-shmurda/9abf98cac49a2efd482141205b018926ade400ca4a13c8369444b77fa6b825e6.jpeg?width=416",
    releaseDate: "October 3, 2025",
  },
  {
    id: 2,
    artistName: "Asake , Wizkid, Skillibeng by Sarz",
    songTitle: "Getting Paid",
    songUrl:
      "https://audiomack.com/only1sarz/song/getting-paid-feat-asake-wizkid-skillibeng?share-user-id=20481394",
    songImg: "https://i.audiomack.com/only1sarz/c47cc65c84.webp?width=416",
    releaseDate: "September 26, 2025",
  },
  {
    id: 3,
    artistName: "Gunna ft Wizkid",
    songTitle: "Forever be mine",
    songUrl:
      "https://audiomack.com/gunna/song/forever-be-mine-feat-wizkid-7153617?share-user-id=20481394",
    songImg: "https://i.audiomack.com/gunna/fda4733d44.webp?width=416",
    releaseDate: "August 8, 2025",
  },
  {
    id: 4,
    artistName: "Fola",
    songTitle: "Caricature",
    songUrl:
      "https://audiomack.com/folapondis/song/caricature-8489309?share-user-id=20481394",
    songImg: "https://i.audiomack.com/folapondis/0e26eff7c5.webp?width=416",
    releaseDate: "September 4, 2025",
  },
  {
    id: 5,
    artistName: "Adekunle Gold",
    songTitle: "Bobo",
    songUrl:
      "https://audiomack.com/adekunlegold/song/bobo?share-user-id=20481394",
    songImg:
      "https://i.audiomack.com/adekunlegold/314a82103690eee13cda4b8fea96cfbd6b5115a5178626a6c5b03240a6382bd2.jpeg?width=416",
    releaseDate: "September 5, 2025",
  },
  {
    id: 6,
    artistName: "Burna Boy",
    songTitle: "Higher",
    songUrl:
      "https://audiomack.com/burna-boy/song/higher-7604956?share-user-id=20481394",
    songImg: "https://i.audiomack.com/burna-boy/11416945-1.webp?width=416",
    releaseDate: "June 27, 2024",
  },
  {
    id: 7,
    artistName: "Bnxn",
    songTitle: "I Alone",
    songUrl:
      "https://audiomack.com/bnxn/song/i-alone-1821432?share-user-id=20481394",
    songImg: "https://i.audiomack.com/bnxn/52a1e5e83e.webp?width=416",
    releaseDate: "July 2, 2025",
  },
  {
    id: 8,
    artistName: "Odumodo Blvk",
    songTitle: "Grooving",
    songUrl:
      "https://audiomack.com/odumodublvck/song/grooving-5729447?share-user-id=20481394",
    songImg:
      "https://i.audiomack.com/odumodublvck/4f2ff2c907c6374b15661e072ae1d4b9c363da68432362fd885dc561c7af766c.jpeg?width=416",
    releaseDate: "October 5, 2025",
  },
  {
    id: 9,
    artistName: "Seyi Vibez",
    songTitle: "Man of the Year",
    songUrl:
      "https://audiomack.com/seyivibezmusic/song/man-of-the-year?share-user-id=20481394",
    songImg: "https://i.audiomack.com/free-vibez-1/55aa41cdb0.webp?width=416",
    releaseDate: "December 22, 2023",
  },
  {
    id: 10,
    artistName: "Rema",
    songTitle: "Fun",
    songUrl:
      "https://audiomack.com/heisrema/song/fun-0092296?share-user-id=20481394",
    songImg: "https://i.audiomack.com/paraziii-imd/112c9d7427.webp?width=416",
    releaseDate: "September 5, 2025",
  },
];

app.get('/artists', (req, res)=>{
    res.send(allArtists)
})

app.listen(4000, (req, res)=>{
    console.log('app is running on port 4000')
})