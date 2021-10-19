import { useState, useEffect } from "react";

function App() {
  const [gif, setGif] = useState("");
  const [search, setSearch] = useState("");
  const apiKey = "5deA6LJCDuAav7Jui8AKzGMvHh3crT2j";
  const randomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`;

  const searchGifUrl = (keyword) => {
    return `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=5&offset=0&rating=g&lang=en
  `;
  };
  const generateRandom = () => {
    fetch(randomGifUrl)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        setGif(myJson.data.images.original.url);
      });
  };

  useEffect(() => {
    generateRandom();
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    const newSearchUrl = searchGifUrl(search);
    console.log(newSearchUrl);
    fetch(newSearchUrl)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setGif(myJson.data[0].images.original.url);
      });
  };

  return (
    <div className="App">
      <h1>Giphy</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          value={search}
          placeholder="Search gif"
          onChange={handleChange}
        />
        <input name="submit" type="submit" />
      </form>
      <input
        name="randomSubmit"
        type="submit"
        value="Random Gif"
        onClick={generateRandom}
      />
      <br />
      <img src={gif} alt="" />
    </div>
  );
}

export default App;
