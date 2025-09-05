export interface ListItem {
    label: string;
    value: any;
    icon?: string;
    badge?: string | number;
    disabled?: boolean;
  }

export interface NewsResponse {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author?:      string;
    title:       string;
    description?: string;
    url:         string;
    urlToImage?: string;
    publishedAt: Date;
    content? :   string;
}

export interface Source {
    id?:  string;
    name: string;
}

export interface articlesByCategoryAndPage{
    [key: string]: {
        page: number;
        articles: Article[];
    }



}

export interface Country {
    name: string;
    unicodeFlag: string;
  }
  
  export interface ApiResponse {
    error: boolean;
    msg: string;
    data: Country[];
  }