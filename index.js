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
  {
    id: 11,
    artistName: 'Seyi Vibez',
    songTitle: 'Tortoise Mambo',
    songUrl: 'https://audiomack.com/seyivibezmusic/song/tortoise-mambo-9589364?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/seyivibezmusic/7a2fd959e2.webp?width=416',
    releaseDate: 'November 13, 2025'
  },
  {
    id: 12,
    artistName: 'Seyi Vibez',
    songTitle: 'Fuji House',
    songUrl: 'https://audiomack.com/seyivibezmusic/song/fuji-house-1059808?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/seyivibezmusic/7a2fd959e2.webp?width=416',
    releaseDate: 'November 13, 2025'
  },
  {
    id: 13,
    artistName: 'Seyi Vibez',
    songTitle: 'Fuji Moto',
    songUrl: 'https://audiomack.com/seyivibezmusic/song/fuji-moto-6990371?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/seyivibezmusic/7a2fd959e2.webp?width=416',
    releaseDate: 'November 13, 2025'
  },
  {
    id: 14,
    artistName: 'Seyi Vibez',
    songTitle: 'Up',
    songUrl: 'https://audiomack.com/seyivibezmusic/song/up-7540571?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/seyivibezmusic/7a2fd959e2.webp?width=416',
    releaseDate: 'November 13, 2025'
  },
  {
    id: 15,
    artistName: 'Zlatan Ibile',
    songTitle: 'Demons',
    songUrl: 'https://audiomack.com/zlatan_ibile/song/demons?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/zlatan_ibile/5a9e082411.webp?width=416',
    releaseDate: 'October 17, 2025'
  },
  {
    id: 16,
    artistName: 'Zlatan Ibile',
    songTitle: 'Paypal',
    songUrl: 'https://audiomack.com/zlatan_ibile/song/paypal?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/zlatan_ibile/5a9e082411.webp?width=416',
    releaseDate: 'October 17, 2025'
  },
  {
    id: 17,
    artistName: 'Zlatan Ibile',
    songTitle: 'Odeshi',
    songUrl: 'https://audiomack.com/zlatan_ibile/song/odeshi?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/zlatan_ibile/5a9e082411.webp?width=416',
    releaseDate: 'October 17, 2025'
  },
  {
    id: 18,
    artistName: 'Zlatan Ibile',
    songTitle: 'Alpha & Omega',
    songUrl: 'https://audiomack.com/zlatan_ibile/song/alpha-omega?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/zlatan_ibile/5a9e082411.webp?width=416',
    releaseDate: 'October 17, 2025'
  },
  { 
    id: 19,
    artistName: 'Mavo',
    songTitle: 'Tumoweto',
    songUrl: 'https://audiomack.com/mavo1/song/tumo-weto?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/mavok1/be585e6d51.webp?width=416',
    releaseDate: 'December 1, 2023'
  },
  {
    id: 20,
    artistName: 'Ckay ft Mavo',
    songTitle: 'Body',
    songUrl: 'https://audiomack.com/ckay_yo/song/body-danz-7300867?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/ckay_yo/3c005124ab.webp?width=416',
    releaseDate: 'October 23, 2025'
  },
  {
    id: 21,
    artistName: 'Ayomaff',
    songTitle: 'Tension',
    songUrl: 'https://audiomack.com/ayomaff/song/tension-0538885?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/ayomaff/b5caa8fa06.webp?width=416',
    releaseDate: 'November 19, 2025'
  },
  {
    id: 22,
    artistName: 'Rybeena',
    songTitle: 'Spaghetti',
    songUrl: 'https://audiomack.com/rybeena_/song/spaghetti-1860282?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/arewavibes/7bcba9c4f6.webp?width=416',
    releaseDate: 'October 8, 2025'
  },
  {
    id: 23,
    artistName: 'Adekunle Gold',
    songTitle: 'Many People',
    songUrl: 'https://audiomack.com/adekunlegold/song/many-people-1?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/adekunlegold/9bf803fadf.webp?width=416',
    releaseDate: 'October 3, 2025'
  },
  {
    id: 24,
    artistName: 'Fireboy DML',
    songTitle: 'Dopamine',
    songUrl: 'https://audiomack.com/fireboydml/song/dopamine-9382749?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/fireboydml/18534363-1.webp?width=416',
    releaseDate: 'July 23, 2025'
  },
  {
    id: 25,
    artistName: 'Balloranking',
    songTitle: 'Jungle',
    songUrl: 'https://audiomack.com/badboyranking/song/jungle-0114564?share-user-id=20481394',
    songImg: 'https://i.audiomack.com/badboyranking/9610049eaa.webp?width=416',
    releaseDate: 'November 21, 2025'
  },
];

app.get('/artists', (req, res)=>{
    res.send(allArtists)
})

app.post('/artists', (req, res)=>{
    res.send(allArtists)
})

app.listen(4000, (req, res)=>{
    console.log('app is running on port 4000')
})