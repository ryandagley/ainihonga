import React from 'react'
import { useState } from 'react';


const HolidaysGallery = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const images = [
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/holidays/santaclaus1.jpeg', 
      caption: "Santa Claus: Ready for Christmas<br><br>\
      Santa's list is long,<br>\
      Spreading cheer, right from the throng,<br>\
      Singing carol's song.",
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/holidays/santaclaus2.jpeg', 
      caption: "Santa Claus in Hokusai Style<br><br>\
      Reindeer in the sky,<br>\
      Santa's sleigh soars high and sly,<br>\
      Children's dreams awry.",
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/holidays/mothersday-1.jpeg', 
      caption: "Mommy and Daughter on Mother's Day<br><br>\
      In Mom's loving arms,<br>\
      Unconditional grace flows,<br>\
      Her heart's warm embrace.", 
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/holidays/fathersday-1.jpeg', 
      caption: "Daddy and Daughter on Father's Day<br><br>\
      On Father's strong shoulders,<br>\
      Guiding hand and wisdom's grace,<br>\
      Love in every space.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/holidays/presidentsday-1.jpeg', 
      caption: "George and Abe Meet on President's Day<br><br>\
      Presidents we hail,<br>\
      Leaders past and present's tale,<br>\
      History's detail.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/holidays/thanksgiving1.jpeg', 
      caption: "Celebrating Thanksgiving with a Turkey (七面鳥)<br><br>\
      Golden turkey roast,<br>\
      Family gathers, we toast,<br>\
      Thanksgiving's grand host.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/holidays/valentinescupid.jpeg', 
      caption: "A Valentine from Cupid<br><br>\
      Cupid's arrow flies,<br>\
      Love's sweet bond in heart's surprise,<br>\
      Valentine's sunrise.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/holidays/mlk1.jpeg', 
      caption: "Remembering Martin Luther King Jr.<br><br>\
      Martin Luther King,<br>\
      Dreams of justice, freedom ring,<br>\
      Legacy takes wing.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/holidays/halloween-kids2.jpeg', 
      caption: "Children Dressed in their Halloween Scariest<br><br>\
      Children in costume,<br>\
      Trick-or-treat, laughter consumes,<br>\
      Halloween's full bloom.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/holidays/easterbunny1.jpeg', 
      caption: "Easter Bunny Preparing Eggs<br><br>\
      Easter bunny hops,<br>\
      Hidden eggs in grassy stops,<br>\
      Joy in every plop.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/holidays/groundhogday1.jpeg', 
      caption: "Townsfolk Hoping for the End of Winter<br><br>\
      Groundhog peeks with care,<br>\
      Shadow cast or skies are fair,<br>\
      Spring's fate, we're aware.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/holidays/flagday1.jpeg', 
      caption: "A Flag Day Card<br><br>\
      Flag in the sunlight,<br>\
      Colors bold, a nation's pride,<br>\
      Flag Day's honor bright.", 
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
          Holidays
        </h1>
        <p className='text-gray-600'>
          Explore our collection of holiday inspired artwork. Click to enlarge.
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
export default HolidaysGallery;