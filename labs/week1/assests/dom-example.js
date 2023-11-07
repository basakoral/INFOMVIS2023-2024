let facts = [
	"Utrecht Centraal is the most important railway hub in the Netherlands, with over 1000 departures per day. Not only is the station important, but it is also very busy.",
	"Pope Adrianus VI was pope from January 1522 until he died in 1523. In the Netherlands, he is considered to be the only Dutch pope because he was born in Utrecht. However, when he was born, Utrecht was part of the Holy Roman Empire. This is why the Germans consider pope Adrianus VI to be the seventh German pope instead of the first Dutch pope.",
	"There isn’t one specific location where our royals are supposed to give birth. But Princess Beatrix gave birth to her three sons in a hospital in Utrecht. On the 27th of April, 1967, the current king of the Netherlands, King Willem Alexander, was born.",
	"The Dom tower is the tallest church tower in the Netherlands at a height of 112 meters, which is about 367 feet. It took several years to complete building the cathedral and its tower, and it was finished in 1382.",
	"The clocks in the Dom Tower aren’t small, and they certainly aren’t light either. With a combined weight of 32.000 kilos (70.547 lb), the clocks are pretty heavy. The heaviest clock in the Dom Tower is called Salvator, this clock weighs 8000 kilos (17.636 lb).",
	"Besides letting us know what time it is, the Dom Tower also provides music to the city. The repertoire changes four times a year. In order to change the repertoire in the tower alone, it takes five people and a whole day.",
	"The Netherlands has delivered several sports legends in the past few years. Some of these were born in Utrecht. To name a few, soccer legend Marco van Basten was born in Utrecht.",
	"Most people living in Utrecht are in their 20s or 30s, which is quite young. This is due to the fact Utrecht is a student city. Many students who attend Utrecht University or one of the other educational institutions in the city also live in Utrecht.",
	"Of course, you can refer to Utrecht simply as Utrecht, but just like the inhabitants, the city has some nicknames. The best-known nickname is '030', which are the standard first three numbers to dial if you want to reach someone living in Utrecht.",
	"Nijntje, or Miffy in English, is the most famous bunny in the Netherlands. Nijntje was created by a man called Dick Bruna, who was born in Utrecht. He wrote several books for children, starring Nijntje and her friends and family. These books turned out to be so successful that they are known globally. They were even translated into over fifty different languages. You can imagine the city is proud of this. Utrecht shows this with the Nijntje museum, but also with a Nijntje statue and special Nijntje traffic lights.",
	"It should come as no surprise that the Netherlands is big on cycling. Netherlands is known worldwide for its love of cycling, which makes it almost logical that the biggest bicycle parking in the whole world is located in our country.",
	"At the Oudegracht, you can find a poem that is not yet finished. On the bricks, there are letters, forming words and sentences. Each Saturday, another letter gets added. As a result, the poem continues to grow and is sometimes called infinitive.",
	"Just like most big cities in the Netherlands, Utrecht has its own soccer club. Although FC Utrecht is not very active in the international scene, they haven’t once been degraded from the highest-paid soccer competition in the Netherlands.",
	"Just like Amsterdam, Utrecht is a diverse city. Although you will mainly hear the Dutch language in stores and such, inhabitants of this beautiful city come from all over the world. About one in ten inhabitants have a migration background.",
	"Utrecht is home to a lot of students. This is due to the many universities and colleges you can find in the city. The biggest one is Utrecht University, which is not only the biggest in Utrecht but also in all of the Netherlands.",
	"If you like culture, Utrecht is a good city to visit. There are 17 museums, with a variety of themes. The most famous museums in Utrecht are the Nijntje museum and the Spoorwegmuseum. Those museums embody the things Utrecht is most famous for.",
	"The flag of Utrecht is a rectangle that is divided into a red rectangle and a white rectangle. This is because, in the past, they had civic militias which were part of a guild. This guild had two departments. One of the departments had a red pennon, and the other department had a white pennon.",
	"Every year the Netherlands Film Festival takes place in the city of Utrecht. The festival is quite a big event that celebrates everything that has to do with the film industry and lasts for ten days.",
	"During the Dutch Revolt, the northern parts of the Netherlands fought against the Spanish. Willem van Oranje led the Dutch fighters, and eventually, he got the Dutch provinces to sign a treaty saying they would stand up against the Spanish. This union was formed in Utrecht, giving the city an important role in the history of the Netherlands.",
	"There are several districts you can discover during your visit to Utrecht. The best-known one is the Dom Quarter, logically named this way because it’s where you can find the Dom church and the Dom Tower.",
	"If you want to grab a bite or a drink, there are plenty of places in Utrecht where you can go. Whether you are close to the shops, alongside the canals, or close to the station, with 350 restaurants and 150 pubs and cafes there is always something nearby that you like.",
	"Just like Amsterdam, Utrecht has quite some canals. The yards and wharf cellars make this city's canal district unique. The canals are there because Utrecht used to play an important role in international trade, but nowadays you can find mainly restaurants and cafes along the canals.",
	"Hoog Catharijne is a must-visit if you love to shop. This indoor shopping mall houses over 150 stores. The mall is connected to the station, making it easily accessible.",
	"De Inktpot is a brick building in the city of Utrecht. It was built in 1918 by NS, which is an important Dutch railway organization. Nowadays it is used as the headquarters of ProRail.",
	"Even though it only lasted for about half a year, in 1808 Utrecht was the capital city of the Netherlands. This was at the beginning of the Kingdom of the Netherlands. King Lodewijk Napoleon even had a palace built but moved to Amsterdam later that year when Amsterdam became the Dutch capital city.",
	"In 1922 the Domtorentjes were invented. These chocolates are made of chocolate with a soft filling and are made and sold by a bakery called Theo Blom. This bakery can be found at the Zadelstraat."
];

console.log(facts);


document.getElementById("infomvis2022-basics").onclick = () => {
	let randomFact = facts[Math.floor(Math.random()*facts.length)];

	// CREATE NEW PARAGRAPH-TAG
	let paragraph = document.createElement("p");
	paragraph.className = "generated-content";

	// CREATE PARAGRAPH CONTENT
	let node = document.createTextNode(randomFact);

	// ADD PARAGRAPH CONTENT TO TAG
	paragraph.appendChild(node);

	// ADD PARAGRAPH TO DIV-CONTAINER WITH ID "content"
	let element = document.getElementById("content");
	element.appendChild(paragraph);
}