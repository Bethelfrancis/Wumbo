// data.js
import download from './images/download.png';
import play from './images/play-circle.png';
import design from './images/designer.png';
import coder from './images/coder.png';
import market from './images/marketer.png';

export const buttonImages = [
  {
    name: 'Download Now',
    images: download,
    bg: '#3B82F6',
    color: '#fff'
  },
  {
    name: 'See in Action',
    images: play,
    bg: '#C6DBFF',
    color: '#3B82F6'
  }
];

export const ulArray = [
  {
    name: 'Top',
    id: '#top'
  },
  {
    name: 'For Everyone',
    id: '#for-everyone'
  },
  {
    name: 'Features',
    id: '#features'
  },
  {
    name: 'Preview',
    id: '#preview'
  },
  {
    name: 'License',
    id: '#license'
  }
];

export const items = [
  {
    title: 'For Designer',
    image: design,
    description: 'Busy designers want to share insights, such as tips, tricks or other types of insights. Focus on content not on design.'
  },
  {
    title: 'For Coder',
    image: coder,
    description: 'Coders who want to share snippets, tools, or tips and tricks. No design skills required: just duplicate, edit and export!'
  },
  {
    title: 'For Marketer',
    image: market,
    description: 'Promote the product in an elegant and attractive way to get more attention from potential customers. Just duplicate and export!'
  }
];

export const featuresDesign = [
  {
    title: 'Insights',
    description: 'create content that contains insights on design, coding, or recommendations for the best tourist attractions.'
  },
  {
    title: 'Promotion',
    description: 'get more potential customers by making product or service promotions in a more attractive way.'
  },
  {
    title: 'Much More',
    description: 'design more types of content with Social Feeds and increase followers on your social media accounts.'
  }
];

export const featuresDesignTwo = [
    {
      title: 'Font Family',
      description: "use your favorite font in the design template you choose. Figma has dozens of fonts, don't worry about font!"
    },
    {
      title: 'Colors',
      description: 'adjust the color of the template design with the brand you have. Set a solid color or gradient, both of which are easy to customize.'
    },
    {
      title: 'Much More',
      description: 'set more properties to suit your desires, all the designs own proportions optimized for social media.'
    }
  ];
