import React from 'react'
import { useState } from 'react';


const PresidentialGallery = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const images = [
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/1-georgewashington-nihonga.jpeg', 
      caption: "First president George Washington<br><br>\
      Amidst founding's dawn,<br> George's vision led us on,<br>Liberty was born.<br><br>",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/3-thomasjefferson-nihonga.jpeg', 
      caption: "Third president Thomas Jefferson<br><br>\
      Thomas Jefferson's mind,<br>\
      Enlightened, words of a kind,<br>\
      Freedom's architect.<br><br>",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/7-andrewjackson-nihonga.jpeg', 
      caption: "Seventh president Andrew Jackson<br><br>\
      Jackson's presidency,<br>\
      Strong and polarizing years,<br>\
      History's mixed tale.<br><br>",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/13-millardfillmore-nihonga.jpeg', 
      caption: "Thirteenth president Millard Fillmore<br><br>\
      Fillmore's presidency,<br>\
      Compromise and strife he faced,<br>\
      History's enigma.<br><br>",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/16-abrahamlincoln-nihonga.jpeg', 
      caption: "Sixteenth president Abraham Lincoln<br><br>\
      Lincoln's steadfast grace,<br>\
      Emancipation's embrace,<br>\
      Union's saving face.<br><br>",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/26-theodoreroosevelt-nihonga.jpeg', 
      caption: "Twenty-sixth president Theodore \"Teddy\" Roosevelt<br><br>\
      Teddy's boundless zest,<br>\
      Rough Rider, nature's conquest,<br>\
      Conservation's best.<br><br>",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/32-franklindroosevelt-nihonga.jpeg', 
      caption: "Thirty-second president Franklin D. Roosevelt<br><br>\
      FDR's strong hand,<br>\
      New Deal through a troubled land,<br>\
      Hope in his command.<br><br>",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/37-richardnixon-nihonga.jpeg', 
      caption: "Thirty-seventh president Richard Nixon<br><br>\
      Nixon's complex role,<br>\
      Watergate's dark, troubled toll,<br>\
      History's shadowed soul.<br><br>",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/39-jimmycarter-nihonga.jpeg', 
      caption: "Thirty-ninth president Jimmy Carter<br><br>\
      Jimmy Carter's grace,<br>\
      Diplomacy and peace strive,<br>\
      History's peacemaker.<br><br>",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/40-ronaldreagan-nihonga.jpeg', 
      caption: "Fourtieth president Ronald Reagan<br><br>\
      Reagan's leadership,<br>\
      '80s strength, a nation's ship,<br>\
      Hope and change, he'd grip.<br><br>",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/42-billclinton-nihonga.jpeg', 
      caption: "Fourty-second president Bill Clinton<br><br>\
      Bill Clinton's charm gleams,<br>\
      '90s era, peace and dreams,<br>\
      Scandal's lasting streams.<br><br>",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/43-georgewbush-nihonga.jpeg', 
      caption: "Fourty-third president George W. Bush<br><br>\
      Freedom and terror,<br>\
      Homeland security's aim,<br>\
      Patriot Act passed.<br><br>",
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/44-barackobama-nihonga.jpeg', 
      caption: "Fourty-fourth president Barack Obama<br><br>\
      Obamacare's aim,<br>\
      Affordable healthcare gains,<br>\
      Legacy endures.<br><br>",
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/45-donaldtrump-nihonga-2.jpeg', 
      caption: "Fourty-fifth president Donald Trump<br><br>\
      In office he stood,<br>\
      Trump's term brought change and debate,<br>\
      A nation transformed.<br><br>",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/46-joebiden-nihonga.jpeg', 
      caption: "Fourty-sixth and current president Joe Biden<br><br>\
      Optimism waned,<br>\
      Truth concealed, nation in pain,<br>\
      Leadership betrayed.<br><br>",
      text: 'Project 1 Overview' },
  ];

  const handleImageClick = (e, src) => {
    e.preventDefault(); // Prevent the default behavior of the anchor
    setExpandedImage(src);
  };

  const handleCloseImage = () => {
    setExpandedImage(null);
  };

  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto p-2 grid gap-8 pt-8'>
        <h1 className='py-2 text-gray-700' style={{ marginTop: '100px' }}>
          US Presidents
        </h1>
        <p className='text-gray-600'>
        Explore our collection of presidentally-inpsired artworks. Each image below
        showcases a unique perspective on US presidents.  Click images to enlarge.
      </p>
        {images.map((image, index) => (
          <div key={index} className='relative'>
            <div
              className={`image-caption-container ${
                expandedImage === image.src ? 'expanded' : ''
              }`}
            >
              <div
                className='image-container'
                onClick={(e) => handleImageClick(e, image.src)}
              >
                <img className='image' src={image.src} alt={image.caption} />
              </div>
              {expandedImage === image.src && (
                <div className='expanded-image-container'>
                  <img
                    className='expanded-image'
                    src={image.src}
                    alt={image.caption}
                    onClick={handleCloseImage}
                  />
                </div>
              )}
              <div className='caption-container'>
                <div
                  className='image-caption'
                  dangerouslySetInnerHTML={{ __html: image.caption }}
                />
              </div>
            </div>
          </div>
        ))}
        {expandedImage && (
          <div className='overlay' onClick={handleCloseImage}>
            <img
              className='expanded-image'
              src={expandedImage}
              alt='Expanded Image'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PresidentialGallery;