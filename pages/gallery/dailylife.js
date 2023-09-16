import React from 'react'
import { useState } from 'react';


const DailyLifeGallery = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const images = [
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/dailylife/clothes-shopping1.jpeg', 
      caption: "21, Forever<br><br>\
      Fresh threads on display,<br>\
      Choices to brighten the day,<br>\
      Style in every way.", 
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/dailylife/traffic1.jpeg', 
      caption: "Seattle-bound Traffic<br><br>\
      Traffic's endless flow,<br>\
      Seattle's streets in a tight grip,<br>\
      Time moves painfully slow.", 
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/dailylife/ryan-macncheese-1.jpeg', 
      caption: "Curator Ryan Enjoys a Bowl of Mac 'n Cheese<br><br>\
      Creamy mac 'n cheese,<br>\
      Golden noodles, pure delight,<br>\
      Comfort in each bite.",
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/dailylife/woman-checking-gram-1.jpeg', 
      caption: "Checking \"The 'gram\"<br><br>\
      Scrolling Instagram,<br>\
      Captured moments, life's highlight,<br>\
      Digital dreamland.",
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/dailylife/thomas-ukiyoe-1.jpeg', 
      caption: "Thomas the Cat in Ukiyoe-style<br><br>\
      Orange fur so bright,<br>\
      Whiskers twitch in the moonlight,<br>\
      Purr and prowl the night.", 
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/dailylife/ryan-skateboarding-1.jpeg', 
      caption: "Do a Kick-Flip<br><br>\
      Skateboard underfoot,<br>\
      Wind in hair, feeling so good,<br>\
      Concrete waves, we cruise.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/dailylife/gibson-les-paul-1.jpeg', 
      caption: "Gibson Les Paul<br><br>\
      Gibson Les Paul shines,<br>\
      Six strings sing in timeless lines,<br>\
      Legendary design.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/dailylife/dating-1.jpeg', 
      caption: "Timeless Romance<br><br>\
      Love's uncertain dance,<br>\
      Hearts entwined in sweet romance,<br>\
      Dating's hopeful chance.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/dailylife/woman-checking-gram-2.jpeg', 
      caption: "Checking \"The 'gram\" Again<br><br>\
      Endless Instagram,<br>\
      Compulsive taps, no escape,<br>\
      Screens steal my free time.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/dailylife/ryan-tacos-1.jpeg', 
      caption: "Ryan Enjoying Tacos<br><br>\
      Fresh tacos delight,<br>\
      Salsa's heat, flavors unite,<br>\
      Taste of pure delight.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/dailylife/heatherwiththomas-1.jpeg', 
      caption: "Heather with Thomas<br><br>\
      Girl and feline friend,<br>\
      Whiskers purr, love without end,<br>\
      In their world, transcends.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/dailylife/woman-doing-yoga-1.jpeg', 
      caption: "Woman Doing Yoga<br><br>\
      Flowing in stillness,<br>\
      Body, mind, spirit's oneness,<br>\
      Yoga's gentle grace.", 
      text: 'Project 1 Overview' },
  ];

  const handleImageClick = (e, src) => {
    e.preventDefault(); // Prevent the default behavior of the anchor
    setExpandedImage(src);
  };

  const handleCloseImage = () => {
    setExpandedImage(null);
  };
  const halfLength = Math.ceil(images.length / 2);
  const column1Images = images.slice(0, halfLength);
  const column2Images = images.slice(halfLength);

  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto p-2 grid gap-8 pt-8'>
        <h1 className='py-2 text-gray-700' style={{ marginTop: '100px' }}>
          Slice of Life
        </h1>
        <p className='text-gray-600'>
          Explore our slice of life gallery.  Images of modern life with a touch of classic Japanese art.  Click images to enlarge.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Column 1 */}
          <div>
            {column1Images.map((image, index) => (
              <div key={`column1-${index}`} className='relative'>
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
          </div>
          {/* Column 2 */}
          <div>
            {column2Images.map((image, index) => (
              <div key={`column2-${index}`} className='relative'>
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
          </div>
        </div>
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
export default DailyLifeGallery;