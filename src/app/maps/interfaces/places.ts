export interface PlacesResponse {
  type:        string;
  query:       string[];
  features:    Feature[];
  attribution: string;
}

export interface Feature {
  id:            string;
  type:          string;
  place_type:    string[];
  relevance:     number;
  properties:    Properties;
  text_es:       string;
  place_name_es: string;
  text:          string;
  place_name:    string;
  center:        number[];
  geometry:      Geometry;
  context:       Context[];
  language_es?:  string;
  language?:     string;
}

export interface Context {
  id:           string;
  text_es:      string;
  text:         string;
  wikidata?:    Wikidata;
  language_es?: Language;
  language?:    Language;
  short_code?:  ShortCode;
}

export enum Language {
  Es = "es",
}

export enum ShortCode {
  Us = "us",
  UsCa = "US-CA",
}

export enum Wikidata {
  Q110739 = "Q110739",
  Q16553 = "Q16553",
  Q30 = "Q30",
  Q99 = "Q99",
}

export interface Geometry {
  coordinates: number[];
  type:        string;
}

export interface Properties {
  foursquare: string;
  landmark:   boolean;
  address:    string;
  category:   string;
}
