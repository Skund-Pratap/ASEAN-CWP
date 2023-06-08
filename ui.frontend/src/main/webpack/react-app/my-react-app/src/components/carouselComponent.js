import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './carousel.css'; 



export default function CarouselComponent(props) {
  const jsonData = {
    ":items": {
      "carousel": {
        "id": "carousel-a91f5f49ef",
        "autoplay": false,
        "delay": 3000,
        "autopauseDisabled": false,
        ":itemsOrder": [
          "item_1602088910925",
          "item_1602088915359",
          "item_1602088918912"
        ],
        ":items": {
          "item_1602088910925": {
            "id": "teaser-5bff3bf531",
            "title": "LIVE MUSIC FROM HOME.",
            "description": "<p>Stream all your favorite artists shows on any device, any time.</p>",
            "linkURL": "/content/wknd-muzik/language-masters/en/home-page/learn-more.html",
            "actionsEnabled": true,
            "imageLinkHidden": false,
            "titleLinkHidden": true,
            "actions": [
              {
                "id": "teaser-5bff3bf531-cta-fb691cad30",
                "url": "/content/wknd-muzik/language-masters/en/home-page/learn-more.html",
                "title": "LEARN MORE",
                "dataLayer": {
                  "teaser-5bff3bf531-cta-fb691cad30": {
                    "@type": "nt:unstructured",
                    "dc:title": "LEARN MORE",
                    "xdm:linkURL": "/content/wknd-muzik/language-masters/en/home-page/learn-more.html"
                  }
                },
                ":type": "nt:unstructured"
              }
            ],
            "imagePath": "/content/wknd-muzik/language-masters/en/home-page/_jcr_content/root/container_161607354/carousel/item_1602088910925.coreimg.png/1685626701943/adobestock--17.png",
            ":type": "wknd-muzik/components/teaser",
            "dataLayer": {
              "teaser-5bff3bf531": {
                "@type": "wknd-muzik/components/teaser",
                "dc:description": "<p>Stream all your favorite artists shows on any device, any time.</p>",
                "dc:title": "LIVE MUSIC FROM HOME.",
                "xdm:linkURL": "/content/wknd-muzik/language-masters/en/home-page/learn-more.html",
                "repo:modifyDate": "2020-10-10T08:49:14Z"
              }
            },
            "cq:panelTitle": "Live Music From Home",
            ":type": "wknd-muzik/components/teaser"
          },
          "item_1602088915359": {
            "id": "teaser-edd688d785",
            "title": "SEE ALL THE DETAILS",
            "description": "<p>Get a better view than any seat with close up shots</p>",
            "linkURL": "/content/wknd-muzik/language-masters/en/home-page/learn-more.html",
            "actionsEnabled": true,
            "imageLinkHidden": false,
            "titleLinkHidden": true,
            "actions": [
              {
                "id": "teaser-edd688d785-cta-339509bf7f",
                "url": "/content/wknd-muzik/language-masters/en/home-page/learn-more.html",
                "title": "LEARN MORE",
                "dataLayer": {


 "teaser-edd688d785-cta-339509bf7f": {
                    "@type": "nt:unstructured",
                    "dc:title": "LEARN MORE",
                    "xdm:linkURL": "/content/wknd-muzik/language-masters/en/home-page/learn-more.html"
                  }
                },
                ":type": "nt:unstructured"
              }
            ],
            "imagePath": "/content/wknd-muzik/language-masters/en/home-page/_jcr_content/root/container_161607354/carousel/item_1602088915359.coreimg.png/1685627024613/adobestock--7.png",
            ":type": "wknd-muzik/components/teaser",
            "dataLayer": {
              "teaser-edd688d785": {
                "@type": "wknd-muzik/components/teaser",
                "dc:description": "<p>Get a better view than any seat with close up shots</p>",
                "dc:title": "SEE ALL THE DETAILS",
                "xdm:linkURL": "/content/wknd-muzik/language-masters/en/home-page/learn-more.html",
                "repo:modifyDate": "2020-10-10T08:50:08Z"
              }
            },
            "cq:panelTitle": "See All The Details",
            ":type": "wknd-muzik/components/teaser"
          },
          "item_1602088918912": {
            "id": "teaser-942f6dd821",
            "title": "GO BACKSTAGE",
            "description": "<p>Get behind-the-scene footage before, during and after the event!</p>",
            "linkURL": "/content/wknd-muzik/language-masters/en/home-page/learn-more.html",
            "actionsEnabled": true,
            "imageLinkHidden": false,
            "titleLinkHidden": true,
            "actions": [
              {
                "id": "teaser-942f6dd821-cta-e4da71d5a3",
                "url": "/content/wknd-muzik/language-masters/en/home-page/learn-more.html",
                "title": "LEARN MORE",
                "dataLayer": {
                  "teaser-942f6dd821-cta-e4da71d5a3": {
                    "@type": "nt:unstructured",
                    "dc:title": "LEARN MORE",
                    "xdm:linkURL": "/content/wknd-muzik/language-masters/en/home-page/learn-more.html"
                  }
                },
                ":type": "nt:unstructured"
              }
            ],
            "imagePath": "/content/wknd-muzik/language-masters/en/home-page/_jcr_content/root/container_161607354/carousel/item_1602088918912.coreimg.png/1685627027407/adobestock--12.png",
            ":type": "wknd-muzik/components/teaser",
            "dataLayer": {
              "teaser-942f6dd821": {
                "@type": "wknd-muzik/components/teaser",
                "dc:description": "<p>Get behind-the-scene footage before, during and after the event!</p>",
                "dc:title": "GO BACKSTAGE",
                "xdm:linkURL": "/content/wknd-muzik/language-masters/en/home-page/learn-more.html",
                "repo:modifyDate": "2020-10-10T08:51:44Z"
              }
            },
            "cq:panelTitle": "Go Backstage",
            ":type": "wknd-muzik/components/teaser"
          }
        }
      }
    }
  };
  const carousel = jsonData[":items"]["carousel"];
  const items = jsonData[":items"]["carousel"][":items"];


  

  // Render individual carousel items
  const renderCarouselItems = () => {
    const handleImageLoad = (event) => {
        event.target.classList.add('loaded');
    }

    return Object.values(items).map((item) => (
        <div key={item.id} className="carousel-item">
          <div className="carousel-content">
          <div className="carousel-title">{item.title} </div>
            <div className= "carousel-description" dangerouslySetInnerHTML={{ __html: item.description }}></div>
            {item.actionsEnabled &&
            item.actions &&
            item.actions.map((action) => (
            <div className="button-container">
                <button key={action.id} onClick={() => window.location.href = action.url} className={`carousel-button ${action.className}`}>
                 {action.title}
            </button>
            </div>
             ))}
          </div>
          <div className="carousel-image">
            <img src={`http://localhost:4502/${item.imagePath}`} alt={item.title} onLoad={handleImageLoad} className="carousel-image" />
          </div>
        </div>
      ));
        
  };



  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: carousel.autoplay,
    autoplaySpeed: carousel.delay,
  };

  return (
    <div className="carousel">
      <Slider {...carouselSettings}>
        {renderCarouselItems()}
      </Slider>
    </div>
  );
}
