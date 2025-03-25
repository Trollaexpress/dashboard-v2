import {NotificationActions} from '../types/notifications';
import {DashboardUserRole} from './dashboard-user-roles';

export type RatingT = 1 | 2 | 3 | 4 | 5;
export type UserStatus = 'Pending' | 'Verified' | 'Rejected';
export type UserCategory =
  | 'shipper'
  | 'transporter/agent'
  | 'broker'
  | 'truck-owner';
export type ExtraTripStatus = 'Collecting Bids' | 'Bid Received';
export type TripStatus =
  | 'Created'
  | 'Pending'
  | 'Confirmed'
  | 'Assigned'
  | 'On The Way'
  | 'Reached Pickup'
  | 'Started'
  | 'Reached Delivery'
  | 'Completed'
  | 'Closed';
export type QuatationStatus = 'Pending' | 'Confirmed';
export type VehicleBodyType = 'Open' | 'Container' | 'Flat';

export type BidAmountType = 'Fixed' | 'Per MT';

export type Location = {
  latitude: number;
  longitude: number;
};
export type GpsType = {
  latitude: number;
  longitude: number;
  speed: number;
  timestamp: number;
  altitude: number;
  accuracy: number;
  heading: number;
};

export type Quotation = {
  transporter_id: string;
  pickup_date: string;
  amount: number;
  status: QuatationStatus;
  time: string;
  _id: string;
};

export type Settings = {
  loader_version_code?: string;
  loader_mandatory_version_code?: string;
  transporter_version_code?: string;
  transporter_mandatory_version_code?: string;
  app_support_contact_number?: string;
};
export type MapDirectionTypes =
  | 'current-location-to-pickup'
  | 'current-to-delivery';

export type DashboardUser = {
  _id: string;
  name: string;
  email: string;
  role: DashboardUserRole;
  status: UserStatus;
  createdAt: string;
};
export type UserType = {
  documents: {
    address_proof_type: null | string;
    id_proof_type: null | string;
    address_proof_front: null | string;
    id_proof: null | string;
    gst_number: null | string;
    pan_number: null | string;
    name_in_bank: null | string;
    account_number: null | string;
    ifsc_code: null | string;
    upi_id: null | string;
    address_proof_back: null | string;
    company_gst_certificate: null | string;
    company_gst_type: null | string;
  };
  profile: null | string;
  _id: string;
  mobile_primary: number | string;
  user_name: string;
  person_name: string;
  mobile_secondary: null | number | string;
  email: string;
  status: UserStatus;
  address: string;
  profile_pic: null | string;
  createdAt: string;
  verified_by: string | null;
  state: string | null;
  district: string | null;
  user_category: UserCategory | '';
};

export type NotificationData = {
  action?: NotificationActions;
  icon_url?: string;
  load_no?: string;
};
export type Notification = {
  title: string;
  message: string;
  data: NotificationData;
  _id: string;
  timestamps: string;
};
export type DriverTripObj = {
  _id: string;
  mobile_primary: number;
  user_name: string;
  person_name: string;
  mobile_secondary: null | number;
  address: string;
  profile_pic: string;
};
export type VehicleTripObj = {
  _id: string;
  rc_number: string;
  owner_name: string;
  load_capacity: string;
  body_type: string;
  vehicle_type: string;
  vehicle_image: string;
  gps: GpsType;
  updatedAt: string;
};

export type Load = {
  _id: string;
  loader: string;
  pickup: {
    address: string;
    lat: number;
    lng: number;
    consignor: string;
    contact_number: number | null | string;
  };
  delivery: {
    address: string;
    lat: number;
    lng: number;
    consignee: string;
    contact_number: null | number | string;
  };
  vehicle_type: string;
  body_type: VehicleBodyType | '';
  material_type: string;
  consignment_insured: boolean;
  weight: string;
  value: string;
  visible: boolean;
  expected_pickup_date: string;
  remark: string | undefined;
  load_no: number | string;
  createdAt: string;
  updatedAt: string;
  expected_freight: string;
};

export type Documents = {
  e_way_bill?: null | string;
  load_receipt?: null | string;
  weight_slip?: null | string;
  invoice?: null | string;
  proof_of_delivery?: null | string;
};

export type Rating = {
  rating: {
    loader: number | null | undefined;
    transporter: number | null | undefined;
  };
};
export type Timeline = {
  confirmed_at?: string;
  assigned_at?: string;
  driver_accepted_at?: string;
  reached_pickup_at?: string;
  started_at?: string;
  reached_delivery_at?: string;
  completed_at?: string;
  closed_at?: string;
};

export type Values = {
  confirmation_details: {
    status: string;
  };
  delivery_otp: string;
  pickup_otp: string;
  delivery_otp_verified: boolean;
  pickup_otp_verified: boolean;
  timeline: Timeline;
};

export type Transporter = {
  _id: string;
  mobile_primary: number;
  user_name: string;
  person_name: string;
};
export type Driver = {
  _id: string;
  mobile_primary: number;
  user_name: string;
  person_name: string;
  mobile_secondary: null | number;
  address: string;
  profile_pic: string;
};
export type Vehicle = {
  _id: string;
  rc_number: string;
  owner_name: string;
  load_capacity: string;
  body_type: VehicleBodyType;
  vehicle_image: string;
  gps: GpsType;
  updatedAt: string;
};

export interface AllTrips {
  _id: string;
  load_id: string;
  loader_id: string;
  status: TripStatus;
  load: Load;
}

export interface PendingTrips {
  _id: string;
  load: Load;
  quotation: Quotation;
  total_quotation_count: number;
}
export interface ConfirmedTrips {
  _id: string;
  load_id: string;
  loader_id: string;
  transporter_id: string;
  status: TripStatus;
  created_date: string;
  documents: Documents;
  quotation: Quotation;
  values: Values;
  updated_by: string;
  load: Load;
  transporter: Transporter;
  vehicle?: VehicleTripObj;
  driver?: DriverTripObj;
}
export interface RunningTrip {
  _id: string;
  status: TripStatus;
  load: Load;
  transporter: Transporter;
  vehicle: Vehicle;
  driver: Driver;
}
export interface CompletedTrip {
  _id: string;
  load_id: string;
  loader_id: string;
  transporter_id: string;
  status: TripStatus;
  created_date: string;
  updated_by: string;
  documents: Documents;
  quotation: Quotation;
  values: Values & Rating & Timeline;
  load: Load;
  transporter: Transporter;
  vehicle: Vehicle;
  driver: Driver;
}

export interface Blog {
  blog_id: number;
  is_published: number;
  title: string;
  slug: string;
  image: string;
  cat_names: string;
  description: string;
  author: string;
  meta_description: string;
  meta_keywords: string;
  meta_url: string;
  created_at: string;
  updated_at: string;
}

export interface Bids {
  _id: string;
  quotation: Quotation;
  transporter: {
    _id: string;
    user_name: string;
    person_name: string;
    rating?: RatingT;
  };
}
export interface VehicleTypes {
  _id: string;
  vehicle_type: string;
  capacity: number;
  body_type: string;
  tyre: number;
  length: number;
  visible: true;
  updated_by: string;
  createdAt: string;
}
export interface ISupportConversation {
  message: string;
  read: false;
  _id: string;
  timestamps: string;
  sender?: string;
}
export interface SupportConversation {
  _id: string;
  user_id: string;
  admin_unread_messages: number;
  createdAt: string;
  updatedAt: string;
  user_unread_messages: number;
  last_message_sender_id: string;
  last_message_timestamp: string;
  conversations: ISupportConversation[];
}
