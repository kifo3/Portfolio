export interface BlogsType {
    id: string;
    excerpt: string;
    slug: string;
    title: string;
    image: {
      url: string;
    }
    link: {
      link: string;
    }
    createdAt: Date;
    description: {
      html: string;
    };
    author: {
      name:string;
      avatar: {
        url: string;
      };
    };
    category: {
      label: string;
      slug: string;
    };
    
}