import type { Schema, Attribute } from '@strapi/strapi';

export interface ImageDisplayImage extends Schema.Component {
  collectionName: 'components_image_display_images';
  info: {
    displayName: 'display_image';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ImageImage extends Schema.Component {
  collectionName: 'components_image_images';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'image.display-image': ImageDisplayImage;
      'image.image': ImageImage;
    }
  }
}
