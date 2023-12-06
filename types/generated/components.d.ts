import type { Schema, Attribute } from '@strapi/strapi';

export interface IntegrationsPagos extends Schema.Component {
  collectionName: 'components_integrations_pagos';
  info: {
    displayName: 'Pagos';
    icon: 'database';
    description: '';
  };
  attributes: {
    product: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    price: Attribute.String & Attribute.Required & Attribute.DefaultTo<'0.00'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'integrations.pagos': IntegrationsPagos;
    }
  }
}
