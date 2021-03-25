interface Format {
  name: String;
  hash: String;
  ext: String;
  mime: String;
  width: Number;
  height: Number;
  size: Number;
  path: String;
  url: String;
}

interface ImageFormats {
  thumbnail: Format;
  large: Format;
  medium: Format;
  small: Format;
}

interface SingleImage {
  id: Number;
  name: String;
  alternativeText: String;
  caption: String;
  width: Number;
  height: Number;
  formats: ImageFormats;
  hash: String;
  ext: String;
  mime: String;
  size: Number;
  url: String;
  previewUrl: String;
  provider: String;
  provider_metadata: String;
  created_at: String;
  updated_at: String;
}

interface ProductComponent {
  __component: String;
  id: Number;
  title: String;
  description: String;
  link: String;
  image: SingleImage[];
}

interface Post {
  id: Number;
  body: String;
  title: String;
  slug: String;
  published_at: String;
  created_at: String;
  updated_at: String;
  products: ProductComponent[];
  introImage: SingleImage;
}

export default Post;
