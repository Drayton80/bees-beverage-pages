export interface BreweryInfo {
  id: string;
  name: string;
  brewery_type: string;
  street: string | null;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state: string;
  county_province: string | null;
  postal_code: number;
  country: string;
  longitude: string | null;
  latitude: string | null;
  phone: number;
  website_url: string | null;
  updated_at: Date;
  created_at: Date;
}
