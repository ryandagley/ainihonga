import React from 'react'
import { useState } from 'react';


const BiblicalGallery = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const images = [
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/biblical/crownofthorns1.jpeg', 
      caption: "Jesus wearing the crown of thorns<br><br>\
      Thorns upon his brow,<br>\
      Sacrifice for all mankind,<br>\
      Love's thorned path he'd plow.<br><br>\
      Reference: Matthew 27:29",
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/biblical/exodus2.jpeg', 
      caption: "Adam and Eve depart Eden<br><br>\
      Eden's gates now closed,<br>\
      Adam and Eve in exile,<br>\
      World unknown, exposed.<br><br>\
      Reference: Genesis 3:22-24",
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/biblical/davidgoliath1.jpeg', 
      caption: "David fights the giant Goliath<br><br>\
      In slingshot's embrace,<br>\
      David stood against the giant,<br>\
      Faith's triumph took place.<br><br>\
      Reference: 1 Samuel 17:4-7, 17:32-37, 17:48-51", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/biblical/crucifixion2.jpeg', 
      caption: "The Sacrificial Redemption<br><br>\
      On the wooden cross,<br>\
      Sacrifice for all mankind,<br>\
      Love's eternal cost.<br><br>\
      Reference: Gospels of Matthew, Mark, Luke, and John", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/biblical/antsgathering1.jpeg', 
      caption: "Self-Discipline of the Ants<br><br>\
      Ants in summer toil,<br>\
      No leader, but they prepare,<br>\
      Harvest's wisdom stored.<br><br>\
      Reference: Proverbs 6:6-8",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/biblical/stonetablets1.jpeg', 
      caption: "Moses Holds God's Law<br><br>\
      Stone tablets, commands,<br>\
      Guiding hearts with sacred words,<br>\
      God's law, light to life.<br><br>\
      Reference: Exodus 20:1-17", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/biblical/mosespartingsea1.jpeg', 
      caption: "Moses Parts the Red Sea<br><br>\
      Red Sea's mighty part,<br>\
      Moses' faith, a path revealed,<br>\
      Freedom's waves embrace.<br><br>\
      Reference: Exodus 14:21-22, 14:26-28", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/biblical/jesus-walkingonwater1.jpeg', 
      caption: "Jesus Walking on Water<br><br>\
      On water, He walked,<br>\
      Faith defying earthly laws,<br>\
      Christ, our guiding light.<br><br>\
      Reference: Matthew 14:22-33", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/biblical/mosesburningbush1.jpeg', 
      caption: "Moses Encounters a Burning Bush<br><br>\
      Bush aflame yet unburnt,<br>\
      Moses and God's sacred call,<br>\
      Holy ground revealed.<br><br>\
      Reference: Exodus Exodus 3:1-14", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/biblical/birdtrap1.jpeg', 
      caption: "A Bird Avoids a Trap It Sees<br><br>\
      Bird's keen eye prevails,<br>\
      Traps of ill gain, seen and shunned,<br>\
      Wisdom guides its flight.<br><br>\
      Reference: Proverbs 1:17-19 ", 
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
          Pop Culture
        </h1>
        <p className='text-gray-600'>
          Explore our collection of biblically-inspired artworks. Each image below
          showcases a unique perspective on iconic figures and moments from the bible, including references.  Click images to enlarge.
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
                      className='caption'
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
                      className='caption'
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

export default BiblicalGallery;