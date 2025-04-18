const characters = [
  { name: "Luke Skywalker", homeworld: "Tatooine", image: "https://media.gettyimages.com/id/607402186/photo/american-actor-mark-hamill-on-the-set-of-star-wars-episode-iv-a-new-hope-written-directed-and.jpg?s=612x612&w=gi&k=20&c=2VEAhJYc6VQE1oqxuhvWCUf8iWdtJ4Jt31bCMiYwGdM=" },
  { name: "Leia Organa", homeworld: "Alderaan", image: "https://media.gettyimages.com/id/472543744/photo/berlin-germany-a-wax-figure-of-the-actress-carrie-fisher-as-the-star-wars-character-leia.jpg?s=612x612&w=gi&k=20&c=0JSYRjAAjuj1NOUuy9fbnampD0VqBGuM0AEHOgd63JE=" },
  { name: "Han Solo", homeworld: "Corellia", image: "https://www.shutterstock.com/image-photo/jan-20-2021-scene-star-260nw-1898814226.jpg" },
  { name: "Chewbacca", homeworld: "Kashyyyk", image: "https://media.gettyimages.com/id/1506417968/photo/peter-mayhew-as-the-wookie-chewbacca-in-star-wars-episode-iv-a-new-hope-1977.jpg?s=612x612&w=gi&k=20&c=gY0pWy1kGSZla21l-SUjy0qbSe3x7OkVv_rVFDxFElI=" },
  { name: "Rey", homeworld: "Jakku", image: "https://media.gettyimages.com/id/587568834/photo/london-england-daisy-ridley-is-unveiled-as-the-new-wax-figure-character-rey-from-star-wars-the.jpg?s=612x612&w=gi&k=20&c=nwds4LRzyxFLD4Zfgq7BAw5uF4TX6pKgynQgey7UM2s=" },
  { name: "Yoda", homeworld: "Other", image: "https://thumbs.dreamstime.com/b/yoda-madame-tussauds-london-star-wars-exposition-55707556.jpg" },
  { name: "Darth Vader", homeworld: "Tatooine", image: "https://www.shutterstock.com/image-photo/dart-vader-dark-light-saber-600nw-2598175847.jpg" },
  { name: "Rodialı", homeworld: "Rodia", image: "https://imagedelivery.net/F5KOmplEz0rStV2qDKhYag/1978805c-5411-428e-44a8-9dec0a496600/tn" },
  { name: "Naboo", homeworld: "Naboo", image: "" },
  { name: "Bestine", homeworld: "Bestine", image: "" },
  { name: "Stewjon", homeworld: "Stewjon", image: "" },
];

const buttonsContainer = document.getElementById("buttons-container");
const characterList = document.getElementById("character-list");


const uniqueHomeworlds = [...new Set(characters.map(c => c.homeworld))];


uniqueHomeworlds.forEach(homeworld => {
  const btn = document.createElement("button");
  btn.textContent = homeworld;
  btn.addEventListener("click", () => {
    showCharacters(homeworld);
  });
  buttonsContainer.appendChild(btn);
});

function showCharacters(homeworld) {

  characterList.innerHTML = "";

 
  const filtered = characters.filter(c => c.homeworld === homeworld);
  filtered.forEach(c => {
    const card = document.createElement("div");
    card.className = "character-card";
    card.innerHTML = `
      <h3>${c.name}</h3>
      <p><strong>Anavatan:</strong> ${c.homeworld}</p>
      <img src="${c.image}" alt="${c.name}" />
    `;
    characterList.appendChild(card);
  });
}
