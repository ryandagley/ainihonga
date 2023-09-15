import Link from 'next/link';

const GalleryLink = ({ title, description, imageSrc, href }) => (
  <div className='gallery-link'>
    <Link legacyBehavior href={href}>
      <a>
      <div className='gallery-content' style={{ padding: '18px', textAlign: 'center' }}>
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
        <img src={imageSrc} alt={title} className="hover-scale"  style={{ display: 'block', margin: '0 auto' }}/>
      </a>
    </Link>
  </div>
);

const Gallery = () => {
  const galleries = [
    {
      title: 'Pop Culture',
      description: 'An assorted collection of Pop Culture.',
      imageSrc: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/popculture/popculture-collage-1.jpeg',
      href: '/gallery/popculture',
    },
    {
      title: 'US Presidents',
      description: 'US Presidents in the order of their regime.',
      imageSrc: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/presidents-collage-1.jpeg',
      href: '/gallery/presidents',
    },
    {
      title: 'The Bible',
      description: 'Reimagining stories from the Bible.',
      imageSrc: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/biblical/bible-collage-1.jpeg',
      href: '/gallery/bible',
    },
    {
        title: 'Holidays',
        description: 'Holiday artwork, East meets West.',
        imageSrc: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/holidays/holidays-collage-2.jpeg',
        href: '/gallery/holidays',
    },
    {
        title: 'Slice of Life',
        description: 'Nihonga Visions of a Modern Life.',
        imageSrc: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/dailylife/slice-of-life-collage-1.jpeg',
        href: '/gallery/dailylife',
    },
    /*
    {
        title: 'Gallery 6',
        description: 'Description for Gallery 3.',
        imageSrc: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/presidents-collage-1.jpeg',
        href: '/gallery3',
    },
    {
        title: 'Gallery 7',
        description: 'Description for Gallery 3.',
        imageSrc: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/presidents-collage-1.jpeg',
        href: '/gallery3',
    },
    {
        title: 'Gallery 8',
        description: 'Description for Gallery 3.',
        imageSrc: 'https://ai-nihonga-media.s3.us-west-2.amazonaws.com/presidents/presidents-collage-1.jpeg',
        href: '/gallery3',
    },
      */
    // Add more gallery items as needed
  ];

  return (
    <div id='gallery' className='w-full md:h-screen p-2 flex items-center py-20' >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
      <div className='page-header'>
          <h1>Welcome to the Galleries</h1>
          <p>Our galleries are vibrant tapestries of creative expression, where pop culture, historical significance, and spiritual reflection converge in a harmonious symphony of colors and forms. Explore each gallery as it unveils a unique facet of Nihonga and A.I.'s versatility, capturing the essence of the East and West in every simulated stroke. Join us on this visual journey, where the past and present coalesce, and where art transcends boundaries to inspire and intrigue.</p>
        </div>
        {galleries.map((gallery, index) => (
          <GalleryLink
            key={index}
            title={gallery.title}
            description={gallery.description}
            imageSrc={gallery.imageSrc}
            href={gallery.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;