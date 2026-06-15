import type { Schema, Struct } from '@strapi/strapi';

export interface FooterColumns extends Struct.ComponentSchema {
  collectionName: 'components_footer_columns';
  info: {
    displayName: 'columns';
  };
  attributes: {
    columnlink: Schema.Attribute.Component<'header.navlink', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterFooterlogo extends Struct.ComponentSchema {
  collectionName: 'components_footer_footerlogos';
  info: {
    displayName: 'footerlogo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tagline: Schema.Attribute.String;
  };
}

export interface HeaderNavlink extends Struct.ComponentSchema {
  collectionName: 'components_header_navlinks';
  info: {
    displayName: 'navlink';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SectionBrandShowcase extends Struct.ComponentSchema {
  collectionName: 'components_section_brand_showcases';
  info: {
    displayName: 'brand-showcase';
  };
  attributes: {
    brands: Schema.Attribute.Relation<'oneToMany', 'api::brand.brand'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionCategoryShowcase extends Struct.ComponentSchema {
  collectionName: 'components_section_category_showcases';
  info: {
    displayName: 'category-showcase';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_section_cta_banners';
  info: {
    displayName: 'cta-banner';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionFeaturedProducts extends Struct.ComponentSchema {
  collectionName: 'components_section_featured_products';
  info: {
    displayName: 'featured-products';
  };
  attributes: {
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionHero extends Struct.ComponentSchema {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    badge: Schema.Attribute.String;
    button: Schema.Attribute.Component<'shared.button', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionPageHero extends Struct.ComponentSchema {
  collectionName: 'components_section_page_heroes';
  info: {
    displayName: 'pageHero';
  };
  attributes: {
    description: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SectionRichContent extends Struct.ComponentSchema {
  collectionName: 'components_section_rich_contents';
  info: {
    displayName: 'rich-content';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedCategoryCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_category_cards';
  info: {
    displayName: 'category-card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedDropdown extends Struct.ComponentSchema {
  collectionName: 'components_shared_dropdowns';
  info: {
    displayName: 'dropdown';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    dropdown: Schema.Attribute.Component<'shared.dropdown', true>;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedLogolink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logolinks';
  info: {
    displayName: 'logolink';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.columns': FooterColumns;
      'footer.footerlogo': FooterFooterlogo;
      'header.navlink': HeaderNavlink;
      'section.brand-showcase': SectionBrandShowcase;
      'section.category-showcase': SectionCategoryShowcase;
      'section.cta-banner': SectionCtaBanner;
      'section.featured-products': SectionFeaturedProducts;
      'section.hero': SectionHero;
      'section.page-hero': SectionPageHero;
      'section.rich-content': SectionRichContent;
      'shared.button': SharedButton;
      'shared.category-card': SharedCategoryCard;
      'shared.dropdown': SharedDropdown;
      'shared.link': SharedLink;
      'shared.logolink': SharedLogolink;
    }
  }
}
