import one from "../assets/img2/brazil.jpg";
import two from "../assets/img2/thailand.jpg";
import three from "../assets/img2/france.jpg";
import four from "../assets/img2/san-marino.jpg";
import five from "../assets/img2/china.jpg";
import six from "../assets/img2/japan.jpg";
import seven from "../assets/img2/poland.jpg";
import eight from "../assets/img2/palestine.jpg";
import nine from "../assets/img2/indonesia.jpg";
import ten from "../assets/img2/italy.jpg";
import eleven from "../assets/img2/nigeria.jpg";
import twelve from "../assets/img2/philippines.jpg";
import thirteen from "../assets/img2/laos.jpg";
import fourteen from "../assets/img2/seoul.jpg";
import fifteen from "../assets/img2/argentina.jpg";
import sixteen from "../assets/img2/saudi.jpeg";
import seventeen from "../assets/img2/belgium.jpg";
import eighteen from "../assets/img2/switzerland.jpg";
import nineteen from "../assets/img2/usa.jpeg";
import twenty from "../assets/img2/peru.jpg";
interface LocationData {
  id: number;
  title: string | null;
  location: string;
  rating: number;
  price: number;
  description: string;
  image: string;
}

const data: LocationData[] = [
  {
    id: 1,
    title: "Palácio do Parque Lage",
    location: "Brazil",
    rating: 1,
    price: 95,
    description:
      "The impressive structure is surrounded by lush greenery from the Tijuca Forest, and in the background, you can see the towering rock formation, topped by the famous Christ the Redeemer statue. The palace is a popular tourist destination, known for its beautiful architecture, cultural events, and as a gateway to trails that lead up to Corcovado. The fountain and gardens add to the charm of the site, making it a serene spot for visitors.",
    image: one,
  },
  {
    id: 2,
    title: "Wat Pho",
    location: "Thailand",
    rating: 35,
    price: 120,
    description:
      "a famous temple in Bangkok, Thailand, while tourists explore the site in the background. The temple's traditional Thai architecture, with ornate roofs and colorful stupas, adds to the serene and cultural ambiance.",
    image: two,
  },
  {
    id: 3,
    title: "Angel Statue Overlooking Lyon",
    location: "France",
    rating: 9,
    price: 230,
    description:
      "This image shows a striking green patina statue of an angel, located atop the Basilica of Notre-Dame de Fourvière in Lyon, France, overlooking the city's rooftops and the Saône River. The statue, representing the archangel Saint Michael, stands prominently with its wings spread wide, facing the densely packed buildings of Lyon's historic district. The contrast between the statue and the urban landscape below highlights Lyon's blend of religious heritage and modern city life.",
    image: three,
  },
  {
    id: 4,
    title: "Guaita Tower",
    location: "San Marino",
    rating: 19,
    price: 450,
    description:
      "The Guaita Tower, also known as the First Tower, is one of the three iconic towers of San Marino. Perched on the summit of Mount Titano, it offers stunning panoramic views of the surrounding landscape. The fortress dates back to the 11th century and is a symbol of the Republic of San Marino, showcasing medieval architecture and rich history. The scenic backdrop includes lush hills and the picturesque cityscape of San Marino.",
    image: four,
  },
  {
    id: 5,
    title: "The Great Wall of China at Dusk",
    location: "China",
    rating: 1,
    price: 300,
    description:
      "The Great Wall of China stretches across the rugged mountains, showcasing its ancient grandeur against a backdrop of fading light. The silhouette of the wall winds through the hills, highlighting its impressive architecture and historical significance. As the sun sets, the landscape is enveloped in soft hues, creating a serene and atmospheric scene, perfect for capturing the timeless beauty of one of the world's most iconic landmarks.",
    image: five,
  },
  {
    id: 6,
    title: "Senso-ji Temple at Night",
    location: "Japan",
    rating: 60,
    price: 150,
    description:
      "Senso-ji Temple, located in Tokyo, Japan, is beautifully illuminated at night, showcasing its iconic architecture. The vibrant red and gold hues of the temple contrast against the dark sky, creating a captivating atmosphere. Visitors stroll through the serene grounds, with soft lighting highlighting the traditional structures and pathways. This scene captures the blend of history and modernity, making it a perfect representation of Tokyo's cultural heritage.",
    image: six,
  },
  {
    id: 7,
    title: "Palais Garnier (Opéra Garnier) in Dramatic Light",
    location: "Poland",
    rating: 36,
    price: 250,
    description:
      "The Palais Garnier, also known as Opéra Garnier, is an architectural masterpiece located in Paris, France. This image captures the grandeur of the opera house under a moody sky, highlighting its intricate details and ornate façade. The dramatic lighting accentuates the building's baroque style, characterized by its grand dome and elaborate sculptures. The bustling street scene below adds a sense of life and movement, making this iconic landmark a focal point of Parisian culture and history.",
    image: seven,
  },
  {
    id: 8,
    title: "Mosaic Floor of the Church of Saint George",
    location: "Palestinian Territory",
    rating: 41,
    price: 180,
    description:
      "The intricate mosaic floor of the Church of Saint George showcases stunning geometric patterns and vibrant colors. Located in the ancient ruins of the church, this artwork reflects the craftsmanship of its creators, combining various motifs to create a harmonious design. The surrounding columns and architectural elements add to the historical significance of the site, offering a glimpse into the artistic heritage of the region. This mosaic serves as a testament to the rich cultural history and artistry of ancient civilizations.",
    image: eight,
  },
  {
    id: 9,
    title: "Guided Tour at Prambanan Temple",
    location: "Indonesia",
    rating: 11,
    price: 220,
    description:
      "A tour guide leads visitors through the stunning grounds of Prambanan Temple, a UNESCO World Heritage site in Indonesia. The towering Hindu temples in the background highlight the intricate architecture and historical significance of this ancient site. The guide, holding a flag for visibility, shares insights about the temple's rich history and cultural heritage. Surrounded by lush greenery, the scene captures the blend of education and exploration, inviting guests to appreciate the beauty of this remarkable landmark.",
    image: nine,
  },
  {
    id: 10,
    title: "St. Mark's Square, Venice",
    location: "Italy",
    rating: 10,
    price: 200,
    description:
      "This black-and-white photograph captures the iconic St. Mark's Square (Piazza San Marco) in Venice, Italy. The towering Campanile (bell tower) stands majestically beside the intricate façade of St. Mark's Basilica, showcasing the architectural beauty of the area. Visitors stroll through the square, which is alive with activity, while a photographer captures the moment. The timeless elegance of the scene highlights the charm and vibrancy of Venice, making it a beloved destination for travelers from around the world.",
    image: ten,
  },
  {
    id: 11,
    title: "The Rock Formations of Awhum",
    location: "Nigeria",
    rating: 29,
    price: 130,
    description:
      "This landscape showcases the impressive rock formations of Awhum, located in Nigeria. Towering above the lush greenery, these massive boulders create a striking contrast against the vibrant blue sky. Surrounded by dense vegetation and palm trees, the scene captures the natural beauty and rugged terrain of the area. Awhum is known for its unique geological features and serene environment, making it a popular destination for nature lovers and explorers seeking adventure in the heart of Nigeria.",
    image: eleven,
  },
  {
    id: 12,
    title: "The Chocolate Hills of Bohol",
    location: "Philippines",
    rating: 36,
    price: 95,
    description: "The Chocolate Hills are a unique geological formation located in Bohol, Philippines. This iconic tourist destination features over 1,200 symmetrical, cone-shaped hills that turn brown during the dry season, resembling chocolate mounds. Breathtakingly beautiful, the hills offer panoramic views from viewing platforms, attracting visitors for hiking, photography, and sightseeing. The surrounding lush landscape is rich in biodiversity, making it a perfect spot for nature lovers. The Chocolate Hills are not only a stunning natural wonder but also a symbol of Bohol's enchanting beauty and ecological significance.",
    image: twelve,
  },
  {
    id: 13,
    title: "The Buddha Park of Vientiane",
    location: "Laos",
    rating: 41,
    price: 400,
    description: "The Buddha Park, also known as Xieng Khuan, is a fascinating sculpture garden located just outside Vientiane, Laos. It features over 200 concrete statues representing various Buddhist and Hindu deities, with striking designs that evoke a sense of wonder and curiosity. The park's centerpiece is a large reclining Buddha, surrounded by numerous intricate sculptures nestled among lush greenery and serene lotus ponds. Visitors can explore the surreal landscape while marveling at the artistic expressions that reflect the rich cultural and spiritual heritage of the region. This unique site offers a peaceful escape and a glimpse into the blend of mythology and artistry.",
    image: thirteen,
  },
  {
    id: 14,
    title: "Traditional Korean Architecture: Hanok",
    location: "South Korea",
    rating: 11,
    price: 280,
    description:
      "This stunning image showcases the intricate details of a traditional Korean hanok, characterized by its vibrant colors and unique architectural features. The elegantly curved roof, adorned with ornate decorations, reflects the harmony and balance central to Korean design. The use of wooden beams and colorful paintings emphasizes the craftsmanship and cultural significance of the structure. Set against a clear blue sky, this architectural gem exemplifies the beauty of Korea's heritage, offering visitors a glimpse into the country's rich history and artistic traditions.",
    image: fourteen,
  },
  {
    id: 15,
    title: "The Obelisco de Buenos Aires",
    location: "Argentina",
    rating: 54,
    price: 320,
    description:
      "The Obelisco de Buenos Aires is a striking monument located in the heart of the Argentine capital. Standing at 67 meters tall, this iconic structure commemorates the 400th anniversary of the city's foundation. Surrounded by bustling streets and modern buildings, the obelisk serves as a focal point for both locals and tourists. Its clean lines and historical significance make it a prominent symbol of Buenos Aires, often featured in celebrations and events. The clear blue sky enhances the monument's grandeur, making it a must-visit landmark for anyone exploring the vibrant city.",
    image: fifteen,
  },
  {
    id: 16,
    title: "Luxury Overwater Villas in the Maldives",
    location: "Maldives",
    rating: 32,
    price: 190,
    description:
      "This breathtaking aerial view showcases a stunning resort in the Maldives, featuring luxurious overwater villas arranged in a circular formation. Surrounded by the crystal-clear turquoise waters of the Indian Ocean, the villas offer an idyllic escape for travelers seeking tranquility and natural beauty. The pristine sandy beaches and vibrant coral reefs enhance the allure of this tropical paradise. With its serene environment and luxurious amenities, this destination is perfect for relaxation, romance, and unforgettable experiences in one of the world's most beautiful settings.",
    image: sixteen,
  },
  {
    id: 17,
    title: "The Atomium",
    location: "Belgium",
    rating: 53,
    price: 360,
    description: "The Atomium is an iconic landmark located in Brussels, Belgium, designed to resemble an iron crystal magnified 165 billion times. This striking structure features nine interconnected spheres, each symbolizing an atom, and is a testament to modern architecture. The photo captures the reflective surfaces of the spheres against a backdrop of soft clouds, creating a captivating visual effect. Visitors can explore the interior of the Atomium, which offers exhibitions and panoramic views of the city. As a symbol of innovation and creativity, the Atomium continues to attract tourists and architecture enthusiasts from around the world.",
    image: seventeen,
  },
  {
    id: 18,
    title: "The Splendor of Lake Grimsel",
    location: "Switzerland",
    rating: 10,
    price: 410,
    description:
      "This stunning landscape captures the serene beauty of Lake Grimsel, nestled in the Swiss Alps. Surrounded by majestic mountains and lush greenery, the lake reflects the sky and the rugged terrain, creating a picturesque scene. The winding road alongside the lake invites travelers to explore this breathtaking region, known for its natural wonders and outdoor activities. With patches of snow still visible on the peaks, the image showcases the alpine charm and pristine environment that make Lake Grimsel a popular destination for nature lovers and adventure seekers alike.",
    image: eighteen,
  },
  {
    id: 19,
    title: "Alcatraz Island: The Infamous Prison",
    location: "California",
    rating: 11,
    price: 270,
    description:
      "Alcatraz Island, famously known as The Rock, is a historic site located in San Francisco Bay, California. This aerial view showcases the island's rugged landscape and the remnants of the infamous federal prison that operated from 1934 to 1963. Once home to notorious criminals, Alcatraz is now a popular tourist destination, offering guided tours that delve into its intriguing history. The island's striking cliffs, surrounded by the deep blue waters of the bay, create a dramatic backdrop, while the lighthouse and remaining structures highlight its storied past. Visitors come to explore the rich heritage and enjoy breathtaking views of the San Francisco skyline.",
    image: nineteen,
  },
  {
    id: 20,
    title: "Museo Rafael Larco Herrera: A Cultural Gem in Lima",
    location: "Peru",
    rating: 88,
    price: 120,
    description:
      "The Museo Rafael Larco Herrera, located in Lima, Peru, is renowned for its extensive collection of pre-Columbian art and artifacts. The museum is housed in a beautifully restored vice-royal building, surrounded by vibrant gardens adorned with colorful flowers. The striking white façade of the museum contrasts beautifully with the lush greenery, creating an inviting atmosphere for visitors. Inside, guests can explore a vast array of ceramics, textiles, and gold and silver items that tell the story of ancient Peruvian civilizations. This cultural treasure offers a fascinating glimpse into Peru's rich history and artistic heritage, making it a must-visit for anyone exploring the capital.",
    image: twenty,
  },
];
export default data;
