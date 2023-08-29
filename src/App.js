import './App.css';
import Alert from './components/Alert';
import HomeNav from './components/HomeNav';
import SearchBar from './components/SearchBar';
// import Slideshow from './components/Slideshow';
import ImageSlider from './components/ImageSilder';
import image1 from './images/SlideImages/1.jpg';
import image2 from './images/SlideImages/2.jpg';
import image3 from './images/SlideImages/3.jpg';
import image4 from './images/SlideImages/4.jpg';
import image5 from './images/SlideImages/5.jpg';
import image6 from './images/SlideImages/6.jpg';
import image7 from './images/SlideImages/7.jpg';
import image8 from './images/SlideImages/8.jpg';
import image9 from './images/SlideImages/9.jpg';
import image10 from './images/SlideImages/10.jpg';
import i from './images/Product/3.jpg';
import Banner from './components/Banner';
import ProductListing from './components/ProductListing';
import im1 from './images/Product/2.jpg';
import im from './images/Paints/1.jpg';
import CustomBanner from './components/CustomBanner';
import Paints from './components/Paints';
// import ToolsBanner from './components/ToolsBanner';
import DualSectionBanner from './components/DualSectionBanner';
import PopularTools from './components/PopularTools';
import Categories from './components/Categories';
import Wallpaper from './components/Wallpaper';
import Switches from './components/Switches';
import CompanyLogos from './components/CompanyLogos';

const products = [
  {
    image: im1,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: im1,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: im1,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: im1,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: im1,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: im1,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  // ... Other products
];
const paintProducts = [
  {
    image: im,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: im,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: im,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: im,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: im,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: i,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  // ... Other products
];
const Popproducts = [ 
  {
    image: i,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: i,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: i,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: i,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: i,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
  {
    image: i,
    company: 'Company A',
    name: 'Product 1',
    discount: 20,
    originalPrice: '$100',
    currentPrice: '$80',
  },
]
const companyLogos = [
  './images/CompanyLogos/1.png',
  './images/CompanyLogos/2.png',
  './images/CompanyLogos/3.png',
  './images/CompanyLogos/4.png',
  './images/CompanyLogos/5.png',
  './images/CompanyLogos/6.png',
];

function App() {
  return (
    <>
      <Alert/>
      <SearchBar/>
      <HomeNav/>
      {/* <Slideshow/> */}
      <ImageSlider images={[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]}/>
      <Banner/>
      <ProductListing products={products} />
      <CustomBanner/>
      <Paints products={paintProducts}/>
      {/* <ToolsBanner/> */}
      <DualSectionBanner imageUrl="./images/ToolsBanner/1.jpg"
        heading="20% OFF ON TOOLS"
        text="Drill, Hammer, cutter, screwdrivers, abrasives,.pliers,etc"
        buttonText="Shop Now"/>
        <PopularTools products={Popproducts}/>
        <Categories/>
        <Wallpaper imageUrl={require('./images/Banner/wall.jpg')}
        playstoreLink="https://play.google.com/store/apps"/>
        <Switches products={paintProducts}/>
        <CompanyLogos logos={companyLogos}/>
    </>
  );
}

export default App;
