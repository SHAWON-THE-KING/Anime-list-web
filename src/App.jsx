import { useState } from 'react'
import Navbar from './components/Navbar'
import AnimeCard from './components/Card'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 px-10 md:grid-cols-3 lg:grid-cols-4 py-8 w-full mx-auto xl:grid-cols-5">
      <AnimeCard
        title="One-Punch Man Season 3"
        genres="Action · Adult Cast · Comedy · Parody · Super Power"
        image="https://u.livechart.me/anime/11382/poster_image/080e44deada261102e3d6c4631802564.webp/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={7.60}
        studio="J.C.STAFF"
        schedule="Oct 12, 2025 at 8:45pm +06"
        mangaLink="#"
        mangaText="Manga"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />
      
      <AnimeCard
        title="SPY x FAMILY Season 3"
        genres="Action - Childcare - Comedy"
        image="https://u.livechart.me/anime/12692/poster_image/70310ef114fb4821ac452341ca84a240.webp/small.jpg"
        countdownDate="2025-11-10T20:45:00+09:00"
        rating={8.60}
        studio="WIT STUDIO X CloverWorks"
        schedule="Oct 4, 2025 at 8:00pm +06"
        mangaLink="#"
        mangaText="Manga"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />

      <AnimeCard
        title="Gachiakuta"
        genres="Action - Fantasy"
        image="https://u.livechart.me/anime/12697/poster_image/f9851587661198d1decac4bdaa590671.webp/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={8.10}
        studio="bones film"
        schedule="Oct 12, 2025 at 8:45pm +06"
        mangaLink="#"
        mangaText="Manga"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />

      <AnimeCard
        title="Campfire Cooking in Another World with My Absurd Skill Season 2"
        genres="Adventure - Comedy - Fantasy - Gourmet - Isekai"
        image="https://u.livechart.me/anime/12388/poster_image/100ec6f23cebb7e92642fb2ad225ebae.webp/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={7.98}
        studio="J.C.STAFF"
        schedule="Oct 12, 2025 at 8:45pm +06"
        mangaLink="#"
        mangaText="Manga"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />
      <AnimeCard
        title="My Status as an Assassin Obviously Exceeds the Hero's"
        genres="Action - Adventure - Fantasy - Isekai"
        image="https://u.livechart.me/anime/13046/poster_image/ae865a9999d0173b49d3f9b04a0c12d1.webp/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={7.60}
        studio="MAPPA"
        schedule="Oct 12, 2025 at 8:45pm +06"
        mangaLink="#"
        mangaText="Manga"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />
      <AnimeCard
        title="One Piece"
        genres="Action - Adventure - Comedy - Drama - Fantasy - Super Power"
        image="https://u.livechart.me/anime/321/poster_image/b121b16f4061e35e27b6d758b2e9503a.jpg/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={9.60}
        studio="Toei Animation"
        schedule="Began Fall 1999"
        mangaLink="#"
        mangaText="Manga"
        manga='eps??

'
        episodeInfo="EP1149 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />
      <AnimeCard
        title="My Hero Academia FINAL SEASON"
        genres="Action - School - Super Power"
        image="https://u.livechart.me/anime/12882/poster_image/f712732196e0ac801b6e7b749396e5c4.webp/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={7.60}
        studio="bones film"
        schedule="Oct 12, 2025 at 8:45pm +06"
        mangaLink="#"
        mangaText="Manga"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />
      <AnimeCard
        title="My Gift Lvl 9999 Unlimited Gacha:"
        genres="Action · Fantasy"
        image="https://u.livechart.me/anime/12922/poster_image/31c9f52e62d90e47911eb9f577cecd01.webp/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={7.60}
        studio="J.C.STAFF"
        schedule="Oct 12, 2025 at 8:45pm +06"
        mangaLink="#"
        mangaText="Light Novel"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />
      <AnimeCard
        title="May I Ask For One Final Thing?"
        genres="Action - Comedy - Fantasy - Romance - Villainess"
        image="https://u.livechart.me/anime/12839/poster_image/d943ec13467180f29f0141e03be438ea.webp/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={7.60}
        studio="LIDENFILMS"
        schedule="Oct 12, 2025 at 8:45pm +06"
        mangaLink="#"
        mangaText="Manga"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />
      <AnimeCard
        title="Let This Grieving Soul Retire Cour 2"
        genres="Action · Adult Cast · Comedy · Parody · Super Power"
        image="https://u.livechart.me/anime/12994/poster_image/7f72af4d5f75090a3f334c3d49dde00e.webp/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={7.60}
        studio="ZERO-G"
        schedule="Oct 12, 2025 at 8:45pm +06"
        mangaLink="#"
        mangaText="Manga"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />
      <AnimeCard
        title="A Wild Last Boss Appeared!"
        genres="Action · Adult Cast · Comedy · Parody · Super Power"
        image="https://u.livechart.me/anime/12806/poster_image/1e30fd6e3d747228061c9ba8576bcb11.webp/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={7.60}
        studio="J.C.STAFF"
        schedule="Oct 12, 2025 at 8:45pm +06"
        mangaLink="#"
        mangaText="Manga"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />
      <AnimeCard
        title="A Gatherer's Adventure in Isekai"
        genres="Action · Adult Cast · Comedy · Parody · Super Power"
        image="https://u.livechart.me/anime/13077/poster_image/28bf7cf572b12afbfc537661814e5b52.webp/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={7.60}
        studio="J.C.STAFF"
        schedule="Oct 12, 2025 at 8:45pm +06"
        mangaLink="#"
        mangaText="Manga"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />
      <AnimeCard
        title="The Banished Court Magician Aims to Become the Strongest"
        genres="Action · Adult Cast · Comedy · Parody · Super Power"
        image="https://u.livechart.me/anime/13104/poster_image/8ceb1941fb5892cb3f085c6857a7214a.webp/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={7.60}
        studio="J.C.STAFF"
        schedule="Oct 12, 2025 at 8:45pm +06"
        mangaLink="#"
        mangaText="Manga"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />
      <AnimeCard
        title="The Banished Court Magician Aims to Become the Strongest"
        genres="Action · Adult Cast · Comedy · Parody · Super Power"
        image="https://u.livechart.me/anime/13104/poster_image/8ceb1941fb5892cb3f085c6857a7214a.webp/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={7.60}
        studio="J.C.STAFF"
        schedule="Oct 12, 2025 at 8:45pm +06"
        mangaLink="#"
        mangaText="Manga"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />
      <AnimeCard
        title="The Banished Court Magician Aims to Become the Strongest"
        genres="Action · Adult Cast · Comedy · Parody · Super Power"
        image="https://u.livechart.me/anime/13104/poster_image/8ceb1941fb5892cb3f085c6857a7214a.webp/small.jpg"
        countdownDate="2025-11-12T20:45:00+06:00"
        rating={7.60}
        studio="J.C.STAFF"
        schedule="Oct 12, 2025 at 8:45pm +06"
        mangaLink="#"
        mangaText="Manga"
        manga='eps × 24m

'
        episodeInfo="EP5 · TV (JP)"
        description="No synopsis has been added to this title."
        icons={[
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="internet">🌐</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="user">👤</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
          <a href="#"><span role="img" aria-label="action">⚡</span></a>,
        ]}
      />

      </div>


<Footer/>
    </>
  )
}

export default App
