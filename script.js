document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion-header");
  
    accordions.forEach((header) => {
      header.addEventListener("click", () => {
        const currentBody = header.nextElementSibling;
        const currentlyActiveHeader = document.querySelector(
          ".accordion-header.active"
        );
  
        if (currentlyActiveHeader && currentlyActiveHeader !== header) {
          currentlyActiveHeader.classList.remove("active");
          currentlyActiveHeader.nextElementSibling.classList.remove("active");
        }
  
        header.classList.toggle("active");
        currentBody.classList.toggle("active");
      });
    });
  });
  
   /*Musicas Lista */
    document.addEventListener('DOMContentLoaded', () => {
      const musicList = [
          { title: "What Do You Mean?", artist: "Justin Bieber", img: "https://i.ibb.co/10yfHG3/img1.jpg" },
          { title: "Lush Life", artist: "Zara Larsson", img: "https://i.ibb.co/PDdMVpn/img2.jpg" },
          { title: "Trapsoul", artist: "Bryson Tiler", img: "https://i.ibb.co/phhV7x0/img3.jpg" },
          { title: "Sit Still, Look Pretty", artist: "Daya", img: "https://i.ibb.co/NZb1cgh/img4.jpg" },
          { title: "What Do You Mean?", artist: "Justin Bieber", img: "https://i.ibb.co/10yfHG3/img1.jpg" },
          { title: "Lush Life", artist: "Zara Larsson", img: "https://i.ibb.co/PDdMVpn/img2.jpg" },
          { title: "Trapsoul", artist: "Bryson Tiler", img: "https://i.ibb.co/phhV7x0/img3.jpg" },
      ];
  
      const playlistList = [
          { title: "This Is Stray Kids", img: "https://th.bing.com/th/id/R.d21c3904286c496d2e73fc732681490e?rik=4VW99SPrXqMOIw&pid=ImgRaw&r=0" },
          { title: "This is Djonga", img: "https://th.bing.com/th/id/OIP.kgzKhJvYphj8ceTs__ksXQHaHa?rs=1&pid=ImgDetMain" },
          { title: "Top Brasil", img:"https://th.bing.com/th/id/OIP.ACKe7G-J_yT5L0RRVJnFrQHaHa?rs=1&pid=ImgDetMain"},
          { title: "This Is One Direction", img:"https://i.scdn.co/image/ab67706f00000002b75cdf3f088c129cc350c0f8"},
          { title: "This Is Stray Kids", img: "https://th.bing.com/th/id/R.d21c3904286c496d2e73fc732681490e?rik=4VW99SPrXqMOIw&pid=ImgRaw&r=0" },
          { title: "This is Djonga", img: "https://th.bing.com/th/id/OIP.kgzKhJvYphj8ceTs__ksXQHaHa?rs=1&pid=ImgDetMain" },
          { title: "Top Brasil", img:"https://th.bing.com/th/id/OIP.ACKe7G-J_yT5L0RRVJnFrQHaHa?rs=1&pid=ImgDetMain"},
      ];
  
      const newReleases = [
          { title: "APT.", artist: "Rosé ft. Bruno Mars", img: "https://static.qobuz.com/images/covers/hc/lp/yz2ronji2lphc_600.jpg" },
          { title: "Nonsense", artist: "Delacruz ", img: "https://th.bing.com/th/id/OIP.VcLjAOmE7mnmjb3rCwV92AAAAA?rs=1&pid=ImgDetMain" },
          { title: "Annie.", artist: "Wave To Earth ", img:"https://th.bing.com/th/id/OIP.YlNNhZGB1XwoRBsjEA2cogHaHa?rs=1&pid=ImgDetMain"},
          { title: "Presentão ", artist: "Grupo Menos é Mais ", img:"https://www.panoramago.com.br/images/noticias/730/71872146ca1db097b185395e49ffbed0.jpg"},
          { title: "APT.", artist: "Rosé ft. Bruno Mars", img: "https://static.qobuz.com/images/covers/hc/lp/yz2ronji2lphc_600.jpg" },
          { title: "Nonsense", artist: "Delacruz ", img: "https://th.bing.com/th/id/OIP.VcLjAOmE7mnmjb3rCwV92AAAAA?rs=1&pid=ImgDetMain" },
          { title: "Annie.", artist: "Wave To Earth ", img:"https://th.bing.com/th/id/OIP.YlNNhZGB1XwoRBsjEA2cogHaHa?rs=1&pid=ImgDetMain"},
      ];
  
      const musicListContainer = document.getElementById('music-list');
      const playlistListContainer = document.getElementById('playlist-list');
      const releaseListContainer = document.getElementById('release-list');
  
      musicList.forEach(music => {
          const musicItem = document.createElement('div');
          musicItem.className = 'music-item';
          musicItem.innerHTML = `<img src="${music.img}" alt="${music.title}"><h3>${music.title}</h3><p>${music.artist}</p>`;
          musicListContainer.appendChild(musicItem);
      });
  
      playlistList.forEach(playlist => {
          const playlistItem = document.createElement('div');
          playlistItem.className = 'playlist-item';
          playlistItem.innerHTML = `<img src="${playlist.img}" alt="${playlist.title}"><h3>${playlist.title}</h3>`;
          playlistListContainer.appendChild(playlistItem);
      });
  
      newReleases.forEach(release => {
          const releaseItem = document.createElement('div');
          releaseItem.className = 'release-item';
          releaseItem.innerHTML = `<img src="${release.img}" alt="${release.title}"><h3>${release.title}</h3><p>${release.artist}</p>`;
          releaseListContainer.appendChild(releaseItem);
      });
  });