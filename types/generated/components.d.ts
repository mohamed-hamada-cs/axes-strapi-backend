import type { Schema, Attribute } from '@strapi/strapi';

export interface LinkVideoUrl extends Schema.Component {
  collectionName: 'components_link_video_urls';
  info: {
    displayName: 'Video URL';
    icon: 'link';
  };
  attributes: {
    URL: Attribute.String & Attribute.Required;
    Description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'link.video-url': LinkVideoUrl;
    }
  }
}
