import Banner from '../components/HomeThree/Banner';
import Features from '../components/HomeThree/Features';
import TokensArea from '../components/HomeThree/TokensArea';
import CryptocurrencyArea from '../components/HomeThree/CryptocurrencyArea';
import OurFeature from '../components/Common/OurFeature';
import Portfolio from '../components/Common/Portfolio';
import BuySell from '../components/Common/BuySell';
import AppDownload from '../components/Common/AppDownload';
import AdvisorArea from '../components/Common/AdvisorArea';
import RegisterArea from '../components/Common/RegisterArea';
import Countdown from 'react-countdown';

const Index = () => {
  return (
    <>
      <Banner />
      <Features />
     
      <Countdown date={Date.now() + 80000000000} renderer={TokensArea} />
      <CryptocurrencyArea />
      <OurFeature />
      <Portfolio bgColor='bg-fff0ee' shape={true} />
      <BuySell />
      <AppDownload />
      <AdvisorArea />
      <RegisterArea
        bgGradient='bg-gradient-image'
        blackText='black-text'
        ctaImage='/images/man-with-ipad.png'
      />
    </>
  );
};

export default Index;
