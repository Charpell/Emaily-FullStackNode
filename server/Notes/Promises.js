// Write a function to retrive a blog of json
// Make an ajax request! Use the 'fetch' function.
// 'https://rallycoding.herokuapp.com/api/music_albums'

function fetchAlbum() {
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json))
}

// async function fetchAlbums() {
//   const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
//   const json = await res.json();

//   console.log(json)
// };

const fetchAlbums = async () => {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json();

  console.log(json)
};

fetchAlbums();