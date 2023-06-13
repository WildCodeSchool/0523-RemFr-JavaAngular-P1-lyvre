export interface IBook {
    id: number;
    name: string;
    author: string;
    genre: string[];
    image: string;
    pages: number;
    upvote: number;
    downvote: number;
    progress: number;
}

export interface RecordBookBox {
    datasetid: string;
    recordid: string;
    fields: RecordFields;
    geometry: Geometry;
    record_timestamp: string;
}

export interface RecordFields {
    longitude: string;
    geo_shape: GeoShape;
    commune: string;
    code_postal: string;
    osm_id: string;
    gestionnaire: string;
    geo_point_2d: [number, number];
    adresse: string;
    nom: string;
    date_maj: string;
    code_insee: string;
    latitude: string;
    photo: string;
}

export interface GeoShape {
    coordinates: [number, number];
    type: string;
}

export interface Geometry {
    type: string;
    coordinates: [number, number];
}

export interface Interface1Parameters {
    dataset: string;
    rows: number;
    start: number;
    facet: string[];
    format: string;
    timezone: string;
}

export interface FacetGroup {
    name: string;
    facets: Facet[];
}

export interface Facet {
    name: string;
    count: number;
    state: string;
    path: string;
}

export interface Interface1Response {
    facet_groups: FacetGroup[];
}

export interface ApiBookBox{
    nhits: number;
    parameters: Interface1Parameters;
    records: RecordBookBox[];
    facet_groups: FacetGroup;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    reading_in_progress: IBook[];
    reading_finished: IBook[];
}

export interface FeatureCollection {
  type: string;
  version: string;
  features: Feature[];
  attribution: string;
  licence: string;
  query: string;
  limit: number;
}

export interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: string;
  coordinates: [number, number];
}

export interface Properties {
  label: string;
  score: number;
  housenumber: string;
  id: string;
  type: string;
  name: string;
  postcode: string;
  citycode: string;
  x: number;
  y: number;
  city: string;
  context: string;
  importance: number;
  street: string;
}
