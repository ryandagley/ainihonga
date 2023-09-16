import React from 'react'
import { useState } from 'react';


const PopCultureGallery = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const images = [
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/taylorswift1.jpeg', 
      caption: "Music Superstar Taylor Swift<br><br>\
      Taylor's songs ignite,<br>\
      Lyrics of love and moonlight,<br>\
      Swift's star shines so bright.",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/gundam1.jpeg', 
      caption: "Defender of Japan, Mobile Suit Gundam<br><br>\
      Gundam's towering might,<br>\
      Futuristic battles in flight,<br>\
      Robot warriors unite.",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/spongebob1.jpeg', 
      caption: "Spongebob Squarepants, resident of Bikini Bottom<br><br>\
      SpongeBob's joyful heart,<br>\
      Beneath the sea, plays his part,<br>\
      Laughter's work of art.",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/elonmusk1.jpeg', 
      caption: "Top-dog of Multiple Tech Giants, Elon Musk<br><br>\
      Elon's vision bold,<br>\
      Space and tech tales to be told,<br>\
      Innovator's role.",
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/dwightschrute1.jpeg', 
      caption: "Assistant to the Regional Manager, Dwight Schrute<br><br>\
      Dwight's beets and odd schemes,<br>\
      Assistant to regional dreams,<br>\
      The Office's themes.",
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/supermario1.jpeg', 
      caption: "Videogame Hero Super Mario<br><br>\
      Plumber's red cap soars,<br>\
      Mushrooms, pipes, and coins galore,<br>\
      Mario's world roars.",
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/joerogan1.jpeg', 
      caption: "Famed Podcaster and Comedian Joe Rogan<br><br>\
      Podcast host's insight,<br>\
      Conversations take their flight,<br>\
      Rogan's voice ignites.",
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/mcdonaldslogo1.jpeg', 
      caption: "Fast-food Giant McDonald's<br><br>\
      Golden arches gleam,<br>\
      Burgers sizzle, fries supreme,<br>\
      McDonald's dream team.", 
      text: 'Project 1 Overview' },
    { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/friends-ross1.jpeg', 
      caption: "Friends' Ross Geller played by David Schwimmer<br><br>\
      Comic and caring,<br>\
      Friendship's anchor, Ross's role,<br>\
      Central Perk's embrace.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/koth-hankandpeggyhill1.jpeg', 
      caption: "Hank and Peggy Hill of King of the Hill<br><br>\
      Propane and values,<br>\
      Hank Hill's life in Arlen's hills,<br>\
      \"Yep, I tell you what.\"", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/davechappelle1.jpeg', 
      caption: "Hilarious Stand-up Dave Chappelle<br><br>\
      Dave's humor profound,<br>\
      Laughs and insights all around,<br>\
      Chappelle's wit renowned.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/friends-joey1.jpeg', 
      caption: "Friends' Joey Tribbiani played by Matt LeBlanc<br><br>\
      Propane and values,<br>\
      Hank Hill's life in Arlen's hills,<br>\
      \"Yep, I tell you what.\"", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/frankreynolds1.jpeg', 
      caption: "It's Always Sunny in Philadelphia's Frank Reynolds<br><br>\
      Joey, with a smile,<br>\
      Chasing dreams in New York's style,<br>\
      Friends forever, dial.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/twitterlogo1.jpeg', 
      caption: "Twitter Logo Reimagined, not X<br><br>\
      Tweets in the ether,<br>\
      Thoughts and news, fleeting and fleet,<br>\
      Twitter's voices meet.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/redridinghood1.jpeg', 
      caption: "Little Red Riding Hood<br><br>\
      Red hood in the woods,<br>\
      Wary eyes in solitude,<br>\
      Wolf's hunger subdued.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/ronswanson1.jpeg', 
      caption: "Parks and Recreation's Ron Swanson<br><br>\
      Ron Swanson, strong willed,<br>\
      Bacon, whisky, humor skilled,<br>\
      Parks and Rec, fulfilled.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/puffandjackie1.jpeg', 
      caption: "Puff the Magic Dragon and Jackie Paper<br><br>\
      Jackie and Puff play,<br>\
      In the land of Honah Lee,<br>\
      Childhood's dreams at bay.", 
      text: 'Project 1 Overview' },
      { src: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/itcrowd-moss1.jpeg', 
      caption: "The IT Crowd's Moss<br><br>\
      Moss, geeky and wise,<br>\
      In the IT Crowd, he thrives,<br>\
      Tech chaos, he drives.", 
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
          Explore our collection of pop culture-inspired artworks. Each image below
          showcases a unique perspective on iconic figures and moments in pop
          culture history.
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
export default PopCultureGallery;